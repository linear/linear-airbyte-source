/* eslint-disable @typescript-eslint/no-explicit-any */
import { AirbyteConfig, AirbyteLogger, AirbyteStreamBase, StreamKey, SyncMode } from "faros-airbyte-cdk";
import { Dictionary } from "ts-essentials";
import axios from "axios";

export class Issue extends AirbyteStreamBase {
  public constructor(protected readonly logger: AirbyteLogger, private readonly config: AirbyteConfig) {
    super(logger);
  }

  public getJsonSchema(): Dictionary<any, string> {
    return require("../../resources/schemas/issue.json");
  }
  public get primaryKey(): StreamKey {
    return ["id"];
  }
  public get cursorField(): string | string[] {
    return "updatedAt";
  }

  public async *readRecords(
    syncMode: SyncMode,
    cursorField?: string[],
    streamSlice?: Dictionary<any, string>,
    streamState?: Dictionary<any, string>
  ): AsyncGenerator<Dictionary<any, string>, any, unknown> {
    const lastCutoff: number = streamState?.cutoff ?? 0;
    if (lastCutoff > Date.now()) {
      this.logger.info(`Last cutoff ${lastCutoff} is greater than current time`);
      return;
    }

    const token = this.config.token;
    const result = await axios.get<any[]>("https://24454957ce48.ngrok.io/export/issue", {
      headers: { Authorization: token },
    });
    for (const record of result.data) {
      yield record;
    }
  }

  public getUpdatedState(currentStreamState: Dictionary<any>, latestRecord: Dictionary<any>): Dictionary<any> {
    return {
      cutoff: Math.max(currentStreamState.cutoff ?? 0, new Date(latestRecord.updatedAt).getTime() ?? 0),
    };
  }
}

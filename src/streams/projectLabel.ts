import { AirbyteLogger, AirbyteStreamBase, StreamKey } from "faros-airbyte-cdk";
import { Dictionary } from "ts-essentials";
import { LinearClient } from "../client/LinearClient";
import { ProjectLabel as ProjectLabelModel } from "../client/types";
export class ProjectLabel extends AirbyteStreamBase {
  public constructor(
    protected readonly logger: AirbyteLogger,
    private readonly client: LinearClient
  ) {
    super(logger);
  }

  public getJsonSchema(): Dictionary<unknown> {
    return require("../../resources/schemas/projectLabel.json");
  }
  public get primaryKey(): StreamKey {
    return ["id"];
  }
  public get cursorField(): string | string[] {
    return [];
  }

  public async *readRecords(): AsyncGenerator<ProjectLabelModel> {
    const result = await this.client.projectLabels();
    for (const record of result) {
      yield record;
    }
  }
}

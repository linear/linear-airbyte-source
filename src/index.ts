import { Command } from "commander";
import {
  AirbyteConfig,
  AirbyteLogger,
  AirbyteSourceBase,
  AirbyteSourceRunner,
  AirbyteSpec,
  AirbyteStreamBase,
  Spec,
} from "faros-airbyte-cdk";
import VError from "verror";
import { LinearClient } from "./client/LinearClient";

import { Issue } from "./streams";
import { Organization } from "./streams/organization";

/** The main entry point. */
export function mainCommand(): Command {
  const logger = new AirbyteLogger();
  const source = new LinearSource(logger);
  return new AirbyteSourceRunner(logger, source).mainCommand();
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const spec: Spec = require("../resources/spec.json");

class LinearSource extends AirbyteSourceBase {
  public async spec(): Promise<AirbyteSpec> {
    return new AirbyteSpec(spec);
  }

  public async checkConnection(config: AirbyteConfig): Promise<[boolean, VError]> {
    const client = new LinearClient({ apiToken: config.token });
    try {
      await client.organizations();
      return [true, null];
    } catch (err) {
      return [false, new VError({ cause: err as Error }, "Error", {})];
    }
  }

  public streams(config: AirbyteConfig): AirbyteStreamBase[] {
    const client = new LinearClient({ apiToken: config.token });
    return [new Issue(this.logger, client), new Organization(this.logger, client)];
  }
}

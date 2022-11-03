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
import { Attachment } from "./streams/attachment";
import { AuditEntry } from "./streams/auditEntry";
import { Comment } from "./streams/comment";
import { Cycle } from "./streams/cycle";
import { Document } from "./streams/document";
import { IssueHistory } from "./streams/issueHistory";
import { IssueLabel } from "./streams/issueLabel";
import { IssueRelation } from "./streams/issueRelation";
import { Organization } from "./streams/organization";
import { Project } from "./streams/project";
import { ProjectLink } from "./streams/projectLink";
import { ProjectUpdate } from "./streams/projectUpdate";
import { Team } from "./streams/team";
import { TeamKey } from "./streams/teamKey";
import { TeamMembership } from "./streams/teamMemebership";
import { User } from "./streams/user";
import { WorkflowState } from "./streams/workflowState";

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

  public async checkConnection(
    config: AirbyteConfig
  ): Promise<[boolean, VError]> {
    const client = new LinearClient({ apiKey: config.apiKey }, this.logger);
    try {
      await client.checkConnection();
      return [true, null];
    } catch (err) {
      return [false, new VError({ cause: err as Error }, "Error", {})];
    }
  }

  public streams(config: AirbyteConfig): AirbyteStreamBase[] {
    const client = new LinearClient({ apiKey: config.apiKey }, this.logger);
    return [
      new Issue(this.logger, client),
      new Organization(this.logger, client),
      new Team(this.logger, client),
      new TeamKey(this.logger, client),
      new TeamMembership(this.logger, client),
      new User(this.logger, client),
      new Project(this.logger, client),
      new ProjectUpdate(this.logger, client),
      new ProjectLink(this.logger, client),
      new IssueHistory(this.logger, client),
      new IssueLabel(this.logger, client),
      new IssueRelation(this.logger, client),
      new Attachment(this.logger, client),
      new AuditEntry(this.logger, client),
      new Comment(this.logger, client),
      new Cycle(this.logger, client),
      new WorkflowState(this.logger, client),
      new Document(this.logger, client),
    ];
  }
}

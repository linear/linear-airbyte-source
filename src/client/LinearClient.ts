import axios from "axios";
import { Issue, Organization } from "./types";

/**
 * Linear client configuration
 */
export type Config = {
  // access token provided in linear airbyte integration
  apiToken: string;
};

export type EntityType = "issue" | "organization";

const LINEAR_API_BASE_URL = "https://api.linear.app/export";
/**
 * Thin client on top of the rest export api to fetch different resources
 */
export class LinearClient {
  public constructor(private readonly config: Config) {}

  public async issues(): Promise<Issue[]> {
    return await this.fetchEntities<Issue>("issue");
  }

  public async organizations(): Promise<Organization[]> {
    return await this.fetchEntities<Organization>("organization");
  }

  private async fetchEntities<T>(entityType: EntityType): Promise<T[]> {
    const response = await axios({
      method: "GET",
      baseURL: LINEAR_API_BASE_URL,
      url: entityType,
      headers: {
        Authorization: this.config.apiToken,
      },
    });
    return response.data;
  }
}

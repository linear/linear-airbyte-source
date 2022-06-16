import axios from "axios";
import { Issue, Organization } from "./types";

const LINEAR_API_BASE_URL = "https://api.linear.app/export";

/**
 * Linear client configuration
 */
export type Config = {
  // access token provided in linear airbyte integration
  apiToken: string;
};

/*
 * The supported entity types.
 */
export type EntityType = "issue" | "organization";
/**
 * Thin client on top of the rest export api to fetch different resources.
 */
export class LinearClient {
  public constructor(private readonly config: Config) {}

  /**
   * @returns List of all issues in organization.
   */
  public async issues(): Promise<Issue[]> {
    return await this.fetchEntities<Issue>("issue");
  }

  /**
   * @returns Organization associated with api token. The response will always contain a single organization.
   */
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

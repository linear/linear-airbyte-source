# Linear

## Sync overview

This source can sync data for the [Linear API](https://developers.linear.app/docs/). It supports only Full Refresh syncs.

### Output schema

This Source is capable of syncing the following Streams:

- [Issue](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/Issue)
- [Organization](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/Organization)
- [Team](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/Team)
- [User](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/User)
- [ProjectMilestone](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/ProjectMilestone)
- [Project](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/Project)
- [ProjectStatus](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/ProjectStatus)
- [Initiative](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/Initiative)
- [InitiativeToProject](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/InitiativeToProject)
- [Integration Resource](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/IntegrationResource)
- [Attachment](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/Attachment)
- [Audit Entry](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/AuditEntry)
- [Comment](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/Comment)
- [Cycle](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/Cycle)
- [Workflow State](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L12325)
- [Document](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L1438)
- [DocumentContent](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/DocumentContent)
- [EntityExternalLink](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/EntityExternalLink)
- [IssueHistory](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/IssueHistory)
- [IssueLabel](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/IssueLabel)
- [IssueRelation](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/IssueRelation)
- [ProjectUpdate](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/ProjectUpdate)
- [TeamKey](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/TeamKey)
- [TeamMembership](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/TeamMembership)
- [Customer](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/Customer)
- [CustomerNeed](https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/CustomerNeed)

### Data type mapping

| Integration Type         | Airbyte Type | Notes |
| :----------------------- | :----------- | :---- |
| `string`                 | `string`     |       |
| `int`, `float`, `number` | `number`     |       |
| `date`                   | `date`       |       |
| `datetime`               | `datetime`   |       |
| `array`                  | `array`      |       |
| `object`                 | `object`     |       |

### Features

| Feature           | Supported?\(Yes/No\) | Notes |
| :---------------- | :------------------- | :---- |
| Full Refresh Sync | Yes                  |       |
| Incremental Sync  | No                   |       |
| Namespaces        | No                   |       |

### Performance considerations

The connector is restricted by Linear's Data Export API, which is only available to the Plus paid plan.

The Linear connector should not run into Linear API limitations under normal usage. Please [create an issue](https://github.com/airbytehq/airbyte/issues) if you see any rate limit issues that are not automatically retried successfully.

## Getting started

### Requirements

- Integration API Token (generated from the [settings](https://linear.app/settings/integrations/airbyte) page)
- Linear Enterprise plan subscription
- Docker [desktop](https://www.docker.com/products/docker-desktop/)

### Setup guide

Please follow these details [steps](https://linear.app/docs/airbyte).

## Changelog

| Version | Date | Pull Request | Subject |
| :------ | :--- | :----------- | :------ |

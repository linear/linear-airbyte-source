# Linear

## Sync overview

This source can sync data for the [Linear API](https://developers.linear.app/docs/). It supports only Full Refresh syncs.

### Output schema

This Source is capable of syncing the following Streams:

- [Issues](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L2519)
- [Organization](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L7098)
- [Teams](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L10249)
- [User](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L11949)
- [Milestone](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L4205)
- [Project](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L7667)
- [ProjectStatus](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L7667)
- [Initiative](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L6853)
- [InitiativeToProject](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L6853)
- [Integration Resource](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L2297)
- [Attachment](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L144)
- [Audit Entry](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L336)
- [Comment](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L622)
- [Cycle](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L1105)
- [Workflow State](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L12325)
- [Document](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L1438)

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
- Linear Plus plan subscription
- Docker and Ai
- Docker [desktop](https://www.docker.com/products/docker-desktop/)

### Setup guide

Please follow these details [steps](https://linear.app/docs/airbyte).

## Changelog

| Version | Date | Pull Request | Subject |
| :------ | :--- | :----------- | :------ |

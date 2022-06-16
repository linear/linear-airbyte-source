# Linear

## Sync overview

This source can sync data for the [Linear API](https://developers.linear.app/docs/). It supports only Full Refresh syncs.

### Output schema

This Source is capable of syncing the following Streams:

* [Issues](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L2519)
* [Organization](https://github.com/linear/linear/blob/master/packages/sdk/src/schema.graphql#L7098)

### Data type mapping

| Integration Type | Airbyte Type | Notes |
| :--- | :--- | :--- |
| `string` | `string` |  |
| `int`, `float`, `number` | `number` |  |
| `date` | `date` |  |
| `datetime` | `datetime` |  |
| `array` | `array` |  |
| `object` | `object` |  |

### Features

| Feature | Supported?\(Yes/No\) | Notes |
| :--- | :--- | :--- |
| Full Refresh Sync | Yes |  |
| Incremental Sync | No |  |
| Namespaces | No |  |

### Performance considerations

The connector is restricted by Linear's Data Export API, which is only available to paid plans.

The Linear connector should not run into Linear API limitations under normal usage. Please [create an issue](https://github.com/airbytehq/airbyte/issues) if you see any rate limit issues that are not automatically retried successfully.

## Getting started

### Requirements

* Personal Access Token

### Setup guide

Please follow these [steps](https://developers.linear.app/docs/graphql/working-with-the-graphql-api#personal-api-keys) to obtain Personal Access Token for your account.

## Changelog

| Version | Date | Pull Request | Subject |
| :--- | :--- | :--- | :--- |


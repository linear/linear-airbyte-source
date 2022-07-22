## Integration tests

The source is tested against an Airbyte-provided docker image that runs a series of tests to validate all the commands of a source.

The acceptance-test-config.yml points to several other json files that enable the tests for each of the source commands. See the (Source Acceptance Tests Reference)[https://docs.airbyte.com/connector-development/testing-connectors/source-acceptance-tests-reference/] for how those files are used. These files should be committed to the repo.

### Running tests locally

In order to run tests locally follow the step:

- copy `test_files/config_template.json` into `test_files/config.json` and replace `${LINEAR_AIRBYTE_KEY}` with an integration key for your workspace. See https://linear.app/docs/airbyte for more details
- run `docker pull airbyte/source-acceptance-test` to download airbyte's docker image with integration test suite
- build source connector docker image `docker build -t linear-airbyte-source .`
- execute tests `docker run --rm -t -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/tmp -v $(pwd):/test_input airbyte/source-acceptance-test:latest --acceptance-test-config /test_input`
// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import { ExportFormsCommand, ExportFormsCommandInput, ExportFormsCommandOutput } from "../commands/ExportFormsCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AmplifyUIBuilderClient,
  input: ExportFormsCommandInput,
  ...args: any
): Promise<ExportFormsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ExportFormsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateExportForms(
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ExportFormsCommandInput,
  ...additionalArguments: any
): Paginator<ExportFormsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ExportFormsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof AmplifyUIBuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AmplifyUIBuilder | AmplifyUIBuilderClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

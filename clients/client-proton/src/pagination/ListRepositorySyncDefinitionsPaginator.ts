// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRepositorySyncDefinitionsCommand,
  ListRepositorySyncDefinitionsCommandInput,
  ListRepositorySyncDefinitionsCommandOutput,
} from "../commands/ListRepositorySyncDefinitionsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListRepositorySyncDefinitionsCommandInput,
  ...args: any
): Promise<ListRepositorySyncDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRepositorySyncDefinitionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRepositorySyncDefinitions(
  config: ProtonPaginationConfiguration,
  input: ListRepositorySyncDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListRepositorySyncDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRepositorySyncDefinitionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof ProtonClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Proton | ProtonClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

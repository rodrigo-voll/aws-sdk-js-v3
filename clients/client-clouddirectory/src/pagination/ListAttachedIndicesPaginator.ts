// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListAttachedIndicesCommand,
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
} from "../commands/ListAttachedIndicesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListAttachedIndicesCommandInput,
  ...args: any
): Promise<ListAttachedIndicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttachedIndicesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAttachedIndices(
  config: CloudDirectoryPaginationConfiguration,
  input: ListAttachedIndicesCommandInput,
  ...additionalArguments: any
): Paginator<ListAttachedIndicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttachedIndicesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListAnalyzedResourcesCommand,
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
} from "../commands/ListAnalyzedResourcesCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AccessAnalyzerClient,
  input: ListAnalyzedResourcesCommandInput,
  ...args: any
): Promise<ListAnalyzedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnalyzedResourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAnalyzedResources(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListAnalyzedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListAnalyzedResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnalyzedResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AccessAnalyzerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AccessAnalyzer | AccessAnalyzerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

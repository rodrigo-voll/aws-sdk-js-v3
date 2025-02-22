// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEntityRecognizersCommand,
  ListEntityRecognizersCommandInput,
  ListEntityRecognizersCommandOutput,
} from "../commands/ListEntityRecognizersCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListEntityRecognizersCommandInput,
  ...args: any
): Promise<ListEntityRecognizersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntityRecognizersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEntityRecognizers(
  config: ComprehendPaginationConfiguration,
  input: ListEntityRecognizersCommandInput,
  ...additionalArguments: any
): Paginator<ListEntityRecognizersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntityRecognizersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ComprehendClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Comprehend | ComprehendClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

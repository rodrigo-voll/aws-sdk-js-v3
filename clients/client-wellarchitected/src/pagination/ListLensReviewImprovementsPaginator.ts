// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListLensReviewImprovementsCommand,
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
} from "../commands/ListLensReviewImprovementsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WellArchitectedClient,
  input: ListLensReviewImprovementsCommandInput,
  ...args: any
): Promise<ListLensReviewImprovementsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLensReviewImprovementsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLensReviewImprovements(
  config: WellArchitectedPaginationConfiguration,
  input: ListLensReviewImprovementsCommandInput,
  ...additionalArguments: any
): Paginator<ListLensReviewImprovementsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLensReviewImprovementsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WellArchitectedClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WellArchitected | WellArchitectedClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

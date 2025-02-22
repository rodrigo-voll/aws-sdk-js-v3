// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListClassificationScopesCommand,
  ListClassificationScopesCommandInput,
  ListClassificationScopesCommandOutput,
} from "../commands/ListClassificationScopesCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Macie2Client,
  input: ListClassificationScopesCommandInput,
  ...args: any
): Promise<ListClassificationScopesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClassificationScopesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListClassificationScopes(
  config: Macie2PaginationConfiguration,
  input: ListClassificationScopesCommandInput,
  ...additionalArguments: any
): Paginator<ListClassificationScopesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClassificationScopesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof Macie2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie2 | Macie2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

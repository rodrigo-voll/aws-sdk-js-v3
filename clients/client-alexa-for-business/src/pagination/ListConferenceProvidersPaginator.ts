// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListConferenceProvidersCommand,
  ListConferenceProvidersCommandInput,
  ListConferenceProvidersCommandOutput,
} from "../commands/ListConferenceProvidersCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListConferenceProvidersCommandInput,
  ...args: any
): Promise<ListConferenceProvidersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConferenceProvidersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListConferenceProviders(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListConferenceProvidersCommandInput,
  ...additionalArguments: any
): Paginator<ListConferenceProvidersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConferenceProvidersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

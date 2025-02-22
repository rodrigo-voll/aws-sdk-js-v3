// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListProblemsCommand,
  ListProblemsCommandInput,
  ListProblemsCommandOutput,
} from "../commands/ListProblemsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ApplicationInsightsClient,
  input: ListProblemsCommandInput,
  ...args: any
): Promise<ListProblemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProblemsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProblems(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListProblemsCommandInput,
  ...additionalArguments: any
): Paginator<ListProblemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProblemsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationInsightsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationInsights | ApplicationInsightsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

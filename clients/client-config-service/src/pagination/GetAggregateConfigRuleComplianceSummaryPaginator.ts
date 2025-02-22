// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetAggregateConfigRuleComplianceSummaryCommand,
  GetAggregateConfigRuleComplianceSummaryCommandInput,
  GetAggregateConfigRuleComplianceSummaryCommandOutput,
} from "../commands/GetAggregateConfigRuleComplianceSummaryCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetAggregateConfigRuleComplianceSummaryCommandInput,
  ...args: any
): Promise<GetAggregateConfigRuleComplianceSummaryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAggregateConfigRuleComplianceSummaryCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetAggregateConfigRuleComplianceSummary(
  config: ConfigServicePaginationConfiguration,
  input: GetAggregateConfigRuleComplianceSummaryCommandInput,
  ...additionalArguments: any
): Paginator<GetAggregateConfigRuleComplianceSummaryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAggregateConfigRuleComplianceSummaryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

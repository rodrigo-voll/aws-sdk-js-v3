// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeConfigRulesCommand,
  DescribeConfigRulesCommandInput,
  DescribeConfigRulesCommandOutput,
} from "../commands/DescribeConfigRulesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeConfigRulesCommandInput,
  ...args: any
): Promise<DescribeConfigRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConfigRulesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeConfigRules(
  config: ConfigServicePaginationConfiguration,
  input: DescribeConfigRulesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConfigRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeConfigRulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
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

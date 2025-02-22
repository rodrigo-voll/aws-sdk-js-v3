// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeListenersCommand,
  DescribeListenersCommandInput,
  DescribeListenersCommandOutput,
} from "../commands/DescribeListenersCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticLoadBalancingV2Client,
  input: DescribeListenersCommandInput,
  ...args: any
): Promise<DescribeListenersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeListenersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeListeners(
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeListenersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeListenersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeListenersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof ElasticLoadBalancingV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticLoadBalancingV2 | ElasticLoadBalancingV2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { BatchClient } from "../BatchClient";
import {
  DescribeJobQueuesCommand,
  DescribeJobQueuesCommandInput,
  DescribeJobQueuesCommandOutput,
} from "../commands/DescribeJobQueuesCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BatchClient,
  input: DescribeJobQueuesCommandInput,
  ...args: any
): Promise<DescribeJobQueuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeJobQueuesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeJobQueues(
  config: BatchPaginationConfiguration,
  input: DescribeJobQueuesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeJobQueuesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeJobQueuesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof BatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Batch | BatchClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

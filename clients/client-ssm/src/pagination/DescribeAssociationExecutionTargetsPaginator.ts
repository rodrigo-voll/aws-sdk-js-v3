// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeAssociationExecutionTargetsCommand,
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
} from "../commands/DescribeAssociationExecutionTargetsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeAssociationExecutionTargetsCommandInput,
  ...args: any
): Promise<DescribeAssociationExecutionTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAssociationExecutionTargetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAssociationExecutionTargets(
  config: SSMPaginationConfiguration,
  input: DescribeAssociationExecutionTargetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAssociationExecutionTargetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAssociationExecutionTargetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

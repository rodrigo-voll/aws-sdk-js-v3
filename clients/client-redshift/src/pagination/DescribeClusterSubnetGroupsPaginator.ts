// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeClusterSubnetGroupsCommand,
  DescribeClusterSubnetGroupsCommandInput,
  DescribeClusterSubnetGroupsCommandOutput,
} from "../commands/DescribeClusterSubnetGroupsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeClusterSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterSubnetGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeClusterSubnetGroups(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterSubnetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterSubnetGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClusterSubnetGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

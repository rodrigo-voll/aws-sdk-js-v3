// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeDBEngineVersionsCommand,
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "../commands/DescribeDBEngineVersionsCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NeptuneClient,
  input: DescribeDBEngineVersionsCommandInput,
  ...args: any
): Promise<DescribeDBEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBEngineVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDBEngineVersions(
  config: NeptunePaginationConfiguration,
  input: DescribeDBEngineVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBEngineVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBEngineVersionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof NeptuneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Neptune | NeptuneClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

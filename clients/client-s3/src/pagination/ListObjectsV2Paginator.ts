// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
} from "../commands/ListObjectsV2Command";
import { S3Client } from "../S3Client";
import { S3PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: S3Client,
  input: ListObjectsV2CommandInput,
  ...args: any
): Promise<ListObjectsV2CommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectsV2Command(input), ...args);
};
/**
 * @public
 */
export async function* paginateListObjectsV2(
  config: S3PaginationConfiguration,
  input: ListObjectsV2CommandInput,
  ...additionalArguments: any
): Paginator<ListObjectsV2CommandOutput> {
  // ToDo: replace with actual type instead of typeof input.ContinuationToken
  let token: typeof input.ContinuationToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListObjectsV2CommandOutput;
  while (hasNext) {
    input.ContinuationToken = token;
    input["MaxKeys"] = config.pageSize;
    if (config.client instanceof S3Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3 | S3Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextContinuationToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

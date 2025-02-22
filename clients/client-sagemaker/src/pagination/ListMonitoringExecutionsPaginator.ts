// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMonitoringExecutionsCommand,
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput,
} from "../commands/ListMonitoringExecutionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListMonitoringExecutionsCommandInput,
  ...args: any
): Promise<ListMonitoringExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMonitoringExecutionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListMonitoringExecutions(
  config: SageMakerPaginationConfiguration,
  input: ListMonitoringExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListMonitoringExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMonitoringExecutionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetReadinessCheckResourceStatusCommand,
  GetReadinessCheckResourceStatusCommandInput,
  GetReadinessCheckResourceStatusCommandOutput,
} from "../commands/GetReadinessCheckResourceStatusCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Route53RecoveryReadinessClient,
  input: GetReadinessCheckResourceStatusCommandInput,
  ...args: any
): Promise<GetReadinessCheckResourceStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetReadinessCheckResourceStatusCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetReadinessCheckResourceStatus(
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: GetReadinessCheckResourceStatusCommandInput,
  ...additionalArguments: any
): Paginator<GetReadinessCheckResourceStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetReadinessCheckResourceStatusCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53RecoveryReadinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53RecoveryReadiness | Route53RecoveryReadinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

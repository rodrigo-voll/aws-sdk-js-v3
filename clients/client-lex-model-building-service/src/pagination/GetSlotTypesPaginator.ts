// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetSlotTypesCommand,
  GetSlotTypesCommandInput,
  GetSlotTypesCommandOutput,
} from "../commands/GetSlotTypesCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetSlotTypesCommandInput,
  ...args: any
): Promise<GetSlotTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSlotTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetSlotTypes(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetSlotTypesCommandInput,
  ...additionalArguments: any
): Paginator<GetSlotTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetSlotTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelBuildingServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LexModelBuildingService | LexModelBuildingServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchDevicesCommand,
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput,
} from "../commands/SearchDevicesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchDevicesCommandInput,
  ...args: any
): Promise<SearchDevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchDevicesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchDevices(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchDevicesCommandInput,
  ...additionalArguments: any
): Paginator<SearchDevicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchDevicesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

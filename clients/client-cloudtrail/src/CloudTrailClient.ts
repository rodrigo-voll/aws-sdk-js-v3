// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Decoder as __Decoder,
  Encoder as __Encoder,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
} from "@smithy/types";

import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CancelQueryCommandInput, CancelQueryCommandOutput } from "./commands/CancelQueryCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import {
  CreateEventDataStoreCommandInput,
  CreateEventDataStoreCommandOutput,
} from "./commands/CreateEventDataStoreCommand";
import { CreateTrailCommandInput, CreateTrailCommandOutput } from "./commands/CreateTrailCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import {
  DeleteEventDataStoreCommandInput,
  DeleteEventDataStoreCommandOutput,
} from "./commands/DeleteEventDataStoreCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteTrailCommandInput, DeleteTrailCommandOutput } from "./commands/DeleteTrailCommand";
import {
  DeregisterOrganizationDelegatedAdminCommandInput,
  DeregisterOrganizationDelegatedAdminCommandOutput,
} from "./commands/DeregisterOrganizationDelegatedAdminCommand";
import { DescribeQueryCommandInput, DescribeQueryCommandOutput } from "./commands/DescribeQueryCommand";
import { DescribeTrailsCommandInput, DescribeTrailsCommandOutput } from "./commands/DescribeTrailsCommand";
import { GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import { GetEventDataStoreCommandInput, GetEventDataStoreCommandOutput } from "./commands/GetEventDataStoreCommand";
import { GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput } from "./commands/GetEventSelectorsCommand";
import { GetImportCommandInput, GetImportCommandOutput } from "./commands/GetImportCommand";
import {
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput,
} from "./commands/GetInsightSelectorsCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { GetTrailCommandInput, GetTrailCommandOutput } from "./commands/GetTrailCommand";
import { GetTrailStatusCommandInput, GetTrailStatusCommandOutput } from "./commands/GetTrailStatusCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import {
  ListEventDataStoresCommandInput,
  ListEventDataStoresCommandOutput,
} from "./commands/ListEventDataStoresCommand";
import { ListImportFailuresCommandInput, ListImportFailuresCommandOutput } from "./commands/ListImportFailuresCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "./commands/ListPublicKeysCommand";
import { ListQueriesCommandInput, ListQueriesCommandOutput } from "./commands/ListQueriesCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListTrailsCommandInput, ListTrailsCommandOutput } from "./commands/ListTrailsCommand";
import { LookupEventsCommandInput, LookupEventsCommandOutput } from "./commands/LookupEventsCommand";
import { PutEventSelectorsCommandInput, PutEventSelectorsCommandOutput } from "./commands/PutEventSelectorsCommand";
import {
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput,
} from "./commands/PutInsightSelectorsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  RegisterOrganizationDelegatedAdminCommandInput,
  RegisterOrganizationDelegatedAdminCommandOutput,
} from "./commands/RegisterOrganizationDelegatedAdminCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  RestoreEventDataStoreCommandInput,
  RestoreEventDataStoreCommandOutput,
} from "./commands/RestoreEventDataStoreCommand";
import {
  StartEventDataStoreIngestionCommandInput,
  StartEventDataStoreIngestionCommandOutput,
} from "./commands/StartEventDataStoreIngestionCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import { StartLoggingCommandInput, StartLoggingCommandOutput } from "./commands/StartLoggingCommand";
import { StartQueryCommandInput, StartQueryCommandOutput } from "./commands/StartQueryCommand";
import {
  StopEventDataStoreIngestionCommandInput,
  StopEventDataStoreIngestionCommandOutput,
} from "./commands/StopEventDataStoreIngestionCommand";
import { StopImportCommandInput, StopImportCommandOutput } from "./commands/StopImportCommand";
import { StopLoggingCommandInput, StopLoggingCommandOutput } from "./commands/StopLoggingCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import {
  UpdateEventDataStoreCommandInput,
  UpdateEventDataStoreCommandOutput,
} from "./commands/UpdateEventDataStoreCommand";
import { UpdateTrailCommandInput, UpdateTrailCommandOutput } from "./commands/UpdateTrailCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AddTagsCommandInput
  | CancelQueryCommandInput
  | CreateChannelCommandInput
  | CreateEventDataStoreCommandInput
  | CreateTrailCommandInput
  | DeleteChannelCommandInput
  | DeleteEventDataStoreCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteTrailCommandInput
  | DeregisterOrganizationDelegatedAdminCommandInput
  | DescribeQueryCommandInput
  | DescribeTrailsCommandInput
  | GetChannelCommandInput
  | GetEventDataStoreCommandInput
  | GetEventSelectorsCommandInput
  | GetImportCommandInput
  | GetInsightSelectorsCommandInput
  | GetQueryResultsCommandInput
  | GetResourcePolicyCommandInput
  | GetTrailCommandInput
  | GetTrailStatusCommandInput
  | ListChannelsCommandInput
  | ListEventDataStoresCommandInput
  | ListImportFailuresCommandInput
  | ListImportsCommandInput
  | ListPublicKeysCommandInput
  | ListQueriesCommandInput
  | ListTagsCommandInput
  | ListTrailsCommandInput
  | LookupEventsCommandInput
  | PutEventSelectorsCommandInput
  | PutInsightSelectorsCommandInput
  | PutResourcePolicyCommandInput
  | RegisterOrganizationDelegatedAdminCommandInput
  | RemoveTagsCommandInput
  | RestoreEventDataStoreCommandInput
  | StartEventDataStoreIngestionCommandInput
  | StartImportCommandInput
  | StartLoggingCommandInput
  | StartQueryCommandInput
  | StopEventDataStoreIngestionCommandInput
  | StopImportCommandInput
  | StopLoggingCommandInput
  | UpdateChannelCommandInput
  | UpdateEventDataStoreCommandInput
  | UpdateTrailCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddTagsCommandOutput
  | CancelQueryCommandOutput
  | CreateChannelCommandOutput
  | CreateEventDataStoreCommandOutput
  | CreateTrailCommandOutput
  | DeleteChannelCommandOutput
  | DeleteEventDataStoreCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteTrailCommandOutput
  | DeregisterOrganizationDelegatedAdminCommandOutput
  | DescribeQueryCommandOutput
  | DescribeTrailsCommandOutput
  | GetChannelCommandOutput
  | GetEventDataStoreCommandOutput
  | GetEventSelectorsCommandOutput
  | GetImportCommandOutput
  | GetInsightSelectorsCommandOutput
  | GetQueryResultsCommandOutput
  | GetResourcePolicyCommandOutput
  | GetTrailCommandOutput
  | GetTrailStatusCommandOutput
  | ListChannelsCommandOutput
  | ListEventDataStoresCommandOutput
  | ListImportFailuresCommandOutput
  | ListImportsCommandOutput
  | ListPublicKeysCommandOutput
  | ListQueriesCommandOutput
  | ListTagsCommandOutput
  | ListTrailsCommandOutput
  | LookupEventsCommandOutput
  | PutEventSelectorsCommandOutput
  | PutInsightSelectorsCommandOutput
  | PutResourcePolicyCommandOutput
  | RegisterOrganizationDelegatedAdminCommandOutput
  | RemoveTagsCommandOutput
  | RestoreEventDataStoreCommandOutput
  | StartEventDataStoreIngestionCommandOutput
  | StartImportCommandOutput
  | StartLoggingCommandOutput
  | StartQueryCommandOutput
  | StopEventDataStoreIngestionCommandOutput
  | StopImportCommandOutput
  | StopLoggingCommandOutput
  | UpdateChannelCommandOutput
  | UpdateEventDataStoreCommandOutput
  | UpdateTrailCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link @aws-sdk/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * The {@link @aws-sdk/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type CloudTrailClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CloudTrailClient class constructor that set the region, credentials and other options.
 */
export interface CloudTrailClientConfig extends CloudTrailClientConfigType {}

/**
 * @public
 */
export type CloudTrailClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CloudTrailClient class. This is resolved and normalized from the {@link CloudTrailClientConfig | constructor configuration interface}.
 */
export interface CloudTrailClientResolvedConfig extends CloudTrailClientResolvedConfigType {}

/**
 * @public
 * <fullname>CloudTrail</fullname>
 *          <p>This is the CloudTrail API Reference. It provides descriptions of actions, data
 *          types, common parameters, and common errors for CloudTrail.</p>
 *          <p>CloudTrail is a web service that records Amazon Web Services API calls for your
 *             Amazon Web Services account and delivers log files to an Amazon S3 bucket. The
 *          recorded information includes the identity of the user, the start time of the Amazon Web Services API call, the source IP address, the request parameters, and the response
 *          elements returned by the service.</p>
 *          <note>
 *             <p>As an alternative to the API, you can use one of the Amazon Web Services SDKs, which
 *             consist of libraries and sample code for various programming languages and platforms
 *             (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide programmatic access to CloudTrail. For example, the SDKs handle cryptographically signing requests,
 *             managing errors, and retrying requests automatically. For more information about the
 *                Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools to Build on Amazon Web Services</a>.</p>
 *          </note>
 *          <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">CloudTrail
 *          User Guide</a> for information about the data that is included with each Amazon Web Services API call listed in the log files.</p>
 *          <p>
 *             <b>Actions available for CloudTrail trails</b>
 *          </p>
 *          <p>The following actions are available for CloudTrail trails.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>AddTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateTrail</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteTrail</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeTrails</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetEventSelectors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetInsightSelectors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetTrail</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetTrailStatus</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTrails</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutEventSelectors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutInsightSelectors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RemoveTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartLogging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopLogging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateTrail</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Actions available for CloudTrail event data stores</b>
 *          </p>
 *          <p>The following actions are available for CloudTrail event data stores.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>AddTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CancelQuery</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateEventDataStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteEventDataStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeQuery</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetEventDataStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetQueryResults</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListEventDataStores</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListQueries</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RemoveTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RestoreEventDataStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartEventDataStoreIngestion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartImport</a>
 *                </p>
 *                <p>The following additional actions are available for imports.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a>GetImport</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>ListImportFailures</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>ListImports</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>StopImport</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartQuery</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartEventDataStoreIngestion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateEventDataStore</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Actions available for CloudTrail channels</b>
 *          </p>
 *          <p>The following actions are available for CloudTrail channels.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>AddTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateChannel</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteChannel</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteResourcePolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetChannel</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetResourcePolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListChannels</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutResourcePolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RemoveTags</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateChannel</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Actions available for managing delegated administrators</b>
 *          </p>
 *          <p>The following actions are available for adding or a removing a delegated administrator to manage an Organizations organization’s CloudTrail resources.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeregisterOrganizationDelegatedAdmin</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RegisterOrganizationDelegatedAdmin</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CloudTrailClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudTrailClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudTrailClient class. This is resolved and normalized from the {@link CloudTrailClientConfig | constructor configuration interface}.
   */
  readonly config: CloudTrailClientResolvedConfig;

  constructor(configuration: CloudTrailClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}

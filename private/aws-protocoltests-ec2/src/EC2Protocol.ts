// smithy-typescript generated code
import { createAggregatedClient } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  DatetimeOffsetsCommand,
  DatetimeOffsetsCommandInput,
  DatetimeOffsetsCommandOutput,
} from "./commands/DatetimeOffsetsCommand";
import {
  EmptyInputAndEmptyOutputCommand,
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "./commands/EmptyInputAndEmptyOutputCommand";
import {
  EndpointOperationCommand,
  EndpointOperationCommandInput,
  EndpointOperationCommandOutput,
} from "./commands/EndpointOperationCommand";
import {
  EndpointWithHostLabelOperationCommand,
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
} from "./commands/EndpointWithHostLabelOperationCommand";
import {
  FractionalSecondsCommand,
  FractionalSecondsCommandInput,
  FractionalSecondsCommandOutput,
} from "./commands/FractionalSecondsCommand";
import {
  GreetingWithErrorsCommand,
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput,
} from "./commands/GreetingWithErrorsCommand";
import {
  HostWithPathOperationCommand,
  HostWithPathOperationCommandInput,
  HostWithPathOperationCommandOutput,
} from "./commands/HostWithPathOperationCommand";
import {
  IgnoresWrappingXmlNameCommand,
  IgnoresWrappingXmlNameCommandInput,
  IgnoresWrappingXmlNameCommandOutput,
} from "./commands/IgnoresWrappingXmlNameCommand";
import {
  NestedStructuresCommand,
  NestedStructuresCommandInput,
  NestedStructuresCommandOutput,
} from "./commands/NestedStructuresCommand";
import {
  NoInputAndOutputCommand,
  NoInputAndOutputCommandInput,
  NoInputAndOutputCommandOutput,
} from "./commands/NoInputAndOutputCommand";
import {
  QueryIdempotencyTokenAutoFillCommand,
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
} from "./commands/QueryIdempotencyTokenAutoFillCommand";
import { QueryListsCommand, QueryListsCommandInput, QueryListsCommandOutput } from "./commands/QueryListsCommand";
import {
  QueryTimestampsCommand,
  QueryTimestampsCommandInput,
  QueryTimestampsCommandOutput,
} from "./commands/QueryTimestampsCommand";
import {
  RecursiveXmlShapesCommand,
  RecursiveXmlShapesCommandInput,
  RecursiveXmlShapesCommandOutput,
} from "./commands/RecursiveXmlShapesCommand";
import {
  SimpleInputParamsCommand,
  SimpleInputParamsCommandInput,
  SimpleInputParamsCommandOutput,
} from "./commands/SimpleInputParamsCommand";
import {
  SimpleScalarXmlPropertiesCommand,
  SimpleScalarXmlPropertiesCommandInput,
  SimpleScalarXmlPropertiesCommandOutput,
} from "./commands/SimpleScalarXmlPropertiesCommand";
import { XmlBlobsCommand, XmlBlobsCommandInput, XmlBlobsCommandOutput } from "./commands/XmlBlobsCommand";
import {
  XmlEmptyBlobsCommand,
  XmlEmptyBlobsCommandInput,
  XmlEmptyBlobsCommandOutput,
} from "./commands/XmlEmptyBlobsCommand";
import {
  XmlEmptyListsCommand,
  XmlEmptyListsCommandInput,
  XmlEmptyListsCommandOutput,
} from "./commands/XmlEmptyListsCommand";
import { XmlEnumsCommand, XmlEnumsCommandInput, XmlEnumsCommandOutput } from "./commands/XmlEnumsCommand";
import { XmlIntEnumsCommand, XmlIntEnumsCommandInput, XmlIntEnumsCommandOutput } from "./commands/XmlIntEnumsCommand";
import { XmlListsCommand, XmlListsCommandInput, XmlListsCommandOutput } from "./commands/XmlListsCommand";
import {
  XmlNamespacesCommand,
  XmlNamespacesCommandInput,
  XmlNamespacesCommandOutput,
} from "./commands/XmlNamespacesCommand";
import {
  XmlTimestampsCommand,
  XmlTimestampsCommandInput,
  XmlTimestampsCommandOutput,
} from "./commands/XmlTimestampsCommand";
import { EC2ProtocolClient, EC2ProtocolClientConfig } from "./EC2ProtocolClient";

const commands = {
  DatetimeOffsetsCommand,
  EmptyInputAndEmptyOutputCommand,
  EndpointOperationCommand,
  EndpointWithHostLabelOperationCommand,
  FractionalSecondsCommand,
  GreetingWithErrorsCommand,
  HostWithPathOperationCommand,
  IgnoresWrappingXmlNameCommand,
  NestedStructuresCommand,
  NoInputAndOutputCommand,
  QueryIdempotencyTokenAutoFillCommand,
  QueryListsCommand,
  QueryTimestampsCommand,
  RecursiveXmlShapesCommand,
  SimpleInputParamsCommand,
  SimpleScalarXmlPropertiesCommand,
  XmlBlobsCommand,
  XmlEmptyBlobsCommand,
  XmlEmptyListsCommand,
  XmlEnumsCommand,
  XmlIntEnumsCommand,
  XmlListsCommand,
  XmlNamespacesCommand,
  XmlTimestampsCommand,
};

export interface EC2Protocol {
  /**
   * @see {@link DatetimeOffsetsCommand}
   */
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DatetimeOffsetsCommandOutput>;
  datetimeOffsets(args: DatetimeOffsetsCommandInput, cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void): void;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void
  ): void;

  /**
   * @see {@link EmptyInputAndEmptyOutputCommand}
   */
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EmptyInputAndEmptyOutputCommandOutput>;
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    cb: (err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void
  ): void;
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link EndpointOperationCommand}
   */
  endpointOperation(
    args: EndpointOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EndpointOperationCommandOutput>;
  endpointOperation(
    args: EndpointOperationCommandInput,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;
  endpointOperation(
    args: EndpointOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link EndpointWithHostLabelOperationCommand}
   */
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EndpointWithHostLabelOperationCommandOutput>;
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link FractionalSecondsCommand}
   */
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FractionalSecondsCommandOutput>;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    cb: (err: any, data?: FractionalSecondsCommandOutput) => void
  ): void;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FractionalSecondsCommandOutput) => void
  ): void;

  /**
   * @see {@link GreetingWithErrorsCommand}
   */
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GreetingWithErrorsCommandOutput>;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;

  /**
   * @see {@link HostWithPathOperationCommand}
   */
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HostWithPathOperationCommandOutput>;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link IgnoresWrappingXmlNameCommand}
   */
  ignoresWrappingXmlName(
    args: IgnoresWrappingXmlNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IgnoresWrappingXmlNameCommandOutput>;
  ignoresWrappingXmlName(
    args: IgnoresWrappingXmlNameCommandInput,
    cb: (err: any, data?: IgnoresWrappingXmlNameCommandOutput) => void
  ): void;
  ignoresWrappingXmlName(
    args: IgnoresWrappingXmlNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IgnoresWrappingXmlNameCommandOutput) => void
  ): void;

  /**
   * @see {@link NestedStructuresCommand}
   */
  nestedStructures(
    args: NestedStructuresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NestedStructuresCommandOutput>;
  nestedStructures(
    args: NestedStructuresCommandInput,
    cb: (err: any, data?: NestedStructuresCommandOutput) => void
  ): void;
  nestedStructures(
    args: NestedStructuresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NestedStructuresCommandOutput) => void
  ): void;

  /**
   * @see {@link NoInputAndOutputCommand}
   */
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NoInputAndOutputCommandOutput>;
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    cb: (err: any, data?: NoInputAndOutputCommandOutput) => void
  ): void;
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NoInputAndOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryIdempotencyTokenAutoFillCommand}
   */
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryIdempotencyTokenAutoFillCommandOutput>;
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    cb: (err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void
  ): void;
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryListsCommand}
   */
  queryLists(args: QueryListsCommandInput, options?: __HttpHandlerOptions): Promise<QueryListsCommandOutput>;
  queryLists(args: QueryListsCommandInput, cb: (err: any, data?: QueryListsCommandOutput) => void): void;
  queryLists(
    args: QueryListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryListsCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryTimestampsCommand}
   */
  queryTimestamps(
    args: QueryTimestampsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryTimestampsCommandOutput>;
  queryTimestamps(args: QueryTimestampsCommandInput, cb: (err: any, data?: QueryTimestampsCommandOutput) => void): void;
  queryTimestamps(
    args: QueryTimestampsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryTimestampsCommandOutput) => void
  ): void;

  /**
   * @see {@link RecursiveXmlShapesCommand}
   */
  recursiveXmlShapes(
    args: RecursiveXmlShapesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecursiveXmlShapesCommandOutput>;
  recursiveXmlShapes(
    args: RecursiveXmlShapesCommandInput,
    cb: (err: any, data?: RecursiveXmlShapesCommandOutput) => void
  ): void;
  recursiveXmlShapes(
    args: RecursiveXmlShapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecursiveXmlShapesCommandOutput) => void
  ): void;

  /**
   * @see {@link SimpleInputParamsCommand}
   */
  simpleInputParams(
    args: SimpleInputParamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimpleInputParamsCommandOutput>;
  simpleInputParams(
    args: SimpleInputParamsCommandInput,
    cb: (err: any, data?: SimpleInputParamsCommandOutput) => void
  ): void;
  simpleInputParams(
    args: SimpleInputParamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimpleInputParamsCommandOutput) => void
  ): void;

  /**
   * @see {@link SimpleScalarXmlPropertiesCommand}
   */
  simpleScalarXmlProperties(
    args: SimpleScalarXmlPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimpleScalarXmlPropertiesCommandOutput>;
  simpleScalarXmlProperties(
    args: SimpleScalarXmlPropertiesCommandInput,
    cb: (err: any, data?: SimpleScalarXmlPropertiesCommandOutput) => void
  ): void;
  simpleScalarXmlProperties(
    args: SimpleScalarXmlPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimpleScalarXmlPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlBlobsCommand}
   */
  xmlBlobs(args: XmlBlobsCommandInput, options?: __HttpHandlerOptions): Promise<XmlBlobsCommandOutput>;
  xmlBlobs(args: XmlBlobsCommandInput, cb: (err: any, data?: XmlBlobsCommandOutput) => void): void;
  xmlBlobs(
    args: XmlBlobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlBlobsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlEmptyBlobsCommand}
   */
  xmlEmptyBlobs(args: XmlEmptyBlobsCommandInput, options?: __HttpHandlerOptions): Promise<XmlEmptyBlobsCommandOutput>;
  xmlEmptyBlobs(args: XmlEmptyBlobsCommandInput, cb: (err: any, data?: XmlEmptyBlobsCommandOutput) => void): void;
  xmlEmptyBlobs(
    args: XmlEmptyBlobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEmptyBlobsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlEmptyListsCommand}
   */
  xmlEmptyLists(args: XmlEmptyListsCommandInput, options?: __HttpHandlerOptions): Promise<XmlEmptyListsCommandOutput>;
  xmlEmptyLists(args: XmlEmptyListsCommandInput, cb: (err: any, data?: XmlEmptyListsCommandOutput) => void): void;
  xmlEmptyLists(
    args: XmlEmptyListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEmptyListsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlEnumsCommand}
   */
  xmlEnums(args: XmlEnumsCommandInput, options?: __HttpHandlerOptions): Promise<XmlEnumsCommandOutput>;
  xmlEnums(args: XmlEnumsCommandInput, cb: (err: any, data?: XmlEnumsCommandOutput) => void): void;
  xmlEnums(
    args: XmlEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlIntEnumsCommand}
   */
  xmlIntEnums(args: XmlIntEnumsCommandInput, options?: __HttpHandlerOptions): Promise<XmlIntEnumsCommandOutput>;
  xmlIntEnums(args: XmlIntEnumsCommandInput, cb: (err: any, data?: XmlIntEnumsCommandOutput) => void): void;
  xmlIntEnums(
    args: XmlIntEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlIntEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlListsCommand}
   */
  xmlLists(args: XmlListsCommandInput, options?: __HttpHandlerOptions): Promise<XmlListsCommandOutput>;
  xmlLists(args: XmlListsCommandInput, cb: (err: any, data?: XmlListsCommandOutput) => void): void;
  xmlLists(
    args: XmlListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlListsCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlNamespacesCommand}
   */
  xmlNamespaces(args: XmlNamespacesCommandInput, options?: __HttpHandlerOptions): Promise<XmlNamespacesCommandOutput>;
  xmlNamespaces(args: XmlNamespacesCommandInput, cb: (err: any, data?: XmlNamespacesCommandOutput) => void): void;
  xmlNamespaces(
    args: XmlNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link XmlTimestampsCommand}
   */
  xmlTimestamps(args: XmlTimestampsCommandInput, options?: __HttpHandlerOptions): Promise<XmlTimestampsCommandOutput>;
  xmlTimestamps(args: XmlTimestampsCommandInput, cb: (err: any, data?: XmlTimestampsCommandOutput) => void): void;
  xmlTimestamps(
    args: XmlTimestampsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: XmlTimestampsCommandOutput) => void
  ): void;
}

/**
 * @public
 * An EC2 query service that sends query requests and XML responses.
 */
export class EC2Protocol extends EC2ProtocolClient implements EC2Protocol {}
createAggregatedClient(commands, EC2Protocol);

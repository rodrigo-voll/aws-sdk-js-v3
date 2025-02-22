// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { ListMessageMoveTasksRequest, ListMessageMoveTasksResult } from "../models/models_0";
import { de_ListMessageMoveTasksCommand, se_ListMessageMoveTasksCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMessageMoveTasksCommand}.
 */
export interface ListMessageMoveTasksCommandInput extends ListMessageMoveTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListMessageMoveTasksCommand}.
 */
export interface ListMessageMoveTasksCommandOutput extends ListMessageMoveTasksResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets the most recent message movement tasks (up to 10) under a specific source
 *             queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ListMessageMoveTasksCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ListMessageMoveTasksCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // ListMessageMoveTasksRequest
 *   SourceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMessageMoveTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListMessageMoveTasksResult
 * //   Results: [ // ListMessageMoveTasksResultEntryList
 * //     { // ListMessageMoveTasksResultEntry
 * //       TaskHandle: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       DestinationArn: "STRING_VALUE",
 * //       MaxNumberOfMessagesPerSecond: Number("int"),
 * //       ApproximateNumberOfMessagesMoved: Number("long"),
 * //       ApproximateNumberOfMessagesToMove: Number("long"),
 * //       FailureReason: "STRING_VALUE",
 * //       StartedTimestamp: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMessageMoveTasksCommandInput - {@link ListMessageMoveTasksCommandInput}
 * @returns {@link ListMessageMoveTasksCommandOutput}
 * @see {@link ListMessageMoveTasksCommandInput} for command's `input` shape.
 * @see {@link ListMessageMoveTasksCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more specified resources don't exist.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 */
export class ListMessageMoveTasksCommand extends $Command<
  ListMessageMoveTasksCommandInput,
  ListMessageMoveTasksCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListMessageMoveTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMessageMoveTasksCommandInput, ListMessageMoveTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMessageMoveTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "ListMessageMoveTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListMessageMoveTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMessageMoveTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMessageMoveTasksCommandOutput> {
    return de_ListMessageMoveTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

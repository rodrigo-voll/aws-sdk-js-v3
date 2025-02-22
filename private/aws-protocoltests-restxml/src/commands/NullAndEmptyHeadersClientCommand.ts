// smithy-typescript generated code
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

import { NullAndEmptyHeadersIO } from "../models/models_0";
import { de_NullAndEmptyHeadersClientCommand, se_NullAndEmptyHeadersClientCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link NullAndEmptyHeadersClientCommand}.
 */
export interface NullAndEmptyHeadersClientCommandInput extends NullAndEmptyHeadersIO {}
/**
 * @public
 *
 * The output of {@link NullAndEmptyHeadersClientCommand}.
 */
export interface NullAndEmptyHeadersClientCommandOutput extends NullAndEmptyHeadersIO, __MetadataBearer {}

/**
 * @public
 * Null and empty headers are not sent over the wire.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, NullAndEmptyHeadersClientCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, NullAndEmptyHeadersClientCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // NullAndEmptyHeadersIO
 *   a: "STRING_VALUE",
 *   b: "STRING_VALUE",
 *   c: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new NullAndEmptyHeadersClientCommand(input);
 * const response = await client.send(command);
 * // { // NullAndEmptyHeadersIO
 * //   a: "STRING_VALUE",
 * //   b: "STRING_VALUE",
 * //   c: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param NullAndEmptyHeadersClientCommandInput - {@link NullAndEmptyHeadersClientCommandInput}
 * @returns {@link NullAndEmptyHeadersClientCommandOutput}
 * @see {@link NullAndEmptyHeadersClientCommandInput} for command's `input` shape.
 * @see {@link NullAndEmptyHeadersClientCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class NullAndEmptyHeadersClientCommand extends $Command<
  NullAndEmptyHeadersClientCommandInput,
  NullAndEmptyHeadersClientCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: NullAndEmptyHeadersClientCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NullAndEmptyHeadersClientCommandInput, NullAndEmptyHeadersClientCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "NullAndEmptyHeadersClientCommand";
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
  private serialize(input: NullAndEmptyHeadersClientCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_NullAndEmptyHeadersClientCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NullAndEmptyHeadersClientCommandOutput> {
    return de_NullAndEmptyHeadersClientCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { AccountDetails, ActionTarget, AdminAccount, AssociationStatus, AutoEnableStandards } from "./models_0";
import {
  AwsSecurityFinding,
  AwsSecurityFindingFilters,
  AwsSecurityFindingIdentifier,
  RecordState,
  RelatedFinding,
  SeverityLabel,
  StandardsSubscription,
  VerificationState,
  WorkflowStatus,
} from "./models_1";
import { SecurityHubServiceException as __BaseException } from "./SecurityHubServiceException";

/**
 * @public
 */
export interface BatchGetSecurityControlsRequest {
  /**
   * <p> A list of security controls (identified with <code>SecurityControlId</code>,
   *             <code>SecurityControlArn</code>, or a mix of both parameters). The security control ID
   *          or Amazon Resource Name (ARN) is the same across standards. </p>
   */
  SecurityControlIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ControlStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ControlStatus = (typeof ControlStatus)[keyof typeof ControlStatus];

/**
 * @public
 * @enum
 */
export const SeverityRating = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type SeverityRating = (typeof SeverityRating)[keyof typeof SeverityRating];

/**
 * @public
 * <p>
 *          A security control in Security Hub describes a security best practice related to a specific resource.
 *       </p>
 */
export interface SecurityControl {
  /**
   * <p>
   *          The unique identifier of a security control across standards. Values for this field typically consist of an Amazon Web Service name and a
   *          number, such as APIGateway.3.
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for a security control across standards, such as
   *             <code>arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1</code>. This
   *          parameter doesn't mention a specific standard. </p>
   */
  SecurityControlArn: string | undefined;

  /**
   * <p>The title of a security control.
   *       </p>
   */
  Title: string | undefined;

  /**
   * <p> The description of a security control across standards. This typically summarizes how
   *             Security Hub evaluates the control and the conditions under which it produces a
   *          failed finding. This parameter doesn't reference a specific standard. </p>
   */
  Description: string | undefined;

  /**
   * <p>
   *          A link to Security Hub documentation that explains how to remediate a failed finding for a security control.
   *       </p>
   */
  RemediationUrl: string | undefined;

  /**
   * <p>
   *          The severity of a security control. For more information about how Security Hub determines control severity, see
   *          <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/controls-findings-create-update.html#control-findings-severity">Assigning severity to control findings</a> in the
   *          <i>Security Hub User Guide</i>.
   *       </p>
   */
  SeverityRating: SeverityRating | string | undefined;

  /**
   * <p>
   *          The status of a security control based on the compliance status of its findings. For more information about how control
   *          status is determined, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/controls-overall-status.html">Determining the overall status of a control from its findings</a> in the
   *          <i>Security Hub User Guide</i>.
   *       </p>
   */
  SecurityControlStatus: ControlStatus | string | undefined;
}

/**
 * @public
 * @enum
 */
export const UnprocessedErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INVALID_INPUT: "INVALID_INPUT",
  LIMIT_EXCEEDED: "LIMIT_EXCEEDED",
  NOT_FOUND: "NOT_FOUND",
} as const;

/**
 * @public
 */
export type UnprocessedErrorCode = (typeof UnprocessedErrorCode)[keyof typeof UnprocessedErrorCode];

/**
 * @public
 * <p> Provides details about a security control for which a response couldn't be returned. </p>
 */
export interface UnprocessedSecurityControl {
  /**
   * <p> The control (identified with <code>SecurityControlId</code>,
   *             <code>SecurityControlArn</code>, or a mix of both parameters) for which a response
   *          couldn't be returned. </p>
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *          The error code for the unprocessed security control.
   *       </p>
   */
  ErrorCode: UnprocessedErrorCode | string | undefined;

  /**
   * <p>
   *          The reason why the security control was unprocessed.
   *       </p>
   */
  ErrorReason?: string;
}

/**
 * @public
 */
export interface BatchGetSecurityControlsResponse {
  /**
   * <p>
   *          An array that returns the identifier, Amazon Resource Name (ARN), and other details about a security control.
   *          The same information is returned whether the request includes <code>SecurityControlId</code> or <code>SecurityControlArn</code>.
   *       </p>
   */
  SecurityControls: SecurityControl[] | undefined;

  /**
   * <p>
   *          A security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) for which
   *          details cannot be returned.
   *       </p>
   */
  UnprocessedIds?: UnprocessedSecurityControl[];
}

/**
 * @public
 * <p>
 *          An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters)
 *          and the Amazon Resource Name (ARN) of a standard. The security control ID or ARN is the same across standards.
 *       </p>
 */
export interface StandardsControlAssociationId {
  /**
   * <p>
   *          The unique identifier (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) of a security
   *          control across standards.
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *          The ARN of a standard.
   *       </p>
   */
  StandardsArn: string | undefined;
}

/**
 * @public
 */
export interface BatchGetStandardsControlAssociationsRequest {
  /**
   * <p>
   *          An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard.
   *          This field is used to query the enablement status of a control in a specified standard. The security control ID or ARN is the same across standards.
   *       </p>
   */
  StandardsControlAssociationIds: StandardsControlAssociationId[] | undefined;
}

/**
 * @public
 * <p> Provides details about a control's enablement status in a specified standard. </p>
 */
export interface StandardsControlAssociationDetail {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of a security standard.
   *       </p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>
   *          The unique identifier of a security control across standards. Values for this field typically consist of an Amazon Web Service
   *          name and a number, such as APIGateway.3.
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * <p> The ARN of a security control across standards, such as
   *             <code>arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1</code>. This
   *          parameter doesn't mention a specific standard. </p>
   */
  SecurityControlArn: string | undefined;

  /**
   * <p>
   *          Specifies whether a control is enabled or disabled in a specified standard.
   *       </p>
   */
  AssociationStatus: AssociationStatus | string | undefined;

  /**
   * <p>
   *          The requirement that underlies a control in the compliance framework related to the standard.
   *       </p>
   */
  RelatedRequirements?: string[];

  /**
   * <p>
   *          The time at which the enablement status of the control in the specified standard was last updated.
   *       </p>
   */
  UpdatedAt?: Date;

  /**
   * <p>
   *          The reason for updating the enablement status of a control in a specified standard.
   *       </p>
   */
  UpdatedReason?: string;

  /**
   * <p>
   *          The title of a control. This field may reference a specific standard.
   *       </p>
   */
  StandardsControlTitle?: string;

  /**
   * <p>
   *          The description of a control. This typically summarizes how Security Hub evaluates the control and the
   *          conditions under which it produces a failed finding. This parameter may reference a specific standard.
   *       </p>
   */
  StandardsControlDescription?: string;

  /**
   * <p> Provides the input parameter that Security Hub uses to call the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateStandardsControl.html">UpdateStandardsControl</a> API. This API can be used to enable or disable a control
   *          in a specified standard. </p>
   */
  StandardsControlArns?: string[];
}

/**
 * @public
 * <p> Provides details about which
 *          control's enablement status couldn't be retrieved in a specified standard when calling <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>. This parameter also provides details
 *          about why the request was unprocessed. </p>
 */
export interface UnprocessedStandardsControlAssociation {
  /**
   * <p> An array with one or more objects that includes a security control (identified with
   *             <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both
   *          parameters) and the Amazon Resource Name (ARN) of a standard. This parameter shows the
   *          specific controls for which the enablement status couldn't be retrieved in specified standards when
   *          calling <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>. </p>
   */
  StandardsControlAssociationId: StandardsControlAssociationId | undefined;

  /**
   * <p>The error code for the unprocessed standard and control association.
   *       </p>
   */
  ErrorCode: UnprocessedErrorCode | string | undefined;

  /**
   * <p>The reason why the standard and control association was unprocessed. </p>
   */
  ErrorReason?: string;
}

/**
 * @public
 */
export interface BatchGetStandardsControlAssociationsResponse {
  /**
   * <p>Provides the enablement status of a security control in a specified standard and other details for the control in relation to
   *          the specified standard.
   *       </p>
   */
  StandardsControlAssociationDetails: StandardsControlAssociationDetail[] | undefined;

  /**
   * <p>
   *          A security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) whose enablement
   *          status in a specified standard cannot be returned.
   *       </p>
   */
  UnprocessedAssociations?: UnprocessedStandardsControlAssociation[];
}

/**
 * @public
 */
export interface BatchImportFindingsRequest {
  /**
   * <p>A list of findings to import. To successfully import a finding, it must follow the
   *             <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services Security Finding Format</a>. Maximum of 100 findings per request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;
}

/**
 * @public
 * <p>The list of the findings that cannot be imported. For each finding, the list provides
 *          the error.</p>
 */
export interface ImportFindingsError {
  /**
   * <p>The identifier of the finding that could not be updated.</p>
   */
  Id: string | undefined;

  /**
   * <p>The code of the error returned by the <code>BatchImportFindings</code> operation.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message of the error returned by the <code>BatchImportFindings</code>
   *          operation.</p>
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchImportFindingsResponse {
  /**
   * <p>The number of findings that failed to import.</p>
   */
  FailedCount: number | undefined;

  /**
   * <p>The number of findings that were successfully imported.</p>
   */
  SuccessCount: number | undefined;

  /**
   * <p>The list of findings that failed to import.</p>
   */
  FailedFindings?: ImportFindingsError[];
}

/**
 * @public
 * <p>The updated note.</p>
 */
export interface NoteUpdate {
  /**
   * <p>The updated note text.</p>
   */
  Text: string | undefined;

  /**
   * <p>The principal that updated the note.</p>
   */
  UpdatedBy: string | undefined;
}

/**
 * @public
 * <p>Updates to the severity information for a finding.</p>
 */
export interface SeverityUpdate {
  /**
   * <p>The normalized severity for the finding. This attribute is to be deprecated in favor of
   *             <code>Label</code>.</p>
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>,
   *             <code>Label</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>0 - <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>1–39 - <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>40–69 - <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>70–89 - <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>90–100 - <code>CRITICAL</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Normalized?: number;

  /**
   * <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;

  /**
   * <p>The severity value of the finding. The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - No issue was found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - The issue does not require action on its own.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - The issue must be addressed but not urgently.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - The issue must be addressed as a priority.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - The issue must be remediated immediately to avoid it
   *                escalating.</p>
   *             </li>
   *          </ul>
   */
  Label?: SeverityLabel | string;
}

/**
 * @public
 * <p>Used to update information about the investigation into the finding.</p>
 */
export interface WorkflowUpdate {
  /**
   * <p>The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to <code>SUPPRESSED</code> or <code>RESOLVED</code> does not prevent a new finding for the same issue.</p>
   *          <p>The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets <code>WorkFlowStatus</code> from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>The record state changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The compliance status changes from <code>PASSED</code> to either
   *                         <code>WARNING</code>, <code>FAILED</code>, or
   *                      <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that you notified the resource owner about the
   *                security issue. Used when the initial reviewer is not the resource owner, and needs
   *                intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is needed. The finding is no longer updated.</p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus | string;
}

/**
 * @public
 */
export interface BatchUpdateFindingsRequest {
  /**
   * <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update
   *          up to 100 findings at a time.</p>
   *          <p>For each finding, the list provides the finding identifier and the ARN of the finding
   *          provider.</p>
   */
  FindingIdentifiers: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The updated note.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>Used to update the finding severity.</p>
   */
  Severity?: SeverityUpdate;

  /**
   * <p>Indicates the veracity of a finding.</p>
   *          <p>The available values for <code>VerificationState</code> are  as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> – The default disposition of a security finding</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRUE_POSITIVE</code> – The security finding is confirmed</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FALSE_POSITIVE</code> – The security finding was determined to be a false
   *                alarm</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where
   *                the finding doesn't pose any threat, is expected, or both</p>
   *             </li>
   *          </ul>
   */
  VerificationState?: VerificationState | string;

  /**
   * <p>The updated value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The updated value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  Criticality?: number;

  /**
   * <p>One or more finding types in the format of namespace/category/classifier that classify a
   *          finding.</p>
   *          <p>Valid namespace values are as follows.</p>
   *          <ul>
   *             <li>
   *                <p>Software and Configuration Checks</p>
   *             </li>
   *             <li>
   *                <p>TTPs</p>
   *             </li>
   *             <li>
   *                <p>Effects</p>
   *             </li>
   *             <li>
   *                <p>Unusual Behaviors</p>
   *             </li>
   *             <li>
   *                <p>Sensitive Data Identifications </p>
   *             </li>
   *          </ul>
   */
  Types?: string[];

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding.</p>
   */
  UserDefinedFields?: Record<string, string>;

  /**
   * <p>Used to update the workflow status of a finding.</p>
   *          <p>The workflow status indicates the progress of the investigation into the finding. </p>
   */
  Workflow?: WorkflowUpdate;

  /**
   * <p>A list of findings that are related to the updated findings.</p>
   */
  RelatedFindings?: RelatedFinding[];
}

/**
 * @public
 * <p>A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to
 *          update.</p>
 */
export interface BatchUpdateFindingsUnprocessedFinding {
  /**
   * <p>The identifier of the finding that was not updated.</p>
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * <p>The code associated with the error. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConcurrentUpdateError</code> - Another request attempted to update the finding while this request was being processed.
   * This error may also occur if you call <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html">
   *                      <code>BatchUpdateFindings</code>
   *                   </a>
   * and <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html">
   *                      <code>BatchImportFindings</code>
   *                   </a> at the same time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DuplicatedFindingIdentifier</code> - The request included two or more findings with the same <code>FindingIdentifier</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FindingNotFound</code> - The <code>FindingIdentifier</code> included in the request did not match an existing finding.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FindingSizeExceeded</code> - The finding size was greater than the permissible value of 240 KB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InternalFailure</code> - An internal service failure occurred when updating the finding.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InvalidInput</code> - The finding update contained an invalid value that did not satisfy the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services Security Finding Format</a> syntax.</p>
   *             </li>
   *          </ul>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message associated with the error. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Concurrent finding updates detected</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Finding Identifier is duplicated</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Finding Not Found</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Finding size exceeded 240 KB</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Internal service failure</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid Input</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFindingsResponse {
  /**
   * <p>The list of findings that were updated successfully.</p>
   */
  ProcessedFindings: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The list of findings that were not updated.</p>
   */
  UnprocessedFindings: BatchUpdateFindingsUnprocessedFinding[] | undefined;
}

/**
 * @public
 * <p>An array of requested updates to the enablement status of controls in specified
 *          standards. The objects in the array include a security control ID, the Amazon Resource Name (ARN) of the standard, the requested
 *          enablement status, and the reason for updating the enablement status.</p>
 */
export interface StandardsControlAssociationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the standard in which you want to update the
   *          control's enablement status.</p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>The unique identifier for the security control whose enablement status you want to update.</p>
   */
  SecurityControlId: string | undefined;

  /**
   * <p>The desired enablement status of the control in the standard.</p>
   */
  AssociationStatus: AssociationStatus | string | undefined;

  /**
   * <p>The reason for updating the control's enablement status in the standard.</p>
   */
  UpdatedReason?: string;
}

/**
 * @public
 */
export interface BatchUpdateStandardsControlAssociationsRequest {
  /**
   * <p>
   *          Updates the enablement status of a security control in a specified standard.
   *       </p>
   */
  StandardsControlAssociationUpdates: StandardsControlAssociationUpdate[] | undefined;
}

/**
 * @public
 * <p>Provides details about which control's enablement status could not be updated in a
 *          specified standard when calling the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a> API. This parameter also provides
 *          details about why the request was unprocessed. </p>
 */
export interface UnprocessedStandardsControlAssociationUpdate {
  /**
   * <p>An array of control and standard associations for which an update failed when calling
   *          <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>.
   *       </p>
   */
  StandardsControlAssociationUpdate: StandardsControlAssociationUpdate | undefined;

  /**
   * <p>The error code for the unprocessed update of the control's enablement status in the
   *          specified standard.</p>
   */
  ErrorCode: UnprocessedErrorCode | string | undefined;

  /**
   * <p>The reason why a control's enablement status in the specified standard couldn't be updated. </p>
   */
  ErrorReason?: string;
}

/**
 * @public
 */
export interface BatchUpdateStandardsControlAssociationsResponse {
  /**
   * <p>
   *          A security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) whose enablement status in a specified standard couldn't be updated.
   *       </p>
   */
  UnprocessedAssociationUpdates?: UnprocessedStandardsControlAssociationUpdate[];
}

/**
 * @public
 * @enum
 */
export const ControlFindingGenerator = {
  SECURITY_CONTROL: "SECURITY_CONTROL",
  STANDARD_CONTROL: "STANDARD_CONTROL",
} as const;

/**
 * @public
 */
export type ControlFindingGenerator = (typeof ControlFindingGenerator)[keyof typeof ControlFindingGenerator];

/**
 * @public
 */
export interface CreateActionTargetRequest {
  /**
   * <p>The name of the custom action target. Can contain up to 20 characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description for the custom action target.</p>
   */
  Description: string | undefined;

  /**
   * <p>The ID for the custom action target. Can contain up to 20 alphanumeric characters.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface CreateActionTargetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the custom action target.</p>
   */
  ActionTargetArn: string | undefined;
}

/**
 * @public
 * <p>The resource specified in the request conflicts with an existing resource.</p>
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface CreateFindingAggregatorRequest {
  /**
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *          </ul>
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.
   *       </p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface CreateFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and stop finding aggregation.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface CreateInsightRequest {
  /**
   * <p>The name of the custom insight to create.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The attribute used to group the findings for the insight. The grouping attribute
   *          identifies the type of item that the insight applies to. For example, if an insight is
   *          grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

/**
 * @public
 */
export interface CreateInsightResponse {
  /**
   * <p>The ARN of the insight created.</p>
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersRequest {
  /**
   * <p>The list of accounts to associate with the Security Hub administrator account. For each account, the
   *          list includes the account ID and optionally the email address.</p>
   */
  AccountDetails: AccountDetails[] | undefined;
}

/**
 * @public
 * <p>Details about the account that was not processed.</p>
 */
export interface Result {
  /**
   * <p>An Amazon Web Services account ID of the account that was not processed.</p>
   */
  AccountId?: string;

  /**
   * <p>The reason that the account was not processed.</p>
   */
  ProcessingResult?: string;
}

/**
 * @public
 */
export interface CreateMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface DeclineInvitationsRequest {
  /**
   * <p>The list of prospective member account IDs for which to decline an invitation.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeclineInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface DeleteActionTargetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom action target to delete.</p>
   */
  ActionTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteActionTargetResponse {
  /**
   * <p>The ARN of the custom action target that was deleted.</p>
   */
  ActionTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator to delete. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFindingAggregatorResponse {}

/**
 * @public
 */
export interface DeleteInsightRequest {
  /**
   * <p>The ARN of the insight to delete.</p>
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInsightResponse {
  /**
   * <p>The ARN of the insight that was deleted.</p>
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsRequest {
  /**
   * <p>The list of member account IDs that received the invitations you want to delete.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts for which the invitations were not deleted. For each account,
   *          the list includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface DeleteMembersRequest {
  /**
   * <p>The list of account IDs for the member accounts to delete.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not deleted. For each account, the list includes the
   *          account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface DescribeActionTargetsRequest {
  /**
   * <p>A list of custom action target ARNs for the custom action targets to retrieve.</p>
   */
  ActionTargetArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeActionTargets</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeActionTargetsResponse {
  /**
   * <p>A list of <code>ActionTarget</code> objects. Each object includes the <code>ActionTargetArn</code>,
   *             <code>Description</code>, and <code>Name</code> of a custom action target available in
   *          Security Hub.</p>
   */
  ActionTargets: ActionTarget[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeHubRequest {
  /**
   * <p>The ARN of the Hub resource to retrieve.</p>
   */
  HubArn?: string;
}

/**
 * @public
 */
export interface DescribeHubResponse {
  /**
   * <p>The ARN of the Hub resource that was retrieved.</p>
   */
  HubArn?: string;

  /**
   * <p>The date and time when Security Hub was enabled in the account.</p>
   */
  SubscribedAt?: string;

  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>If set to <code>true</code>, then new controls for enabled standards are enabled
   *          automatically. If set to <code>false</code>, then new controls are not enabled.</p>
   */
  AutoEnableControls?: boolean;

  /**
   * <p>Specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to
   *          <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check
   *          applies to multiple enabled standards.</p>
   *          <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings
   *          for a control check when the check applies to multiple enabled standards.</p>
   *          <p>The value for this field in a member account matches the value in the administrator
   *          account. For accounts that aren't part of an organization, the default value of this field
   *          is <code>SECURITY_CONTROL</code> if you enabled Security Hub on or after February 23,
   *          2023.</p>
   */
  ControlFindingGenerator?: ControlFindingGenerator | string;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>If set to <code>true</code>, then Security Hub is enabled for new accounts. If set to false,
   *          then new accounts are not added automatically.</p>
   */
  AutoEnable?: boolean;

  /**
   * <p>Whether the maximum number of allowed member accounts are already associated with the
   *          Security Hub administrator account.</p>
   */
  MemberAccountLimitReached?: boolean;

  /**
   * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *          for new member accounts in the organization.</p>
   *          <p>The default value of this parameter is equal to <code>DEFAULT</code>.</p>
   *          <p>If equal to <code>DEFAULT</code>, then Security Hub default standards are automatically enabled for new member
   *          accounts. If equal to <code>NONE</code>, then default standards are not automatically enabled for new member
   *          accounts.</p>
   */
  AutoEnableStandards?: AutoEnableStandards | string;
}

/**
 * @public
 */
export interface DescribeProductsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeProducts</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ARN of the integration to return.</p>
   */
  ProductArn?: string;
}

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB: "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB: "SEND_FINDINGS_TO_SECURITY_HUB",
  UPDATE_FINDINGS_IN_SECURITY_HUB: "UPDATE_FINDINGS_IN_SECURITY_HUB",
} as const;

/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * <p>Contains details about a product.</p>
 */
export interface Product {
  /**
   * <p>The ARN assigned to the product.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product.</p>
   */
  ProductName?: string;

  /**
   * <p>The name of the company that provides the product.</p>
   */
  CompanyName?: string;

  /**
   * <p>A description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The categories assigned to the product.</p>
   */
  Categories?: string[];

  /**
   * <p>The types of integration that the product supports. Available values are the
   *          following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND_FINDINGS_TO_SECURITY_HUB</code> - The integration sends
   *                findings to Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECEIVE_FINDINGS_FROM_SECURITY_HUB</code> - The integration
   *                receives findings from Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FINDINGS_IN_SECURITY_HUB</code> - The integration does not send new findings to Security Hub, but does make updates to the findings that it receives from Security Hub.</p>
   *             </li>
   *          </ul>
   */
  IntegrationTypes?: (IntegrationType | string)[];

  /**
   * <p>For integrations with Amazon Web Services services, the Amazon Web Services Console URL from which to activate the service.</p>
   *          <p>For integrations with third-party products, the Amazon Web Services Marketplace URL from which to subscribe to or purchase the product.</p>
   */
  MarketplaceUrl?: string;

  /**
   * <p>The URL to the service or product documentation about the integration with Security Hub, including how to activate the integration.</p>
   */
  ActivationUrl?: string;

  /**
   * <p>The resource policy associated with the product.</p>
   */
  ProductSubscriptionResourcePolicy?: string;
}

/**
 * @public
 */
export interface DescribeProductsResponse {
  /**
   * <p>A list of products, including details for each product.</p>
   */
  Products: Product[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeStandardsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of standards to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides details about the management of a security standard.</p>
 */
export interface StandardsManagedBy {
  /**
   * <p>An identifier for the company that manages a specific security standard. For existing
   *          standards, the value is equal to <code>Amazon Web Services</code>.</p>
   */
  Company?: string;

  /**
   * <p>An identifier for the product that manages a specific security standard. For existing
   *          standards, the value is equal to the Amazon Web Services service that manages the
   *          standard.</p>
   */
  Product?: string;
}

/**
 * @public
 * <p>Provides information about a specific security standard.</p>
 */
export interface Standard {
  /**
   * <p>The ARN of a standard.</p>
   */
  StandardsArn?: string;

  /**
   * <p>The name of the standard.</p>
   */
  Name?: string;

  /**
   * <p>A description of the standard.</p>
   */
  Description?: string;

  /**
   * <p>Whether the standard is enabled by default. When Security Hub is enabled from the console, if a
   *          standard is enabled by default, the check box for that standard is selected by
   *          default.</p>
   *          <p>When Security Hub is enabled using the <code>EnableSecurityHub</code> API operation, the
   *          standard is enabled by default unless <code>EnableDefaultStandards</code> is set to
   *             <code>false</code>.</p>
   */
  EnabledByDefault?: boolean;

  /**
   * <p>Provides details about the management of a standard.
   *       </p>
   */
  StandardsManagedBy?: StandardsManagedBy;
}

/**
 * @public
 */
export interface DescribeStandardsResponse {
  /**
   * <p>A list of available standards.</p>
   */
  Standards?: Standard[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeStandardsControlsRequest {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard. To get
   *          the subscription ARNs of the standards you have enabled, use the <code>GetEnabledStandards</code> operation.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandardsControls</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of security standard controls to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Details for an individual security standard control.</p>
 */
export interface StandardsControl {
  /**
   * <p>The ARN of the security standard control.</p>
   */
  StandardsControlArn?: string;

  /**
   * <p>The current status of the security standard control. Indicates whether the control is
   *          enabled or disabled. Security Hub does not check against disabled controls.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>The reason provided for the most recent change in status for the control.</p>
   */
  DisabledReason?: string;

  /**
   * <p>The date and time that the status of the security standard control was most recently
   *          updated.</p>
   */
  ControlStatusUpdatedAt?: Date;

  /**
   * <p>The identifier of the security standard control.</p>
   */
  ControlId?: string;

  /**
   * <p>The title of the security standard control.</p>
   */
  Title?: string;

  /**
   * <p>The longer description of the security standard control. Provides information about what
   *          the control is checking for.</p>
   */
  Description?: string;

  /**
   * <p>A link to remediation information for the control in the Security Hub user
   *          documentation.</p>
   */
  RemediationUrl?: string;

  /**
   * <p>The severity of findings generated from this security standard control.</p>
   *          <p>The finding severity is based on an assessment of how easy it would be to compromise Amazon Web Services
   *          resources if the issue is detected.</p>
   */
  SeverityRating?: SeverityRating | string;

  /**
   * <p>The list of requirements that are related to this control.</p>
   */
  RelatedRequirements?: string[];
}

/**
 * @public
 */
export interface DescribeStandardsControlsResponse {
  /**
   * <p>A list of security standards controls.</p>
   */
  Controls?: StandardsControl[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DisableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the integrated product to disable the integration for.</p>
   */
  ProductSubscriptionArn: string | undefined;
}

/**
 * @public
 */
export interface DisableImportFindingsForProductResponse {}

/**
 * @public
 */
export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the Security Hub administrator account.</p>
   */
  AdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisableOrganizationAdminAccountResponse {}

/**
 * @public
 */
export interface DisableSecurityHubRequest {}

/**
 * @public
 */
export interface DisableSecurityHubResponse {}

/**
 * @public
 */
export interface DisassociateFromAdministratorAccountRequest {}

/**
 * @public
 */
export interface DisassociateFromAdministratorAccountResponse {}

/**
 * @public
 */
export interface DisassociateFromMasterAccountRequest {}

/**
 * @public
 */
export interface DisassociateFromMasterAccountResponse {}

/**
 * @public
 */
export interface DisassociateMembersRequest {
  /**
   * <p>The account IDs of the member accounts to disassociate from the administrator account.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateMembersResponse {}

/**
 * @public
 */
export interface EnableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the product to enable the integration for.</p>
   */
  ProductArn: string | undefined;
}

/**
 * @public
 */
export interface EnableImportFindingsForProductResponse {
  /**
   * <p>The ARN of your subscription to the product to enable integrations for.</p>
   */
  ProductSubscriptionArn?: string;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the account to designate as the Security Hub administrator
   *          account.</p>
   */
  AdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountResponse {}

/**
 * @public
 */
export interface EnableSecurityHubRequest {
  /**
   * <p>The tags to add to the hub resource when you enable Security Hub.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Whether to enable the security standards that Security Hub has designated as automatically
   *          enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set
   *          to <code>true</code>. To not enable the automatically enabled standards, set
   *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
   */
  EnableDefaultStandards?: boolean;

  /**
   * <p>This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on.
   *       If the value for this field is set to
   *       <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check
   *       applies to multiple enabled standards.</p>
   *          <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings
   *       for a control check when the check applies to multiple enabled standards.</p>
   *          <p>The value for this field in a member account matches the value in the administrator
   *          account. For accounts that aren't part of an organization, the default value of this field
   *          is <code>SECURITY_CONTROL</code> if you enabled Security Hub on or after February 23,
   *          2023.</p>
   */
  ControlFindingGenerator?: ControlFindingGenerator | string;
}

/**
 * @public
 */
export interface EnableSecurityHubResponse {}

/**
 * @public
 * <p>A finding aggregator. A finding aggregator contains the configuration for finding aggregation.</p>
 */
export interface FindingAggregator {
  /**
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and delete the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;
}

/**
 * @public
 * <p> An array of objects that provides details about a change to a finding, including the
 *                 Amazon Web Services Security Finding Format (ASFF) field that changed, the value of
 *             the field before the change, and the value of the field after the change. </p>
 */
export interface FindingHistoryUpdate {
  /**
   * <p>
   *          The ASFF field that changed during the finding change event.
   *       </p>
   */
  UpdatedField?: string;

  /**
   * <p>
   *          The value of the ASFF field before the finding change event.
   *       </p>
   */
  OldValue?: string;

  /**
   * <p>
   *          The value of the ASFF field after the finding change event. To preserve storage and readability, Security Hub omits this value
   *           if <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_FindingHistoryRecord.html">
   *                <code>FindingHistoryRecord</code>
   *             </a> exceeds database limits.
   *       </p>
   */
  NewValue?: string;
}

/**
 * @public
 * @enum
 */
export const FindingHistoryUpdateSourceType = {
  BATCH_IMPORT_FINDINGS: "BATCH_IMPORT_FINDINGS",
  BATCH_UPDATE_FINDINGS: "BATCH_UPDATE_FINDINGS",
} as const;

/**
 * @public
 */
export type FindingHistoryUpdateSourceType =
  (typeof FindingHistoryUpdateSourceType)[keyof typeof FindingHistoryUpdateSourceType];

/**
 * @public
 * <p>
 *          Identifies the source of the finding change event.
 *       </p>
 */
export interface FindingHistoryUpdateSource {
  /**
   * <p>
   *          Describes the type of finding change event, such as a call to <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html">
   *                <code>BatchImportFindings</code>
   *             </a> (by an integrated Amazon Web Service or third party partner integration) or <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html">
   *                <code>BatchUpdateFindings</code>
   *             </a> (by a Security Hub customer).
   *       </p>
   */
  Type?: FindingHistoryUpdateSourceType | string;

  /**
   * <p>
   *          The identity of the source that initiated the finding change event. For example, the Amazon Resource Name (ARN) of a partner that calls BatchImportFindings or of a customer that calls BatchUpdateFindings.
   *       </p>
   */
  Identity?: string;
}

/**
 * @public
 * <p>
 *          A list of events that changed the specified finding during the specified time period. Each record represents a single
 *          finding change event.
 *       </p>
 */
export interface FindingHistoryRecord {
  /**
   * <p>Identifies which finding to get the finding history for.</p>
   */
  FindingIdentifier?: AwsSecurityFindingIdentifier;

  /**
   * <p> An ISO 8601-formatted timestamp that indicates when Security Hub
   *             processed the updated finding record.</p>
   *          <p>A correctly formatted example is
   *                 <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and
   *             time should be separated by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339 section 5.6,
   *                 Internet Date/Time Format</a>. </p>
   */
  UpdateTime?: Date;

  /**
   * <p>
   *          Identifies whether the event marks the creation of a new finding. A value of <code>True</code> means that the finding is
   *          newly created. A value of <code>False</code> means that the finding isn’t newly created.
   *       </p>
   */
  FindingCreated?: boolean;

  /**
   * <p> Identifies the source of the event that changed the finding. For example, an integrated
   *                 Amazon Web Service or third-party partner integration may call <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html">
   *                <code>BatchImportFindings</code>
   *             </a>, or an Security Hub customer
   *             may call <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html">
   *                <code>BatchUpdateFindings</code>
   *             </a>. </p>
   */
  UpdateSource?: FindingHistoryUpdateSource;

  /**
   * <p>
   *          An array of objects that provides details about the finding change event, including the Amazon Web Services Security
   *          Finding Format (ASFF) field that changed, the value of the field before the change, and the value of the field after
   *          the change.
   *       </p>
   */
  Updates?: FindingHistoryUpdate[];

  /**
   * <p>
   *          A token for pagination purposes. Provide this token in the subsequent request to <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindingsHistory.html">
   *                <code>GetFindingsHistory</code>
   *             </a> to get
   *          up to an additional 100 results of history for the same finding that you specified in your initial request.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetAdministratorAccountRequest {}

/**
 * @public
 * <p>Details about an invitation.</p>
 */
export interface Invitation {
  /**
   * <p>The account ID of the Security Hub administrator account that the invitation was sent from.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the invitation sent to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The timestamp of when the invitation was sent.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The current status of the association between the member and administrator accounts.</p>
   */
  MemberStatus?: string;
}

/**
 * @public
 */
export interface GetAdministratorAccountResponse {
  /**
   * <p>Details about an invitation.</p>
   */
  Administrator?: Invitation;
}

/**
 * @public
 */
export interface GetEnabledStandardsRequest {
  /**
   * <p>The list of the standards subscription ARNs for the standards to retrieve.</p>
   */
  StandardsSubscriptionArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetEnabledStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetEnabledStandardsResponse {
  /**
   * <p>The list of <code>StandardsSubscriptions</code> objects that include information about
   *          the enabled standards.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator to return details for. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;
}

/**
 * @public
 */
export interface GetFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface GetFindingHistoryRequest {
  /**
   * <p>Identifies which finding to get the finding history for.</p>
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * <p>
   *          An ISO 8601-formatted timestamp that indicates the start time of the requested finding history. A correctly formatted
   *          example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated
   *          by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339
   *             section 5.6, Internet Date/Time Format</a>.</p>
   *          <p>If you provide values for both <code>StartTime</code> and <code>EndTime</code>,
   *                 Security Hub returns finding history for the specified time period. If you
   *             provide a value for <code>StartTime</code> but not for <code>EndTime</code>, Security Hub returns finding history from the <code>StartTime</code> to the time at
   *             which the API is called. If you provide a value for <code>EndTime</code> but not for
   *                 <code>StartTime</code>, Security Hub returns finding history from the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt">CreatedAt</a> timestamp of the finding to the <code>EndTime</code>. If you
   *             provide neither <code>StartTime</code> nor <code>EndTime</code>, Security Hub
   *             returns finding history from the CreatedAt timestamp of the finding to the time at which
   *             the API is called. In all of these scenarios, the response is limited to 100 results, and the maximum time period is
   *             limited to 90 days. </p>
   */
  StartTime?: Date;

  /**
   * <p>
   *          An ISO 8601-formatted timestamp that indicates the end time of the requested finding history. A correctly formatted
   *          example is <code>2020-05-21T20:16:34.724Z</code>. The value cannot contain spaces, and date and time should be separated
   *          by <code>T</code>. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339
   *             section 5.6, Internet Date/Time Format</a>.</p>
   *          <p>If you provide values for both <code>StartTime</code> and <code>EndTime</code>,
   *                 Security Hub returns finding history for the specified time period. If you
   *             provide a value for <code>StartTime</code> but not for <code>EndTime</code>, Security Hub returns finding history from the <code>StartTime</code> to the time at
   *             which the API is called. If you provide a value for <code>EndTime</code> but not for
   *                 <code>StartTime</code>, Security Hub returns finding history from the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt">CreatedAt</a> timestamp of the finding to the <code>EndTime</code>. If you
   *             provide neither <code>StartTime</code> nor <code>EndTime</code>, Security Hub
   *             returns finding history from the CreatedAt timestamp of the finding to the time at which
   *             the API is called. In all of these scenarios, the response is limited to 100 results, and the maximum time period is
   *             limited to 90 days.</p>
   */
  EndTime?: Date;

  /**
   * <p>
   *          A token for pagination purposes. Provide <code>NULL</code> as the initial value. In subsequent requests, provide the
   *          token included in the response to get up to an additional 100 results of finding history. If you don’t provide
   *          <code>NextToken</code>, Security Hub returns up to 100 results of finding history for each request.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>
   *          The maximum number of results to be returned. If you don’t provide it, Security Hub returns up to 100 results of finding history.
   *       </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetFindingHistoryResponse {
  /**
   * <p>
   *          A list of events that altered the specified finding during the specified time period.
   *       </p>
   */
  Records?: FindingHistoryRecord[];

  /**
   * <p>
   *          A token for pagination purposes. Provide this token in the subsequent request to <code>GetFindingsHistory</code> to
   *          get up to an additional 100 results of history for the same finding that you specified in your initial request.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "asc",
  DESCENDING: "desc",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * <p>A collection of finding attributes used to sort findings.</p>
 */
export interface SortCriterion {
  /**
   * <p>The finding attribute used to sort findings.</p>
   */
  Field?: string;

  /**
   * <p>The order used to sort findings.</p>
   */
  SortOrder?: SortOrder | string;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * <p>The finding attributes used to define a condition to filter the returned
   *          findings.</p>
   *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
   *          20 filter values.</p>
   *          <p>Note that in the available filter fields, <code>WorkflowState</code> is deprecated. To
   *          search for a finding based on its workflow status, use <code>WorkflowStatus</code>.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The finding attributes used to sort the list of returned findings.</p>
   */
  SortCriteria?: SortCriterion[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetFindings</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of findings to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * <p>The findings that matched the filters specified in the request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetInsightResultsRequest {
  /**
   * <p>The ARN of the insight for which to return results.</p>
   */
  InsightArn: string | undefined;
}

/**
 * @public
 * <p>The insight result values returned by the <code>GetInsightResults</code>
 *          operation.</p>
 */
export interface InsightResultValue {
  /**
   * <p>The value of the attribute that the findings are grouped by for the insight whose
   *          results are returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttributeValue: string | undefined;

  /**
   * <p>The number of findings returned for each <code>GroupByAttributeValue</code>.</p>
   */
  Count: number | undefined;
}

/**
 * @public
 * <p>The insight results returned by the <code>GetInsightResults</code> operation.</p>
 */
export interface InsightResults {
  /**
   * <p>The ARN of the insight whose results are returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The attribute that the findings are grouped by for the insight whose results are
   *          returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttribute: string | undefined;

  /**
   * <p>The list of insight result values returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  ResultValues: InsightResultValue[] | undefined;
}

/**
 * @public
 */
export interface GetInsightResultsResponse {
  /**
   * <p>The insight results returned by the operation.</p>
   */
  InsightResults: InsightResults | undefined;
}

/**
 * @public
 */
export interface GetInsightsRequest {
  /**
   * <p>The ARNs of the insights to describe. If you do not provide any insight ARNs, then
   *             <code>GetInsights</code> returns all of your custom insights. It does not return any
   *          managed insights.</p>
   */
  InsightArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetInsights</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains information about a Security Hub insight.</p>
 */
export interface Insight {
  /**
   * <p>The ARN of a Security Hub insight.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The name of a Security Hub insight.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The grouping attribute for the insight's findings. Indicates how to group the matching
   *          findings, and identifies the type of item that the insight applies to. For example, if an
   *          insight is grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

/**
 * @public
 */
export interface GetInsightsResponse {
  /**
   * <p>The insights returned by the operation.</p>
   */
  Insights: Insight[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetInvitationsCountRequest {}

/**
 * @public
 */
export interface GetInvitationsCountResponse {
  /**
   * <p>The number of all membership invitations sent to this Security Hub member account, not
   *          including the currently accepted invitation.</p>
   */
  InvitationsCount?: number;
}

/**
 * @public
 */
export interface GetMasterAccountRequest {}

/**
 * @public
 */
export interface GetMasterAccountResponse {
  /**
   * <p>A list of details about the Security Hub administrator account for the current member account.
   *       </p>
   */
  Master?: Invitation;
}

/**
 * @public
 */
export interface GetMembersRequest {
  /**
   * <p>The list of account IDs for the Security Hub member accounts to return the details for. </p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 * <p>The details about a member account.</p>
 */
export interface Member {
  /**
   * <p>The Amazon Web Services account ID of the member account.</p>
   */
  AccountId?: string;

  /**
   * <p>The email address of the member account.</p>
   */
  Email?: string;

  /**
   * @deprecated
   *
   * <p>This is replaced by <code>AdministratorID</code>.</p>
   *          <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  MasterId?: string;

  /**
   * <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  AdministratorId?: string;

  /**
   * <p>The status of the relationship between the member account and its administrator account.
   *       </p>
   *          <p>The status can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Created</code> - Indicates that the administrator account added the member account,
   *                but has not yet invited the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invited</code> - Indicates that the administrator account invited the member
   *                account. The member account has not yet responded to the invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Enabled</code> - Indicates that the member account is currently active. For
   *                manually invited member accounts, indicates that the member account accepted the
   *                invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Removed</code> - Indicates that the administrator account disassociated the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Resigned</code> - Indicates that the member account disassociated themselves
   *                from the administrator account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleted</code> - Indicates that the administrator account deleted the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccountSuspended</code> - Indicates that an organization account was suspended from Amazon Web Services at the same time that the administrator account tried to enable the organization account as a member account.</p>
   *             </li>
   *          </ul>
   */
  MemberStatus?: string;

  /**
   * <p>A timestamp for the date and time when the invitation was sent to the member
   *          account.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The timestamp for the date and time when the member account was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetMembersResponse {
  /**
   * <p>The list of details about the Security Hub member accounts.</p>
   */
  Members?: Member[];

  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface InviteMembersRequest {
  /**
   * <p>The list of account IDs of the Amazon Web Services accounts to invite to Security Hub as members. </p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface InviteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

/**
 * @public
 */
export interface ListEnabledProductsForImportRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEnabledProductsForImportResponse {
  /**
   * <p>The list of ARNs for the resources that represent your subscriptions to products. </p>
   */
  ProductSubscriptions?: string[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFindingAggregatorsRequest {
  /**
   * <p>The token returned with the previous set of results. Identifies the next set of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return. This operation currently only returns a single result.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFindingAggregatorsResponse {
  /**
   * <p>The list of finding aggregators. This operation currently only returns a single result.</p>
   */
  FindingAggregators?: FindingAggregator[];

  /**
   * <p>If there are more results, this is the token to provide in the next call to <code>ListFindingAggregators</code>.</p>
   *          <p>This operation currently only returns a single result.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListInvitations</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * <p>The details of the invitations returned by the operation.</p>
   */
  Invitations?: Invitation[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * <p>Specifies which member accounts to include in the response based on their relationship
   *          status with the administrator account. The default value is <code>TRUE</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the administrator account is set to <code>ENABLED</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all
   *          existing member accounts. </p>
   */
  OnlyAssociated?: boolean;

  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListMembers</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * <p>Member details returned by the operation.</p>
   */
  Members?: Member[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListOrganizationAdminAccounts</code> operation, set the value of this parameter to
   *             <code>NULL</code>. For subsequent calls to the operation, to continue listing data, set
   *          the value of this parameter to the value returned from the previous response. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>The list of Security Hub administrator accounts.</p>
   */
  AdminAccounts?: AdminAccount[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityControlDefinitionsRequest {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the standard that you want to view controls for.
   *       </p>
   */
  StandardsArn?: string;

  /**
   * <p>
   *          Optional pagination parameter.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p> An optional parameter that limits the total results of the API response to the
   *          specified number. If this parameter isn't provided in the request, the results include the
   *          first 25 security controls that apply to the specified standard. The results also include a
   *             <code>NextToken</code> parameter that you can use in a subsequent API call to get the
   *          next 25 controls. This repeats until all controls for the standard are returned. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const RegionAvailabilityStatus = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type RegionAvailabilityStatus = (typeof RegionAvailabilityStatus)[keyof typeof RegionAvailabilityStatus];

/**
 * @public
 * <p>
 *          Provides metadata for a security control, including its unique standard-agnostic identifier, title, description,
 *          severity, availability in Amazon Web Services Regions, and a link to remediation steps.
 *       </p>
 */
export interface SecurityControlDefinition {
  /**
   * <p>
   *          The unique identifier of a security control across standards. Values for this field typically consist of an
   *          Amazon Web Service name and a number (for example, APIGateway.3). This parameter differs from
   *          <code>SecurityControlArn</code>, which is a unique Amazon Resource Name (ARN) assigned to a control. The
   *          ARN references the security control ID (for example, arn:aws:securityhub:eu-central-1:123456789012:security-control/APIGateway.3).
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *          The title of a security control.
   *       </p>
   */
  Title: string | undefined;

  /**
   * <p> The description of a security control across standards. This typically summarizes how
   *             Security Hub evaluates the control and the conditions under which it produces a
   *          failed finding. This parameter doesn't reference a specific standard. </p>
   */
  Description: string | undefined;

  /**
   * <p>
   *          A link to Security Hub documentation that explains how to remediate a failed finding for a security control.
   *       </p>
   */
  RemediationUrl: string | undefined;

  /**
   * <p>
   *          The severity of a security control. For more information about how Security Hub determines control severity,
   *          see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/controls-findings-create-update.html#control-findings-severity">Assigning severity to control findings</a> in the
   *          <i>Security Hub User Guide</i>.
   *       </p>
   */
  SeverityRating: SeverityRating | string | undefined;

  /**
   * <p>
   *          Specifies whether a security control is available in the current Amazon Web Services Region.
   *       </p>
   */
  CurrentRegionAvailability: RegionAvailabilityStatus | string | undefined;
}

/**
 * @public
 */
export interface ListSecurityControlDefinitionsResponse {
  /**
   * <p>
   *          An array of controls that apply to the specified standard.
   *       </p>
   */
  SecurityControlDefinitions: SecurityControlDefinition[] | undefined;

  /**
   * <p> A pagination parameter that's included in the response only if it was included in the
   *          request. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStandardsControlAssociationsRequest {
  /**
   * <p>
   *          The identifier of the control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) that you
   *          want to determine the enablement status of in each enabled standard.
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *          Optional pagination parameter.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p> An optional parameter that limits the total results of the API response to the
   *          specified number. If this parameter isn't provided in the request, the results include the
   *          first 25 standard and control associations. The results also include a
   *             <code>NextToken</code> parameter that you can use in a subsequent API call to get the
   *          next 25 associations. This repeats until all associations for the specified control are
   *          returned. The number of results is limited by the number of supported Security Hub
   *          standards that you've enabled in the calling account. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p> An array that provides the enablement status and other details for each control that
 *          applies to each enabled standard. </p>
 */
export interface StandardsControlAssociationSummary {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of a standard.
   *       </p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>
   *          A unique standard-agnostic identifier for a control. Values for this field typically consist of an
   *          Amazon Web Service and a number, such as APIGateway.5. This field doesn't reference a specific standard.
   *       </p>
   */
  SecurityControlId: string | undefined;

  /**
   * <p> The ARN of a control, such as
   *             <code>arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1</code>. This
   *          parameter doesn't mention a specific standard. </p>
   */
  SecurityControlArn: string | undefined;

  /**
   * <p>
   *          The enablement status of a control in a specific standard.
   *       </p>
   */
  AssociationStatus: AssociationStatus | string | undefined;

  /**
   * <p>
   *          The requirement that underlies this control in the compliance framework related to the standard.
   *       </p>
   */
  RelatedRequirements?: string[];

  /**
   * <p> The last time that a control's enablement status in a specified standard was updated. </p>
   */
  UpdatedAt?: Date;

  /**
   * <p> The reason for updating the control's enablement status in a specified standard. </p>
   */
  UpdatedReason?: string;

  /**
   * <p>
   *          The title of a control.
   *       </p>
   */
  StandardsControlTitle?: string;

  /**
   * <p>
   *          The description of a control. This typically summarizes how Security Hub evaluates the control and the
   *          conditions under which it produces a failed finding. The parameter may reference a specific standard.
   *       </p>
   */
  StandardsControlDescription?: string;
}

/**
 * @public
 */
export interface ListStandardsControlAssociationsResponse {
  /**
   * <p> An array that provides the enablement status and other details for each security
   *          control that applies to each enabled standard. </p>
   */
  StandardsControlAssociationSummaries: StandardsControlAssociationSummary[] | undefined;

  /**
   * <p> A pagination parameter that's included in the response only if it was included in the
   *          request. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to retrieve tags for.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to apply the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the tags to remove from the resource. You can remove up to 50 tags at a time.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateActionTargetRequest {
  /**
   * <p>The ARN of the custom action target to update.</p>
   */
  ActionTargetArn: string | undefined;

  /**
   * <p>The updated name of the custom action target.</p>
   */
  Name?: string;

  /**
   * <p>The updated description for the custom action target.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateActionTargetResponse {}

/**
 * @public
 */
export interface UpdateFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;

  /**
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *          </ul>
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.</p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface UpdateFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface UpdateFindingsRequest {
  /**
   * <p>A collection of attributes that specify which findings you want to update.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The updated note for the finding.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: RecordState | string;
}

/**
 * @public
 */
export interface UpdateFindingsResponse {}

/**
 * @public
 */
export interface UpdateInsightRequest {
  /**
   * <p>The ARN of the insight that you want to update.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The updated name for the insight.</p>
   */
  Name?: string;

  /**
   * <p>The updated filters that define this insight.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The updated <code>GroupBy</code> attribute that defines this insight.</p>
   */
  GroupByAttribute?: string;
}

/**
 * @public
 */
export interface UpdateInsightResponse {}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>By default, this is <code>false</code>, and new accounts are not added
   *          automatically.</p>
   *          <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>
   */
  AutoEnable: boolean | undefined;

  /**
   * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *          for new member accounts in the organization.</p>
   *          <p>By default, this parameter is equal to <code>DEFAULT</code>, and new member accounts are automatically enabled with default Security Hub standards.</p>
   *          <p>To opt out of enabling default standards for new member accounts, set this parameter equal to <code>NONE</code>.</p>
   */
  AutoEnableStandards?: AutoEnableStandards | string;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {}

/**
 * @public
 */
export interface UpdateSecurityHubConfigurationRequest {
  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>By default, this is set to <code>true</code>, and new controls are enabled
   *          automatically. To not automatically enable new controls, set this to <code>false</code>.
   *       </p>
   */
  AutoEnableControls?: boolean;

  /**
   * <p>Updates whether the calling account has consolidated control findings turned on.
   *       If the value for this field is set to
   *       <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check
   *       applies to multiple enabled standards.</p>
   *          <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings
   *       for a control check when the check applies to multiple enabled standards.</p>
   *          <p>For accounts that are part of an organization, this value can only be updated in the administrator account.</p>
   */
  ControlFindingGenerator?: ControlFindingGenerator | string;
}

/**
 * @public
 */
export interface UpdateSecurityHubConfigurationResponse {}

/**
 * @public
 */
export interface UpdateStandardsControlRequest {
  /**
   * <p>The ARN of the security standard control to enable or disable.</p>
   */
  StandardsControlArn: string | undefined;

  /**
   * <p>The updated status of the security standard control.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>A description of the reason why you are disabling a security standard control. If you
   *          are disabling a control, then this is required.</p>
   */
  DisabledReason?: string;
}

/**
 * @public
 */
export interface UpdateStandardsControlResponse {}

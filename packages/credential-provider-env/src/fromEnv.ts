import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { AwsCredentialIdentityProvider } from "@aws-sdk/types";

/**
 * @internal
 */
export const ENV_KEY = "AWS_ACCESS_KEY_ID";
/**
 * @internal
 */
export const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
/**
 * @internal
 */
export const ENV_SESSION = "AWS_SESSION_TOKEN";
/**
 * @internal
 */
export const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";

/**
 * @internal
 * 
 * Source AWS credentials from known environment variables. If either the
 * `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY` environment variable is not
 * set in this process, the provider will return a rejected promise.
 */
export const fromEnv = (): AwsCredentialIdentityProvider => async () => {
  const accessKeyId: string | undefined = process.env[ENV_KEY];
  const secretAccessKey: string | undefined = process.env[ENV_SECRET];
  const sessionToken: string | undefined = process.env[ENV_SESSION];
  const expiry: string | undefined = process.env[ENV_EXPIRATION];

  if (accessKeyId && secretAccessKey) {
    return {
      accessKeyId,
      secretAccessKey,
      ...(sessionToken && { sessionToken }),
      ...(expiry && { expiration: new Date(expiry) }),
    };
  }

  throw new CredentialsProviderError("Unable to find environment variable credentials.");
};

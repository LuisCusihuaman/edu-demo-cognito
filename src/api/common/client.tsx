import { CognitoIdentityClient, GetIdCommand, GetCredentialsForIdentityCommand } from '@aws-sdk/client-cognito-identity';
import { S3Client } from '@aws-sdk/client-s3';

// Configuration
const REGION = 'us-east-1';
const userPoolId = import.meta.env.VITE_USER_POOL_ID;
const identityPoolId = import.meta.env.VITE_IDENTITY_POOL_ID;

// Initialize S3Client without specific credentials
export const s3Client = new S3Client({ region: REGION });

// Function to update S3Client credentials
export async function updateS3ClientCredentials() {
    const cognitoIdentityClient = new CognitoIdentityClient({ region: REGION });
    try {
        const getIdParams = {
          IdentityPoolId: identityPoolId,
          Logins: {
            [`cognito-idp.${REGION}.amazonaws.com/${userPoolId}`]: sessionStorage.getItem('access_token') || '' // Use empty string as default value if access token is null
          } as Record<string, string> // Specify the correct type for Logins
        };
        const idResponse = await cognitoIdentityClient.send(new GetIdCommand(getIdParams));

        const getCredentialsParams = {
          IdentityId: idResponse.IdentityId,
          Logins: {
            [`cognito-idp.${REGION}.amazonaws.com/${userPoolId}`]: sessionStorage.getItem('access_token') || '' // Use empty string as default value if access token is null
          } as Record<string, string> // Specify the correct type for Logins
        };
        const credentialsResponse = await cognitoIdentityClient.send(new GetCredentialsForIdentityCommand(getCredentialsParams));

        const credentials = credentialsResponse.Credentials;
        console.log("CREDENTIALS: ", credentials);
        s3Client.config.credentials = {
            accessKeyId: credentials?.AccessKeyId,
            secretAccessKey: credentials?.SecretKey,
            sessionToken: credentials?.SessionToken
        };
        console.log('S3 Client credentials updated and ready to use.');
    } catch (error) {
        console.error('Failed to update S3 client credentials:', error);
    }
}


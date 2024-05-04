import { S3Client } from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import { useEffect, useState } from 'react';
import { useAuth } from 'react-oidc-context';

const REGION = import.meta.env.VITE_AWS_REGION; // AWS region
const IDENTITY_POOL_ID = import.meta.env.VITE_IDENTITY_POOL_ID; // Cognito Identity Pool ID
const COGNITO_ID = `cognito-idp.${REGION}.amazonaws.com/${import.meta.env.VITE_USER_POOL_ID}`; // Cognito User Pool ID format

// Custom hook to manage S3 client based on OIDC authentication status
export const useS3Client = () => {
  const { isAuthenticated, user } = useAuth();
  // Explicitly define the state type as S3Client | null
  const [s3Client, setS3Client] = useState<S3Client | null>(null);

  useEffect(() => {
    if (isAuthenticated && user?.access_token) {
      // Create a login map using the OIDC token
      const loginData = {
        [COGNITO_ID]: user.access_token,
      };

      // Initialize the S3Client with credentials from the Cognito Identity Pool
      const newS3Client = new S3Client({
        region: REGION,
        credentials: fromCognitoIdentityPool({
          clientConfig: { region: REGION },
          identityPoolId: IDENTITY_POOL_ID,
          logins: loginData,
        }),
      });

      setS3Client(newS3Client);
    } else {
      setS3Client(null);
    }
  }, [isAuthenticated, user?.access_token]);

  return s3Client;
};

import type { CognitoIdentityCredentialProvider } from '@aws-sdk/credential-providers';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import { useEffect, useState } from 'react';
import { useAuth } from 'react-oidc-context';

const REGION = import.meta.env.VITE_AWS_REGION; // AWS region
const IDENTITY_POOL_ID = import.meta.env.VITE_IDENTITY_POOL_ID; // Cognito Identity Pool ID
const COGNITO_ID = `cognito-idp.${REGION}.amazonaws.com/${import.meta.env.VITE_USER_POOL_ID}`; // Cognito User Pool ID format

// Custom hook to manage AWS temporary credentials provider based on OIDC authentication status
export const useAwsTemporaryCredentials = () => {
  const { isAuthenticated, user } = useAuth();
  // Initialize the state specifically for the provider type
  const [credentialsProvider, setCredentialsProvider] =
    useState<CognitoIdentityCredentialProvider | null>(null);

  useEffect(() => {
    if (isAuthenticated && user?.id_token) {
      // Create a login map using the OIDC token
      const loginData = {
        [COGNITO_ID]: user.id_token,
      };

      // Initialize credentials provider from the Cognito Identity Pool
      const provider = fromCognitoIdentityPool({
        clientConfig: { region: REGION },
        identityPoolId: IDENTITY_POOL_ID,
        logins: loginData,
      });

      // Set the provider directly
      setCredentialsProvider(provider);
    } else {
      setCredentialsProvider(null);
    }
  }, [isAuthenticated, user?.access_token]);

  return credentialsProvider;
};

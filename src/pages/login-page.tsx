import { useAuth } from 'react-oidc-context';
import { Link } from 'react-router-dom';

import { Button } from '../components/ui/button';

export const LoginPage = () => {
  const auth = useAuth();

  const handleLogin = () => {
    auth.signinRedirect();
  };

  return (
    <div className="lg:grid lg:min-h-[800px] lg:grid-cols-2">
      <div className="flex items-center justify-center py-12 lg:p-0">
        <div className="mx-auto flex w-full max-w-[350px] flex-col items-center justify-center space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-3xl font-semibold">
              Welcome to EDU DEMO COGNITO
            </h1>
            <p className="text-sm text-muted-foreground">
              Please log in to access the system.
            </p>
          </div>
          <Button onClick={handleLogin}>Login with SSO</Button>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking login, you agree to our{' '}
            <Link to="/terms" className="underline hover:text-primary">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="underline hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/security.webp"
          alt="Authentication"
          className="size-full object-cover backdrop-brightness-200 dark:brightness-[0.2] dark:grayscale"
        />
        <div className="absolute right-4 top-4 text-lg font-semibold text-white">
          EDU DEMO COGNITO
        </div>
        <div className="absolute bottom-4 right-4 text-white">
          <blockquote>“Empowering your solutions”</blockquote>
          <div className="font-bold">Edu Team</div>
        </div>
      </div>
    </div>
  );
};

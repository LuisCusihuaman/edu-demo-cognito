import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

export const CallbackRoute = () => {
  const auth = useAuth();
  const navigate = useNavigate(); // import useNavigate from 'react-router-dom'

  useEffect(() => {
    if (!auth.isLoading && !auth.error && auth.isAuthenticated) {
      navigate('/');
    }
  }, [auth, navigate]);

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    console.log(auth.error);
    return <div>Error: {auth.error.message}</div>;
  }

  return null; // or a loading spinner or some default content
};

import './App.css';

import type { AuthProviderProps } from 'react-oidc-context';
import { AuthProvider } from 'react-oidc-context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CallbackRoute } from './routes/callback-route';
import DashboardRoute from './routes/dashboard-route';
import NotFoundRoute from './routes/not-found-route';

function App() {
  const oidcConfig: AuthProviderProps = {
    authority: import.meta.env.VITE_OIDC_URL,
    client_id: import.meta.env.VITE_OIDC_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_OIDC_REDIRECT_URI,
    response_type: 'code',
    scope: 'email openid profile',
  };

  return (
    <AuthProvider {...oidcConfig}>
      <BrowserRouter>
        <Routes>
          <Route path="/oidc/callback" element={<CallbackRoute />} />
          <Route index element={<DashboardRoute />}></Route>
          <Route path="*" element={<NotFoundRoute />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

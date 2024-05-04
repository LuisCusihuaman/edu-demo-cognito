import type { ReactNode } from 'react';
import { useAuth } from 'react-oidc-context';

import { Header } from './header';
import { MainContent } from './main-content';
import { Sidebar } from './sidebar';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading authentication status...</div>;
  }

  // if (!auth.isAuthenticated) {
  //   return <LoginPage />;
  // }
  return (
    <div key="1" className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};

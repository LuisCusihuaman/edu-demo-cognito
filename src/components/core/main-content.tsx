import type { ReactNode } from 'react';

type MainContentProps = {
  children: ReactNode;
};

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <main className="flex-1 overflow-auto p-4 sm:px-6">{children}</main>;
};

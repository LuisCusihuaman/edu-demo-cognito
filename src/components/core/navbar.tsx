import { Link } from 'react-router-dom';

import { HomeIcon, PackageIcon, UserIcon } from './icons-core';

export const NavBar = () => {
  return (
    <nav className="grid gap-6 text-lg font-medium">
      <Link
        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        to="/"
      >
        <HomeIcon className="size-6 shrink-0 items-center justify-center gap-2 rounded-full bg-primary p-1 text-lg font-semibold text-primary-foreground transition-all group-hover:scale-110 md:text-base" />
        Dashboard
      </Link>
      <Link
        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        to="/components"
      >
        <PackageIcon className="size-5" />
        Chats
      </Link>
      <Link
        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        to="/teams"
      >
        <UserIcon className="size-5" />
        Users
      </Link>
    </nav>
  );
};

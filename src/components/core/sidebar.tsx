import { Link } from 'react-router-dom';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { HomeIcon, PackageIcon, UserIcon } from './icons-core';

export const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:size-8"
                to="/"
              >
                <HomeIcon className="size-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8"
                to="/chats"
              >
                <PackageIcon className="size-5" />
                <span className="sr-only">Chats</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Chats</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8"
                to="/users"
              >
                <UserIcon className="size-5" />
                <span className="sr-only">Users</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Users</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

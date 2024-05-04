import { useAuth } from 'react-oidc-context';
import { Link } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Input } from '../ui/input';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import {
  LogOutIcon,
  MoonIcon,
  PanelLeftIcon,
  SearchIcon,
  SunIcon,
} from './icons-core';
import { NavBar } from './navbar';

export const Header = () => {
  const auth = useAuth();
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="sm:hidden" size="icon" variant="outline">
            <PanelLeftIcon className="size-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-xs" side="left">
          <NavBar />
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/chats">Chats</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>List</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0">
        <SearchIcon className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
        <Input
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          placeholder="Search..."
          type="search"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="relative ml-auto size-8 rounded-full"
            variant="outline"
          >
            <Avatar>
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>
                {auth?.user?.profile?.name?.[0] || 'U'}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" alignOffset={-4} className="w-56">
          <DropdownMenuLabel>
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>
                  {auth?.user?.profile?.name?.[0] ?? 'U'}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium leading-none">
                  {auth.user?.profile.name}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {auth.user?.profile.email}
                </p>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuGroup>
            <DropdownMenuItem>
              <UserIcon className="mr-2 size-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon className="mr-2 size-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button className="flex items-center" onClick={auth.removeUser}>
              <LogOutIcon className="mr-2 size-4" />
              Log out
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="rounded-full" size="icon" variant="outline">
            <SunIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" alignOffset={-4} className="w-56">
          <DropdownMenuItem>
            <SunIcon className="mr-2 size-4" />
            <span>Light Mode</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MoonIcon className="mr-2 size-4" />
            <span>Dark Mode</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

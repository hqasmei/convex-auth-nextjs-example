'use client';

import React, { ReactNode } from 'react';

import { ThemeToggle } from '@/components/theme-toggle';
import { UserMenu } from '@/components/user-menu';
import { api } from '@/convex/_generated/api';
import { Authenticated, Unauthenticated, useQuery } from 'convex/react';

export default function Header() {
  const user = useQuery(api.users.viewer);
  return (
    <header className="sticky top-0 z-10 flex min-h-20 border-b bg-background/80 backdrop-blur">
      <nav className="container w-full justify-between flex flex-row items-center gap-6">
        <div className="flex items-center gap-6 md:gap-10">
          <a href="/">
            <h1 className="text-base font-semibold">Convex Auth Demo</h1>
          </a>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://convex.dev"
              className="text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
            >
              Convex
            </a>
            <a
              href="https://docs.convex.dev"
              className="text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
            >
              Docs
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6 md:gap-10">
          <ThemeToggle />
          <Authenticated>
            <UserMenu>
              {user?.name ?? user?.email ?? user?.phone ?? 'Anonymous'}
            </UserMenu>
          </Authenticated>
          <Unauthenticated>{null}</Unauthenticated>
        </div>
      </nav>
    </header>
  );
}

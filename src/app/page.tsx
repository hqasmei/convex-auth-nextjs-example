'use client';

import { SignInFormsShowcase } from '@/components/sign-in-forms-showcase';
import { api } from '@/convex/_generated/api';
import { Authenticated, Unauthenticated, useQuery } from 'convex/react';

export default function Home() {
  const user = useQuery(api.users.viewer);
  return (
    <main className="flex grow flex-col overflow-hidden">
      <>
        <Authenticated>
          <div className="container py-16 items-center justify-center text-center">
            <span className='text-4xl font-bold'>You are in {user?.name}</span>
          </div>
        </Authenticated>
        <Unauthenticated>
          <SignInFormsShowcase />
        </Unauthenticated>
      </>
    </main>
  );
}

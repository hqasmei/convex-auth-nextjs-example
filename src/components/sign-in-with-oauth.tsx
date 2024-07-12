'use client';

import { SignInWithGitHub } from '@/components/buttons/sign-in-with-github';
import { SignInWithGoogle } from '@/components/buttons/sign-in-with-google';

export function SignInWithOAuth() {
  return (
    <div className="flex flex-col min-[460px]:flex-row w-full gap-2 items-stretch">
      <SignInWithGitHub />
      <SignInWithGoogle />
    </div>
  );
}

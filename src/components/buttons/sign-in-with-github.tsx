'use client';

import { GitHubIcon } from '@/components/icons/github';
import { Button } from '@/components/ui/button';
import { useAuthActions } from '@convex-dev/auth/react';

export function SignInWithGitHub() {
  const { signIn } = useAuthActions();
  return (
    <Button
      className="flex-1"
      variant="outline"
      type="button"
      onClick={() => void signIn('github')}
    >
      <GitHubIcon className="mr-2 h-4 w-4" /> GitHub
    </Button>
  );
}

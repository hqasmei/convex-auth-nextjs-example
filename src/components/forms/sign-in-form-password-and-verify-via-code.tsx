import { useState } from 'react';

import { CodeInput } from '@/components/code-input';
import { ResetPasswordWithEmailCode } from '@/components/reset-password-with-email-code';
import { SignInMethodDivider } from '@/components/sign-in-method-divider';
import { SignInWithOAuth } from '@/components/sign-in-with-oauth';
import { SignInWithPassword } from '@/components/sign-in-with-password';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { useAuthActions } from '@convex-dev/auth/react';

/**
 * Users choose between OAuth providers or email and password combo
 * with required email verification and optional password reset via OTP.
 */
export function SignInFormPasswordAndVerifyViaCode() {
  const { signIn } = useAuthActions();
  const { toast } = useToast();
  const [step, setStep] = useState<'signIn' | { email: string } | 'forgot'>(
    'signIn',
  );
  const [submitting, setSubmitting] = useState(false);
  return (
    <div className="max-w-[384px] mx-auto flex flex-col gap-4">
      {step === 'signIn' ? (
        <>
          <h2 className="font-semibold text-2xl tracking-tight">
            Sign in or create an account
          </h2>
          <SignInWithOAuth />
          <SignInMethodDivider />
          <SignInWithPassword
            handleSent={(email) => setStep({ email })}
            handlePasswordReset={() => setStep('forgot')}
            provider="password-code"
          />
        </>
      ) : step === 'forgot' ? (
        <ResetPasswordWithEmailCode
          provider="password-code"
          handleCancel={() => setStep('signIn')}
        />
      ) : (
        <>
          <h2 className="font-semibold text-2xl tracking-tight">
            Check your email
          </h2>
          <p className="text-muted-foreground text-sm">
            Enter the 8-digit code we sent to your email address.
          </p>
          <form
            className="flex flex-col"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitting(true);
              const formData = new FormData(event.currentTarget);
              signIn('password-code', formData).catch((error) => {
                console.error(error);
                toast({
                  title: 'Code could not be verified, try again',
                  variant: 'destructive',
                });
                setSubmitting(false);
              });
            }}
          >
            <label htmlFor="email">Code</label>
            <CodeInput />
            <input name="email" value={step.email} type="hidden" />
            <input name="flow" value="email-verification" type="hidden" />
            <Button type="submit" disabled={submitting}>
              Continue
            </Button>
            <Button
              type="button"
              variant="link"
              onClick={() => setStep('signIn')}
            >
              Cancel
            </Button>
          </form>
        </>
      )}
      <Toaster />
    </div>
  );
}

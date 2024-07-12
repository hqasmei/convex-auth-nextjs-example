import { useState } from 'react';

import { ResetPasswordWithEmailCode } from '@/components/reset-password-with-email-code';
import { SignInWithPassword } from '@/components/sign-in-with-password';
import { Toaster } from '@/components/ui/toaster';

/**
 * Users choose between OAuth providers or email and password combo.
 * If they forgot their password, they can reset it via OTP code
 * sent to their email.
 */
export function SignInFormPasswordAndResetViaCode() {
  const [step, setStep] = useState<'signIn' | 'forgot'>('signIn');
  return (
    <div className="max-w-[384px] mx-auto flex flex-col gap-4">
      {step === 'signIn' ? (
        <>
          <h2 className="font-semibold text-2xl tracking-tight">
            Sign in or create an account
          </h2>
          <SignInWithPassword
            provider="password-with-reset"
            handlePasswordReset={() => setStep('forgot')}
          />
        </>
      ) : (
        <ResetPasswordWithEmailCode
          provider="password-with-reset"
          handleCancel={() => setStep('signIn')}
        />
      )}
      <Toaster />
    </div>
  );
}

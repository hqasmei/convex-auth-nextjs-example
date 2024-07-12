import Apple from '@auth/core/providers/apple';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import Resend from '@auth/core/providers/resend';
import { Anonymous } from '@convex-dev/auth/providers/Anonymous';
import { Password } from '@convex-dev/auth/providers/Password';
import { convexAuth } from '@convex-dev/auth/server';

import { ResendOTP } from './otp/ResendOTP';
import { TwilioOTP } from './otp/TwilioOTP';
import { TwilioVerify } from './otp/TwilioVerify';
import { ResendOTPPasswordReset } from './passwordReset/ResendOTPPasswordReset';

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [
    GitHub,
    Google,
    Apple,
    Resend,
    ResendOTP,
    TwilioVerify,
    TwilioOTP,
    Password,
    Password({ id: 'password-with-reset', reset: ResendOTPPasswordReset }),
    Password({
      id: 'password-code',
      reset: ResendOTPPasswordReset,
      verify: ResendOTP,
    }),
    // This one only makes sense with routing, ignore for now:
    Password({ id: 'password-link', verify: Resend }),
    Anonymous,
  ],
});

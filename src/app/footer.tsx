import React, { ReactNode } from 'react';

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="underline underline-offset-4 hover:no-underline"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t hidden sm:block">
      <div className="container py-4 text-sm leading-loose">
        Built with ❤️ by Hosna Qasmei, based off this example{' '}
        <FooterLink href="https://github.com/get-convex/convex-auth-example/">
          Convex React Example.
        </FooterLink>{' '}
        <FooterLink href="https://nextjs.org/">Next.js</FooterLink>,{' '}
        <FooterLink href="https://tailwindcss.com">Tailwind CSS</FooterLink> and{' '}
        <FooterLink href="https://ui.shadcn.com/">shadcn/ui</FooterLink>. The
        source code is available on{' '}
        <FooterLink href="https://github.com/hqasmei/convex-auth-nextjs-example">
          GitHub
        </FooterLink>
        .
      </div>
    </footer>
  );
}

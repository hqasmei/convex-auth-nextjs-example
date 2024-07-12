import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from './footer';
import Header from './header';

import '../styles/globals.css';

import { ContextProvider } from '@/components/context-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Convex Auth Next.js Example',
  description: 'This is an example of how to use Convex Auth with Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <div className="flex h-screen w-full flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}

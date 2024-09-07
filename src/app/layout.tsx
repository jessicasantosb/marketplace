import type { Metadata } from 'next';
import { Oxygen } from 'next/font/google';

import { Header } from '@/components/layout/Header';
import { cn } from '@/lib/utils';
import './globals.css';

const oxygem = Oxygen({ weight: ['300', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(oxygem.className, 'min-h-screen flex flex-col')}>
        <Header />
        <main className='flex-grow'>{children}</main>
      </body>
    </html>
  );
}

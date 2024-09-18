import type { Metadata } from 'next';
import { Oxygen } from 'next/font/google';

import { Header } from '@/components/layout/Header';
import AppCartProvider from '@/components/shop/AppCartProvider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import './globals.css';

const oxygem = Oxygen({ weight: ['300', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marketplace',
  description:
    'Compre seus produtos de forma segura e prática aqui no Marketplace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(oxygem.className, 'min-h-screen flex flex-col')}>
        <AppCartProvider>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Toaster />
        </AppCartProvider>
      </body>
    </html>
  );
}

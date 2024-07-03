import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

import ReactQueryProvider from '../providers/ReactQueryProvider';

import { LayoutController } from './layout.controller';

export const metadata: Metadata = {
  title: 'Open School',
  description: 'Manage your school(s) with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <LayoutController>{children}</LayoutController>
        </body>
      </html>
    </ReactQueryProvider>
  );
}

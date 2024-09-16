import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

import ReactQueryProvider from '../providers/ReactQueryProvider';

import { LayoutController } from './layout.controller';

import { Navbar } from '@/components/Navbar/Navbar.comp';
import { MainMenu } from '@/components/MainMenu/MainMenu.comp';

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
          <LayoutController>
            <Navbar />
            <div className="flex">
              <MainMenu />
              <main className="flex flex-col min-h-screen pt-12 pl-12 grow pr-12">
                {children}
              </main>
            </div>
          </LayoutController>
        </body>
      </html>
    </ReactQueryProvider>
  );
}

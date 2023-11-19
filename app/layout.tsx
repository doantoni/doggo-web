import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doggo web',
  description: 'We train doggos',
  icons: 'favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes =
    'leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed bg-gradient-to-b from-red-900 via-orange-800 to-yellow-700';

  return (
    <html lang="en">
      <body className={classes}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

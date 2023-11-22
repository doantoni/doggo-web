import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Snoopy - skola za pse',
  description: 'Skola za pse',
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

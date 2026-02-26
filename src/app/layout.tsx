import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Islamic Society',
  description: 'Islamic Society - Prayer Times and Community',
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

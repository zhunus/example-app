import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin', 'cyrillic-ext'],
  display: 'swap',
});

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
    <html lang="en">
      <body className={`${roboto.className}`}>
        <header>
          <Link className="brand" href="/">
            Example app
          </Link>
        </header>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} example app</p>
        </footer>
      </body>
    </html>
  );
}

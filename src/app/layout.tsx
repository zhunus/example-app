import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import {auth} from '@/auth';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin', 'cyrillic-ext'],
  display: 'swap',
});

export const metadata: Metadata = {
  openGraph: {
    title: 'Example app',
    description: 'Example app description',
    url: 'example-app-sigma-flax.vercel.app',
    siteName: 'Example app',
    images: [
      {
        url: 'https://example-app-sigma-flax.vercel.app/avatar.jpg',
        width: 300,
        height: 300,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <header>
          <Link className="brand" href="/">
            Example app
          </Link>
          <nav>
            {session ? (
              <Link className="link" href="/profile">
                Профиль
              </Link>
            ) : (
              <Link className="link" href="/auth/login">
                Войти
              </Link>
            )}
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} example app</p>
        </footer>
      </body>
    </html>
  );
}


import './global.css';
import NextUIWrapper from './wrappers/NextUIWrapper';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';

/* 
TODO: a revoir 
*/

export const metadata: Metadata = {
  metadataBase: new URL('https://mahautlatinis.io'),
  title: {
    default: 'Mahaut Latinis',
    template: '%s | Mahaut Latinis',
  },
  description: 'Portfolio',
  openGraph: {
    title: 'Mahaut Latinis',
    description: 'Portfolio',
    url: 'https://mahautlatinis.io',
    siteName: 'Mahaut Latinis',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'mahautlatinis',
    card: 'summary_large_image',
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
      <link
          rel="alternate"
          type="application/rss+xml"
          title="Flux RSS de Mahaut"
          href="/api/rss"
        />
      </head>
        <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
          <NextUIWrapper>
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <Navbar />
              {children}
            </main> 
          </NextUIWrapper>
        </body>
    </html>
  );
}

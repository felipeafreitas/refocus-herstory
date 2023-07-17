import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Refocus Herstory',
  description: 'Refocus Herstory',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClassname = `${inter.className} flex min-h-screen flex-col items-center justify-center`

  return (
    <html lang='en'>
      <body className={bodyClassname}>
        <main className='flex flex-col items-center justify-center max-w-screen-md py-10'>
          {children}
        </main>
      </body>
    </html>
  );
}

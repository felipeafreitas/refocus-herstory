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
        <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex flex-col min-h-screen items-center'>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}


// Explanation:

// min-h-screen: This class ensures that the layout always takes at least the full height of the viewport, so the background color extends to the bottom of the screen.

// container: The container class centers the content and limits its maximum width. By default, it adapts to the screen size on larger screens and maintains a reasonable width on smaller screens.

// px-4 sm:px-6 lg:px-8: These classes add horizontal padding to the container, and the values are adjusted at different screen sizes. On small screens, there's less padding, and on larger screens, there's more padding.

// flex flex-col: This class is used to create a flex container that stacks its children vertically. This allows us to easily organize the layout components inside the Layout component.

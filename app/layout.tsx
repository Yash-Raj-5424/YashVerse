import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Yash Raj - Backend Engineer',
  description: 'Backend engineer portfolio. Experienced in distributed systems, microservices, and scalable architecture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                  const theme = storedTheme === 'light' || storedTheme === 'dark'
                    ? storedTheme
                    : (prefersLight ? 'light' : 'dark');

                  document.documentElement.dataset.theme = theme;
                  document.documentElement.style.colorScheme = theme;
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-dark-bg text-dark-text">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

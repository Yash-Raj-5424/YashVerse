import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yash Raj - Backend Engineer',
  description: 'Backend engineer portfolio. Experienced in distributed systems, microservices, and scalable architecture.',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-dark-text">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

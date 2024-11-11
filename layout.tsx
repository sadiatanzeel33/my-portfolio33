// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar'
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A Next.js portfolio built with React and TypeScript',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

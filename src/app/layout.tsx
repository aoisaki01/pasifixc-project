// File: src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import LanguageSwitcher from './components/LanguageSwitcher';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Menambah variasi weight untuk fleksibilitas desain
  variable: '--font-lexend',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pasifixc | Premier Multimedia Production Partner',
  description: 'Pasifixc delivers professional video editing, motion graphics, and comprehensive multimedia solutions. We serve as your dedicated creative partner for high-quality post-production.',
  keywords: ['Multimedia', 'Video Editing', 'Motion Graphics', 'Post Production', 'Creative Studio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable} scroll-smooth`}>
      <body className="antialiased text-slate-800 bg-white">
        <LanguageSwitcher />
        <VideoBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

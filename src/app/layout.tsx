// File: src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground'; // <-- Impor komponen video
import LanguageSwitcher from './components/LanguageSwitcher';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});
const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'Pasifixc - Third-Party Multimedia Partner',
  description: 'Pasifixc menyediakan jasa editing, motion graphics, dan solusi multimedia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body>
         <LanguageSwitcher />
        <VideoBackground /> {/* <-- TAMBAHKAN DI SINI */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
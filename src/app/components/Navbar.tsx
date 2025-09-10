'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/#' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Graphic Design', href: '/#graphic-design' },
  { name: 'Contact', href: '/#contact' }
];

// --- PERBAIKAN UTAMA DI SINI ---
// Varian animasi untuk menu dropdown
const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
} as const; // <-- TAMBAHKAN 'as const'

// Varian untuk animasi ikon hamburger (dirapikan)
const topSpanVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 6 }
} as const;

const middleSpanVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 }
} as const;

const bottomSpanVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -6 }
} as const;
// --- AKHIR DARI PERBAIKAN ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                   bg-white/40 border border-white/50 shadow-lg rounded-full
                   backdrop-blur-sm
                   transition-all duration-300 ease-in-out
                   hover:bg-white/60"
      >
        <div className="hidden md:flex items-center justify-center px-4 py-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="px-5 py-2 text-gray-700 font-medium rounded-full
                         transition-colors duration-200
                         hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center justify-center px-4 py-2">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-around"
            >
              <motion.span variants={topSpanVariants} className="block h-0.5 w-full bg-gray-800"></motion.span>
              <motion.span variants={middleSpanVariants} className="block h-0.5 w-full bg-gray-800"></motion.span>
              <motion.span variants={bottomSpanVariants} className="block h-0.5 w-full bg-gray-800"></motion.span>
            </motion.div>
          </button>
        </div>
      </nav>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden fixed top-24 left-4 right-4 z-40
                       bg-white/60 backdrop-blur-lg rounded-2xl
                       shadow-xl ring-1 ring-black/5"
          >
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={toggleMenu}
                  className="px-4 py-3 text-lg text-gray-800 font-medium rounded-md
                             hover:bg-white/50 text-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
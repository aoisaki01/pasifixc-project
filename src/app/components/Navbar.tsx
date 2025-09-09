// File: src/components/Navbar.tsx
'use client'; // Komponen ini sekarang interaktif, jadi harus 'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Impor ikon untuk menu

// Daftar link untuk navbar
  const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Graphic Design', href: '/#graphic-design' },
    { name: 'Contact', href: '/#contact' }
  ];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                   bg-white/40 border border-white/50 shadow-lg rounded-full
                   transition-all duration-300 ease-in-out
                   hover:bg-white/60 hover:backdrop-blur-md"
      >
        {/* Tampilan Desktop (terlihat di layar medium ke atas) */}
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

        {/* Tombol Hamburger Menu (hanya terlihat di layar kecil) */}
        <div className="md:hidden flex items-center justify-center px-4 py-2">
          <button onClick={toggleMenu} aria-label="Open menu">
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </nav>

      {/* Panel Menu Mobile (muncul saat isOpen true) */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu} // Menutup menu saat klik di luar area
      >
        <div 
          className={`fixed top-0 left-0 w-4/5 max-w-sm h-screen bg-white shadow-xl
                      transform transition-transform duration-300 ease-in-out
                      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat klik di dalam menu
        >
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="font-bold text-xl text-gray-800">Menu</h2>
            <button onClick={toggleMenu} aria-label="Close menu">
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={toggleMenu} // Menutup menu setelah link diklik
                className="px-4 py-3 text-lg text-gray-700 font-medium rounded-md
                           hover:bg-gray-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
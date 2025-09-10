// File: src/components/Footer.tsx

import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';

// Ikon Discord SVG (karena tidak ada di Lucide)


const Footer = () => {
  const navLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Email', href: 'mailto:pasifixcproject@gmail.com' },
    { name: 'Terms', href: '/terms' },
    { name: 'About', href: '/about' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/pasifixcproject/', icon: Instagram },
    { name: 'YouTube', href: 'https://www.youtube.com/@ixta2897', icon: Youtube },
   
  ];

  return (
    <footer className="w-full  bg-white border-t border-gray-200">
      <div className="w-full max-w-7xl mx-auto py-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Nama Perusahaan */}
          <div className="text-center md:text-left">
            <Link href="/" className="font-heading text-2xl font-bold text-gray-800">
              Pasifixc
            </Link>
            <p className="mt-1 text-sm text-gray-500">Your Creative Multimedia Partner.</p>
          </div>
          
          {/* Navigasi Cepat */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-600 hover:text-red-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Pasifixc. All Rights Reserved.
          </p>

          {/* Ikon Media Sosial */}
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-red-600 transition-colors"
                  aria-label={social.name}
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;


// File: src/components/ContactSection.tsx
'use client';

import { CheckCircle2 } from 'lucide-react';
import React from 'react';

// Simple SVG icons for Discord and WhatsApp


const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="relative mt-3 w-full h-screen snap-start flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-red-50/50"
    >
        <div className="absolute top-1/2 -left-1/4  bg-red-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 -right-1/4  bg-red-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col">
                <h2 className="font-heading my text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
                    Kenapa Harus Kami?
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    Kami bukan hanya sekadar vendor, kami merupakan partner Anda. Dengan tim yang solid dan berpengalaman di berbagai platform, kami menjamin setiap proyek tidak hanya selesai, tetapi juga memberikan hasil yang memuaskan.
                </p>
                <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0" /><span className="text-gray-700"><strong>Proses Cepat & Transparan</strong> - Alur kerja yang jelas.</span></div>
                    <div className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0" /><span className="text-gray-700"><strong>Kualitas Terjamin</strong> - Fokus pada detail untuk hasil premium.</span></div>
                    <div className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0" /><span className="text-gray-700"><strong>Dukungan Penuh</strong> - Kami siap berdiskusi mewujudkan visi Anda.</span></div>
                </div>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/50 text-center">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-800">
                    Hubungi Kami
                </h3>
                <div className="mt-4 inline-block px-4 py-1 bg-gradient-to-r from-red-100 to-red-100 rounded-full">
                    <p className="font-semibold text-red-800">Gratis Konsultasi Terlebih Dahulu</p>
                </div>
                <p className="mt-6 text-gray-600">
                    Siap untuk memulai proyek Anda? Hubungi kami melalui platform pilihan Anda di bawah ini.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    {/* Tombol Discord (Gaya Outline) */}
                    <a 
                      href="https://discord.gg/HSxx7fxs" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex items-center justify-center gap-3 w-full px-6 py-3 border-2 border-red-700 text-red-700 font-semibold rounded-lg shadow-sm hover:bg-red-700 hover:text-white transition-all transform hover:scale-105"
                    >
                     
                      Discord
                    </a>
                    {/* Tombol WhatsApp (Gaya Solid Gradient) */}
                    <a 
                      href="https://wa.me/6282184774837" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-105"
                    >
                     
                      WhatsApp
                    </a>
                </div>
            </div>

        </div>
    </section>
  );
};

export default ContactSection;
'use client';

import React from 'react';
import {Palette, Wand2, Search, Mic, MessageSquare, ClipboardCheck, CreditCard, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Scissors } from "lucide-react";
// ...existing code...
const workflowSteps = [
  { title: 'Kontak & Brief Awal', description: 'Anda menghubungi tim kami dengan ide atau kebutuhan proyek Anda.', icon: MessageSquare },
  { title: 'Diskusi & Konsultasi', description: 'Kami mendalami visi Anda, memberikan masukan, dan menyusun strategi eksekusi.', icon: ClipboardCheck },
  { title: 'Proses Pembayaran', description: 'Setelah menyetujui proposal, proses administrasi diselesaikan untuk memulai proyek.', icon: CreditCard },
  { title: 'Eksekusi & Review', description: 'Tim kami mulai bekerja. Anda akan menerima update dan memberikan feedback hingga hasil akhir tercapai.', icon: Sparkles },
];

const otherServices = [
  { title: 'Produksi Audio', description: 'Jingle, BGM, scoring, dan sound design profesional.', icon: Mic },
  { title: 'Desain Grafis', description: 'Identitas visual, poster, thumbnail, dan aset promosi.', icon: Palette },
  { title: 'Creative Research', description: 'Riset konsep, referensi visual, dan pengembangan ide cerita.', icon: Search }
];

export default function ServicesPage() {
  return (
    // Latar belakang utama kini putih polos
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-white text-slate-800">
      
      {/* Elemen 'blob' dekoratif di latar belakang TELAH DIHAPUS */}

      <div className="relative z-10 w-full">
        {/* BAGIAN 1: PENGENALAN LAYANAN */}
        <section id="services" className="w-full max-w-7xl mx-auto text-center pt-32 pb-20 px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Judul ini sudah menggunakan gradien */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
              Partner Produksi Multimedia Anda
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
Kami adalah studio kreatif dengan layanan produksi multimedia. Kami akan berfungsi sebagai partner dan perpanjangan tangan tim Anda. Kami mengelola setiap detail teknis dan kreatif untuk memastikan tujuan Anda dieksekusi secara presisi dengan hasil yang maksimal.            </p>
          </motion.div>
        </section>

        {/* BAGIAN 2: PENJABARAN PASCA-PRODUKSI */}
        <section className="w-full py-24 px-6">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              {/* Teks diubah menjadi gradien merah */}
              <h2 className="text-3xl font-bold sticky top-24 bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
                Post Production
              </h2>
              <p className="mt-4 text-gray-600">
                Layanan utama kami berfokus pada pasca-produksi video dan film. Kami mengelola setiap aspek teknis dan kreatif untuk memastikan visi Anda terwujud dengan hasil yang memukau.
              </p>
            </div>
            
            <div className="lg:col-span-2 space-y-10">
              {/* ... (Konten pilar pasca-produksi tidak diubah) ... */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-800 text-white rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
                  <Scissors size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Video Editing</h3>
                  <p className="mt-2 text-gray-600">Dari pemotongan pertama hingga polesan akhir, kami menyusun narasi visual Anda. Proses kami mencakup: <strong className="text-red-800">assembly</strong>, <strong className="text-red-800">rough cut</strong>, <strong className="text-red-800">fine cut</strong>, hingga <strong className="text-red-800">final delivery</strong>.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-800 text-white rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
                  <Palette size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Color Grading & Finishing</h3>
                  <p className="mt-2 text-gray-600">Kami membentuk mood dan atmosfer visual film atau video Anda. Termasuk <strong className="text-red-800">koreksi warna primer & sekunder</strong>, <strong className="text-red-800">shot matching</strong>, dan <strong className="text-red-800">look development</strong> untuk mencapai estetika sinematik.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-800 text-white rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
                  <Wand2 size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Efek Visual (VFX)</h3>
                  <p className="mt-2 text-gray-600">Menambahkan elemen yang mustahil untuk meningkatkan skala produksi. Layanan kami meliputi <strong className="text-red-800">compositing</strong>, <strong className="text-red-800">motion tracking</strong>, <strong className="text-red-800">keying (green screen)</strong>, dan integrasi aset digital.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BAGIAN 3: ALUR KERJA */}
        {/* Latar belakang abu-abu (bg-slate-50) DIHAPUS agar putih polos */}
        <section className="w-full py-24 px-6 border-t border-b border-slate-100">
          <div className="w-full max-w-7xl mx-auto text-center">
            {/* Teks diubah menjadi gradien merah */}
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
              Proses Kerja Kami
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Empat langkah transparan untuk membawa ide Anda dari konsep menjadi kenyataan.</p>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* ... (Konten alur kerja tidak diubah) ... */}
              {workflowSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-red-100 shadow-sm hover:shadow-xl hover:shadow-red-200/50 hover:-translate-y-2 transition-all duration-300">
                    <div className="relative mb-4 bg-gradient-to-br from-red-500 to-red-800 text-white p-4 rounded-full">
                      <IconComponent size={32} />
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-slate-800">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 flex-grow">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* BAGIAN 4: LAYANAN LAINNYA */}
        <section className="w-full py-24 px-6">
          <div className="w-full max-w-7xl mx-auto text-center">
            {/* Teks diubah menjadi gradien merah */}
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
              Jangkauan Kreatif Lainnya
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Selain fokus utama kami, keahlian tim kami juga mencakup spektrum kreatif lainnya.</p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ... (Konten layanan lainnya tidak diubah) ... */}
              {otherServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="p-8 bg-white border border-slate-100 rounded-lg text-left shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-red-600 mb-4" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-slate-500">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

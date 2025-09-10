'use client';

import { CheckCircle2, X } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; // Impor Link untuk /terms

const ContactSection = () => {
  // 1. Tambahkan state untuk modal dan URL tujuan
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState('');

  // 2. Buat fungsi untuk mengontrol modal
  const openModal = (url: string) => {
    setTargetUrl(url); // Simpan URL yang akan dibuka (WA atau Discord)
    setIsModalOpen(true); // Buka modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAgree = () => {
    window.open(targetUrl, '_blank'); // Buka URL tujuan di tab baru
    closeModal(); // Tutup modal
  };

  return (
    <>
      <section 
        id="contact" 
        className="relative w-full snap-start flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-red-50/50 py-24 sm:py-32"
      >
        <div className="absolute top-1/2 -left-1/4 bg-red-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 -right-1/4 bg-red-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col">
              <h2 className="font-heading py-6 text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
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
                  <button 
                    onClick={() => openModal('https://discord.com/users/1142802821113200730')} 
                    className="group flex items-center justify-center gap-3 w-full px-6 py-3 border-2 border-red-700 text-red-700 font-semibold rounded-lg shadow-sm hover:bg-red-700 hover:text-white transition-all transform hover:scale-105"
                  >
                    Discord
                  </button>
                  <button 
                    onClick={() => openModal('https://wa.me/6282184774837')} 
                    className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-105"
                  >
                    WhatsApp
                  </button>
              </div>
            </div>

        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800">Syarat & Ketentuan</h3>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* --- KONTEN SYARAT & KETENTUAN DIPERBARUI DI SINI --- */}
              <div className="p-8 max-h-[60vh] overflow-y-auto text-gray-600 space-y-4">
                <p>
                  Dengan melanjutkan, Anda mengonfirmasi bahwa Anda telah membaca dan menyetujui{' '}
                  <Link href="/terms" target="_blank" className="text-red-600 font-semibold underline hover:text-red-700">
                    Syarat & Ketentuan
                  </Link>
                  {' '}kami.
                </p>
                
                <h4 className="font-bold text-gray-800 pt-2">Lingkup Konsultasi</h4>
                <p>
                  Diskusi awal melalui Discord atau WhatsApp bersifat konsultatif dan tidak mengikat. Tujuan dari konsultasi ini adalah untuk memahami kebutuhan proyek Anda dan menentukan apakah layanan kami sesuai untuk Anda.
                </p>

                <h4 className="font-bold text-gray-800 pt-2">Kesepakatan Proyek</h4>
                <p>
                  Rincian lengkap mengenai lingkup pekerjaan, jadwal pengerjaan, jumlah revisi, dan total biaya akan dituangkan dalam sebuah proposal atau kontrak formal yang akan dikirimkan setelah sesi konsultasi awal. Proyek baru akan dimulai setelah ada kesepakatan tertulis dari kedua belah pihak.
                </p>

                <h4 className="font-bold text-gray-800 pt-2">Kerahasiaan Data</h4>
                <p>
                  Semua materi, data, dan informasi yang Anda berikan akan dijaga kerahasiaannya dan hanya akan digunakan untuk keperluan proyek yang sedang dikerjakan.
                </p>
              </div>
              {/* --- AKHIR DARI KONTEN YANG DIPERBARUI --- */}

              <div className="flex justify-end gap-4 p-6 bg-gray-50 border-t">
                <button 
                  onClick={closeModal}
                  className="px-6 py-2 text-gray-700 bg-gray-200 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Batal
                </button>
                <button 
                  onClick={handleAgree}
                  className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Saya Setuju & Lanjutkan
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactSection;
// File: src/components/FaqSection.tsx
'use client'; // Komponen ini interaktif (bisa diklik), jadi harus 'use client'

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// --- Daftar Pertanyaan & Jawaban ---
const faqData = [
  {
    question: 'Berapa lama proses pengerjaan satu proyek video?',
    answer: 'Waktu pengerjaan sangat bervariasi tergantung kompleksitas. Untuk video TikTok atau Reels biasanya 1-3 hari, sementara untuk short film atau video yang lebih kompleks bisa memakan waktu 1-2 minggu setelah semua materi kami terima.'
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Kami menerapkan sistem pembayaran 50% di awal sebagai tanda jadi (down payment), dan 50% sisanya setelah proyek selesai dan disetujui oleh Anda sebelum kami mengirimkan file final tanpa watermark.'
  },
  {
    question: 'Apakah saya bisa meminta revisi?',
    answer: 'Tentu saja. Setiap paket layanan kami sudah termasuk 2 kali revisi minor (seperti perubahan teks atau pemotongan klip). Revisi besar di luar konsep awal akan dikenakan biaya tambahan yang akan kita diskusikan terlebih dahulu.'
  },
  {
    question: 'Materi apa saja yang perlu saya siapkan?',
    answer: 'Untuk kelancaran proses, Anda perlu menyiapkan semua materi mentah (footage video, gambar, musik jika ada), brief atau konsep yang jelas, serta referensi gaya yang Anda inginkan.'
  },
  {
    question: 'Apakah Pasifixc juga melayani pembuatan website dari nol?',
    answer: 'Betul sekali. Selain layanan multimedia, kami juga menyediakan jasa pengembangan website lengkap, mulai dari desain, coding, hingga deployment untuk profil perusahaan, landing page, dan portofolio personal.'
  }
];

// --- Komponen untuk satu item FAQ ---
interface FaqItemProps {
  item: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ item, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border-b border-red-900/20">
      <button 
        onClick={onClick} 
        className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
      >
        <span className="text-lg font-semibold text-gray-800">{item.question}</span>
        <ChevronDown 
          className={`h-6 w-6 text-red-700 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-6 pt-0 text-gray-600">
          {item.answer}
        </div>
      </div>
    </div>
  );
};


// --- Komponen Utama FaqSection ---
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 bg-white">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-950 to-red-500 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Menemukan jawaban untuk pertanyaan yang paling sering diajukan tentang layanan dan proses kerja kami.
          </p>
        </div>
        
        <div className="border border-red-900/10 rounded-xl shadow-lg overflow-hidden">
          {faqData.map((item, index) => (
            <FaqItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
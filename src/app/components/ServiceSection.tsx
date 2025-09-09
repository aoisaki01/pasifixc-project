// File: src/app/services/page.tsx

import React from 'react';
import { Film, Image as ImageIcon, Box, MessageSquare, ClipboardCheck, CreditCard, Sparkles, Code2, Music } from 'lucide-react';

const workflowSteps = [
  { title: 'Chat Tim Kami', icon: MessageSquare },
  { title: 'Konsultasi Kebutuhan', icon: ClipboardCheck },
  { title: 'Proses Pembayaran', icon: CreditCard },
  { title: 'Editing & Selesai', icon: Sparkles },
];

export default function ServicesPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center p-8 pt-28 overflow-hidden bg-white">
      <section id="services" className="w-full max-w-6xl py-10 px-4">
        
        {/* --- BAGIAN 1: LAYANAN KAMI (PENGENALAN) --- */}
        <div className="text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
            Layanan Profesional Kami
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Dari ide mentah hingga hasil akhir yang memukau, kami hadir untuk mengubah visi Anda menjadi kenyataan. Tim kami menangani berbagai kebutuhan multimedia dengan presisi dan kreativitas tinggi.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-red-50/50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <Film size={40} className="mx-auto mb-4 text-red-800" strokeWidth={2} />
            <h3 className="text-2xl font-bold text-gray-800">Video Editing</h3>
            <p className="mt-2 text-gray-600">
              Mulai dari video YouTube, konten media sosial, iklan, hingga film pendek. Kami menangani color grading, audio mixing, motion graphics, dan penyempurnaan visual lainnya.
            </p>
          </div>
          <div className="bg-red-50/50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <ImageIcon size={40} className="mx-auto mb-4 text-red-800" strokeWidth={2} />
            <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
            <p className="mt-2 text-gray-600">
              Retouching foto produk, manipulasi kreatif, desain poster, hingga thumbnail yang menarik. Kami memastikan setiap piksel pada gambar Anda terlihat sempurna dan profesional.
            </p>
          </div>
          <div className="bg-red-50/50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <Box size={40} className="mx-auto mb-4 text-red-800" strokeWidth={2} />
            <h3 className="text-2xl font-bold text-gray-800">CGI & Efek Visual</h3>
            <p className="mt-2 text-gray-600">
              Menambahkan elemen yang tidak ada menjadi ada. Kami menangani tracking objek, green screen, penambahan aset 3D ringan, dan efek visual dasar untuk meningkatkan kualitas produksi Anda.
            </p>
          </div>
        </div>

        {/* --- BAGIAN 2: KEAHLIAN KAMI (PENJELASAN DETAIL) --- */}
        <div id="why-us" className="mt-24">
            <div className="text-center">
                <h2 className="font-heading text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
                Keahlian Kami
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Kami adalah partner kreatif Anda, menggabungkan keahlian teknis di berbagai bidang untuk memastikan brand dan cerita Anda tampil maksimal di semua platform.
                </p>
            </div>

            {/* Pemisah Layanan dengan tata letak di tengah */}
            <div className="mt-16 space-y-20">

              {/* Layanan 1: Multimedia */}
              <div className="flex flex-col items-center text-center gap-6">
                <Film size={80} className="text-red-500" strokeWidth={1.5} />
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold text-gray-800">Multimedia & Pasca-Produksi</h3>
                  <p className="mt-4 text-gray-600">
                    Keahlian kami mencakup spektrum luas, mulai dari konten cepat untuk platform modern hingga proyek sinematik yang kompleks. Kami memastikan setiap frame bercerita.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600 inline-block text-left">
                    <li className="flex items-start"><strong className="text-red-600 w-6 text-center mr-2">✓</strong> Editing video untuk <strong>&nbsp;YouTube, TikTok, AMV, dan GMV&nbsp;</strong>.</li>
                    <li className="flex items-start"><strong className="text-red-600 w-6 text-center mr-2">✓</strong> Layanan pasca-produksi untuk <strong>&nbsp;Short Film&nbsp;</strong> berkualitas *production house*.</li>
                    <li className="flex items-start"><strong className="text-red-600 w-6 text-center mr-2">✓</strong> Desain grafis dan manipulasi gambar profesional.</li>
                  </ul>
                </div>
              </div>

              {/* Layanan 2: Web Development */}
              <div className="flex flex-col items-center text-center gap-6">
                <Code2 size={80} className="text-red-500" strokeWidth={1.5} />
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold text-gray-800">Pengembangan Website</h3>
                  <p className="mt-4 text-gray-600">
                    Hadirkan identitas Anda di dunia digital dengan website yang modern, cepat, dan fungsional. Kami membangun solusi digital dari nol sesuai kebutuhan Anda.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600 inline-block text-left">
                    <li className="flex items-start"><strong className="text-red-600 w-6 text-center mr-2">✓</strong> Website &nbsp; <strong>profil perusahaan (company profile)</strong>.</li>
                    <li className="flex items-start"><strong className="text-red-600 w-6 text-center mr-2">✓</strong> Halaman landas &nbsp; <strong>(landing page) &nbsp;</strong> yang dioptimalkan.</li>
                    <li className="flex items-start"><strong className="text-red-600 w-6 text-center mr-2">✓</strong> Portofolio &nbsp; <strong>personal &nbsp;</strong> yang stylish.</li>
                  </ul>
                </div>
              </div>

              {/* Layanan 3: Audio Production */}
              <div className="flex flex-col items-center text-center gap-6">
                <Music size={80} className="text-red-500" strokeWidth={1.5} />
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold text-gray-800">Produksi Audio & Musik</h3>
                  <p className="mt-4 text-gray-600">
                    Suara adalah separuh dari cerita. Kami menyempurnakan aspek audio proyek Anda agar lebih hidup, emosional, dan berdampak.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600 inline-block text-left">
                    <li className="flex items-start"><strong className="text-red-600 w-6 text-center mr-2">✓</strong> Pembuatan <strong>&nbsp;jingle&nbsp;</strong> dan musik latar <strong>(BGM)</strong> original.</li>
                    <li className="flex items-start"><strong className="text-red-600 w-6 text-center mr-2">✓</strong> <strong>&nbsp;Scoring&nbsp;</strong> atau penataan musik untuk film dan video.</li>
                    <li className="flex items-start"><strong className="text-red-600 w-6 text-center mr-2">✓</strong> <strong>&nbsp;Sound design&nbsp;</strong>, mixing, dan mastering profesional.</li>
                  </ul>
                </div>
              </div>

            </div>
        </div>

        {/* --- BAGIAN 3: ALUR KERJA --- */}
        <div className="mt-24 text-center">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-800">
              Alur Kerja yang Simpel & Efisien
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Kami percaya pada proses yang transparan dan mudah. Hanya dalam 4 langkah, proyek Anda akan selesai.
            </p>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 w-full max-w-4xl mx-auto">
              {workflowSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center text-center">
                      <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-800 to-red-500 rounded-full shadow-md">
                        <IconComponent className="text-white" size={40} strokeWidth={2.5} />
                      </div>
                      <p className="mt-3 font-semibold text-gray-700">{step.title}</p>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className="w-full md:w-1/4 h-1 md:h-auto border-t-2 md:border-t-0 md:border-l-2 border-dashed border-gray-300 mx-4 my-4 md:my-0"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
        </div>

      </section>
    </main>
  );
}
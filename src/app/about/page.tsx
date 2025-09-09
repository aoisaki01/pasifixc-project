// File: src/app/about/page.tsx

import Image from 'next/image';
import { Lightbulb, Gem, Handshake } from 'lucide-react';

// --- Komponen untuk Kartu Nilai (Values Card) ---
const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-red-50/50 p-8 rounded-xl shadow-sm text-center">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600">{children}</p>
  </div>
);

// --- Komponen untuk Kartu Tim (Team Card) ---
const TeamCard = ({ imgSrc, name, role }: { imgSrc: string, name: string, role: string }) => (
  <div className="text-center">
    <div className="relative w-40 h-40 mx-auto mb-4">
      <Image
        src={imgSrc}
        alt={`Foto ${name}`}
        fill
        className="object-cover rounded-full shadow-lg"
      />
    </div>
    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
    <p className="text-gray-500">{role}</p>
  </div>
);

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* --- Section 1: Hero --- */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-br from-white to-red-100">
        <div className="relative z-10 p-8">
          <h1 className="font-heading py-5 text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
            Tentang Pasifixc
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            Kami adalah kolektif kreatif yang bersemangat dalam mengubah ide menjadi karya visual dan digital yang berdampak.
          </p>
        </div>
      </section>

      {/* --- Section 2: Cerita Kami --- */}
      <section className="py-24">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">Cerita Kami</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Pasifixc lahir dari hasrat sederhana: membuat konten berkualitas tinggi dapat diakses oleh semua orang. Kami memulai sebagai tim kecil editor video dan desainer, terobsesi dengan detail dan kekuatan cerita.
              </p>
              <p>
                Seiring berjalannya waktu, kami melihat kebutuhan akan solusi kreatif yang terintegrasi. Klien kami tidak hanya butuh video, mereka butuh identitas digital yang utuh. Dari situlah kami berkembang, merambah ke pengembangan website dan produksi audio untuk menjadi partner kreatif satu atap yang Anda andalkan.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            {/* Ganti dengan gambar tim atau kantor Anda */}
            <div className="relative w-full aspect-square max-w-md rounded-xl shadow-2xl overflow-hidden">
                <Image
                    src="/psfx.png" // Placeholder image, ganti dengan gambar Anda
                    alt="Tim Pasifixc"
                    fill
                    className="object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Nilai-Nilai Kami --- */}
      <section className="py-24 bg-gray-50">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
                <h2 className="font-heading text-4xl font-bold text-gray-800">Nilai-Nilai Kami</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Empat pilar yang menjadi fondasi setiap karya yang kami hasilkan.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ValueCard icon={<Lightbulb size={40} className="text-red-500" />} title="Kreativitas">
                    Kami tidak hanya mengeksekusi, kami berinovasi. Setiap proyek adalah kanvas baru untuk ide-ide segar.
                </ValueCard>
                <ValueCard icon={<Gem size={40} className="text-red-500" />} title="Kualitas Premium">
                    Dari piksel hingga nada audio, kami terobsesi dengan detail untuk memberikan hasil akhir yang sempurna.
                </ValueCard>
                <ValueCard icon={<Handshake size={40} className="text-red-500" />} title="Kemitraan">
                    Kami memposisikan diri sebagai bagian dari tim Anda, bekerja sama secara transparan untuk mencapai tujuan bersama.
                </ValueCard>
            </div>
          </div>
      </section>

      {/* --- Section 4: Tim Kami --- */}
      <section className="py-24">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
                <h2 className="font-heading text-4xl font-bold text-gray-800">Tim Kami</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Bertemu dengan para profesional di balik layar.</p>
            </div>
            {/* Ganti dengan data tim Anda */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                <TeamCard imgSrc="/images/red.jpg" name="Nama Anda" role="Founder & Creative Director" />
                <TeamCard imgSrc="/images/red.jpg" name="Nama Anggota Tim" role="Lead Video Editor" />
                <TeamCard imgSrc="/images/red.jpg" name="Nama Anggota Tim" role="Web Developer" />
            </div>
          </div>
      </section>
    </main>
  );
}
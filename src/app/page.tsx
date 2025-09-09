// File: src/components/HeroSection.tsx

import Image from 'next/image';

const HeroSection = () => {
  return (
    // Kita hapus elemen "blobs" dari dalam div ini
    <div className="relative z-10 flex w-full max-w-6xl items-center justify-between gap-12 flex-col md:flex-row">
      
      {/* Bagian Kiri: Teks Layanan */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 md:w-1/2">
        <h1 className="font-heading  from-red-950 to-red-900 hover:scale-101 duration-150 text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r  text-transparent bg-clip-text">
          Pasifixc
        </h1>
        <p className="font-body text-xl text-gray-700 max-w-md">
          <span className="bg-gradient-to-r from-red-950 to-red-800 text-transparent bg-clip-text font-semibold">Editing, Motion Graphics</span>, & Lainnya di Bidang Media. Kami dapat menjadi
          <span className="bg-gradient-to-r from-red-300 to-red-800 text-transparent bg-clip-text font-semibold"> Third-Party Partner</span> Anda untuk Kebutuhan Multimedia.
        </p>
        <h1>Creative Responsibility for a Class Visual</h1>
        <h1>Creative Studio | Motion Graphic | Post Production | Graphic Design</h1>
      </div>

      {/* Bagian Kanan: Gambar dengan animasi float */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/psfx.png"
          alt="Pasifixc Corporation Logo"
          width={400}
          height={200}
          priority
          className="rounded-lg  shadow-2xl animate-float"
        />
      </div>
    </div>
  );
};

export default HeroSection;

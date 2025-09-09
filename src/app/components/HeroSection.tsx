// File: src/components/HeroSection.tsx

import Image from 'next/image';

const HeroSection = () => {
  return (
    // Kita hapus elemen "blobs" dari dalam div ini
    <div className="relative z-10 flex w-full max-w-7xl items-center justify-between gap-10 flex-col md:flex-row">
      
      {/* Bagian Kiri: Teks Layanan */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 md:w-1/2">
        <h1 className="font-heading  from-red-950 to-red-900 hover:scale-101 duration-150 text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r  text-transparent bg-clip-text">
          Pasifixc.
        </h1>
        <p className="font-body text-xl text-gray-700 max-w-md">
          <span className="bg-gradient-to-r from-red-950 to-red-800 text-transparent bg-clip-text font-semibold">Editing, Motion Graphics</span>, & Lainnya di Bidang Media. Kami dapat menjadi
          <span className="bg-gradient-to-r from-red-300 to-red-800 text-transparent bg-clip-text font-semibold"> Third-Party Partner</span> Anda untuk Kebutuhan Multimedia.
        <div className='mt-4 space-y-1'>
          <h1 className='bg-gradient-to-r from-gray-700 to-gray-500 text text-transparent bg-clip-text font-semibold'>Creative Responsibility for a Class Visual</h1>
          <h1 className='bg-gradient-to-r from-gray-700 to-gray-500 text text-transparent bg-clip-text font-semibold'>Creative Studio | Motion Graphic</h1>
          <h1 className='bg-gradient-to-r from-gray-700 to-gray-500 text text-transparent bg-clip-text font-semibold'>Post Production | Graphic Design.</h1>
        </div>
        </p>
      </div>
      <div>
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


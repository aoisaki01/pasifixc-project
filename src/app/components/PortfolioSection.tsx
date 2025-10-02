'use client'; 

import { useState } from 'react';

// --- Tipe Data (Diperbarui) ---
type Video = {
  id: string;
  title: string;
  publicId: string;
  posterOffset?: number;
  posterUrl?: string; // Properti baru untuk poster kustom
};

export type PortfolioData = {
  motionGraphic: Video[];
  socials: Video[];
  ads: Video[];
  corporate: Video[];
  others: Video[];
};

type PortfolioProps = {
  videos: PortfolioData;
};

// --- Komponen VideoCard (Diperbarui) ---
const VideoCard = ({ title, publicId, posterOffset, posterUrl }: Video) => {
  // Bangun URL dasar
  let videoEmbedUrl = `https://player.cloudinary.com/embed/?cloud_name=dl2ijoilh&public_id=${publicId}&profile=cld-default`;

  // Logika untuk menambahkan poster:
  // 1. Prioritaskan posterUrl kustom jika ada.
  if (posterUrl) {
    // URL untuk poster harus di-encode agar aman digunakan sebagai parameter
    videoEmbedUrl += `&poster=${encodeURIComponent(posterUrl)}`;
  } 
  // 2. Jika tidak ada, gunakan posterOffset.
  else if (posterOffset) {
    videoEmbedUrl += `&poster_options[transformation][start_offset]=${posterOffset}`;
  }
  
  return (
    <div className="group block transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl shadow-black/50 ring-1 ring-white/10 group-hover:ring-red-500 transition-all duration-300">
        <iframe
          src={videoEmbedUrl}
          style={{ height: '100%', width: '100%', aspectRatio: '16 / 9' }}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          className="w-full h-full"
          title={title}
        ></iframe>
      </div>
      <h3 className="mt-4 text-base font-medium text-white group-hover:text-red-400 transition-colors">
        {title}
      </h3>
    </div>
  );
};

// --- Tombol Kategori (Diperbarui) ---
const CategoryButton = ({ label, categoryKey, activeCategory, onClick }: { label: string; categoryKey: string; activeCategory: string; onClick: () => void; }) => {
    const isActive = activeCategory === categoryKey;
    
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2.5 text-sm rounded-full font-bold transition-all duration-300 ${
                isActive
                ? 'bg-red-500 text-white shadow-lg'
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/70'
            }`}
        >
            {label}
        </button>
    );
};


// --- Komponen Utama PortfolioSection ---
const PortfolioSection = ({ videos }: PortfolioProps) => {
  const [activeCategory, setActiveCategory] = useState('motionGraphic');

  const categories = [
    { key: 'motionGraphic', label: 'Motion Graphic' },
    { key: 'socials', label: 'Socials' },
    { key: 'ads', label: 'Ads' },
    { key: 'corporate', label: 'Corporate' },
    { key: 'others', label: 'Others' }
  ];
  
  const videosToShow = videos[activeCategory as keyof PortfolioData] || [];

  return (
    <section id="portfolio" className="relative w-full text-white flex items-center py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-black/70 -z-20" 
        style={{ 
          backgroundImage: "url('/images/red.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'blur(4px)' // Menambahkan blur pada background
        }}
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />


      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
             <span className="text-red-400">Our Portfolio</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Kumpulan karya terbaru kami dalam berbagai bidang kreatif.
          </p>
          <div className="mt-6 h-1 w-24 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Tombol Kategori (Diperbarui) */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map(cat => (
                <CategoryButton 
                    key={cat.key}
                    label={cat.label}
                    categoryKey={cat.key}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory(cat.key)}
                />
            ))}
        </div>

        {/* Grid Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {videosToShow.length > 0 ? (
            videosToShow.map((video, index) => (
              <div key={video.id} style={{ marginTop: index % 2 !== 0 ? '4rem' : '0' }}>
                <VideoCard
                  id={video.id}
                  title={video.title}
                  publicId={video.publicId}
                  posterOffset={video.posterOffset}
                  posterUrl={video.posterUrl}
                />
              </div>
            ))
          ) : (
            <p className="md:col-span-2 text-center text-gray-400">Tidak ada video untuk kategori ini.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


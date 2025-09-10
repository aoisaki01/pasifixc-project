// src/components/PortfolioSection.tsx
'use client'; // This component is now interactive, so we mark it as a Client Component

import { useState } from 'react';
import Image from 'next/image';

// --- VideoCard Component (Can be in the same file or separate) ---
type VideoCardProps = {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
};

const VideoCard = ({ title, thumbnailUrl, videoUrl }: VideoCardProps) => {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block transition-transform duration-300 ease-in-out hover:-translate-y-2"
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl shadow-black/50">
        <div className="absolute inset-0 z-10 rounded-lg ring-1 ring-white/10 group-hover:ring-red-500 transition-all duration-300"></div>
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-16 h-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l8.315-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
        </div>
      </div>
      <h3 className="mt-4 text-base font-medium text-gray-900 group-hover:text-red-400 transition-colors">
        {title}
      </h3>
    </a>
  );
};

// --- Main PortfolioSection Component ---
// We pass the fetched videos as props now
type Video = {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
};

type PortfolioProps = {
  editingMographVideos: Video[];
  commissionVideos: Video[];
};

const PortfolioSection = ({ editingMographVideos, commissionVideos }: PortfolioProps) => {
  const [activeCategory, setActiveCategory] = useState('mograph');

  const categories = {
    mograph: editingMographVideos,
    commission: commissionVideos,
  };

  const videosToShow = categories[activeCategory as keyof typeof categories];

  return (
    <section
      id="portfolio"
      className="relative w-full text-white flex items-center py-24 overflow-hidden"
    >
      <Image
        src="/images/red.jpg"
        alt="Portfolio Background"
        fill
        className="object-cover -z-20"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
             <span className="text-red-400">Our Portfolio</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of our recent works across different creative fields.
          </p>
          <div className="mt-6 h-1 w-24 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* --- Filter Buttons --- */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('mograph')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === 'mograph'
                ? 'bg-red-500 text-white shadow-lg'
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/70'
            }`}
          >
            Editing & Mograph
          </button>
          <button
            onClick={() => setActiveCategory('commission')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === 'commission'
                ? 'bg-red-500 text-white shadow-lg'
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/70'
            }`}
          >
            Commission Works
          </button>
        </div>

        {/* --- Video Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {videosToShow.map((video, index) => (
            <div key={video.id} style={{ marginTop: index % 2 !== 0 ? '4rem' : '0' }}>
              <VideoCard
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.videoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
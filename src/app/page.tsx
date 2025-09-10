// File: src/app/page.tsx

import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesPage from './components/ServiceSection';
import GraphicDesignSection from './components/GraphicDesignSection';
import fs from 'fs';
import path from 'path';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
// --- Fungsi Pengambilan Data (Tetap di sini, di Server Component) ---
async function fetchPlaylist(playlistId: string) {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${YOUTUBE_API_KEY}`;
  try {
    const res = await fetch(API_URL, { next: { revalidate: 3600 } });
    const data = await res.json();
    if (data.error || !data.items) {
      console.error(`YouTube API Error for playlist ${playlistId}:`, data);
      return [];
    }
    return data.items.map((item: {
      snippet: {
        resourceId: { videoId: string };
        title: string;
        thumbnails: {
          maxres?: { url: string };
          high?: { url: string };
          default?: { url: string };
        };
      };
    }) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnailUrl: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
      videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
    }));
  } catch (error) {
    console.error(`Failed to fetch YouTube playlist ${playlistId}:`, error);
    return [];
  }
}

// --- Komponen Halaman Utama ---
export default async function Home() {
  // Ambil data di Server Component
  const [editingMographVideos, commissionVideos] = await Promise.all([
    fetchPlaylist('PLRsqjORXwAcKIr5OLDl6ttrfQyxsyZM4c'),
    fetchPlaylist('PLxholx9QaiMQs30FSPlIB014uL8cYrDUI')
  ]);
function getGraphicDesignImages() {
  try {
    const dir = path.join(process.cwd(), 'public', 'graphdesign');
    const filenames = fs.readdirSync(dir);
    return filenames.filter((file: string) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
  } catch {
    console.warn("Could not read the graph design directory. It might not exist yet.");
    return [];
  }
}
const graphicImages = getGraphicDesignImages();
  return (
    
    <>
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <HeroSection />
    </main>
      <ServicesPage />
      <PortfolioSection editingMographVideos={editingMographVideos} commissionVideos={commissionVideos} />
   <GraphicDesignSection images={graphicImages} /> {/* <-- Tambahkan komponen & teruskan data gambar */}
    <ContactSection /> 
    <Footer />
    </>
  );
}
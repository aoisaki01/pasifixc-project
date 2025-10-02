import HeroSection from './components/HeroSection';
import PortfolioSection, { PortfolioData } from './components/PortfolioSection';
import ServicesPage from './components/ServiceSection';
import GraphicDesignSection from './components/GraphicDesignSection';
import fs from 'fs';
import path from 'path';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// --- Impor data portofolio dari file JSON ---
import portfolioVideos from '../app/data/portfolio-data.json';

// Fungsi untuk membaca gambar desain grafis
function getGraphicDesignImages() {
  try {
    const dir = path.join(process.cwd(), 'public', 'graphdesign');
    const filenames = fs.readdirSync(dir);
    return filenames.filter((file: string) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
  } catch {
    console.warn("Could not read the graph design directory.");
    return [];
  }
}

// --- Komponen Halaman Utama ---
export default async function Home() {
  const graphicImages = getGraphicDesignImages();

  // Memastikan data yang di-pass sesuai dengan tipe PortfolioData
  const videos: PortfolioData = portfolioVideos;

  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <HeroSection />
      </main>
      <ServicesPage />
      <PortfolioSection videos={videos} />
      <GraphicDesignSection images={graphicImages} />
      <ContactSection /> 
      <Footer />
    </>
  );
}
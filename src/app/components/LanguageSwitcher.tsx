"use client";

import { useState, useEffect } from 'react';
import { Languages, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('Original');

  // Helper function untuk membaca cookie
  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  };

  useEffect(() => {
    // --- LOGIKA UNTUK DEFAULT KE BAHASA INGGRIS ---
    const setDefaultLanguage = () => {
      const cookieValue = getCookie('googtrans');
      // Jika cookie ada dan BUKAN '/auto/en' (artinya sedang diterjemahkan ke bahasa lain)
      if (cookieValue && cookieValue !== '/auto/en') {
        // Reset cookie ke default (bahasa Inggris)
        document.cookie = "googtrans=/auto/en; path=/; domain=." + window.location.hostname;
        // Reload halaman SATU KALI untuk menerapkan bahasa default.
        window.location.reload();
      }
    };
    
    // Jalankan fungsi ini sekali saat komponen pertama kali dimuat.
    setDefaultLanguage();
    // --- AKHIR DARI LOGIKA DEFAULT ---

    // Fungsi inisialisasi widget Google
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { 
            pageLanguage: 'en', // Bahasa asli halaman adalah Inggris
            includedLanguages: 'en,id,ja',
          },
          'google_translate_element'
        );
      };
    }

    // Memuat script Google
    const existingScript = document.getElementById('google-translate-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Fungsi untuk mengubah bahasa
  const handleChangeLanguage = (langCode: string, langName: string) => {
    setSelectedLang(langName);
    setIsOpen(false);

    const googleSelect: HTMLSelectElement | null = document.querySelector('.goog-te-combo');
    if (googleSelect) {
      googleSelect.value = langCode;
      googleSelect.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="hidden" id="google_translate_element"></div>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg ring-1 ring-black/5"
        >
          <Languages className="h-5 w-5 text-gray-600" />
          <span className="text-sm font-semibold text-gray-700">{selectedLang}</span>
          <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-full mb-2 w-full min-w-max bg-white/80 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-black/5 overflow-hidden"
            >
              <button onClick={() => handleChangeLanguage('en', 'Original')} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-white/50">Original</button>
              <button onClick={() => handleChangeLanguage('en', 'English')} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-white/50">English</button>
              <button onClick={() => handleChangeLanguage('id', 'Indonesia')} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-white/50">Indonesia</button>
              <button onClick={() => handleChangeLanguage('ja', '日本語')} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-white/50">日本語</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// ... (declare global tetap sama)
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default LanguageSwitcher;
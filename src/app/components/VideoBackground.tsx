// File: src/components/StaticGradientBackground.tsx

// Perhatikan, kita tidak lagi butuh 'use client'
// karena komponen ini menjadi Server Component yang lebih optimal.

const StaticGradientBackground = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[-2]"
      style={{
        background: 'white', // Warna dasar putih)',
        backgroundSize: '100% 100%', // Ukuran gradien pas dengan elemen
      }}
    />
  );
};

export default StaticGradientBackground;
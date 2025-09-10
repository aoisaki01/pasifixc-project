// File: src/app/faq/page.tsx

import FaqSection from "../components/FaqSection";

export default function FaqPage() {
  return (
    // Kita berikan pt-28 untuk memberi ruang di bawah navbar yang fixed
    <div className="pt-28"> 
      <FaqSection />
    </div>
  );
}
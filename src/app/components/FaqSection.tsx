// File: src/components/FaqSection.tsx
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// --- FAQ Data (English) ---
const faqData = [
  {
    question: 'How long does it take to complete a video project?',
    answer: 'The timeline varies depending on complexity. TikTok or Reels videos usually take 1-3 days, while short films or more complex videos may take 1-2 weeks after we receive all materials.'
  },
  {
    question: 'How does the payment system work?',
    answer: 'We require a 50% down payment upfront, and the remaining 50% after the project is completed and approved by you, before we deliver the final watermark-free file.'
  },
  {
    question: 'Can I request revisions?',
    answer: 'Absolutely. Every service package includes 2 minor revisions (such as text changes or clip trimming). Major revisions outside the initial concept will incur additional charges, which we will discuss beforehand.'
  },
  {
    question: 'What materials do I need to prepare?',
    answer: 'To ensure a smooth process, please prepare all raw materials (video footage, images, music if any), a clear brief or concept, and style references you want.'
  },
  {
    question: 'Does Pasifixc also offer website development from scratch?',
    answer: 'Yes, we do. In addition to multimedia services, we provide complete website development, from design and coding to deployment for company profiles, landing pages, and personal portfolios.'
  }
];

// --- Single FAQ Item Component ---
interface FaqItemProps {
  item: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ item, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border-b border-red-900/20">
      <button 
        onClick={onClick} 
        className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
      >
        <span className="text-lg font-semibold text-gray-800">{item.question}</span>
        <ChevronDown 
          className={`h-6 w-6 text-red-700 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-6 pt-0 text-gray-600">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

// --- Main FaqSection Component ---
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 bg-white">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-950 to-red-500 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our services and workflow.
          </p>
        </div>
        
        <div className="border border-red-900/10 rounded-xl shadow-lg overflow-hidden">
          {faqData.map((item, index) => (
            <FaqItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

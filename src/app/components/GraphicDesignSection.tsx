// File: src/components/GraphicDesignSection.tsx
'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type GraphicDesignSectionProps = {
  images: string[];
};

const GraphicDesignSection = ({ images }: GraphicDesignSectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="graphic-design" className="w-full py-24 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold p-3 bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
            Graphic Design Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Swipe to see our collection of graphic design works, image manipulations, and branding materials we have created.
          </p>
        </div>

        {images.length > 0 ? (
          <div className="relative flex items-center justify-center">
            {/* Back Button */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 z-10 p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            
            {/* Carousel Viewport */}
            <div className="overflow-hidden w-full max-w-4xl" ref={emblaRef}>
              <div className="flex">
                {images.map((imageFile) => (
                  <div key={imageFile} className="relative flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_50%] min-w-0 pl-4">
                    <Link
                      href={`/graphdesign/${imageFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
                    >
                      <Image
                        src={`/graphdesign/${imageFile}`}
                        alt={imageFile.split('.')[0]}
                        fill
                        className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={scrollNext}
              className="absolute right-0 z-10 p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">No portfolio images to display at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default GraphicDesignSection;

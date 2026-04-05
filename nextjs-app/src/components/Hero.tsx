'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative min-h-screen flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 overflow-hidden bg-[#1C1B1A] text-[#EBE6DF]">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/Digital Marketers.jpg"
          alt="Marcy Studios background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10 w-full max-w-[90vw] mx-auto">
        <div className="flex flex-col items-start">
          {/* Entrance animation */}
          <h1 
            className={`font-serif text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] leading-[0.85] tracking-tighter-custom mb-8 pr-4 transition-all duration-1000 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Digital
            <br />
            <span className="italic font-display">Marketers</span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl max-w-xl mb-8 text-gray-300 transition-all duration-1000 delay-200 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We craft immersive digital experiences for brands that dare to be different.
          </p>
          
          <div 
            className={`transition-all duration-1000 delay-300 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button href="/#contact" variant="cta">
              Start a Project
            </Button>
          </div>
        </div>

        <div 
          className={`flex flex-col md:flex-row justify-between items-end mt-12 md:mt-24 border-t border-white/10 pt-8 transition-all duration-1000 delay-400 ease-out ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex gap-8 md:gap-16 text-sm uppercase tracking-widest">
            <span>Strategy</span>
            <span>Design</span>
            <span>Development</span>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            Based in New York
          </div>
        </div>
      </div>
    </header>
  );
}
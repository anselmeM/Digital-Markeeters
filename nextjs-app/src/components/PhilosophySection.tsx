'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Magnetic from '@/components/Magnetic';

export default function PhilosophySection() {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-32 px-6 md:px-12 bg-[#EBE6DF] relative overflow-hidden font-sans" id="philosophy">
      <div 
        className="absolute top-0 right-0 w-1/3 h-full bg-[#E5E0D8] -z-0"
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      ></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
        <div className="lg:col-span-5">
          <p className="text-sm font-bold uppercase tracking-widest text-[#B35A46] mb-8">Our Philosophy</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-12 text-[#2A2622]">
            We believe in the <br />
            <span className="font-display italic font-light">power of silence</span> <br />
            in a noisy world.
          </h2>
          <div className="space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-sm font-light">
              Minimalism isn&apos;t just an aesthetic; it&apos;s a tool for clarity. We strip away the non-essential to reveal the core of your brand&apos;s story.
            </p>
            <Magnetic strength={0.3}>
              <Link className="cta-button inline-flex items-center gap-2 border-b border-black pb-1 uppercase text-sm tracking-widest hover:text-[#B35A46] hover:border-[#B35A46] transition-colors cursor-pointer" href="/about">
                Read the Manifesto
              </Link>
            </Magnetic>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-8 items-center">
          <div className="pt-24">
            <Image 
              src="/images/Digital Marketers3.jpg" 
              alt="Agency philosophy section - team collaboration and creative workspace" 
              width={400} 
              height={533}
              className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-lg"
            />
          </div>
          <div>
            <Image 
              src="/images/Digital Marketers2.jpg" 
              alt="Agency detail shot 2" 
              width={400} 
              height={400}
              className="w-full aspect-square object-cover mb-8 grayscale hover:grayscale-0 transition-all duration-500 rounded-lg"
            />
            <p className="text-right text-[10px] uppercase tracking-widest opacity-50 rotate-90 origin-top-right translate-y-full mr-[-1rem]">Est. 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
}

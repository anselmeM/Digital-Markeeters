'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import ProjectShowcase from '@/components/ProjectShowcase';

export default function Home() {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expertiseItems = [
    {
      title: 'Brand Identity',
      description: 'Logo design, visual systems, and brand guidelines crafted to stand the test of time.',
      number: '01',
    },
    {
      title: 'Web Design & Dev',
      description: 'Immersive websites that perform. Award-winning layouts and seamless user experiences.',
      number: '02',
    },
    {
      title: 'Digital Strategy',
      description: 'Data-driven marketing campaigns to amplify your voice across social and search channels.',
      number: '03',
    },
    {
      title: 'Art Direction',
      description: 'Visual storytelling through photography, video, and set design.',
      number: '04',
    },
  ];

  // Hero animation variants
  const heroContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const heroItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  const imageZoom: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 0.4,
      transition: { duration: 1.5, ease: 'easeOut' }
    },
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 overflow-hidden bg-[#1C1B1A] text-[#EBE6DF]">
        <motion.div 
          className="absolute inset-0"
          initial="hidden"
          animate="visible"
          variants={imageZoom}
        >
          <Image
            src="/images/Digital Marketers.jpg"
            alt="Marcy Studios hero background - abstract digital texture showing the agency's creative environment"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.div 
          className="relative z-10 w-full max-w-[90vw] mx-auto"
          initial="hidden"
          animate="visible"
          variants={heroContainer}
        >
          <div className="flex flex-col items-start">
            <motion.p 
              variants={heroItem}
              className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-[#CCAA6E] border-l-2 border-[#CCAA6E] pl-4"
            >
              Digital Experience Agency
            </motion.p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] leading-[0.85] tracking-tighter-custom mb-8 pr-4">
              <motion.span variants={heroItem} className="block ml-0 md:ml-12">Digital</motion.span>
              <motion.span 
                variants={heroItem}
                className="block font-display italic font-light text-[#B35A46] text-6xl md:text-9xl lg:text-[10rem] xl:text-[13rem] transform -translate-y-2 md:-translate-y-8 translate-x-4 md:translate-x-32"
              >
                Alchemy
              </motion.span>
              <motion.span variants={heroItem} className="block text-right self-end w-full pr-0 md:pr-24 mt-[-1rem] md:mt-[-3rem]">Makers</motion.span>
            </h1>
          </div>

          <motion.div 
            variants={heroItem}
            className="flex flex-col md:flex-row justify-between items-end mt-12 md:mt-24 border-t border-white/10 pt-8"
          >
            <div className="max-w-xl text-lg md:text-xl leading-relaxed text-gray-400 font-light">
              We craft immersive digital experiences for brands that dare to be different. Merging strategy with avant-garde design.
            </div>
            <div className="mt-8 md:mt-0 flex items-center gap-4">
              <span className="text-4xl font-light animate-bounce">↓</span>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* Selected Works - New Project Showcase */}
      <ProjectShowcase />

      {/* Philosophy */}
      <section className="py-32 px-6 md:px-12 bg-[#EBE6DF] relative overflow-hidden" id="philosophy">
        <div 
          className="absolute top-0 right-0 w-1/3 h-full bg-[#E5E0D8] -z-0"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        ></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-bold uppercase tracking-widest text-[#B35A46] mb-8">Our Philosophy</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-12">
              We believe in the <br />
              <span className="font-display italic font-light">power of silence</span> <br />
              in a noisy world.
            </h2>
            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-sm">
                Minimalism isn&apos;t just an aesthetic; it&apos;s a tool for clarity. We strip away the non-essential to reveal the core of your brand&apos;s story.
              </p>
              <Link className="cta-button inline-flex items-center gap-2 border-b border-black pb-1 uppercase text-sm tracking-widest hover:text-[#B35A46] hover:border-[#B35A46] transition-colors" href="/about">
                Read the Manifesto
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-8 items-center">
            <div className="pt-24">
              <Image 
                src="/images/Digital Marketers3.jpg" 
                alt="Agency philosophy section - team collaboration and creative workspace" 
                width={400} 
                height={533}
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div>
              <Image 
                src="/images/Digital Marketers2.jpg" 
                alt="Agency detail shot 2" 
                width={400} 
                height={400}
                className="w-full aspect-square object-cover mb-8 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="text-right text-[10px] uppercase tracking-widest opacity-50 rotate-90 origin-top-right translate-y-full mr-[-1rem]">Est. 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 px-6 md:px-12 bg-[#1C1B1A] text-[#EBE6DF]" id="expertise">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-6xl mb-6">Expertise</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Holistic digital solutions tailored for high-end brands. We cover every touchpoint of your digital presence.
            </p>
          </div>

          <div className="lg:col-span-2">
            {expertiseItems.map((item) => (
              <div key={item.number} className="group border-b border-white/20 py-8 cursor-pointer hover:pl-4 transition-all duration-300">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-4xl md:text-5xl group-hover:text-[#CCAA6E] transition-colors">{item.title}</h3>
                  <span className="text-sm text-gray-500 group-hover:text-[#CCAA6E]">{item.number}</span>
                </div>
                <p className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 text-gray-400 text-sm mt-0 group-hover:mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-12 bg-[#151413] text-[#EBE6DF]" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter mb-8">
              Let&apos;s<br />
              <span className="font-display italic text-[#CCAA6E] ml-16">Talk</span>
            </h2>
            <div className="max-w-md mt-12">
              <ContactForm variant="full" />
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-md uppercase tracking-widest text-[#CCAA6E] mb-4">Spicy Grove</h4>
                <p className="text-base text-gray-400 leading-relaxed">
                  215 McLeod Avenue<br />
                  Box 3497, AB T7XX<br />
                  +1 (780) 555-5555
                </p>
              </div>
              <div>
                <h4 className="text-md uppercase tracking-widest text-[#CCAA6E] mb-4">Farmington</h4>
                <p className="text-base text-gray-400 leading-relaxed">
                  123 Design Street<br />
                  New York, NY 10001<br />
                  +1 (234) 567-890
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Newsletter</h4>
              <ContactForm variant="newsletter" />
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-sm uppercase tracking-widest text-gray-500 hover:text-[#B35A46] transition-colors">Instagram</a>
              <a href="#" className="text-sm uppercase tracking-widest text-gray-500 hover:text-[#B35A46] transition-colors">LinkedIn</a>
              <a href="#" className="text-sm uppercase tracking-widest text-gray-500 hover:text-[#B35A46] transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

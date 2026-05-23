'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, animate, type Variants } from 'framer-motion';

export default function HomeHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const distortionScale = useMotionValue(0);
  const baseFreq = useMotionValue(0.025);

  useEffect(() => {
    // Dynamic liquid drift effect: make baseFrequency bounce back and forth infinitely
    const freqAnimation = animate(baseFreq, 0.017, {
      duration: 6,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'linear',
    });
    return () => freqAnimation.stop();
  }, [baseFreq]);

  useEffect(() => {
    if (isHovered) {
      // Surge distortion on entry, settle on moderate hover liquid state
      const scaleAnimation = animate(distortionScale, [0, 48, 16], {
        duration: 1.0,
        times: [0, 0.35, 1],
        ease: 'easeOut',
      });
      return () => scaleAnimation.stop();
    } else {
      // Transition back to perfectly clean text
      const scaleAnimation = animate(distortionScale, 0, {
        duration: 0.5,
        ease: 'easeIn',
      });
      return () => scaleAnimation.stop();
    }
  }, [isHovered, distortionScale]);

  const handleAlchemyMouseMove = (e: React.MouseEvent) => {
    const target = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - target.left) / target.width - 0.5;
    const y = (e.clientY - target.top) / target.height - 0.5;
    setMousePosition({ x, y });
  };

  const resetAlchemyMouse = () => {
    setMousePosition({ x: 0, y: 0 });
  };

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
    <header className="relative min-h-screen flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 overflow-hidden bg-[#1C1B1A] text-[#EBE6DF]">
      {/* SVG Liquid Displacement Filter definition */}
      <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <filter id="liquid-filter-hero">
            <motion.feTurbulence
              type="fractalNoise"
              baseFrequency={baseFreq}
              numOctaves="3"
              result="noise"
              seed="3"
            />
            <motion.feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={distortionScale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

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
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                resetAlchemyMouse();
                setIsHovered(false);
              }}
              onMouseMove={handleAlchemyMouseMove}
              animate={{ 
                x: mousePosition.x * 60 + 128, 
                y: mousePosition.y * 60 - 32,
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              style={{ filter: 'url(#liquid-filter-hero)' }}
              className="block font-display italic font-light text-[#B35A46] text-6xl md:text-9xl lg:text-[10rem] xl:text-[13rem] cursor-default select-none"
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
          <div className="max-w-xl text-lg md:text-xl leading-relaxed text-gray-300 font-light font-sans">
            We craft immersive digital experiences for brands that dare to be different. Merging strategy with avant-garde design.
          </div>
          <div className="mt-8 md:mt-0 flex items-center gap-4">
            <span className="text-4xl font-light animate-bounce">↓</span>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}

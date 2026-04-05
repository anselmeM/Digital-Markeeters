'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import Image from 'next/image';

export function ParallaxImage({ src, alt, height = "60vh" }: { src: string, alt: string, height?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden my-16 md:my-24" style={{ height }}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  );
}

export function SplitSection({ title, children, imageSide = "right", imageSrc, imageAlt }: { 
  title: string, 
  children: ReactNode, 
  imageSide?: "left" | "right",
  imageSrc: string,
  imageAlt: string
}) {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center my-16 md:my-32 ${imageSide === 'left' ? 'lg:direction-rtl' : ''}`}>
      <div className={imageSide === 'left' ? 'lg:order-2' : ''}>
        <h3 className="font-serif text-3xl md:text-4xl mb-6">{title}</h3>
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
      <div className={`relative aspect-square overflow-hidden rounded-lg ${imageSide === 'left' ? 'lg:order-1' : ''}`}>
        <motion.div 
          whileInView={{ scale: [1.1, 1] }} 
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

export function Quote({ text, author }: { text: string, author?: string }) {
  return (
    <div className="max-w-4xl mx-auto text-center my-24 md:my-40 px-6">
      <motion.p 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#2A2622] leading-tight italic"
      >
        &ldquo;{text}&rdquo;
      </motion.p>
      {author && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-[#B35A46] mt-8"
        >
          &mdash; {author}
        </motion.p>
      )}
    </div>
  );
}

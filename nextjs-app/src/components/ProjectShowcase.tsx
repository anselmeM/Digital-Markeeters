'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  number: string;
  title: string;
  category: string;
  year: string;
  image: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'Vogue Essence',
    category: 'Editorial / Web Design',
    year: '2024',
    image: '/images/Digital Marketers2.jpg',
    slug: 'vogue-essence',
  },
  {
    id: 2,
    number: '02',
    title: 'Urban Canvas',
    category: 'Branding / Identity',
    year: '2024',
    image: '/images/Digital Marketers3.jpg',
    slug: 'urban-canvas',
  },
  {
    id: 3,
    number: '03',
    title: 'Silent Architecture',
    category: 'Photography / Strategy',
    year: '2023',
    image: '/images/Digital Marketers4.jpg',
    slug: 'silent-architecture',
  },
  {
    id: 4,
    number: '04',
    title: 'Fashion Forward',
    category: 'Web Design / Art Direction',
    year: '2023',
    image: '/images/Digital Marketers.jpg',
    slug: 'fashion-forward',
  },
  {
    id: 5,
    number: '05',
    title: 'Brand Evolution',
    category: 'Strategy / Branding',
    year: '2023',
    image: '/images/Digital Marketers2.jpg',
    slug: 'brand-evolution',
  },
  {
    id: 6,
    number: '06',
    title: 'Visual Narrative',
    category: 'Art Direction / Photography',
    year: '2023',
    image: '/images/Digital Marketers3.jpg',
    slug: 'visual-narrative',
  },
  {
    id: 7,
    number: '07',
    title: 'Glass Pavilion',
    category: 'Photography / Architecture',
    year: '2024',
    image: '/images/minimalist_glass_pavilion.png',
    slug: 'glass-pavilion',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Project Image Reveal - Shows on hover */}
      <div 
        className={`absolute inset-0 overflow-hidden rounded-lg transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          zIndex: 30,
          pointerEvents: 'none',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
      >
        <motion.div
          className="w-full h-full relative"
          style={{
            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
          }}
          initial={{ scale: 1.15 }}
          animate={{ scale: isHovered ? 1 : 1.15 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image
            src={project.image}
            alt={`${project.title} - ${project.category} project thumbnail`}
            fill
            className="object-cover"
            priority={index < 2}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Floating project info on image */}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-1">
            {project.number}
          </p>
          <h3 className="font-serif text-3xl text-white">{project.title}</h3>
        </div>
      </div>

      {/* Project Content */}
      <Link 
        href={`/work/${project.slug}`} 
        data-cursor="view"
        className="block relative z-20 py-8 border-b border-black/10 group-hover:border-transparent transition-colors duration-300"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-baseline gap-6">
            <span className="text-sm font-serif italic text-gray-400 group-hover:text-[#B35A46] transition-colors duration-300">
              {project.number}
            </span>
            <div>
              <motion.h3 
                className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#2A2622] group-hover:text-[#B35A46] transition-colors duration-300"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-sm uppercase tracking-widest text-gray-500 mt-2 group-hover:text-[#B35A46]/70 transition-colors duration-300">
                {project.category}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm uppercase tracking-widest text-gray-400 group-hover:text-[#2A2622] transition-colors duration-300">
              {project.year}
            </span>
            <motion.span 
              className="block text-2xl mt-2 text-gray-400 group-hover:text-[#B35A46]"
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F2EFE9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#2A2622] leading-none">
            Selected <span className="font-display italic text-[#B35A46]">Works</span>
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-xl">
            A curated selection of projects that showcase our approach to digital design and brand storytelling.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <Link 
            href="/work" 
            data-cursor="pointer"
            className="cta-button inline-block bg-[#B35A46] text-white px-8 py-4 text-base font-medium"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
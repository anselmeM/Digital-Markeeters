'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  slug: string;
  year: string;
  services: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Vogue Essence',
    category: 'editorial',
    slug: 'vogue-essence',
    year: '2024',
    services: 'Editorial / Web Design',
    image: '/images/Digital Marketers2.jpg',
  },
  {
    id: 2,
    title: 'Urban Canvas',
    category: 'branding',
    slug: 'urban-canvas',
    year: '2024',
    services: 'Branding / Identity',
    image: '/images/Digital Marketers3.jpg',
  },
  {
    id: 3,
    title: 'Silent Architecture',
    category: 'photography',
    slug: 'silent-architecture',
    year: '2023',
    services: 'Photography / Strategy',
    image: '/images/Digital Marketers4.jpg',
  },
  {
    id: 4,
    title: 'Fashion Forward',
    category: 'web-design',
    slug: 'fashion-forward',
    year: '2023',
    services: 'Web Design / Art Direction',
    image: '/images/Digital Marketers.jpg',
  },
  {
    id: 5,
    title: 'Brand Evolution',
    category: 'strategy',
    slug: 'brand-evolution',
    year: '2023',
    services: 'Strategy / Branding',
    image: '/images/Digital Marketers2.jpg',
  },
  {
    id: 6,
    title: 'Visual Narrative',
    category: 'art-direction',
    slug: 'visual-narrative',
    year: '2023',
    services: 'Art Direction / Photography',
    image: '/images/Digital Marketers3.jpg',
  },
];

function ProjectListItem({ project, index, itemVariants }: { project: Project; index: number; itemVariants: Variants }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <motion.div
      variants={itemVariants}
      exit="exit"
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative group"
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative w-full border-b border-black/10 py-10 md:py-14 block transition-all duration-300 ease-out hover:bg-black/[0.02]"
      >
        <div className="flex flex-col md:flex-row items-baseline md:items-center justify-between">
          <div className="flex items-baseline gap-4 md:gap-8 flex-1">
            <span className="text-sm font-serif italic text-gray-400 group-hover:text-[#B35A46]">
              0{index + 1}
            </span>
            <div>
              <motion.h2 
                className="font-serif text-3xl md:text-5xl group-hover:text-[#B35A46] transition-colors duration-200"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h2>
              <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">
                {project.services}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 md:gap-16 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
            <span className="text-sm uppercase tracking-widest text-gray-400 group-hover:text-[#2A2622]">
              {project.year}
            </span>
            <motion.span 
              className="text-2xl"
              whileHover={{ x: 8, color: '#B35A46' }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>

      {/* Floating Image Reveal */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed pointer-events-none z-50 w-64 h-80 overflow-hidden rounded-lg shadow-2xl"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'branding', 'web-design', 'art-direction', 'photography', 'strategy'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
    },
    exit: { 
      opacity: 0, 
      y: -20,
    },
  };

  return (
    <main id="main-content" role="main" className="relative w-full pt-28 pb-20 px-6 md:px-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-black/20 pb-5"
      >
        <div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#2A2622]">
            Our <span className="font-display italic text-[#B35A46]">Work</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-md">
            A curated collection of projects that define our approach to digital design.
          </p>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            {filteredProjects.length} Projects
          </span>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-wrap gap-3 md:gap-4 mb-12"
      >
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm uppercase tracking-widest border transition-all duration-200 ease-out ${
              activeFilter === filter
                ? 'border-[#B35A46] text-[#B35A46] bg-[#B35A46]/5'
                : 'border-black/20 text-gray-500 hover:border-[#B35A46] hover:text-[#B35A46]'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {filter === 'all' ? 'All' : filter.replace('-', ' ')}
          </motion.button>
        ))}
      </motion.div>

      {/* Project List with Framer Motion */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectListItem
              key={project.id}
              project={project}
              index={index}
              itemVariants={itemVariants}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-40 mb-20"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">Have a project in mind?</h2>
          <Link className="cta-button bg-[#B35A46] text-white px-8 py-4 text-base font-medium hover:bg-[#963D30] transition-colors" href="/#contact">
            Let&apos;s Talk
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectContentProps {
  project: {
    title: string;
    category: string;
    client: string;
    year: string;
    services: string[];
    description: string;
    challenge: string;
    solution: string;
    images: string[];
  };
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
} as const;

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <main id="main-content" role="main" className="relative w-full pt-32 pb-20 px-6 md:px-12">
      {/* Hero */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-16 md:mb-24"
      >
        <Link href="/work" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-[#B35A46] transition-colors mb-8">
          ← Back to Work
        </Link>
        
        <motion.h1 
          variants={fadeInUp}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#2A2622] leading-[0.85] mb-8"
        >
          {project.title}
        </motion.h1>
        
        <motion.div 
          variants={staggerContainer}
          className="flex flex-wrap gap-8 md:gap-16 text-sm uppercase tracking-widest"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-gray-500 block mb-1">Category</span>
            <span className="text-[#2A2622]">{project.category}</span>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <span className="text-gray-500 block mb-1">Client</span>
            <span className="text-[#2A2622]">{project.client}</span>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <span className="text-gray-500 block mb-1">Year</span>
            <span className="text-[#2A2622]">{project.year}</span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Main Image */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 md:mb-24"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.section>

      {/* Project Info */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12"
      >
        <motion.div variants={fadeInUp} className="lg:col-span-4">
          <h2 className="font-serif text-4xl md:text-5xl text-[#2A2622] mb-8">
            About the <span className="font-display italic text-[#B35A46]">Project</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {project.description}
          </p>
          
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Services</h3>
            <ul className="space-y-2">
              {project.services.map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 8, color: '#B35A46' }}
                  className="text-[#2A2622] cursor-default transition-colors"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <div className="lg:col-span-8 space-y-16">
          <motion.div variants={fadeInUp}>
            <h3 className="font-serif text-2xl md:text-3xl text-[#2A2622] mb-4">The Challenge</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h3 className="font-serif text-2xl md:text-3xl text-[#2A2622] mb-4">The Solution</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-16 md:mb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.slice(1).map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Next Project CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 border-t border-black/10"
      >
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Next Project</p>
        <Link href="/work" className="font-serif text-4xl md:text-6xl text-[#2A2622] hover:text-[#B35A46] transition-colors">
          View All Projects →
        </Link>
      </motion.section>
    </main>
  );
}
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ParallaxImage, SplitSection, Quote } from './ProjectBlocks';

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
  nextProject: {
    title: string;
    slug: string;
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

export default function ProjectContent({ project, nextProject }: ProjectContentProps) {
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

      {/* Hero Parallax Image */}
      <ParallaxImage src={project.images[0]} alt={project.title} />

      {/* Project Info */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-16 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12"
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

      {/* Dynamic Deep Dive Sections */}
      <div className="max-w-7xl mx-auto mb-24">
        <SplitSection 
          title="The Approach" 
          imageSrc={project.images[1] || project.images[0]} 
          imageAlt="Design Process"
          imageSide="right"
        >
          <p>
            Our process began with deep discovery into the brand&apos;s heritage and future aspirations. 
            We focused on creating a visual language that felt both timeless and contemporary, 
            avoiding trends in favor of enduring design principles.
          </p>
          <p>
            Through iterative prototyping and continuous feedback loops, we refined every interaction 
            to ensure it aligned with the core project objectives while pushing the boundaries of what&apos;s 
            possible in the digital realm.
          </p>
        </SplitSection>

        <Quote 
          text="Design is not just what it looks like and feels like. Design is how it works." 
          author="Steve Jobs" 
        />

        <SplitSection 
          title="Attention to Detail" 
          imageSrc={project.images[2] || project.images[0]} 
          imageAlt="Details"
          imageSide="left"
        >
          <p>
            Every pixel was considered. From the custom typography pairings to the subtle micro-interactions, 
            we ensured that the user journey was seamless and delightful at every touchpoint.
          </p>
          <p>
            The resulting experience doesn&apos;t just communicate information; it evokes an emotional 
            response and builds a lasting connection between the brand and its audience.
          </p>
        </SplitSection>
      </div>

      {/* Next Project CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center py-24 border-t border-black/10"
      >
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Next Project</p>
        <Link href={`/work/${nextProject.slug}`} className="group inline-block">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl text-[#2A2622] group-hover:text-[#B35A46] transition-colors mb-4">
            {nextProject.title}
          </h2>
          <span className="inline-block text-2xl group-hover:translate-x-4 transition-transform duration-300">
            →
          </span>
        </Link>
      </motion.section>
    </main>
  );
}

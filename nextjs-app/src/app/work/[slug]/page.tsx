'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Sample project data - in production this would come from a CMS
const projectsData: Record<string, {
  title: string;
  category: string;
  client: string;
  year: string;
  services: string[];
  description: string;
  challenge: string;
  solution: string;
  images: string[];
}> = {
  'vogue-essence': {
    title: 'Vogue Essence',
    category: 'Editorial / Web Design',
    client: 'Vogue',
    year: '2024',
    services: ['Art Direction', 'Web Design', 'Development'],
    description: 'A revolutionary digital editorial platform that redefines the fashion magazine experience for the modern age.',
    challenge: 'Transform traditional print magazine aesthetics into an immersive digital experience while maintaining the prestigious brand identity.',
    solution: 'Created a dynamic editorial platform with fluid animations, interactive storytelling, and a sophisticated visual language that bridges print and digital.',
    images: ['/images/Digital Marketers2.jpg', '/images/Digital Marketers3.jpg', '/images/Digital Marketers4.jpg'],
  },
  'urban-canvas': {
    title: 'Urban Canvas',
    category: 'Branding / Identity',
    client: 'Urban Art Collective',
    year: '2024',
    services: ['Brand Identity', 'Visual Design', 'Strategy'],
    description: 'A bold new identity for a contemporary art collective bridging street art and gallery culture.',
    challenge: 'Create a visual identity that appeals to both street art enthusiasts and high-end collectors.',
    solution: 'Developed a dynamic brand system that transforms and evolves, mirroring the adaptive nature of street art.',
    images: ['/images/Digital Marketers3.jpg', '/images/Digital Marketers2.jpg', '/images/Digital Marketers.jpg'],
  },
  'silent-architecture': {
    title: 'Silent Architecture',
    category: 'Photography / Strategy',
    client: 'Arch Digest',
    year: '2023',
    services: ['Photography', 'Art Direction', 'Content Strategy'],
    description: 'A photographic exploration of brutalist architecture in modern urban landscapes.',
    challenge: 'Capture the essence of brutalist architecture while making it accessible and engaging for contemporary audiences.',
    solution: 'Created a visual narrative that celebrates the raw beauty of concrete while highlighting its place in modern urban ecosystems.',
    images: ['/images/Digital Marketers4.jpg', '/images/Digital Marketers.jpg', '/images/Digital Marketers2.jpg'],
  },
  'fashion-forward': {
    title: 'Fashion Forward',
    category: 'Web Design / Art Direction',
    client: 'Fashion Week Inc',
    year: '2023',
    services: ['Web Design', 'Art Direction', 'Development'],
    description: 'A cutting-edge platform for showcasing emerging fashion designers during fashion week.',
    challenge: 'Create a platform that celebrates innovation while providing practical information for industry professionals.',
    solution: 'Designed an immersive digital experience with live streaming, designer profiles, and behind-the-scenes content.',
    images: ['/images/Digital Marketers.jpg', '/images/Digital Marketers2.jpg', '/images/Digital Marketers3.jpg'],
  },
  'brand-evolution': {
    title: 'Brand Evolution',
    category: 'Strategy / Branding',
    client: 'Tech Startup',
    year: '2023',
    services: ['Brand Strategy', 'Visual Identity', 'Messaging'],
    description: 'Complete brand transformation for a tech startup entering the enterprise market.',
    challenge: 'Evolve a consumer-focused brand to appeal to enterprise customers while maintaining authenticity.',
    solution: 'Created a sophisticated brand system that speaks to enterprise decision-makers while retaining the brand\'s innovative spirit.',
    images: ['/images/Digital Marketers2.jpg', '/images/Digital Marketers4.jpg', '/images/Digital Marketers.jpg'],
  },
  'visual-narrative': {
    title: 'Visual Narrative',
    category: 'Art Direction / Photography',
    client: 'Luxury Brand',
    year: '2022',
    services: ['Art Direction', 'Photography', 'Video'],
    description: 'A comprehensive visual campaign for a luxury fashion brand\'s seasonal collection.',
    challenge: 'Create a cohesive visual language that works across multiple platforms and touchpoints.',
    solution: 'Developed a flexible visual framework that adapts to different contexts while maintaining brand consistency.',
    images: ['/images/Digital Marketers3.jpg', '/images/Digital Marketers.jpg', '/images/Digital Marketers4.jpg'],
  },
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData[slug] || projectsData['vogue-essence'];

  return (
    <main id="main-content" role="main" className="relative w-full pt-32 pb-20 px-6 md:px-12">
      {/* Hero */}
      <section className="mb-16 md:mb-24">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-[#B35A46] transition-colors mb-8">
          ← Back to Work
        </Link>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#2A2622] leading-[0.85] mb-8">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-8 md:gap-16 text-sm uppercase tracking-widest">
          <div>
            <span className="text-gray-500 block mb-1">Category</span>
            <span className="text-[#2A2622]">{project.category}</span>
          </div>
          <div>
            <span className="text-gray-500 block mb-1">Client</span>
            <span className="text-[#2A2622]">{project.client}</span>
          </div>
          <div>
            <span className="text-gray-500 block mb-1">Year</span>
            <span className="text-[#2A2622]">{project.year}</span>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="mb-16 md:mb-24">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Project Info */}
      <section className="mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
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
                <li key={service} className="text-[#2A2622]">{service}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-8 space-y-16">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#2A2622] mb-4">The Challenge</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#2A2622] mb-4">The Solution</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.slice(1).map((image, index) => (
            <div key={index} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="text-center py-16 border-t border-black/10">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Next Project</p>
        <Link href="/work" className="font-serif text-4xl md:text-6xl text-[#2A2622] hover:text-[#B35A46] transition-colors">
          View All Projects →
        </Link>
      </section>
    </main>
  );
}
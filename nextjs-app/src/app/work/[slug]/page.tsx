import { Metadata } from 'next';
import ProjectContent from '@/components/ProjectContent';

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

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug] || projectsData['vogue-essence'];
  
  return {
    title: `${project.title} - Marcy Studios`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'website',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug] || projectsData['vogue-essence'];
  
  // Calculate next project for circular navigation
  const slugs = Object.keys(projectsData);
  const currentIndex = slugs.indexOf(slug);
  const nextIndex = (currentIndex + 1) % slugs.length;
  const nextSlug = slugs[nextIndex];
  const nextProject = {
    title: projectsData[nextSlug].title,
    slug: nextSlug
  };
  
  return <ProjectContent project={project} nextProject={nextProject} />;
}
import type { Metadata } from 'next';
import WorkSection from '@/components/WorkSection';

export const metadata: Metadata = {
  title: 'Our Work | Marcy Studios',
  description: 'Explore the digital portfolio of Marcy Studios. A curated showcase of digital designs, branding campaigns, and immersive web experiences.',
  openGraph: {
    title: 'Our Work | Marcy Studios',
    description: 'Explore the digital portfolio of Marcy Studios.',
  },
};

export const unstable_instant = {
  prefetch: 'static',
};

export default function Work() {
  return (
    <main id="main-content" role="main" className="relative w-full pt-28 pb-20 px-6 md:px-12">
      <WorkSection />
    </main>
  );
}
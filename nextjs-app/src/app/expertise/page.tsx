import type { Metadata } from 'next';
import ServicesSection from '@/components/ServicesSection';

export const metadata: Metadata = {
  title: 'Our Expertise | Marcy Studios',
  description: 'Explore the digital capabilities of Marcy Studios. From brand identity and art direction to bespoke web design and software engineering.',
  openGraph: {
    title: 'Our Expertise | Marcy Studios',
    description: 'Explore the digital capabilities of Marcy Studios.',
  },
};

export const unstable_instant = {
  prefetch: 'static',
};

export default function Expertise() {
  return (
    <main id="main-content" role="main" className="relative w-full pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[#CCAA6E] border-l-2 border-[#CCAA6E] pl-4 mb-6">
            What We Do
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#2A2622] leading-[0.85]">
            Our <span className="font-display italic text-[#B35A46]">Expertise</span>
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-md">
          Holistic digital solutions tailored for high-end brands. We cover every touchpoint of your digital presence.
        </p>
      </section>

      {/* Services */}
      <ServicesSection />

    </main>
  );
}
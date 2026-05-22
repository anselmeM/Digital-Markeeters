import type { Metadata } from 'next';
import HomeHero from '@/components/HomeHero';
import ProjectShowcase from '@/components/ProjectShowcase';
import PhilosophySection from '@/components/PhilosophySection';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Marcy Studios | Digital Experience Agency',
  description: 'We craft immersive digital experiences for brands that dare to be different. Merging strategy with avant-garde design in New York.',
  openGraph: {
    title: 'Marcy Studios | Digital Experience Agency',
    description: 'We craft immersive digital experiences for brands that dare to be different.',
    type: 'website',
  },
};

export const unstable_instant = {
  prefetch: 'static',
};

const expertiseItems = [
  {
    title: 'Brand Identity',
    description: 'Logo design, visual systems, and brand guidelines crafted to stand the test of time.',
    number: '01',
  },
  {
    title: 'Web Design & Dev',
    description: 'Immersive websites that perform. Award-winning layouts and seamless user experiences.',
    number: '02',
  },
  {
    title: 'Digital Strategy',
    description: 'Data-driven marketing campaigns to amplify your voice across social and search channels.',
    number: '03',
  },
  {
    title: 'Art Direction',
    description: 'Visual storytelling through photography, video, and set design.',
    number: '04',
  },
];

export default function Home() {
  return (
    <main id="main-content" role="main" className="relative w-full">
      {/* Hero Section */}
      <HomeHero />

      {/* Selected Works - New Project Showcase */}
      <ProjectShowcase />

      {/* Philosophy */}
      <PhilosophySection />

      {/* Expertise */}
      <section className="py-24 px-6 md:px-12 bg-[#1C1B1A] text-[#EBE6DF] font-sans" id="expertise">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-6xl mb-6">Expertise</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm font-light">
              Holistic digital solutions tailored for high-end brands. We cover every touchpoint of your digital presence.
            </p>
          </div>

          <div className="lg:col-span-2">
            {expertiseItems.map((item) => (
              <div key={item.number} className="group border-b border-white/20 py-8 cursor-pointer hover:pl-4 transition-all duration-300 min-h-[112px] flex flex-col justify-center">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-4xl md:text-5xl group-hover:text-[#CCAA6E] transition-colors">{item.title}</h3>
                  <span className="text-sm text-gray-500 group-hover:text-[#CCAA6E]">{item.number}</span>
                </div>
                <p className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 text-gray-300 text-base mt-0 group-hover:mt-4 font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-12 bg-[#EBE6DF] text-[#2A2622] border-t border-[#2A2622]/10 font-sans" id="contact">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#B35A46] mb-6">Get in Touch</p>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8">
                Let&apos;s start a <br />
                <span className="font-display italic font-light text-[#B35A46]">conversation</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-sm leading-relaxed mb-8 font-light">
                We&apos;re always looking to collaborate with forward-thinking brands and individuals. Let&apos;s build something memorable together.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">Email Us</p>
                <a href="mailto:hello@marcystudios.com" className="font-serif text-xl hover:text-[#B35A46] transition-colors">hello@marcystudios.com</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">Visit Us</p>
                <p className="font-serif text-xl">New York, NY 10013</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-[#1C1B1A] p-8 md:p-12 rounded-2xl shadow-xl text-[#EBE6DF]">
            <ContactForm variant="full" />
          </div>
        </div>
      </section>
    </main>
  );
}

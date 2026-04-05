'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Expertise() {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: 'Brand Identity',
      number: '01',
      description: 'Logo design, visual systems, and brand guidelines crafted to stand the test of time.',
      items: [
        'Logo Design',
        'Visual Identity Systems',
        'Brand Guidelines',
        'Brand Strategy',
        'Brand Architecture',
      ],
    },
    {
      title: 'Web Design & Development',
      number: '02',
      description: 'Immersive websites that perform. Award-winning layouts and seamless user experiences.',
      items: [
        'UI/UX Design',
        'Frontend Development',
        'CMS Integration',
        'E-commerce Solutions',
        'Web Applications',
      ],
    },
    {
      title: 'Digital Strategy',
      number: '03',
      description: 'Data-driven marketing campaigns to amplify your voice across social and search channels.',
      items: [
        'Digital Strategy',
        'Content Marketing',
        'Social Media',
        'SEO & SEM',
        'Analytics & Insights',
      ],
    },
    {
      title: 'Art Direction',
      number: '04',
      description: 'Visual storytelling through photography, video, and set design.',
      items: [
        'Photography Direction',
        'Video Production',
        'Set Design',
        'Visual Storytelling',
        'Campaign Creative',
      ],
    },
  ];

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
      <section className="flex flex-col border-t border-[#2A2622]/20">
        {services.map((service, index) => (
          <div 
            key={service.number}
            className="border-b border-[#2A2622]/20"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="flex items-center justify-between py-10 md:py-14 select-none transition-colors duration-300 hover:bg-black/5 w-full text-left px-2 md:px-6 -mx-2 md:-mx-6 rounded-lg"
              aria-expanded={openIndex === index}
            >
              <div className="flex items-baseline gap-6 md:gap-12">
                <span className="text-sm font-serif italic text-gray-400">{service.number}</span>
                <h2 className={`font-serif text-4xl md:text-5xl transition-colors ${openIndex === index ? 'text-[#CCAA6E]' : ''}`}>
                  {service.title}
                </h2>
              </div>
              <span className={`text-2xl transform transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
            </button>
            
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 px-2 md:px-6 -mx-2 md:-mx-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="lg:col-span-4 lg:col-start-2 flex flex-col gap-6 pb-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 mt-4 font-sans text-sm text-[#2A2622]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#B35A46] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/work" className="cta-button inline-block bg-[#B35A46] text-white px-6 py-3 text-sm">
                    View Related Work
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 relative aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={`/images/Digital Marketers${(index % 4) + 1}.jpg`}
                  alt={`${service.title} showcase`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="font-serif text-4xl md:text-6xl mb-8 text-[#2A2622]">
          Ready to <span className="font-display italic text-[#B35A46]">start</span>?
        </h2>
        <Link href="/#contact" className="cta-button bg-[#B35A46] text-white px-8 py-4 text-base">
          Let&apos;s Talk
        </Link>
      </div>
    </main>
  );
}
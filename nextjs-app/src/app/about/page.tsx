'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main id="main-content" role="main" className="relative w-full pt-28 md:pt-40 pb-20 px-6 md:px-12 overflow-x-hidden">
      {/* Hero */}
      <section className="max-w-7xl mx-auto py-12 md:py-24">
        <div className="flex flex-col gap-6 items-start">
          <p className="text-sm uppercase tracking-[0.2em] text-[#CCAA6E] border-l-2 border-[#CCAA6E] pl-4">
            About Us
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter-custom text-[#2A2622]">
            We are the <span className="font-display italic text-[#B35A46]">architects</span> of <br />
            digital experiences
          </h1>
        </div>

        <div className="mt-20 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-sm uppercase tracking-widest text-gray-500">Established</span>
                <span className="font-serif text-2xl">2021</span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className="text-sm uppercase tracking-widest text-gray-500">Location</span>
                <span className="font-serif text-2xl">New York, NY</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-600">
              Marcy Studios is a digital experience agency that blends strategy with avant-garde design. 
              We believe in the power of silence in a noisy world, stripping away the non-essential to 
              reveal the core of your brand&apos;s story.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-[#2A2622]/10">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h2 className="font-serif text-5xl md:text-7xl text-[#2A2622]">
            Our <span className="font-display italic text-[#B35A46]">Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            The principles that guide every project we undertake.
          </p>
        </div>

        <div className="masonry-grid max-w-7xl mx-auto">
          <div className="masonry-item group relative overflow-hidden bg-gray-100 hover-reveal-wrapper">
            <Image
              src="/images/Digital Marketers2.jpg"
              alt="Minimalism values"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 text-[#2A2622] md:text-white md:bg-black/50 md:p-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-serif text-2xl">Minimalism</h3>
              <p className="text-sm mt-2">Less is more. We strip away the non-essential.</p>
            </div>
          </div>
          <div className="masonry-item bg-[#EBE6DF] p-12 min-h-[350px] flex flex-col justify-center items-center text-center border border-[#2A2622]/5">
            <h3 className="font-serif text-3xl md:text-4xl mb-6">Clarity</h3>
            <p className="text-gray-600 max-w-sm">
              We believe in clear, purposeful design that communicates your brand&apos;s essence without distraction.
            </p>
          </div>
          <div className="masonry-item group relative overflow-hidden bg-gray-100 hover-reveal-wrapper">
            <Image
              src="/images/Digital Marketers3.jpg"
              alt="Innovation values"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 text-[#2A2622] md:text-white md:bg-black/50 md:p-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-serif text-2xl">Innovation</h3>
              <p className="text-sm mt-2">Pushing boundaries to create something new.</p>
            </div>
          </div>
          <div className="masonry-item group relative overflow-hidden bg-gray-100 hover-reveal-wrapper">
            <Image
              src="/images/Digital Marketers4.jpg"
              alt="Craftsmanship values"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 text-[#2A2622] md:text-white md:bg-black/50 md:p-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-serif text-2xl">Craft</h3>
              <p className="text-sm mt-2">Every detail matters in our pursuit of excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto border-t border-[#2A2622]/10">
        <div className="mb-16">
          <h2 className="font-serif text-5xl md:text-7xl text-[#2A2622] mb-8">
            The <span className="font-display italic text-[#B35A46]">Team</span>
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
                <Image
                  src="/images/Digital Marketers.jpg"
                  alt="Team member"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-serif text-xl">Alex Morgan</h3>
                <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">Founder & Creative Director</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
                <Image
                  src="/images/Digital Marketers2.jpg"
                  alt="Team member"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-serif text-xl">Sarah Chen</h3>
                <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">Design Director</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
                <Image
                  src="/images/Digital Marketers3.jpg"
                  alt="Team member"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-serif text-xl">Marcus Williams</h3>
                <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">Technical Director</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
                <Image
                  src="/images/Digital Marketers4.jpg"
                  alt="Team member"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-serif text-xl">Emily Rodriguez</h3>
                <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">Strategy Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 max-w-4xl mx-auto border-t border-[#2A2622]/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <h2 className="font-serif text-5xl md:text-7xl text-[#2A2622]">
            The <span className="font-display italic text-[#B35A46]">Manifesto</span>
          </h2>
        </div>

        <div className="flex flex-col">
          <div className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[#2A2622]/10 hover:border-[#B35A46] transition-colors">
            <div className="flex items-baseline gap-6 md:gap-16">
              <span className="text-sm font-serif italic text-gray-400">01</span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">Design is Intelligence</h3>
                <p className="text-gray-600 mt-2 max-w-xl">Visible to the eye, but felt through the soul. Good design is invisible; great design is unforgettable.</p>
              </div>
            </div>
          </div>
          <div className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[#2A2622]/10 hover:border-[#B35A46] transition-colors">
            <div className="flex items-baseline gap-6 md:gap-16">
              <span className="text-sm font-serif italic text-gray-400">02</span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">Less But Better</h3>
                <p className="text-gray-600 mt-2 max-w-xl">We subtract until nothing more can be removed. Every element must earn its place.</p>
              </div>
            </div>
          </div>
          <div className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[#2A2622]/10 hover:border-[#B35A46] transition-colors">
            <div className="flex items-baseline gap-6 md:gap-16">
              <span className="text-sm font-serif italic text-gray-400">03</span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">Context is Everything</h3>
                <p className="text-gray-600 mt-2 max-w-xl">Design doesn&apos;t exist in a vacuum. We consider every touchpoint, every moment, every user journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-40 mb-20 text-center">
        <Link className="group relative inline-block mx-auto" href="/#contact">
          <span className="font-serif text-4xl md:text-6xl text-[#2A2622] group-hover:text-[#B35A46] transition-colors">
            Let&apos;s create something <span className="font-display italic">together</span>
          </span>
        </Link>
      </div>
    </main>
  );
}
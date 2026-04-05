'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Vogue Essence',
      category: 'editorial',
      image: '/images/Digital Marketers2.jpg',
      slug: 'vogue-essence',
      year: '2024',
      services: 'Editorial / Web Design',
    },
    {
      id: 2,
      title: 'Urban Canvas',
      category: 'branding',
      image: '/images/Digital Marketers3.jpg',
      slug: 'urban-canvas',
      year: '2024',
      services: 'Branding / Identity',
    },
    {
      id: 3,
      title: 'Silent Architecture',
      category: 'photography',
      image: '/images/Digital Marketers4.jpg',
      slug: 'silent-architecture',
      year: '2023',
      services: 'Photography / Strategy',
    },
    {
      id: 4,
      title: 'Fashion Forward',
      category: 'web-design',
      image: '/images/Digital Marketers.jpg',
      slug: 'fashion-forward',
      year: '2023',
      services: 'Web Design / Art Direction',
    },
    {
      id: 5,
      title: 'Brand Evolution',
      category: 'strategy',
      image: '/images/Digital Marketers2.jpg',
      slug: 'brand-evolution',
      year: '2023',
      services: 'Strategy / Branding',
    },
    {
      id: 6,
      title: 'Visual Narrative',
      category: 'art-direction',
      image: '/images/Digital Marketers3.jpg',
      slug: 'visual-narrative',
      year: '2022',
      services: 'Art Direction / Photography',
    },
  ];

  const filters = ['all', 'editorial', 'branding', 'photography', 'web-design', 'strategy', 'art-direction'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main id="main-content" role="main" className="relative w-full pt-28 pb-20 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-black/20 pb-5">
        <div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#2A2622]">
            Our <span className="font-display italic text-[#B35A46]">Work</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-md">
            A curated collection of projects that define our approach to digital design.
          </p>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <span className="text-sm uppercase tracking-widest text-gray-500">6 Projects</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 md:gap-4 mb-12" id="project-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm uppercase tracking-widest border transition-colors ${
              activeFilter === filter
                ? 'border-[#B35A46] text-[#B35A46]'
                : 'border-black/20 text-gray-500 hover:border-[#B35A46] hover:text-[#B35A46]'
            }`}
          >
            {filter === 'all' ? 'All' : filter.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Project List */}
      <div className="flex flex-col w-full" id="project-list">
        {filteredProjects.map((project, index) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            className="project-row group relative w-full border-b border-black/10 py-10 md:py-14 block"
            data-index={index}
            data-category={project.category}
          >
            <div className="flex flex-col md:flex-row items-baseline md:items-center justify-between">
              <div className="flex items-baseline gap-4 md:gap-8 flex-1">
                <span className="text-sm font-serif italic text-gray-400">0{index + 1}</span>
                <div>
                  <h2 className="font-serif text-3xl md:text-5xl group-hover:text-[#B35A46] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">
                    {project.services}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 md:gap-16 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="text-sm uppercase tracking-widest text-gray-400">{project.year}</span>
                <span className="text-2xl transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-40 mb-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">Have a project in mind?</h2>
          <Link className="cta-button bg-[#B35A46] text-white px-8 py-4 text-base font-medium" href="/#contact">
            Let's Talk
          </Link>
        </div>
      </div>
    </main>
  );
}
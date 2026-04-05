'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  index: number;
}

export default function ProjectCard({ title, category, image, href, index }: ProjectCardProps) {
  return (
    <Link 
      href={href}
      className={`min-w-[85vw] md:min-w-[45vw] lg:min-w-[35vw] snap-center group cursor-pointer block ${
        index % 2 !== 0 ? 'mt-0 md:mt-24' : ''
      }`}
    >
      <div className="aspect-[4/5] overflow-hidden mb-6 relative hover-reveal-wrapper">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
        />
        <div className="absolute inset-0 bg-[#964F4C] opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply" />
      </div>
      <div className="flex justify-between items-start border-t border-black/10 pt-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-serif group-hover:text-[#B35A46] transition-colors">
            {title}
          </h3>
          <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">
            {category}
          </p>
        </div>
        <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-2">
          →
        </span>
      </div>
    </Link>
  );
}
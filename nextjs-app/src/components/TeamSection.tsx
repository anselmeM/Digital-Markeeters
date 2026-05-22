'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TeamSection() {
  const [showAllTeam, setShowAllTeam] = useState(false);

  return (
    <section className="py-24 max-w-7xl mx-auto border-t border-[#2A2622]/10">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <h2 className="font-serif text-5xl md:text-7xl text-[#2A2622]">
          The <span className="font-display italic text-[#B35A46]">Team</span>
        </h2>
        <button 
          onClick={() => setShowAllTeam(!showAllTeam)}
          className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-[#B35A46] hover:border-[#B35A46] transition-colors cursor-pointer"
        >
          {showAllTeam ? 'Show Less' : 'View All Team'}
        </button>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
          <div className="group">
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
              <Image
                src="/images/Digital Marketers.jpg"
                alt="Alex Morgan - Founder & Creative Director"
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
                alt="Sarah Chen - Design Director"
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
                alt="Marcus Williams - Technical Director"
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
                alt="Emily Rodriguez - Strategy Director"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="transition-transform duration-300 group-hover:-translate-y-2">
              <h3 className="font-serif text-xl">Emily Rodriguez</h3>
              <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">Strategy Director</p>
            </div>
          </div>

          {/* Additional Team Members (Hidden by default) */}
          {showAllTeam && (
            <>
              <div className="group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
                  <Image
                    src="/images/Digital Marketers2.jpg"
                    alt="Jordan Lee - Senior Designer"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-serif text-xl">Jordan Lee</h3>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">Senior Designer</p>
                </div>
              </div>
              <div className="group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
                  <Image
                    src="/images/Digital Marketers3.jpg"
                    alt="Taylor Smith - Full Stack Developer"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-serif text-xl">Taylor Smith</h3>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">Full Stack Developer</p>
                </div>
              </div>
              <div className="group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
                  <Image
                    src="/images/Digital Marketers4.jpg"
                    alt="Casey Johnson - Project Manager"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-serif text-xl">Casey Johnson</h3>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">Project Manager</p>
                </div>
              </div>
              <div className="group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-200">
                  <Image
                    src="/images/Digital Marketers.jpg"
                    alt="Riley Davis - Content Strategist"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-serif text-xl">Riley Davis</h3>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">Content Strategist</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

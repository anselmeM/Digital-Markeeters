// Navigation component
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { title: 'Vogue Essence', slug: 'vogue-essence', category: 'Editorial' },
  { title: 'Urban Canvas', slug: 'urban-canvas', category: 'Branding' },
  { title: 'Silent Architecture', slug: 'silent-architecture', category: 'Photography' },
  { title: 'Fashion Forward', slug: 'fashion-forward', category: 'Web Design' },
  { title: 'Brand Evolution', slug: 'brand-evolution', category: 'Strategy' },
  { title: 'Visual Narrative', slug: 'visual-narrative', category: 'Art Direction' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll when mobile menu or search is open
  useEffect(() => {
    if (isOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsSearchOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const filteredProjects = searchQuery.trim() === '' 
    ? [] 
    : projects.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <>
      <nav 
        role="navigation" 
        aria-label="Main navigation" 
        className="fixed w-full top-0 z-[100] px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-[#F2EFE9]"
      >
        <Link href="/" className="font-serif font-bold text-2xl tracking-tight" onClick={closeMenu}>
          Marcy.
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-12 text-sm uppercase tracking-widest font-medium">
          <Link href="/work" className="hover:underline decoration-1 underline-offset-4">
            Work
          </Link>
          <Link href="/about" className="hover:underline decoration-1 underline-offset-4">
            Agency
          </Link>
          <Link href="/expertise" className="hover:underline decoration-1 underline-offset-4">
            Expertise
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Search Button */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="hover:text-[#B35A46] transition-colors"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden group flex flex-col gap-1.5 w-8 relative z-[60]" 
            aria-label={isOpen ? "Close menu" : "Open menu"} 
            aria-expanded={isOpen ? 'true' : 'false'} 
            aria-controls="mobile-menu" 
            onClick={toggleMenu}
          >
            <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1C1B1A] z-[110] flex flex-col p-6 md:p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="font-serif font-bold text-2xl tracking-tight text-[#EBE6DF]">Search</span>
              <button 
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-[#EBE6DF] hover:text-[#B35A46] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="max-w-4xl mx-auto w-full">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, services..."
                className="w-full bg-transparent border-b-2 border-white/20 text-[#EBE6DF] text-4xl md:text-6xl font-serif py-4 outline-none focus:border-[#B35A46] transition-colors"
              />

              <div className="mt-12">
                <AnimatePresence>
                  {filteredProjects.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                      {filteredProjects.map((project) => (
                        <Link 
                          key={project.slug} 
                          href={`/work/${project.slug}`}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="group border-b border-white/10 pb-6 block"
                        >
                          <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">{project.category}</span>
                          <h3 className="font-serif text-2xl md:text-3xl text-[#EBE6DF] group-hover:text-[#B35A46] transition-colors">{project.title}</h3>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                  {searchQuery.trim() !== '' && filteredProjects.length === 0 && (
                    <p className="text-[#EBE6DF]/50 text-xl italic">No results found for &quot;{searchQuery}&quot;</p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 bg-[#1C1B1A] z-[90] flex flex-col items-center justify-center transition-all duration-400 ease-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col gap-6 text-center text-4xl font-display italic text-[#EBE6DF]">
          <Link 
            href="/work" 
            className="hover:text-[#B35A46] transition-colors p-4"
            onClick={closeMenu}
          >
            Work
          </Link>
          <Link 
            href="/about" 
            className="hover:text-[#B35A46] transition-colors p-4"
            onClick={closeMenu}
          >
            Agency
          </Link>
          <Link 
            href="/expertise" 
            className="hover:text-[#B35A46] transition-colors p-4"
            onClick={closeMenu}
          >
            Expertise
          </Link>
          <Link 
            href="/#contact" 
            className="hover:text-[#B35A46] transition-colors p-4"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
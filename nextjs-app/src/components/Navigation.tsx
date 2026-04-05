// Navigation component
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav 
        role="navigation" 
        aria-label="Main navigation" 
        className="fixed w-full top-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-[#F2EFE9]"
      >
        <Link href="/" className="font-serif font-bold text-2xl tracking-tight">
          Marcy.
        </Link>
        
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

        <button 
          className="md:hidden group flex flex-col gap-1.5 w-8 relative z-[60]" 
          aria-label="Toggle menu" 
          aria-expanded={isOpen ? 'true' : 'false'} 
          aria-controls="mobile-menu" 
          onClick={toggleMenu}
        >
          <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 bg-[#1C1B1A] z-[40] flex flex-col items-center justify-center transition-all duration-400 ease-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6 text-center text-4xl font-display italic text-[#EBE6DF]">
          <Link 
            href="/work" 
            className="hover:text-[#B35A46] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link 
            href="/about" 
            className="hover:text-[#B35A46] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Agency
          </Link>
          <Link 
            href="/expertise" 
            className="hover:text-[#B35A46] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Expertise
          </Link>
          <Link 
            href="/#contact" 
            className="hover:text-[#B35A46] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
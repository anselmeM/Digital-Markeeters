// Navigation component
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
      </nav>

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
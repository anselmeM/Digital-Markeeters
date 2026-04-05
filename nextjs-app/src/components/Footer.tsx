'use client';

import Link from 'next/link';

interface FooterProps {
  id?: string;
}

export default function Footer({ id = 'contact' }: FooterProps) {
  return (
    <footer className="bg-[#151413] text-[#EBE6DF] px-6 md:px-12 pt-24 pb-12 border-t border-white/5" id={id}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
        <div>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter mb-8">
            Let's Talk
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-md">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="flex flex-col justify-end">
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Email</h3>
              <a 
                href="mailto:hello@marcy.com" 
                className="text-lg hover:text-[#B35A46] transition-colors"
              >
                hello@marcy.com
              </a>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Phone</h3>
              <a 
                href="tel:+1234567890" 
                className="text-lg hover:text-[#B35A46] transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Social</h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-base hover:text-[#B35A46] transition-colors">Instagram</a>
                <a href="#" className="text-base hover:text-[#B35A46] transition-colors">LinkedIn</a>
                <a href="#" className="text-base hover:text-[#B35A46] transition-colors">Twitter</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Location</h3>
              <div className="flex flex-col gap-4 text-base text-gray-400">
                <span>123 Design Street</span>
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-gray-600 pt-8 border-t border-white/5">
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link href="/work" className="hover:text-[#B35A46] transition-colors">Work</Link>
          <Link href="/about" className="hover:text-[#B35A46] transition-colors">Agency</Link>
          <Link href="/expertise" className="hover:text-[#B35A46] transition-colors">Expertise</Link>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Marcy Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
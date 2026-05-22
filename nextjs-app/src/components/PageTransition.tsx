'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState, Suspense } from 'react';

function ClientPageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Suspense fallback={<div className="min-h-screen bg-[#F2EFE9]" />}>
          {children}
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#F2EFE9]">
        <Suspense fallback={<div className="min-h-screen bg-[#F2EFE9]" />}>
          {children}
        </Suspense>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F2EFE9]" />}>
      <ClientPageTransition>{children}</ClientPageTransition>
    </Suspense>
  );
}

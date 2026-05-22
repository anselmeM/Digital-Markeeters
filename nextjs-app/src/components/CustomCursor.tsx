'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hoveredEl, setHoveredEl] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const interactiveEl = target.closest('[data-cursor]');
      if (interactiveEl) {
        const cursorType = interactiveEl.getAttribute('data-cursor');
        setHoveredEl(cursorType);
      } else {
        setHoveredEl(null);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  // Don't show cursor on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const variants: Record<string, { width: number; height: number; backgroundColor: string; mixBlendMode?: any }> = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: '#B35A46',
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: '#EBE6DF',
      mixBlendMode: 'difference',
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: '#B35A46',
    }
  };

  const cursorType = hoveredEl === 'view' ? 'view' : hoveredEl ? 'pointer' : 'default';
  const currentVariant = variants[cursorType];

  return (
    <motion.div
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        x: '-50%',
        y: '-50%',
        position: 'fixed',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: currentVariant.mixBlendMode || 'normal',
      }}
      animate={{
        width: currentVariant.width,
        height: currentVariant.height,
        backgroundColor: currentVariant.backgroundColor,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      className="flex items-center justify-center overflow-hidden font-sans text-xs uppercase tracking-widest text-[#EBE6DF] pointer-events-none"
    >
      {cursorType === 'view' && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="font-medium font-serif italic text-sm"
        >
          View
        </motion.span>
      )}
    </motion.div>
  );
}

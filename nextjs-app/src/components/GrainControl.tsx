'use client';

import { useEffect, useState } from 'react';

export default function GrainControl() {
  const [enabled, setEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('marcy-grain-enabled');
    if (stored !== null) {
      setEnabled(stored === 'true');
    }
  }, []);

  const toggleGrain = () => {
    const nextState = !enabled;
    setEnabled(nextState);
    localStorage.setItem('marcy-grain-enabled', String(nextState));
    
    // Dispatch custom event to notify GrainOverlay
    const event = new CustomEvent('marcy-toggle-grain', {
      detail: { enabled: nextState }
    });
    window.dispatchEvent(event);
  };

  if (!mounted) {
    return (
      <span className="text-gray-600 animate-pulse text-[10px]">
        Loading...
      </span>
    );
  }

  return (
    <button
      onClick={toggleGrain}
      className="text-gray-500 hover:text-[#B35A46] active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5 border border-white/10 rounded-full px-3 py-1 hover:border-[#B35A46]/30 text-[10px] md:text-xs tracking-widest uppercase font-medium bg-[#1C1B1A]"
      aria-label={enabled ? "Disable film grain overlay" : "Enable film grain overlay"}
      data-cursor="pointer"
    >
      <span className={`inline-block w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
        enabled ? 'bg-emerald-500' : 'bg-red-500'
      }`} />
      Texture: {enabled ? 'On' : 'Off'}
    </button>
  );
}

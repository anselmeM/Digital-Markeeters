'use client';

import { useEffect, useState } from 'react';

export default function GrainOverlay() {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Check local storage for user preference on mount
    const storedPref = localStorage.getItem('marcy-grain-enabled');
    if (storedPref !== null) {
      setIsEnabled(storedPref === 'true');
    }

    // Custom event listener for toggling grain globally
    const handleToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ enabled: boolean }>;
      setIsEnabled(customEvent.detail.enabled);
    };

    window.addEventListener('marcy-toggle-grain', handleToggle);
    return () => {
      window.removeEventListener('marcy-toggle-grain', handleToggle);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div className="grain-container" aria-hidden="true">
      <div className="grain-texture" />
    </div>
  );
}

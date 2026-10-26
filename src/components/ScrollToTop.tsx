import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass-panel border border-[#C77DFF]/40 text-white hover:text-[#E0AAFF] hover:border-[#C77DFF] hover:shadow-[0_0_25px_rgba(157,78,221,0.6)] transition-all duration-300 active:scale-90 cursor-pointer shadow-xl backdrop-blur-xl"
      style={{
        background: 'rgba(11, 4, 24, 0.85)',
      }}
    >
      <ArrowUp className="w-5 h-5 text-[#C77DFF] hover:text-white transition-colors" />
    </button>
  );
};
import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { B2RibbonHero } from './B2RibbonHero';

interface HeroProps {
  onLaunchProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onLaunchProject,
  onExploreServices,
}) => {
  return (
    <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      
      {/* Top Badge: Frosted glass pill badge with pulsing neon purple dot */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-[#C77DFF]/30 text-xs sm:text-sm font-mono tracking-widest text-[#E0AAFF] shadow-[0_0_15px_rgba(157,78,221,0.25)] mb-6 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C77DFF] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9D4EDD]" />
        </span>
        <span className="font-semibold text-white">IDEAS</span>
        <span className="text-[#C77DFF]/50">/</span>
        <span className="font-semibold text-white">WEBSITES</span>
        <span className="text-[#C77DFF]/50">/</span>
        <span className="font-semibold text-white">SOLUTIONS</span>
      </div>

      {/* Main Headline: "BUILDING A SMARTER TOMORROW" with metallic purple gradient */}
      <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white max-w-5xl leading-[1.08] mb-6">
        BUILDING A{' '}
        <span className="text-metallic-purple drop-shadow-[0_0_35px_rgba(199,125,255,0.4)]">
          SMARTER TOMORROW
        </span>
      </h1>

      {/* Sub-headline: Value proposition */}
      <p className="text-base sm:text-lg lg:text-xl text-[#B8A9C9] max-w-3xl leading-relaxed mb-10 font-sans text-wrap-balance">
        B2 Technologies transforms ambitious ideas into high-performance web applications, resilient cloud architectures, and bespoke digital solutions designed to scale your business into the future.
      </p>

      {/* Dual CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
        {/* Primary CTA */}
        <button
          onClick={onLaunchProject}
          className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-white transition-all duration-300 shadow-[0_0_30px_rgba(123,44,191,0.65)] hover:shadow-[0_0_45px_rgba(199,125,255,0.9)] hover:scale-[1.02] active:scale-[0.98] border border-[#C77DFF]/50 flex items-center justify-center gap-2.5 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #7B2CBF 0%, #9D4EDD 60%, #C77DFF 100%)',
          }}
        >
          <Sparkles className="w-4 h-4 text-[#F3E8FF]" />
          <span>Launch Your Project</span>
          <ArrowRight className="w-4 h-4 text-[#F3E8FF]" />
        </button>

        {/* Secondary CTA */}
        <button
          onClick={onExploreServices}
          className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white glass-panel border border-[#C77DFF]/30 hover:border-[#C77DFF] hover:bg-white/[0.06] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)] cursor-pointer"
        >
          <Compass className="w-4 h-4 text-[#C77DFF]" />
          <span>Explore Our Services</span>
        </button>
      </div>

      {/* Visual Centerpiece: 3D Ribbon Showcase with surrounding glass widgets */}
      <div className="w-full">
        <B2RibbonHero />
      </div>

    </section>
  );
};

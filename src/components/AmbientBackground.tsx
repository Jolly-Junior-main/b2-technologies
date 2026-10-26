import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Obsidian Radial Mesh Gradients */}
      <div className="absolute inset-0 bg-[#05020A]" />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 15%, #160728 0%, #0B0418 50%, #05020A 100%)',
          opacity: 0.85,
        }}
      />

      {/* Floating Ambient Purple/Violet Mesh Orbs */}
      {/* Orb 1: Top-Left Neon Violet */}
      <div 
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#7B2CBF]/20 blur-[130px] animate-orb-1" 
      />

      {/* Orb 2: Center-Right Electric Purple */}
      <div 
        className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-[#9D4EDD]/15 blur-[140px] animate-orb-2" 
      />

      {/* Orb 3: Bottom-Left Deep Violet */}
      <div 
        className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full bg-[#5A189A]/20 blur-[150px] animate-orb-3" 
      />

      {/* Center Hero Spotlight Orb */}
      <div 
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C77DFF]/10 blur-[160px] rounded-full animate-pulse-glow" 
      />

      {/* Subtle Geometric Engineering Grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #C77DFF 1px, transparent 1px), linear-gradient(to bottom, #C77DFF 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
};

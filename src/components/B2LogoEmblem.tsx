import React from 'react';

interface B2LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const B2LogoEmblem: React.FC<B2LogoProps> = ({
  className = '',
  size = 40,
  showText = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Circular Glowing Purple Emblem */}
      <div 
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* Outer ambient glow */}
        <div className="absolute inset-0 rounded-full bg-[#7B2CBF]/40 blur-md group-hover:bg-[#9D4EDD]/60 transition-all duration-300" />
        
        {/* Authentic Official B2 Circular Emblem */}
        <img
          src="/b2-logo-emblem.png"
          alt="B2 Technologies Emblem"
          className="w-full h-full object-contain rounded-full relative z-10 drop-shadow-[0_0_12px_rgba(157,78,221,0.65)]"
          width={size}
          height={size}
        />
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display font-extrabold tracking-wider text-white text-base leading-none group-hover:text-[#E0AAFF] transition-colors">
            B2 <span className="text-[#C77DFF]">TECHNOLOGIES</span>
          </span>
          <span className="text-[9px] font-mono tracking-widest text-[#B8A9C9]/80 uppercase mt-1">
            IDEAS · WEBSITES · SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
};
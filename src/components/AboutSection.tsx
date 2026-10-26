import React from 'react';
import { Target, Users, Zap, Shield, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C77DFF] mb-3">
          <span>OUR ESSENCE & PURPOSE</span>
          <span className="text-white/40">·</span>
          <span>B2 TECHNOLOGIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Pioneering Digital Architectures for{' '}
          <span className="text-metallic-purple">Modern Industry</span>
        </h2>
        <p className="text-[#B8A9C9] text-base sm:text-lg mt-4 leading-relaxed font-sans">
          Headquartered in Addis Ababa, Ethiopia with global edge infrastructure, B2 Technologies was founded on a singular conviction: enterprises shouldn't have to choose between aesthetic elegance and uncompromising engineering performance.
        </p>
      </div>

      {/* Grid of 3 Core Commitments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="rounded-2xl glass-panel p-8 border border-[#C77DFF]/20 hover:border-[#C77DFF]/50 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-[#7B2CBF]/20 text-[#C77DFF] flex items-center justify-center border border-[#C77DFF]/30 mb-6 shadow-[0_0_20px_rgba(157,78,221,0.3)]">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-3">
            Obsession with Precision
          </h3>
          <p className="text-sm text-[#B8A9C9] leading-relaxed font-sans">
            From semantic accessibility standards to microsecond server-timing headers, our codebases are crafted with institutional rigor and zero tolerance for technical debt.
          </p>
        </div>

        <div className="rounded-2xl glass-panel p-8 border border-[#C77DFF]/20 hover:border-[#C77DFF]/50 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-[#7B2CBF]/20 text-[#C77DFF] flex items-center justify-center border border-[#C77DFF]/30 mb-6 shadow-[0_0_20px_rgba(157,78,221,0.3)]">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-3">
            Modern Cloud Primitives
          </h3>
          <p className="text-sm text-[#B8A9C9] leading-relaxed font-sans">
            We avoid monolithic traps by leveraging serverless edge execution, distributed data stores, and containerized microservices that automatically scale with your traffic spikes.
          </p>
        </div>

        <div className="rounded-2xl glass-panel p-8 border border-[#C77DFF]/20 hover:border-[#C77DFF]/50 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-[#7B2CBF]/20 text-[#C77DFF] flex items-center justify-center border border-[#C77DFF]/30 mb-6 shadow-[0_0_20px_rgba(157,78,221,0.3)]">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-3">
            Long-Term Partnership
          </h3>
          <p className="text-sm text-[#B8A9C9] leading-relaxed font-sans">
            Our relationship doesn't end at deployment. We act as your fractional CTO and infrastructure guardians, maintaining 99.99% SLAs and proactive security audits.
          </p>
        </div>

      </div>

      {/* Trust & Metric Strip */}
      <div className="mt-12 rounded-2xl bg-[#090314] border border-[#C77DFF]/20 p-6 sm:p-8 flex flex-wrap items-center justify-around gap-6 text-center">
        <div>
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-white block">
            100%
          </span>
          <span className="text-xs font-mono text-[#B8A9C9]">TypeScript Type Safety</span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-[#C77DFF]/20" />
        <div>
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#C77DFF] block">
            99.99%
          </span>
          <span className="text-xs font-mono text-[#B8A9C9]">Guaranteed SLA Uptime</span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-[#C77DFF]/20" />
        <div>
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-white block">
            &lt; 200ms
          </span>
          <span className="text-xs font-mono text-[#B8A9C9]">Global Edge TTFB</span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-[#C77DFF]/20" />
        <div>
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400 block">
            Zero
          </span>
          <span className="text-xs font-mono text-[#B8A9C9]">Unplanned Outages</span>
        </div>
      </div>

    </section>
  );
};

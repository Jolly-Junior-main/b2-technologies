import React, { useState } from 'react';
import { ShieldCheck, Zap, Activity, Code2, Server } from 'lucide-react';

export const B2RibbonHero: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeSnippetTab, setActiveSnippetTab] = useState<'stack' | 'deploy'>('stack');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto py-8 px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Surrounding Ambient Radial Glow behind the dashboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[400px] bg-gradient-to-tr from-[#7B2CBF]/30 via-[#9D4EDD]/25 to-[#C77DFF]/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Main Glassmorphic Portal Showcase */}
      <div 
        className="relative rounded-2xl glass-panel p-6 sm:p-8 transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        {/* Top Header of the Showcase Dashboard */}
        <div className="flex items-center justify-between border-b border-[#C77DFF]/15 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
            </div>
            <span className="text-xs font-mono text-[#B8A9C9] tracking-wider ml-2">
              b2-command-portal.engine // enterprise-tier
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#E0AAFF]">
            <span className="flex items-center gap-1.5 bg-[#9D4EDD]/15 px-2.5 py-1 rounded-md border border-[#C77DFF]/25">
              <Activity className="w-3.5 h-3.5 text-[#C77DFF]" />
              99.99% UPTIME
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#B8A9C9]">
              <Zap className="w-3.5 h-3.5 text-[#C77DFF]" />
              24ms EDGE LATENCY
            </span>
          </div>
        </div>

        {/* Center Grid: 3D Ribbon Logo + Surrounding Floating Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column Widgets */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Widget 1: Cloud & Hosting SLA */}
            <div className="glass-panel p-4 rounded-xl border border-[#C77DFF]/20 hover:border-[#C77DFF]/50 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-[#7B2CBF]/30 text-[#E0AAFF]">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Edge Fleet</h4>
                  <p className="text-[10px] text-[#B8A9C9]">42 Global Locations</p>
                </div>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-[#C77DFF]/10 text-[11px] font-mono">
                <div className="flex justify-between">
                  <span className="text-[#B8A9C9]">Throughput</span>
                  <span className="text-white font-medium">1.4M req/sec</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B8A9C9]">DDoS Shield</span>
                  <span className="text-[#C77DFF]">Zero-Trust Active</span>
                </div>
              </div>
            </div>

            {/* Widget 2: Security & IT Support */}
            <div className="glass-panel p-4 rounded-xl border border-[#C77DFF]/20 hover:border-[#C77DFF]/50 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-[#7B2CBF]/30 text-[#E0AAFF]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">24/7 Security SOC</h4>
                  <p className="text-[10px] text-[#B8A9C9]">Proactive Monitoring</p>
                </div>
              </div>
              <div className="w-full bg-[#130924] rounded-full h-1.5 mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-[#7B2CBF] to-[#C77DFF] h-full rounded-full w-[98%]" />
              </div>
              <p className="text-[10px] font-mono text-[#E0AAFF] mt-1.5 text-right">0 Critical Vulnerabilities</p>
            </div>
          </div>

          {/* Centerpiece: The Authentic 3D Purple Ribbon "B2" Sculpture */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center py-4 relative">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
              {/* Outer orbital rings */}
              <div className="absolute inset-0 rounded-full border border-[#C77DFF]/25 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-4 rounded-full border border-dashed border-[#9D4EDD]/30 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />

              {/* Authentic 3D Purple Ribbon B2 Artwork */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden p-2 flex items-center justify-center">
                <img
                  src="/b2-hero-ribbon.png"
                  alt="B2 Technologies 3D Ribbon Architecture"
                  className="w-full h-full object-contain rounded-2xl drop-shadow-[0_20px_45px_rgba(157,78,221,0.65)] hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Holographic Platform Base */}
              <div className="absolute -bottom-4 w-48 h-8 bg-gradient-to-r from-transparent via-[#C77DFF]/50 to-transparent blur-md rounded-full pointer-events-none" />
            </div>

            <p className="text-center text-xs font-mono tracking-widest text-[#E0AAFF] mt-2 font-semibold">
              B2 ARCHITECTURAL EMBLEM // IDEAS · WEBSITES · SOLUTIONS
            </p>
          </div>

          {/* Right Column: Code Snippet & Interactive Architecture Preview */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Widget 3: Live Code Snippet */}
            <div className="glass-panel p-4 rounded-xl border border-[#C77DFF]/20 hover:border-[#C77DFF]/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs text-white font-mono">
                  <Code2 className="w-3.5 h-3.5 text-[#C77DFF]" />
                  <span>pipeline.ts</span>
                </div>
                <div className="flex items-center gap-1 bg-[#130924] p-0.5 rounded text-[10px] font-mono">
                  <button 
                    onClick={() => setActiveSnippetTab('stack')}
                    className={`px-1.5 py-0.5 rounded transition-colors ${activeSnippetTab === 'stack' ? 'bg-[#7B2CBF] text-white' : 'text-[#B8A9C9]'}`}
                  >
                    Stack
                  </button>
                  <button 
                    onClick={() => setActiveSnippetTab('deploy')}
                    className={`px-1.5 py-0.5 rounded transition-colors ${activeSnippetTab === 'deploy' ? 'bg-[#7B2CBF] text-white' : 'text-[#B8A9C9]'}`}
                  >
                    Deploy
                  </button>
                </div>
              </div>

              {activeSnippetTab === 'stack' ? (
                <pre className="text-[10px] font-mono text-[#E0AAFF] bg-[#070210] p-2.5 rounded-lg overflow-x-auto leading-relaxed border border-[#C77DFF]/10">
                  <code>{`// B2 Core Stack
export const b2Solution = {
  frontend: "Next / React 19",
  cloud: "Multi-Region Edge",
  security: "Zero-Trust TLS",
  sla: "99.99% Guaranteed"
};`}</code>
                </pre>
              ) : (
                <pre className="text-[10px] font-mono text-emerald-300 bg-[#070210] p-2.5 rounded-lg overflow-x-auto leading-relaxed border border-[#C77DFF]/10">
                  <code>{`$ b2 deploy --prod
✓ Built in 410ms
✓ Distributed to 42 PoPs
✓ SSL Certificates Active
STATUS: HEALTHY 🟢`}</code>
                </pre>
              )}
            </div>

            {/* Widget 4: Growth / Scaling Metric */}
            <div className="glass-panel p-4 rounded-xl border border-[#C77DFF]/20 hover:border-[#C77DFF]/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#B8A9C9]">Client Growth Metric</span>
                <span className="text-xs font-mono font-semibold text-[#C77DFF]">+240%</span>
              </div>
              <div className="h-10 flex items-end gap-1.5 mt-2 pt-2 border-t border-[#C77DFF]/10">
                <div className="flex-1 bg-[#7B2CBF]/30 rounded-t h-[35%]" />
                <div className="flex-1 bg-[#7B2CBF]/40 rounded-t h-[48%]" />
                <div className="flex-1 bg-[#7B2CBF]/50 rounded-t h-[62%]" />
                <div className="flex-1 bg-[#9D4EDD]/70 rounded-t h-[78%]" />
                <div className="flex-1 bg-[#C77DFF] rounded-t h-[95%] shadow-[0_0_8px_#C77DFF]" />
              </div>
              <p className="text-[9px] text-[#B8A9C9] mt-1 text-center font-mono">Quarter-over-Quarter Organic Scale</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

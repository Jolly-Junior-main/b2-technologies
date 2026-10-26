import React, { useState } from 'react';
import { Lightbulb, Layout, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  pillar: string;
  title: string;
  summary: string;
  icon: React.ReactNode;
  deliverables: string[];
  duration: string;
  outcomes: string;
}

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      number: '01',
      pillar: 'IDEAS',
      title: 'Strategy, Discovery & Architecture',
      summary: 'Every revolutionary project starts with rigorous architectural planning. We audit your technical objectives, analyze domain bottlenecks, and produce clean engineering roadmaps.',
      icon: <Lightbulb className="w-5 h-5 text-[#C77DFF]" />,
      deliverables: [
        'System Architecture Blueprint & Tech Stack Recommendation',
        'Information Architecture & Interactive Wireframe Specifications',
        'Database Schema & API Contract Definitions',
        'Cybersecurity & Regulatory Compliance Assessment',
      ],
      duration: '1–2 Weeks',
      outcomes: 'Clear roadmap with zero technical ambiguity and fixed milestones.',
    },
    {
      number: '02',
      pillar: 'WEBSITES',
      title: 'Design, Full-Stack Engineering & Cloud Deployment',
      summary: 'We build ultra-fast, visually breathtaking digital products. Modern React/Next.js frameworks paired with automated CI/CD and multi-region cloud edge distribution.',
      icon: <Layout className="w-5 h-5 text-[#C77DFF]" />,
      deliverables: [
        'Bespoke Dark-Mode Glassmorphic UI/UX Design System',
        'Full-Stack Component Implementation with Strict TypeScript',
        'High-Performance Edge CDN & Database Integration',
        'Automated Test Suites (Unit, Integration & E2E Verification)',
      ],
      duration: '3–6 Weeks',
      outcomes: 'Sub-second page speeds, 100/100 Lighthouse score, and pristine UX.',
    },
    {
      number: '03',
      pillar: 'SOLUTIONS',
      title: 'Scaling, Maintenance, Security & Growth',
      summary: 'Launch is just the starting line. We actively safeguard your uptime, implement continuous security monitoring, optimize conversions, and scale your infrastructure as users grow.',
      icon: <ShieldCheck className="w-5 h-5 text-[#C77DFF]" />,
      deliverables: [
        '24/7 Threat Detection & Proactive Incident Response',
        'Automated Rolling Backups & Instant Disaster Recovery',
        'Data-Driven SEO Optimization & Conversion Funnel Tuning',
        'Dedicated SLA Technical Support & Cloud Resource Management',
      ],
      duration: 'Ongoing & Continuous',
      outcomes: '99.99% guaranteed uptime SLA and sustained organic business growth.',
    },
  ];

  return (
    <section id="process" className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C77DFF] mb-3">
          <span>THE B2 METHODOLOGY</span>
          <span className="text-white/40">·</span>
          <span>FROM CONCEPT TO ENTERPRISE SCALE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          How We Build <span className="text-metallic-purple">A Smarter Tomorrow</span>
        </h2>
        <p className="text-[#B8A9C9] text-base sm:text-lg mt-4 leading-relaxed font-sans">
          A disciplined, transparent, 3-phase journey turning ambitious vision into enduring enterprise execution.
        </p>
      </div>

      {/* 3-Step Horizontal Timeline Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {steps.map((step, index) => {
          const isSelected = activeStep === index;
          return (
            <button
              key={step.pillar}
              onClick={() => setActiveStep(index)}
              className={`text-left rounded-2xl glass-panel p-6 transition-all duration-300 relative overflow-hidden cursor-pointer ${
                isSelected
                  ? 'border-[#C77DFF] bg-[#7B2CBF]/15 shadow-[0_0_30px_rgba(157,78,221,0.3)]'
                  : 'border-[#C77DFF]/20 hover:border-[#C77DFF]/40 hover:bg-white/[0.04]'
              }`}
            >
              {/* Active indicator bar on top */}
              {isSelected && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#7B2CBF] via-[#C77DFF] to-[#E0AAFF]" />
              )}

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-mono font-bold text-[#E0AAFF]">
                  {step.number}
                </span>
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#7B2CBF] text-white shadow-[0_0_15px_#C77DFF]' : 'bg-[#160A2A] text-[#B8A9C9]'}`}>
                  {step.icon}
                </div>
              </div>

              <span className="text-xs font-mono tracking-widest text-[#C77DFF] uppercase font-bold block mb-1">
                PHASE {step.number} · {step.pillar}
              </span>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                {step.title.split('&')[0]}
              </h3>
              <p className="text-xs text-[#B8A9C9] line-clamp-2">
                {step.summary}
              </p>
            </button>
          );
        })}
      </div>

      {/* Expanded Active Step Inspector */}
      <div className="rounded-2xl glass-panel p-6 sm:p-10 border border-[#C77DFF]/30 shadow-2xl relative overflow-hidden">
        {/* Ambient interior glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#7B2CBF]/20 blur-[90px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A0A30] border border-[#C77DFF]/30 text-xs font-mono text-[#E0AAFF] mb-4">
              <span>{steps[activeStep].number}. {steps[activeStep].pillar}</span>
              <span className="text-white/40">·</span>
              <span>{steps[activeStep].duration}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4">
              {steps[activeStep].title}
            </h3>

            <p className="text-sm sm:text-base text-[#B8A9C9] leading-relaxed mb-6 font-sans">
              {steps[activeStep].summary}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#E0AAFF]">
                Core Engineering Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {steps[activeStep].deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-white/90 bg-[#130826]/70 p-3 rounded-xl border border-[#C77DFF]/15">
                    <CheckCircle2 className="w-4 h-4 text-[#C77DFF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#0E051D] border border-[#C77DFF]/25 shadow-inner">
              <div className="text-xs font-mono text-[#C77DFF] uppercase tracking-wider mb-2">
                Guaranteed Milestone Outcome
              </div>
              <p className="text-sm text-white font-medium mb-4">
                "{steps[activeStep].outcomes}"
              </p>
              <div className="pt-4 border-t border-[#C77DFF]/15 flex items-center justify-between text-xs font-mono text-[#B8A9C9]">
                <span>Typical Sprint Velocity</span>
                <span className="text-[#E0AAFF] font-semibold">{steps[activeStep].duration}</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="px-4 py-2 rounded-xl glass-panel text-xs font-mono text-[#B8A9C9] hover:text-white hover:border-[#C77DFF]/50 transition-colors cursor-pointer"
              >
                ← Previous Phase
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] text-white text-xs font-mono font-semibold flex items-center gap-1.5 hover:shadow-[0_0_15px_#C77DFF] transition-all cursor-pointer"
              >
                <span>Next Phase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

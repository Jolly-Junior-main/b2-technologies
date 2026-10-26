import React, { useState } from 'react';
import { 
  Server, ShieldCheck, Cpu, Zap, Database, ArrowRight, 
  Layers, Lock, CheckCircle2, Globe, Activity, Terminal 
} from 'lucide-react';
import { ServiceId } from '../utils/estimator';

interface SolutionTrack {
  id: string;
  serviceId: ServiceId;
  tabLabel: string;
  title: string;
  headline: string;
  description: string;
  badges: string[];
  specs: { label: string; value: string; detail: string }[];
  architectureNodes: { step: string; label: string; tech: string }[];
  compliance: string[];
}

interface SolutionsSectionProps {
  onSelectSolution: (serviceId: ServiceId) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

  const tracks: SolutionTrack[] = [
    {
      id: 'cloud-mesh',
      serviceId: 'cloud-hosting',
      tabLabel: 'Edge Cloud Mesh',
      title: 'Global Multi-Region Cloud & Edge Infrastructure',
      headline: 'Uncompromising availability with automated multi-zone failover and edge compute execution.',
      description: 'We design resilient cloud topologies distributing application workloads across global edge points of presence. Traffic is dynamically steered to the lowest-latency edge, backed by zero-downtime rolling container deployments and continuous DDoS mitigation.',
      badges: ['99.999% SLA Uptime', 'Global Edge CDN', 'Multi-Region Failover'],
      specs: [
        { label: 'Edge TTFB', value: '< 24ms', detail: 'Across 42 Tier-1 PoPs' },
        { label: 'Failover SLA', value: '< 5 sec', detail: 'Automated health circuit breakers' },
        { label: 'Ingress Capacity', value: '1.2 Tbps', detail: 'Volumetric DDoS mitigation shield' },
      ],
      architectureNodes: [
        { step: '01', label: 'Global Anycast DNS', tech: 'Cloudflare / Route 53 with automated geo-steering' },
        { step: '02', label: 'Edge Compute Layer', tech: 'V8 Serverless Isolates & Distributed Asset Cache' },
        { step: '03', label: 'Containerized Cluster', tech: 'Auto-scaling Kubernetes with zero-downtime rolling deploys' },
        { step: '04', label: 'Distributed Database', tech: 'High-availability multi-region replicas with read routing' },
      ],
      compliance: ['SOC 2 Type II Certified', 'ISO/IEC 27001 Aligned', 'TLS 1.3 & HSTS Preloaded'],
    },
    {
      id: 'custom-software',
      serviceId: 'custom-solutions',
      tabLabel: 'Enterprise Software',
      title: 'Bespoke Enterprise Software & Microservice APIs',
      headline: 'Custom digital platforms built around your proprietary organizational workflows.',
      description: 'Eliminate manual bottlenecks with tailored software engines. We build event-driven backend architectures, high-load microservices, and unified APIs that connect your legacy systems, databases, and third-party vendors into a cohesive ecosystem.',
      badges: ['Event-Driven CQRS', 'Strict TypeScript', 'High-Throughput APIs'],
      specs: [
        { label: 'Task Automation', value: '75%', detail: 'Elimination of manual workflows' },
        { label: 'Sync Throughput', value: '10x', detail: 'Bi-directional real-time data sync' },
        { label: 'Test Coverage', value: '95%+', detail: 'Automated unit, integration & contract tests' },
      ],
      architectureNodes: [
        { step: '01', label: 'Unified API Gateway', tech: 'GraphQL & REST with rate-limiting and token authentication' },
        { step: '02', label: 'Event Message Broker', tech: 'Kafka / Redis streams for distributed asynchronous tasks' },
        { step: '03', label: 'Business Logic Core', tech: 'Type-safe domain microservices with strict schema contracts' },
        { step: '04', label: 'Analytics Pipeline', tech: 'Real-time telemetry, audit logs & operational dashboards' },
      ],
      compliance: ['End-to-End Encryption', 'Role-Based Access Control (RBAC)', 'Immutable Audit Logging'],
    },
    {
      id: 'managed-security',
      serviceId: 'it-support',
      tabLabel: '24/7 Security SOC',
      title: 'Proactive Managed Threat Detection & Infrastructure Defense',
      headline: 'Round-the-clock surveillance protecting your applications, data, and operational continuity.',
      description: 'Our security operations team monitors your systems 24/7/365. We enforce zero-trust access controls, conduct regular vulnerability scans, apply automated security patches, and maintain rapid-recovery disaster playbooks.',
      badges: ['24/7/365 Active SOC', 'Zero-Trust Architecture', '< 15min Response SLA'],
      specs: [
        { label: 'Response SLA', value: '< 15 min', detail: 'Direct escalation to senior architects' },
        { label: 'Threat Mitigation', value: '100%', detail: 'Automated anomaly detection & blocking' },
        { label: 'Backup Cadence', value: 'Hourly', detail: 'Immutable offsite snapshots with 1-click restore' },
      ],
      architectureNodes: [
        { step: '01', label: 'SIEM & Telemetry Ingestion', tech: 'Real-time log parsing and behavioral anomaly alerts' },
        { step: '02', label: 'Zero-Trust Perimeter', tech: 'MFA, WireGuard encrypted tunnels & least-privilege IAM' },
        { step: '03', label: 'Automated Vulnerability Scan', tech: 'Continuous dependency & SAST code vulnerability checks' },
        { step: '04', label: 'Disaster Recovery Vault', tech: 'Multi-cloud cold storage snapshots with RPO < 1 hour' },
      ],
      compliance: ['Zero-Trust Security Model', 'HIPAA / GDPR Compliance Readiness', 'Continuous Backup Verification'],
    },
    {
      id: 'web-platforms',
      serviceId: 'web-dev',
      tabLabel: 'Web Platforms',
      title: 'High-Performance Web Applications & Headless Commerce',
      headline: 'Sub-second speeds, fluid glassmorphic UI, and conversions engineered for market leadership.',
      description: 'Transform your web presence from a static brochure into a lightning-fast digital engine. We develop cutting-edge headless e-commerce, customer portals, and web applications utilizing Next.js, React 19, and modern edge streaming.',
      badges: ['Sub-Second LCP', '100/100 Lighthouse', 'Headless Architecture'],
      specs: [
        { label: 'Lighthouse Score', value: '100/100', detail: 'Performance, SEO, & Accessibility' },
        { label: 'FCP Speed', value: '0.8 sec', detail: 'Instantaneous above-the-fold render' },
        { label: 'Mobile Conversion', value: '+140%', detail: 'Optimized touch interactions & frictionless checkout' },
      ],
      architectureNodes: [
        { step: '01', label: 'Modern React 19 UI', tech: 'Glassmorphic design system with micro-interactions' },
        { step: '02', label: 'Edge SSR & ISR', tech: 'Incremental static regeneration for real-time fresh content' },
        { step: '03', label: 'Headless CMS & APIs', tech: 'Decoupled content layer for flexible multi-channel delivery' },
        { step: '04', label: 'Conversion Tracking', tech: 'Server-side privacy-first attribution and analytics' },
      ],
      compliance: ['WCAG 2.1 AA Accessible', 'Core Web Vitals Optimal', 'GDPR Cookie Consent Ready'],
    },
  ];

  const currentTrack = tracks[activeTrackIndex];

  return (
    <section id="solutions" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C77DFF] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#C77DFF] animate-pulse" />
          <span>PILLAR 03 · ENTERPRISE SOLUTIONS</span>
          <span className="text-white/40">·</span>
          <span>MISSION-CRITICAL SYSTEMS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Scalable Architectures Built for{' '}
          <span className="text-metallic-purple">Enterprise Resilience</span>
        </h2>
        <p className="text-[#B8A9C9] text-base sm:text-lg mt-4 leading-relaxed font-sans">
          From multi-region cloud orchestrations to automated business software, explore how B2 Technologies architects fault-tolerant, compliance-grade solutions.
        </p>
      </div>

      {/* Interactive Tabs Header */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-3xl mx-auto">
        {tracks.map((track, idx) => {
          const isActive = activeTrackIndex === idx;
          return (
            <button
              key={track.id}
              onClick={() => setActiveTrackIndex(idx)}
              className={`px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] text-white border-[#C77DFF] shadow-[0_0_25px_rgba(157,78,221,0.5)] scale-105'
                  : 'glass-panel text-[#B8A9C9] border-[#C77DFF]/20 hover:border-[#C77DFF]/50 hover:text-white'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white shadow-[0_0_8px_white]' : 'bg-[#C77DFF]/60'}`} />
              <span>{track.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Main Solution Showcase Card */}
      <div className="rounded-3xl glass-panel border border-[#C77DFF]/30 p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden">
        
        {/* Background glow accent */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-[#7B2CBF]/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Solution Detail & Performance Specs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {currentTrack.badges.map((badge) => (
                <span 
                  key={badge} 
                  className="px-2.5 py-1 rounded-md bg-[#180830] border border-[#C77DFF]/25 text-[11px] font-mono text-[#E0AAFF]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-snug">
              {currentTrack.title}
            </h3>

            <p className="text-sm sm:text-base font-sans text-white/90 leading-relaxed font-medium">
              {currentTrack.headline}
            </p>

            <p className="text-xs sm:text-sm font-sans text-[#B8A9C9] leading-relaxed">
              {currentTrack.description}
            </p>

            {/* Spec Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {currentTrack.specs.map((spec) => (
                <div 
                  key={spec.label} 
                  className="p-3.5 rounded-2xl bg-[#0F0520] border border-[#C77DFF]/20 flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono text-[#B8A9C9] uppercase tracking-wider mb-1 block">
                    {spec.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-display font-extrabold text-white">
                    {spec.value}
                  </span>
                  <span className="text-[10px] text-[#C77DFF] mt-1 font-mono leading-tight">
                    {spec.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA & Compliance */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onSelectSolution(currentTrack.serviceId)}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 shadow-[0_0_25px_rgba(123,44,191,0.6)] hover:shadow-[0_0_35px_rgba(199,125,255,0.85)] border border-[#C77DFF]/40 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #7B2CBF 0%, #9D4EDD 60%, #C77DFF 100%)',
                }}
              >
                <span>Architect This Solution In Estimator</span>
                <ArrowRight className="w-4 h-4 text-[#F3E8FF]" />
              </button>

              <div className="flex flex-col gap-1 text-[11px] font-mono text-[#B8A9C9] sm:pl-2">
                <span className="text-white font-semibold">Institutional Standards:</span>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {currentTrack.compliance.map((item) => (
                    <span key={item} className="flex items-center gap-1 text-[10px] text-[#E0AAFF]">
                      <CheckCircle2 className="w-3 h-3 text-[#C77DFF]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Topology / System Flow Visualizer */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#090214] border border-[#C77DFF]/25 p-5 sm:p-6 shadow-2xl relative">
              
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-[#C77DFF]/15 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#C77DFF]" />
                  <span className="text-xs font-mono text-white tracking-wider">
                    SYSTEM_TOPOLOGY_SPEC // {currentTrack.id}.v2
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  ACTIVE_INVARIANT
                </div>
              </div>

              {/* 4 Pipeline Sequence Steps */}
              <div className="space-y-3 font-mono">
                {currentTrack.architectureNodes.map((node, i) => (
                  <div 
                    key={node.step}
                    className="group relative p-3.5 rounded-xl bg-[#120626] border border-[#C77DFF]/15 hover:border-[#C77DFF]/50 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#7B2CBF]/30 text-[#E0AAFF] border border-[#C77DFF]/30 flex items-center justify-center text-xs font-bold shrink-0">
                        {node.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs font-semibold text-white group-hover:text-[#E0AAFF] transition-colors truncate">
                            {node.label}
                          </h4>
                          <span className="text-[10px] text-[#C77DFF] shrink-0 font-sans">
                            Tier Verified ✓
                          </span>
                        </div>
                        <p className="text-[11px] text-[#B8A9C9] mt-0.5 leading-relaxed">
                          {node.tech}
                        </p>
                      </div>
                    </div>

                    {/* Connecting line to next node */}
                    {i < currentTrack.architectureNodes.length - 1 && (
                      <div className="absolute left-7 -bottom-3 w-px h-3 bg-gradient-to-b from-[#C77DFF]/40 to-transparent pointer-events-none" />
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Real-time Telemetry Bar */}
              <div className="mt-5 pt-3 border-t border-[#C77DFF]/15 flex items-center justify-between text-[11px] font-mono text-[#B8A9C9]">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#C77DFF]" />
                  <span>Telemetry: Nominal</span>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>End-to-End Encrypted</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
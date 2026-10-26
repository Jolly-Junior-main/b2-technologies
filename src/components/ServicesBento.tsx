import React, { useState } from 'react';
import { Globe, CloudUpload, TrendingUp, ShieldCheck, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceId } from '../utils/estimator';

interface ServiceItem {
  id: ServiceId;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  metrics: string;
  gridSpan: string;
}

interface ServicesBentoProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  const [activeCardId, setActiveCardId] = useState<ServiceId | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'web-dev',
      title: 'Website Development',
      subtitle: 'High-Performance & Bespoke UI/UX',
      description: 'High-performance, responsive custom web applications, fluid micro-interactions, modern UI/UX design systems, and headless e-commerce platforms optimized for lightning speed and conversion.',
      icon: (
        <div className="relative p-3 rounded-2xl bg-[#7B2CBF]/20 border border-[#C77DFF]/30 text-[#E0AAFF] shadow-[0_0_20px_rgba(157,78,221,0.4)]">
          <Globe className="w-6 h-6 text-[#C77DFF]" />
        </div>
      ),
      tags: ['Next.js / React', 'Tailwind & Glassmorphism', 'Headless E-Commerce', 'PWA & Mobile Ready'],
      metrics: 'Sub-second LCP · 100/100 Lighthouse Performance',
      gridSpan: 'lg:col-span-7',
    },
    {
      id: 'cloud-hosting',
      title: 'Cloud & Hosting',
      subtitle: 'Resilient Edge Infrastructure',
      description: 'Secure, scalable cloud architecture, fast automated CI/CD deployment, and 99.99% uptime hosting solutions with multi-region CDN replication and proactive DDoS protection.',
      icon: (
        <div className="relative p-3 rounded-2xl bg-[#7B2CBF]/20 border border-[#C77DFF]/30 text-[#E0AAFF] shadow-[0_0_20px_rgba(157,78,221,0.4)]">
          <CloudUpload className="w-6 h-6 text-[#C77DFF]" />
        </div>
      ),
      tags: ['99.99% SLA Uptime', 'Global Edge CDN', 'Auto-scaling Kubernetes', 'Zero-Downtime Migration'],
      metrics: '42 Global Edge Points · Automated Instant Rollback',
      gridSpan: 'lg:col-span-5',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      subtitle: 'Data-Driven Growth Engines',
      description: 'Data-driven SEO engineering, precision brand positioning, targeted search visibility, and conversion-focused digital growth campaigns backed by real-time attribution analytics.',
      icon: (
        <div className="relative p-3 rounded-2xl bg-[#7B2CBF]/20 border border-[#C77DFF]/30 text-[#E0AAFF] shadow-[0_0_20px_rgba(157,78,221,0.4)]">
          <TrendingUp className="w-6 h-6 text-[#C77DFF]" />
        </div>
      ),
      tags: ['Technical SEO Audit', 'Brand Authority Positioning', 'Funnel Optimization', 'Multi-Channel Attribution'],
      metrics: '+185% Avg Organic Traffic within 90 Days',
      gridSpan: 'lg:col-span-4',
    },
    {
      id: 'it-support',
      title: 'IT Support & Maintenance',
      subtitle: '24/7 Proactive Security & Support',
      description: '24/7 proactive system monitoring, enterprise cybersecurity protection, patch management, threat mitigation, and seamless technical support to keep your operations flawless.',
      icon: (
        <div className="relative p-3 rounded-2xl bg-[#7B2CBF]/20 border border-[#C77DFF]/30 text-[#E0AAFF] shadow-[0_0_20px_rgba(157,78,221,0.4)]">
          <ShieldCheck className="w-6 h-6 text-[#C77DFF]" />
        </div>
      ),
      tags: ['24/7 Monitoring SOC', 'Zero-Trust Security', 'Disaster Recovery', 'Proactive Health Audits'],
      metrics: '< 15min Emergency Response Time SLA',
      gridSpan: 'lg:col-span-4',
    },
    {
      id: 'custom-solutions',
      title: 'Custom Solutions',
      subtitle: 'Tailored Enterprise Software',
      description: 'Tailored enterprise software, microservice APIs, intelligent data connectors, and automated business workflows built around your unique organizational requirements.',
      icon: (
        <div className="relative p-3 rounded-2xl bg-[#7B2CBF]/20 border border-[#C77DFF]/30 text-[#E0AAFF] shadow-[0_0_20px_rgba(157,78,221,0.4)]">
          <Code2 className="w-6 h-6 text-[#C77DFF]" />
        </div>
      ),
      tags: ['Custom REST & GraphQL APIs', 'Legacy Modernization', 'ERP / CRM Automation', 'High-Load Systems'],
      metrics: '70% Operational Time Saved via Automation',
      gridSpan: 'lg:col-span-4',
    },
  ];

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C77DFF] mb-3">
          <span>THE 5 CORE PILLARS</span>
          <span className="text-white/40">·</span>
          <span>ENTERPRISE-GRADE CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Comprehensive Services Engineered For{' '}
          <span className="text-metallic-purple">Exponential Scale</span>
        </h2>
        <p className="text-[#B8A9C9] text-base sm:text-lg mt-4 leading-relaxed font-sans">
          From high-performance frontend interfaces to resilient cloud backends, explore the 5 core pillars of B2 Technologies.
        </p>
      </div>

      {/* Glassmorphic Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {services.map((service) => (
          <BentoCard
            key={service.id}
            service={service}
            isActive={activeCardId === service.id}
            onSelect={() => {
              setActiveCardId(service.id);
              onSelectService(service.id);
            }}
          />
        ))}
      </div>
    </section>
  );
};

interface BentoCardProps {
  service: ServiceItem;
  isActive: boolean;
  onSelect: () => void;
}

const BentoCard: React.FC<BentoCardProps> = ({ service, isActive, onSelect }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, hasHover: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      hasHover: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, hasHover: false }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden cursor-pointer ${
        service.gridSpan
      } ${
        isActive 
          ? 'border-[#C77DFF] shadow-[0_0_35px_rgba(157,78,221,0.45)]' 
          : 'border-[#C77DFF]/20 hover:border-[#C77DFF]/60 hover:shadow-[0_15px_45px_rgba(123,44,191,0.25)]'
      }`}
      onClick={onSelect}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      {mousePos.hasHover && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(199, 125, 255, 0.18), transparent 70%)`,
          }}
        />
      )}

      {/* Top row: Icon + Pillar category */}
      <div>
        <div className="flex items-center justify-between mb-6">
          {service.icon}
          <span className="text-xs font-mono text-[#E0AAFF] bg-[#160A2A] px-3 py-1 rounded-full border border-[#C77DFF]/25">
            Pillar {service.id === 'web-dev' ? '01' : service.id === 'cloud-hosting' ? '02' : service.id === 'digital-marketing' ? '03' : service.id === 'it-support' ? '04' : '05'}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 group-hover:text-[#E0AAFF] transition-colors">
          {service.title}
        </h3>
        <p className="text-xs font-mono text-[#C77DFF] mb-3">
          {service.subtitle}
        </p>

        <p className="text-sm text-[#B8A9C9] leading-relaxed mb-6 font-sans">
          {service.description}
        </p>
      </div>

      {/* Bottom Area: Tags, Metrics, and Action */}
      <div className="pt-4 border-t border-[#C77DFF]/15 space-y-4">
        {/* Capability tags (clean text tags with dividers) */}
        <div className="flex flex-wrap gap-2 text-xs">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[#E0AAFF]/90 bg-[#130826] px-2.5 py-1 rounded-md border border-[#C77DFF]/15 font-mono text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Quantified Metric Bar */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/20 px-3 py-1.5 rounded-lg border border-emerald-500/20">
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{service.metrics}</span>
        </div>

        {/* Select & Configure CTA */}
        <div className="flex items-center justify-between text-xs font-semibold text-[#E0AAFF] group-hover:text-white transition-colors pt-1">
          <span>Configure in Estimator</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#C77DFF]" />
        </div>
      </div>
    </div>
  );
};

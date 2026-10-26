import React, { useState } from 'react';
import { ExternalLink, Zap, Layers, Server, ShoppingBag, Cpu, CheckCircle, ArrowRight, ShieldCheck, Filter } from 'lucide-react';
import { ServiceId } from '../utils/estimator';

interface ProjectCaseStudy {
  id: string;
  serviceId: ServiceId;
  title: string;
  category: string;
  tag: string;
  description: string;
  stats: { label: string; value: string }[];
  accentColor: string;
  uiMockup: React.ReactNode;
  techStack: string[];
  architectureDetails: {
    topology: string;
    challengeSolved: string;
    impact: string;
  };
}

interface PortfolioShowcaseProps {
  onSelectService?: (serviceId: ServiceId) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onSelectService }) => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: ProjectCaseStudy[] = [
    {
      id: 'apex-cloud',
      serviceId: 'cloud-hosting',
      title: 'Apex Global Cloud Engine',
      category: 'Cloud & Hosting',
      tag: 'Cloud & Infrastructure',
      description: 'Architected a multi-region distributed edge compute network with automated zero-downtime rolling deploys and DDoS telemetry mitigation for a high-frequency trading platform.',
      stats: [
        { label: 'Throughput Scaling', value: '+420%' },
        { label: 'Global Edge Latency', value: '18ms' },
        { label: 'Uptime SLA', value: '99.999%' },
      ],
      accentColor: '#C77DFF',
      techStack: ['Kubernetes', 'Cloudflare Workers', 'Terraform', 'PostgreSQL BDR', 'WireGuard'],
      architectureDetails: {
        topology: 'Multi-Region Anycast Edge Mesh across 42 global points of presence with automated failover and warm standby replicas.',
        challengeSolved: 'Eliminated catastrophic single-datacenter failover delays and latency bottlenecks for high-volume transactions.',
        impact: 'Achieved sub-20ms P99 latency worldwide and 100% uptime through 3 global traffic spikes.',
      },
      uiMockup: (
        <div className="w-full h-44 bg-[#090314] rounded-xl p-3 border border-[#C77DFF]/20 flex flex-col justify-between font-mono text-[10px]">
          <div className="flex items-center justify-between border-b border-[#C77DFF]/10 pb-2">
            <div className="flex items-center gap-1.5 text-[#E0AAFF]">
              <Server className="w-3.5 h-3.5 text-[#C77DFF]" />
              <span>edge-cluster-us-east.mesh</span>
            </div>
            <span className="text-emerald-400 font-semibold">ONLINE 100%</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-2">
            <div className="bg-[#140826] p-2 rounded border border-[#C77DFF]/15">
              <span className="text-[#B8A9C9] block text-[9px]">Ingress</span>
              <span className="text-white font-bold text-xs">84.2 GB/s</span>
            </div>
            <div className="bg-[#140826] p-2 rounded border border-[#C77DFF]/15">
              <span className="text-[#B8A9C9] block text-[9px]">P99 Latency</span>
              <span className="text-[#C77DFF] font-bold text-xs">18.4 ms</span>
            </div>
            <div className="bg-[#140826] p-2 rounded border border-[#C77DFF]/15">
              <span className="text-[#B8A9C9] block text-[9px]">Active PoPs</span>
              <span className="text-white font-bold text-xs">42 nodes</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] text-[#B8A9C9] pt-1 border-t border-[#C77DFF]/10">
            <span>TLS 1.3 Certified</span>
            <span className="text-[#E0AAFF]">Zero packet loss</span>
          </div>
        </div>
      ),
    },
    {
      id: 'lumina-luxury',
      serviceId: 'web-dev',
      title: 'Lumina Digital Commerce',
      category: 'Website Development',
      tag: 'Web Dev & UI/UX',
      description: 'Engineered an ultra-luxurious, dark-mode headless e-commerce experience featuring 3D product interactions, instant edge caching, and a frictionless 1-click checkout flow.',
      stats: [
        { label: 'Mobile Conversion', value: '+165%' },
        { label: 'First Contentful Paint', value: '0.9s' },
        { label: 'Q4 Pipeline Revenue', value: '$4.2M' },
      ],
      accentColor: '#9D4EDD',
      techStack: ['Next.js 15', 'React 19', 'Tailwind CSS v4', 'GraphQL Storefront', 'Edge CDN'],
      architectureDetails: {
        topology: 'Decoupled headless storefront built on Next.js App Router with incremental static regeneration and distributed asset caching.',
        challengeSolved: 'Replaced a slow legacy monolithic store that was losing 40% of mobile users during peak drops.',
        impact: 'Increased mobile conversions by 165% with instantaneous 0.9s page transitions worldwide.',
      },
      uiMockup: (
        <div className="w-full h-44 bg-[#090314] rounded-xl p-3 border border-[#C77DFF]/20 flex flex-col justify-between font-mono text-[10px]">
          <div className="flex items-center justify-between border-b border-[#C77DFF]/10 pb-2">
            <div className="flex items-center gap-1.5 text-white font-sans font-semibold">
              <ShoppingBag className="w-3.5 h-3.5 text-[#C77DFF]" />
              <span>LUMINA LUXE STOREFRONT</span>
            </div>
            <span className="text-[#C77DFF] text-[9px]">CART (2)</span>
          </div>
          <div className="flex items-center gap-3 py-1">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-tr from-[#240046] to-[#7B2CBF] flex items-center justify-center text-white border border-[#C77DFF]/30 text-[10px] font-sans font-bold">
              3D VIEW
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-white font-sans text-xs font-semibold block">Chronograph Obsidian Edition</span>
              <span className="text-emerald-400 font-bold">$2,850.00</span>
              <span className="text-[9px] text-[#B8A9C9] block">Instant Next-Day Air Delivery</span>
            </div>
          </div>
          <div className="bg-[#7B2CBF]/30 p-1.5 rounded text-center text-white font-sans font-semibold text-[10px] border border-[#C77DFF]/30">
            Apple Pay · Instant Checkout
          </div>
        </div>
      ),
    },
    {
      id: 'nexaflow-erp',
      serviceId: 'custom-solutions',
      title: 'NexaFlow Enterprise Orchestrator',
      category: 'Custom Solutions',
      tag: 'Custom Software & APIs',
      description: 'Built a custom unified operations engine integrating disparate legacy ERP databases, automated invoice routing, and real-time cross-departmental supply chain tracking.',
      stats: [
        { label: 'Automated Operations', value: '75%' },
        { label: 'API Sync Speedup', value: '10x' },
        { label: 'Enterprise Users', value: '2,500+' },
      ],
      accentColor: '#7B2CBF',
      techStack: ['Node.js & TypeScript', 'Kafka Message Broker', 'PostgreSQL', 'Redis Streams', 'Docker'],
      architectureDetails: {
        topology: 'Event-driven microservice architecture with bi-directional CDC connectors and immutable ledger verification.',
        challengeSolved: 'Unified 4 disconnected legacy systems that required manual CSV exports and 14+ hours of weekly staff reconciliation.',
        impact: 'Saved 70% operational processing time and processed over 1.4 million automated invoices error-free.',
      },
      uiMockup: (
        <div className="w-full h-44 bg-[#090314] rounded-xl p-3 border border-[#C77DFF]/20 flex flex-col justify-between font-mono text-[10px]">
          <div className="flex items-center justify-between border-b border-[#C77DFF]/10 pb-2">
            <div className="flex items-center gap-1.5 text-[#E0AAFF]">
              <Cpu className="w-3.5 h-3.5 text-[#C77DFF]" />
              <span>pipeline-orchestrator.sync</span>
            </div>
            <span className="text-emerald-400 text-[9px]">LIVE SYNC</span>
          </div>
          <div className="space-y-1.5 py-1">
            <div className="flex items-center justify-between bg-[#130826] px-2 py-1 rounded">
              <span className="text-[#B8A9C9]">Warehouse DB ↔ CRM</span>
              <span className="text-emerald-300">Synchronized (0ms)</span>
            </div>
            <div className="flex items-center justify-between bg-[#130826] px-2 py-1 rounded">
              <span className="text-[#B8A9C9]">Automated Billing Dispatch</span>
              <span className="text-[#C77DFF]">1,420 invoices processed</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] text-[#B8A9C9] pt-1 border-t border-[#C77DFF]/10">
            <span>Audit Invariants: Passed</span>
            <span className="text-white font-mono">SOC2 Type II</span>
          </div>
        </div>
      ),
    },
  ];

  const filterCategories = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'web', label: 'Web & E-Commerce' },
    { id: 'software', label: 'Custom Enterprise Software' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'cloud') return p.category === 'Cloud & Hosting';
    if (activeFilter === 'web') return p.category === 'Website Development';
    if (activeFilter === 'software') return p.category === 'Custom Solutions';
    return true;
  });

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C77DFF] mb-3">
          <span>FEATURED WORK & CASE STUDIES</span>
          <span className="text-white/40">·</span>
          <span>PROVEN ROI & BENCHMARKS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Transformative Outcomes In <span className="text-metallic-purple">Action</span>
        </h2>
        <p className="text-[#B8A9C9] text-base sm:text-lg mt-4 leading-relaxed font-sans">
          Inspect how our multidisciplinary approach turns technical complexity into tangible business growth and institutional speed.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border cursor-pointer ${
              activeFilter === cat.id
                ? 'bg-[#7B2CBF] text-white border-[#C77DFF] shadow-[0_0_15px_rgba(157,78,221,0.5)]'
                : 'glass-panel text-[#B8A9C9] border-[#C77DFF]/20 hover:border-[#C77DFF]/50 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sleek Glassmorphic Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const isExpanded = selectedCase === project.id;
          return (
            <div
              key={project.id}
              className={`rounded-2xl glass-panel p-6 flex flex-col justify-between border transition-all duration-300 relative overflow-hidden ${
                isExpanded 
                  ? 'border-[#C77DFF] shadow-[0_20px_50px_rgba(157,78,221,0.35)] bg-[#100424]/90' 
                  : 'border-[#C77DFF]/20 hover:border-[#C77DFF]/60 hover:shadow-[0_15px_45px_rgba(157,78,221,0.25)]'
              }`}
            >
              {/* Top Badge & Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-[#E0AAFF] bg-[#160A2A] px-2.5 py-1 rounded-md border border-[#C77DFF]/20">
                    {project.tag}
                  </span>
                  <span className="text-xs text-[#B8A9C9] font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Dark mode UI Mockup Frame */}
                <div className="mb-6 transform hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                  {project.uiMockup}
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 hover:text-[#E0AAFF] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#B8A9C9] leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Stats Strip */}
              <div className="pt-4 border-t border-[#C77DFF]/15">
                <div className="grid grid-cols-3 gap-2 text-center bg-[#100620]/80 p-3 rounded-xl border border-[#C77DFF]/15">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <span className="text-sm sm:text-base font-display font-extrabold text-[#C77DFF] block">
                        {stat.value}
                      </span>
                      <span className="text-[9px] font-mono text-[#B8A9C9] block truncate">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Toggle button */}
                <button
                  onClick={() => setSelectedCase(isExpanded ? null : project.id)}
                  className={`w-full mt-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    isExpanded
                      ? 'bg-[#7B2CBF] text-white border border-[#C77DFF]'
                      : 'glass-panel text-[#E0AAFF] hover:text-white border border-[#C77DFF]/20 hover:border-[#C77DFF]/60'
                  }`}
                >
                  <span>{isExpanded ? 'Hide Architecture Specs' : 'Inspect Full Architecture'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C77DFF]" />
                </button>
              </div>

              {/* Expanded Technical Deep-Dive Details */}
              {isExpanded && (
                <div className="mt-5 p-4 rounded-xl bg-[#090212] border border-[#C77DFF]/30 text-xs space-y-3 animate-fade-in font-sans">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#E0AAFF] block mb-1">
                      Architecture Topology:
                    </span>
                    <p className="text-[#B8A9C9] text-xs leading-relaxed">
                      {project.architectureDetails.topology}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-semibold text-emerald-400 block mb-1">
                      Engineering Challenge Solved:
                    </span>
                    <p className="text-[#B8A9C9] text-xs leading-relaxed">
                      {project.architectureDetails.challengeSolved}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-semibold text-white block mb-1.5">
                      Core Technology Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#1A0A33] border border-[#C77DFF]/20 text-[10px] font-mono text-[#E0AAFF]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {onSelectService && (
                    <button
                      onClick={() => onSelectService(project.serviceId)}
                      className="w-full mt-2 py-2 rounded-lg bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-[0_0_15px_rgba(199,125,255,0.6)] transition-shadow"
                    >
                      <span>Configure Similar Project In Estimator</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
import React from 'react';
import { 
  Cpu, Layers, Cloud, Database, Shield, Zap, 
  Terminal, Server, Code2, Globe, Sparkles 
} from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  highlight?: boolean;
}

export const TechStackMarquee: React.FC = () => {
  const technologies: TechItem[] = [
    { name: 'React 19', category: 'Frontend' },
    { name: 'TypeScript', category: 'Type Safety' },
    { name: 'Next.js App Router', category: 'SSR & Edge' },
    { name: 'Tailwind CSS v4', category: 'Design System' },
    { name: 'Cloudflare Workers', category: 'Edge Compute' },
    { name: 'AWS Cloud', category: 'Cloud Infrastructure' },
    { name: 'Kubernetes', category: 'Container Orchestration' },
    { name: 'PostgreSQL', category: 'Relational DB' },
    { name: 'Redis Streams', category: 'In-Memory Cache' },
    { name: 'Node.js & Express', category: 'Microservices' },
    { name: 'GraphQL & REST', category: 'API Contracts' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Zero-Trust IAM', category: 'Security' },
  ];

  return (
    <div className="relative py-12 border-y border-[#C77DFF]/15 bg-[#080313]/60 backdrop-blur-md overflow-hidden">
      
      {/* Edge gradient masks */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#05020A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#05020A] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#B8A9C9]/80">
          ENTERPRISE-GRADE STACK & CLOUD ECOSYSTEM ARCHITECTURE
        </span>
      </div>

      {/* Marquee row */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-6 max-w-7xl mx-auto justify-center flex-wrap">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-[#C77DFF]/20 hover:border-[#C77DFF]/60 hover:bg-[#7B2CBF]/15 transition-all duration-300 group shrink-0 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C77DFF] group-hover:scale-150 transition-transform shadow-[0_0_8px_#C77DFF]" />
            <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#E0AAFF] transition-colors">
              {tech.name}
            </span>
            <span className="text-[10px] font-mono text-[#B8A9C9] pl-1 border-l border-[#C77DFF]/20">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
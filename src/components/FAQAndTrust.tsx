import React, { useState } from 'react';
import { ChevronDown, MessageSquare, Star, Quote, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  metric: string;
  rating: number;
}

interface FAQAndTrustProps {
  onStartProject: () => void;
}

export const FAQAndTrust: React.FC<FAQAndTrustProps> = ({ onStartProject }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Apex Global Financial',
      quote: 'B2 Technologies re-architected our distributed trading infrastructure across 42 edge PoPs. Zero downtime during the entire migration and our P99 latency plummeted from 120ms to 18ms.',
      metric: '85% Latency Drop · 99.999% SLA',
      rating: 5,
    },
    {
      name: 'Elena Rostova',
      role: 'VP of Digital Experience',
      company: 'Lumina Luxury Group',
      quote: 'The dark-mode glassmorphic storefront B2 built for us is art in code. Our mobile conversion rate jumped by 165% in the first quarter post-launch, with sub-second page loads globally.',
      metric: '+165% Conversion Lift',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Founder & Head of Product',
      company: 'NexaFlow Solutions',
      quote: 'Finding engineers who master both world-class UI design and hardcore distributed backend architecture is nearly impossible. B2 Technologies is that rare partner. Exceptional speed and precision.',
      metric: '75% Workflow Automation',
      rating: 5,
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'How quickly can B2 Technologies start and deliver a project?',
      answer: 'Standard discovery and architecture kickoff occurs within 48 hours of project confirmation. Typical website builds range between 3–6 weeks, while cloud migrations and custom enterprise software modules take 4–8 weeks depending on scope tier. For time-critical launches, our accelerated Sprint delivery tier fast-tracks development by up to 40%.',
      category: 'Timeline',
    },
    {
      question: 'Who owns the intellectual property (IP) and source code?',
      answer: 'You retain 100% full intellectual property ownership. Upon milestone sign-off, all Git repositories, design system tokens, database schemas, CI/CD pipeline scripts, and infrastructure configurations are transferred directly to your organization with zero vendor lock-in.',
      category: 'IP & Ownership',
    },
    {
      question: 'How does B2 Technologies guarantee 99.99% uptime and zero-trust security?',
      answer: 'Our infrastructure designs leverage multi-region edge clouds (AWS, Cloudflare) with automated health probes and instantaneous DNS failover. We configure strict zero-trust IAM, end-to-end TLS 1.3 encryption, automated vulnerability SAST pipelines, and continuous immutable off-site backups.',
      category: 'Security & Uptime',
    },
    {
      question: 'How does the interactive Project Estimator calculate costs?',
      answer: 'Our estimator uses transparent, milestone-based pricing derived from actual engineering sprint velocity. When bundling multiple pillars (e.g. Website Development + Cloud Hosting + 24/7 Security), our synergy algorithm automatically applies up to a 15% discount, delivering predictable enterprise ROI without hidden fees.',
      category: 'Pricing',
    },
    {
      question: 'Do you offer ongoing post-launch maintenance and dedicated SLA support?',
      answer: 'Yes. Beyond launch, we offer dedicated 24/7/365 infrastructure monitoring, proactive patch management, automated backup testing, and sub-15 minute emergency response SLAs with a dedicated private communication channel (Slack / Teams).',
      category: 'Support & SLAs',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Testimonials Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C77DFF] mb-3">
          <Star className="w-3.5 h-3.5 text-[#C77DFF] fill-[#C77DFF]" />
          <span>PROVEN CLIENT OUTCOMES</span>
          <span className="text-white/40">·</span>
          <span>EXECUTIVE TESTIMONIALS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Trusted by Visionaries to <span className="text-metallic-purple">Deliver Excellence</span>
        </h2>
        <p className="text-[#B8A9C9] text-base sm:text-lg mt-4 leading-relaxed font-sans">
          Read what leaders and technical founders say about partnering with B2 Technologies.
        </p>
      </div>

      {/* 3 Executive Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl glass-panel p-6 sm:p-8 border border-[#C77DFF]/20 hover:border-[#C77DFF]/60 hover:shadow-[0_15px_40px_rgba(157,78,221,0.25)] transition-all duration-300 flex flex-col justify-between relative group"
          >
            {/* Top quote icon & stars */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C77DFF] fill-[#C77DFF]" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-[#C77DFF]/40 group-hover:text-[#C77DFF] transition-colors" />
              </div>

              <p className="text-sm font-sans text-[#E0AAFF]/90 leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#C77DFF]/15">
              <span className="text-xs font-mono font-bold text-emerald-400 block mb-2">
                ✓ {t.metric}
              </span>
              <h4 className="text-base font-display font-bold text-white group-hover:text-[#E0AAFF] transition-colors">
                {t.name}
              </h4>
              <p className="text-xs text-[#B8A9C9] font-sans">
                {t.role} · <span className="text-white font-medium">{t.company}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C77DFF] mb-3">
          <MessageSquare className="w-3.5 h-3.5 text-[#C77DFF]" />
          <span>CLARITY & TRANSPARENCY</span>
          <span className="text-white/40">·</span>
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
          Everything You Need to Know Before <span className="text-metallic-purple">We Begin</span>
        </h3>
        <p className="text-[#B8A9C9] text-base mt-3 leading-relaxed font-sans">
          Have questions about architecture, IP handover, or milestone pacing? Here are our standard agreements.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`rounded-2xl glass-panel transition-all duration-300 border overflow-hidden ${
                isOpen 
                  ? 'border-[#C77DFF]/60 bg-[#120525]/80 shadow-[0_10px_30px_rgba(123,44,191,0.2)]' 
                  : 'border-[#C77DFF]/20 hover:border-[#C77DFF]/40'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C77DFF] shrink-0" />
                  <span className="text-base sm:text-lg font-display font-bold text-white hover:text-[#E0AAFF] transition-colors">
                    {faq.question}
                  </span>
                </div>
                <div className={`p-1.5 rounded-full bg-[#1F0E3D] text-[#C77DFF] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#7B2CBF] text-white' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#B8A9C9] font-sans leading-relaxed border-t border-[#C77DFF]/10 animate-fade-in">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct FAQ Prompt Bar */}
      <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl glass-panel border border-[#C77DFF]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-base font-display font-bold text-white">
            Have a custom requirement or proprietary security mandate?
          </h4>
          <p className="text-xs sm:text-sm text-[#B8A9C9] mt-1 font-sans">
            Our engineering team reviews architecture blueprints and NDA requests promptly.
          </p>
        </div>
        <button
          onClick={onStartProject}
          className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 shadow-[0_0_20px_rgba(123,44,191,0.5)] hover:shadow-[0_0_30px_rgba(199,125,255,0.8)] border border-[#C77DFF]/40 flex items-center gap-2 cursor-pointer shrink-0 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #7B2CBF 0%, #9D4EDD 60%, #C77DFF 100%)',
          }}
        >
          <Sparkles className="w-4 h-4 text-[#F3E8FF]" />
          <span>Consult Our Principal Architect</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F3E8FF]" />
        </button>
      </div>

    </section>
  );
};
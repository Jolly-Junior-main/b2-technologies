import React from 'react';
import { B2LogoEmblem } from './B2LogoEmblem';
import { Github, Twitter, Linkedin, ArrowUp, Mail, Shield, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#C77DFF]/20 bg-[#070210]/90 backdrop-blur-2xl mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C77DFF]/15">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <B2LogoEmblem size={44} showText={true} />
            <p className="text-xs sm:text-sm text-[#B8A9C9] max-w-sm leading-relaxed font-sans">
              "Building a Smarter Tomorrow" — Engineering resilient web architectures, modern cloud infrastructure, and custom solutions for visionary enterprises.
            </p>

            <div className="space-y-1.5 text-xs font-mono text-[#B8A9C9]">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-3.5 h-3.5 text-[#C77DFF] shrink-0" />
                <span>Addis Ababa, Ethiopia · Global Edge</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                <a href="tel:+251919477040" className="flex items-center gap-1.5 hover:text-[#E0AAFF] transition-colors">
                  <Phone className="w-3 h-3 text-[#C77DFF]" />
                  <span>0919 477 040</span>
                </a>
                <a href="tel:+251966726065" className="flex items-center gap-1.5 hover:text-[#E0AAFF] transition-colors">
                  <Phone className="w-3 h-3 text-[#C77DFF]" />
                  <span>0966 726 065</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 text-[#E0AAFF]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-[#130826] border border-[#C77DFF]/20 hover:text-white hover:border-[#C77DFF] transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-[#130826] border border-[#C77DFF]/20 hover:text-white hover:border-[#C77DFF] transition-colors"
                aria-label="Twitter X profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-[#130826] border border-[#C77DFF]/20 hover:text-white hover:border-[#C77DFF] transition-colors"
                aria-label="LinkedIn Company Page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@b2technologies.com"
                className="p-2 rounded-xl bg-[#130826] border border-[#C77DFF]/20 hover:text-white hover:border-[#C77DFF] transition-colors"
                aria-label="Email B2 Technologies"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold block">
              Core Capabilities
            </span>
            <ul className="space-y-2 text-xs text-[#B8A9C9]">
              <li><a href="#services" className="hover:text-[#E0AAFF] transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-[#E0AAFF] transition-colors">Cloud & Hosting Solutions</a></li>
              <li><a href="#solutions" className="hover:text-[#E0AAFF] transition-colors">Multi-Region Edge Mesh</a></li>
              <li><a href="#services" className="hover:text-[#E0AAFF] transition-colors">Digital Growth & SEO</a></li>
              <li><a href="#services" className="hover:text-[#E0AAFF] transition-colors">IT Support & 24/7 Security</a></li>
              <li><a href="#solutions" className="hover:text-[#E0AAFF] transition-colors">Custom Enterprise Software</a></li>
            </ul>
          </div>

          {/* Company & Methodology */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold block">
              Pillars
            </span>
            <ul className="space-y-2 text-xs text-[#B8A9C9]">
              <li><a href="#process" className="hover:text-[#E0AAFF] transition-colors">01. IDEAS (Discovery)</a></li>
              <li><a href="#services" className="hover:text-[#E0AAFF] transition-colors">02. WEBSITES (Engineering)</a></li>
              <li><a href="#solutions" className="hover:text-[#E0AAFF] transition-colors">03. SOLUTIONS (Enterprise)</a></li>
              <li><a href="#portfolio" className="hover:text-[#E0AAFF] transition-colors">Case Studies & ROI</a></li>
              <li><a href="#contact" className="hover:text-[#E0AAFF] transition-colors">Project Estimator</a></li>
            </ul>
          </div>

          {/* Trust / Compliance */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold block">
              Standards
            </span>
            <div className="space-y-2 text-xs text-[#B8A9C9]">
              <div className="flex items-center gap-1.5 text-white/90">
                <Shield className="w-3.5 h-3.5 text-[#C77DFF]" />
                <span>99.99% SLA Uptime</span>
              </div>
              <p className="text-[11px] text-[#B8A9C9] font-mono">
                Zero-Trust Security Architecture & Global Edge Delivery
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#B8A9C9]">
          <p>© {new Date().getFullYear()} B2 TECHNOLOGIES INC. All rights reserved. Building a Smarter Tomorrow.</p>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#C77DFF] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { B2LogoEmblem } from './B2LogoEmblem';
import { Menu, X, ArrowUpRight, Activity } from 'lucide-react';

interface NavbarProps {
  onStartProjectClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProjectClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['services', 'solutions', 'process', 'portfolio', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Solutions', href: '#solutions', id: 'solutions' },
    { label: 'Our Process', href: '#process', id: 'process' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'About', href: '#about', id: 'about' },
  ];

  return (
    <header className="fixed top-5 inset-x-0 z-50 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Pill-shaped floating glass bar */}
      <nav 
        className={`w-full rounded-full glass-nav px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between gap-6 sm:gap-8 ${
          isScrolled 
            ? 'shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8),0_0_20px_rgba(157,78,221,0.25)] border-[#C77DFF]/35' 
            : 'border-[#C77DFF]/20'
        }`}
        aria-label="Main Navigation"
      >
        {/* Zone 1: Circular Logo + Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C77DFF] rounded-full"
          aria-label="B2 Technologies Home"
        >
          <B2LogoEmblem size={34} showText={true} />
        </a>

        {/* Zone 2: Navigation Links (Clean single-line text with subtle hover effect) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#B8A9C9]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-all duration-200 whitespace-nowrap shrink-0 relative py-1 ${
                  isActive 
                    ? 'text-white font-semibold drop-shadow-[0_0_8px_rgba(199,125,255,0.8)]' 
                    : 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(199,125,255,0.6)]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#C77DFF] to-transparent rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Zone 3: Primary Action Glowing Button & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onStartProjectClick}
            className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white transition-all duration-300 shadow-[0_0_20px_rgba(123,44,191,0.5)] hover:shadow-[0_0_30px_rgba(199,125,255,0.8)] border border-[#C77DFF]/40 hover:border-[#C77DFF] active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #7B2CBF 0%, #9D4EDD 50%, #5A189A 100%)',
            }}
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E0AAFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#B8A9C9] hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C77DFF] cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 rounded-2xl glass-panel p-5 border border-[#C77DFF]/30 shadow-2xl backdrop-blur-2xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#B8A9C9] hover:text-white hover:bg-[#7B2CBF]/20 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#C77DFF]">→</span>
              </a>
            ))}
            <div className="pt-2 border-t border-[#C77DFF]/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProjectClick();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] text-white text-xs font-semibold shadow-[0_0_15px_rgba(157,78,221,0.5)] cursor-pointer"
              >
                Launch Your Project Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
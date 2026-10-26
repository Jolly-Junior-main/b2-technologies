import React, { useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStackMarquee } from './components/TechStackMarquee';
import { ServicesBento } from './components/ServicesBento';
import { SolutionsSection } from './components/SolutionsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { AboutSection } from './components/AboutSection';
import { FAQAndTrust } from './components/FAQAndTrust';
import { ContactEstimator } from './components/ContactEstimator';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ServiceId } from './utils/estimator';

export default function App() {
  const [targetService, setTargetService] = useState<ServiceId | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromBento = (serviceId: ServiceId) => {
    setTargetService(serviceId);
    scrollToContact();
  };

  return (
    <div className="relative min-h-screen text-[#B8A9C9] font-sans selection:bg-[#7B2CBF] selection:text-white bg-[#05020A]">
      {/* Animated Floating Ambient Background Mesh */}
      <AmbientBackground />

      {/* Floating Pill Glass Navbar */}
      <Navbar onStartProjectClick={scrollToContact} />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Hero Section with 3D Purple Ribbon Centerpiece & Telemetry Widgets */}
        <Hero
          onLaunchProject={scrollToContact}
          onExploreServices={scrollToServices}
        />

        {/* Enterprise Tech Stack & Cloud Ecosystem Marquee */}
        <TechStackMarquee />

        {/* 5 Core Pillars Bento Grid (Website Dev, Cloud, SEO, Support, Custom) */}
        <ServicesBento onSelectService={handleSelectServiceFromBento} />

        {/* Mission-Critical Enterprise Solutions Architecture (Pillar 03: Edge Cloud, Microservices, Security SOC) */}
        <SolutionsSection onSelectSolution={handleSelectServiceFromBento} />

        {/* "Why B2 Technologies" 3-Step Process (01. IDEAS, 02. WEBSITES, 03. SOLUTIONS) */}
        <ProcessTimeline />

        {/* Featured Case Studies Showcase with Dark UI Previews & Filter Controls */}
        <PortfolioShowcase onSelectService={handleSelectServiceFromBento} />

        {/* About & Engineering Standards Section */}
        <AboutSection />

        {/* Client Testimonials & Comprehensive Interactive FAQ */}
        <FAQAndTrust onStartProject={scrollToContact} />

        {/* Interactive Real-Time Contact & Project Estimator Section */}
        <ContactEstimator initialServiceId={targetService} />
      </main>

      {/* Minimalist Dark Glass Footer */}
      <Footer />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTop />
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatScaleMeansSection } from './components/WhatScaleMeansSection';
import { ServicesSection } from './components/ServicesSection';
import { ScaleEngineSection } from './components/ScaleEngineSection';
import { WorkPortfolioSection } from './components/WorkPortfolioSection';
import { CommercialFilmsSection } from './components/CommercialFilmsSection';
import { KolkataSection } from './components/KolkataSection';
import { ContentLabSection } from './components/ContentLabSection';
import { WhyScaleUpSection } from './components/WhyScaleUpSection';
import { AboutSection } from './components/AboutSection';
import { NumbersImpactSection } from './components/NumbersImpactSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ShowreelModal } from './components/ShowreelModal';
import { ArticleModal } from './components/ArticleModal';
import { Project, InsightArticle } from './types';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { ScaleModeProvider } from './context/ScaleModeContext';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('Full 360° Brand Scale');

  // Scroll spy to update active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'services', 'capabilities', 'about', 'insights', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = (service?: string) => {
    if (service) {
      setPrefilledService(service);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScaleModeProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-[#f4f4f2] selection:bg-[#ff3b00] selection:text-white relative">
        {/* Sticky Minimal Navigation */}
        <Navbar
          onOpenContact={() => handleScrollToContact()}
          activeSection={activeSection}
        />

        <main>
          {/* 1. Hero Section with Expanding SCALE UP Typography */}
          <HeroSection
            onExploreWork={handleScrollToWork}
            onOpenContact={() => handleScrollToContact()}
            onWatchShowreel={() => setShowreelOpen(true)}
          />

          {/* Marquee Banner: High-Velocity Brand Axioms */}
          <div className="py-4 bg-[#ff3b00] text-black overflow-hidden select-none border-t border-b border-[#ff3b00]/80">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-display font-black text-sm sm:text-base uppercase tracking-widest">
              <span>IDEAS THAT SCALE</span>
              <span className="text-white">★</span>
              <span>THINK BIGGER. SCALE FURTHER.</span>
              <span className="text-white">★</span>
              <span>WE DON’T JUST MARKET. WE SCALE.</span>
              <span className="text-white">★</span>
              <span>FROM IDEA TO IMPACT</span>
              <span className="text-white">★</span>
              <span>BUILT IN KOLKATA. BUILT TO GO EVERYWHERE.</span>
              <span className="text-white">★</span>
              <span>ATL • BTL • DIGITAL • CONTENT • 4K FILM PRODUCTION</span>
              <span className="text-white">★</span>
              {/* Duplication for seamless infinite loop */}
              <span>IDEAS THAT SCALE</span>
              <span className="text-white">★</span>
              <span>THINK BIGGER. SCALE FURTHER.</span>
              <span className="text-white">★</span>
              <span>WE DON’T JUST MARKET. WE SCALE.</span>
              <span className="text-white">★</span>
              <span>FROM IDEA TO IMPACT</span>
              <span className="text-white">★</span>
              <span>BUILT IN KOLKATA. BUILT TO GO EVERYWHERE.</span>
              <span className="text-white">★</span>
              <span>ATL • BTL • DIGITAL • CONTENT • 4K FILM PRODUCTION</span>
              <span className="text-white">★</span>
            </div>
          </div>

          {/* 2. "WHAT DOES SCALE UP MEAN?" Progressive Reveal Section */}
          <WhatScaleMeansSection />

          {/* 3. Services: WE SCALE ACROSS EVERY TOUCHPOINT */}
          <ServicesSection
            onSelectServiceForEnquiry={(serviceName) => handleScrollToContact(serviceName)}
          />

          {/* 4. The Scale Engine Framework */}
          <ScaleEngineSection />

          {/* 5. Work / Case Studies Portfolio: WE MAKE THINGS PEOPLE REMEMBER */}
          <WorkPortfolioSection
            onSelectProject={(proj) => setSelectedProject(proj)}
          />

          {/* 6. Commercial Films Section: LIGHTS. CAMERA. SCALE. */}
          <CommercialFilmsSection
            onWatchShowreel={() => setShowreelOpen(true)}
          />

          {/* 7. Kolkata Heritage & Scale Section: BUILT IN KOLKATA */}
          <KolkataSection />

          {/* 8. The Content Lab: ONE IDEA. INFINITE CONTENT. */}
          <ContentLabSection />

          {/* 9. Why Scale Up: WHY STOP HERE? */}
          <WhyScaleUpSection />

          {/* 10. About Scale Up: SMALLER THAN A NETWORK. BIGGER THAN AN AGENCY. */}
          <AboutSection
            onOpenContact={() => handleScrollToContact()}
          />

          {/* 11. Numbers & Impact Section */}
          <NumbersImpactSection />

          {/* 12. Insights / Editorial Magazine: THINKING BEYOND THE CAMPAIGN */}
          <InsightsSection
            onSelectArticle={(article) => setSelectedArticle(article)}
          />

          {/* 13. Contact Section: READY TO SCALE? */}
          <ContactSection
            prefilledService={prefilledService}
          />
        </main>

        {/* 14. Footer with Massive SCALE UP Wordmark */}
        <Footer />

        {/* Interactive Modals */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenContact={(campaignName) => handleScrollToContact(campaignName)}
        />

        <ShowreelModal
          isOpen={showreelOpen}
          onClose={() => setShowreelOpen(false)}
        />

        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      </div>
    </ScaleModeProvider>
  );
}

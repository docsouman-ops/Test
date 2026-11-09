import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { About } from './components/About';
import { Approach } from './components/Approach';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'capabilities', 'about', 'our-approach', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f8fd] to-[#edf3fb] text-[#122233] font-body selection:bg-[#f29b55] selection:text-white flex flex-col">
      {/* 1. Header and Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Single Continuous Scrolling Page */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onCtaClick={handleScrollToContact} />

        {/* 3. Integrated Capabilities */}
        <Capabilities />

        {/* 4. About Scal It Up */}
        <About />

        {/* 5. Our Approach */}
        <Approach />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

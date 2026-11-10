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

  // Scroll spy matching main.js: section.getBoundingClientRect().top <= 120
  useEffect(() => {
    const sectionIds = ['home', 'capabilities', 'about', 'our-approach', 'testimonials', 'contact'];

    const updateActiveNavLink = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));

      if (sections.length === 0) return;

      const currentSection = sections.reduce((current, section) => {
        return section.getBoundingClientRect().top <= 120 ? section : current;
      }, sections[0]);

      if (currentSection && currentSection.id) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
    window.addEventListener('resize', updateActiveNavLink);
    updateActiveNavLink();

    return () => {
      window.removeEventListener('scroll', updateActiveNavLink);
      window.removeEventListener('resize', updateActiveNavLink);
    };
  }, []);

  // Scroll-reveal IntersectionObserver matching css3-animate-it (.animatedParent -> .animated.go)
  useEffect(() => {
    const parents = Array.from(document.querySelectorAll('.animatedParent'));

    if (!('IntersectionObserver' in window)) {
      parents.forEach((parent) => {
        parent.querySelectorAll('.animated').forEach((el) => el.classList.add('go'));
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animated').forEach((el) => {
              el.classList.add('go');
            });
            if (entry.target.classList.contains('animateOnce')) {
              observer.unobserve(entry.target);
            }
          } else if (!entry.target.classList.contains('animateOnce')) {
            entry.target.querySelectorAll('.animated').forEach((el) => {
              el.classList.remove('go');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    parents.forEach((parent) => observer.observe(parent));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Capabilities />
        <About />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

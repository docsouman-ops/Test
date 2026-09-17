import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'About', href: '#about' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with interactive SCALE hover expansion */}
          <a
            href="#"
            id="brand-logo"
            className="group flex items-center gap-2.5 focus:outline-none"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <div className="w-8 h-8 rounded-sm bg-[#ff3b00] flex items-center justify-center font-display font-black text-black text-base tracking-tighter transition-transform duration-300 group-hover:scale-110">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5 leading-none">
                <span className={`transition-all duration-300 ${logoHovered ? 'tracking-widest text-[#ff3b00]' : ''}`}>
                  SCALE
                </span>
                <span className="text-[#ff3b00] transition-transform duration-300 group-hover:translate-x-0.5">
                  UP
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] inline-block animate-pulse"></span>
              </span>
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-neutral-400 -mt-0.5">
                Kolkata Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-mono-tech tracking-wider uppercase transition-colors duration-200 relative py-1 ${
                    isActive ? 'text-[#ff3b00]' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff3b00]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              id="nav-cta-btn"
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-[#ff3b00] hover:text-white transition-all duration-300 overflow-hidden shadow-lg shadow-black/40"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                LET’S SCALE
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-white hover:text-[#ff3b00] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col justify-between px-6 pt-28 pb-12 md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-500">
              // Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-display font-black text-3xl text-white hover:text-[#ff3b00] transition-colors flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:text-[#ff3b00] transition-opacity" />
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-neutral-800/80 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 rounded-full bg-[#ff3b00] text-white font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              LET’S SCALE →
            </button>
            <div className="flex items-center justify-between text-xs text-neutral-500 font-mono-tech">
              <span>Kolkata, India</span>
              <span>Ideas That Scale.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

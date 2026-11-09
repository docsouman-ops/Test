import React, { useState } from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Our Approach', href: '#our-approach', id: 'our-approach' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="h-[88px] bg-[rgba(248,247,242,0.94)] backdrop-blur-[12px] border-b border-[rgba(18,34,51,0.12)] rounded-b-[16px] shadow-[0_4px_24px_rgba(18,34,51,0.06)] px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
            aria-label="Scal It Up Home"
          >
            <Logo width={72} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[28px]" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative font-body font-bold text-[0.94rem] transition-colors duration-200 py-2 group whitespace-nowrap ${
                    isActive ? 'text-[#176397]' : 'text-[#16241d] hover:text-[#176397]'
                  }`}
                >
                  {item.label}
                  {/* Animated blue underline that grows left-to-right */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#176397] transition-all duration-200 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Call Us CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="tel:+916292234836"
              className="inline-flex items-center justify-center gap-2.5 px-6 min-h-[52px] rounded-full text-white font-body font-bold text-[0.95rem] tracking-wide bg-gradient-to-r from-[#f29b55] via-[#dd6d1a] to-[#e85924] shadow-[0_8px_20px_rgba(232,89,36,0.28)] hover:bg-none hover:bg-[#176397] hover:shadow-[0_8px_20px_rgba(23,99,151,0.32)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              {/* Telephone SVG Icon */}
              <svg
                className="w-4 h-4 fill-current text-white shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+916292234836"
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#f29b55] to-[#e85924] text-white shadow-md"
              aria-label="Call Scal It Up"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#122233] hover:text-[#176397] focus:outline-none focus:ring-2 focus:ring-[#176397]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#ffffff] border border-[rgba(18,34,51,0.12)] rounded-2xl p-6 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`font-body font-bold text-base py-2 border-b border-neutral-100 transition-colors ${
                      isActive ? 'text-[#176397]' : 'text-[#16241d] hover:text-[#176397]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href="tel:+916292234836"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-white font-body font-bold text-[0.95rem] bg-gradient-to-r from-[#f29b55] via-[#dd6d1a] to-[#e85924] shadow-md"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>Call Us (+91 62922 34836)</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

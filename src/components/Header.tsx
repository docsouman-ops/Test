import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Our Approach', href: '#our-approach', id: 'our-approach' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Scal It Up home" onClick={handleLinkClick}>
          <img src="/assets/aistudio/logo-header_6ad66251.png" alt="Scal It Up" />
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={isActive ? 'active' : undefined}
                aria-current={isActive ? 'location' : undefined}
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          className="btn btn-primary nav-cta"
          href="tel:+916292234836"
          aria-label="Call us at +91 62922 34836"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="nav-cta-copy">
            <span className="nav-cta-label">Call Us</span>
          </span>
        </a>
      </div>
    </header>
  );
};

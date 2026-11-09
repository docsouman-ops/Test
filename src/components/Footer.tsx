import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const exploreLinks = [
    { label: 'Integrated Capabilities', href: '#capabilities' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Approach', href: '#our-approach' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#124e82] text-white pt-[52px] pb-[28px] border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Three Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/15">
          {/* Left Column (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo isLight width={84} />
            <p className="font-heading font-bold text-white text-base sm:text-lg pt-1">
              Integrated Marketing. Intelligent Growth.
            </p>
            <p className="font-body text-white/75 text-sm sm:text-base leading-relaxed max-w-sm">
              Connecting strategy, creative experiences, technology, and intelligence to help businesses move forward with purpose.
            </p>
          </div>

          {/* Middle Column (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white text-lg tracking-wide uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 font-body text-sm text-white/80">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#f29b55] hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-white text-lg tracking-wide uppercase">
              Connect
            </h4>
            <div className="space-y-3 font-body text-sm text-white/80">
              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 stroke-current text-[#f29b55] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                  <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                </svg>
                <a
                  href="mailto:scalitup.dm@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  scalitup.dm@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 fill-current text-[#f29b55] shrink-0" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                <a
                  href="tel:+916292234836"
                  className="hover:text-white transition-colors"
                >
                  +91 62922 34836
                </a>
              </div>

              {/* Social SVG Icons */}
              <div className="pt-2 flex items-center gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61595934330868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f29b55] text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Scal It Up Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/scal.it.up/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f29b55] text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Scal It Up Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/UCnKOvNkCFylbrZNwT_reA2g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f29b55] text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Scal It Up YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-white/70 font-body gap-3">
          <p className="text-center sm:text-left">
            Thoughtfully connected. Purposefully executed and continuously refined.
          </p>
          <p className="text-center sm:text-right">
            © 2026 Scal It Up. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

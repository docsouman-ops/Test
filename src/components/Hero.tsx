import React from 'react';

interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const heroImagePath = '/src/assets/images/hero_city_growth_arrow_1794254746011.jpg';

  const handleCta = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCtaClick) {
      onCtaClick();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[700px] flex items-center overflow-hidden bg-[#ffffff]"
    >
      {/* Background Container with Exact Left-to-Right Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 0%, #ffffff 32%, rgba(255, 255, 255, 0.96) 42%, rgba(255, 255, 255, 0.50) 54%, transparent 64%, transparent 100%), url(${heroImagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-20 lg:py-28">
        <div className="max-w-[700px]">
          {/* Main Heading & Second Heading */}
          <h1 className="font-heading font-extrabold tracking-tight text-[#0d1f2f] text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.12] mb-6">
            Beyond marketing.
            <span className="block text-[#176397] font-extrabold mt-1 sm:mt-2">
              Towards meaningful growth.
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="font-body text-[#475e73] text-base sm:text-[1.12rem] leading-[1.68] max-w-[540px] mb-8 sm:mb-10">
            We bring strategy, creativity, technology, and customer experiences together to help businesses build stronger brands, create meaningful connections, and turn marketing opportunities into measurable progress.
          </p>

          {/* CTA: Let's Talk */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={handleCta}
              className="inline-flex items-center justify-center px-8 min-h-[52px] rounded-full text-white font-body font-bold text-[1rem] tracking-wide bg-gradient-to-r from-[#f29b55] via-[#dd6d1a] to-[#e85924] shadow-[0_8px_24px_rgba(232,89,36,0.30)] hover:bg-none hover:bg-[#176397] hover:shadow-[0_8px_24px_rgba(23,99,151,0.34)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

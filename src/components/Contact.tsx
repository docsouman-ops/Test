import React from 'react';

export const Contact: React.FC = () => {
  const contactBg = '/src/assets/images/contact_office_collaboration_1794254747170.jpg';

  return (
    <section
      id="contact"
      className="relative w-full py-[108px] overflow-hidden bg-[#0c1f2f]"
    >
      {/* Background image showing business professionals collaborating with dark navy overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(12, 31, 47, 0.82) 0%, rgba(20, 52, 76, 0.86) 100%), url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Two columns on desktop: Ratio 1.2fr / 0.8fr, Gap 64px */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[64px] items-center">
          {/* Left Column (Span 7 out of 12 ~ 1.2fr) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              What could your next stage{' '}
              <span className="text-[#f29b55]">of growth look like?</span>
            </h2>

            <div className="space-y-4 font-body text-neutral-200 text-base sm:text-[1.08rem] leading-[1.68]">
              <p>
                Perhaps you’re building a brand, exploring a new market, rethinking customer engagement, or looking for a more connected approach to marketing.
              </p>
              <p>
                Wherever you are in your journey, the starting point is understanding the opportunity—and what it could take to move forward.
              </p>
              <p>
                Let’s focus your ambitions, explore the possibilities, and identify the right way to turn them into action.
              </p>
              <p className="font-semibold text-white pt-2 text-lg sm:text-xl">
                Scale It Up. Let’s build what’s next.
              </p>
            </div>
          </div>

          {/* Right Column: Two large contact buttons (Span 5 out of 12 ~ 0.8fr) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-[18px]">
            {/* Button 1: Email Us */}
            <a
              href="mailto:scalitup.dm@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-8 min-w-[250px] min-h-[62px] rounded-full text-white font-body font-bold text-[1.05rem] tracking-wide bg-gradient-to-r from-[#f29b55] via-[#dd6d1a] to-[#e85924] shadow-[0_8px_24px_rgba(232,89,36,0.35)] hover:bg-none hover:bg-[#176397] hover:shadow-[0_8px_24px_rgba(23,99,151,0.40)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              {/* White outlined email SVG */}
              <svg className="w-5 h-5 stroke-current text-white shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
              </svg>
              <span>Email Us</span>
            </a>

            {/* Button 2: Contact Us */}
            <a
              href="tel:+916292234836"
              className="inline-flex items-center justify-center gap-3 px-8 min-w-[250px] min-h-[62px] rounded-full text-white font-body font-bold text-[1.05rem] tracking-wide bg-gradient-to-r from-[#f29b55] via-[#dd6d1a] to-[#e85924] shadow-[0_8px_24px_rgba(232,89,36,0.35)] hover:bg-none hover:bg-[#176397] hover:shadow-[0_8px_24px_rgba(23,99,151,0.40)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              {/* White outlined telephone SVG */}
              <svg className="w-5 h-5 stroke-current text-white shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

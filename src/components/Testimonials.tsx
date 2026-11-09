import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full py-[108px] pb-[160px] relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #edf3f9 0%, #f6f9fc 50%, #fdfefe 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Short Orange Horizontal Accent Bar */}
          <div className="w-12 h-1 bg-[#e85924] mx-auto mb-4 rounded-full" />
          <h2 className="text-[#0d1f2f] font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-tight mb-3">
            Trusted by Brands That Dare to Grow
          </h2>
          <p className="font-body text-[#475e73] text-base sm:text-lg">
            A few words from the businesses we’ve helped scale.
          </p>
        </div>

        {/* Exactly One Testimonial Card */}
        <div className="max-w-[760px] mx-auto">
          <div className="bg-white rounded-[20px] p-6 sm:p-10 border border-[#f29b55]/40 shadow-[0_12px_36px_rgba(242,155,85,0.12)] relative">
            {/* Large Orange Quotation Mark */}
            <div className="text-[#e85924] font-heading font-black text-6xl sm:text-7xl leading-none select-none -mt-4 mb-2 opacity-90">
              “
            </div>

            {/* Dark Navy Quote Text */}
            <p className="font-body text-[#0d1f2f] text-base sm:text-[1.12rem] leading-[1.72] mb-8 font-medium">
              Scal It Up brought a thoughtful, strategic approach to our engagement. From shaping our company profile to conducting a comprehensive website audit, their team went beyond surface-level observations to identify improvement opportunities and provide actionable recommendations for our next phase of digital development.
            </p>

            {/* Horizontal Divider */}
            <div className="w-full h-[1px] bg-[rgba(18,34,51,0.1)] mb-6" />

            {/* Author Block with Orange Vertical Accent */}
            <div className="flex items-center gap-4">
              <div className="w-1 h-10 bg-[#e85924] rounded-full shrink-0" />
              <div>
                <h4 className="font-heading font-bold text-base sm:text-lg text-[#0d1f2f]">
                  Canrod Management Team
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#475e73]">
                  Client Partner
                </p>
              </div>
            </div>
          </div>

          {/* Controls: Preserving original visual controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              disabled
              className="w-10 h-10 rounded-full border border-[rgba(18,34,51,0.12)] flex items-center justify-center text-neutral-400 opacity-50 cursor-default"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-2 rounded-full bg-[#e85924]" />
            </div>
            <button
              disabled
              className="w-10 h-10 rounded-full border border-[rgba(18,34,51,0.12)] flex items-center justify-center text-neutral-400 opacity-50 cursor-default"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Waves: Organic Ribbon Wave SVG positioned absolutely at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none leading-none z-0">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-h-[90px] max-h-[140px] preserve-3d"
        >
          <defs>
            {/* Left Blue Wave Gradients */}
            <linearGradient id="blueWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="blueWave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="blueWave3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
            </linearGradient>

            {/* Right Orange Wave Gradients */}
            <linearGradient id="orangeWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="orangeWave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c2410c" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="orangeWave3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* Left Layered Blue Waves */}
          <path
            d="M0,130 C200,90 380,160 550,110 C680,75 750,140 820,180 L0,180 Z"
            fill="url(#blueWave1)"
          />
          <path
            d="M0,145 C160,110 320,175 480,135 C620,100 700,160 760,180 L0,180 Z"
            fill="url(#blueWave2)"
          />
          <path
            d="M0,160 C120,135 240,170 380,150 C500,130 580,170 650,180 L0,180 Z"
            fill="url(#blueWave3)"
          />

          {/* Right Layered Orange Waves */}
          <path
            d="M740,180 C810,135 920,80 1080,115 C1240,150 1340,95 1440,125 L1440,180 Z"
            fill="url(#orangeWave1)"
          />
          <path
            d="M820,180 C890,145 980,105 1130,135 C1270,165 1370,115 1440,140 L1440,180 Z"
            fill="url(#orangeWave2)"
          />
          <path
            d="M920,180 C990,155 1080,130 1200,150 C1310,170 1390,140 1440,155 L1440,180 Z"
            fill="url(#orangeWave3)"
          />
        </svg>
      </div>
    </section>
  );
};

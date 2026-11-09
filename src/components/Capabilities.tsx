import React from 'react';

export const Capabilities: React.FC = () => {
  const bgMeeting = '/src/assets/images/capabilities_office_meeting_1794254745977.jpg';
  const imgCard1 = '/src/assets/images/cap_digital_growth_analytics_1794254746289.jpg';
  const imgCard2 = '/src/assets/images/cap_brand_billboard_experiential_1794254747195.jpg';
  const imgCard3 = '/src/assets/images/cap_vr_gamified_experience_1794254759795.jpg';
  const imgCard4 = '/src/assets/images/cap_digital_product_devices_1794254762890.jpg';
  const imgCard5 = '/src/assets/images/cap_marketing_analytics_dashboard_1794254762835.jpg';

  return (
    <section
      id="capabilities"
      className="relative w-full py-[108px] overflow-hidden bg-[#edf4fb]/60"
    >
      {/* Subtle Office Meeting Background with Translucent White Overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: `url(${bgMeeting})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#f4f7fb]/95 to-[#edf4fb] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[840px] mb-14">
          <span className="text-[#e85924] font-body font-bold text-xs sm:text-sm tracking-[0.16em] uppercase block mb-3">
            OUR INTEGRATED CAPABILITIES
          </span>
          <h2 className="text-[#124068] font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-5">
            Different capabilities. One connected direction.
          </h2>
          <p className="text-[#475e73] font-body text-base sm:text-[1.08rem] leading-[1.68]">
            Customers experience brands across digital platforms, physical environments, interactive experiences, and everyday decisions. We bring these touchpoints together through an integrated marketing ecosystem that connects brand building, audience engagement, digital experiences, and performance intelligence.
          </p>
        </div>

        {/* 6-Column CSS Grid for Exact Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[20px]">
          {/* Card 1: Span 3 columns (Horizontal Layout) */}
          <div className="lg:col-span-3 bg-white rounded-[22px] p-[22px] border border-[rgba(18,34,51,0.12)] shadow-[0_4px_20px_rgba(18,34,51,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(18,34,51,0.10)] transition-all duration-[220ms] flex flex-col sm:flex-row gap-5 items-stretch group">
            <div className="sm:w-1/2 min-h-[220px] max-h-[280px] rounded-[16px] overflow-hidden bg-neutral-100 shrink-0">
              <img
                src={imgCard1}
                alt="Digital Growth & Demand Generation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="sm:w-1/2 flex flex-col justify-between py-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#edf4fb] flex items-center justify-center text-[#176397] mb-3">
                  {/* Search and magnifying glass with plus symbol */}
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM10.5 8v5M8 10.5h5" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#0d1f2f] text-lg sm:text-xl leading-snug mb-2">
                  Digital Growth & Demand Generation
                </h3>
                <p className="font-body text-[#475e73] text-xs sm:text-sm leading-relaxed">
                  Build visibility, attract relevant audiences, and create pathways from discovery to consideration and action. We connect digital channels, audience intelligence, content, and performance measurement to help businesses strengthen their market presence and make more informed acquisition decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Span 3 columns (Horizontal Layout) */}
          <div className="lg:col-span-3 bg-white rounded-[22px] p-[22px] border border-[rgba(18,34,51,0.12)] shadow-[0_4px_20px_rgba(18,34,51,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(18,34,51,0.10)] transition-all duration-[220ms] flex flex-col sm:flex-row gap-5 items-stretch group">
            <div className="sm:w-1/2 min-h-[220px] max-h-[280px] rounded-[16px] overflow-hidden bg-neutral-100 shrink-0">
              <img
                src={imgCard2}
                alt="Brand Visibility & Experiential Marketing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="sm:w-1/2 flex flex-col justify-between py-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#edf4fb] flex items-center justify-center text-[#176397] mb-3">
                  {/* Circular target and crosshair */}
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#0d1f2f] text-lg sm:text-xl leading-snug mb-2">
                  Brand Visibility & Experiential Marketing
                </h3>
                <p className="font-body text-[#475e73] text-xs sm:text-sm leading-relaxed">
                  Brand experiences are not confined to screens. They unfold in public spaces, at events, through entertainment, and wherever audiences encounter something worth remembering.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Span 2 columns (Vertical Layout) */}
          <div className="lg:col-span-2 bg-white rounded-[22px] p-[22px] border border-[rgba(18,34,51,0.12)] shadow-[0_4px_20px_rgba(18,34,51,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(18,34,51,0.10)] transition-all duration-[220ms] flex flex-col group">
            <div className="w-full h-[210px] aspect-[16/10] rounded-[16px] overflow-hidden bg-neutral-100 mb-4 shrink-0">
              <img
                src={imgCard3}
                alt="Interactive Engagement & Gamified Experiences"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#edf4fb] flex items-center justify-center text-[#176397] mb-3">
                  {/* Interactive digital interface icon */}
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#0d1f2f] text-lg leading-snug mb-2">
                  Interactive Engagement & Gamified Experiences
                </h3>
                <p className="font-body text-[#475e73] text-xs sm:text-sm leading-relaxed">
                  In an environment where audiences are constantly competing for time and attention, participation can create a more memorable relationship with a brand.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Span 2 columns (Vertical Layout) */}
          <div className="lg:col-span-2 bg-white rounded-[22px] p-[22px] border border-[rgba(18,34,51,0.12)] shadow-[0_4px_20px_rgba(18,34,51,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(18,34,51,0.10)] transition-all duration-[220ms] flex flex-col group">
            <div className="w-full h-[210px] aspect-[16/10] rounded-[16px] overflow-hidden bg-neutral-100 mb-4 shrink-0">
              <img
                src={imgCard4}
                alt="Digital Products & Customer Experiences"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#edf4fb] flex items-center justify-center text-[#176397] mb-3">
                  {/* Desktop monitor with interface elements */}
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h4M6 10h6" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#0d1f2f] text-lg leading-snug mb-2">
                  Digital Products & Customer Experiences
                </h3>
                <p className="font-body text-[#475e73] text-xs sm:text-sm leading-relaxed">
                  A website or application is more than a digital destination. It is an extension of the brand, a point of interaction, and often a critical part of the customer journey.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: Span 2 columns (Vertical Layout) */}
          <div className="lg:col-span-2 bg-white rounded-[22px] p-[22px] border border-[rgba(18,34,51,0.12)] shadow-[0_4px_20px_rgba(18,34,51,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(18,34,51,0.10)] transition-all duration-[220ms] flex flex-col group">
            <div className="w-full h-[210px] aspect-[16/10] rounded-[16px] overflow-hidden bg-neutral-100 mb-4 shrink-0">
              <img
                src={imgCard5}
                alt="Strategy, Analytics & Marketing Intelligence"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#edf4fb] flex items-center justify-center text-[#176397] mb-3">
                  {/* Analytics chart with upward trend */}
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 6-6" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#0d1f2f] text-lg leading-snug mb-2">
                  Strategy, Analytics & Marketing Intelligence
                </h3>
                <p className="font-body text-[#475e73] text-xs sm:text-sm leading-relaxed">
                  Effective marketing requires more than execution. It requires an understanding of the market, the audience, the business priorities, and the factors that influence performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

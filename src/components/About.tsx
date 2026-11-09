import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full py-[108px] bg-white relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <span className="text-[#e85924] font-body font-bold text-xs sm:text-sm tracking-[0.16em] uppercase block mb-3">
          ABOUT SCAL IT UP
        </span>

        {/* Main Heading: Keep the second phrase blue */}
        <h2 className="text-[#0d1f2f] font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-8 max-w-4xl">
          About Scal It Up -{' '}
          <span className="text-[#176397]">
            Explore connected business opportunities.
          </span>
        </h2>

        {/* Lead Heading & Introduction */}
        <div className="max-w-3xl mb-12">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#122233] mb-3">
            We see marketing differently.
          </h3>
          <p className="font-body text-[#475e73] text-base sm:text-[1.12rem] leading-[1.7]">
            Not as individual campaigns or disconnected activities, but as an interconnected opportunity to build brands, create experiences, and move businesses forward.
          </p>
        </div>

        {/* Divider: A thin horizontal line across content width */}
        <div className="w-full h-[1px] bg-[rgba(18,34,51,0.12)] my-12" />

        {/* Subheading */}
        <h4 className="font-heading font-bold text-lg sm:text-xl text-[#0d1f2f] mb-8">
          Three things shape the way we work.
        </h4>

        {/* Three Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Column 1 */}
          <div className="space-y-3">
            <h5 className="font-heading font-bold text-lg sm:text-xl text-[#0d1f2f] leading-snug">
              1. Think beyond the brief.
            </h5>
            <p className="font-body text-[#475e73] text-sm sm:text-base leading-relaxed">
              Understand the business, challenge assumptions, and identify the bigger opportunity.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <h5 className="font-heading font-bold text-lg sm:text-xl text-[#0d1f2f] leading-snug">
              2. Connect the possibilities.
            </h5>
            <p className="font-body text-[#475e73] text-sm sm:text-base leading-relaxed">
              Bring strategy, creativity, media, experiences, and technology together.
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <h5 className="font-heading font-bold text-lg sm:text-xl text-[#0d1f2f] leading-snug">
              3. Build on what works.
            </h5>
            <p className="font-body text-[#475e73] text-sm sm:text-base leading-relaxed">
              Turn outcomes into insights that inform smarter decisions and future growth.
            </p>
          </div>
        </div>

        {/* Our Belief Block: Place below the three columns with vertical orange accent line */}
        <div className="border-l-4 border-[#e85924] pl-6 sm:pl-8 py-4 bg-[#edf4fb]/40 rounded-r-2xl max-w-4xl">
          <span className="text-[#e85924] font-body font-bold text-xs tracking-widest uppercase block mb-2">
            OUR BELIEF
          </span>
          <h4 className="font-heading font-bold text-xl sm:text-2xl text-[#0d1f2f] leading-snug mb-3">
            Good marketing starts with understanding people. Good partnerships do too.
          </h4>
          <p className="font-body text-[#475e73] text-sm sm:text-base leading-relaxed">
            We believe the best work happens when strategic thinking and practical execution come together around a shared ambition.
          </p>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';

export const Approach: React.FC = () => {
  // Five approach stages
  const approachCards = [
    {
      num: '01',
      title: 'Understand the opportunity',
      description:
        'We begin by examining the business context, audience, competitive environment, and growth ambitions. This helps establish where marketing can make the greatest contribution and which challenges deserve attention first.',
      icon: (
        // Magnifying glass
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Define the direction',
      description:
        'We translate the opportunity into a strategic framework that connects objectives, audience priorities, messaging, channels, resources, and measures of success.',
      icon: (
        // Strategic analytics chart
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Bring the strategy to life',
      description:
        'We coordinate the relevant marketing capabilities, creative assets, platforms, experiences, and execution requirements to turn strategic intent into meaningful audience interactions.',
      icon: (
        // Upward-moving growth graph
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Measure what matters',
      description:
        'We evaluate performance against the objectives that informed the strategy. Beyond surface-level activity, we look for signals that help explain audience response, campaign effectiveness, and opportunities for improvement.',
      icon: (
        // Performance chart
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      num: '05',
      title: 'Apply what we learn',
      description:
        'We use the findings to refine campaigns, inform future investments, and adjust priorities as the business and its market evolve.',
      icon: (
        // Circular repeat and refinement symbol
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  // Carousel state: index of the first visible card
  // On Desktop: maxStartIndex = 5 - 3 = 2 (so 0, 1, 2)
  const [startIndex, setStartIndex] = useState(0);

  const maxDesktopIndex = 2; // shows [0,1,2], [1,2,3], [2,3,4]

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < maxDesktopIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section
      id="our-approach"
      className="w-full py-[108px] bg-white relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-[#0d1f2f] font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
            The thinking behind the
            <span className="block text-[#176397]">defined workspace.</span>
          </h2>
          <p className="font-body text-[#475e73] text-base sm:text-[1.08rem] leading-[1.68]">
            Meaningful marketing emerges through a continuous process of understanding, planning, execution, measurement, and refinement. We bring these stages together.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-12">
          {/* Cards Track */}
          <div className="hidden lg:grid grid-cols-3 gap-6 transition-all duration-300">
            {approachCards.slice(startIndex, startIndex + 3).map((card) => (
              <div
                key={card.num}
                className="bg-white rounded-[22px] min-h-[250px] p-[26px] border border-[rgba(18,34,51,0.12)] shadow-[0_4px_20px_rgba(18,34,51,0.05)] hover:shadow-[0_10px_28px_rgba(18,34,51,0.08)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-[44px] h-[44px] rounded-xl bg-[#edf4fb] text-[#176397] flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <span className="font-heading font-extrabold text-xl text-[#e85924]">
                      {card.num}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0d1f2f] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-[#475e73] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet & Mobile responsive horizontal scrolling track */}
          <div className="lg:hidden flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth">
            {approachCards.map((card) => (
              <div
                key={card.num}
                className="bg-white rounded-[22px] min-h-[250px] p-[26px] border border-[rgba(18,34,51,0.12)] shadow-[0_4px_20px_rgba(18,34,51,0.05)] shrink-0 w-[85%] sm:w-[48%] snap-center flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-[44px] h-[44px] rounded-xl bg-[#edf4fb] text-[#176397] flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <span className="font-heading font-extrabold text-xl text-[#e85924]">
                      {card.num}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0d1f2f] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-[#475e73] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls: Previous Arrow, Next Arrow, Navigation Dots */}
          <div className="mt-8 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setStartIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    startIndex === idx ? 'w-8 bg-[#176397]' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to slide set ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className={`w-11 h-11 rounded-full border border-[rgba(18,34,51,0.15)] flex items-center justify-center transition-colors cursor-pointer ${
                  startIndex === 0
                    ? 'opacity-40 cursor-not-allowed text-neutral-400'
                    : 'text-[#122233] hover:border-[#176397] hover:text-[#176397]'
                }`}
                aria-label="Previous approach stage"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex === maxDesktopIndex}
                className={`w-11 h-11 rounded-full border border-[rgba(18,34,51,0.15)] flex items-center justify-center transition-colors cursor-pointer ${
                  startIndex === maxDesktopIndex
                    ? 'opacity-40 cursor-not-allowed text-neutral-400'
                    : 'text-[#122233] hover:border-[#176397] hover:text-[#176397]'
                }`}
                aria-label="Next approach stage"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Closing Note: Centre-align this sentence */}
        <div className="text-center pt-4">
          <p className="font-body text-sm sm:text-base text-[#475e73] font-medium max-w-2xl mx-auto">
            Every stage informs the next. Every cycle creates an opportunity to move forward with greater clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

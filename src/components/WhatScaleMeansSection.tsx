import React, { useState } from 'react';
import { Sparkles, ArrowRight, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { AdaptiveContainer } from './AdaptiveContainer';

const SCALE_STAGES = [
  {
    level: 1,
    term: 'A BRAND.',
    sizeClass: 'text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-400',
    description: 'Giving a name an authentic soul, visual distinction, and a clear reason to exist in culture.',
    multiplier: '1X // The Foundation',
    touchpoint: 'Identity & Voice'
  },
  {
    level: 2,
    term: 'AN IDEA.',
    sizeClass: 'text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-300',
    description: 'Crafting the sharp strategic insight that cuts through the noise of millions of daily messages.',
    multiplier: '5X // The Catalyst',
    touchpoint: 'Cultural Tension'
  },
  {
    level: 3,
    term: 'A CAMPAIGN.',
    sizeClass: 'text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-200',
    description: 'Orchestrating high-impact ATL hoardings, cinema spots, and scroll-stopping digital reels into one voice.',
    multiplier: '25X // Multi-Channel',
    touchpoint: 'Omnichannel Blitz'
  },
  {
    level: 4,
    term: 'A BUSINESS.',
    sizeClass: 'text-5xl sm:text-6xl md:text-7xl font-extrabold text-white',
    description: 'Directly driving customer acquisition velocity, enterprise valuation, and sustainable market leadership.',
    multiplier: '100X // Commercial Momentum',
    touchpoint: 'Revenue Velocity'
  },
  {
    level: 5,
    term: 'AN AUDIENCE.',
    sizeClass: 'text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tight',
    description: 'Transforming passive consumers into vocal brand champions, stadium crowds, and organic community evangelists.',
    multiplier: '500X // Mass Fandom',
    touchpoint: 'Organic Share of Mind'
  },
  {
    level: 6,
    term: 'AN EXPERIENCE.',
    sizeClass: 'text-6xl sm:text-8xl md:text-9xl font-black text-[#ff3b00] tracking-tighter drop-shadow-[0_0_50px_rgba(255,59,0,0.35)]',
    description: 'Immersive physical installations, sensory festivals, and iconic moments that become part of people’s life memories.',
    multiplier: '∞ // Cultural Permanence',
    touchpoint: 'Living Memory'
  }
];

export const WhatScaleMeansSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(5); // Default to "AN EXPERIENCE"

  return (
    <section
      id="what-scale-means"
      className="relative py-24 sm:py-32 bg-[#0d0d0d] border-t border-b border-neutral-900 overflow-hidden"
    >
      {/* Background Accent Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff3b00]/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#ff3b00] rounded-sm"></span>
              <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
                // Philosophy & Trajectory
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight">
              WHAT DOES IT MEAN <br className="hidden sm:inline" />
              TO <span className="text-[#ff3b00]">SCALE?</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            Scale is not just volume or ad spend. Scale is the deliberate magnification of human connection, cultural resonance, and commercial impact.
          </p>
        </div>

        {/* Interactive Progressive Typographic Ladder with AdaptiveContainer */}
        <AdaptiveContainer
          className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          referenceWidth={1200}
        >
          {({ scaleFactor }) => (
            <>
              {/* Typographic Progression List */}
              <div className="lg:col-span-8 flex flex-col gap-3">
                {SCALE_STAGES.map((stage, idx) => {
                  const isSelected = activeStage === idx;
                  return (
                    <div
                      key={stage.term}
                      onMouseEnter={() => setActiveStage(idx)}
                      onClick={() => setActiveStage(idx)}
                      className={`group cursor-pointer transition-all duration-300 py-3 px-3 sm:px-4 rounded-xl flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 select-none ${
                        isSelected
                          ? 'bg-neutral-900/90 border-l-4 border-[#ff3b00] shadow-xl pl-4 sm:pl-6'
                          : 'hover:bg-neutral-900/40 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-baseline gap-3 sm:gap-6 min-w-0">
                        <span className="font-mono-tech text-xs text-neutral-500 w-6 sm:w-8 shrink-0">
                          0{stage.level}
                        </span>
                        <span
                          style={{
                            fontSize: `clamp(1.1rem, ${scaleFactor * (idx === 5 ? 4.2 : idx === 4 ? 3.4 : idx === 3 ? 2.6 : 1.9)}vw, ${
                              idx === 5 ? '6.5rem' : idx === 4 ? '5rem' : idx === 3 ? '4rem' : '2.5rem'
                            })`,
                          }}
                          className={`font-display transition-all duration-300 break-words leading-tight ${stage.sizeClass} ${
                            isSelected ? 'scale-[1.02] sm:scale-105 origin-left' : ''
                          }`}
                        >
                          {stage.term}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 pl-9 sm:pl-0 shrink-0">
                        <span className="font-mono-tech text-[10px] sm:text-xs tracking-widest text-[#ff3b00]">
                          {stage.multiplier}
                        </span>
                        <span className="text-[10px] font-mono-tech text-neutral-500 sm:hidden">
                          • {stage.touchpoint}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Deep-Dive Card */}
              <div className="lg:col-span-4 bg-[#141414] border border-neutral-800 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3b00]/15 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-[#ff3b00]">
                      Stage 0{SCALE_STAGES[activeStage].level} of 06
                    </span>
                    <span className="font-mono-tech text-xs text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                      {SCALE_STAGES[activeStage].touchpoint}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-500">
                      Target Trajectory
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
                      {SCALE_STAGES[activeStage].term}
                    </h4>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    {SCALE_STAGES[activeStage].description}
                  </p>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-mono-tech uppercase text-neutral-500">Scale Velocity</div>
                      <div className="text-lg font-display font-bold text-[#ff3b00]">
                        {SCALE_STAGES[activeStage].multiplier}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white">
                      <TrendingUp className="w-4 h-4 text-[#ff3b00]" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </AdaptiveContainer>

        {/* Final Anchor Statement */}
        <div className="mt-8 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-[#181818] border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono-tech text-xs tracking-widest uppercase text-[#ff3b00] block mb-2">
              // The Scale Up Axiom
            </span>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              “Whatever the starting point, we build the momentum to take it further.”
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400">
              Kolkata to National Stage
            </span>
            <span className="w-12 h-[2px] bg-[#ff3b00]"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

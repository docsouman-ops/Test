import React, { useState } from 'react';
import { Check, X, ArrowRight, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export const WhyScaleUpSection: React.FC = () => {
  const [activeFormulaStep, setActiveFormulaStep] = useState<number | null>(null);

  const formulaParts = [
    { name: 'Strategy', detail: 'Market positioning, cultural truth, audience cohorts.' },
    { name: 'Creative', detail: 'Iconic visual language, punchy copy, unforgettable ideas.' },
    { name: 'Content', detail: 'Daily storytelling, viral short-form, community hooks.' },
    { name: 'Media', detail: 'Algorithmic performance, prime OOH sites, national TV.' },
    { name: 'Production', detail: 'Full-service studio floors, cinema gear, direction.' },
    { name: 'Execution', detail: 'Zero-latency on-ground activations & flawless delivery.' },
  ];

  return (
    <section id="why-scale-up" className="py-24 sm:py-32 bg-[#0c0c0c] relative overflow-hidden border-t border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-[#ff3b00] rounded-sm"></span>
            <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
              // The Competitive Differential
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white uppercase tracking-tight">
            WHY STOP <span className="text-[#ff3b00]">HERE?</span>
          </h2>

          <p className="mt-4 text-base sm:text-xl text-neutral-300 font-sans leading-relaxed">
            Most agencies do only one thing: a digital shop buys ads, a production house shoots film, a PR agency writes releases. Scale Up unites every gear in the engine.
          </p>
        </div>

        {/* The Core Mathematical Formula of SCALE */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl mb-16">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-500 block mb-6">
            // The Unified Equation
          </span>

          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-white">
            {formulaParts.map((part, idx) => (
              <React.Fragment key={part.name}>
                <div
                  onMouseEnter={() => setActiveFormulaStep(idx)}
                  onMouseLeave={() => setActiveFormulaStep(null)}
                  className={`cursor-pointer px-4 py-3 rounded-xl border transition-all duration-300 relative group ${
                    activeFormulaStep === idx
                      ? 'bg-[#ff3b00] text-white border-[#ff3b00] scale-105 shadow-xl shadow-[#ff3b00]/30'
                      : 'bg-[#141414] text-neutral-200 border-neutral-800 hover:border-neutral-600'
                  }`}
                >
                  <span>{part.name}</span>
                  {activeFormulaStep === idx && (
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-20 bg-black/95 text-xs font-sans text-neutral-300 px-3 py-1.5 rounded-lg border border-neutral-700 shadow-xl pointer-events-none">
                      {part.detail}
                    </div>
                  )}
                </div>

                {idx < formulaParts.length - 1 && (
                  <span className="text-[#ff3b00] font-black text-2xl sm:text-3xl select-none">
                    +
                  </span>
                )}
              </React.Fragment>
            ))}

            <span className="text-white font-black text-3xl select-none mx-2">
              =
            </span>

            <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#ff3b00] to-[#ff5c26] text-white font-black text-2xl sm:text-4xl uppercase tracking-wider shadow-2xl shadow-[#ff3b00]/40 ring-4 ring-white/10 animate-pulse">
              SCALE
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-lg sm:text-xl font-display font-bold text-white max-w-2xl leading-snug">
              “We bring the thinking, making and distributing of a campaign under one roof.”
            </p>
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00]">
              Zero Agency Middlemen // Maximum Velocity
            </span>
          </div>
        </div>

        {/* Contrast Grid: Fragmented Traditional Agency vs. Scale Up */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Fragmented Agency */}
          <div className="p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-neutral-500">
                  The Old Model
                </span>
                <span className="text-xs text-red-500 font-mono-tech font-bold flex items-center gap-1">
                  <X className="w-4 h-4" /> Fragmented Retainers
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-bold text-neutral-400">
                Fragmented Agency Splintering
              </h4>
              <ul className="space-y-3 pt-2 text-sm text-neutral-400 font-sans">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Creative boutique presents an idea that production says is impossible to shoot.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Media agency burns budget bidding blindly while digital team has no high-res assets.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Multiple client invoices, blame-shifting between vendors, slow execution.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Scale Up Integrated Engine */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-[#161616] border border-[#ff3b00]/40 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-[#ff3b00]">
                  The Scale Up Model
                </span>
                <span className="text-xs text-[#ff3b00] font-mono-tech font-bold flex items-center gap-1">
                  <Check className="w-4 h-4" /> 100% Unified Pipeline
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-bold text-white">
                Synchronized Agency & Production Powerhouse
              </h4>
              <ul className="space-y-3 pt-2 text-sm text-neutral-200 font-sans">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#ff3b00] shrink-0 mt-0.5" />
                  <span>Directors and creative copywriters collaborate from Day 01 on set and storyboard.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#ff3b00] shrink-0 mt-0.5" />
                  <span>Every TVC cut is natively repurposed into 9:16 high-converting vertical ad sets.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#ff3b00] shrink-0 mt-0.5" />
                  <span>Single accountability, rapid iterative launches, and measurable commercial lift.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

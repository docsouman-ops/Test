import React, { useState } from 'react';
import { Sliders, Sparkles, TrendingUp, Infinity, Layers } from 'lucide-react';

const STATS_DATA = [
  {
    num: '01',
    label: 'Idea',
    sublabel: 'The single cultural insight that turns into an unstoppable movement.',
    accent: '#ffffff'
  },
  {
    num: '360°',
    label: 'Marketing',
    sublabel: 'Seamless synchronization from physical street hoardings to algorithmic feeds.',
    accent: '#ff3b00'
  },
  {
    num: '05+',
    label: 'Core Capabilities',
    sublabel: 'Digital, ATL, BTL, Content, Commercial Film Production under one roof.',
    accent: '#ffffff'
  },
  {
    num: '∞',
    label: 'Ways to Scale',
    sublabel: 'Unconstrained creative ambition designed to expand brands without borders.',
    accent: '#ff3b00'
  }
];

export const NumbersImpactSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [simulationTier, setSimulationTier] = useState<number>(2);

  const simulationTiers = [
    { tier: 'Spark', label: 'Local Buzz', multiplier: '10X Reach', channels: 'Hyperlocal Reels + Street Stunts' },
    { tier: 'Momentum', label: 'Regional Scale', multiplier: '100X Reach', channels: 'Kolkata Metro + 35 Flyover Hoardings + Digital Blitz' },
    { tier: 'Phenomenon', label: 'Pan-India Wave', multiplier: '1000X Reach', channels: 'Prime TVC + Theatrical Scope + National OTT' },
  ];

  return (
    <section id="impact" className="py-24 sm:py-32 bg-[#060606] relative overflow-hidden border-t border-b border-neutral-900">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#ff3b00]/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#ff3b00] rounded-sm"></span>
              <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
                // Dimensional Scale
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight">
              SCALED BY <span className="text-[#ff3b00]">DESIGN.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-mono-tech uppercase tracking-wider">
            Numbers that define our operating paradigm and creative philosophy.
          </p>
        </div>

        {/* 4 Huge Typographic Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 items-stretch">
          {STATS_DATA.map((stat, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={stat.label}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between select-none ${
                  isHovered
                    ? 'bg-neutral-900/90 border-[#ff3b00] shadow-2xl shadow-[#ff3b00]/20 scale-105'
                    : 'bg-[#101010] border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-widest">
                      Metric 0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#ff3b00]"></span>
                  </div>

                  {/* Gigantic Typographic Number */}
                  <div
                    className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter leading-none mb-3 transition-colors duration-300"
                    style={{ color: stat.accent }}
                  >
                    {stat.num}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                    {stat.label}
                  </h3>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/80">
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scale Ambition Simulator */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-800 pb-6 mb-8">
            <div>
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00] block mb-1">
                // Interactive Scale Simulator
              </span>
              <h4 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                How Far Do You Want To Scale?
              </h4>
            </div>

            <div className="flex items-center gap-2">
              {simulationTiers.map((t, idx) => (
                <button
                  key={t.tier}
                  onClick={() => setSimulationTier(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider transition-all ${
                    simulationTier === idx
                      ? 'bg-[#ff3b00] text-white font-bold shadow-md shadow-[#ff3b00]/30'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {t.tier}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#141414] border border-neutral-800">
              <span className="text-[10px] font-mono-tech uppercase text-neutral-500 block">
                Target Ambition
              </span>
              <div className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                {simulationTiers[simulationTier].label}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#141414] border border-neutral-800">
              <span className="text-[10px] font-mono-tech uppercase text-neutral-500 block">
                Multiplication Trajectory
              </span>
              <div className="text-xl sm:text-2xl font-display font-black text-[#ff3b00] mt-1">
                {simulationTiers[simulationTier].multiplier}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#141414] border border-neutral-800">
              <span className="text-[10px] font-mono-tech uppercase text-neutral-500 block">
                Synchronized Deployment
              </span>
              <div className="text-sm font-sans text-neutral-300 mt-1">
                {simulationTiers[simulationTier].channels}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Compass, Target, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-[#ff3b00] rounded-sm"></span>
            <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
              // Agency Manifesto
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white uppercase tracking-tight leading-[0.95]">
            SMALLER THAN A NETWORK. <br />
            <span className="text-[#ff3b00]">BIGGER THAN AN AGENCY.</span>
          </h2>
        </div>

        {/* Core Manifesto Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
            <p className="font-display font-semibold text-xl sm:text-2xl text-white leading-snug">
              Scale Up was founded on an uncompromising premise: modern brands don’t need bloated holding-company bureaucracy, and they don’t need isolated boutique vendors who pass the buck.
            </p>

            <p>
              We are an integrated marketing and advertising powerhouse combining high-altitude strategic thinking, culture-defining creative communication, full-funnel digital marketing, mass-market ATL and outdoor visibility, high-touch BTL experiential activations, and a dedicated in-house commercial film production house.
            </p>

            <p>
              From our studio headquarters in Kolkata, we operate with the agility of an independent creative collective and the production firepower of a global network. We believe that an authentic regional insight, when executed with masterclass cinematic craft, has the power to capture hearts across India and the globe.
            </p>

            {/* Three Pillar Creed */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-neutral-800">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <span className="text-[#ff3b00] text-xs font-mono-tech block mb-1">01 // ORIGIN</span>
                <h4 className="font-display font-bold text-white text-base">Based in Kolkata.</h4>
                <p className="text-xs text-neutral-400 mt-1">Deep cultural soul, literary depth and tireless work ethic.</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <span className="text-[#ff3b00] text-xs font-mono-tech block mb-1">02 // PURPOSE</span>
                <h4 className="font-display font-bold text-white text-base">Built for brands.</h4>
                <p className="text-xs text-neutral-400 mt-1">Engineered for commercial impact, market share and enterprise scale.</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <span className="text-[#ff3b00] text-xs font-mono-tech block mb-1">03 // ENGINE</span>
                <h4 className="font-display font-bold text-white text-base">Driven by ideas.</h4>
                <p className="text-xs text-neutral-400 mt-1">Fearless concepts that spark dinner table conversations.</p>
              </div>
            </div>
          </div>

          {/* Right Agency Snapshot Board */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#141414] to-[#0f0f0f] border border-neutral-800 rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl">
            <div className="border-b border-neutral-800 pb-6">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00] block mb-2">
                // Studio Profile
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                SCALE UP INTEGRATED
              </h3>
              <p className="text-xs text-neutral-400 font-mono-tech mt-1">
                Kolkata, WB, India // Est. 2021
              </p>
            </div>

            <div className="space-y-3 text-xs font-mono-tech text-neutral-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2.5 border-b border-neutral-800/60 gap-1">
                <span className="text-neutral-500 uppercase">Disciplines</span>
                <span className="text-white font-bold">ATL / BTL / Digital / Film / Strategy</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2.5 border-b border-neutral-800/60 gap-1">
                <span className="text-neutral-500 uppercase">Production Studio</span>
                <span className="text-white font-bold">In-house Sound, 4K Arri, Edit Suites</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2.5 border-b border-neutral-800/60 gap-1">
                <span className="text-neutral-500 uppercase">Operating Reach</span>
                <span className="text-white font-bold">Kolkata, Mumbai, Delhi, Bengaluru, Global</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2.5 border-b border-neutral-800/60 gap-1">
                <span className="text-neutral-500 uppercase">Core Motto</span>
                <span className="text-[#ff3b00] font-bold">Ideas That Scale.</span>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-4 rounded-full bg-white hover:bg-[#ff3b00] text-black hover:text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>PARTNER WITH SCALE UP</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

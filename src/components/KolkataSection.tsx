import React, { useState } from 'react';
import { KOLKATA_SPOTS } from '../data/agencyData';
import { MapPin, Globe, Compass, ArrowUpRight, Sparkles } from 'lucide-react';

export const KolkataSection: React.FC = () => {
  const [activeSpot, setActiveSpot] = useState(0);

  return (
    <section id="kolkata" className="py-24 sm:py-32 bg-[#0c0c0c] relative overflow-hidden border-t border-b border-neutral-900">
      {/* Background Graphic Watermark */}
      <div className="absolute right-0 bottom-0 text-[18vw] font-display font-black text-neutral-900/60 select-none pointer-events-none leading-none -mb-10">
        CALCUTTA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#ff3b00] rounded-sm"></span>
              <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
                // Geographic Identity & Ambition
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-black text-white uppercase tracking-tight">
              BUILT IN KOLKATA. <br className="hidden sm:inline" />
              BUILT TO <span className="text-[#ff3b00]">GO EVERYWHERE.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <div className="inline-block px-3 py-1 rounded-full bg-neutral-900 text-xs font-mono-tech text-[#ff3b00] border border-neutral-800">
              Local roots. Global ambition.
            </div>
            <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
              Born in Kolkata, Scale Up brings together strategy, creativity, media and production to build brands that can travel far beyond the city.
            </p>
          </div>
        </div>

        {/* Dynamic Kolkata Visual Canvas & Interactive Spot Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Frame */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 aspect-[16/10] sm:aspect-[16/9] shadow-2xl">
            <img
              src={KOLKATA_SPOTS[activeSpot].image}
              alt={KOLKATA_SPOTS[activeSpot].title}
              className="w-full h-full object-cover filter contrast-115 brightness-90 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

            {/* Hotspot Floating Caption */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-black/80 backdrop-blur-md border border-neutral-800 p-6 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-neutral-800 pb-3 mb-3">
                <span className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00]">
                  {KOLKATA_SPOTS[activeSpot].scaleAngle}
                </span>
                <span className="text-xs font-mono-tech text-neutral-400">
                  Location 0{activeSpot + 1} of 0{KOLKATA_SPOTS.length}
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
                {KOLKATA_SPOTS[activeSpot].title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2 leading-relaxed max-w-2xl">
                {KOLKATA_SPOTS[activeSpot].description}
              </p>
            </div>
          </div>

          {/* Interactive Spot Selector Column */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3">
            {KOLKATA_SPOTS.map((spot, idx) => {
              const isActive = activeSpot === idx;
              return (
                <div
                  key={spot.id}
                  id={`kolkata-spot-${spot.id}`}
                  onClick={() => setActiveSpot(idx)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-[#ff3b00] text-white border-[#ff3b00] shadow-lg shadow-[#ff3b00]/20'
                      : 'bg-[#121212] text-neutral-300 border-neutral-800/80 hover:bg-neutral-900 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono-tech font-bold ${isActive ? 'text-white' : 'text-[#ff3b00]'}`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h5 className="font-display font-bold text-sm leading-tight">
                        {spot.title}
                      </h5>
                      <span className={`text-[11px] font-sans ${isActive ? 'text-white/80' : 'text-neutral-400'}`}>
                        {spot.subtitle}
                      </span>
                    </div>
                  </div>

                  <MapPin className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-neutral-500'}`} />
                </div>
              );
            })}

            {/* Cultural Footnote Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-xs font-mono-tech text-neutral-400 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Globe className="w-4 h-4 text-[#ff3b00]" />
                <span>The Kolkata Creative Lineage</span>
              </div>
              <p className="text-neutral-400 text-[11px] font-sans leading-relaxed">
                From Satyajit Ray’s typography and Gariahat’s storied hoardings to New Town’s modern tech campuses, we build brands steeped in literary craft and scaled for international markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

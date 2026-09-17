import React, { useState } from 'react';
import { CONTENT_LAB_FORMATS } from '../data/agencyData';
import { Sparkles, Layers, Sliders, Smartphone, Monitor, Newspaper, Film, Maximize2, Share2 } from 'lucide-react';

const CAMPAIGN_IDEAS = [
  {
    id: 'idea-tea',
    name: 'TEA HERITAGE: THE FIRST SIP',
    tagline: 'Centuries of mist transformed into modern luxury.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    color: '#ff3b00'
  },
  {
    id: 'idea-sports',
    name: 'THE ROAR OF HOWRAH',
    tagline: 'When 14 million people speak with one heartbeat.',
    image: 'https://images.unsplash.com/photo-1571677246347-5040036b95cc?auto=format&fit=crop&w=1200&q=80',
    color: '#ff5c26'
  },
  {
    id: 'idea-couture',
    name: 'THE GEOMETRY OF SILK',
    tagline: '400-year-old loom craftsmanship on global runways.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    color: '#ff8a50'
  }
];

export const ContentLabSection: React.FC = () => {
  const [selectedIdea, setSelectedIdea] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState(0);

  const currentIdea = CAMPAIGN_IDEAS[selectedIdea];
  const currentFormat = CONTENT_LAB_FORMATS[selectedFormat];

  return (
    <section id="content-lab" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff3b00]/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#ff3b00] rounded-sm"></span>
              <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
                // Multi-Format Content Engine
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-black text-white uppercase tracking-tight">
              ONE IDEA. <br className="hidden sm:inline" />
              <span className="text-[#ff3b00]">INFINITE CONTENT.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
              We never produce isolated assets. One singular brand proposition multiplies into high-velocity reels, cinematic anthems, broadsheet wraps, and interactive AR touchpoints.
            </p>
          </div>
        </div>

        {/* Central Campaign Concept Switcher */}
        <div className="mb-12 bg-neutral-950 p-4 sm:p-6 rounded-2xl border border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00]">
              Select Nucleus Idea:
            </span>
            <div className="flex flex-wrap gap-2">
              {CAMPAIGN_IDEAS.map((idea, idx) => (
                <button
                  key={idea.id}
                  onClick={() => setSelectedIdea(idx)}
                  className={`text-xs font-mono-tech uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all ${
                    selectedIdea === idx
                      ? 'bg-[#ff3b00] text-white font-bold shadow-md shadow-[#ff3b00]/20'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {idea.name}
                </button>
              ))}
            </div>
          </div>

          <span className="text-xs font-mono-tech text-neutral-500">
            Current: <strong className="text-white">{currentIdea.tagline}</strong>
          </span>
        </div>

        {/* Interactive Lab Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Formats Explosion Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-1">
              // Choose Output Deliverable Format
            </span>

            {CONTENT_LAB_FORMATS.map((fmt, idx) => {
              const isSelected = selectedFormat === idx;
              return (
                <div
                  key={fmt.id}
                  id={`content-format-${fmt.id}`}
                  onClick={() => setSelectedFormat(idx)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#181818] border-[#ff3b00] shadow-lg ring-1 ring-[#ff3b00]/40'
                      : 'bg-[#101010] border-neutral-800/80 hover:bg-neutral-900 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono-tech text-xs font-bold ${
                        isSelected ? 'bg-[#ff3b00] text-white' : 'bg-neutral-800 text-neutral-400'
                      }`}
                    >
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white uppercase">
                        {fmt.name}
                      </h4>
                      <p className="text-[11px] font-mono-tech text-neutral-400">
                        {fmt.badge}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono-tech uppercase tracking-wider px-2 py-1 rounded ${
                      isSelected ? 'bg-[#ff3b00]/20 text-[#ff3b00]' : 'text-neutral-500'
                    }`}
                  >
                    Active
                  </span>
                </div>
              );
            })}
          </div>

          {/* Dynamic Mockup Stage */}
          <div className="lg:col-span-7 bg-[#141414] border border-neutral-800 p-6 sm:p-10 rounded-3xl flex flex-col justify-between shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse"></span>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-neutral-300">
                  Deliverable Preview: {currentFormat.name}
                </span>
              </div>
              <span className="text-xs font-mono-tech text-neutral-400 bg-black/60 px-3 py-1 rounded-full border border-neutral-800">
                {currentFormat.badge}
              </span>
            </div>

            {/* Simulated Device / Screen View */}
            <div className="flex items-center justify-center py-6">
              {currentFormat.mockupType === 'reel' || currentFormat.mockupType === 'story' ? (
                /* Vertical 9:16 Phone Mockup */
                <div className="w-64 sm:w-72 aspect-[9/16] rounded-3xl border-4 border-neutral-800 overflow-hidden relative shadow-2xl bg-black">
                  <img
                    src={currentIdea.image}
                    alt={currentIdea.name}
                    className="w-full h-full object-cover filter contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono-tech text-white">
                    <span>@scaleup.kolkata</span>
                    <span className="px-2 py-0.5 rounded bg-red-600 font-bold">REEL</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono-tech text-[#ff3b00] uppercase block">
                      {currentIdea.name}
                    </span>
                    <p className="font-display font-bold text-xs leading-tight">
                      {currentIdea.tagline}
                    </p>
                  </div>
                </div>
              ) : currentFormat.mockupType === 'billboard' ? (
                /* Monumental Horizontal Billboard */
                <div className="w-full min-h-[190px] sm:min-h-0 aspect-auto sm:aspect-[16/6] rounded-xl border-2 border-neutral-700 overflow-hidden relative shadow-2xl bg-black">
                  <img
                    src={currentIdea.image}
                    alt={currentIdea.name}
                    className="w-full h-full object-cover filter contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center p-4 sm:p-10">
                    <div className="max-w-md">
                      <span className="text-[10px] sm:text-[11px] font-mono-tech tracking-widest uppercase text-[#ff3b00] block mb-1">
                        HIGHWAY BILLBOARD // 45x15 FT
                      </span>
                      <h4 className="text-lg sm:text-3xl font-display font-black text-white uppercase leading-tight">
                        {currentIdea.name}
                      </h4>
                      <p className="text-xs font-sans text-neutral-300 mt-1 sm:mt-2 line-clamp-2">
                        {currentIdea.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              ) : currentFormat.mockupType === 'cinema' ? (
                /* Ultra-Wide Cinema 2.39:1 Anamorphic */
                <div className="w-full min-h-[180px] sm:min-h-0 aspect-auto sm:aspect-[21/9] rounded-xl border-2 border-neutral-800 overflow-hidden relative shadow-2xl bg-black">
                  <img
                    src={currentIdea.image}
                    alt={currentIdea.name}
                    className="w-full h-full object-cover filter contrast-130 brightness-90"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
                    <div className="flex justify-between text-[9px] sm:text-[10px] font-mono-tech text-neutral-400">
                      <span>SCOPE 2.39:1 // DOLBY ATMOS</span>
                      <span>KOLKATA CINEMA CIRCUIT</span>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl sm:text-4xl font-display font-black text-white tracking-widest uppercase drop-shadow-lg">
                        {currentIdea.name}
                      </h3>
                      <p className="text-xs font-mono-tech text-[#ff3b00] mt-1">
                        DIRECTED BY SCALE UP STUDIOS
                      </p>
                    </div>
                    <div className="text-right text-[9px] sm:text-[10px] font-mono-tech text-neutral-400">
                      THEATRICAL MASTER CUT
                    </div>
                  </div>
                </div>
              ) : (
                /* Editorial Print / Carousel Broadside */
                <div className="w-72 sm:w-80 aspect-[4/5] rounded-xl border-2 border-neutral-700 overflow-hidden relative shadow-2xl bg-neutral-900 p-6 flex flex-col justify-between">
                  <div className="border-b border-neutral-700 pb-3">
                    <span className="text-[10px] font-mono-tech uppercase text-[#ff3b00] block">
                      EDITORIAL SWIPE // SLIDE 01 OF 06
                    </span>
                    <h5 className="font-display font-black text-lg text-white mt-1">
                      {currentIdea.name}
                    </h5>
                  </div>
                  <div className="aspect-video w-full rounded-lg overflow-hidden my-3">
                    <img src={currentIdea.image} alt="Slide Preview" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {currentIdea.tagline}
                  </p>
                  <div className="flex justify-between items-center text-[10px] font-mono-tech text-neutral-500 pt-2 border-t border-neutral-800">
                    <span>SWIPE FOR NEXT INSIGHT →</span>
                    <span>SCALE UP EDITORIAL</span>
                  </div>
                </div>
              )}
            </div>

            {/* Description of Deliverable */}
            <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-lg">
                {currentFormat.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#ff3b00] shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Synchronized Production</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

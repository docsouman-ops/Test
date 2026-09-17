import React, { useState } from 'react';
import { Play, Film, Sparkles, Sliders, Volume2, Monitor, ArrowUpRight, Camera } from 'lucide-react';
import { SHOWREEL_CLIPS } from '../data/agencyData';
import { AdaptiveContainer } from './AdaptiveContainer';

interface CommercialFilmsSectionProps {
  onWatchShowreel: () => void;
}

const PRODUCTION_DISCIPLINES = [
  { name: 'Pre-production', desc: 'Script doctoring, treatment decks, storyboarding, location scouting across Bengal and national destinations.' },
  { name: 'Production', desc: 'Full-scale studio floors, on-location logistical mastery, union talent management and multi-cam rigs.' },
  { name: 'Direction', desc: 'Visionary narrative, actor coaching, cinematic blocking and high-stakes performance delivery.' },
  { name: 'Cinematography', desc: 'Arri Alexa 35, Red V-Raptor, Cooke anamorphic glass, and specialized high-speed motion rigs.' },
  { name: 'Art Direction', desc: 'Practical set design, period reconstructions, surreal commercial sets, and bespoke styling.' },
  { name: 'Editing', desc: 'Rhythmic pacing, dramatic montage, multi-format delivery from 9:16 vertical to theatrical 2.39:1.' },
  { name: 'Color Grading', desc: 'DaVinci Resolve color suites, film emulation LUTs, and calibrated cinematic tonal mastery.' },
  { name: 'Sound Design', desc: 'Bespoke orchestral & electronic scoring, Foley, Dolby Atmos mix, and visceral soundscapes.' }
];

export const CommercialFilmsSection: React.FC<CommercialFilmsSectionProps> = ({ onWatchShowreel }) => {
  const [selectedClip, setSelectedClip] = useState(0);

  return (
    <section id="films" className="relative py-24 sm:py-32 bg-[#050505] text-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial from-neutral-900/40 via-[#050505] to-[#050505] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff3b00]/10 border border-[#ff3b00]/30 text-[#ff3b00] text-xs font-mono-tech uppercase tracking-widest mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>Full-Stack Film Production House</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight uppercase">
            LIGHTS. CAMERA. <br />
            <span className="text-[#ff3b00] drop-shadow-[0_0_40px_rgba(255,59,0,0.4)]">
              SCALE.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-sans">
            Commercial films, brand stories and visual experiences built from concept to final frame.
          </p>
        </div>

        {/* Cinematic Master Stage / Reel Showcase with AdaptiveContainer */}
        <AdaptiveContainer
          className="rounded-3xl border border-neutral-800 bg-neutral-950 shadow-2xl group overflow-hidden"
          referenceWidth={1280}
          referenceHeight={720}
        >
          {({ width, height, aspectRatio, scaleFactor, breakpoint }) => (
            <div className="relative min-h-[340px] sm:min-h-[380px] md:min-h-0 aspect-auto md:aspect-[21/9] w-full overflow-hidden">
              <img
                src={SHOWREEL_CLIPS[selectedClip].coverImage}
                alt={SHOWREEL_CLIPS[selectedClip].title}
                className="w-full h-full object-cover filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60"></div>

              {/* Play Button Overlay - dynamically scaled */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                <button
                  id="films-watch-showreel-btn"
                  onClick={onWatchShowreel}
                  aria-label="Play showreel video"
                  style={{
                    transform: `scale(${Math.max(0.8, Math.min(1.2, scaleFactor))})`,
                  }}
                  className="group/btn relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#ff3b00] text-white flex items-center justify-center shadow-2xl shadow-[#ff3b00]/50 hover:scale-110 transition-transform duration-300 focus:outline-none ring-4 ring-white/20 cursor-pointer"
                >
                  <Play className="w-6 h-6 sm:w-9 sm:h-9 md:w-10 md:h-10 ml-1 fill-white" />
                  <span className="absolute -bottom-7 sm:-bottom-8 whitespace-nowrap text-[10px] sm:text-xs font-mono-tech tracking-widest uppercase text-white font-bold opacity-0 group-hover/btn:opacity-100 transition-opacity">
                    Click to Stream
                  </span>
                </button>

                <div className="mt-4 sm:mt-8 max-w-xl px-2">
                  <span className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00]">
                    {SHOWREEL_CLIPS[selectedClip].type} // {SHOWREEL_CLIPS[selectedClip].duration}
                  </span>
                  <h3
                    style={{
                      fontSize: `clamp(1.25rem, ${scaleFactor * 2.2}rem, 2.75rem)`,
                    }}
                    className="font-display font-black text-white uppercase tracking-tight mt-1"
                  >
                    {SHOWREEL_CLIPS[selectedClip].title}
                  </h3>
                </div>
              </div>

              {/* Top Bar on Reel with Live Telemetry */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-[10px] sm:text-xs font-mono-tech">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-neutral-800">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>REC // 4K ARRI CINEMA</span>
                </div>
                <div className="bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-neutral-800 text-neutral-300">
                  {width > 0 ? `${width}×${height} (${aspectRatio}:1)` : 'Kolkata Stage 01'}
                </div>
              </div>

              {/* Bottom Bar on Reel */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0">
                  {SHOWREEL_CLIPS.map((clip, idx) => (
                    <button
                      key={clip.id}
                      onClick={() => setSelectedClip(idx)}
                      className={`text-[10px] sm:text-xs font-mono-tech px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                        selectedClip === idx
                          ? 'bg-white text-black font-bold border-white'
                          : 'bg-black/60 text-neutral-400 border-neutral-800 hover:text-white'
                      }`}
                    >
                      Cut 0{idx + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={onWatchShowreel}
                  className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono-tech text-white bg-black/70 hover:bg-[#ff3b00] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-neutral-700 transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <span>WATCH SHOWREEL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </AdaptiveContainer>

        {/* Production Disciplines 8-Grid */}
        <div className="mt-16 pt-12 border-t border-neutral-800">
          <div className="mb-8 flex items-center justify-between">
            <h4 className="text-xl sm:text-2xl font-display font-bold text-white uppercase">
              End-To-End Cinematic Disciplines
            </h4>
            <span className="text-xs font-mono-tech text-[#ff3b00]">
              [ 08 Production Pillars ]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRODUCTION_DISCIPLINES.map((disc, idx) => (
              <div
                key={disc.name}
                className="p-5 rounded-xl bg-[#101010] border border-neutral-800/80 hover:border-neutral-700 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono-tech text-[#ff3b00]">
                      0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-[#ff3b00] transition-colors"></span>
                  </div>
                  <h5 className="font-display font-bold text-base text-white group-hover:text-[#ff3b00] transition-colors">
                    {disc.name}
                  </h5>
                  <p className="mt-2 text-xs text-neutral-400 font-sans leading-relaxed">
                    {disc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { SHOWREEL_CLIPS } from '../data/agencyData';
import { AdaptiveContainer } from './AdaptiveContainer';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  const clip = SHOWREEL_CLIPS[activeClipIndex];

  useEffect(() => {
    let interval: any;
    if (isPlaying && isOpen) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 350);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/98 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-300">
      <AdaptiveContainer
        className="relative w-full max-w-5xl bg-[#090909] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl my-auto"
        referenceWidth={1024}
        referenceHeight={640}
      >
        {({ width, height, aspectRatio, scaleFactor, isCompactHeight }) => (
          <>
            {/* Top Bar */}
            <div className="px-5 py-3 sm:px-6 sm:py-4 border-b border-neutral-800 flex items-center justify-between bg-black/60">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                <span className="text-[11px] sm:text-xs font-mono-tech uppercase tracking-widest text-neutral-300">
                  Showreel Screening // {clip.title}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono-tech text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded">
                  {width}×{height} ({aspectRatio}:1)
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close showreel"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-900 hover:bg-[#ff3b00] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Screen Player Simulator */}
            <div className={`relative w-full bg-black overflow-hidden flex items-center justify-center group ${
              isCompactHeight ? 'aspect-[21/9]' : 'aspect-[16/9]'
            }`}>
              <img
                src={clip.coverImage}
                alt={clip.title}
                className={`w-full h-full object-cover filter contrast-125 transition-transform duration-700 ${
                  isPlaying ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

              {/* Center Play/Pause Indicator on click */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                style={{
                  transform: `scale(${Math.max(0.75, Math.min(1.15, scaleFactor))})`,
                }}
                className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-[#ff3b00]/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform focus:outline-none cursor-pointer"
              >
                {isPlaying ? <Pause className="w-6 h-6 sm:w-8 sm:h-8 fill-white" /> : <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white ml-1" />}
              </button>

              {/* Bottom Player Overlay Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 md:p-6 bg-gradient-to-t from-black via-black/90 to-transparent space-y-2.5 sm:space-y-3">
                {/* Progress Bar */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const newProgress = Math.round((clickX / rect.width) * 100);
                    setProgress(Math.max(0, Math.min(100, newProgress)));
                  }}
                  className="w-full h-1.5 bg-neutral-800 rounded-full cursor-pointer overflow-hidden relative"
                >
                  <div
                    className="h-full bg-[#ff3b00] transition-all duration-200 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                {/* Controls Row */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono-tech text-white">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="hover:text-[#ff3b00] transition-colors cursor-pointer"
                    >
                      {isPlaying ? 'PAUSE' : 'PLAY'}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="flex items-center gap-1 hover:text-[#ff3b00] transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      <span>{isMuted ? 'MUTED' : 'DOLBY ATMOS'}</span>
                    </button>
                    <span className="text-neutral-500">
                      00:{progress < 10 ? `0${progress}` : progress} / {clip.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2">
                    {SHOWREEL_CLIPS.map((c, i) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setActiveClipIndex(i);
                          setProgress(0);
                        }}
                        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-[10px] font-mono-tech uppercase transition-all cursor-pointer ${
                          activeClipIndex === i
                            ? 'bg-[#ff3b00] text-white font-bold'
                            : 'bg-neutral-900 text-neutral-400 hover:text-white'
                        }`}
                      >
                        Cut 0{i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Clip Credits & Description */}
            <div className="p-4 sm:p-6 md:p-8 bg-[#0f0f0f] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-t border-neutral-800">
              <div>
                <span className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00] block">
                  {clip.type} // {clip.client}
                </span>
                <h4 className="text-lg sm:text-xl font-display font-bold text-white uppercase mt-0.5 sm:mt-1">
                  {clip.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-0.5 sm:mt-1 max-w-xl line-clamp-2 sm:line-clamp-none">
                  {clip.description}
                </p>
              </div>

              <div className="text-[11px] sm:text-xs font-mono-tech text-neutral-500 space-y-0.5 sm:space-y-1 shrink-0">
                <div>Shot on Arri Alexa 35</div>
                <div>Post: Scale Up Color Suites</div>
                <div>Location: Kolkata & Regional</div>
              </div>
            </div>
          </>
        )}
      </AdaptiveContainer>
    </div>
  );
};

import React, { useState } from 'react';
import { Maximize2, Sparkles, Sliders, Check, Info, ZoomIn, ZoomOut } from 'lucide-react';
import { useScaleMode } from '../context/ScaleModeContext';

export const ScaleModeFloatingToggle: React.FC = () => {
  const { isScaleMode, toggleScaleMode } = useScaleMode();
  const [showTooltip, setShowTooltip] = useState(false);
  const [justToggled, setJustToggled] = useState(false);

  const handleToggle = () => {
    toggleScaleMode();
    setJustToggled(true);
    setTimeout(() => setJustToggled(false), 1200);
  };

  return (
    <>
      {/* Real-time Status Floating Pill Toast on Toggle */}
      {justToggled && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-3 duration-300 max-w-[calc(100vw-2rem)]">
          <div className="bg-[#121212]/95 border border-[#ff3b00]/60 shadow-2xl shadow-[#ff3b00]/25 rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-xl flex items-center gap-2.5 sm:gap-3">
            <div className={`w-2 h-2 rounded-full shrink-0 ${isScaleMode ? 'bg-[#ff3b00] animate-ping' : 'bg-neutral-500'}`}></div>
            <span className="text-[11px] sm:text-xs font-mono-tech uppercase text-white tracking-wider truncate">
              {isScaleMode ? '⚡ Scale Mode Active (+15% Body)' : 'Standard View Restored'}
            </span>
          </div>
        </div>
      )}

      {/* Floating Toggle Button Dock */}
      <div
        id="scale-mode-floating-container"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Info Tooltip Card */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 w-64 sm:w-72 p-3.5 bg-[#141414] border border-neutral-700/80 rounded-2xl shadow-2xl backdrop-blur-xl text-neutral-200 text-xs font-sans animate-in fade-in duration-200 pointer-events-none max-w-[calc(100vw-2rem)]">
            <div className="flex items-center gap-2 mb-1.5 font-mono-tech text-[11px] text-[#ff3b00] uppercase tracking-wider font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>Brand Demonstration</span>
            </div>
            <p className="text-neutral-300 leading-relaxed text-[11px]">
              Toggle <strong className="text-white">Scale Mode</strong> to experience real-time brand expansion: body typography enlarges by <strong className="text-[#ff3b00]">+15%</strong> and imagery expands across all sections.
            </p>
            <div className="mt-2 pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono-tech text-neutral-500">
              <span>Status: {isScaleMode ? 'ACTIVE' : 'INACTIVE'}</span>
              <span>1.0X ➔ 1.15X</span>
            </div>
          </div>
        )}

        {/* The Interactive Floating Dock */}
        <div
          className={`flex items-center gap-2.5 p-1.5 sm:p-2 rounded-full backdrop-blur-xl transition-all duration-300 shadow-2xl border ${
            isScaleMode
              ? 'bg-[#181818]/95 border-[#ff3b00] shadow-[#ff3b00]/20 ring-2 ring-[#ff3b00]/30'
              : 'bg-[#111111]/90 border-neutral-800 hover:border-neutral-700 shadow-black/80'
          }`}
        >
          {/* Status Label Button */}
          <button
            id="scale-mode-toggle-btn"
            onClick={handleToggle}
            aria-pressed={isScaleMode}
            aria-label="Toggle Scale Mode demonstration"
            className="flex items-center gap-2.5 pl-2.5 pr-2 py-1 cursor-pointer group focus:outline-none"
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScaleMode
                  ? 'bg-[#ff3b00] text-white shadow-md shadow-[#ff3b00]/50 rotate-12 scale-105'
                  : 'bg-neutral-800 text-neutral-400 group-hover:text-white group-hover:bg-neutral-700'
              }`}
            >
              {isScaleMode ? <ZoomIn className="w-4 h-4" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </div>

            <div className="flex flex-col items-start text-left">
              <span className="text-[10px] sm:text-[11px] font-mono-tech font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                <span>SCALE MODE</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    isScaleMode ? 'bg-[#ff3b00] animate-pulse' : 'bg-neutral-600'
                  }`}
                ></span>
              </span>
              <span className="text-[9px] font-mono-tech text-neutral-400 uppercase tracking-widest">
                {isScaleMode ? '+15% EXPANDED' : 'STANDARD 1.0X'}
              </span>
            </div>

            {/* iOS/Industrial Style Slider Switch */}
            <div
              className={`ml-1 w-11 h-6 rounded-full transition-colors duration-300 p-0.5 flex items-center ${
                isScaleMode ? 'bg-[#ff3b00]' : 'bg-neutral-800'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
                  isScaleMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              >
                {isScaleMode ? (
                  <Check className="w-3 h-3 text-[#ff3b00] stroke-[3]" />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

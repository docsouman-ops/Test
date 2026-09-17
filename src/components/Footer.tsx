import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight, Globe, Instagram, Linkedin, Youtube, Sparkles, ZoomIn, Check } from 'lucide-react';
import { useScaleMode } from '../context/ScaleModeContext';
import { ScaleModeFloatingToggle } from './ScaleModeFloatingToggle';

export const Footer: React.FC = () => {
  const [kolkataTime, setKolkataTime] = useState('');
  const { isScaleMode, toggleScaleMode } = useScaleMode();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in Kolkata IST (UTC+5:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setKolkataTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-12 border-t border-neutral-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/80">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#ff3b00] flex items-center justify-center font-display font-black text-black text-base">
                S
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tight">
                SCALE <span className="text-[#ff3b00]">UP</span>
              </span>
            </div>

            <p className="text-xl sm:text-2xl font-display font-bold text-neutral-300">
              “Ideas That Scale.”
            </p>

            <p className="text-sm text-neutral-400 font-sans max-w-md leading-relaxed">
              An integrated marketing and advertising company from Kolkata, building brands across digital, ATL, BTL, content and commercial production.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono-tech text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse"></span>
              <span>Kolkata, India // {kolkataTime || 'IST Live'}</span>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00] block mb-2">
              // Navigation
            </span>
            <ul className="space-y-2 text-sm font-mono-tech uppercase tracking-wider text-neutral-300">
              {['Work', 'Services', 'Capabilities', 'About', 'Insights', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#ff3b00] transition-colors flex items-center gap-1 group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00] block mb-2">
              // Connect & Follow
            </span>
            <ul className="space-y-2 text-sm font-mono-tech uppercase tracking-wider text-neutral-300">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ff3b00] transition-colors flex items-center gap-2 group"
                >
                  <Instagram className="w-4 h-4 text-neutral-400 group-hover:text-[#ff3b00]" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ff3b00] transition-colors flex items-center gap-2 group"
                >
                  <Linkedin className="w-4 h-4 text-neutral-400 group-hover:text-[#ff3b00]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ff3b00] transition-colors flex items-center gap-2 group"
                >
                  <Youtube className="w-4 h-4 text-neutral-400 group-hover:text-[#ff3b00]" />
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase text-neutral-400 hover:text-white bg-neutral-900 px-3.5 py-2 rounded-full border border-neutral-800 transition-colors"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Real-time Scale Mode Footer Control Bar */}
        <div className="my-10 p-5 sm:p-6 rounded-2xl bg-[#0d0d0d] border border-neutral-800/90 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-32 bg-[#ff3b00]/10 blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-4 relative z-10 text-center md:text-left flex-col md:flex-row">
            <div className="w-12 h-12 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 flex items-center justify-center text-[#ff3b00] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-[#ff3b00]">
                  Live System Capability // Real-Time Engine
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono-tech uppercase ${
                  isScaleMode ? 'bg-[#ff3b00] text-white font-bold' : 'bg-neutral-800 text-neutral-400'
                }`}>
                  {isScaleMode ? 'ACTIVE (1.15X)' : 'OFF (1.0X)'}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-display font-bold text-white uppercase mt-0.5">
                Scale Mode: Real-Time Brand Demonstration
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1 max-w-xl">
                Experience our core philosophy in code: activating Scale Mode magnifies all body typography by +15% and expands image containers dynamically across the viewport.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 relative z-10 shrink-0 w-full sm:w-auto justify-center">
            <button
              id="footer-scale-mode-toggle-btn"
              onClick={toggleScaleMode}
              className={`w-full sm:w-auto px-5 py-3 rounded-full text-xs font-mono-tech uppercase tracking-wider flex items-center justify-center gap-3 transition-all cursor-pointer border ${
                isScaleMode
                  ? 'bg-[#ff3b00] text-white font-bold border-[#ff3b00] shadow-lg shadow-[#ff3b00]/40'
                  : 'bg-neutral-900 text-neutral-300 hover:text-white border-neutral-700 hover:border-neutral-500'
              }`}
            >
              <div className={`w-2 h-2 rounded-full shrink-0 ${isScaleMode ? 'bg-white animate-pulse' : 'bg-neutral-500'}`}></div>
              <span className="truncate">{isScaleMode ? 'DISABLE SCALE MODE' : 'ACTIVATE SCALE MODE'}</span>
              <div className={`w-8 h-4 rounded-full p-0.5 flex items-center shrink-0 transition-colors ${
                isScaleMode ? 'bg-black/40' : 'bg-neutral-800'
              }`}>
                <div className={`w-3 h-3 rounded-full bg-white transition-transform ${
                  isScaleMode ? 'translate-x-4' : 'translate-x-0'
                }`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* GIGANTIC WORDMARK: SCALE UP */}
        <div className="py-8 sm:py-12 select-none overflow-hidden text-center">
          <div className="font-display font-black text-[13vw] sm:text-[15vw] leading-none uppercase tracking-tight text-neutral-900 hover:text-neutral-800 transition-colors duration-500 flex items-center justify-center gap-2 sm:gap-4 flex-nowrap">
            <span>SCALE</span>
            <span className="text-[#ff3b00]/30 hover:text-[#ff3b00] transition-colors">
              UP
            </span>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-neutral-500">
          <div>
            © {new Date().getFullYear()} SCALE UP INTEGRATED ADVERTISING & PRODUCTION PVT LTD.
          </div>
          <div className="flex items-center gap-6">
            <span>Location: Kolkata, India</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>

      {/* Persistent Floating Scale Mode Controller */}
      <ScaleModeFloatingToggle />
    </footer>
  );
};

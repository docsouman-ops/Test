import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Play,
  Sliders,
  Maximize2,
  Crop,
  Sparkles,
  Camera,
  Layers,
  ChevronDown
} from 'lucide-react';
import { useResizeObserver } from '../hooks/useResizeObserver';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
  onWatchShowreel: () => void;
}

type FramingMode = 'fit' | '16-9' | 'scope' | 'fluid';

const HERO_MONTAGE_SLIDES = [
  {
    id: 'film-shoot',
    tag: 'COMMERCIAL AD FILMS',
    title: 'Arri 35mm Cinema Production on Set',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=80',
    meta: 'Studio Floor 03 // South Kolkata',
    shutter: '1/48s',
    lens: 'Cooke 35mm T1.4'
  },
  {
    id: 'howrah-night',
    tag: 'KOLKATA CITYSCALE',
    title: 'Howrah Bridge Steel & River Light',
    image: 'https://images.unsplash.com/photo-1571677246347-5040036b95cc?auto=format&fit=crop&w=1800&q=80',
    meta: 'Iconic Eastern Epicenter',
    shutter: '1/50s',
    lens: 'Master Prime 24mm'
  },
  {
    id: 'outdoor-billboard',
    tag: 'ATL & MEGA OOH',
    title: 'High-Impact Outdoor Across Flyovers',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80',
    meta: 'Park Circus & Airport Expressway',
    shutter: '1/125s',
    lens: '50mm Anamorphic'
  },
  {
    id: 'digital-command',
    tag: 'DIGITAL POWERHOUSE',
    title: 'Real-Time Performance Engine',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1800&q=80',
    meta: 'Algorithmic Optimization',
    shutter: '1/60s',
    lens: 'Angenieux Optimo Zoom'
  },
  {
    id: 'event-stadium',
    tag: 'BTL EXPERIENTIAL',
    title: 'Stadium Spectacle & Live Audiences',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80',
    meta: 'Eden Gardens Fan Surge',
    shutter: '1/250s',
    lens: 'Ultra Prime 85mm'
  }
];

const BRAND_TAGLINES = [
  'Ideas That Scale.',
  'Think Bigger. Scale Further.',
  'We Don’t Just Market. We Scale.',
  'From Idea to Impact.'
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onOpenContact,
  onWatchShowreel
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [interactiveScale, setInteractiveScale] = useState(1);
  const [framingMode, setFramingMode] = useState<FramingMode>('fit');
  const [showFramingOverlay, setShowFramingOverlay] = useState(true);

  // ResizeObserver-driven container dimensions
  const { ref: heroRef, dimensions } = useResizeObserver<HTMLDivElement>({
    referenceWidth: 1440,
    referenceHeight: 900,
    minScale: 0.65,
    maxScale: 1.35,
  });

  // Auto cycle slides & taglines
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_MONTAGE_SLIDES.length);
    }, 4500);

    const taglineInterval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % BRAND_TAGLINES.length);
    }, 3800);

    return () => {
      clearInterval(slideInterval);
      clearInterval(taglineInterval);
    };
  }, []);

  // Subtle scroll effect that modulates internal energy without overflowing container
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / (windowHeight * 0.8), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroRef]);

  // Dynamic optical font sizing computed directly from container dimensions:
  // Balances container width, height, and interactive magnitude to ensure
  // typography never clips horizontally or pushes action buttons out of view
  const widthFontConstraint = dimensions.width < 420
    ? dimensions.width * 0.125
    : dimensions.width < 640
    ? dimensions.width * 0.13
    : dimensions.width * 0.11;

  const heightFontConstraint = dimensions.height * (dimensions.isCompactHeight ? 0.11 : 0.145);
  const baseOptimalFontPx = Math.min(widthFontConstraint, heightFontConstraint);
  const scaledFontPx = Math.round(
    baseOptimalFontPx * (1 + (interactiveScale - 1) * 0.1)
  );
  const maxMobileFont = dimensions.width < 400 ? 50 : dimensions.width < 640 ? 60 : 145;
  const dynamicFontSizePx = Math.max(34, Math.min(maxMobileFont, scaledFontPx));

  // Compute live aspect ratio tag from container dimensions
  const calculateAspectRatio = () => {
    const ratio = dimensions.aspectRatio;
    if (Math.abs(ratio - 16 / 9) < 0.1) return '16:9 Widescreen';
    if (Math.abs(ratio - 2.39) < 0.15) return '2.39:1 Anamorphic Scope';
    if (Math.abs(ratio - 16 / 10) < 0.08) return '16:10 Display';
    if (Math.abs(ratio - 4 / 3) < 0.1) return '4:3 Academy';
    if (ratio < 0.7) return '9:16 Mobile Vertical';
    return `${ratio.toFixed(2)}:1 Adaptive Frame`;
  };

  const currentSlide = HERO_MONTAGE_SLIDES[activeSlide];

  // Dynamic framing classes based on active mode
  const getFrameContainerClass = () => {
    switch (framingMode) {
      case '16-9':
        return 'max-w-6xl aspect-[16/9] mx-auto my-auto border border-neutral-700/60 shadow-2xl rounded-2xl';
      case 'scope':
        return 'w-full max-w-7xl aspect-[2.39/1] mx-auto my-auto border border-neutral-700/60 shadow-2xl rounded-2xl';
      case 'fluid':
        return 'w-full max-w-none px-4 sm:px-8';
      case 'fit':
      default:
        return 'w-full max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8';
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#0a0a0a] select-none pt-20 sm:pt-24 pb-4 sm:pb-5"
    >
      {/* ------------------------------------------------------------- */}
      {/* Cinematic Montage Background Layer with Dynamic Optical Blur */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {HERO_MONTAGE_SLIDES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-35 scale-105' : 'opacity-0 scale-100'
              } transition-transform duration-[6000ms]`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter contrast-125 brightness-75"
              />
            </div>
          );
        })}

        {/* Cinematic Film Vignette & Optical Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/65 to-[#0a0a0a]/85"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-40"></div>

        {/* Dynamic Center Ambient Bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[300px] sm:h-[450px] bg-[#ff3b00]/10 blur-[140px] rounded-full pointer-events-none"></div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Cinematic Viewfinder Framing Guides & Corner Reticles */}
      {/* ------------------------------------------------------------- */}
      {showFramingOverlay && (
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 pointer-events-none z-20 transition-all duration-500 border border-white/5 rounded-2xl">
          {/* Top-Left Reticle with Lens Specs */}
          <div className="absolute -top-1 -left-1 flex items-start gap-2">
            <div className="w-5 h-5 border-t-2 border-l-2 border-[#ff3b00]"></div>
            <span className="text-[9px] font-mono-tech uppercase text-neutral-400 tracking-wider bg-black/60 px-1.5 py-0.5 rounded">
              ARRI 35 // {currentSlide.lens}
            </span>
          </div>

          {/* Top-Right Reticle with Dynamic Resolution & Aspect */}
          <div className="absolute -top-1 -right-1 flex items-start gap-2 flex-row-reverse">
            <div className="w-5 h-5 border-t-2 border-r-2 border-[#ff3b00]"></div>
            <span className="text-[9px] font-mono-tech uppercase text-neutral-400 tracking-wider bg-black/60 px-1.5 py-0.5 rounded">
              {dimensions.width}×{dimensions.height} • {calculateAspectRatio()} • {(dimensions.scaleFactor * 100).toFixed(0)}%
            </span>
          </div>

          {/* Center Crosshair Target Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-30 flex items-center justify-center">
            <div className="w-full h-[1px] bg-white/40"></div>
            <div className="h-full w-[1px] bg-white/40 absolute"></div>
            <div className="w-2 h-2 rounded-full border border-[#ff3b00] absolute"></div>
          </div>

          {/* Bottom-Left Reticle with Exposure Telemetry */}
          <div className="absolute -bottom-1 -left-1 flex items-end gap-2">
            <div className="w-5 h-5 border-b-2 border-l-2 border-[#ff3b00]"></div>
            <div className="flex items-center gap-1.5 text-[9px] font-mono-tech uppercase text-neutral-400 bg-black/60 px-1.5 py-0.5 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>LIVE • {currentSlide.shutter} • ISO 800</span>
            </div>
          </div>

          {/* Bottom-Right Reticle with Frame Mode Indicator */}
          <div className="absolute -bottom-1 -right-1 flex items-end gap-2 flex-row-reverse">
            <div className="w-5 h-5 border-b-2 border-r-2 border-[#ff3b00]"></div>
            <span className="text-[9px] font-mono-tech uppercase text-[#ff3b00] tracking-wider bg-black/60 px-1.5 py-0.5 rounded font-bold">
              FRAME: {framingMode.toUpperCase()}
            </span>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 1. Top HUD Bar: Taglines, Agency Badge, Framing Mode Switcher */}
      {/* ------------------------------------------------------------- */}
      <header className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-800/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-ping"></span>
            <span className="font-mono-tech text-[11px] sm:text-xs tracking-widest uppercase text-neutral-300">
              Kolkata Integrated Agency & Film Studio
            </span>
          </div>

          {/* Tagline Rotation */}
          <div className="hidden md:flex items-center gap-2 font-mono-tech text-xs tracking-wider text-neutral-400">
            <span className="text-[#ff3b00]">★</span>
            <span className="transition-all duration-500 text-white font-semibold">
              “{BRAND_TAGLINES[taglineIndex]}”
            </span>
          </div>

          {/* Dynamic Framing Mode Controller */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-black/70 backdrop-blur-md p-1 rounded-full border border-neutral-800">
              <button
                onClick={() => setFramingMode('fit')}
                title="Dynamic Screen Fit (100dvh)"
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono-tech uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
                  framingMode === 'fit'
                    ? 'bg-[#ff3b00] text-white font-bold shadow-md shadow-[#ff3b00]/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Maximize2 className="w-2.5 h-2.5" />
                <span>Screen Fit</span>
              </button>

              <button
                onClick={() => setFramingMode('16-9')}
                title="Cinematic 16:9 Theatrical Frame"
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono-tech uppercase tracking-wider transition-all hidden sm:flex items-center gap-1 cursor-pointer ${
                  framingMode === '16-9'
                    ? 'bg-[#ff3b00] text-white font-bold shadow-md shadow-[#ff3b00]/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Crop className="w-2.5 h-2.5" />
                <span>16:9</span>
              </button>

              <button
                onClick={() => setFramingMode('scope')}
                title="Anamorphic 2.39:1 Cinema Scope"
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono-tech uppercase tracking-wider transition-all hidden sm:flex items-center gap-1 cursor-pointer ${
                  framingMode === 'scope'
                    ? 'bg-[#ff3b00] text-white font-bold shadow-md shadow-[#ff3b00]/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Layers className="w-2.5 h-2.5" />
                <span>Scope 2.39:1</span>
              </button>

              <button
                onClick={() => setFramingMode('fluid')}
                title="Full Fluid Edge-to-Edge"
                className={`px-2 py-1 rounded-full text-[10px] font-mono-tech uppercase tracking-wider transition-all cursor-pointer ${
                  framingMode === 'fluid'
                    ? 'bg-[#ff3b00] text-white font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Fluid
              </button>
            </div>

            <button
              onClick={() => setShowFramingOverlay(!showFramingOverlay)}
              title={showFramingOverlay ? 'Hide Viewfinder Reticles' : 'Show Viewfinder Reticles'}
              className={`p-1.5 rounded-full border transition-all cursor-pointer ${
                showFramingOverlay
                  ? 'bg-neutral-900 border-[#ff3b00]/50 text-[#ff3b00]'
                  : 'bg-black/60 border-neutral-800 text-neutral-500 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 2. Main Centerpiece: Dynamic Screen-Fitting Typography Canvas */}
      {/* ------------------------------------------------------------- */}
      <div className={`relative z-20 flex-1 flex flex-col justify-center transition-all duration-500 overflow-hidden ${getFrameContainerClass()}`}>
        <div className="w-full flex flex-col items-center justify-center text-center">
          
          {/* Dynamic Fluid Typography Container: "SCALE UP." dynamically sized by ResizeObserver */}
          <div className="w-full max-w-full overflow-hidden flex items-center justify-center py-1">
            <div
              className="w-full flex items-baseline justify-center font-display font-black uppercase text-white tracking-tighter transition-all duration-300 select-none leading-[0.82]"
              style={{
                letterSpacing: interactiveScale > 1.5 ? '0.02em' : '-0.03em',
              }}
            >
              <span
                style={{ fontSize: `${dynamicFontSizePx}px` }}
                className="drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] text-white hover:text-neutral-200 transition-colors inline-block mr-3 sm:mr-6"
              >
                SCALE
              </span>
              <span
                style={{ fontSize: `${dynamicFontSizePx}px` }}
                className="text-[#ff3b00] drop-shadow-[0_0_80px_rgba(255,59,0,0.55)] inline-block"
              >
                UP.
              </span>
            </div>
          </div>

          {/* Interactive Scale Multiplier bar: strictly framed, never causes horizontal overflow */}
          <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-black/70 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-neutral-800 shadow-xl max-w-full ${
            dimensions.isCompactHeight ? 'mt-1 sm:mt-2' : 'mt-2 sm:mt-4'
          }`}>
            <span className="text-[10px] sm:text-[11px] font-mono-tech tracking-wider uppercase text-neutral-400 flex items-center gap-1.5">
              <Sliders className="w-3 h-3 text-[#ff3b00]" />
              Visual Magnitude:
            </span>
            {[
              { val: 1, label: '1X Core' },
              { val: 1.5, label: '10X Regional' },
              { val: 2, label: '100X Pan-India' },
              { val: 2.5, label: '1000X Monumental' }
            ].map((btn) => (
              <button
                key={btn.val}
                onClick={() => setInteractiveScale(btn.val)}
                className={`text-[10px] sm:text-[11px] font-mono-tech tracking-wider px-2 sm:px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  interactiveScale === btn.val
                    ? 'bg-[#ff3b00] text-white font-bold shadow-md shadow-[#ff3b00]/30'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Supporting Headline & Narrative Statement: Compact & Screen-Fitted via Container Dimensions */}
          <div className={`max-w-3xl px-2 sm:px-4 mx-auto space-y-1 sm:space-y-1.5 ${
            dimensions.isCompactHeight ? 'mt-2 sm:mt-3' : 'mt-3 sm:mt-5'
          }`}>
            <h2 className={`font-display font-extrabold text-white tracking-tight leading-tight ${
              dimensions.isCompactHeight
                ? 'text-base sm:text-xl md:text-2xl'
                : 'text-lg sm:text-2xl md:text-3xl'
            }`}>
              We turn ideas into brands, campaigns and experiences{' '}
              <span className="text-[#ff3b00] underline decoration-[#ff3b00]/40 underline-offset-4">
                that scale.
              </span>
            </h2>
            <p className={`text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto ${
              dimensions.isCompactHeight
                ? 'text-[11px] sm:text-xs line-clamp-1 sm:line-clamp-2'
                : 'text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-none'
            }`}>
              An integrated marketing and advertising powerhouse from Kolkata, building brands across digital, ATL, BTL, content and commercial production.
            </p>
          </div>

          {/* CTA Actions: Perfectly Scaled & Centered */}
          <div className={`flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 ${
            dimensions.isCompactHeight ? 'mt-2 sm:mt-3' : 'mt-4 sm:mt-6'
          }`}>
            <button
              id="hero-explore-work-btn"
              onClick={onExploreWork}
              className="group inline-flex items-center gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-white text-black font-display font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#ff3b00] hover:text-white transition-all duration-300 shadow-xl shadow-black/50 cursor-pointer"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-lets-scale-btn"
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-transparent text-white border border-neutral-700 font-display font-bold text-xs sm:text-sm tracking-wider uppercase hover:border-[#ff3b00] hover:bg-[#ff3b00]/10 transition-all duration-300 cursor-pointer"
            >
              <span>LET’S SCALE</span>
              <ArrowRight className="w-4 h-4 text-[#ff3b00] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-watch-reel-btn"
              onClick={onWatchShowreel}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-3 text-xs font-mono-tech tracking-wider uppercase text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full border border-neutral-700 flex items-center justify-center bg-neutral-900/80 group-hover:border-[#ff3b00]">
                <Play className="w-3 h-3 text-[#ff3b00] ml-0.5 fill-[#ff3b00]" />
              </div>
              <span>WATCH REEL (01:45)</span>
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. Bottom Live Montage Slide Navigator: Anchored to Screen Edge */}
      {/* ------------------------------------------------------------- */}
      <footer className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
        <div className="pt-3 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono-tech">
          <div className="flex items-center gap-3">
            <span className="text-neutral-400 uppercase tracking-wider text-[11px]">
              CINEMATIC MONTAGE:
            </span>
            <div className="flex gap-1.5">
              {HERO_MONTAGE_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx ? 'w-8 bg-[#ff3b00]' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                  aria-label={`Show slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-white font-medium text-[11px]">
              {currentSlide.tag}
            </span>
          </div>

          <div className="flex items-center gap-3 text-neutral-400 text-[11px]">
            <span>{currentSlide.meta}</span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-300 flex items-center gap-1">
              <span>EXPLORE BELOW</span>
              <ChevronDown className="w-3 h-3 animate-bounce text-[#ff3b00]" />
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

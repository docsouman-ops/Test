import React, { useState, useEffect, useRef } from 'react';
import { SCALE_ENGINE_STEPS } from '../data/agencyData';
import { Cpu, Play, RotateCcw, CheckCircle2, Activity } from 'lucide-react';
import { motion, useScroll, useSpring, useMotionValue, animate, AnimatePresence } from 'motion/react';

export const ScaleEngineSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('idea');
  const [userLockedStep, setUserLockedStep] = useState(false);
  const [isPlayingSimulation, setIsPlayingSimulation] = useState(false);
  const [currentProgressVal, setCurrentProgressVal] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  // Measure socket centers for desktop
  const desktopSocketsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [desktopCoords, setDesktopCoords] = useState<{ x: number; y: number }[]>([]);

  // Measure socket centers for mobile
  const mobileSocketsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [mobileCoords, setMobileCoords] = useState<{ x: number; y: number }[]>([]);

  // Real scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 45%'],
  });

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Simulation motion value for the interactive "Play Sequence" mode
  const simulationProgress = useMotionValue(0);

  // Active motion value used for pathLength
  const activeMotionProgress = isPlayingSimulation ? simulationProgress : smoothScrollProgress;

  // Track progress value for UI indicators & automatic stage switching
  useEffect(() => {
    const unsub = activeMotionProgress.on('change', (latest) => {
      const clamped = Math.max(0, Math.min(1, latest));
      setCurrentProgressVal(clamped);

      // If user hasn't manually locked onto a specific card, auto-follow the line
      if (!userLockedStep) {
        // 7 steps -> 6 segments
        // Map 0..1 to index 0..6
        const stepIndex = Math.min(6, Math.floor(clamped * 6.99));
        if (SCALE_ENGINE_STEPS[stepIndex]) {
          setActiveStepId(SCALE_ENGINE_STEPS[stepIndex].id);
        }
      }
    });

    return () => unsub();
  }, [activeMotionProgress, userLockedStep]);

  // Measure coordinates for precise SVG connection lines with ResizeObserver
  useEffect(() => {
    const updateCoordinates = () => {
      // Desktop coordinates
      if (desktopContainerRef.current) {
        const cRect = desktopContainerRef.current.getBoundingClientRect();
        const coords = desktopSocketsRef.current.map((el) => {
          if (!el) return { x: 0, y: 0 };
          const r = el.getBoundingClientRect();
          return {
            x: Math.round(r.left - cRect.left + r.width / 2),
            y: Math.round(r.top - cRect.top + r.height / 2),
          };
        });
        if (coords.length === 7 && coords.every((c) => c.x > 0)) {
          setDesktopCoords(coords);
        }
      }

      // Mobile coordinates
      if (mobileContainerRef.current) {
        const mRect = mobileContainerRef.current.getBoundingClientRect();
        const coords = mobileSocketsRef.current.map((el) => {
          if (!el) return { x: 0, y: 0 };
          const r = el.getBoundingClientRect();
          return {
            x: Math.round(r.left - mRect.left + r.width / 2),
            y: Math.round(r.top - mRect.top + r.height / 2),
          };
        });
        if (coords.length === 7 && coords.every((c) => c.y > 0)) {
          setMobileCoords(coords);
        }
      }
    };

    updateCoordinates();
    const timer = setTimeout(updateCoordinates, 100);
    const timer2 = setTimeout(updateCoordinates, 400);

    // Responsive window resize listener
    window.addEventListener('resize', updateCoordinates);

    // ResizeObserver for dynamic element resizing (handles layout shifts, fonts, container width changes)
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        updateCoordinates();
      });
      if (desktopContainerRef.current) ro.observe(desktopContainerRef.current);
      if (mobileContainerRef.current) ro.observe(mobileContainerRef.current);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener('resize', updateCoordinates);
      if (ro) ro.disconnect();
    };
  }, []);

  // Handler for playing simulated sequence from IDEA to IMPACT
  const handlePlaySimulation = () => {
    if (isPlayingSimulation) {
      setIsPlayingSimulation(false);
      return;
    }

    setIsPlayingSimulation(true);
    setUserLockedStep(false);
    simulationProgress.set(0);

    const anim = animate(simulationProgress, 1, {
      duration: 5,
      ease: [0.25, 0.1, 0.25, 1],
      onComplete: () => {
        setIsPlayingSimulation(false);
      },
    });

    return () => anim.stop();
  };

  const handleResetSimulation = () => {
    setIsPlayingSimulation(false);
    simulationProgress.set(0);
    setUserLockedStep(false);
    setActiveStepId('idea');
  };

  const handleNodeClick = (stepId: string) => {
    setActiveStepId(stepId);
    setUserLockedStep(true);
  };

  const handleAutoTrackToggle = () => {
    setUserLockedStep(false);
  };

  // Build Desktop SVG Path
  const buildDesktopPath = () => {
    if (desktopCoords.length === 7 && desktopCoords[0].x > 0) {
      return desktopCoords.reduce((acc, pt, idx) => {
        return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
      }, '');
    }
    // High-precision dynamic fallback scaled to container width
    const width = desktopContainerRef.current?.clientWidth || 1000;
    const stepX = width / 7;
    return Array.from({ length: 7 }, (_, i) => `${i === 0 ? 'M' : 'L'} ${Math.round(stepX * (i + 0.5))} 48`).join(' ');
  };

  // Build Mobile Vertical SVG Path
  const buildMobilePath = () => {
    if (mobileCoords.length === 7 && mobileCoords[0].y > 0) {
      return mobileCoords.reduce((acc, pt, idx) => {
        return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
      }, '');
    }
    return 'M 24 36 L 24 130 L 24 224 L 24 318 L 24 412 L 24 506 L 24 600';
  };

  const currentStep = SCALE_ENGINE_STEPS.find((s) => s.id === activeStepId) || SCALE_ENGINE_STEPS[0];

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="py-24 sm:py-32 bg-[#0c0c0c] relative overflow-hidden border-t border-b border-neutral-900"
    >
      {/* Background Graphic Grid & Ambient Radial Glow */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-[#ff3b00]/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#ff3b00] rounded-sm"></span>
              <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
                // Proprietary Framework & Flow
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight">
              THE <span className="text-[#ff3b00]">SCALE ENGINE</span>
            </h2>
          </div>

          {/* Interactive Flow Controls & Live Progress Gauge */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 bg-neutral-950 px-4 py-2 rounded-full border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse"></span>
              <span className="text-xs font-mono-tech uppercase text-neutral-400">
                Current Flow:{' '}
                <strong className="text-white font-mono">
                  {Math.round(currentProgressVal * 100)}%
                </strong>
              </span>
              <span className="text-neutral-700">|</span>
              <span className="text-xs font-mono-tech uppercase text-[#ff3b00] font-bold">
                {SCALE_ENGINE_STEPS[Math.min(6, Math.floor(currentProgressVal * 6.99))].name}
              </span>
            </div>

            <button
              onClick={handlePlaySimulation}
              className={`px-4 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                isPlayingSimulation
                  ? 'bg-[#ff3b00] text-white shadow-lg shadow-[#ff3b00]/30 font-bold'
                  : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${isPlayingSimulation ? 'fill-white animate-pulse' : ''}`} />
              <span>{isPlayingSimulation ? 'Playing Flow...' : 'Play Sequence'}</span>
            </button>

            {userLockedStep && (
              <button
                onClick={handleAutoTrackToggle}
                className="px-3.5 py-2 rounded-full text-[11px] font-mono-tech uppercase text-neutral-400 hover:text-white bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Re-synchronize stage viewer with page scroll"
              >
                <Activity className="w-3.5 h-3.5 text-[#ff3b00]" />
                <span>Sync with Scroll</span>
              </button>
            )}

            {currentProgressVal > 0.05 && (
              <button
                onClick={handleResetSimulation}
                className="p-2 rounded-full text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 transition-colors cursor-pointer"
                title="Reset flow to beginning"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP PIPELINE: 7 Horizontal Nodes with Framer-Motion SVG Track */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={desktopContainerRef}
          className="hidden md:block relative mb-14 select-none pt-4 pb-2"
        >
          {/* SVG Animated Connecting Lines Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <filter id="laser-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="laser-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff3b00" />
                <stop offset="50%" stopColor="#ff6b3d" />
                <stop offset="100%" stopColor="#ff3b00" />
              </linearGradient>
            </defs>

            {/* Base Inactive Track (Dark dashed wireframe) */}
            <path
              d={buildDesktopPath()}
              stroke="#222222"
              strokeWidth={3}
              strokeDasharray="6 6"
              fill="none"
              strokeLinecap="round"
            />

            {/* Glow Aura Path (Soft orange radiance) */}
            <motion.path
              d={buildDesktopPath()}
              stroke="#ff3b00"
              strokeWidth={10}
              strokeLinecap="round"
              fill="none"
              filter="url(#laser-glow)"
              style={{
                pathLength: activeMotionProgress,
                opacity: 0.35,
              }}
            />

            {/* Main Laser Connecting Beam drawn via scroll */}
            <motion.path
              d={buildDesktopPath()}
              stroke="url(#laser-gradient)"
              strokeWidth={3.5}
              strokeLinecap="round"
              fill="none"
              style={{
                pathLength: activeMotionProgress,
              }}
            />
          </svg>

          {/* 7 Nodes Grid */}
          <div className="relative z-10 grid grid-cols-7 gap-2 items-start">
            {SCALE_ENGINE_STEPS.map((step, idx) => {
              const nodeThreshold = idx / 6;
              const isReached = currentProgressVal >= nodeThreshold - 0.03;
              const isSelected = step.id === activeStepId;
              const isNucleus = step.id === 'idea';
              const isImpact = step.id === 'impact';

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={() => handleNodeClick(step.id)}
                >
                  {/* The Physical Socket / Connection Point */}
                  <div
                    ref={(el) => {
                      desktopSocketsRef.current[idx] = el;
                    }}
                    className="relative w-8 h-8 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
                  >
                    {/* Concentric Glow Pulse Ring when line reaches this node */}
                    {isReached && (
                      <span className="absolute inset-0 rounded-full bg-[#ff3b00]/30 animate-ping"></span>
                    )}

                    {/* Outer Ring */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 border ${
                        isSelected
                          ? 'bg-[#ff3b00] border-white shadow-lg shadow-[#ff3b00]/60 scale-125'
                          : isReached
                          ? 'bg-neutral-900 border-[#ff3b00] shadow-md shadow-[#ff3b00]/40 ring-2 ring-[#ff3b00]/30'
                          : 'bg-[#141414] border-neutral-800'
                      }`}
                    >
                      {/* Core Center LED */}
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isSelected
                            ? 'bg-white scale-110'
                            : isReached
                            ? 'bg-[#ff3b00]'
                            : 'bg-neutral-600'
                        }`}
                      ></div>
                    </div>

                    {/* Badge tag for IDEA and IMPACT */}
                    {isNucleus && (
                      <span className="absolute -top-6 whitespace-nowrap px-2 py-0.5 rounded-full bg-black text-[#ff3b00] text-[9px] font-mono-tech tracking-widest border border-[#ff3b00]/40 font-bold">
                        NUCLEUS
                      </span>
                    )}
                    {isImpact && (
                      <span className="absolute -top-6 whitespace-nowrap px-2 py-0.5 rounded-full bg-[#ff3b00]/20 text-[#ff3b00] text-[9px] font-mono-tech tracking-widest border border-[#ff3b00]/50 font-bold">
                        EXPONENTIAL
                      </span>
                    )}
                  </div>

                  {/* Node Button Card */}
                  <button
                    id={`scale-engine-node-${step.id}`}
                    className={`w-full p-3.5 rounded-xl border text-center transition-all duration-300 relative flex flex-col items-center gap-1 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1a1a1a] border-[#ff3b00] text-white shadow-xl shadow-[#ff3b00]/20 ring-1 ring-[#ff3b00]'
                        : isReached
                        ? 'bg-[#141414] border-neutral-700 text-neutral-200 hover:border-[#ff3b00]/60 hover:bg-neutral-900'
                        : 'bg-[#101010] border-neutral-800/80 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono-tech tracking-widest uppercase block ${
                        isSelected
                          ? 'text-[#ff3b00] font-bold'
                          : isReached
                          ? 'text-neutral-400'
                          : 'text-neutral-600'
                      }`}
                    >
                      STEP 0{step.step}
                    </span>

                    <span className="font-display font-black text-sm tracking-wide block uppercase text-white">
                      {step.name}
                    </span>

                    <span className="text-[10px] font-mono-tech text-neutral-500 line-clamp-1 block">
                      {step.highlightMetric}
                    </span>

                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] absolute bottom-1"></span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE PIPELINE: Vertical Sequence with Connected Framer-Motion Spine */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={mobileContainerRef}
          className="block md:hidden relative mb-12 select-none"
        >
          {/* Vertical SVG Spine connecting nodes as user scrolls down */}
          <svg
            className="absolute left-[15px] top-0 bottom-0 w-8 h-full pointer-events-none z-0 overflow-visible"
            aria-hidden="true"
          >
            {/* Inactive Vertical Wire */}
            <path
              d={buildMobilePath()}
              stroke="#262626"
              strokeWidth={3}
              strokeDasharray="4 4"
              fill="none"
            />

            {/* Glowing Vertical Laser Line */}
            <motion.path
              d={buildMobilePath()}
              stroke="#ff3b00"
              strokeWidth={3}
              strokeLinecap="round"
              fill="none"
              style={{
                pathLength: activeMotionProgress,
              }}
            />
          </svg>

          {/* Vertical Node Steps */}
          <div className="space-y-4 pl-12 relative z-10">
            {SCALE_ENGINE_STEPS.map((step, idx) => {
              const nodeThreshold = idx / 6;
              const isReached = currentProgressVal >= nodeThreshold - 0.03;
              const isSelected = step.id === activeStepId;

              return (
                <div
                  key={step.id}
                  onClick={() => handleNodeClick(step.id)}
                  className={`relative p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#181818] border-[#ff3b00] shadow-lg shadow-[#ff3b00]/20 ring-1 ring-[#ff3b00]'
                      : isReached
                      ? 'bg-[#121212] border-neutral-700 text-neutral-200'
                      : 'bg-[#0e0e0e] border-neutral-800/80 text-neutral-400'
                  }`}
                >
                  {/* Socket Anchor for SVG measurement */}
                  <div
                    ref={(el) => {
                      mobileSocketsRef.current[idx] = el;
                    }}
                    className={`absolute -left-[41px] w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#ff3b00] border-white ring-4 ring-[#ff3b00]/30'
                        : isReached
                        ? 'bg-neutral-900 border-[#ff3b00]'
                        : 'bg-[#141414] border-neutral-800'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected || isReached ? 'bg-white' : 'bg-neutral-600'
                      }`}
                    ></div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono-tech text-[#ff3b00] uppercase font-bold">
                        0{step.step}
                      </span>
                      <h4 className="font-display font-black text-sm uppercase text-white">
                        {step.name}
                      </h4>
                      {step.id === 'idea' && (
                        <span className="text-[9px] font-mono-tech bg-black px-1.5 py-0.5 rounded text-[#ff3b00] border border-neutral-800">
                          NUCLEUS
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 font-sans mt-0.5">
                      {step.title}
                    </p>
                  </div>

                  <span
                    className={`text-[10px] font-mono-tech uppercase tracking-wider px-2 py-1 rounded ${
                      isSelected
                        ? 'bg-[#ff3b00] text-white font-bold'
                        : isReached
                        ? 'bg-neutral-800 text-neutral-300'
                        : 'text-neutral-600'
                    }`}
                  >
                    {isSelected ? 'Active' : isReached ? 'Powered' : 'Queued'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DETAILED STAGE SHOWCASE BOARD: Transitions with Active Stage */}
        {/* ------------------------------------------------------------- */}
        <div className="bg-[#141414] border border-neutral-800 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle Stage Ambient Glow */}
          <div
            className="absolute -bottom-24 -right-24 w-96 h-96 blur-3xl rounded-full pointer-events-none transition-colors duration-500"
            style={{ backgroundColor: `${currentStep.color}15` }}
          ></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10"
            >
              {/* Left Stage Profile */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#ff3b00]/20 text-[#ff3b00] text-xs font-mono-tech uppercase tracking-widest border border-[#ff3b00]/30 font-bold">
                    Stage 0{currentStep.step} of 07 // Pipeline Sequence
                  </span>
                  <span className="text-xs font-mono-tech text-neutral-400">
                    Target: <strong className="text-white">{currentStep.highlightMetric}</strong>
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
                    {currentStep.name}:{' '}
                    <span className="text-[#ff3b00]">{currentStep.title}</span>
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
                  {currentStep.description}
                </p>

                <blockquote className="p-5 rounded-2xl bg-black/70 border-l-4 border-[#ff3b00] text-sm sm:text-base text-neutral-200 italic font-serif leading-relaxed shadow-lg">
                  “{currentStep.quote}”
                </blockquote>
              </div>

              {/* Right Deliverables & Output Matrix */}
              <div className="lg:col-span-6 bg-black/70 border border-neutral-800/90 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-300 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#ff3b00]" />
                    Engine Outputs & Synchronized Deliverables
                  </span>
                  <span className="text-xs font-mono-tech text-[#ff3b00] uppercase font-bold">
                    // Live Output
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStep.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800/80 text-xs text-neutral-200 flex items-center gap-3 font-sans font-medium hover:border-neutral-700 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#ff3b00] shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-tech text-neutral-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                    <span>Integrated Agency Cohesion</span>
                  </div>
                  <span className="text-white font-semibold">
                    100% In-House Production & Strategy
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Final Engine Statement */}
        <div className="mt-14 text-center space-y-3">
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight">
            One idea. <span className="text-[#ff3b00]">Multiple channels.</span> One scalable ecosystem.
          </p>
          <p className="text-xs font-mono-tech tracking-widest uppercase text-neutral-400">
            From the initial spark to exponential impact // Engineered in Kolkata
          </p>
        </div>
      </div>
    </section>
  );
};

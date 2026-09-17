import React from 'react';
import { Project } from '../types';
import { X, ArrowRight, TrendingUp, Check, ExternalLink, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: (prefill: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenContact
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-[#0f0f0f] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Modal Top Header with Close */}
        <div className="sticky top-0 z-30 bg-[#0f0f0f]/90 backdrop-blur-md px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3b00]"></span>
            <span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-300">
              Case Study // {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-[#ff3b00] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Visual Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover filter contrast-115"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00] block mb-2">
              {project.industry} // {project.year}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-sans mt-2 max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-10 md:p-12 space-y-12">
          {/* Key Impact Metric Callout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono-tech uppercase tracking-widest text-neutral-400 block mb-1">
                Measured Scale Impact
              </span>
              <div className="text-4xl sm:text-5xl font-display font-black text-[#ff3b00]">
                {project.scaleMetric.value}
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-sans">
                {project.scaleMetric.detail}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenContact(project.title);
              }}
              className="px-6 py-3.5 rounded-full bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-[#ff3b00] hover:text-white transition-colors shrink-0 flex items-center gap-2"
            >
              <span>DISCUSS SIMILAR CAMPAIGN</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Narrative Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6 space-y-4">
              <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00]">
                // The Strategic Challenge
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="md:col-span-6 space-y-4">
              <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00]">
                // The Scale Up Solution
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Full Campaign Narrative */}
          <div className="space-y-4 pt-6 border-t border-neutral-800">
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00]">
              // The Campaign Story
            </h3>
            <p className="text-base text-neutral-200 font-sans leading-relaxed">
              {project.story}
            </p>
          </div>

          {/* Services Delivered */}
          <div className="space-y-4 pt-6 border-t border-neutral-800">
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00]">
              // Capabilities Deployed
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono-tech text-neutral-300 flex items-center gap-2"
                >
                  <Check className="w-3.5 h-3.5 text-[#ff3b00]" />
                  <span>{srv}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Gallery Images */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-neutral-800">
              <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00]">
                // Campaign Visual Assets & Field Stills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.galleryImages.map((imgUrl, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-800">
                    <img
                      src={imgUrl}
                      alt={`${project.title} still ${i + 1}`}
                      className="w-full h-full object-cover filter contrast-110 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { PROJECTS } from '../data/agencyData';
import { Project, CategoryType } from '../types';
import { ArrowUpRight, TrendingUp, Eye, Sparkles, Filter } from 'lucide-react';

interface WorkPortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: 'ALL', label: 'ALL' },
  { id: 'DIGITAL', label: 'DIGITAL' },
  { id: 'ATL', label: 'ATL' },
  { id: 'BTL', label: 'BTL' },
  { id: 'CONTENT', label: 'CONTENT' },
  { id: 'FILMS', label: 'FILMS' },
  { id: 'BRANDING', label: 'BRANDING' }
];

export const WorkPortfolioSection: React.FC<WorkPortfolioSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('ALL');
  const [expandedAll, setExpandedAll] = useState(false);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'ALL') return true;
    return proj.category.includes(selectedCategory);
  });

  const displayedProjects = expandedAll ? filteredProjects : filteredProjects.slice(0, 5);

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#ff3b00] rounded-sm"></span>
              <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
                // Selected Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-black text-white uppercase tracking-tight">
              WE MAKE THINGS <br className="hidden sm:inline" />
              PEOPLE <span className="text-[#ff3b00]">REMEMBER.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-${cat.id.toLowerCase()}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-mono-tech uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#ff3b00] text-white font-bold shadow-lg shadow-[#ff3b00]/30'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Editorial Projects List */}
        <div className="space-y-16 sm:space-y-24">
          {displayedProjects.map((project, idx) => {
            const isFullWidth = project.featuredSize === 'full' || idx % 3 === 0;

            if (isFullWidth) {
              return (
                /* Full Screen Immersive Project Card */
                <article
                  key={project.id}
                  id={`project-card-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="group relative cursor-pointer rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800/80 transition-all duration-700 hover:border-[#ff3b00]/60 shadow-2xl"
                >
                  {/* Hero Canvas */}
                  <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter contrast-110 brightness-90 transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                    {/* Scale Impact Badge Floating */}
                    <div className="absolute top-3 right-3 sm:top-8 sm:right-8 bg-black/85 backdrop-blur-md border border-neutral-700/80 p-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3">
                      <div>
                        <span className="text-[9px] sm:text-[10px] font-mono-tech uppercase text-neutral-400 block">
                          {project.scaleMetric.label}
                        </span>
                        <span className="text-base sm:text-xl lg:text-2xl font-display font-black text-[#ff3b00] leading-none">
                          {project.scaleMetric.value}
                        </span>
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00] shrink-0">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>

                    {/* Year & Industry Badge */}
                    <div className="absolute top-3 left-3 sm:top-8 sm:left-8 flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono-tech text-[10px] sm:text-xs text-neutral-300 max-w-[55%]">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-neutral-800 truncate">
                        {project.client}
                      </span>
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-neutral-800 text-[#ff3b00]">
                        {project.year}
                      </span>
                    </div>

                    {/* Overlay Title on Visual */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6">
                      <div className="max-w-2xl">
                        <span className="text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00] block mb-0.5 sm:mb-1">
                          {project.industry}
                        </span>
                        <h3 className="text-2xl sm:text-4xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-tight sm:leading-none group-hover:text-[#ff3b00] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-base text-neutral-300 mt-1 sm:mt-2 font-sans line-clamp-2">
                          {project.tagline}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline-block text-xs font-mono-tech uppercase tracking-wider text-neutral-400">
                          VIEW CASE STUDY
                        </span>
                        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#ff3b00] group-hover:text-white transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Narrative & Services strip */}
                  <div className="p-6 sm:p-8 bg-neutral-900/90 border-t border-neutral-800/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <p className="text-sm text-neutral-300 max-w-2xl leading-relaxed">
                      {project.story}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.slice(0, 3).map((srv, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono-tech text-neutral-400 bg-black/60 px-3 py-1.5 rounded-full border border-neutral-800"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            }

            return (
              /* Asymmetrical Split Project Card */
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group relative cursor-pointer rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800/80 hover:border-[#ff3b00]/60 transition-all duration-500 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Visual Frame */}
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono-tech text-white border border-neutral-800">
                      {project.client}
                    </div>
                  </div>

                  {/* Content Editorial Column */}
                  <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-neutral-900/60">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00]">
                          {project.industry} // {project.year}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-[#ff3b00] text-white flex items-center justify-center transition-colors">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight group-hover:text-[#ff3b00] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm font-sans text-neutral-300 leading-relaxed">
                        {project.tagline}
                      </p>

                      <p className="text-xs text-neutral-400 font-sans leading-relaxed border-t border-neutral-800/80 pt-4">
                        {project.story}
                      </p>
                    </div>

                    {/* Metrics Footer */}
                    <div className="pt-6 mt-6 border-t border-neutral-800/80">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] font-mono-tech uppercase text-neutral-500 block">
                            {project.scaleMetric.label}
                          </span>
                          <span className="text-2xl font-display font-black text-[#ff3b00]">
                            {project.scaleMetric.value}
                          </span>
                        </div>
                        <span className="text-xs font-mono-tech text-neutral-400">
                          {project.scaleMetric.detail.slice(0, 32)}...
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA: SEE ALL WORK */}
        <div className="mt-16 text-center">
          <button
            id="see-all-work-btn"
            onClick={() => setExpandedAll(!expandedAll)}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-display font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>{expandedAll ? 'COLLAPSE WORK ARCHIVE' : 'SEE ALL WORK →'}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

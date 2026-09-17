import React, { useState } from 'react';
import { INSIGHT_ARTICLES } from '../data/agencyData';
import { InsightArticle } from '../types';
import { ArrowUpRight, BookOpen, Clock, User, Sparkles } from 'lucide-react';

interface InsightsSectionProps {
  onSelectArticle: (article: InsightArticle) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'BRAND STRATEGY', 'EDITORIAL ESSAY', 'PRODUCTION & FILM'];

  const filteredArticles = INSIGHT_ARTICLES.filter((art) => {
    if (activeFilter === 'ALL') return true;
    return art.category === activeFilter;
  });

  return (
    <section id="insights" className="py-24 sm:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#ff3b00] rounded-sm"></span>
              <span className="font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
                // The Scale Up Journal
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-black text-white uppercase tracking-tight">
              THINKING BEYOND <br className="hidden sm:inline" />
              THE <span className="text-[#ff3b00]">CAMPAIGN.</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-mono-tech uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all ${
                  activeFilter === cat
                    ? 'bg-[#ff3b00] text-white font-bold shadow-md'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Publication Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Hero Editorial Feature */}
          {filteredArticles[0] && (
            <article
              id={`featured-article-${filteredArticles[0].id}`}
              onClick={() => onSelectArticle(filteredArticles[0])}
              className="lg:col-span-7 group cursor-pointer bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden hover:border-[#ff3b00]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={filteredArticles[0].coverImage}
                  alt={filteredArticles[0].title}
                  className="w-full h-full object-cover filter contrast-115 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono-tech text-[#ff3b00] border border-neutral-800">
                  {filteredArticles[0].category}
                </div>
              </div>

              <div className="p-8 sm:p-10 space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono-tech text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#ff3b00]" />
                    {filteredArticles[0].readTime}
                  </span>
                  <span>//</span>
                  <span>{filteredArticles[0].date}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight leading-tight group-hover:text-[#ff3b00] transition-colors">
                  {filteredArticles[0].title}
                </h3>

                <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                  {filteredArticles[0].excerpt}
                </p>

                <div className="pt-6 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-mono-tech font-bold text-white">
                      {filteredArticles[0].author.name.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs font-display font-bold text-white block">
                        {filteredArticles[0].author.name}
                      </span>
                      <span className="text-[10px] font-mono-tech text-neutral-500">
                        {filteredArticles[0].author.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono-tech text-white group-hover:text-[#ff3b00] transition-colors">
                    <span>READ ESSAY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Secondary Editorial Columns */}
          <div className="lg:col-span-5 space-y-6">
            {filteredArticles.slice(1).map((article) => (
              <article
                key={article.id}
                id={`article-item-${article.id}`}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech uppercase tracking-widest text-[#ff3b00]">
                      {article.category}
                    </span>
                    <span className="text-xs font-mono-tech text-neutral-500">
                      {article.readTime}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight group-hover:text-[#ff3b00] transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-300 font-sans line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-neutral-400">By {article.author.name}</span>
                  <div className="w-8 h-8 rounded-full bg-neutral-800 group-hover:bg-[#ff3b00] text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}

            {/* Editorial Newsletter / Colophon Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-900 to-[#141414] border border-neutral-800 text-xs font-mono-tech space-y-3">
              <div className="flex items-center gap-2 text-[#ff3b00]">
                <BookOpen className="w-4 h-4" />
                <span className="uppercase tracking-widest font-bold">Kolkata Advertising Dispatch</span>
              </div>
              <p className="text-neutral-400 font-sans text-xs leading-relaxed">
                Bi-weekly essays on the intersection of Eastern Indian cultural codes, modern commercial filmmaking, and multi-channel algorithmic scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

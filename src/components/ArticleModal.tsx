import React from 'react';
import { InsightArticle } from '../types';
import { X, Clock, Calendar, User, Share2, ArrowLeft } from 'lucide-react';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-[#0e0e0e] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#0e0e0e]/95 backdrop-blur-md px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </button>

          <span className="text-xs font-mono-tech text-[#ff3b00] uppercase tracking-widest">
            {article.category}
          </span>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-[#ff3b00] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Article Cover */}
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent"></div>
        </div>

        {/* Article Content */}
        <div className="p-6 sm:p-10 md:p-14 space-y-8">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-neutral-400 border-b border-neutral-800 pb-4">
            <span className="flex items-center gap-1.5 text-white">
              <Clock className="w-3.5 h-3.5 text-[#ff3b00]" />
              {article.readTime}
            </span>
            <span>//</span>
            <span>{article.date}</span>
            <span>//</span>
            <span>By {article.author.name} ({article.author.role})</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Pull quote */}
          <blockquote className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border-l-4 border-[#ff3b00] text-lg sm:text-xl font-display font-bold text-white italic">
            “{article.pullQuote}”
          </blockquote>

          {/* Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono-tech text-neutral-400"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#ff3b00] text-white font-display font-bold text-xs uppercase tracking-wider"
            >
              Close Reader
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D201C] text-[#FFF9F1] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-16 border-b border-white/10">
          <div>
            <span className="text-2xl sm:text-3xl font-serif font-semibold tracking-wider text-[#FFF9F1] block mb-4">
              MOODBREW
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-normal text-[#FFF9F1] tracking-tight leading-tight mb-3">
              GOOD MOOD. GOOD COFFEE. <br />
              <span className="italic text-[#B97849]">SEE YOU SOON.</span>
            </h3>
            <p className="text-sm sm:text-base text-[#FFF9F1]/70 font-normal max-w-md">
              “Whatever today feels like, there’s a cup for it.”
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-widest font-medium text-[#FFF9F1]/80">
              <a href="#home" className="hover:text-[#B97849] transition-colors">
                Home
              </a>
              <a href="#discover-mood" className="hover:text-[#B97849] transition-colors">
                Discover Your Mood
              </a>
              <a href="#signature-collection" className="hover:text-[#B97849] transition-colors">
                Coffee Collection
              </a>
              <a href="#mood-letter" className="hover:text-[#B97849] transition-colors">
                The MOOD LETTER
              </a>
              <a href="#our-story" className="hover:text-[#B97849] transition-colors">
                Our Story
              </a>
            </nav>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-[#FFF9F1] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9F1]/50">
          <p>© 2026 MOODBREW Café Co. All rights reserved. Crafted for the feeling.</p>
          <div className="flex items-center gap-4">
            <span>Slow Craft</span>
            <span aria-hidden="true">·</span>
            <span>Single Origin</span>
            <span aria-hidden="true">·</span>
            <span>Personal Rituals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

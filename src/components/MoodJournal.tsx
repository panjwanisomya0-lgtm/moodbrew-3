import React, { useState } from 'react';
import { JOURNAL_REFLECTIONS, JournalReflection } from '../data/coffeeData';
import { BookOpen, Sparkles } from 'lucide-react';

export const MoodJournal: React.FC = () => {
  const [activeEntry, setActiveEntry] = useState<string>(JOURNAL_REFLECTIONS[0].id);

  return (
    <section id="mood-journal" className="py-24 md:py-36 bg-[#FBF8F3] border-t border-[#2D201C]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#B97849] mb-3">
            <span>Chapter 05</span>
            <span aria-hidden="true">·</span>
            <span>Reflections & Marginalia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2D201C] tracking-tight leading-tight mb-4">
            LITTLE THOUGHTS FOR THE IN-BETWEEN.
          </h2>
          <p className="text-base sm:text-lg text-[#2D201C]/75 font-normal leading-relaxed">
            Short reflections written for the space between the kettle boiling and the last cooling sip.
          </p>
        </div>

        {/* Magazine / Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Index Sidebar (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#2D201C]/50 mb-2">
              Table of Contents
            </p>
            {JOURNAL_REFLECTIONS.map((entry, index) => {
              const isActive = activeEntry === entry.id;
              return (
                <button
                  key={entry.id}
                  onClick={() => setActiveEntry(entry.id)}
                  className={`text-left p-4 rounded-xl transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-[#F5EFE6] border-[#2D201C]/20 shadow-xs translate-x-1'
                      : 'border-transparent hover:bg-[#F5EFE6]/50 hover:border-[#2D201C]/10'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#2D201C]/50 mb-1">
                    <span>Entry 0{index + 1}</span>
                    <span className="font-serif italic">{entry.moment.split('·')[0]}</span>
                  </div>
                  <p className="font-serif text-lg font-medium text-[#2D201C]">
                    {entry.theme}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Reading Folio (8 cols) */}
          <div className="lg:col-span-8">
            {JOURNAL_REFLECTIONS.map((entry) => {
              if (entry.id !== activeEntry) return null;
              return (
                <article
                  key={entry.id}
                  className="bg-[#FFF9F1] rounded-2xl p-8 sm:p-12 border border-[#2D201C]/10 shadow-sm relative overflow-hidden animate-in fade-in duration-300"
                >
                  <div className="flex items-center justify-between pb-6 border-b border-[#2D201C]/10 text-xs text-[#2D201C]/60">
                    <span className="tracking-widest uppercase text-[#B97849] font-medium">
                      {entry.moment}
                    </span>
                    <span>{entry.author}</span>
                  </div>

                  <div className="py-8">
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#2D201C] mb-6">
                      {entry.theme}
                    </h3>

                    <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#2D201C] leading-snug pl-5 border-l-2 border-[#B97849] mb-8">
                      “{entry.quote}”
                    </blockquote>

                    <p className="text-base sm:text-lg text-[#2D201C]/80 leading-relaxed font-normal">
                      {entry.reflection}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#2D201C]/10 flex items-center justify-between text-xs text-[#2D201C]/60">
                    <span className="font-serif italic">Take your time. The world can wait.</span>
                    <div className="flex items-center gap-1.5 text-[#B97849]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Moodbrew Field Notes</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

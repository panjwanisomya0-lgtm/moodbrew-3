import React from 'react';
import { MOOD_CATEGORIES, MoodCategoryItem } from '../data/coffeeData';
import { Check } from 'lucide-react';

interface DiscoverMoodProps {
  selectedMoodId: string;
  onSelectMood: (moodId: string) => void;
}

export const DiscoverMood: React.FC<DiscoverMoodProps> = ({
  selectedMoodId,
  onSelectMood,
}) => {
  return (
    <section id="discover-mood" className="py-20 md:py-28 bg-[#F5EFE6]/40 border-y border-[#2D201C]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#B97849] mb-3">
            <span>Chapter 01</span>
            <span aria-hidden="true">·</span>
            <span>Emotional Palette</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2D201C] tracking-tight leading-tight mb-4">
            SO, HOW ARE WE FEELING?
          </h2>
          <p className="text-base sm:text-lg text-[#2D201C]/75 font-normal leading-relaxed">
            Pick the feeling that finds you today. We’ll find the cup that belongs with it.
          </p>
        </div>

        {/* Asymmetrical Editorial Mood Board */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {MOOD_CATEGORIES.map((mood, index) => {
            const isSelected = selectedMoodId === mood.id;

            // Asymmetric sizing & span allocation:
            // Item 0 (Slow Morning): 7 cols
            // Item 1 (Need a Reset): 5 cols
            // Item 2 (Main Character): 4 cols
            // Item 3 (Deep Focus): 4 cols
            // Item 4 (Soft Comfort): 4 cols
            // Item 5 (Feeling Bold): 12 cols banner
            let colSpan = 'md:col-span-4';
            if (index === 0) colSpan = 'md:col-span-7';
            else if (index === 1) colSpan = 'md:col-span-5';
            else if (index === 5) colSpan = 'md:col-span-12 lg:col-span-12';

            return (
              <button
                key={mood.id}
                onClick={() => onSelectMood(mood.id)}
                type="button"
                className={`group relative text-left p-6 sm:p-8 rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${colSpan} ${
                  isSelected
                    ? 'ring-2 ring-[#2D201C] shadow-lg transform -translate-y-1'
                    : 'hover:shadow-md hover:-translate-y-0.5'
                }`}
                style={{
                  backgroundColor: isSelected ? mood.bgHex : `${mood.bgHex}DD`,
                  color: mood.textHex,
                }}
              >
                {/* Decorative ambient subtle circle */}
                <div
                  className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full opacity-20 pointer-events-none transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundColor: mood.accentHex }}
                  aria-hidden="true"
                />

                {/* Top bar inside card */}
                <div className="relative z-10 flex items-start justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-lg italic opacity-70">
                      {mood.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-white/40 backdrop-blur-xs">
                      {mood.colorName}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isSelected
                        ? 'bg-[#2D201C] text-white'
                        : 'border border-current opacity-40 group-hover:opacity-100'
                    }`}
                  >
                    {isSelected ? (
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-serif font-medium tracking-tight mb-2">
                    {mood.title}
                  </h3>
                  <p className="text-sm sm:text-base opacity-90 leading-relaxed mb-4 max-w-lg">
                    {mood.feeling}
                  </p>

                  <div className="pt-4 border-t border-current/15 flex items-center justify-between text-xs tracking-wider">
                    <span className="opacity-75 uppercase">Paired Cup</span>
                    <span className="font-semibold">{mood.coffeeName}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

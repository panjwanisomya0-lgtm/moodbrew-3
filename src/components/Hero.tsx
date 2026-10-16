import React from 'react';
import { ArrowDown, Compass, Coffee } from 'lucide-react';

interface HeroProps {
  onDiscoverClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, onExploreClick }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Subtle top editorial label */}
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-[#B97849] mb-6">
          <span>Emotional Coffee Pairing</span>
          <span aria-hidden="true">·</span>
          <span>Slow Living & Rituals</span>
          <span aria-hidden="true">·</span>
          <span>Autumn / Winter Selection</span>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-normal leading-[1.08] text-[#2D201C] tracking-tight text-balance mb-8">
              THERE’S A CUP <br />
              <span className="italic font-normal text-[#B97849]">FOR THE FEELING.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#2D201C]/80 font-normal leading-relaxed max-w-xl mb-10 text-pretty">
              Slow mornings, long days, little celebrations. Whatever today feels like, there’s a coffee for your kind of moment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onDiscoverClick}
                className="px-7 py-4 text-xs font-semibold tracking-widest uppercase text-[#FFF9F1] bg-[#2D201C] rounded-full hover:bg-[#B97849] transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 group whitespace-nowrap"
              >
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
                <span>Find Your Mood</span>
              </button>

              <button
                onClick={onExploreClick}
                className="px-7 py-4 text-xs font-semibold tracking-widest uppercase text-[#2D201C] border border-[#2D201C]/25 rounded-full hover:bg-[#2D201C]/5 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Coffee className="w-4 h-4 text-[#B97849]" />
                <span>Explore the Collection</span>
              </button>
            </div>

            {/* Editorial Quick Markers */}
            <div className="pt-8 border-t border-[#2D201C]/10 grid grid-cols-3 gap-6 text-[#2D201C]">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#2D201C]">18</p>
                <p className="text-xs text-[#2D201C]/60 tracking-wider uppercase mt-1">Unique Cups</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#2D201C]">06</p>
                <p className="text-xs text-[#2D201C]/60 tracking-wider uppercase mt-1">Mood Archetypes</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#2D201C]">100%</p>
                <p className="text-xs text-[#2D201C]/60 tracking-wider uppercase mt-1">Single Origin & Botanical</p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Styled Coffee Photograph (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Background tonal decorative offset plate */}
              <div
                className="absolute -inset-3 bg-[#BFCAB8]/20 rounded-2xl transform rotate-1 transition-transform group-hover:rotate-0 duration-500"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-xl shadow-xl aspect-4/3 sm:aspect-5/4 lg:aspect-4/5 bg-[#EFE9DF]">
                <img
                  src="/src/assets/images/hero_artisanal_latte_1792164452790.jpg"
                  alt="Ceramic coffee cup with delicate latte art resting on a warm wooden café table in soft morning light"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle caption badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FBF8F3]/95 backdrop-blur-xs rounded-lg border border-[#2D201C]/5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-[#B97849] font-medium">Morning Special</p>
                      <p className="font-serif text-base text-[#2D201C]">Honey Oat Warmth · 08:30 AM</p>
                    </div>
                    <span className="text-xs text-[#2D201C]/60 italic font-serif">Gentle & Unhurried</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle scroll cue */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={onDiscoverClick}
            aria-label="Scroll to discover mood"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#2D201C]/50 hover:text-[#B97849] transition-colors py-2"
          >
            <span>Scroll to begin your emotional journey</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

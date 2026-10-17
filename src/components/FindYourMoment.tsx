import React from 'react';
import { Compass, Coffee, Clock, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets/assets';

interface FindYourMomentProps {
  onFindMoodClick: () => void;
  onExploreCollectionClick: () => void;
}

export const FindYourMoment: React.FC<FindYourMomentProps> = ({
  onFindMoodClick,
  onExploreCollectionClick,
}) => {
  return (
    <section className="py-24 md:py-36 bg-[#F5EFE6]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-[#2D201C] rounded-3xl text-[#FFF9F1] p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Subtle radial ambient warmth */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[#B97849]/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#B97849] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Invitation</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif text-[#FFF9F1] tracking-tight leading-tight mb-6">
                YOUR NEXT LITTLE COFFEE MOMENT STARTS HERE.
              </h2>

              <p className="text-base sm:text-lg text-[#FFF9F1]/80 leading-relaxed mb-8 max-w-xl">
                Whether you have five quiet minutes before the world wakes up or an afternoon to dream, there’s an extraction tuned precisely to you.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={onFindMoodClick}
                  className="px-7 py-4 text-xs font-semibold tracking-widest uppercase text-[#2D201C] bg-[#FFF9F1] rounded-full hover:bg-[#B97849] hover:text-white transition-all duration-200 shadow-md flex items-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>Find Your Mood</span>
                </button>

                <button
                  onClick={onExploreCollectionClick}
                  className="px-7 py-4 text-xs font-semibold tracking-widest uppercase text-[#FFF9F1] border border-[#FFF9F1]/30 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Coffee className="w-4 h-4 text-[#B97849]" />
                  <span>Explore All 18 Cups</span>
                </button>
              </div>

              {/* Pop-up tasting room notice placeholder */}
              <div className="pt-8 border-t border-[#FFF9F1]/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#FFF9F1]/70">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#B97849] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium uppercase tracking-wider text-[11px]">
                      Tasting Room Pop-Up (Concept)
                    </p>
                    <p className="mt-0.5">Seasonal Studio Flights · Thu–Sun · 8:00 AM – 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#B97849] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium uppercase tracking-wider text-[11px]">
                      The Sensory Experience
                    </p>
                    <p className="mt-0.5">Pour-over flights, single-estate beans, and personal letters</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mini Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden aspect-4/3 shadow-xl border border-white/10">
                <img
                  src={IMAGES.hero}
                  alt="Ceramic coffee cup on wooden table"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

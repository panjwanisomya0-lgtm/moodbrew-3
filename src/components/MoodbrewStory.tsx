import React from 'react';
import { Heart, Sparkles, Feather } from 'lucide-react';
import { IMAGES } from '../assets/assets';

export const MoodbrewStory: React.FC = () => {
  return (
    <section id="our-story" className="py-20 md:py-32 bg-[#FBF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Café Editorial (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative group">
              <div
                className="absolute -inset-4 bg-[#BFCAB8]/30 rounded-3xl transform -rotate-1 transition-transform group-hover:rotate-0 duration-500"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 sm:aspect-5/4 bg-[#EFE9DF]">
                <img
                  src={IMAGES.storyCafe}
                  alt="Atmospheric sunlit MOODBREW café counter with warm natural wood and ceramic shelves"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-4 left-4 p-4 bg-[#FBF8F3]/95 backdrop-blur-xs rounded-xl border border-[#2D201C]/5 shadow-sm max-w-xs">
                  <p className="text-[11px] uppercase tracking-widest text-[#B97849] font-semibold mb-1">
                    The Tasting House
                  </p>
                  <p className="text-xs text-[#2D201C]/80 font-serif leading-snug">
                    Designed for unhurried conversations, sensory pauses, and honest moments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Brand Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#B97849] mb-4">
              <span>Chapter 04</span>
              <span aria-hidden="true">·</span>
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#2D201C] tracking-tight leading-tight mb-8">
              COFFEE IS THE CUP. <br />
              <span className="italic font-normal text-[#B97849]">THE MOMENT IS YOURS.</span>
            </h2>

            <div className="space-y-6 text-[#2D201C]/85 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                MOODBREW began with a little thought: what if choosing coffee felt more personal?
              </p>
              <p>
                Some days need a gentle beginning. Some need a fresh start. Others call for a little comfort or something unexpected.
              </p>
              <p>
                We believe coffee can become part of those everyday moments. Not just another order, but a small ritual that makes the day feel a little more like yours.
              </p>
              <p className="font-serif italic text-xl text-[#2D201C] pt-2">
                “Whatever the mood, there’s a cup for the feeling.”
              </p>
            </div>

            {/* Pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#2D201C]/10">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#BFCAB8]/30 flex items-center justify-center text-[#2D201C] mb-3">
                  <Feather className="w-4 h-4 text-[#2D201C]" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#2D201C] mb-1">
                  Gentle Craft
                </h3>
                <p className="text-xs text-[#2D201C]/70 leading-relaxed">
                  Slow roasts that preserve floral sweetness and terroir notes.
                </p>
              </div>

              <div>
                <div className="w-8 h-8 rounded-full bg-[#D5A7A1]/30 flex items-center justify-center text-[#2D201C] mb-3">
                  <Heart className="w-4 h-4 text-[#2D201C]" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#2D201C] mb-1">
                  Emotional Alignment
                </h3>
                <p className="text-xs text-[#2D201C]/70 leading-relaxed">
                  Coffee paired deliberately with temperature, texture, and state of mind.
                </p>
              </div>

              <div>
                <div className="w-8 h-8 rounded-full bg-[#B9CFD8]/30 flex items-center justify-center text-[#2D201C] mb-3">
                  <Sparkles className="w-4 h-4 text-[#2D201C]" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#2D201C] mb-1">
                  Intentional Space
                </h3>
                <p className="text-xs text-[#2D201C]/70 leading-relaxed">
                  A sanctuary from hurry, whether in person or visiting this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

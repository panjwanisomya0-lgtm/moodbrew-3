import React from 'react';
import { MOOD_CATEGORIES, SIGNATURE_COFFEES, CoffeeDrink, MoodCategoryItem } from '../data/coffeeData';
import { Sparkles, ArrowRight, ShoppingBag, Thermometer, MapPin } from 'lucide-react';

interface YourMoodYourCoffeeProps {
  selectedMoodId: string;
  onMeetCoffee: (drink: CoffeeDrink) => void;
  onAddToBag: (drink: CoffeeDrink) => void;
}

export const YourMoodYourCoffee: React.FC<YourMoodYourCoffeeProps> = ({
  selectedMoodId,
  onMeetCoffee,
  onAddToBag,
}) => {
  const currentMood: MoodCategoryItem =
    MOOD_CATEGORIES.find((m) => m.id === selectedMoodId) || MOOD_CATEGORIES[0];

  const currentCoffee: CoffeeDrink =
    SIGNATURE_COFFEES.find((c) => c.id === currentMood.coffeeId) || SIGNATURE_COFFEES[0];

  return (
    <section id="your-mood-your-coffee" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#B97849] mb-3">
            <span>Chapter 02</span>
            <span aria-hidden="true">·</span>
            <span>The Match</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2D201C] tracking-tight leading-tight mb-4">
            MADE FOR THE WAY YOU FEEL.
          </h2>
          <p className="text-base sm:text-lg text-[#2D201C]/75 font-normal leading-relaxed">
            Your mood calls for an intentional extraction. Synchronized in flavour, temperature, and soul.
          </p>
        </div>

        {/* Dynamic Recommendation Panel */}
        <div
          className="rounded-3xl p-6 sm:p-10 lg:p-14 transition-colors duration-500 shadow-xl border border-[#2D201C]/8"
          style={{
            backgroundColor: `${currentMood.bgHex}25`,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column (5 cols) */}
            <div className="lg:col-span-5 relative group">
              <div
                className="absolute -inset-2 rounded-2xl opacity-40 blur-xs transition-opacity duration-300"
                style={{ backgroundColor: currentMood.bgHex }}
                aria-hidden="true"
              />
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg bg-[#EFE9DF]">
                <img
                  key={currentCoffee.image}
                  src={currentCoffee.image}
                  alt={`${currentCoffee.name} - ${currentCoffee.visualDirection}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs tracking-wider uppercase backdrop-blur-md"
                    style={{
                      backgroundColor: currentMood.bgHex,
                      color: currentMood.textHex,
                    }}
                  >
                    {currentMood.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative & Sensory Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider text-[#2D201C]/70 mb-3">
                  <span className="font-semibold text-[#B97849]">Drink {currentCoffee.number}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Thermometer className="w-3.5 h-3.5" />
                    {currentCoffee.temp}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {currentCoffee.origin}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2D201C] font-normal tracking-tight mb-4">
                  {currentCoffee.name}
                </h3>

                {/* Emotional Description */}
                <blockquote className="text-lg sm:text-xl font-serif italic text-[#2D201C]/90 leading-relaxed pl-4 border-l-2 border-[#B97849] mb-6">
                  “{currentCoffee.emotionalDescription}”
                </blockquote>

                {/* Flavour Notes List */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-widest font-semibold text-[#2D201C]/60 mb-2.5">
                    Flavour Profile Notes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentCoffee.flavourProfile.map((note) => (
                      <span
                        key={note}
                        className="text-xs font-medium px-3 py-1.5 rounded-md bg-[#FFF9F1] border border-[#2D201C]/10 text-[#2D201C] shadow-2xs"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#2D201C]/10">
                <button
                  onClick={() => onMeetCoffee(currentCoffee)}
                  className="px-7 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#FFF9F1] bg-[#2D201C] rounded-full hover:bg-[#B97849] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Meet Your Coffee</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  onClick={() => onAddToBag(currentCoffee)}
                  className="px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#2D201C] border border-[#2D201C]/30 rounded-full hover:bg-white transition-colors flex items-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#B97849]" />
                  <span>Add to Tasting Bag · {currentCoffee.price}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

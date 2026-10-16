import React, { useState } from 'react';
import { CoffeeDrink } from '../data/coffeeData';
import { X, ShoppingBag, Thermometer, MapPin, Sparkles, Check } from 'lucide-react';

interface DrinkDetailModalProps {
  drink: CoffeeDrink | null;
  onClose: () => void;
  onAddToBag: (drink: CoffeeDrink, options?: { milk: string; sweetness: string }) => void;
}

export const DrinkDetailModal: React.FC<DrinkDetailModalProps> = ({
  drink,
  onClose,
  onAddToBag,
}) => {
  const [selectedMilk, setSelectedMilk] = useState('Oat Cream (Recommended)');
  const [selectedSweetness, setSelectedSweetness] = useState('Balanced');
  const [added, setAdded] = useState(false);

  if (!drink) return null;

  const handleAdd = () => {
    onAddToBag(drink, { milk: selectedMilk, sweetness: selectedSweetness });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#2D201C]/60 backdrop-blur-xs transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#FBF8F3] rounded-3xl shadow-2xl border border-[#2D201C]/15 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#2D201C]/10 hover:bg-[#2D201C]/20 text-[#2D201C] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Image (5 cols) */}
          <div className="md:col-span-5 relative bg-[#EFE9DF] min-h-[260px] md:min-h-full">
            <img
              src={drink.image}
              alt={drink.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-[#2D201C] shadow-2xs">
                Drink {drink.number}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#2D201C]/80 backdrop-blur-xs text-white text-xs">
              <p className="font-serif italic">“{drink.visualDirection}”</p>
            </div>
          </div>

          {/* Right Column: Details & Customizer (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#2D201C]/70 mb-2">
                <span className="font-semibold text-[#B97849] uppercase tracking-wider">
                  Mood: {drink.mood}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Thermometer className="w-3.5 h-3.5" />
                  {drink.temp}
                </span>
              </div>

              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2D201C] font-normal">
                  {drink.name}
                </h3>
                <span className="text-xl font-semibold text-[#2D201C] tabular-nums">
                  {drink.price}
                </span>
              </div>

              <blockquote className="font-serif italic text-sm text-[#2D201C]/80 leading-relaxed mb-5 pl-3 border-l-2 border-[#B97849]">
                “{drink.emotionalDescription}”
              </blockquote>

              {/* Barista Notes */}
              <div className="p-3.5 rounded-xl bg-[#F5EFE6] text-xs text-[#2D201C]/80 mb-5">
                <p className="font-semibold uppercase tracking-wider text-[#B97849] text-[10px] mb-1">
                  Barista Extraction Notes
                </p>
                <p>{drink.notes}</p>
                <p className="mt-2 text-[#2D201C]/60 flex items-center gap-1 text-[11px]">
                  <MapPin className="w-3 h-3 text-[#B97849]" />
                  Origin: {drink.origin}
                </p>
              </div>

              {/* Customization Options */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2D201C]/70 mb-1.5">
                    Milk Base
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {['Oat Cream', 'Whole Milk', 'Almond Silk'].map((milk) => (
                      <button
                        key={milk}
                        type="button"
                        onClick={() => setSelectedMilk(milk)}
                        className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                          selectedMilk.includes(milk.split(' ')[0])
                            ? 'bg-[#2D201C] text-white border-[#2D201C]'
                            : 'bg-white text-[#2D201C] border-[#2D201C]/15 hover:border-[#2D201C]/40'
                        }`}
                      >
                        {milk}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2D201C]/70 mb-1.5">
                    Sweetness Level
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {['Standard', 'Balanced', 'Unsweetened'].map((sw) => (
                      <button
                        key={sw}
                        type="button"
                        onClick={() => setSelectedSweetness(sw)}
                        className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                          selectedSweetness === sw
                            ? 'bg-[#2D201C] text-white border-[#2D201C]'
                            : 'bg-white text-[#2D201C] border-[#2D201C]/15 hover:border-[#2D201C]/40'
                        }`}
                      >
                        {sw}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-4 border-t border-[#2D201C]/10 flex items-center justify-between gap-4">
              <span className="text-xs text-[#2D201C]/60">
                Freshly pulled upon order
              </span>

              <button
                onClick={handleAdd}
                className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-[#2D201C] hover:bg-[#B97849] transition-colors flex items-center gap-2 shadow-sm"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Tasting Bag · {drink.price}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

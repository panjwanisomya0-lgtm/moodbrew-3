import React, { useState } from 'react';
import { CoffeeDrink } from '../data/coffeeData';
import { X, Trash2, Plus, Minus, ArrowRight, Check, Sparkles } from 'lucide-react';

export interface BagItem {
  drink: CoffeeDrink;
  quantity: number;
  milk?: string;
  sweetness?: string;
}

interface RitualBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BagItem[];
  onUpdateQuantity: (drinkId: string, quantity: number) => void;
  onClearBag: () => void;
}

export const RitualBagDrawer: React.FC<RitualBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearBag,
}) => {
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const totalNumeric = items.reduce((sum, item) => {
    const priceNum = parseFloat(item.drink.price.replace('$', '')) || 0;
    return sum + priceNum * item.quantity;
  }, 0);

  // Analyze moods present in the bag
  const moodBreakdown = items.map((i) => i.drink.mood);
  const uniqueMoods = Array.from(new Set(moodBreakdown));

  const handleCheckout = () => {
    setIsOrdered(true);
    setTimeout(() => {
      onClearBag();
      setIsOrdered(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#2D201C]/50 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF8F3] shadow-2xl border-l border-[#2D201C]/15 flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#2D201C]/10 flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B97849]">
                Your Coffee Ritual
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#2D201C]">
                Tasting Flight ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#2D201C]/10 text-[#2D201C] transition-colors"
              aria-label="Close bag drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {isOrdered ? (
              <div className="py-20 text-center animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#BFCAB8]/30 text-[#223122] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h4 className="font-serif text-3xl text-[#2D201C] mb-2">
                  Ritual Confirmed
                </h4>
                <p className="text-sm text-[#2D201C]/75 max-w-xs mx-auto mb-4">
                  Your mood-based coffee flight is being prepared with intention at the bar.
                </p>
                <p className="text-xs uppercase tracking-widest text-[#B97849] font-semibold">
                  Estimated Warmth: 4–6 Minutes
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-[#2D201C] mb-2">Your Bag is Empty</p>
                <p className="text-sm text-[#2D201C]/60 mb-6 max-w-xs mx-auto">
                  Select a mood or explore the 18 cups to begin assembling your emotional coffee flight.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2D201C] rounded-full hover:bg-[#B97849] transition-colors"
                >
                  Discover Coffees
                </button>
              </div>
            ) : (
              <>
                {/* Mood Palette Harmony Badge */}
                {uniqueMoods.length > 0 && (
                  <div className="p-4 rounded-xl bg-[#F5EFE6] border border-[#2D201C]/10 text-xs text-[#2D201C]/80">
                    <div className="flex items-center gap-1.5 text-[#B97849] font-semibold mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Today’s Emotional Palette</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      You’ve assembled cups for: <span className="font-medium text-[#2D201C]">{uniqueMoods.join(', ')}</span>.
                    </p>
                  </div>
                )}

                {/* Items List */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.drink.id}
                      className="p-4 rounded-xl bg-white border border-[#2D201C]/8 shadow-2xs flex gap-4 items-center"
                    >
                      <img
                        src={item.drink.image}
                        alt={item.drink.name}
                        className="w-16 h-16 rounded-lg object-cover bg-[#EFE9DF] shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-[#B97849] font-medium truncate">
                          {item.drink.mood} · {item.drink.temp}
                        </p>
                        <h5 className="font-serif text-base font-semibold text-[#2D201C] truncate">
                          {item.drink.name}
                        </h5>
                        <p className="text-xs text-[#2D201C]/60 tabular-nums">
                          {item.drink.price} each
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.drink.id, item.quantity - 1)}
                          className="p-1 rounded-md bg-[#F5EFE6] hover:bg-[#EAE0D3] text-[#2D201C] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-semibold tabular-nums w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.drink.id, item.quantity + 1)}
                          className="p-1 rounded-md bg-[#F5EFE6] hover:bg-[#EAE0D3] text-[#2D201C] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {!isOrdered && items.length > 0 && (
            <div className="p-6 border-t border-[#2D201C]/10 bg-[#FFF9F1] space-y-4">
              <div className="flex items-center justify-between text-sm text-[#2D201C]">
                <span>Tasting Flight Subtotal</span>
                <span className="font-semibold text-base tabular-nums">
                  ${totalNumeric.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-[#2D201C]/60 italic font-serif">
                Complimentary personalized mood letter card printed with every flight order.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={onClearBag}
                  className="p-3 text-xs uppercase tracking-wider font-medium text-[#2D201C]/60 hover:text-rose-700 transition-colors"
                  title="Clear bag"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#2D201C] hover:bg-[#B97849] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Order Tasting Flight</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

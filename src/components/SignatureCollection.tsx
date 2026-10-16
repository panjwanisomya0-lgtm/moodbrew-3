import React, { useState, useMemo } from 'react';
import { SIGNATURE_COFFEES, CoffeeDrink } from '../data/coffeeData';
import { Search, Eye, Plus, Check } from 'lucide-react';

interface SignatureCollectionProps {
  onSelectDrink: (drink: CoffeeDrink) => void;
  onAddToBag: (drink: CoffeeDrink) => void;
  bagDrinkIds: string[];
}

type FilterCategory = 'All Coffees' | 'Comfort' | 'Refresh' | 'Focus' | 'Indulgence' | 'Adventure';

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({
  onSelectDrink,
  onAddToBag,
  bagDrinkIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All Coffees');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: FilterCategory[] = [
    'All Coffees',
    'Comfort',
    'Refresh',
    'Focus',
    'Indulgence',
    'Adventure',
  ];

  const filteredCoffees = useMemo(() => {
    return SIGNATURE_COFFEES.filter((coffee) => {
      const matchesCategory =
        activeCategory === 'All Coffees' || coffee.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        coffee.name.toLowerCase().includes(query) ||
        coffee.mood.toLowerCase().includes(query) ||
        coffee.flavourSummary.toLowerCase().includes(query) ||
        coffee.flavourProfile.some((p) => p.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="signature-collection" className="py-20 md:py-28 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#B97849] mb-3">
              <span>Chapter 03</span>
              <span aria-hidden="true">·</span>
              <span>The Complete Archive</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#2D201C] tracking-tight leading-tight mb-4">
              THE LITTLE THINGS WE BREW.
            </h2>
            <p className="text-base sm:text-lg text-[#2D201C]/75 font-normal leading-relaxed">
              Eighteen different cups. A hundred little moments. Find the one that feels like yours.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#2D201C]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by flavor, mood, bean..."
              className="w-full pl-10 pr-4 py-2.5 text-xs font-medium rounded-full bg-[#F5EFE6] border border-[#2D201C]/15 text-[#2D201C] placeholder:text-[#2D201C]/40 focus:outline-hidden focus:border-[#B97849] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#2D201C]/50 hover:text-[#2D201C]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Segmented Control Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-[#2D201C]/10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-full transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#2D201C] text-[#FFF9F1] shadow-xs'
                  : 'text-[#2D201C]/70 hover:text-[#2D201C] hover:bg-[#2D201C]/5'
              }`}
            >
              {cat}
              {cat === 'All Coffees' && ` (${SIGNATURE_COFFEES.length})`}
            </button>
          ))}
        </div>

        {/* Varied Editorial Grid: alternating layout balance */}
        {filteredCoffees.length === 0 ? (
          <div className="py-20 text-center bg-[#F5EFE6]/50 rounded-2xl border border-dashed border-[#2D201C]/20">
            <p className="font-serif text-2xl text-[#2D201C] mb-2">No coffee found</p>
            <p className="text-sm text-[#2D201C]/60 mb-6">
              No matching cups for “{searchQuery}” in {activeCategory}.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All Coffees');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#2D201C] rounded-full hover:bg-[#B97849] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCoffees.map((drink, idx) => {
              const isInBag = bagDrinkIds.includes(drink.id);
              // Slight visual rhythm: first item or every 6th item can have an editorial highlight tag
              const isHighlight = idx === 0 || idx === 6 || idx === 12;

              return (
                <div
                  key={drink.id}
                  className={`group flex flex-col justify-between bg-[#FFF9F1] rounded-2xl overflow-hidden border border-[#2D201C]/8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    isHighlight ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  {/* Image container */}
                  <div className="relative aspect-4/3 overflow-hidden bg-[#EFE9DF]">
                    <img
                      src={drink.image}
                      alt={`${drink.name} - ${drink.visualDirection}`}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient scrim at top for tags */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Drink number & temperature */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                      <span className="font-serif text-sm italic font-medium tracking-wider drop-shadow-xs">
                        No. {drink.number}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-xs text-[11px] font-medium tracking-wider uppercase">
                        {drink.temp}
                      </span>
                    </div>

                    {/* Quick view overlay button on hover */}
                    <div className="absolute inset-0 bg-[#2D201C]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={() => onSelectDrink(drink)}
                        className="px-4 py-2 bg-white/95 text-[#2D201C] text-xs font-semibold rounded-full shadow-md hover:bg-[#2D201C] hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Drink</span>
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Mood label */}
                      <div className="flex items-center justify-between text-xs text-[#2D201C]/60 mb-2">
                        <span className="uppercase tracking-widest text-[#B97849] font-medium">
                          Mood: {drink.mood}
                        </span>
                        <span className="tabular-nums font-medium text-[#2D201C]">
                          {drink.price}
                        </span>
                      </div>

                      <h3
                        onClick={() => onSelectDrink(drink)}
                        className="text-xl sm:text-2xl font-serif text-[#2D201C] group-hover:text-[#B97849] transition-colors cursor-pointer mb-2.5"
                      >
                        {drink.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#2D201C]/75 line-clamp-2 leading-relaxed mb-4">
                        {drink.emotionalDescription}
                      </p>

                      {/* Flavor notes */}
                      <p className="text-xs text-[#2D201C]/60 italic font-serif border-t border-[#2D201C]/8 pt-3">
                        {drink.flavourSummary}
                      </p>
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-6 pt-4 border-t border-[#2D201C]/8 flex items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectDrink(drink)}
                        className="text-xs font-semibold uppercase tracking-wider text-[#2D201C] hover:text-[#B97849] transition-colors"
                      >
                        Story & Notes
                      </button>

                      <button
                        onClick={() => onAddToBag(drink)}
                        className={`p-2 rounded-full transition-colors ${
                          isInBag
                            ? 'bg-[#BFCAB8] text-[#223122]'
                            : 'bg-[#2D201C] text-[#FFF9F1] hover:bg-[#B97849]'
                        }`}
                        title={isInBag ? 'In tasting bag' : 'Add to tasting bag'}
                        aria-label={`Add ${drink.name} to tasting bag`}
                      >
                        {isInBag ? (
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

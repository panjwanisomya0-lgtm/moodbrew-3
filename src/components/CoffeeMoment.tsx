import React from 'react';

export const CoffeeMoment: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#F5EFE6]/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#B97849] mb-4">
            An Interlude
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2D201C] tracking-tight leading-tight mb-6">
            TAKE A MOMENT. MAKE IT YOURS.
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-[#2D201C]/80 leading-relaxed text-balance">
            “Not every moment needs a plan. Sometimes, a good cup is enough.”
          </p>
        </div>

        {/* Full-width atmospheric visual */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-16/9 bg-[#2D201C]">
          <img
            src="/src/assets/images/moment_sunlit_table_1792164454048.jpg"
            alt="Warm hands gently cupping a handcrafted ceramic mug with coffee beans and open journal on a sunlit wooden table"
            className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />

          {/* Minimalist corner caption */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white/90 drop-shadow-md">
            <p className="text-[11px] uppercase tracking-widest font-medium opacity-75">
              Stillness in Motion
            </p>
            <p className="font-serif text-lg sm:text-xl">
              Morning Light & Roasted Bourbon Typica
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

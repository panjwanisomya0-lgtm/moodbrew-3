import React, { useState, useRef } from 'react';
import { MOOD_LETTERS, SIGNATURE_COFFEES, CoffeeDrink } from '../data/coffeeData';
import { RefreshCw, Copy, Download, Check, Sparkles, Coffee } from 'lucide-react';

interface MoodLetterProps {
  onSelectDrink: (drink: CoffeeDrink) => void;
  onAddToBag: (drink: CoffeeDrink) => void;
}

export const MoodLetter: React.FC<MoodLetterProps> = ({ onSelectDrink, onAddToBag }) => {
  const [selectedMoodId, setSelectedMoodId] = useState<string>('slow');
  const [letterIndex, setLetterIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const letterRef = useRef<HTMLDivElement>(null);

  const activeMoodGroup = MOOD_LETTERS.find((m) => m.id === selectedMoodId) || MOOD_LETTERS[0];
  const activeLetter = activeMoodGroup.letters[letterIndex % activeMoodGroup.letters.length];
  const pairedCoffee =
    SIGNATURE_COFFEES.find((c) => c.id === activeLetter.coffeeRecommendationId) ||
    SIGNATURE_COFFEES[0];

  const handleNextLetter = () => {
    setLetterIndex((prev) => (prev + 1) % activeMoodGroup.letters.length);
  };

  const handleCopy = async () => {
    const textToCopy = `YOUR MOOD LETTER · NO. ${activeLetter.letterNo}\n\n${activeLetter.salutation}\n\n"${activeLetter.message}"\n\nYour coffee: ${pairedCoffee.name}\nA little reminder: "${activeLetter.reminder}"\n\n— MOODBREW ("There's a cup for the feeling")`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // High fidelity canvas download generator
  const handleSaveAsImage = () => {
    setIsDownloading(true);
    try {
      const canvas = document.createElement('canvas');
      const width = 1000;
      const height = 1250;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      // 1. Paper Background with warm cream texture
      ctx.fillStyle = '#FBF8F3';
      ctx.fillRect(0, 0, width, height);

      // Subtle border line
      ctx.strokeStyle = '#2D201C';
      ctx.lineWidth = 2;
      ctx.strokeRect(40, 40, width - 80, height - 80);

      ctx.strokeStyle = '#2D201C';
      ctx.lineWidth = 0.5;
      ctx.strokeRect(48, 48, width - 96, height - 96);

      // 2. Header watermark & branding
      ctx.fillStyle = '#B97849';
      ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('MOODBREW', width / 2, 120);

      ctx.fillStyle = '#2D201C';
      ctx.font = 'normal 15px "Plus Jakarta Sans", sans-serif';
      ctx.letterSpacing = '3px';
      ctx.fillText(`YOUR MOOD LETTER · NO. ${activeLetter.letterNo}`, width / 2, 155);

      // Decorative divider
      ctx.beginPath();
      ctx.moveTo(width / 2 - 60, 180);
      ctx.lineTo(width / 2 + 60, 180);
      ctx.strokeStyle = '#B97849';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Salutation
      ctx.fillStyle = '#2D201C';
      ctx.font = 'italic 34px "Cormorant Garamond", Georgia, serif';
      ctx.textAlign = 'left';
      ctx.fillText(activeLetter.salutation, 100, 260);

      // Main message text wrapping
      ctx.font = 'normal 26px "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = '#2D201C';
      const words = activeLetter.message.split(' ');
      let line = '“';
      let y = 330;
      const lineHeight = 44;
      const maxWidth = width - 200;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(line, 100, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      line += '”';
      ctx.fillText(line, 100, y);

      // Paired Coffee Section
      const coffeeBoxY = y + 100;
      ctx.fillStyle = '#F5EFE6';
      ctx.fillRect(100, coffeeBoxY, width - 200, 160);
      ctx.strokeStyle = '#E2D8CC';
      ctx.lineWidth = 1;
      ctx.strokeRect(100, coffeeBoxY, width - 200, 160);

      ctx.fillStyle = '#B97849';
      ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('YOUR RECOMMENDED CUP', 130, coffeeBoxY + 45);

      ctx.fillStyle = '#2D201C';
      ctx.font = 'bold 28px "Cormorant Garamond", Georgia, serif';
      ctx.fillText(pairedCoffee.name, 130, coffeeBoxY + 85);

      ctx.font = 'italic 18px "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = '#5A4A42';
      ctx.fillText(`Notes: ${pairedCoffee.flavourSummary}`, 130, coffeeBoxY + 120);

      // Reminder Box
      const reminderY = coffeeBoxY + 230;
      ctx.fillStyle = '#2D201C';
      ctx.font = 'italic 24px "Cormorant Garamond", Georgia, serif';
      ctx.textAlign = 'center';
      ctx.fillText(`A little reminder: “${activeLetter.reminder}”`, width / 2, reminderY);

      // Footer
      ctx.font = 'normal 14px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#8C7B73';
      ctx.fillText('“There’s a cup for the feeling.” · moodbrew.cafe', width / 2, height - 80);

      // Download
      const link = document.createElement('a');
      link.download = `moodbrew-letter-${activeMoodGroup.id}-no-${activeLetter.letterNo}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } finally {
      setTimeout(() => setIsDownloading(false), 500);
    }
  };

  return (
    <section id="mood-letter" className="py-24 md:py-36 bg-[#F5EFE6]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#B97849] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Signature Feature</span>
            <span aria-hidden="true">·</span>
            <span>Personal Epistles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2D201C] tracking-tight leading-tight mb-4">
            A LITTLE LETTER, JUST FOR YOU.
          </h2>
          <p className="text-base sm:text-lg text-[#2D201C]/75 font-normal leading-relaxed">
            Tell us how today feels. We’ll find a few words and a cup to go with it.
          </p>
        </div>

        {/* Step 1: Mood Filter Selectors */}
        <div className="mb-14">
          <p className="text-center text-xs uppercase tracking-widest font-semibold text-[#2D201C]/60 mb-5">
            Step 1 · Choose Your Current State
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {MOOD_LETTERS.map((mood) => {
              const isSelected = selectedMoodId === mood.id;
              return (
                <button
                  key={mood.id}
                  onClick={() => {
                    setSelectedMoodId(mood.id);
                    setLetterIndex(0);
                  }}
                  className={`px-5 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#2D201C] text-[#FFF9F1] shadow-md scale-105'
                      : 'bg-[#FFF9F1] text-[#2D201C] border border-[#2D201C]/15 hover:border-[#2D201C]/40'
                  }`}
                >
                  {mood.label}
                </button>
              );
            })}
          </div>
          <p className="text-center text-xs text-[#2D201C]/60 italic font-serif mt-3">
            {activeMoodGroup.subtitle}
          </p>
        </div>

        {/* Step 2 & 3: The Mood Letter Parchment Box */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={letterRef}
            className="parchment-texture paper-card rounded-2xl p-8 sm:p-14 border border-[#2D201C]/15 relative overflow-hidden transition-all duration-300"
          >
            {/* Top letterhead */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#2D201C]/15 gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B97849]">
                  Personal Correspondence
                </span>
                <p className="font-serif text-lg font-medium text-[#2D201C]">
                  YOUR MOOD LETTER · NO. {activeLetter.letterNo}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#2D201C]/5 text-[#2D201C]/70">
                  Mood: {activeMoodGroup.label}
                </span>
                <span className="text-xs text-[#2D201C]/40">
                  Edition {letterIndex + 1} of {activeMoodGroup.letters.length}
                </span>
              </div>
            </div>

            {/* Letter Body */}
            <div className="py-10">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#2D201C] mb-6">
                {activeLetter.salutation}
              </p>

              <blockquote className="font-serif text-xl sm:text-2xl text-[#2D201C]/90 leading-relaxed max-w-2xl text-pretty mb-10">
                “{activeLetter.message}”
              </blockquote>

              <div className="p-4 sm:p-5 rounded-xl bg-[#F5EFE6]/80 border border-[#2D201C]/10 max-w-lg mb-8">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#B97849] mb-1">
                  A Little Reminder
                </p>
                <p className="font-serif italic text-base sm:text-lg text-[#2D201C]">
                  “{activeLetter.reminder}”
                </p>
              </div>

              {/* Matched Coffee Module */}
              <div className="pt-8 border-t border-[#2D201C]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm shrink-0 bg-[#EFE9DF]">
                    <img
                      src={pairedCoffee.image}
                      alt={pairedCoffee.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B97849]">
                      Your Paired Cup
                    </span>
                    <h4 className="font-serif text-xl font-medium text-[#2D201C]">
                      {pairedCoffee.name}
                    </h4>
                    <p className="text-xs text-[#2D201C]/60 italic font-serif">
                      {pairedCoffee.flavourSummary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectDrink(pairedCoffee)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#2D201C] border border-[#2D201C]/25 rounded-full hover:bg-white transition-colors"
                  >
                    View Drink
                  </button>
                  <button
                    onClick={() => onAddToBag(pairedCoffee)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#2D201C] rounded-full hover:bg-[#B97849] transition-colors"
                  >
                    Add · {pairedCoffee.price}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions: Step 4 Functional Buttons */}
            <div className="pt-6 border-t border-[#2D201C]/15 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={handleNextLetter}
                className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#2D201C] bg-[#FFF9F1] border border-[#2D201C]/20 hover:border-[#2D201C] transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Give Me Another Letter</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#2D201C] bg-[#FFF9F1] border border-[#2D201C]/20 hover:border-[#2D201C] transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy My Letter</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleSaveAsImage}
                  disabled={isDownloading}
                  className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-[#B97849] hover:bg-[#A3663B] transition-colors flex items-center gap-2 shadow-2xs cursor-pointer disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isDownloading ? 'Rendering...' : 'Save as Image'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  bagCount: number;
  onOpenBag: () => void;
  onSelectMoodCta: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ bagCount, onOpenBag, onSelectMoodCta }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF8F3]/90 backdrop-blur-md border-b border-[#2D201C]/8 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-2xl font-serif tracking-wider font-semibold text-[#2D201C] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          MOODBREW
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-widest uppercase font-medium text-[#2D201C]/80">
          <a
            href="#home"
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0"
          >
            Home
          </a>
          <a
            href="#discover-mood"
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0"
          >
            Discover Your Mood
          </a>
          <a
            href="#signature-collection"
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0"
          >
            Coffee Collection
          </a>
          <a
            href="#mood-letter"
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0"
          >
            The Mood Letter
          </a>
          <a
            href="#our-story"
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0"
          >
            Our Story
          </a>
        </nav>

        {/* Zone 3: 1 primary action group */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenBag}
            aria-label={`View tasting bag with ${bagCount} items`}
            className="relative p-2.5 rounded-full text-[#2D201C] hover:bg-[#2D201C]/5 transition-colors"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            {bagCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B97849] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center tabular-nums">
                {bagCount}
              </span>
            )}
          </button>

          <button
            onClick={onSelectMoodCta}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FFF9F1] bg-[#2D201C] rounded-full hover:bg-[#B97849] transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Find Your Cup</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2D201C] hover:bg-[#2D201C]/5 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF8F3] border-b border-[#2D201C]/10 px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-sm tracking-wider uppercase font-medium text-[#2D201C]">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#B97849] transition-colors"
            >
              Home
            </a>
            <a
              href="#discover-mood"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#B97849] transition-colors"
            >
              Discover Your Mood
            </a>
            <a
              href="#signature-collection"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#B97849] transition-colors"
            >
              Coffee Collection
            </a>
            <a
              href="#mood-letter"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#B97849] transition-colors"
            >
              The Mood Letter
            </a>
            <a
              href="#our-story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#B97849] transition-colors"
            >
              Our Story
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectMoodCta();
                }}
                className="w-full py-3 text-xs tracking-widest uppercase font-semibold text-white bg-[#2D201C] rounded-full text-center"
              >
                Find Your Cup
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

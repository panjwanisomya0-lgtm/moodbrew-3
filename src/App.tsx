/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiscoverMood } from './components/DiscoverMood';
import { YourMoodYourCoffee } from './components/YourMoodYourCoffee';
import { SignatureCollection } from './components/SignatureCollection';
import { CoffeeMoment } from './components/CoffeeMoment';
import { MoodbrewStory } from './components/MoodbrewStory';
import { MoodLetter } from './components/MoodLetter';
import { MoodJournal } from './components/MoodJournal';
import { FindYourMoment } from './components/FindYourMoment';
import { Footer } from './components/Footer';
import { DrinkDetailModal } from './components/DrinkDetailModal';
import { RitualBagDrawer, BagItem } from './components/RitualBagDrawer';
import { CoffeeDrink } from './data/coffeeData';

export default function App() {
  const [selectedMoodId, setSelectedMoodId] = useState<string>('slow-morning');
  const [activeModalDrink, setActiveModalDrink] = useState<CoffeeDrink | null>(null);
  const [bagDrawerOpen, setBagDrawerOpen] = useState<boolean>(false);
  const [bagItems, setBagItems] = useState<BagItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToBag = (drink: CoffeeDrink, options?: { milk: string; sweetness: string }) => {
    setBagItems((prev) => {
      const existing = prev.find((i) => i.drink.id === drink.id);
      if (existing) {
        return prev.map((i) =>
          i.drink.id === drink.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          drink,
          quantity: 1,
          milk: options?.milk,
          sweetness: options?.sweetness,
        },
      ];
    });
    showToast(`Added ${drink.name} to your tasting flight`);
  };

  const handleUpdateQuantity = (drinkId: string, quantity: number) => {
    if (quantity <= 0) {
      setBagItems((prev) => prev.filter((i) => i.drink.id !== drinkId));
    } else {
      setBagItems((prev) =>
        prev.map((i) => (i.drink.id === drinkId ? { ...i, quantity } : i))
      );
    }
  };

  const handleClearBag = () => {
    setBagItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalBagCount = bagItems.reduce((acc, i) => acc + i.quantity, 0);
  const bagDrinkIds = bagItems.map((i) => i.drink.id);

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#2D201C] flex flex-col font-sans selection:bg-[#B97849]/20 selection:text-[#2D201C]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2D201C] text-[#FFF9F1] px-5 py-3 rounded-full text-xs font-medium tracking-wider shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#B97849]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        bagCount={totalBagCount}
        onOpenBag={() => setBagDrawerOpen(true)}
        onSelectMoodCta={() => scrollToSection('discover-mood')}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onDiscoverClick={() => scrollToSection('discover-mood')}
          onExploreClick={() => scrollToSection('signature-collection')}
        />

        {/* 2. Discover Your Mood */}
        <DiscoverMood
          selectedMoodId={selectedMoodId}
          onSelectMood={(moodId) => {
            setSelectedMoodId(moodId);
            scrollToSection('your-mood-your-coffee');
          }}
        />

        {/* 3. Your Mood, Your Coffee */}
        <YourMoodYourCoffee
          selectedMoodId={selectedMoodId}
          onMeetCoffee={(drink) => setActiveModalDrink(drink)}
          onAddToBag={(drink) => handleAddToBag(drink)}
        />

        {/* 4. The Signature Collection — 18 Coffees */}
        <SignatureCollection
          onSelectDrink={(drink) => setActiveModalDrink(drink)}
          onAddToBag={(drink) => handleAddToBag(drink)}
          bagDrinkIds={bagDrinkIds}
        />

        {/* 5. A Little Coffee Moment */}
        <CoffeeMoment />

        {/* 6. The MOODBREW Story */}
        <MoodbrewStory />

        {/* 7. The MOOD LETTER — Signature Interactive Feature */}
        <MoodLetter
          onSelectDrink={(drink) => setActiveModalDrink(drink)}
          onAddToBag={(drink) => handleAddToBag(drink)}
        />

        {/* 8. The Mood Journal */}
        <MoodJournal />

        {/* 9. Find Your Moment */}
        <FindYourMoment
          onFindMoodClick={() => scrollToSection('discover-mood')}
          onExploreCollectionClick={() => scrollToSection('signature-collection')}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Modals & Slide-overs */}
      <DrinkDetailModal
        drink={activeModalDrink}
        onClose={() => setActiveModalDrink(null)}
        onAddToBag={handleAddToBag}
      />

      <RitualBagDrawer
        isOpen={bagDrawerOpen}
        onClose={() => setBagDrawerOpen(false)}
        items={bagItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearBag={handleClearBag}
      />
    </div>
  );
}

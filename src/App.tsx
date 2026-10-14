import React from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CollectionSection } from './components/CollectionSection';
import { CtaSection } from './components/CtaSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#010828] text-cream relative selection:bg-neon selection:text-[#010828] overflow-x-hidden">
      <main className="w-full">
        {/* SECTION 1: HERO (Full viewport with rounded-b-[32px]) */}
        <HeroSection />

        {/* SECTION 2: ABOUT / INTRO (Full viewport) */}
        <AboutSection />

        {/* SECTION 3: NFT COLLECTION GRID (Solid #010828 background) */}
        <CollectionSection />

        {/* SECTION 4: CTA / FINAL SECTION (Full-width native aspect video) */}
        <CtaSection />
      </main>
    </div>
  );
}

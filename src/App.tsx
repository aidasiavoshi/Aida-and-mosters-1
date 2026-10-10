import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CreativeCrewSection } from './components/CreativeCrewSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsAndToolsSection } from './components/SkillsAndToolsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedMascotId, setSelectedMascotId] = useState<'strato' | 'adzy' | 'soci' | 'cody'>('strato');
  const [inquiryServiceId, setInquiryServiceId] = useState<string | undefined>(undefined);

  const handleSelectMascot = (id: 'strato' | 'adzy' | 'soci' | 'cody') => {
    setSelectedMascotId(id);
  };

  const handleSelectServiceForInquiry = (serviceId: string) => {
    setInquiryServiceId(serviceId);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Bar Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onSelectMascot={handleSelectMascot} />

        {/* 2. About Me & 4 Working Principles */}
        <AboutSection />

        {/* 3. Professional Experience (Shape Zoom Polyclinic - Dubai) */}
        <ExperienceSection />

        {/* 4. Meet My Creative Crew (Strato, Adzy, Soci, Cody) */}
        <CreativeCrewSection
          selectedMascotId={selectedMascotId}
          onSelectMascot={handleSelectMascot}
        />

        {/* 5. What I Do (6 Modular Services) */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 6. Core Skills & Marketing Tools Matrix */}
        <SkillsAndToolsSection />

        {/* 7. Let's Work Together & Contact */}
        <ContactSection initialServiceId={inquiryServiceId} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

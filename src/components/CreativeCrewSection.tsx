import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Wrench, FileText, ArrowRight, Lightbulb, Compass, Megaphone, Camera, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA, Mascot } from '../data/portfolioData';

interface CreativeCrewSectionProps {
  selectedMascotId?: string;
  onSelectMascot?: (id: 'strato' | 'adzy' | 'soci' | 'cody') => void;
}

export const CreativeCrewSection: React.FC<CreativeCrewSectionProps> = ({
  selectedMascotId = 'strato',
  onSelectMascot
}) => {
  const [activeMascotId, setActiveMascotId] = useState<'strato' | 'adzy' | 'soci' | 'cody'>(
    (selectedMascotId as 'strato' | 'adzy' | 'soci' | 'cody') || 'strato'
  );

  const activeMascot = PORTFOLIO_DATA.creativeCrew.find((m) => m.id === activeMascotId) || PORTFOLIO_DATA.creativeCrew[0];

  const handleMascotClick = (id: 'strato' | 'adzy' | 'soci' | 'cody') => {
    setActiveMascotId(id);
    if (onSelectMascot) {
      onSelectMascot(id);
    }
  };

  const getMascotIcon = (id: string) => {
    switch (id) {
      case 'strato':
        return <Compass className="w-4 h-4" />;
      case 'adzy':
        return <Megaphone className="w-4 h-4" />;
      case 'soci':
        return <Camera className="w-4 h-4" />;
      case 'cody':
        return <Cpu className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="crew" className="py-24 bg-neutral-900 text-neutral-100 border-b border-neutral-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Signature Brand Universe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Meet My Creative Crew
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            To give marketing strategy tangible personality, I created four fluffy monster characters. Each character represents a vital branch of modern digital marketing—turning complex analytics, paid performance, social narratives, and artificial intelligence into an inspiring, collaborative experience.
          </p>
        </div>

        {/* Mascot Selection Tabs / Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {PORTFOLIO_DATA.creativeCrew.map((mascot) => {
            const isActive = mascot.id === activeMascotId;
            return (
              <button
                key={mascot.id}
                type="button"
                onClick={() => handleMascotClick(mascot.id)}
                className={`relative text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center sm:items-start ${
                  isActive
                    ? 'bg-neutral-800 border-amber-400/80 shadow-xl ring-2 ring-amber-400/20'
                    : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/40'
                }`}
              >
                {/* Character Thumbnail */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden mb-3 bg-neutral-900 border border-neutral-700/60 shadow-inner">
                  <img
                    src={mascot.image}
                    alt={mascot.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {isActive && (
                    <div className="absolute top-1.5 right-1.5 w-3 h-3 rounded-full bg-amber-400 ring-2 ring-neutral-900" />
                  )}
                </div>

                <div className="w-full text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                    <span className="text-xs text-neutral-400">{getMascotIcon(mascot.id)}</span>
                    <span className="text-lg font-bold text-white font-display">{mascot.name}</span>
                  </div>
                  <div className="text-xs font-medium text-amber-400 mb-1">{mascot.role}</div>
                  <div className="text-[11px] text-neutral-400 line-clamp-1">{mascot.subtitle}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Mascot Spotlight Showcase */}
        <div className="bg-neutral-950 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Mascot Visual & Character Profile */}
            <div className="lg:col-span-5 p-8 sm:p-10 bg-gradient-to-br from-neutral-900 to-neutral-950 border-b lg:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-between">
              <div>
                {/* Character Badge Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-200 border border-neutral-700">
                    {getMascotIcon(activeMascot.id)}
                    <span>{activeMascot.role}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">Pillar 0{PORTFOLIO_DATA.creativeCrew.findIndex(m => m.id === activeMascot.id) + 1}</span>
                </div>

                {/* Big Character Art */}
                <div className="relative mx-auto max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 mb-6">
                  <img
                    src={activeMascot.image}
                    alt={`${activeMascot.name} - ${activeMascot.subtitle}`}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-center">
                    <p className="text-xs text-neutral-300 italic font-serif">"{activeMascot.tagline}"</p>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {activeMascot.name} <span className="text-lg font-normal text-neutral-400">— {activeMascot.subtitle}</span>
                </h3>

                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  {activeMascot.personality}
                </p>
              </div>

              {/* Quick Prompt to Consult with Aida */}
              <div className="mt-8 pt-6 border-t border-neutral-800">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700 text-sm font-semibold text-white transition-all group"
                >
                  <span>Build your campaign with {activeMascot.name}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Mascot Capabilities & Deliverables Blueprint */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-8 bg-neutral-950">
              
              {/* Mission Statement */}
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>Strategic Mission in Campaigns</span>
                </h4>
                <p className="text-base text-neutral-200 leading-relaxed">
                  {activeMascot.description}
                </p>
              </div>

              {/* Core Specialties */}
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Specialties & Core Competencies</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeMascot.specialties.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-900 border border-neutral-800/80 text-xs font-medium text-neutral-200"
                    >
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Favorite Tools */}
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <span>Arsenal & Favorite Platforms</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeMascot.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Concrete Client Deliverables */}
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>Deliverables Handled by {activeMascot.name}</span>
                </h4>
                <ul className="space-y-2">
                  {activeMascot.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

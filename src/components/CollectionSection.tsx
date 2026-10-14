import React, { useState } from 'react';
import { ChevronRight, X, Sparkles, Check, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA, Mascot } from '../data/portfolioData';

export const CollectionSection: React.FC = () => {
  const [activeModalMascot, setActiveModalMascot] = useState<Mascot | null>(null);

  const mascotsWithScores = [
    {
      ...PORTFOLIO_DATA.creativeCrew[0], // Strato
      score: '9.8/10',
      domainLabel: 'STRATEGY INDEX:',
    },
    {
      ...PORTFOLIO_DATA.creativeCrew[1], // Adzy
      score: '9.6/10',
      domainLabel: 'AD ROAS INDEX:',
    },
    {
      ...PORTFOLIO_DATA.creativeCrew[2], // Soci
      score: '9.7/10',
      domainLabel: 'CREATIVE INDEX:',
    },
    {
      ...PORTFOLIO_DATA.creativeCrew[3], // Cody
      score: '9.9/10',
      domainLabel: 'AI EFFICIENCY:',
    },
  ];

  return (
    <section id="crew" className="w-full bg-[#010828] text-cream py-24 sm:py-32 relative z-10">
      <div className="max-w-[1831px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 sm:mb-24">
          
          {/* Left Heading */}
          <div>
            <h2 className="font-grotesk text-[32px] sm:text-[45px] lg:text-[60px] uppercase leading-none text-cream select-none">
              Collection of
            </h2>
            <div className="ml-12 sm:ml-24 lg:ml-32 mt-1 sm:mt-2 flex items-baseline select-none">
              <span className="font-condiment text-neon normal-case text-[36px] sm:text-[50px] lg:text-[68px] mr-3 leading-none">
                Creative
              </span>
              <span className="font-grotesk text-cream uppercase text-[32px] sm:text-[45px] lg:text-[60px] leading-none">
                Crew & Skills
              </span>
            </div>
          </div>

          {/* Right: SEE ALL CREATORS button with neon green bar */}
          <a
            href="#contact"
            className="group cursor-pointer inline-flex flex-col"
          >
            <div className="flex items-center">
              <span className="font-grotesk text-[32px] sm:text-[45px] lg:text-[60px] uppercase leading-none text-cream">
                START
              </span>
              <div className="flex flex-col justify-center ml-2.5 sm:ml-4 leading-none">
                <span className="font-grotesk text-[16px] sm:text-[24px] lg:text-[28px] uppercase text-cream leading-tight">
                  A PROJECT
                </span>
                <span className="font-grotesk text-[16px] sm:text-[24px] lg:text-[28px] uppercase text-cream leading-tight">
                  WITH AIDA
                </span>
              </div>
            </div>

            {/* Neon Green Bar under button */}
            <div className="w-full bg-neon h-[6px] sm:h-[8px] lg:h-[10px] mt-2 group-hover:opacity-80 transition-opacity" />
          </a>

        </div>

        {/* 4 Cards Grid (Responsive 1 -> 2 -> 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {mascotsWithScores.map((item) => (
            <div
              key={item.id}
              className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveModalMascot(item)}
            >
              {/* Square Image Container */}
              <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden bg-neutral-900 border border-white/5">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `/images/${item.name}.png`;
                  }}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Character Name Badge Overlay */}
                <div className="absolute top-3 left-3 bg-[#010828]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-grotesk uppercase text-cream">
                  {item.name} · {item.role}
                </div>
              </div>

              {/* Bottom Overlay Bar */}
              <div className="liquid-glass rounded-[20px] px-5 py-4 mt-4 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[11px] text-cream/70 uppercase tracking-widest block">
                    {item.domainLabel}
                  </span>
                  <span className="font-grotesk text-[16px] text-cream tracking-wide block mt-0.5">
                    {item.score}
                  </span>
                </div>

                {/* Circular Purple Gradient Arrow Button */}
                <button
                  type="button"
                  aria-label={`View ${item.name} details`}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center text-white shadow-lg shadow-purple-500/50 group-hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Mascot Detail Modal */}
        {activeModalMascot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="liquid-glass rounded-3xl max-w-xl w-full p-6 sm:p-8 relative border border-white/20 bg-[#010828]/95 shadow-2xl">
              <button
                type="button"
                onClick={() => setActiveModalMascot(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 text-cream hover:text-neon transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-neutral-900">
                  <img
                    src={activeModalMascot.image}
                    alt={activeModalMascot.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `/images/${activeModalMascot.name}.png`;
                    }}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-grotesk text-2xl uppercase text-cream">
                    {activeModalMascot.name} <span className="text-neon text-lg normal-case font-condiment">— {activeModalMascot.subtitle}</span>
                  </h3>
                  <p className="font-mono text-xs text-cream/70 uppercase">
                    {activeModalMascot.role}
                  </p>
                </div>
              </div>

              <p className="font-mono text-xs sm:text-sm text-cream/90 leading-relaxed mb-6">
                {activeModalMascot.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-grotesk text-xs uppercase tracking-wider text-neon mb-2">
                    Core Specialties:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalMascot.specialties.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-mono text-cream/80 bg-white/5 p-2 rounded-lg">
                        <Check className="w-3.5 h-3.5 text-neon shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-cream/60">
                    Tools: {activeModalMascot.tools.slice(0, 3).join(', ')}
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setActiveModalMascot(null)}
                    className="px-4 py-2 rounded-xl bg-neon text-[#010828] font-grotesk text-xs uppercase font-bold hover:opacity-90 transition-opacity"
                  >
                    Inquire via WhatsApp →
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

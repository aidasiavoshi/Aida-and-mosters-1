import React from 'react';
import { Target, Palette, BarChart3, Bot, MapPin, Building2, Quote } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const principleIcons = [
    <Target className="w-5 h-5 text-emerald-400" />,
    <Palette className="w-5 h-5 text-rose-400" />,
    <BarChart3 className="w-5 h-5 text-amber-400" />,
    <Bot className="w-5 h-5 text-sky-400" />,
  ];

  return (
    <section id="about" className="py-24 bg-neutral-950 text-neutral-100 border-b border-neutral-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <span>About Me</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span>Background & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Strategic Clarity. Creative Depth. Real Business Results.
          </h2>
        </div>

        {/* Story & Background Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Main Story Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-base sm:text-lg font-light">
            <p className="text-xl sm:text-2xl text-white font-normal leading-snug font-display">
              {PORTFOLIO_DATA.about.lead}
            </p>

            {PORTFOLIO_DATA.about.bodyParagraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}

            {/* Quote Block */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 relative mt-8">
              <Quote className="w-8 h-8 text-amber-400/30 mb-2" />
              <p className="text-base sm:text-lg font-medium text-neutral-200 italic font-serif leading-relaxed">
                "Marketing isn’t about generating endless noise. It is about understanding the human behind the screen, earning trust through unmatched clarity, and guiding them toward a confident commercial decision."
              </p>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-amber-400">
                — Aida Siavoshi
              </div>
            </div>
          </div>

          {/* Quick Credential Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Current Clinical & Commercial Practice</h4>
                  <div className="text-xs text-neutral-400">Shape Zoom Polyclinic · Dubai, UAE</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Directing digital growth, multi-channel performance advertising, patient intake funnels, and brand presence in the UAE wellness and aesthetics sector since 2024.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Market Focus: Dubai & GCC</h4>
                  <div className="text-xs text-neutral-400">United Arab Emirates · International Clients</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Deep understanding of consumer behavior in the GCC region, bilingual cultural nuance, Meta & Snapchat ad dynamics, and high-ticket customer conversion patterns.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-400/30 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Core Mission
              </div>
              <p className="text-lg font-bold text-white font-display">
                "{PORTFOLIO_DATA.profile.missionStatement}"
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Blending analytical rigor with playful creative monsters to turn bold strategic visions into thriving digital enterprises.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Core Principles */}
        <div className="pt-12 border-t border-neutral-800">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white font-display">
              My 4 Working Principles
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              The foundational standard applied to every campaign, creative concept, and marketing budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.about.principles.map((principle, idx) => (
              <div
                key={principle.title}
                className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700/60">
                      {principleIcons[idx]}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-display">
                    {principle.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

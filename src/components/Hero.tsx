import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import heroWorkspaceImg from '../assets/images/hero_marketing_workspace_1791654779200.jpg';

interface HeroProps {
  onSelectMascot?: (id: 'strato' | 'adzy' | 'soci' | 'cody') => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectMascot }) => {
  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-neutral-800">
      {/* Background subtle radial gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 75% 20%, rgba(251, 191, 36, 0.12) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Conversion Hook */}
          <div className="lg:col-span-7 space-y-7">
            {/* Unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-neutral-400">
              <span className="text-amber-400 font-semibold tracking-wide uppercase text-xs">Aida · Portfolio & Studio</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Dubai, United Arab Emirates</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Shape Zoom Polyclinic Lead</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display text-balance">
              Where Strategy Meets Creativity — and Little Monsters Make{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">
                Big Ideas Happen.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl font-light">
              Digital Marketing Specialist & Creative Strategist in Dubai. I help healthcare, aesthetics, and ambitious modern businesses grow by pairing analytical market research and high-converting paid advertising with scroll-stopping social narratives and intelligent AI automation.
            </p>

            {/* Quick trust metrics row */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-neutral-800/80 max-w-xl">
              <div>
                <div className="text-2xl font-bold text-white tabular-nums font-display">2024+</div>
                <div className="text-xs text-neutral-400">Dubai Market Lead</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400 tabular-nums font-display">Meta & Snap</div>
                <div className="text-xs text-neutral-400">Performance Ads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sky-400 tabular-nums font-display">4 AI Crew</div>
                <div className="text-xs text-neutral-400">Mascot Pillars</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-lg shadow-amber-400/20 whitespace-nowrap"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#crew"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Meet My Creative Crew</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Instant Call</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Mascot Previews */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl group">
              {/* Main Workspace Image */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={heroWorkspaceImg}
                  alt="Aida's Creative Strategy & Digital Marketing Desk in Dubai"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/hero-workspace.jpg';
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Location Stamp */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-200 bg-neutral-900/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-neutral-700/60">
                  <span className="font-medium">Shape Zoom Polyclinic · Dubai, UAE</span>
                  <span className="text-amber-400 font-mono text-[11px]">Marketing Strategy & Ads</span>
                </div>
              </div>

              {/* Creative Mascot Teaser Strip */}
              <div className="p-4 bg-neutral-900/90 border-t border-neutral-800">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    The Creative Crew Behind Every Campaign
                  </span>
                  <a href="#crew" className="text-xs text-amber-400 hover:text-amber-300 font-medium">
                    Explore all 4 →
                  </a>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {PORTFOLIO_DATA.creativeCrew.map((mascot) => (
                    <a
                      key={mascot.id}
                      href="#crew"
                      onClick={() => onSelectMascot && onSelectMascot(mascot.id)}
                      className="group/card flex flex-col items-center p-2 rounded-xl bg-neutral-800/60 hover:bg-neutral-800 border border-neutral-700/50 hover:border-neutral-600 transition-all text-center"
                    >
                      <div className="w-11 h-11 rounded-lg overflow-hidden mb-1.5 border border-neutral-700 bg-neutral-950 relative">
                        <img
                          src={mascot.image}
                          alt={mascot.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform"
                        />
                      </div>
                      <span className="text-xs font-bold text-white group-hover/card:text-amber-400 transition-colors">
                        {mascot.name}
                      </span>
                      <span className="text-[10px] text-neutral-400 leading-tight">
                        {mascot.id === 'strato' ? 'Strategy' : mascot.id === 'adzy' ? 'Ads' : mascot.id === 'soci' ? 'Social' : 'AI'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

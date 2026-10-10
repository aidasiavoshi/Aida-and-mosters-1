import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, TrendingUp, Layers, Users, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  const keyFocusAreas = [
    {
      title: 'Full-Funnel Paid Advertising',
      desc: 'Hands-on management of Meta Ads and Snapchat Ads campaigns tailored to UAE healthcare patient acquisition and ROAS optimization.',
      icon: <TrendingUp className="w-4 h-4 text-amber-400" />
    },
    {
      title: 'Competitive Market Intelligence',
      desc: 'Continuous benchmarking of Dubai aesthetic polyclinics, consumer demographic behavior, and high-converting offer structuring.',
      icon: <Users className="w-4 h-4 text-emerald-400" />
    },
    {
      title: 'Social Storytelling & Video Direction',
      desc: 'Directing monthly content calendars, aesthetic Instagram feed themes, and engaging short-form Reels and video narratives.',
      icon: <Layers className="w-4 h-4 text-rose-400" />
    },
    {
      title: 'AI & Operational Automation',
      desc: 'Deploying ChatGPT, Gemini, and no-code Make.com workflows to streamline ad copy iterations and lead routing.',
      icon: <Zap className="w-4 h-4 text-sky-400" />
    }
  ];

  return (
    <section id="experience" className="py-24 bg-neutral-900 text-neutral-100 border-b border-neutral-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Track Record & Case In Point</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Professional Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            Real-world execution in Dubai’s fast-moving, high-expectation medical and aesthetic polyclinic sector.
          </p>
        </div>

        {/* Feature Company Experience Card */}
        <div className="bg-neutral-950 rounded-3xl border border-neutral-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar of Card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <span>Healthcare & Aesthetics Division</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {experience.company}
              </h3>
              <p className="text-base text-neutral-300 font-medium mt-1">
                {experience.role}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>{experience.period}</span>
              </div>
            </div>
          </div>

          {/* Executive Overview */}
          <div className="py-8 border-b border-neutral-800">
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* 4 Pillars of Daily Execution */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-b border-neutral-800">
            {keyFocusAreas.map((area) => (
              <div key={area.title} className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800/80">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center mb-3">
                  {area.icon}
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{area.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          {/* Core Responsibilities Grid */}
          <div className="pt-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Key Responsibilities & Operational Scope</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {experience.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/60 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

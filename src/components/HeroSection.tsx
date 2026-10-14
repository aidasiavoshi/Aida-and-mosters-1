import React from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import heroCrewImg from '../assets/images/hero_aida_crew_space_1791661825273.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen rounded-b-[32px] overflow-hidden flex flex-col justify-between bg-[#010828] text-cream">
      {/* Background Poster fallback while video loads */}
      <img
        src={heroCrewImg}
        alt="Aida and her Creative Crew in Space"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/images/hero-aida-space.jpg';
        }}
      />

      {/* Vimeo Background Video (Looping, Autoplaying, Muted, No Controls) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <iframe
          src="https://player.vimeo.com/video/1234697177?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&dnt=1"
          className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full min-h-full h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0 opacity-90"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Aida and Creative Crew Background Video"
        />
      </div>

      {/* Cinematic subtle overlay gradient to preserve crystal clarity of existing text */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#010828] via-[#010828]/40 to-[#010828]/60 z-0 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1831px] mx-auto px-6 sm:px-12 lg:px-20 py-8 lg:py-12 flex flex-col justify-between flex-1">
        
        {/* Header Row */}
        <header className="w-full flex items-center justify-between">
          {/* Left: Logo */}
          <a
            href="#"
            className="font-grotesk text-[18px] uppercase tracking-wider text-cream hover:text-neon transition-colors select-none"
          >
            Aida.Strategy
          </a>

          {/* Center: Navigation Bar (Hidden on mobile) */}
          <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
            <ul className="flex items-center gap-10">
              {[
                { label: 'About', href: '#about' },
                { label: 'Creative Crew', href: '#crew' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-grotesk text-[13px] uppercase tracking-wider text-cream hover:text-neon transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Spacer for desktop symmetry */}
          <div className="w-[80px] hidden lg:block" />
        </header>

        {/* Desktop Social/Contact Icons (Top-Right Corner, Stacked Vertically) */}
        <div className="hidden lg:flex flex-col gap-3 absolute top-8 right-8 xl:right-16 z-20">
          <a
            href={PORTFOLIO_DATA.profile.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="Chat on WhatsApp"
            className="w-[56px] h-[56px] rounded-[1rem] liquid-glass flex items-center justify-center text-cream hover:text-neon hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            aria-label="Email"
            title="Send Email"
            className="w-[56px] h-[56px] rounded-[1rem] liquid-glass flex items-center justify-center text-cream hover:text-neon hover:bg-white/10 transition-colors"
          >
            <Mail className="w-5 h-5 text-amber-300" />
          </a>
          <div
            title="Dubai, United Arab Emirates"
            className="w-[56px] h-[56px] rounded-[1rem] liquid-glass flex items-center justify-center text-cream opacity-80"
          >
            <MapPin className="w-5 h-5 text-sky-400" />
          </div>
        </div>

        {/* Hero Content Center / Offset Area */}
        <div className="my-auto py-16 sm:py-24 lg:py-32">
          <div className="relative max-w-[850px] lg:ml-24">
            
            {/* Main Heading in Anton */}
            <h1 className="font-grotesk text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase leading-[1.05] sm:leading-[1] text-cream select-none">
              Where Strategy Meets<br />
              Creativity & AI
            </h1>

            {/* Overlaid Cursive Accent Text "and Little Monsters" in Condiment font */}
            <span
              className="font-condiment text-[24px] sm:text-[34px] md:text-[42px] lg:text-[48px] text-neon mix-blend-exclusion opacity-95 absolute right-0 sm:-right-8 lg:-right-12 bottom-0 sm:bottom-2 transform -rotate-1 select-none pointer-events-none whitespace-nowrap normal-case"
            >
              Creative Crew
            </span>
          </div>

          {/* Subtitle / Role kicker */}
          <div className="mt-8 max-w-[720px] lg:ml-24">
            <p className="font-mono text-xs sm:text-sm text-cream/90 uppercase tracking-widest leading-relaxed">
              Digital Marketing Specialist · Shape Zoom Polyclinic Lead · Dubai, UAE · Performance Ads · AI Automation
            </p>
          </div>

          {/* Mobile Social/Contact Icons (Centered horizontally below heading) */}
          <div className="flex lg:hidden justify-center items-center gap-4 mt-10">
            <a
              href={PORTFOLIO_DATA.profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-[56px] h-[56px] rounded-[1rem] liquid-glass flex items-center justify-center text-cream hover:text-neon hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              aria-label="Email"
              className="w-[56px] h-[56px] rounded-[1rem] liquid-glass flex items-center justify-center text-cream hover:text-neon hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5 text-amber-300" />
            </a>
            <div
              className="w-[56px] h-[56px] rounded-[1rem] liquid-glass flex items-center justify-center text-cream opacity-80"
            >
              <MapPin className="w-5 h-5 text-sky-400" />
            </div>
          </div>
        </div>

        {/* Quiet Bottom Indicator */}
        <div className="w-full flex justify-between items-center text-xs font-mono opacity-50 uppercase tracking-widest pb-4">
          <span>Shape Zoom Polyclinic · Dubai 2024–Present</span>
          <span className="hidden sm:inline">Meta & Snapchat Ads · Generative AI Workflows</span>
        </div>

      </div>
    </section>
  );
};

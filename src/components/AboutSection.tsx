import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between bg-[#010828] text-cream">
      {/* Vimeo Background Video (Looping, Autoplaying, 100% Muted, No Controls) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <iframe
          src="https://player.vimeo.com/video/1235534461?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&dnt=1"
          className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full min-h-full h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0 opacity-90"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Aida with Creative Crew Background Video"
        />
      </div>

      {/* Subtle overlay gradient to ensure high readability of text and cards */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#010828] via-[#010828]/45 to-[#010828]/60 z-0 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1831px] mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col justify-between flex-1">
        
        {/* Top Row: Heading on Left & Short Monospace Paragraph on Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
          
          {/* Left: Heading in Anton with Overlaid Condiment "Aida" */}
          <div className="relative inline-block">
            <h2 className="font-grotesk text-[34px] sm:text-[48px] lg:text-[64px] uppercase leading-tight text-cream select-none">
              Hello!<br />
              I'm Aida
            </h2>

            {/* Overlaid Cursive "Aida" in Condiment font, neon green */}
            <span
              className="font-condiment text-[38px] sm:text-[54px] lg:text-[72px] text-neon mix-blend-exclusion absolute -bottom-3 sm:-bottom-4 -right-6 sm:-right-10 transform -rotate-3 select-none pointer-events-none normal-case"
            >
              Aida
            </span>
          </div>

          {/* Right: Short paragraph in monospace, uppercase, max-width 340px */}
          <div className="max-w-[340px]">
            <p className="font-mono text-[13px] sm:text-[15px] uppercase leading-relaxed text-cream tracking-wide">
              Digital Marketing Specialist & Creative Strategist in Dubai. Leading marketing at Shape Zoom Polyclinic since 2024. Combining paid performance ads, social narratives, and AI automation to turn visibility into real revenue.
            </p>
          </div>

        </div>

        {/* Bottom Row: 4 Working Principles in Monospace */}
        <div className="mt-24 lg:mt-auto pt-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          
          {/* Left Column Principles */}
          <div className="space-y-4 max-w-[420px]">
            <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-cream/90 bg-white/5 p-4 rounded-2xl liquid-glass">
              <span className="text-neon font-bold block mb-1">01. Strategy First</span>
              Deep audience analysis, competitor intelligence, and business-driven growth roadmaps.
            </div>
            <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-cream/90 bg-white/5 p-4 rounded-2xl liquid-glass">
              <span className="text-neon font-bold block mb-1">02. Creativity Matters</span>
              Breakthrough visual hooks and authentic storytelling that build memorable brand affinity.
            </div>
          </div>

          {/* Right Column Principles */}
          <div className="space-y-4 max-w-[420px]">
            <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-cream/90 bg-white/5 p-4 rounded-2xl liquid-glass">
              <span className="text-neon font-bold block mb-1">03. Data-Driven Decisions</span>
              Meta Ads & Snapchat Ads budget scaling, rigorous CBO testing, and measurable ROAS.
            </div>
            <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-cream/90 bg-white/5 p-4 rounded-2xl liquid-glass">
              <span className="text-neon font-bold block mb-1">04. Technology & AI</span>
              No-code workflows with Make.com and generative AI to accelerate creative output.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

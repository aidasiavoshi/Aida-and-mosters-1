import React from 'react';
import { Mail, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-[#010828] text-cream">
      {/* Background Video displayed at native aspect ratio (w-full h-auto block) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block select-none pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
      />

      {/* Text Content (Positioned absolute over the video, right-aligned) */}
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between">
        
        {/* Heading container positioned absolute on the right */}
        <div className="absolute top-[8%] sm:top-[12%] lg:top-[16%] right-6 sm:right-12 lg:right-0 lg:pr-[20%] lg:pl-[15%] pointer-events-auto text-right">
          <div className="relative inline-block text-left">
            
            {/* Cursive Accent "Let's collaborate" at top-left of the heading block */}
            <span
              className="font-condiment text-neon mix-blend-exclusion text-[17px] sm:text-[34px] md:text-[48px] lg:text-[68px] normal-case absolute -top-4 sm:-top-8 lg:-top-12 -left-4 sm:-left-10 lg:-left-14 select-none pointer-events-none whitespace-nowrap"
            >
              Let's collaborate
            </span>

            {/* Heading in Anton */}
            <div className="font-grotesk text-[16px] sm:text-[28px] md:text-[42px] lg:text-[60px] uppercase text-cream leading-[1.05] tracking-wide select-none">
              <div className="mb-3 sm:mb-6 lg:mb-12">
                SCALE YOUR BRAND.
              </div>
              <div>OPTIMIZE YOUR ADS.</div>
              <div>AUTOMATE WITH AI.</div>
              <div className="text-neon">CONNECT WITH AIDA.</div>
            </div>

            {/* Quick WhatsApp Action Button under heading */}
            <div className="mt-4 sm:mt-6 text-left">
              <a
                href={PORTFOLIO_DATA.profile.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-neon text-[#010828] font-grotesk text-xs sm:text-sm uppercase font-bold hover:opacity-90 transition-opacity shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+971 54 285 0423)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

        {/* Contact Icons (Bottom-left, absolute positioned vertical liquid-glass container) */}
        <div className="absolute left-[8%] bottom-[12%] sm:bottom-[15%] lg:bottom-[20%] pointer-events-auto z-20">
          <div className="liquid-glass rounded-[0.5rem] sm:rounded-[0.875rem] lg:rounded-[1.25rem] flex flex-col overflow-hidden shadow-2xl">
            
            {/* WhatsApp Button */}
            <a
              href={PORTFOLIO_DATA.profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="Chat on WhatsApp"
              className="w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[12vw] sm:h-[4.5rem] md:h-[4rem] lg:h-[5.2rem] flex items-center justify-center text-cream hover:text-neon hover:bg-white/10 transition-colors border-b border-white/10"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-emerald-400" />
            </a>

            {/* Email Button */}
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              aria-label="Email"
              title="Send Email"
              className="w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[12vw] sm:h-[4.5rem] md:h-[4rem] lg:h-[5.2rem] flex items-center justify-center text-cream hover:text-neon hover:bg-white/10 transition-colors border-b border-white/10"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-300" />
            </a>

            {/* Phone Button */}
            <a
              href={`tel:${PORTFOLIO_DATA.profile.whatsappNumber}`}
              aria-label="Phone"
              title="Direct Call"
              className="w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[12vw] sm:h-[4.5rem] md:h-[4rem] lg:h-[5.2rem] flex items-center justify-center text-cream hover:text-neon hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-sky-400" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

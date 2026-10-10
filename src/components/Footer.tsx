import React from 'react';
import { MessageCircle, Mail, MapPin, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors font-display"
            >
              Aida <span className="text-amber-400 font-normal">| Strategy & Growth</span>
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Digital Marketing Specialist & Creative Strategist based in Dubai, UAE. Designing performance funnels, high-converting paid campaigns, and AI-powered systems.
            </p>
            <p className="text-xs text-amber-400/90 italic font-serif">
              "{PORTFOLIO_DATA.profile.missionStatement}"
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me & Philosophy
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Shape Zoom Polyclinic
                </a>
              </li>
              <li>
                <a href="#crew" className="hover:text-white transition-colors">
                  Meet the Creative Crew
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Modular Capabilities
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Skills & Tools Matrix
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Direct Contact
            </div>
            <div className="space-y-2.5 text-sm">
              <a
                href={PORTFOLIO_DATA.profile.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{PORTFOLIO_DATA.profile.whatsappNumber} (WhatsApp)</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </a>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 text-neutral-500" />
                <span>{PORTFOLIO_DATA.profile.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Aida Siavoshi. All rights reserved. Dubai, United Arab Emirates.
          </div>

          <div className="flex items-center gap-6">
            <span>Crafted with Strategy, Creativity & AI</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

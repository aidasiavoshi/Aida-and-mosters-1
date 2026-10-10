import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, ServiceItem } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const getMascotName = (mascotId: 'strato' | 'adzy' | 'soci' | 'cody') => {
    switch (mascotId) {
      case 'strato':
        return 'Championed by Strato (Strategy)';
      case 'adzy':
        return 'Championed by Adzy (Ads)';
      case 'soci':
        return 'Championed by Soci (Social & Creative)';
      case 'cody':
        return 'Championed by Cody (AI & Automation)';
      default:
        return '';
    }
  };

  const handleInquire = (serviceId: string) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceId);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-950 text-neutral-100 border-b border-neutral-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <Layers className="w-4 h-4" />
            <span>Service Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            What I Do
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            Modular, high-impact marketing services tailored to founders, polyclinics, and high-growth brands seeking quantifiable growth in the UAE and internationally.
          </p>
        </div>

        {/* 6 Services Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.services.map((service, idx) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header row: Index & Mascot badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    0{idx + 1}.
                  </span>
                  <span className="text-[11px] font-medium text-neutral-400 bg-neutral-800/80 px-2.5 py-1 rounded-md border border-neutral-700/50">
                    {getMascotName(service.mascotAffiliation)}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                  {service.shortDesc}
                </p>

                {/* Key Outcomes */}
                <div className="space-y-2 mb-6 pt-4 border-t border-neutral-800">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    Key Outcomes
                  </div>
                  {service.keyOutcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => handleInquire(service.id)}
                  className="w-full flex items-center justify-between text-xs font-semibold py-2 text-neutral-300 group-hover:text-amber-400 transition-colors"
                >
                  <span>Select for Project Scope</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

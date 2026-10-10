import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  initialServiceId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Healthcare & Aesthetics',
    selectedServices: [] as string[],
    budgetRange: '$2,000 - $5,000 / month',
    timeline: 'Within 2-4 weeks',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      const match = PORTFOLIO_DATA.services.find(s => s.id === initialServiceId);
      if (match && !formData.selectedServices.includes(match.title)) {
        setFormData(prev => ({
          ...prev,
          selectedServices: [...prev.selectedServices, match.title]
        }));
      }
    }
  }, [initialServiceId]);

  const toggleService = (title: string) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(title);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter(s => s !== title)
          : [...prev.selectedServices, title]
      };
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const servicesList = formData.selectedServices.length > 0 
      ? formData.selectedServices.join(', ') 
      : 'General Growth & Strategy';
    const text = `Hi Aida! My name is ${formData.name || 'a prospective client'} from ${formData.company || 'our company'}. We are interested in ${servicesList}. Budget range: ${formData.budgetRange}. Timeline: ${formData.timeline}. Notes: ${formData.notes || 'Looking forward to connecting!'}`;
    return `https://wa.me/971542850423?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 text-neutral-100 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Partnership & Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Let's Work Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            Whether you want to launch high-converting Meta & Snapchat ad funnels, revitalize your social presence, or weave artificial intelligence into your marketing operations, let’s build your roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Communication Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Callout */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-neutral-900 to-neutral-950 border border-emerald-500/30 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">Fastest Contact: WhatsApp</h3>
                  <div className="text-xs text-emerald-400 font-mono">Direct Dubai Line (+971)</div>
                </div>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Send a direct message on WhatsApp for immediate campaign inquiries, consultation scheduling, or quick questions.
              </p>
              <div className="pt-2">
                <a
                  href={PORTFOLIO_DATA.profile.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-3.5 text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message +971 54 285 0423</span>
                </a>
              </div>
            </div>

            {/* Email & Location Credentials */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-xs text-neutral-400">Direct Email</div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                      className="text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                    >
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1 text-[11px] font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg border border-neutral-700 transition-colors"
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-neutral-800">
                <MapPin className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-xs text-neutral-400">Office Location</div>
                  <div className="text-sm font-semibold text-white">
                    {PORTFOLIO_DATA.profile.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Crew Mascot Support Banner */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>The Crew is on Standby</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Whether you need Strato's research rigor, Adzy's ad scaling, Soci's visual reels, or Cody's AI automations, every engagement is custom-tailored to your business unit economics.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Project Inquiry Builder */}
          <div className="lg:col-span-7 bg-neutral-900 rounded-3xl border border-neutral-800 p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Inquiry Brief Prepared!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your project outline has been logged. You can send it directly to Aida right now via WhatsApp for fastest turnaround.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3.5 text-xs font-medium text-neutral-400 hover:text-white"
                  >
                    Edit Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Project Consultation Scope
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Select your target areas to build an instant project scope brief.
                  </p>
                </div>

                {/* Service Selectors */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2.5">
                    Select Services Needed (Multi-Select)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PORTFOLIO_DATA.services.map((srv) => {
                      const isSelected = formData.selectedServices.includes(srv.title);
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => toggleService(srv.title)}
                          className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-amber-400/10 border-amber-400 text-white font-semibold'
                              : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                          }`}
                        >
                          <span className="truncate pr-2">{srv.title}</span>
                          <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] shrink-0 ${
                            isSelected ? 'bg-amber-400 border-amber-400 text-neutral-950' : 'border-neutral-700'
                          }`}>
                            {isSelected && '✓'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Company & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lumina Polyclinic Dubai"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Estimated Monthly Budget
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-200 focus:outline-none focus:border-amber-400"
                    >
                      <option value="Under $2,000 / month">Under $2,000 / month</option>
                      <option value="$2,000 - $5,000 / month">$2,000 - $5,000 / month</option>
                      <option value="$5,000 - $10,000 / month">$5,000 - $10,000 / month</option>
                      <option value="$10,000+ / month">$10,000+ / month (Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* Project Notes */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Project Goals / Key Challenges
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell me about your current marketing goals, patient acquisition targets, or current bottlenecks..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    <span>Submit & Generate Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 bg-neutral-950 border border-neutral-800 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Quick WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

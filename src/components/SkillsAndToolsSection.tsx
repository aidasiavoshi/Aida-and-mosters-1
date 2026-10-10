import React, { useState } from 'react';
import { Check, Cpu, LayoutGrid, Wrench, Search } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsAndToolsSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('strategy');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCategory = PORTFOLIO_DATA.skillCategories.find(c => c.id === activeCategoryId) || PORTFOLIO_DATA.skillCategories[0];

  // Filter skills across all categories if user searches
  const isSearching = searchQuery.trim().length > 0;
  const filteredSearchResults = isSearching
    ? PORTFOLIO_DATA.skillCategories.flatMap(cat => 
        cat.skills
          .filter(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(skill => ({ category: cat.title, skill }))
      )
    : [];

  return (
    <section id="capabilities" className="py-24 bg-neutral-900 text-neutral-100 border-b border-neutral-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <LayoutGrid className="w-4 h-4" />
            <span>Mastery & Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Core Skills & Marketing Platforms
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            An exhaustive inventory of tactical proficiencies, analytical frameworks, and cutting-edge software suites utilized across daily campaigns.
          </p>
        </div>

        {/* Skills Pillar 1: Core Skills & Expertise */}
        <div className="bg-neutral-950 rounded-3xl border border-neutral-800 p-8 sm:p-10 mb-16 shadow-xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-800">
            <div>
              <h3 className="text-2xl font-bold text-white font-display">
                Skills & Disciplines Breakdown
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Explore the 6 specialized pillars of digital execution
              </p>
            </div>

            {/* Live skill search input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search specific skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-neutral-900 border border-neutral-700/80 rounded-xl text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* Interactive Segmented Category Filter (Non-pill buttons per design guidelines) */}
          {!isSearching && (
            <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-900/90 rounded-2xl border border-neutral-800 mb-8">
              {PORTFOLIO_DATA.skillCategories.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>
          )}

          {/* Display Skills */}
          {isSearching ? (
            <div>
              <div className="text-xs font-mono text-neutral-400 mb-4">
                Found {filteredSearchResults.length} matching skills for "{searchQuery}"
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredSearchResults.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">{item.skill}</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">{item.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                  {activeCategory.title} ({activeCategory.skills.length} Competencies)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {activeCategory.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-neutral-900/70 border border-neutral-800/80 hover:border-neutral-700 flex items-center gap-2.5 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span className="text-xs font-medium text-neutral-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Skills Pillar 2: Marketing Tools & Platforms Matrix */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white font-display flex items-center gap-2">
              <Wrench className="w-5 h-5 text-amber-400" />
              <span>Marketing Tools & Platforms Matrix</span>
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              Battle-tested tools and software leveraged for performance scaling and automated operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.toolsMatrix.map((matrix) => (
              <div
                key={matrix.category}
                className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 pb-2 border-b border-neutral-800">
                    {matrix.category}
                  </h4>
                  <ul className="space-y-3">
                    {matrix.items.map((item, i) => (
                      <li key={i} className="flex flex-col">
                        <span className="text-sm font-semibold text-white">{item.name}</span>
                        <span className="text-xs text-neutral-400">{item.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

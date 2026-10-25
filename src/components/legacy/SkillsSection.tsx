import React from 'react';
import { ARSENAL_DOMAINS } from '../../data/portfolioData';
import { SpotlightCard } from '../common/SpotlightCard';
import { Code2, Layers, Cpu, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface SkillsSectionProps {
  onSelectDetail: (detailId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectDetail }) => {
  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="h-6 w-6 text-gold" />;
      case 'Layers':
        return <Layers className="h-6 w-6 text-gold" />;
      case 'Cpu':
        return <Cpu className="h-6 w-6 text-gold" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="h-6 w-6 text-gold" />;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cream/50 mb-2">
            <span className="text-gold">03</span>
            <span>/</span>
            <span>Technical Arsenal</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Four Engineering Domains
          </h2>
        </div>
        <p className="font-sans text-sm text-cream/60 max-w-md font-light leading-relaxed">
          Polyglot fluency, hardware prototyping, production web microservices, and offensive/defensive cybersecurity toolchains.
        </p>
      </div>

      {/* 4 Domain Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARSENAL_DOMAINS.map((domain) => (
          <SpotlightCard
            key={domain.id}
            onClick={() => onSelectDetail(domain.detailId)}
            className="p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                    {getDomainIcon(domain.icon)}
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-gold">
                      Domain {domain.domainNumber}
                    </span>
                    <h3 className="font-forum text-2xl sm:text-3xl text-white">
                      {domain.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="font-sans text-sm text-cream/70 mb-8 font-light">
                {domain.subtitle}
              </p>

              {/* Skills breakdown table / list */}
              <div className="space-y-3 border-t border-white/10 pt-6">
                {domain.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 rounded-xl bg-white/[0.015] px-3.5 py-2.5 border border-white/5 transition-colors group-hover:border-white/10"
                  >
                    <div className="flex items-center gap-2.5">
                      <Check className="h-3.5 w-3.5 text-gold/80" />
                      <span className="font-mono text-sm text-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-left sm:text-right pl-6 sm:pl-0">
                      <span className="font-sans text-xs text-cream/50 truncate max-w-[180px]">
                        {skill.note}
                      </span>
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-cream/80">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-8">
              <span className="text-xs font-mono text-cream/50">
                Detailed stack specifications
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-gold group-hover:translate-x-1 transition-transform">
                <span>View Domain Dossier</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

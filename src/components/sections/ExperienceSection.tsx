import React, { useState } from 'react';
import { EXPERIENCES } from '../../data/portfolioData';
import { ExperienceFolder } from '../ui/experience-folder';
import { SpotlightCard } from '../common/SpotlightCard';
import { ArrowRight, FolderKanban, LayoutGrid } from 'lucide-react';

interface ExperienceSectionProps {
  onSelectDetail: (detailId: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onSelectDetail }) => {
  const [viewMode, setViewMode] = useState<'folder' | 'grid'>('folder');

  // Archive 01: Industry Engineering & Systems Practice
  const industryDossiers = [
    EXPERIENCES[0], // Frontend Developer & Employee — Projectile Electronic
    EXPERIENCES[5], // Independent Technical Freelancer — Fiverr Global
    EXPERIENCES[1], // Executive Member — CPC DIU
  ];

  // Archive 02: National Defense, Leadership & Campus Governance
  const leadershipDossiers = [
    EXPERIENCES[3], // Lance Corporal (LCPL) — BNCC
    EXPERIENCES[2], // Active Member — Cybersecurity Club
    EXPERIENCES[4], // Active Member — Skill Up Club
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-10 md:py-12 overflow-x-clip">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b dark:border-white/10 border-black/10 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] dark:text-cream/50 text-neutral-500 mb-2">
            <span className="text-gold">10</span>
            <span>/</span>
            <span>Leadership & Industry</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl dark:text-white text-neutral-900 tracking-tight">
            Work Experience & Community Service
          </h2>
        </div>

        <div className="flex flex-col md:items-end gap-3">
          <p className="font-sans text-sm dark:text-cream/60 text-neutral-600 max-w-md font-light leading-relaxed">
            Combining professional industry roles, executive club governance, national youth service, and global technical freelancing.
          </p>

          {/* View Mode Switcher */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl border dark:border-white/10 border-black/10 dark:bg-black/50 bg-neutral-100 backdrop-blur-sm self-start md:self-end">
            <button
              onClick={() => setViewMode('folder')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                viewMode === 'folder'
                  ? 'bg-gold/20 text-gold border border-gold/40 shadow-sm'
                  : 'dark:text-cream/60 text-neutral-600 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <FolderKanban className="h-3.5 w-3.5" />
              <span>3D Dossier</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-gold/20 text-gold border border-gold/40 shadow-sm'
                  : 'dark:text-cream/60 text-neutral-600 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Flat Grid</span>
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'folder' ? (
        /* 3D Dossier Folders View (Uiverse.io by junaid_3671) */
        <div className="pt-6 pb-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 justify-items-center">
          <ExperienceFolder
            id="folder-industry"
            folderCode="ARCHIVE 01 // IND"
            folderLabel="Industry Practice & Technical Freelance"
            items={industryDossiers}
            onSelectDetail={onSelectDetail}
          />
          <ExperienceFolder
            id="folder-leadership"
            folderCode="ARCHIVE 02 // GOV"
            folderLabel="National Defense & Campus Governance"
            items={leadershipDossiers}
            onSelectDetail={onSelectDetail}
          />
        </div>
      ) : (
        /* Compact Grid View Fallback */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp) => (
            <SpotlightCard
              key={exp.id}
              onClick={() => onSelectDetail(exp.detailId)}
              className="p-6 sm:p-7 flex flex-col justify-between group cursor-pointer hover:border-gold/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="inline-flex items-center whitespace-nowrap shrink-0 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-gold shadow-[0_0_10px_rgba(212,175,55,0.08)]">
                    {exp.category}
                  </span>
                  <span className="font-mono text-[11px] dark:text-cream/50 text-neutral-500">{exp.period}</span>
                </div>

                <h3 className="font-forum text-xl dark:text-white text-neutral-900 mb-1 group-hover:text-gold transition-colors line-clamp-2">
                  {exp.role}
                </h3>
                <p className="font-sans text-xs font-medium text-gold/90 dark:text-gold/80 mb-1 line-clamp-2">
                  {exp.organization}
                </p>
                <p className="font-mono text-[11px] dark:text-cream/45 text-neutral-400 mb-3">{exp.location}</p>

                <p className="font-sans text-xs dark:text-cream/65 text-neutral-600 leading-relaxed font-light mb-4 line-clamp-2">
                  {exp.summary}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-gold group-hover:translate-x-1 transition-transform border-t dark:border-white/5 border-black/10 pt-3">
                <span>Inspect Role & Contributions</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </SpotlightCard>
          ))}
        </div>
      )}
    </div>
  );
};

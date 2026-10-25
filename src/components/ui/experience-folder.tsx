import React, { useState } from 'react';
import { ExperienceItem } from '@/types/portfolio';
import { FolderLock, FolderOpen, ArrowRight, ShieldCheck } from 'lucide-react';

interface ExperienceFolderProps {
  id: string;
  folderLabel: string;
  folderCode: string;
  items: ExperienceItem[];
  onSelectDetail: (detailId: string) => void;
}

/**
 * ExperienceFolder
 * 3D Interactive Dossier Folder adapted from Uiverse.io by junaid_3671.
 * Features 3D perspective stage, tiltable flap with frosted glass blur,
 * and 3 fanned-out career cards that elevate upon unsealing.
 */
export const ExperienceFolder: React.FC<ExperienceFolderProps> = ({
  id,
  folderLabel,
  folderCode,
  items,
  onSelectDetail,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Take up to 3 cards for the 3D fan layout
  const card1 = items[0];
  const card2 = items[1];
  const card3 = items[2];

  const renderCard = (item: ExperienceItem | undefined, cardClass: string) => {
    if (!item) return null;
    return (
      <div className={`card ${cardClass}`}>
        <div
          role="button"
          tabIndex={0}
          className="w-[260px] h-[178px] rounded-2xl border p-4 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.04] hover:border-gold/60 cursor-pointer select-none group/card"
          style={{
            backgroundColor: 'var(--folder-card-fill)',
            borderColor: 'var(--folder-card-stroke)',
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelectDetail(item.detailId);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.stopPropagation();
              onSelectDetail(item.detailId);
            }
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-gold">
                {item.category}
              </span>
              <span className="font-mono text-[10px] dark:text-cream/50 text-neutral-500">
                {item.period}
              </span>
            </div>
            <h4 className="font-forum text-sm sm:text-base dark:text-white text-neutral-900 font-semibold line-clamp-1 mb-0.5 group-hover/card:text-gold transition-colors">
              {item.role}
            </h4>
            <p className="font-sans text-[11px] text-gold/90 dark:text-gold/80 font-medium line-clamp-1">
              {item.organization}
            </p>
            <p className="font-sans text-[10px] dark:text-cream/65 text-neutral-600 line-clamp-2 mt-1.5 leading-relaxed font-light">
              {item.summary}
            </p>
          </div>
          <div className="flex items-center justify-between pt-2 border-t dark:border-white/10 border-black/10 text-[10px] font-mono text-gold">
            <span>Inspect Dossier</span>
            <ArrowRight className="h-3 w-3 group-hover/card:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      {/* Folder Header Metadata */}
      <div className="mb-2.5 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold block mb-0.5">
          {folderCode}
        </span>
        <h3 className="font-forum text-lg sm:text-xl dark:text-white text-neutral-900 tracking-wide">
          {folderLabel}
        </h3>
      </div>

      {/* 3D Dossier Container */}
      <label htmlFor={id} className="folder">
        <input
          id={id}
          type="checkbox"
          className="folder-toggle"
          checked={isOpen}
          onChange={(e) => setIsOpen(e.target.checked)}
        />

        <div className="folder-stage">
          {/* Back pocket */}
          <div className="folder-back">
            <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-gold/60 font-mono text-[9px] tracking-widest uppercase">
              <span>CONFIDENTIAL ARCHIVE</span>
              <span>3 RECORDS</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <ShieldCheck className="h-28 w-28 text-gold" />
            </div>
          </div>

          {/* Cards fan-deck */}
          <div className="cards">
            {renderCard(card1, 'card-1')}
            {renderCard(card2, 'card-2')}
            {renderCard(card3, 'card-3')}
          </div>

          {/* Front flap with SVG clipping path & frosted glass blur */}
          <div className="flap">
            <div className="flap-blur" />
            <svg
              width="321"
              height="241"
              viewBox="0 0 321 241"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M0 25C0 11.1929 11.1929 0 25 0H136.084C143.044 0 149.689 2.90139 154.42 8.00608L178.08 33.5343C182.811 38.639 189.456 41.5404 196.416 41.5404H296C309.807 41.5404 321 52.7333 321 66.5404V216C321 229.807 309.807 241 296 241H25C11.1929 241 0 229.807 0 216V25Z"
                fill="var(--folder-flap-fill)"
                fillOpacity="var(--folder-flap-fill-opacity)"
                stroke="var(--folder-flap-stroke)"
                strokeWidth="1.2"
              />
            </svg>

            {/* Folder Front Tab Label & Indicator */}
            <div className="absolute top-4 left-6 z-10 flex items-center gap-2 pointer-events-none">
              {isOpen ? (
                <FolderOpen className="h-4 w-4 shrink-0 text-gold" />
              ) : (
                <FolderLock className="h-4 w-4 shrink-0 text-gold/80" />
              )}
              <span className="font-mono text-[10px] tracking-wider uppercase text-gold font-semibold whitespace-nowrap">
                {folderCode}
              </span>
            </div>

            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between pointer-events-none z-10 text-[10px] font-mono dark:text-cream/50 text-neutral-600">
              <span className="tracking-wider">DOSSIER FILE</span>
              <span className="text-gold/90 font-medium">
                {isOpen ? 'UNSEALED' : 'CLICK TO UNSEAL'}
              </span>
            </div>
          </div>
        </div>
      </label>

      {/* Helper caption */}
      <span className="font-mono text-[10px] sm:text-[11px] dark:text-cream/40 text-neutral-500 mt-2.5 select-none">
        {isOpen ? 'Click folder to close · Select any card for details' : 'Click to unseal dossier · Hover to preview'}
      </span>
    </div>
  );
};

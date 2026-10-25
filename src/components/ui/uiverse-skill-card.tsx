import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface UiverseSkillCardProps {
  name: string;
  level: string;
  note: string;
  onClick?: () => void;
  circleColor?: string;
  className?: string;
}

/**
 * UiverseSkillCard
 * Adapted from Uiverse.io by Uncannypotato69
 * Compact luxury card with corner ripple circle expand effect on hover.
 */
export const UiverseSkillCard: React.FC<UiverseSkillCardProps> = ({
  name,
  level,
  note,
  onClick,
  circleColor = 'bg-gradient-to-br from-amber-300 via-[#d4af37] to-amber-600',
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`uiverse-skill-card group relative overflow-hidden rounded-xl border dark:border-white/10 border-black/10 dark:bg-[#121212] bg-white px-4 py-3 sm:px-4.5 sm:py-3.5 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/15 hover:border-gold/50 cursor-pointer flex flex-col justify-between min-h-[105px] sm:min-h-[112px] ${className}`}
    >
      {/* Expanding Ripple Circle from Top-Right (Uiverse.io by Uncannypotato69) */}
      <div
        className={`circle-ripple absolute h-14 w-14 -top-7 -right-7 rounded-full ${circleColor} shadow-sm pointer-events-none z-0`}
        aria-hidden="true"
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top Header & Level Badge */}
        <div>
          <div className="flex items-center justify-between gap-2.5 mb-1">
            <h4 className="font-forum text-sm sm:text-[15px] font-bold dark:text-white text-neutral-900 group-hover:text-black transition-colors duration-300 tracking-tight leading-snug truncate">
              {name}
            </h4>
            <span className="inline-flex items-center shrink-0 rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-gold transition-all duration-300 group-hover:border-black/30 group-hover:bg-black group-hover:text-gold shadow-sm">
              {level}
            </span>
          </div>
          <p className="font-sans text-[11px] sm:text-xs dark:text-cream/70 text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300 font-light leading-snug line-clamp-2">
            {note}
          </p>
        </div>

        {/* Bottom 'More Info' CTA with animated underline & arrow */}
        <div className="mt-2 pt-1.5 flex items-center justify-between border-t border-black/5 dark:border-white/5 group-hover:border-black/15 transition-colors duration-300">
          <div className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-gold group-hover:text-black transition-colors duration-300">
            <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gold transition-all duration-300 group-hover:after:bg-black">
              More Info
            </span>
            <ArrowRight className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
          <span className="font-mono text-[9px] text-neutral-400 dark:text-cream/40 group-hover:text-black/60 transition-colors duration-300 uppercase tracking-wider">
            Dossier Spec
          </span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import {
  ACADEMIC_INSTITUTIONS,
  CORE_COURSEWORK,
} from '../../data/portfolioData';
import { SpotlightCard } from '../common/SpotlightCard';
import { ArrowRight } from 'lucide-react';
import { Tilt } from '@/components/core/tilt';

interface EducationSectionProps {
  onSelectDetail: (detailId: string) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onSelectDetail }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b dark:border-white/10 border-black/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] dark:text-cream/50 text-neutral-500 mb-2">
            <span className="text-gold">02</span>
            <span>/</span>
            <span>Academic Matrix</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl dark:text-white text-neutral-900 tracking-tight">
            Education & Academic Foundations
          </h2>
        </div>
        <p className="font-sans text-sm dark:text-cream/60 text-neutral-600 max-w-md font-light leading-relaxed">
          Rigorous computer science degree track, institutional academic credentials, and foundational curriculum rigor.
        </p>
      </div>

      {/* Academic Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {ACADEMIC_INSTITUTIONS.map((item) => (
          <SpotlightCard
            key={item.id}
            onClick={() => onSelectDetail(item.detailId)}
            className="p-6 sm:p-7 flex flex-col justify-between group cursor-pointer hover:border-gold/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="inline-flex items-center whitespace-nowrap shrink-0 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-gold shadow-[0_0_10px_rgba(212,175,55,0.08)]">
                  {item.badge}
                </span>
                <span className="font-mono text-[11px] dark:text-cream/50 text-neutral-500">{item.period}</span>
              </div>

              <h3 className="font-forum text-xl dark:text-white text-neutral-900 tracking-wide mb-1 group-hover:text-gold transition-colors line-clamp-2">
                {item.degree}
              </h3>
              <p className="font-sans text-xs font-medium text-gold/90 dark:text-gold/80 mb-0.5 line-clamp-2">
                {item.institution}
              </p>
              <p className="font-mono text-[11px] dark:text-cream/45 text-neutral-400 mb-4">{item.location}</p>

              <div className="space-y-1.5 border-t dark:border-white/10 border-black/10 pt-3 mb-4">
                {item.highlights.slice(0, 2).map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs dark:text-cream/70 text-neutral-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold/70 mt-1 shrink-0" />
                    <span className="line-clamp-1">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-gold group-hover:translate-x-1 transition-transform pt-3 border-t dark:border-white/5 border-black/10">
              <span>View Academic Dossier</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* 8 Core Coursework Badges */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/50 text-neutral-500 block">
              Curriculum Rigor
            </span>
            <h3 className="font-forum text-2xl sm:text-3xl dark:text-white text-neutral-900 mt-1">
              8 Core Computer Science Coursework Badges
            </h3>
          </div>
          <span className="font-mono text-xs dark:text-cream/40 text-neutral-500 hidden sm:inline-block">
            Theoretical & Applied Foundations
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_COURSEWORK.map((course, idx) => (
            <Tilt
              key={idx}
              rotationFactor={8}
              isReverse
              className="h-full"
            >
              <div
                style={{
                  borderRadius: '16px',
                  transform: 'translateZ(20px)',
                  transformStyle: 'preserve-3d',
                }}
                className="group h-full rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-5 transition-all duration-300 dark:hover:border-gold/60 hover:border-gold/50 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center whitespace-nowrap shrink-0 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-gold shadow-[0_0_8px_rgba(212,175,55,0.06)]">
                      {course.badge}
                    </span>
                    <span className="font-mono text-mono text-[10px] dark:text-cream/40 text-neutral-400">0{idx + 1}</span>
                  </div>
                  <h4 className="font-forum text-lg dark:text-white text-neutral-900 mb-2 group-hover:text-gold transition-colors">
                    {course.name}
                  </h4>
                  <p className="font-sans text-xs dark:text-cream/60 text-neutral-600 leading-relaxed font-light">
                    {course.focus}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;

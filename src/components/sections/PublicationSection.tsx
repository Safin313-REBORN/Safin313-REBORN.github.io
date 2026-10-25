import React from 'react';
import { SpotlightCard } from '../common/SpotlightCard';
import { ArrowRight, Award, FileText } from 'lucide-react';

interface PublicationSectionProps {
  onSelectDetail: (detailId: string) => void;
}

export const PublicationSection: React.FC<PublicationSectionProps> = ({ onSelectDetail }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16 sm:py-24 overflow-x-clip">
      {/* Sector Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b dark:border-white/10 border-black/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] dark:text-cream/50 text-neutral-500 mb-2">
            <span className="text-gold">Engineering Sector</span>
            <span>/</span>
            <span>04</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl dark:text-white text-neutral-900 tracking-tight">
            Academic Research & Scientific Publications
          </h2>
        </div>
        <p className="font-sans text-sm dark:text-cream/60 text-neutral-600 max-w-md font-light leading-relaxed">
          Peer-reviewed scientific contributions in biometric telemetry, edge computing, and ensemble machine learning.
        </p>
      </div>

      {/* Flagship Paper Spotlight Card */}
      <SpotlightCard
        onClick={() => onSelectDetail('achieve-iconeect')}
        className="p-5 sm:p-8 border-gold/40 dark:bg-[#111111] bg-white shadow-lg cursor-pointer group hover:border-gold transition-colors"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b dark:border-white/10 border-black/10">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="inline-flex h-5 items-center gap-1 whitespace-nowrap shrink-0 rounded-full border border-gold/50 bg-gold/15 px-2.5 font-mono text-[10px] font-semibold text-gold uppercase tracking-wider shadow-[0_0_12px_rgba(212,175,55,0.12)]">
                <Award className="h-3 w-3" />
                Conference Authorship
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border dark:border-white/15 border-black/10 dark:bg-white/5 bg-neutral-100 px-2.5 py-0.5 font-mono text-[10px] dark:text-cream/80 text-neutral-700">
                iCONEECT 2026
              </span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-500 font-medium">
                Accepted & Presented
              </span>
            </div>

            <h3 className="font-forum text-xl sm:text-2xl dark:text-white text-neutral-900 tracking-wide leading-snug mb-2 group-hover:text-gold transition-colors line-clamp-2">
              SleepGuard: IoT Machine Learning Framework for Sleep Apnea Risk Prediction Using SpO2 and Heart Rate
            </h3>

            {/* Author Attribution */}
            <div className="flex items-center gap-1.5 mb-3 text-xs dark:text-cream/70 text-neutral-600 font-sans">
              <span className="dark:text-cream/50 text-neutral-500">Lead Author:</span>
              <span className="font-cinzel text-gold font-bold tracking-wider">Saharia Hassan Safin</span>
              <span className="dark:text-cream/40 text-neutral-400">·</span>
              <span className="dark:text-cream/75 text-neutral-600 font-sans">Dept. of CSE, DIU</span>
            </div>

            <p className="font-sans text-xs dark:text-cream/65 text-neutral-600 leading-relaxed font-light mb-4 line-clamp-2">
              Bridges consumer-grade pulse oximetry hardware with an ensemble machine learning pipeline, predicting obstructive sleep apnea risk with clinical-grade fidelity from just four easily acquired signals.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {['Soft-Voting Ensemble', 'SMOTE Balancing', 'ESP32 Bio-Telemetry'].map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-md border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-2 py-0.5 font-mono text-[10px] dark:text-cream/80 text-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Compact Metric Highlight */}
          <div className="lg:w-64 rounded-xl border dark:border-white/10 border-black/10 dark:bg-[#141414] bg-neutral-50 p-5 shadow-sm shrink-0 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider dark:text-cream/50 text-neutral-500 block mb-1">
                Test Classification Accuracy
              </span>
              <span className="font-forum text-3xl text-gold font-bold">98.95%</span>
              <span className="font-sans text-[10px] dark:text-cream/60 text-neutral-600 block mt-0.5">Soft-Voting Hybrid Architecture</span>
            </div>
            <div className="flex items-center justify-between pt-3 mt-3 border-t dark:border-white/10 border-black/10 text-xs font-mono">
              <span className="dark:text-cream/50 text-neutral-500">Cohort</span>
              <span className="dark:text-white text-neutral-900 font-semibold">471 Cases</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 mt-4">
          <div className="flex items-center gap-2 font-mono text-xs dark:text-cream/60 text-neutral-600">
            <FileText className="h-3.5 w-3.5 text-gold" />
            <span className="text-[11px]">Published at iCONEECT 2026 Proceedings</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-gold group-hover:translate-x-1 transition-transform">
            <span>Read Research Dossier</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

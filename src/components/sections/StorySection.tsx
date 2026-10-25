import React from 'react';
import { CANDIDATE_INFO, PILLARS } from '../../data/portfolioData';
import { HoverFeatureCards, type HoverFeatureCardItem } from '../ui/hover-feature-cards';
import { SoftBlurIn } from '../ui/soft-blur-in';
import { Cpu, Radio, Shield, Quote } from 'lucide-react';

interface StorySectionProps {
  onSelectDetail: (detailId: string) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onSelectDetail }) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="h-5 w-5 text-gold" />;
      case 'Radio':
        return <Radio className="h-5 w-5 text-gold" />;
      case 'Shield':
      default:
        return <Shield className="h-5 w-5 text-gold" />;
    }
  };

  const pillarCards: HoverFeatureCardItem[] = PILLARS.map((pillar) => ({
    name: pillar.title,
    subtitle: pillar.subtitle,
    number: pillar.number,
    description: pillar.description,
    icon: getPillarIcon(pillar.icon),
    tags: pillar.traits,
    onClick: () => onSelectDetail(pillar.detailId),
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 md:pt-24 pb-10 md:pb-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b dark:border-white/10 border-black/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] dark:text-cream/50 text-neutral-500 mb-2">
            <span className="text-gold">01</span>
            <span>/</span>
            <span>Origin & Ethos</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl dark:text-white text-neutral-900 tracking-tight">
            Engineering Story & Core Pillars
          </h2>
        </div>
        <p className="font-sans text-sm dark:text-cream/60 text-neutral-600 max-w-md font-light leading-relaxed">
          From deterministic pointer mechanics in C to cloud-scale MERN deployments and peer-reviewed biomedical machine learning.
        </p>
      </div>

      {/* Executive Bio & Philosophy Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-7 rounded-3xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-6 sm:p-8 md:p-10 shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
          <span className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/40 text-neutral-500 block mb-4">
            Executive Summary
          </span>
          <p className="font-sans text-base sm:text-lg dark:text-cream/85 text-neutral-800 leading-relaxed font-light mb-6">
            {CANDIDATE_INFO.executiveBio}
          </p>

          <div className="pt-4 border-t dark:border-white/10 border-black/10 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono dark:text-cream/50 text-neutral-500">Target Verticals:</span>
            {CANDIDATE_INFO.openTo.map((role, idx) => (
              <span
                key={idx}
                className="rounded-full border dark:border-white/10 border-black/10 dark:bg-white/[0.04] bg-neutral-100 px-3 py-1 font-mono text-xs dark:text-cream/80 text-neutral-700"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)] p-6 sm:p-8 md:p-10 relative overflow-hidden group">
          {/* Theme-Active Animated Editorial Grid Pattern Background */}
          <div
            aria-hidden="true"
            className="cyber-pattern absolute inset-0 pointer-events-none z-0"
          />

          <Quote className="h-12 w-12 dark:text-white/10 text-neutral-200 absolute -top-2 -right-2 z-10 pointer-events-none" />

          <div className="relative z-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold block mb-4">
              Architectural Philosophy
            </span>
            <blockquote className="font-forum text-xl sm:text-2xl dark:text-cream text-neutral-900 leading-relaxed text-left [text-wrap:pretty]">
              <SoftBlurIn
                triggerOnView={true}
                delay={120}
                stagger={10}
                className="inline font-forum"
                prefix={<span className="text-gold font-serif mr-1 select-none inline-block">“</span>}
                suffix={<span className="text-gold font-serif ml-0.5 select-none inline-block">”</span>}
              >
                {CANDIDATE_INFO.philosophyQuote}
              </SoftBlurIn>
            </blockquote>
          </div>

          <div className="relative z-10 pt-8 flex items-center justify-between border-t dark:border-white/10 border-black/10 mt-6">
            <div>
              <div className="font-cinzel text-base tracking-[0.14em] uppercase dark:text-cream text-neutral-900 font-semibold">Saharia Hassan Safin</div>
              <div className="font-mono text-[11px] dark:text-cream/50 text-neutral-500">
                Full-Stack · Embedded · Cyber
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-alex text-3xl sm:text-4xl text-gold italic -rotate-3 select-none leading-none tracking-wide drop-shadow-[0_2px_12px_rgba(212,175,55,0.3)]">
                Safin
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] dark:text-cream/40 text-neutral-400 mt-1 select-none">
                Signature
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Foundational Pillars with HoverFeatureCards */}
      <div className="mt-14 sm:mt-20 pt-10 border-t dark:border-white/10 border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/50 text-neutral-500 block">
              Foundational Architecture
            </span>
            <h3 className="font-forum text-2xl sm:text-3xl dark:text-white text-neutral-900 mt-1">
              Three Pillars of Specialization
            </h3>
          </div>
          <span className="font-mono text-xs text-gold/80 sm:dark:text-cream/40 sm:text-neutral-500">
            Click any pillar to open deep-dive dossier
          </span>
        </div>

        <HoverFeatureCards
          items={pillarCards}
          className="grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        />
      </div>
    </div>
  );
};

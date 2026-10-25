import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { ROADMAP_PHASES } from '../../data/portfolioData';
import { SpotlightCard } from '../common/SpotlightCard';
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react';

interface RoadmapSectionProps {
  onSelectDetail: (detailId: string) => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onSelectDetail }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(typeof window !== 'undefined' && window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Scroll tracking for the vertical spine beam
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 70%'],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(springProgress, [0, 1], ['0%', '100%']);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Mastered':
        return (
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold dark:text-emerald-300 text-emerald-700 shadow-sm">
            <CheckCircle2 className="h-3 w-3" />
            <span>Mastered</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-full border border-gold/50 bg-gold/15 px-3 py-1 font-mono text-[11px] font-medium text-gold shadow-[0_0_12px_rgba(212,175,55,0.12)]">
            <Clock className="h-3 w-3" />
            <span>In Progress</span>
          </span>
        );
      case 'Target Goal':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-full border dark:border-white/20 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-[11px] font-medium dark:text-cream/70 text-neutral-700">
            <Target className="h-3 w-3" />
            <span>Target Goal</span>
          </span>
        );
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16 sm:py-24 overflow-x-clip" ref={containerRef}>
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b dark:border-white/10 border-black/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] dark:text-cream/50 text-neutral-500 mb-2">
            <span className="text-gold">08</span>
            <span>/</span>
            <span>Trajectory</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl dark:text-white text-neutral-900 tracking-tight">
            Four-Phase Engineering Roadmap
          </h2>
        </div>
        <p className="font-sans text-sm dark:text-cream/60 text-neutral-600 max-w-md font-light leading-relaxed">
          A disciplined progression from low-level C memory models to production distributed clouds, hardware robotics, and defensive cybersecurity.
        </p>
      </div>

      {/* Progressive Roadmap Pipeline */}
      <div className="relative overflow-x-clip">
        {/* ======================================================== */}
        {/* DESKTOP CENTRAL SPINE (Glowing Green Source Emitter)     */}
        {/* ======================================================== */}
        {/* Background track spine */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute left-1/2 top-4 bottom-8 w-px -translate-x-1/2 dark:bg-white/10 bg-black/10"
        />

        {/* Dynamic active scroll progress beam */}
        <motion.div
          aria-hidden="true"
          style={{ height: lineHeight }}
          className="hidden lg:block absolute left-1/2 top-4 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-emerald-400 via-emerald-500 to-gold shadow-[0_0_14px_rgba(16,185,129,0.85)] z-10"
        />

        {/* Vibrant Emerald Emitter Pulse at the start of the line */}
        <div
          aria-hidden="true"
          className="hidden lg:flex absolute left-1/2 top-4 -translate-x-1/2 -translate-y-1/2 z-30 items-center justify-center pointer-events-none"
        >
          <span className="absolute h-7 w-7 rounded-full bg-emerald-500/30 animate-ping duration-1000" />
          <span className="h-5 w-5 rounded-full bg-emerald-500/40 blur-xs" />
          <span className="absolute h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981,0_0_24px_rgba(16,185,129,0.9)]" />
        </div>

        {/* Dynamic leading spark at the tip of the scrolling beam */}
        <motion.div
          aria-hidden="true"
          style={{ top: lineHeight }}
          className="hidden lg:block absolute left-1/2 top-4 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
        >
          <div className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_14px_#34d399,0_0_24px_#10b981]" />
        </motion.div>

        {/* ======================================================== */}
        {/* MOBILE SPINE (Left aligned with green emitter)           */}
        {/* ======================================================== */}
        <div
          aria-hidden="true"
          className="lg:hidden absolute left-6 top-4 bottom-8 w-px dark:bg-white/10 bg-black/10"
        />
        <motion.div
          aria-hidden="true"
          style={{ height: lineHeight }}
          className="lg:hidden absolute left-6 top-4 w-[2px] origin-top bg-gradient-to-b from-emerald-400 via-emerald-500 to-gold shadow-[0_0_12px_rgba(16,185,129,0.8)] z-10"
        />
        <div
          aria-hidden="true"
          className="lg:hidden flex absolute left-6 top-4 -translate-x-1/2 -translate-y-1/2 z-30 items-center justify-center pointer-events-none"
        >
          <span className="absolute h-6 w-6 rounded-full bg-emerald-500/30 animate-ping" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
        </div>

        {/* ======================================================== */}
        {/* ROADMAP CARDS (Coming from the middle line on scroll)    */}
        {/* ======================================================== */}
        <div className="space-y-16 lg:space-y-24">
          {ROADMAP_PHASES.map((phase, idx) => {
            const isEven = idx % 2 === 0;

            // When card is on left (isEven): starts with positive x offset (at the center line on desktop)
            // When card is on right (!isEven): starts with negative x offset (at the center line on desktop)
            // On mobile (< 1024px): cards slide up smoothly (y: 20) with x: 0 to prevent sideways overflow
            const cardInitialX = isDesktop ? (isEven ? 90 : -90) : 0;
            const cardInitialY = isDesktop ? 0 : 20;

            return (
              <div
                key={phase.number}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Desktop Center Milestone Node with Emerald Pulse on View */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { scale: 0.5, opacity: 0 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4, margin: '-40px' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden="true"
                  className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20 h-11 w-11 items-center justify-center rounded-full border-2 dark:border-emerald-500/70 border-emerald-600/60 dark:bg-black bg-white shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-transform duration-300 hover:scale-110"
                >
                  <span className="font-mono text-xs font-bold text-gold">{phase.number}</span>
                </motion.div>

                {/* Mobile Milestone Indicator Node */}
                <div
                  aria-hidden="true"
                  className="lg:hidden absolute left-6 -translate-x-1/2 top-4 z-20 h-8 w-8 rounded-full border-2 border-emerald-500/70 dark:bg-black bg-white shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center"
                >
                  <span className="font-mono text-[11px] font-bold text-gold">{phase.number}</span>
                </div>

                {/* Horizontal Connector Line branching out from the center line to the card */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3, margin: '-50px' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  style={{ originX: isEven ? 1 : 0 }}
                  aria-hidden="true"
                  className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-[2px] z-10 pointer-events-none ${
                    isEven
                      ? 'right-1/2 w-8 bg-gradient-to-l from-emerald-500/80 via-gold/50 to-transparent'
                      : 'left-1/2 w-8 bg-gradient-to-r from-emerald-500/80 via-gold/50 to-transparent'
                  }`}
                />

                {/* Animated Content Card emerging FROM the center line on scroll */}
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: cardInitialX,
                          y: cardInitialY,
                          scale: 0.95,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          scale: 1,
                        }
                  }
                  viewport={{ once: true, amount: 0.25, margin: '-50px' }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full lg:w-1/2 pl-10 sm:pl-12 lg:pl-0"
                >
                  <SpotlightCard
                    onClick={() => onSelectDetail(phase.detailId)}
                    className="p-5 sm:p-8 group/card transition-all duration-300 dark:hover:border-emerald-500/50 hover:border-emerald-500/40"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="lg:hidden font-mono text-xs font-bold text-gold">
                          Phase {phase.number}
                        </span>
                        {getStatusBadge(phase.status)}
                      </div>
                      <span className="font-mono text-xs dark:text-cream/50 text-neutral-500">
                        {phase.timeline}
                      </span>
                    </div>

                    <h3 className="font-forum text-2xl dark:text-white text-neutral-900 tracking-wide mb-3 group-hover/card:text-gold transition-colors">
                      {phase.title}
                    </h3>
                    <p className="font-sans text-sm dark:text-cream/70 text-neutral-600 leading-relaxed font-light mb-6">
                      {phase.summary}
                    </p>

                    {/* Competency badges */}
                    <div className="space-y-2 border-t dark:border-white/10 border-black/10 pt-4 mb-4">
                      <span className="font-mono text-[10px] uppercase tracking-wider dark:text-cream/40 text-neutral-500 block">
                        Core Competencies Acquired / Target
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {phase.competencies.map((comp, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-center gap-2 text-xs font-mono dark:text-cream/80 text-neutral-700 rounded-lg dark:bg-[#161616] bg-neutral-100 border dark:border-white/5 border-black/5 px-2.5 py-1.5 transition-colors group-hover/card:border-gold/20"
                          >
                            <span className="h-1 w-1 rounded-full bg-emerald-400 group-hover/card:bg-gold transition-colors" />
                            <span className="truncate">{comp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-gold group-hover/card:translate-x-1 transition-transform pt-2">
                      <span>Inspect Roadmap Milestone</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </SpotlightCard>
                </motion.div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;

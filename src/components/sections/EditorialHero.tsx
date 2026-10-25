import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, Shield, Cpu, Code2, BookOpen, ArrowUpRight } from 'lucide-react';
import { ProgressiveBlur } from '../ui/progressive-blur';
import { CountUp } from '../ui/count-up';
import { cn } from '@/lib/utils';

interface EditorialHeroProps {
  onNavigateSection?: (sectionId: string) => void;
}

const SPECIALIZATIONS = [
  {
    label: 'Full-Stack Architecture',
    sectionId: 'web-dev',
    icon: Code2,
    accent: 'text-amber-500 dark:text-amber-400',
    arrowColor: 'group-hover:text-amber-500 dark:group-hover:text-amber-400',
    hoverGlow: 'hover:border-amber-400/60 dark:hover:border-amber-400/60 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:bg-amber-500/[0.04] dark:hover:bg-amber-400/[0.06]',
  },
  {
    label: 'Robotics / Embedded IoT',
    sectionId: 'robotics-iot',
    icon: Cpu,
    accent: 'text-sky-500 dark:text-sky-400',
    arrowColor: 'group-hover:text-sky-500 dark:group-hover:text-sky-400',
    hoverGlow: 'hover:border-sky-400/60 dark:hover:border-sky-400/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:bg-sky-500/[0.04] dark:hover:bg-sky-400/[0.06]',
  },
  {
    label: 'Defensive Cybersecurity',
    sectionId: 'cybersecurity',
    icon: Shield,
    accent: 'text-emerald-500 dark:text-emerald-400',
    arrowColor: 'group-hover:text-emerald-500 dark:group-hover:text-emerald-400',
    hoverGlow: 'hover:border-emerald-400/60 dark:hover:border-emerald-400/60 hover:shadow-[0_0_20px_rgba(52,211,153,0.25)] hover:bg-emerald-500/[0.04] dark:hover:bg-emerald-400/[0.06]',
  },
  {
    label: 'Research Paper Author',
    sectionId: 'publications',
    icon: BookOpen,
    accent: 'text-purple-500 dark:text-purple-400',
    arrowColor: 'group-hover:text-purple-500 dark:group-hover:text-purple-400',
    hoverGlow: 'hover:border-purple-400/60 dark:hover:border-purple-400/60 hover:shadow-[0_0_20px_rgba(192,132,252,0.25)] hover:bg-purple-500/[0.04] dark:hover:bg-purple-400/[0.06]',
  },
];

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onNavigateSection }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Automatically sync portrait cutout with active theme (Dark mode -> Dark suit look, Light mode -> Studio formal look)
  const activeLook: 'dark' | 'light' = mounted && resolvedTheme === 'light' ? 'light' : 'dark';

  const handleNavigate = (sectionId: string) => {
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    }
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMore = () => {
    handleNavigate('story');
  };

  return (
    <section
      id="hero"
      aria-label="Editorial Introduction — Saharia Hassan Safin"
      className="relative min-h-[100dvh] h-auto lg:h-[100dvh] w-full overflow-hidden select-none dark:text-cream text-foreground font-hn flex flex-col justify-between"
    >
      {/* =========================================================================
          BACKGROUND LAYER: Ambient luxury bloom over full website background
          ========================================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        {/* Ambient radial soft glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] rounded-full bg-gradient-to-b from-white/[0.04] via-gold/[0.02] to-transparent blur-3xl opacity-70" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/[0.015] blur-3xl" />
      </div>

      {/* =========================================================================
          BACKGROUND CURSIVE LAYER: User's Name "Saharia Hassan Safin" in Cursive
          Running in continuous luxury cursive marquee behind the portrait cutout
          ========================================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[28%] xs:top-[30%] sm:top-[33%] left-0 right-0 -translate-y-1/2 flex select-none overflow-hidden opacity-25 z-10"
      >
        <div className="marquee flex w-max whitespace-nowrap font-cinzel text-[10vh] sm:text-[15vh] lg:text-[19vh] leading-none text-cream tracking-[0.18em] uppercase font-semibold">
          <span className="pr-16">Saharia Hassan Safin</span>
          <span className="pr-16 text-gold/60 font-serif text-[6vh] sm:text-[9vh]">✦</span>
          <span className="pr-16">Saharia Hassan Safin</span>
          <span className="pr-16 text-gold/60 font-serif text-[6vh] sm:text-[9vh]">✦</span>
        </div>
        <div
          aria-hidden="true"
          className="marquee flex w-max whitespace-nowrap font-cinzel text-[10vh] sm:text-[15vh] lg:text-[19vh] leading-none text-cream tracking-[0.18em] uppercase font-semibold"
        >
          <span className="pr-16">Saharia Hassan Safin</span>
          <span className="pr-16 text-gold/60 font-serif text-[6vh] sm:text-[9vh]">✦</span>
          <span className="pr-16">Saharia Hassan Safin</span>
          <span className="pr-16 text-gold/60 font-serif text-[6vh] sm:text-[9vh]">✦</span>
        </div>
      </div>

      {/* Secondary subtle cursive echo layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[39%] xs:top-[41%] sm:top-[45%] left-0 right-0 -translate-y-1/2 flex select-none overflow-hidden opacity-10 z-10"
      >
        <div className="marquee-reverse flex w-max whitespace-nowrap font-alex text-[8vh] sm:text-[12vh] leading-none text-cream/80 tracking-widest">
          <span className="pr-12">Full-Stack Architect &middot; Embedded Firmware &middot; Defensive Cybersecurity &middot; iCONEECT 2026 Author &middot;</span>
          <span className="pr-12">Full-Stack Architect &middot; Embedded Firmware &middot; Defensive Cybersecurity &middot; iCONEECT 2026 Author &middot;</span>
        </div>
      </div>

      {/* =========================================================================
          CENTER LAYER: Front Portrait Cutout (Synced with Theme & Ambient Hover Glow)
          ========================================================================= */}
      <div className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Portrait of Saharia Hassan Safin"
          className="group pointer-events-auto relative h-[78vh] xs:h-[82vh] sm:h-[75vh] lg:h-[82vh] max-h-[860px] w-auto flex items-end justify-center cursor-default select-none rounded-t-3xl"
        >
          {/* Ambient blur light glow effect that blooms on cursor hover */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-12 sm:-inset-16 rounded-full blur-[70px] sm:blur-[100px] -z-10 transition-all duration-700"
            animate={{
              opacity: isHovered ? (resolvedTheme === 'dark' ? 0.75 : 0.55) : 0.15,
              scale: isHovered ? 1.08 : 0.95,
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              background:
                resolvedTheme === 'dark'
                  ? 'radial-gradient(circle at 50% 40%, rgba(212, 175, 55, 0.32) 0%, rgba(255, 255, 255, 0.16) 40%, transparent 72%)'
                  : 'radial-gradient(circle at 50% 40%, rgba(166, 124, 0, 0.28) 0%, rgba(245, 210, 120, 0.20) 40%, transparent 72%)',
            }}
          />

          {/* Portrait Image with Smooth Hover Aura and Cross-Animation Synced to Theme */}
          <motion.div
            className="relative h-full w-auto flex items-end justify-center"
            animate={{
              scale: isHovered ? 1.035 : 1,
              y: isHovered ? -8 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 24,
              mass: 0.8,
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.picture
                key={activeLook}
                initial={{
                  opacity: 0,
                  scale: 1.04,
                  filter: 'blur(8px) brightness(1.2)',
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px) brightness(1)',
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  filter: 'blur(6px) brightness(1.1)',
                }}
                transition={{
                  duration: 0.42,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full w-auto flex items-end"
              >
                <source
                  media="(max-width: 640px)"
                  srcSet={
                    activeLook === 'dark'
                      ? '/assets/saharia-safin-dark-cutout.png'
                      : '/assets/saharia-safin-cutout.png'
                  }
                />
                <img
                  src={
                    activeLook === 'dark'
                      ? '/assets/saharia-safin-dark-cutout.png'
                      : '/assets/saharia-safin-cutout.png'
                  }
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback =
                      activeLook === 'dark'
                        ? '/assets/saharia-safin-dark.jpg'
                        : '/assets/saharia-safin.jpg';
                    if (!target.src.includes(fallback)) {
                      target.src = fallback;
                    }
                  }}
                  alt={
                    activeLook === 'dark'
                      ? 'Portrait of Saharia Hassan Safin in Executive Dark Suit'
                      : 'Portrait of Saharia Hassan Safin in Studio Formal'
                  }
                  decoding="async"
                  loading="eager"
                  className="editorial-portrait h-full w-auto max-w-[100vw] sm:max-w-none object-contain object-bottom filter dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
                />
              </motion.picture>
            </AnimatePresence>
          </motion.div>

          {/* Bottom vignette blend into floor */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t dark:from-black dark:via-black/85 from-[#fbfbfa] via-[#fbfbfa]/85 to-transparent pointer-events-none"
          />
        </div>
      </div>

      {/* =========================================================================
          TOP MOBILE-ONLY EDITORIAL KICKER (Circled Focal Area in Phone View)
          ========================================================================= */}
      <div className="sm:hidden pointer-events-auto relative z-30 flex flex-col items-center justify-center text-center px-4 pt-[74px] pb-1 animate-fade-in">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border dark:border-white/15 border-black/10 dark:bg-black/60 bg-white/80 backdrop-blur-md shadow-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold font-medium">
            Software Architect &middot; Systems Engineer
          </span>
        </div>
        <p className="mt-1 font-forum text-[11px] tracking-[0.18em] uppercase dark:text-cream/70 text-neutral-600">
          Full-Stack &middot; Embedded IoT &middot; Research
        </p>
      </div>

      {/* Top Spacer for Desktop to account for fixed Navbar */}
      <div className="hidden sm:block h-24 pointer-events-none" />

      {/* =========================================================================
          DOWN / BOTTOM LAYER: Skills & Highlights (Left & Right) + Explore More (Center)
          ========================================================================= */}
      <div className="relative z-30 w-full px-3 sm:px-8 lg:px-14 pb-3 sm:pb-10 pt-1 sm:pt-4 flex flex-col justify-end">
        {/* Highlights and Skills Grid */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between gap-4 sm:gap-6 pointer-events-none">
          {/* Left Side: Skills & Engineering Focus */}
          <div className="flex flex-col gap-1 sm:gap-2 max-w-lg pointer-events-auto">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[8.5px] sm:text-xs font-mono uppercase tracking-[0.16em] sm:tracking-[0.2em] text-cream/50 mb-0.5 sm:mb-1">
              <Sparkles className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-gold" />
              <span>Core Specializations</span>
            </div>

            <div className="flex flex-wrap gap-1 sm:gap-2.5">
              {SPECIALIZATIONS.map((spec) => {
                const IconComponent = spec.icon;
                return (
                  <motion.button
                    key={spec.label}
                    type="button"
                    onClick={() => handleNavigate(spec.sectionId)}
                    whileHover={{ y: -1.5, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    aria-label={`Jump to ${spec.label} section`}
                    className={cn(
                      "hero-spec-pill group relative inline-flex items-center gap-1 sm:gap-2 rounded-full",
                      "px-2 py-0.5 sm:px-4 sm:py-2",
                      "border dark:border-white/12 border-black/10",
                      "dark:bg-black/75 bg-white/95 backdrop-blur-xl",
                      "shadow-xs sm:shadow-sm dark:shadow-[0_4px_16px_rgba(0,0,0,0.45)]",
                      "transition-all duration-300 ease-out cursor-pointer",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60",
                      spec.hoverGlow
                    )}
                  >
                    <div className="flex h-3.5 w-3.5 sm:h-5 sm:w-5 items-center justify-center rounded-full dark:bg-white/5 bg-black/5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <IconComponent className={cn("h-2 w-2 sm:h-3 sm:w-3 transition-colors", spec.accent)} />
                    </div>
                    <span className="font-mono text-[8.5px] sm:text-xs font-medium dark:text-cream/90 text-neutral-800 tracking-tight group-hover:text-foreground transition-colors whitespace-nowrap">
                      {spec.label}
                    </span>
                    <ArrowUpRight className={cn("h-2 w-2 sm:h-3 sm:w-3 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0", spec.arrowColor)} />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Key Achievements & Research Highlights */}
          <div className="hidden sm:flex flex-col items-end gap-2 text-right pointer-events-auto">
            <div className="text-xs font-mono uppercase tracking-[0.2em] dark:text-cream/50 text-neutral-500 mb-1">
              Highlighted Milestones
            </div>

            <div className="flex flex-col gap-1 text-xs font-hn dark:text-cream/80 text-neutral-700">
              <div className="flex items-center justify-end gap-2">
                <span className="font-mono text-gold font-semibold inline-flex items-center">
                  <CountUp to={98.95} duration={2.2} digitEffect="slide" />
                  <span>%</span>
                </span>
                <span>Sleep Apnea ML Detection · iCONEECT 2026</span>
              </div>
              <div className="flex items-center justify-end gap-2 dark:text-cream/60 text-neutral-600">
                <span className="font-mono dark:text-cream text-neutral-900 font-semibold inline-flex items-center">
                  <CountUp to={32} duration={1.8} digitEffect="slide" />
                  <span>+</span>
                </span>
                <span>Open-Source Repositories on GitHub</span>
              </div>
              <div className="text-[11px] dark:text-cream/40 text-neutral-400 font-mono">
                DIU Computer Science · Projectile Electronic
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DOWN MIDDLE: Explore More Button
            ========================================================================= */}
        <div className="mt-2.5 sm:mt-8 flex justify-center items-center w-full">
          <button
            type="button"
            onClick={handleExploreMore}
            aria-label="Explore more sections of the portfolio"
            className="hero-explore-btn group relative inline-flex items-center gap-1.5 sm:gap-3 rounded-full border dark:border-white/20 border-black/15 dark:bg-black/70 bg-white/95 px-3 py-1 sm:px-7 sm:py-3 text-[9px] sm:text-sm font-medium tracking-[0.16em] sm:tracking-[0.2em] uppercase dark:text-cream text-neutral-900 backdrop-blur-xl shadow-md dark:shadow-2xl transition-all duration-300 dark:hover:border-white/50 hover:border-black/30 dark:hover:bg-white/15 hover:bg-neutral-100 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            <span>Explore More</span>
            <div className="flex h-3.5 w-3.5 sm:h-5 sm:w-5 items-center justify-center rounded-full dark:bg-white/10 bg-black/5 group-hover:bg-gold/20 transition-colors">
              <ChevronDown className="h-2 w-2 sm:h-3.5 sm:w-3.5 dark:text-cream text-neutral-800 group-hover:translate-y-0.5 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Progressive Blur Transition to Next Page (Story Section) */}
      <ProgressiveBlur
        side="bottom"
        size="160px"
        strength={10}
        tintStrength={0.85}
        className="z-20 pointer-events-none"
      />
    </section>
  );
};

export default EditorialHero;

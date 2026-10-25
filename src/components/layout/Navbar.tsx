import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CANDIDATE_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, MediumIcon } from '../common/SocialIcons';
import { ThemeSwitch } from '../ui/theme-switch';
import { ScrollProgress } from '../core/scroll-progress';
import { WordScroll } from '../ui/word-scroll';

interface NavbarProps {
  onOpenMobile: () => void;
  isMobileOpen: boolean;
}

interface NavItem {
  label: string;
  targetId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Story', targetId: 'story' },
  { label: 'Academics', targetId: 'academics' },
  { label: 'Web Dev', targetId: 'web-dev' },
  { label: 'Robotics & IoT', targetId: 'robotics-iot' },
  { label: 'Cybersecurity', targetId: 'cybersecurity' },
  { label: 'Publications', targetId: 'publications' },
  { label: 'Competitive CP', targetId: 'competitive-programming' },
  { label: 'Certificates', targetId: 'certificates' },
  { label: 'Connect', targetId: 'connect' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobile, isMobileOpen }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    let lastScrolled = false;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const scrolled = window.scrollY > 30;
        if (scrolled !== lastScrolled) {
          lastScrolled = scrolled;
          setIsScrolled(scrolled);
        }
        if (window.scrollY < 80) {
          setActiveSection('hero');
        }
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // High performance IntersectionObserver for active section detection
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );

    const observedIds = ['hero', ...NAV_ITEMS.map((item) => item.targetId)];
    for (const id of observedIds) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'dark:bg-black/85 bg-[#f8f7f4]/85 backdrop-blur-2xl border-b dark:border-white/15 border-black/10 py-2 sm:py-3 shadow-2xl dark:shadow-black/90 shadow-black/5'
          : 'dark:bg-black/50 bg-[#f8f7f4]/70 backdrop-blur-xl border-b dark:border-white/[0.08] border-black/5 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="w-full px-2.5 xs:px-3 sm:px-6 md:px-8 lg:px-10 2xl:px-14 flex items-center justify-between gap-1 xs:gap-2">
        {/* =========================================================================
            LEFT: Brand Monogram & Name (Anchored to Left)
            ========================================================================= */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="group flex items-center gap-1.5 sm:gap-3 dark:text-cream text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-full shrink-0"
        >
          <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border dark:border-white/20 border-black/15 dark:bg-white/5 bg-black/5 font-cinzel text-xs sm:text-base font-semibold tracking-wider dark:text-cream text-neutral-900 transition-transform duration-300 group-hover:scale-105 dark:group-hover:border-white/40 group-hover:border-black/30 shrink-0">
            S
          </div>
          <div className="flex flex-col text-left">
            <span className="font-cinzel text-xs sm:text-base tracking-[0.12em] sm:tracking-[0.16em] uppercase dark:text-cream text-neutral-900 dark:group-hover:text-white group-hover:text-black transition-colors whitespace-nowrap">
              <span className="hidden sm:inline">Saharia Hassan </span>Safin
            </span>
            <span className="hidden md:inline-block text-[9px] tracking-widest uppercase dark:text-cream/45 text-neutral-500 font-mono whitespace-nowrap">
              Architect &middot; Researcher
            </span>
          </div>
        </a>

        {/* =========================================================================
            CENTER: Navigation Links (Gracefully Centered Across Full Space)
            ========================================================================= */}
        <nav
          aria-label="Primary portfolio navigation"
          className="hidden xl:flex items-center justify-center flex-1 mx-3 lg:mx-6 2xl:mx-10 min-w-0"
        >
          <div className="flex items-center gap-1 xl:gap-1.5 2xl:gap-2.5 flex-nowrap shrink-0">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <motion.a
                  key={item.targetId}
                  href={`#${item.targetId}`}
                  onClick={(e) => handleLinkClick(e, item.targetId)}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className={`group relative inline-flex items-center justify-center h-8 2xl:h-8.5 px-2.5 2xl:px-3.5 rounded-full text-xs 2xl:text-[13px] font-hn tracking-wider whitespace-nowrap leading-none transition-colors duration-200 select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/50 ${
                    isActive
                      ? 'dark:text-white text-neutral-900 font-medium'
                      : 'dark:text-cream/70 text-neutral-600 dark:hover:text-white hover:text-black dark:hover:bg-white/[0.04] hover:bg-black/[0.03]'
                  }`}
                >
                  <span className="relative z-10 block leading-none">
                    <WordScroll
                      label={item.label}
                      isActive={isActive}
                      staggerDuration={0.016}
                    />
                  </span>

                  {/* Smooth active pill indicator with golden baseline hairline */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full dark:bg-white/[0.09] bg-black/[0.06] border dark:border-white/20 border-black/15 shadow-sm -z-0 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    >
                      <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-8 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-90" />
                    </motion.div>
                  )}
                </motion.a>
              );
            })}
          </div>
        </nav>

        {/* =========================================================================
            RIGHT: Resume Button, Social Links, Theme & Mobile Hamburger (Anchored to Right)
            ========================================================================= */}
        <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-3 2xl:gap-3.5 shrink-0">
          {/* Social Icons with Dynamic Brand Hover States (Laptops & Desktops) */}
          <div className="hidden xl:flex items-center gap-1.5 border-r dark:border-white/10 border-black/10 pr-2.5 mr-0.5">
            {/* GitHub */}
            <a
              href={CANDIDATE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="group relative flex h-8 w-8 items-center justify-center rounded-full border dark:border-white/10 border-black/10 dark:bg-white/[0.04] bg-black/5 dark:text-cream/70 text-neutral-600 transition-all duration-300 hover:scale-110 active:scale-95 dark:hover:bg-white/15 hover:bg-[#24292e] dark:hover:text-white hover:text-white dark:hover:border-white/40 hover:border-[#24292e] hover:shadow-[0_0_16px_rgba(255,255,255,0.22)] shadow-sm shrink-0"
            >
              <GithubIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide opacity-0 -translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 z-50 dark:bg-white dark:text-black bg-[#1f2328] text-white shadow-lg ring-1 dark:ring-black/10 ring-white/10">
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={CANDIDATE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="group relative flex h-8 w-8 items-center justify-center rounded-full border dark:border-white/10 border-black/10 dark:bg-white/[0.04] bg-black/5 dark:text-cream/70 text-neutral-600 transition-all duration-300 hover:scale-110 active:scale-95 dark:hover:bg-[#0a66c2]/25 hover:bg-[#0a66c2] dark:hover:text-[#38bdf8] hover:text-white dark:hover:border-[#0a66c2]/70 hover:border-[#0a66c2] hover:shadow-[0_0_18px_rgba(10,102,194,0.45)] shadow-sm shrink-0"
            >
              <LinkedinIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide opacity-0 -translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 z-50 bg-[#0a66c2] text-white shadow-lg shadow-[#0a66c2]/30">
                LinkedIn
              </span>
            </a>

            {/* Medium */}
            <a
              href={CANDIDATE_INFO.medium}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium articles"
              className="group relative flex h-8 w-8 items-center justify-center rounded-full border dark:border-white/10 border-black/10 dark:bg-white/[0.04] bg-black/5 dark:text-cream/70 text-neutral-600 transition-all duration-300 hover:scale-110 active:scale-95 dark:hover:bg-[#00ab6c]/25 hover:bg-[#00ab6c] dark:hover:text-[#34d399] hover:text-white dark:hover:border-[#00ab6c]/70 hover:border-[#00ab6c] hover:shadow-[0_0_18px_rgba(0,171,108,0.45)] shadow-sm shrink-0"
            >
              <MediumIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide opacity-0 -translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 z-50 bg-[#00ab6c] text-white shadow-lg shadow-[#00ab6c]/30">
                Medium
              </span>
            </a>
          </div>

          {/* Uiverse.io Tsiangana Interactive Morphing Resume Download Button (Phone & Desktop) */}
          <a
            href={CANDIDATE_INFO.resumePdf}
            download="Saharia_Hassan_Safin_Resume.pdf"
            className="botao inline-flex shrink-0 select-none"
            aria-label="Download Saharia Hassan Safin Resume PDF"
          >
            <span className="texto font-cinzel tracking-wider inline-flex items-center gap-1 sm:gap-1.5">
              <span>Resume</span>
              <svg
                className="h-2.5 w-2.5 sm:h-3 sm:w-3 opacity-90 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </span>
            <svg
              className="mysvg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>

          {/* Uiverse.io by joe-watson-sbf - Inquire CTA Button (Phone & Desktop) */}
          <button
            type="button"
            onClick={(e) => handleLinkClick(e, 'connect')}
            className="inquire-btn inline-flex shrink-0 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            aria-label="Inquire and direct connect"
          >
            <span>Inquire</span>
          </button>

          {/* Theme Mode Switcher */}
          <ThemeSwitch className="shrink-0 scale-90 xs:scale-95 sm:scale-100 origin-center" />

          {/* Mobile-only Hamburger Morphing Toggle */}
          <button
            type="button"
            onClick={onOpenMobile}
            aria-label={isMobileOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
            aria-expanded={isMobileOpen}
            className="xl:hidden relative z-50 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border dark:border-white/15 border-black/15 dark:bg-white/5 bg-black/5 dark:text-cream text-neutral-900 p-1 sm:p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 shrink-0"
          >
            <div className="flex h-2.5 w-3.5 sm:h-3.5 sm:w-5 flex-col justify-between">
              {/* Top bar */}
              <span
                className={`block h-0.5 w-3.5 sm:w-5 dark:bg-cream bg-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                  isMobileOpen ? 'translate-y-[4px] sm:translate-y-[6px] rotate-45' : 'translate-y-0 rotate-0'
                }`}
              />
              {/* Middle bar */}
              <span
                className={`block h-0.5 w-3.5 sm:w-5 dark:bg-cream bg-neutral-900 transition-opacity duration-300 ${
                  isMobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              {/* Bottom bar */}
              <span
                className={`block h-0.5 w-3.5 sm:w-5 dark:bg-cream bg-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                  isMobileOpen ? '-translate-y-[4px] sm:-translate-y-[6px] -rotate-45' : 'translate-y-0 rotate-0'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Website Theme Scroll Progress Bar */}
      <div className="absolute bottom-0 inset-x-0 h-[2.5px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/5 dark:bg-white/[0.06]" />
        <ScrollProgress className="absolute inset-0 h-full" />
      </div>
    </header>
  );
};

export default Navbar;

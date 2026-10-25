import React, { useEffect, useRef } from 'react';
import { NAV_LINKS } from '../../data/navigation';
import { CANDIDATE_INFO } from '../../data/portfolioData';
import {
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  WhatsappIcon,
} from '../common/SocialIcons';
import { X, ArrowUpRight, Download, Mail } from 'lucide-react';
import { ThemeSwitch } from '../ui/theme-switch';
import { motion } from 'motion/react';
import { WordScroll } from '../ui/word-scroll';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Keyboard accessibility (Escape key & Focus trap)
  useEffect(() => {
    if (!isOpen) return;

    // Body scroll lock with scrollbar compensation
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Auto-focus close button
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement || !drawerRef.current.contains(document.activeElement)) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement || !drawerRef.current.contains(document.activeElement)) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Slide-out drawer panel */}
      <div
        ref={drawerRef}
        className="relative z-10 flex h-full w-full max-w-sm flex-col justify-between border-l border-border bg-background/95 px-6 py-8 text-foreground shadow-2xl backdrop-blur-3xl animate-in slide-in-from-right duration-300 overflow-y-auto"
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-border pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-accent font-cinzel text-base font-semibold text-foreground">
                S
              </div>
              <div>
                <div className="font-cinzel text-base tracking-widest uppercase text-foreground font-medium">
                  Saharia Hassan Safin
                </div>
                <div className="font-mono text-[10px] text-foreground/50 tracking-wider">
                  Navigation Matrix
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ThemeSwitch />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-accent text-foreground transition-colors hover:bg-accent/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Nav links */}
          <div className="mt-8 flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.sectionId}
                href={link.href}
                onClick={onClose}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group flex items-center justify-between rounded-xl px-4 py-3 dark:text-cream/70 text-neutral-700 transition-all dark:hover:bg-white/5 hover:bg-black/5 dark:hover:text-white hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/50"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs dark:text-cream/40 text-neutral-400 group-hover:text-gold transition-colors">
                    {link.number}
                  </span>
                  <WordScroll
                    label={link.label}
                    className="font-forum text-lg tracking-wide group-hover:translate-x-1 transition-transform"
                    staggerDuration={0.016}
                  />
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 dark:text-cream/60 text-neutral-400" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer actions & Socials */}
        <div className="mt-8 border-t dark:border-white/10 border-black/10 pt-6">
          <div className="mb-4">
            <a
              href={CANDIDATE_INFO.resumePdf}
              download="Saharia_Hassan_Safin_Resume.pdf"
              className="flex w-full items-center justify-center gap-2 rounded-xl border dark:border-white/15 border-black/15 dark:bg-white/10 bg-neutral-100 px-4 py-3 text-xs font-medium dark:text-cream text-neutral-800 backdrop-blur-md transition-all dark:hover:bg-white/20 hover:bg-neutral-200 dark:hover:border-white/30 hover:border-black/30 shadow-sm"
            >
              <Download className="h-4 w-4 text-gold" />
              <span>Download Full CV / Resume (PDF)</span>
            </a>
          </div>

          <div className="flex items-center justify-between dark:text-cream/60 text-neutral-600 pt-2">
            <span className="text-xs font-mono">Connect</span>
            <div className="flex items-center gap-3">
              <a
                href={CANDIDATE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="group relative flex h-8.5 w-8.5 items-center justify-center rounded-full border dark:border-white/15 border-black/15 dark:bg-white/5 bg-black/5 dark:text-cream/70 text-neutral-600 transition-all duration-300 hover:scale-110 active:scale-95 dark:hover:bg-white/15 hover:bg-[#24292e] dark:hover:text-white hover:text-white dark:hover:border-white/40 hover:border-[#24292e] hover:shadow-[0_0_16px_rgba(255,255,255,0.22)] shadow-sm"
              >
                <GithubIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 z-50 dark:bg-white dark:text-black bg-[#1f2328] text-white shadow-lg ring-1 dark:ring-black/10 ring-white/10">
                  GitHub
                </span>
              </a>
              <a
                href={CANDIDATE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="group relative flex h-8.5 w-8.5 items-center justify-center rounded-full border dark:border-white/15 border-black/15 dark:bg-white/5 bg-black/5 dark:text-cream/70 text-neutral-600 transition-all duration-300 hover:scale-110 active:scale-95 dark:hover:bg-[#0a66c2]/25 hover:bg-[#0a66c2] dark:hover:text-[#38bdf8] hover:text-white dark:hover:border-[#0a66c2]/70 hover:border-[#0a66c2] hover:shadow-[0_0_18px_rgba(10,102,194,0.45)] shadow-sm"
              >
                <LinkedinIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 z-50 bg-[#0a66c2] text-white shadow-lg shadow-[#0a66c2]/30">
                  LinkedIn
                </span>
              </a>
              <a
                href={CANDIDATE_INFO.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium articles"
                className="group relative flex h-8.5 w-8.5 items-center justify-center rounded-full border dark:border-white/15 border-black/15 dark:bg-white/5 bg-black/5 dark:text-cream/70 text-neutral-600 transition-all duration-300 hover:scale-110 active:scale-95 dark:hover:bg-[#00ab6c]/25 hover:bg-[#00ab6c] dark:hover:text-[#34d399] hover:text-white dark:hover:border-[#00ab6c]/70 hover:border-[#00ab6c] hover:shadow-[0_0_18px_rgba(0,171,108,0.45)] shadow-sm"
              >
                <MediumIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 z-50 bg-[#00ab6c] text-white shadow-lg shadow-[#00ab6c]/30">
                  Medium
                </span>
              </a>
              <a
                href={CANDIDATE_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp direct message"
                className="group relative flex h-8.5 w-8.5 items-center justify-center rounded-full border dark:border-white/15 border-black/15 dark:bg-white/5 bg-black/5 dark:text-cream/70 text-neutral-600 transition-all duration-300 hover:scale-110 active:scale-95 dark:hover:bg-[#25D366]/25 hover:bg-[#25D366] dark:hover:text-[#25D366] hover:text-white dark:hover:border-[#25D366]/70 hover:border-[#25D366] hover:shadow-[0_0_18px_rgba(37,211,102,0.45)] shadow-sm"
              >
                <WhatsappIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 z-50 bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30">
                  WhatsApp
                </span>
              </a>
              <a
                href={`mailto:${CANDIDATE_INFO.email}`}
                aria-label="Email candidate"
                className="group relative flex h-8.5 w-8.5 items-center justify-center rounded-full border dark:border-white/15 border-black/15 dark:bg-white/5 bg-black/5 dark:text-cream/70 text-neutral-600 transition-all duration-300 hover:scale-110 active:scale-95 dark:hover:bg-gold/25 hover:bg-[#997300] dark:hover:text-gold hover:text-white dark:hover:border-gold/70 hover:border-[#997300] hover:shadow-[0_0_18px_rgba(212,175,55,0.4)] shadow-sm"
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 z-50 bg-gold text-black shadow-lg shadow-gold/30">
                  Email
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

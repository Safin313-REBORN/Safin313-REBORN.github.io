import React, { useEffect, useRef } from 'react';
import { CardDetail } from '../../types/portfolio';
import { X, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';

interface ActiveDetailModalProps {
  detail: CardDetail | null;
  onClose: () => void;
  triggerElementRef?: HTMLElement | null;
}

export const ActiveDetailModal: React.FC<ActiveDetailModalProps> = ({
  detail,
  onClose,
  triggerElementRef,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Focus trap, Escape key handling, and Body scroll lock
  useEffect(() => {
    if (!detail) return;

    // Save previous active element for focus restoration
    const previousActiveElement = triggerElementRef || (document.activeElement as HTMLElement | null);

    // Scrollbar compensation & scroll lock
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Auto-focus close button on modal mount
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 40);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement || !modalRef.current.contains(document.activeElement)) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement || !modalRef.current.contains(document.activeElement)) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);

      // Restore focus to triggering element
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        setTimeout(() => {
          previousActiveElement.focus();
        }, 50);
      }
    };
  }, [detail, onClose, triggerElementRef]);

  if (!detail) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-subtitle"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 dark:bg-black/85 bg-black/40 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Card Dialog */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto overscroll-contain rounded-2xl sm:rounded-3xl border dark:border-white/15 border-black/10 dark:bg-[#0f0f0f] bg-white p-5 sm:p-8 md:p-10 dark:text-cream text-neutral-900 shadow-2xl animate-in zoom-in-95 duration-200 focus:outline-none"
      >
        {/* Subtle top specular sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent dark:via-white/30 via-black/10 to-transparent"
        />

        {/* Header bar */}
        <div className="flex items-start justify-between gap-4 border-b dark:border-white/10 border-black/10 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-full border dark:border-white/15 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider dark:text-cream/70 text-neutral-700">
                <Sparkles className="h-3 w-3 text-gold" />
                {detail.category}
              </span>
              <span className="inline-flex items-center whitespace-nowrap shrink-0 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[11px] font-semibold text-gold shadow-[0_0_12px_rgba(212,175,55,0.12)]">
                {detail.badge}
              </span>
              <span className="inline-flex items-center whitespace-nowrap shrink-0 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/[0.03] bg-neutral-100 px-3 py-1 font-mono text-[11px] dark:text-cream/50 text-neutral-500">
                {detail.dateOrRank}
              </span>
            </div>

            <h3 id="modal-title" className="font-forum text-2xl sm:text-3xl dark:text-white text-neutral-900 tracking-wide">
              {detail.title}
            </h3>
            <p id="modal-subtitle" className="font-sans text-sm dark:text-cream/70 text-neutral-600 leading-relaxed font-light">
              {detail.subtitle}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close detail modal"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border dark:border-white/15 border-black/10 dark:bg-white/5 bg-black/5 dark:text-cream text-neutral-800 transition-all dark:hover:bg-white/15 hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body Description */}
        <div className="py-6 space-y-6">
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/50 text-neutral-500">
              Architectural Dossier
            </h4>
            <p className="font-sans text-sm sm:text-base leading-relaxed dark:text-cream/80 text-neutral-700 font-light">
              {detail.description}
            </p>
          </div>

          {/* Highlights checklist */}
          {detail.highlights && detail.highlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/50 text-neutral-500">
                Key Deliverables & Invariants
              </h4>
              <ul className="space-y-2.5">
                {detail.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm dark:text-cream/85 text-neutral-800">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Metrics Grid */}
          {detail.metrics && detail.metrics.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/50 text-neutral-500">
                Verified Metrics & Technical Benchmark
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {detail.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#141414] bg-neutral-50 p-3.5 shadow-sm"
                  >
                    <div className="font-mono text-lg sm:text-xl font-semibold dark:text-white text-neutral-900">
                      {metric.value}
                    </div>
                    <div className="font-sans text-xs font-medium dark:text-cream/80 text-neutral-700 mt-1">
                      {metric.label}
                    </div>
                    {metric.helper && (
                      <div className="font-mono text-[10px] dark:text-cream/45 text-neutral-500 mt-0.5 truncate">
                        {metric.helper}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Competency tags */}
          {detail.tags && detail.tags.length > 0 && (
            <div className="space-y-2 pt-2">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/50 text-neutral-500">
                Competency Matrix
              </h4>
              <div className="flex flex-wrap gap-2">
                {detail.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-lg border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-2.5 py-1 font-mono text-xs dark:text-cream/70 text-neutral-700 shadow-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / External Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t dark:border-white/10 border-black/10 pt-6">
          <div className="text-xs font-mono dark:text-cream/40 text-neutral-500">
            Dossier ID: <span className="dark:text-cream/60 text-neutral-700">{detail.id}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {detail.link && (
              <a
                href={detail.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl border dark:border-white/20 border-black/15 dark:bg-white/10 bg-black/5 px-5 py-2.5 text-xs font-medium dark:text-white text-neutral-900 transition-all dark:hover:bg-white/20 hover:bg-black/10 dark:hover:border-white/35 hover:border-black/30 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span>{detail.linkLabel || 'Verify Resource'}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial rounded-xl border dark:border-white/10 border-black/10 bg-transparent px-5 py-2.5 text-xs font-medium dark:text-cream/70 text-neutral-700 transition-all dark:hover:bg-white/5 hover:bg-black/5 dark:hover:text-white hover:text-black"
            >
              Close Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

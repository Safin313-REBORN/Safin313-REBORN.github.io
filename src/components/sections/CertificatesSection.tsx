import React, { useState, useEffect, useMemo } from 'react';
import {
  CERTIFICATE_WHEEL_ITEMS,
  CertificateItem,
  GOOGLE_DRIVE_CERTIFICATES_URL,
} from '../../data/certificateWheelData';
import {
  ShieldCheck,
  Award,
  ExternalLink,
  Maximize2,
  X,
  CheckCircle2,
  FolderOpen,
  Sparkles,
  Layers,
} from 'lucide-react';

interface CertificatesSectionProps {
  onSelectDetail?: (detailId: string) => void;
}

const CATEGORIES = [
  'All',
  'Cybersecurity',
  'Web & Programming',
  'Contests & Leadership',
  'Field & Office',
  'Academic & Research',
] as const;

const PAGE_SIZE = 7;

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onSelectDetail }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalCert, setActiveModalCert] = useState<CertificateItem | null>(null);
  const [isSpread, setIsSpread] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  // Filter certificates by selected category
  const filteredCertificates = useMemo(() => {
    if (selectedCategory === 'All') return CERTIFICATE_WHEEL_ITEMS;
    return CERTIFICATE_WHEEL_ITEMS.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredCertificates.length / PAGE_SIZE);

  // Paginated visible cards for the fanned deck
  const visibleCertificates = useMemo(() => {
    if (selectedCategory === 'All') {
      const start = currentPage * PAGE_SIZE;
      return filteredCertificates.slice(start, start + PAGE_SIZE);
    }
    return filteredCertificates;
  }, [selectedCategory, currentPage, filteredCertificates]);

  // Calculate fan rotation angle for each card based on its position in the hand
  const getCardAngle = (index: number, total: number) => {
    if (total <= 1) return 0;
    const center = (total - 1) / 2;
    const spreadFactor = total <= 3 ? 7 : total <= 5 ? 5.5 : total <= 8 ? 4.2 : 3.4;
    return Math.round((index - center) * spreadFactor);
  };

  // Keyboard accessibility for Detail Modal
  useEffect(() => {
    if (!activeModalCert) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalCert(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalCert]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="certificates-vault"
      aria-label="Verified Credential Vault & Honors"
      className="relative w-full pt-16 sm:pt-20 pb-10 sm:pb-12 text-foreground overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 flex flex-col justify-between overflow-x-clip">
        {/* =========================================================================
            HEADER: Section Monogram, Title, Category Filters & Vault Buttons
            ========================================================================= */}
        <div className="border-b dark:border-white/10 border-black/10 pb-6 mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-gold mb-2">
                <span className="font-semibold">09</span>
                <span className="dark:text-cream/40 text-neutral-400">/</span>
                <span className="dark:text-cream/70 text-neutral-600">Verified Credential Vault</span>
              </div>
              <h2 className="font-forum text-3xl sm:text-4xl lg:text-5xl dark:text-white text-neutral-900 tracking-tight leading-tight">
                Certificates, Workshops & Honors
              </h2>
            </div>

            {/* Quick Metrics & Official Google Drive Vault Button */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={GOOGLE_DRIVE_CERTIFICATES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border dark:border-gold/60 border-[#997300] dark:bg-gold/15 bg-[#997300] dark:text-gold text-white px-4 py-2 font-mono text-xs font-semibold tracking-wide transition-all duration-300 dark:hover:bg-gold/25 hover:bg-[#806000] shadow-sm"
              >
                <FolderOpen className="h-3.5 w-3.5" />
                <span>Drive Vault</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <div className="hidden sm:flex items-center gap-2.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/[0.03] bg-white px-4 py-2 font-mono text-xs dark:text-cream/70 text-neutral-700 shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                <span>{CERTIFICATE_WHEEL_ITEMS.length} Credentials</span>
                <span className="dark:text-white/20 text-neutral-300">|</span>
                <Award className="h-3.5 w-3.5 text-gold" />
                <span>Verified</span>
              </div>

              {/* Fan / Spread Toggle Button */}
              <button
                type="button"
                onClick={() => setIsSpread(!isSpread)}
                aria-label={isSpread ? 'Stack cards into fanned deck' : 'Spread cards out'}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 font-mono text-xs transition-all duration-300 focus:outline-none ${
                  isSpread
                    ? 'border-gold/60 bg-gold/15 text-gold shadow-sm'
                    : 'dark:border-white/15 border-black/15 dark:bg-white/5 bg-black/5 dark:text-cream/80 text-neutral-700 hover:text-black dark:hover:text-white'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>{isSpread ? 'Deck Stack' : 'Spread Cards'}</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills & Deck Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count =
                  cat === 'All'
                    ? CERTIFICATE_WHEEL_ITEMS.length
                    : CERTIFICATE_WHEEL_ITEMS.filter((c) => c.category === cat).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-mono transition-all duration-200 focus:outline-none ${
                      isSelected
                        ? 'border border-gold/60 bg-gold/15 text-gold font-semibold shadow-sm ring-1 ring-gold/40'
                        : 'border dark:border-white/10 border-black/10 dark:bg-white/[0.03] bg-white dark:text-cream/65 text-neutral-700 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {isSelected && (
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_6px_#d4af37]" />
                    )}
                    <span>{cat}</span>
                    <span className="text-[10px] opacity-60">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            CENTER: Uiverse Fanned Glass Cards Deck Showcase
            Cards overlap with negative margin and rotate(--r) in rest state,
            then straighten (rotate 0deg) and spread apart on hover or toggle!
            ========================================================================= */}
        <div className="w-full my-6 sm:my-10">
          <div className="fanned-deck-wrapper">
            <div
              className={`fanned-deck-container ${isSpread ? 'is-spread' : ''}`}
            >
              {visibleCertificates.map((cert, index) => {
                const angle = getCardAngle(index, visibleCertificates.length);
                const zIndex = 10 + index;

                return (
                  <div
                    key={cert.id}
                    data-text={cert.title}
                    style={{
                      '--r': angle,
                      zIndex: zIndex,
                    } as React.CSSProperties}
                    onClick={() => {
                      setActiveModalCert(cert);
                    }}
                    className="fanned-glass-card group flex flex-col justify-between overflow-hidden border dark:border-white/20 border-black/15 dark:bg-[#121212] bg-white shadow-[0_25px_35px_rgba(0,0,0,0.5)] hover:border-gold/80 dark:hover:border-gold/80 hover:shadow-[0_25px_45px_rgba(212,175,55,0.3)] select-none"
                  >
                    {/* Top Shelf: Category & Verification Seal */}
                    <div className="p-3 sm:p-3.5 flex items-center justify-between z-10">
                      <span className="rounded-full border border-gold/40 dark:bg-black/75 bg-white/90 px-2 py-0.5 font-mono text-[9px] font-semibold text-gold uppercase tracking-wider backdrop-blur-md shadow-sm">
                        {cert.category}
                      </span>
                      <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full dark:bg-white/10 bg-black/5 text-gold">
                        <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </div>
                    </div>

                    {/* Certificate Document Frame Preview */}
                    <div className="relative flex-1 mx-2.5 sm:mx-3 mb-2 rounded-xl overflow-hidden border dark:border-white/10 border-black/10 dark:bg-[#0c0c0c] bg-neutral-100 flex items-center justify-center p-2">
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Interactive Inspect Badge on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-black/50 bg-black/25 backdrop-blur-[2px]">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/60 bg-black/90 text-gold px-3 py-1 font-mono text-[11px] font-medium shadow-xl">
                          <Maximize2 className="h-3 w-3" />
                          <span>Inspect</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Shelf (Inspired by Uiverse data-text glass bar) */}
                    <div className="relative h-14 sm:h-16 px-3 sm:px-3.5 py-2 flex flex-col justify-center border-t dark:border-white/10 border-black/10 dark:bg-[#181818] bg-neutral-100">
                      <h4 className="font-forum text-xs sm:text-sm dark:text-white text-neutral-900 truncate font-medium group-hover:text-gold transition-colors">
                        {cert.title}
                      </h4>
                      <div className="flex items-center justify-between text-[10px] font-mono dark:text-cream/60 text-neutral-500 mt-0.5">
                        <span className="truncate max-w-[120px] sm:max-w-[140px]">{cert.issuer}</span>
                        <span className="text-gold font-semibold shrink-0">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            DECK PAGINATION DOCK: Positioned Prominently Under Certificate Cards
            ========================================================================= */}
        {/* =========================================================================
            DECK CONTROLLER: Uiverse.io GreyD097 Fanned 3-Button Morphing Controller
            ========================================================================= */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center justify-center gap-2.5 my-4 sm:my-6 z-20 relative">
            <div
              className="button-box"
              role="region"
              aria-label="Certificate Deck 1-4 Controller"
            >
              {/* Sibling 1: Left Touch Zone (Previous Deck) */}
              <button
                type="button"
                onClick={handlePrevPage}
                className="touch left focus:outline-none"
                aria-label="Previous Certificate Deck"
                title="Previous Deck"
              />

              {/* Sibling 2: Middle Touch Zone (Toggle Card Spread / Deck Status) */}
              <button
                type="button"
                onClick={() => setIsSpread(!isSpread)}
                className="touch middle focus:outline-none"
                aria-label={`Deck ${currentPage + 1} of ${totalPages} - Click to toggle card fan`}
                title={`Deck ${currentPage + 1} of ${totalPages} (Click to toggle fan)`}
              />

              {/* Sibling 3: Right Touch Zone (Next Deck) */}
              <button
                type="button"
                onClick={handleNextPage}
                className="touch right focus:outline-none"
                aria-label="Next Certificate Deck"
                title="Next Deck"
              />

              {/* Sibling 4: Left Button (Previous) */}
              <div className="button prev-deck-btn" aria-hidden="true">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </div>

              {/* Sibling 5: Right Button (Next) */}
              <div className="button next-deck-btn" aria-hidden="true">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </div>

              {/* Sibling 6: Middle Button (Deck Number 1 - 4) */}
              <div className="button middle-deck-btn" aria-hidden="true">
                <span className="font-mono text-xs font-bold leading-none select-none tracking-tight">
                  {currentPage + 1}-{totalPages}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] dark:text-cream/60 text-neutral-600 font-medium">
                Deck <span className="text-gold font-bold">{currentPage + 1}</span> of {totalPages}
              </span>
              <span className="dark:text-white/20 text-black/20">•</span>
              <span className="text-[10px] font-mono tracking-wider dark:text-cream/40 text-neutral-400">
                Hover to expand controls
              </span>
            </div>
          </div>
        )}

        {/* =========================================================================
            FOOTER / INSTRUCTION BAR: Interaction Hint & Drive Archive Link
            ========================================================================= */}
        <div className="border-t dark:border-white/10 border-black/10 pt-5 mt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono dark:text-cream/60 text-neutral-600">
              <Sparkles className="h-3.5 w-3.5 text-gold shrink-0" />
              <span>Hover over deck to fan open · Click any card to inspect high-resolution credential</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono dark:text-cream/45 text-neutral-400">
              <span>Original Credentials archived in</span>
              <a
                href={GOOGLE_DRIVE_CERTIFICATES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline inline-flex items-center gap-1"
              >
                <span>Google Drive Vault</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CERTIFICATE DETAIL MODAL: High-Res Inspection View
          ========================================================================= */}
      {activeModalCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
        >
          {/* Backdrop */}
          <div
            onClick={() => setActiveModalCert(null)}
            aria-hidden="true"
            className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border dark:border-white/15 border-black/15 dark:bg-[#0f0f0f] bg-white p-6 sm:p-8 dark:text-cream text-neutral-900 shadow-2xl animate-in zoom-in-95 duration-200 focus:outline-none">
            {/* Top Bar with Badges and Close Button */}
            <div className="flex items-start justify-between gap-4 border-b dark:border-white/10 border-black/10 pb-5 mb-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[11px] font-semibold text-gold shadow-sm">
                    {activeModalCert.category}
                  </span>
                  <span className="rounded-full border dark:border-white/15 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-[11px] dark:text-cream/70 text-neutral-700">
                    {activeModalCert.issuer}
                  </span>
                  <span className="rounded-full border dark:border-white/10 border-black/10 dark:bg-white/[0.03] bg-neutral-100 px-3 py-1 font-mono text-[11px] dark:text-cream/50 text-neutral-500">
                    {activeModalCert.date}
                  </span>
                </div>

                <h3 id="cert-modal-title" className="font-forum text-2xl sm:text-3xl dark:text-white text-neutral-900">
                  {activeModalCert.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalCert(null)}
                aria-label="Close certificate modal"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border dark:border-white/15 border-black/15 dark:bg-white/5 bg-black/5 dark:text-cream text-neutral-800 transition-all dark:hover:bg-white/15 hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* High-Resolution Certificate Image Showcase */}
            <div className="relative w-full max-h-[50vh] overflow-hidden rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#141414] bg-neutral-100 flex items-center justify-center p-3 mb-6">
              <img
                src={activeModalCert.src}
                alt={activeModalCert.alt}
                loading="lazy"
                decoding="async"
                className="max-h-[46vh] w-auto max-w-full object-contain rounded-lg shadow-md"
              />
              <a
                href={activeModalCert.src}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/80 text-gold px-3 py-1 font-mono text-xs backdrop-blur-md hover:bg-black transition-all shadow-md"
              >
                <Maximize2 className="h-3 w-3" />
                <span>Open Full Image</span>
              </a>
            </div>

            {/* Description & Competencies */}
            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/50 text-neutral-500 mb-2">
                  Credential Specification
                </h4>
                <p className="font-sans text-sm sm:text-base leading-relaxed dark:text-cream/80 text-neutral-700 font-light">
                  {activeModalCert.description}
                </p>
              </div>

              {/* Verified Competencies / Skills */}
              {activeModalCert.skills && activeModalCert.skills.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/50 text-neutral-500 mb-2.5">
                    Verified Competencies & Core Modules
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalCert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 rounded-lg border dark:border-white/10 border-black/10 dark:bg-white/[0.03] bg-neutral-50 px-3 py-1 font-mono text-xs dark:text-cream/85 text-neutral-800"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t dark:border-white/10 border-black/10 pt-5">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={GOOGLE_DRIVE_CERTIFICATES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border dark:border-gold/60 border-[#997300] dark:bg-gold/15 bg-[#997300] dark:text-gold text-white px-5 py-2.5 font-mono text-xs font-semibold tracking-wide transition-all duration-300 dark:hover:bg-gold/25 hover:bg-[#806000] shadow-sm"
                  >
                    <FolderOpen className="h-4 w-4" />
                    <span>View in Vault</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  {activeModalCert.detailId && onSelectDetail && (
                    <button
                      type="button"
                      onClick={() => {
                        const dId = activeModalCert.detailId!;
                        setActiveModalCert(null);
                        onSelectDetail(dId);
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-full border dark:border-white/20 border-black/20 dark:bg-white/5 bg-neutral-100 dark:text-cream text-neutral-800 px-4 py-2.5 font-mono text-xs font-medium hover:border-gold hover:text-gold dark:hover:border-gold transition-colors"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-gold" />
                      <span>Deep-Dive Dossier</span>
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalCert(null)}
                  className="rounded-full border dark:border-white/15 border-black/15 px-6 py-2.5 font-mono text-xs dark:text-cream/70 text-neutral-700 hover:text-black dark:hover:text-white transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;

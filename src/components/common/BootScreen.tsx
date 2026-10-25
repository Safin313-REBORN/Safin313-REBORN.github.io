import React, { useState, useEffect, useCallback } from 'react';

const BOOT_WORDS = ['Welcome', 'to', 'my', 'Portfolio'];
const DISPLAY_DURATION_MS = 3400; // Complete reveal of all 23 letters
const FADE_OUT_DURATION_MS = 700;

interface BootScreenProps {
  onComplete?: () => void;
}

export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(true);

  const dismiss = useCallback(() => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setIsMounted(false);
      if (onComplete) onComplete();
    }, FADE_OUT_DURATION_MS);
  }, [isFading, onComplete]);

  useEffect(() => {
    // Lock background scroll during boot sequence
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Auto-advance once the full letter animation finishes
    const timer = setTimeout(() => {
      dismiss();
    }, DISPLAY_DURATION_MS);

    // Allow user to skip with any keypress or click
    const handleKeyDown = () => {
      dismiss();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dismiss]);

  useEffect(() => {
    if (!isMounted) {
      document.body.style.overflow = '';
    }
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome screen"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505] cursor-pointer select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isFading ? 'opacity-0 scale-[1.02] blur-md pointer-events-none' : 'opacity-100 scale-100 blur-0'
      }`}
    >
      {/* Ambient background bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_65%)]"
      />

      {/* Decorative scanline grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"
      />

      {/* Silky Smooth Editorial Text Loader */}
      <div className="loader-wrapper loader-ambient-glow">
        <div className="loader-laser-line" aria-hidden="true" />
        {BOOT_WORDS.map((word, wordIndex) => {
          let charOffset = 0;
          for (let i = 0; i < wordIndex; i++) {
            charOffset += BOOT_WORDS[i].length + 1;
          }

          return (
            <React.Fragment key={wordIndex}>
              <span className="inline-flex whitespace-nowrap">
                {word.split('').map((char, charIndex) => {
                  const globalIndex = charOffset + charIndex;
                  return (
                    <span
                      key={charIndex}
                      className="loader-letter"
                      style={{ animationDelay: `${(0.12 + globalIndex * 0.065).toFixed(3)}s` }}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
              {wordIndex < BOOT_WORDS.length - 1 && (
                <span
                  className="loader-letter"
                  style={{ animationDelay: `${(0.12 + (charOffset + word.length) * 0.065).toFixed(3)}s` }}
                >
                  &nbsp;
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Subtle bottom progress indicator & skip prompt */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 pointer-events-auto">
        <div className="h-[2px] w-44 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gold/50 via-gold to-white rounded-full origin-left will-change-transform"
            style={{
              animation: `bootProgress ${DISPLAY_DURATION_MS}ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            }}
          />
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/40 hover:text-gold/80 transition-colors text-center px-4">
          Tap or click anywhere to enter
        </span>
      </div>
    </div>
  );
};

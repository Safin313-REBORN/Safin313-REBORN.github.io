import React, { useRef, useCallback, useEffect } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  spotlightColor?: string;
  borderColor?: string;
  interactive?: boolean;
  'aria-label'?: string;
}

/**
 * SpotlightCard
 * Zero-re-render high-performance card component.
 * Directly updates CSS custom properties (--spotlight-x, --spotlight-y, --spotlight-opacity)
 * on card mousemove via requestAnimationFrame without triggering React component re-renders.
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  onClick,
  spotlightColor = 'var(--spotlight-color, rgba(255, 255, 255, 0.065))',
  borderColor = 'var(--spotlight-border, rgba(239, 238, 233, 0.28))',
  interactive = true,
  'aria-label': ariaLabel,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const rectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handlePointerEnter = useCallback(() => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current || e.pointerType === 'touch') return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) {
        rafRef.current = null;
        return;
      }
      if (!rectRef.current) {
        rectRef.current = cardRef.current.getBoundingClientRect();
      }
      const rect = rectRef.current;
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      cardRef.current.style.setProperty('--spotlight-x', `${x}px`);
      cardRef.current.style.setProperty('--spotlight-y', `${y}px`);
      cardRef.current.style.setProperty('--spotlight-opacity', '1');
      rafRef.current = null;
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    rectRef.current = null;
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--spotlight-opacity', '0');
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (onClick && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick();
      }
    },
    [onClick]
  );

  const isClickable = Boolean(onClick);

  return (
    <div
      ref={cardRef}
      onPointerEnter={interactive ? handlePointerEnter : undefined}
      onPointerMove={interactive ? handlePointerMove : undefined}
      onPointerLeave={interactive ? handlePointerLeave : undefined}
      onClick={onClick}
      onKeyDown={isClickable ? handleKeyDown : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-haspopup={isClickable ? 'dialog' : undefined}
      aria-label={ariaLabel}
      className={`group relative overflow-hidden rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${
        isClickable
          ? 'cursor-pointer hover:-translate-y-1 dark:hover:border-white/25 hover:border-black/25 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50'
          : ''
      } ${className}`}
      style={
        {
          '--spotlight-x': '-1000px',
          '--spotlight-y': '-1000px',
          '--spotlight-opacity': '0',
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Dynamic Border Glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(450px circle at var(--spotlight-x) var(--spotlight-y), ${borderColor}, transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Radiant Inner Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-[var(--spotlight-opacity)] transition-opacity duration-300"
        style={{
          background: `radial-gradient(550px circle at var(--spotlight-x) var(--spotlight-y), ${spotlightColor}, transparent 65%)`,
        }}
      />

      {/* Surface Specular Inset Highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent dark:via-white/20 via-black/10 to-transparent opacity-60"
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { ProgressiveBlur } from '../ui/progressive-blur';

interface AnimatedSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  /** Whether to render progressive blur on transition edges. @default true */
  showEdgeBlur?: boolean;
  /** Which edge to blur: 'top' | 'bottom' | 'both' | 'none'. @default 'both' */
  blurSide?: 'top' | 'bottom' | 'both' | 'none';
  /** Height of blur. @default '120px' */
  blurSize?: string | number;
  /** Blur intensity in px. @default 8 */
  blurStrength?: number;
}

/**
 * AnimatedSection
 * IntersectionObserver wrapper with self-disconnect once visible.
 * Features optional ProgressiveBlur at section edges to create seamless transitions
 * when moving from one page/section to another.
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  id,
  children,
  className = '',
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  showEdgeBlur = false,
  blurSide = 'both',
  blurSize = '120px',
  blurStrength = 8,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Self-disconnect immediately to release resources
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const hasTopBlur = showEdgeBlur && (blurSide === 'top' || blurSide === 'both');
  const hasBottomBlur = showEdgeBlur && (blurSide === 'bottom' || blurSide === 'both');

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative overflow-x-clip transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {/* Top transition edge blur to soften incoming boundary */}
      {hasTopBlur && (
        <ProgressiveBlur
          side="top"
          size={blurSize}
          strength={blurStrength}
          tintStrength={0.7}
          className="z-20 pointer-events-none"
        />
      )}

      {children}

      {/* Bottom transition edge blur to feather into next section/page */}
      {hasBottomBlur && (
        <ProgressiveBlur
          side="bottom"
          size={blurSize}
          strength={blurStrength}
          tintStrength={0.7}
          className="z-20 pointer-events-none"
        />
      )}
    </section>
  );
};

export default AnimatedSection;

'use client';

import type { RefObject } from 'react';
import { motion, SpringOptions, useScroll, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

export type ScrollProgressProps = {
  className?: string;
  springOptions?: SpringOptions;
  containerRef?: RefObject<HTMLElement | HTMLDivElement | null>;
};

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 280,
  damping: 40,
  restDelta: 0.001,
};

/**
 * ScrollProgress — Motion Primitives progress bar for tracking scroll progress
 * Styled with the editorial portfolio theme color (Antique Gold & Warm Ivory/Onyx).
 */
export function ScrollProgress({
  className,
  springOptions,
  containerRef,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll(
    containerRef ? { container: containerRef as RefObject<HTMLElement> } : {}
  );

  const scaleX = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  });

  return (
    <motion.div
      className={cn(
        'inset-x-0 top-0 h-1 origin-left dark:bg-gradient-to-r dark:from-[#c8aa6e] dark:via-[#d4af37] dark:to-[#f3e5ab] bg-gradient-to-r from-[#806000] via-[#a67c00] to-[#c8aa6e] dark:shadow-[0_0_10px_rgba(212,175,55,0.6)] shadow-[0_0_6px_rgba(166,124,0,0.35)]',
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
}

export default ScrollProgress;


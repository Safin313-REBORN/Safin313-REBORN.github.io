'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'motion/react';
import useMeasure from 'react-use-measure';
import { ProgressiveBlur } from '@/components/core/progressive-blur';

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [isHovering, setIsHovering] = useState(false);
  const currentSpeed = isHovering && speedOnHover !== undefined ? speedOnHover : speed;
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    if (size <= 0) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / Math.max(currentSpeed, 1);

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / Math.max(currentSpeed, 1);

      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return () => controls?.stop();
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover !== undefined
    ? {
        onMouseEnter: () => {
          setIsTransitioning(true);
          setIsHovering(true);
        },
        onMouseLeave: () => {
          setIsTransitioning(true);
          setIsHovering(false);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

/**
 * ProgressiveBlurSlider — Reference demo combining InfiniteSlider with ProgressiveBlur
 */
export function ProgressiveBlurSlider() {
  return (
    <div className="relative h-[350px] w-full overflow-hidden">
      <InfiniteSlider className="flex h-full w-full items-center">
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className="w-32 text-center text-4xl font-[450] text-black dark:text-white"
          >
            {i + 1}
          </div>
        ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 left-0 h-full w-[200px] z-10"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 right-0 h-full w-[200px] z-10"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}

export default InfiniteSlider;

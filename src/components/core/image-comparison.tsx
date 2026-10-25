'use client';

import React, { useState, createContext, useContext, useCallback, useRef } from 'react';
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import { cn } from '@/lib/utils';

interface ImageComparisonContextType {
  sliderPosition: number;
  setSliderPosition: (pos: number) => void;
  motionSliderPosition: MotionValue<number>;
}

const ImageComparisonContext = createContext<ImageComparisonContextType | undefined>(undefined);

export type ImageComparisonProps = {
  children: React.ReactNode;
  className?: string;
  enableHover?: boolean;
  defaultPosition?: number;
  springOptions?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
    bounce?: number;
    duration?: number;
  };
  onPositionChange?: (position: number) => void;
};

const DEFAULT_SPRING_OPTIONS = {
  stiffness: 400,
  damping: 40,
  mass: 0.8,
};

export function ImageComparison({
  children,
  className,
  enableHover = false,
  defaultPosition = 50,
  springOptions,
  onPositionChange,
}: ImageComparisonProps) {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const motionValue = useMotionValue(defaultPosition);
  const motionSliderPosition = useSpring(
    motionValue,
    springOptions ?? DEFAULT_SPRING_OPTIONS
  );
  const [sliderPosition, setSliderPosition] = useState(defaultPosition);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      motionValue.set(percentage);
      setSliderPosition(percentage);
      if (onPositionChange) {
        onPositionChange(percentage);
      }
    },
    [motionValue, onPositionChange]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging || enableHover) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture was already released
    }
  };

  return (
    <ImageComparisonContext.Provider
      value={{ sliderPosition, setSliderPosition, motionSliderPosition }}
    >
      <div
        ref={containerRef}
        className={cn(
          'relative select-none overflow-hidden touch-none cursor-ew-resize',
          className
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => setIsDragging(false)}
      >
        {children}
      </div>
    </ImageComparisonContext.Provider>
  );
}

export const ImageComparisonImage = ({
  className,
  alt,
  src,
  position,
}: {
  className?: string;
  alt: string;
  src: string;
  position: 'left' | 'right';
}) => {
  const context = useContext(ImageComparisonContext);
  if (!context) {
    throw new Error('ImageComparisonImage must be used within ImageComparison');
  }

  const { motionSliderPosition } = context;

  // In standard image comparison:
  // position 'left': image is shown on the left half (from 0 to value%)
  // position 'right': image is shown on the right half (from value% to 100%)
  const leftClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 ${100 - value}% 0 0)`
  );
  const rightClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 0 0 ${value}%)`
  );

  return (
    <motion.img
      src={src}
      alt={alt}
      draggable={false}
      className={cn('absolute inset-0 h-full w-full object-cover pointer-events-none', className)}
      style={{
        clipPath: position === 'left' ? leftClipPath : rightClipPath,
      }}
    />
  );
};

export const ImageComparisonSlider = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const context = useContext(ImageComparisonContext);
  if (!context) {
    throw new Error('ImageComparisonSlider must be used within ImageComparison');
  }

  const { motionSliderPosition } = context;
  const left = useTransform(motionSliderPosition, (value) => `${value}%`);

  return (
    <motion.div
      className={cn(
        'absolute top-0 bottom-0 w-[2px] -translate-x-1/2 pointer-events-none z-20 flex items-center justify-center',
        className || 'bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]'
      )}
      style={{ left }}
    >
      {children || (
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/30 dark:border-white/20 bg-black/80 dark:bg-black/90 backdrop-blur-md shadow-2xl text-white">
          <div className="flex items-center gap-1 text-[11px] font-bold tracking-tighter">
            <span>&#9664;</span>
            <span className="text-[10px] text-gold">&#9670;</span>
            <span>&#9654;</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

/**
 * ImageComparisonBasic — standard demo configuration as provided by Motion Primitives
 */
export function ImageComparisonBasic() {
  return (
    <ImageComparison className="aspect-16/10 w-full rounded-lg border border-zinc-200 dark:border-zinc-800">
      <ImageComparisonImage
        src="/mp_dark.png"
        alt="Motion Primitives Dark"
        position="left"
      />
      <ImageComparisonImage
        src="/mp_light.png"
        alt="Motion Primitives Light"
        position="right"
      />
      <ImageComparisonSlider className="bg-white" />
    </ImageComparison>
  );
}

export default ImageComparison;

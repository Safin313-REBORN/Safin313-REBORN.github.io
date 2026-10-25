import React from 'react';
import { motion, Variants } from 'motion/react';

export interface WordScrollProps {
  label: string;
  className?: string;
  staggerDuration?: number;
  isActive?: boolean;
}

const letterVariants: Variants = {
  rest: {
    y: '0%',
  },
  hover: {
    y: '-105%',
  },
};

const secondaryLetterVariants: Variants = {
  rest: {
    y: '105%',
  },
  hover: {
    y: '0%',
  },
};

export const WordScroll: React.FC<WordScrollProps> = ({
  label,
  className = '',
  staggerDuration = 0.018,
  isActive = false,
}) => {
  return (
    <span
      className={`relative inline-flex items-center justify-center overflow-hidden h-[1.3em] leading-[1.3em] select-none ${className}`}
    >
      <span className="sr-only">{label}</span>
      <span
        className="inline-flex items-center justify-center leading-[1.3em]"
        aria-hidden="true"
      >
        {label.split('').map((char, index) => {
          const isSpace = char === ' ';
          return (
            <span
              key={index}
              className="relative inline-block overflow-hidden h-[1.3em] leading-[1.3em]"
            >
              {/* Primary Character: Visible at rest, rolls up on hover */}
              <motion.span
                className={`inline-block leading-[1.3em] ${
                  isActive
                    ? 'dark:text-white text-neutral-900 font-medium'
                    : 'dark:text-cream/80 text-neutral-600'
                }`}
                variants={letterVariants}
                transition={{
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * staggerDuration,
                }}
              >
                {isSpace ? '\u00A0' : char}
              </motion.span>

              {/* Secondary Character: Rolls up from bottom on hover in luxury gold */}
              <motion.span
                className={`absolute inset-0 inline-block leading-[1.3em] ${
                  isActive
                    ? 'dark:text-gold text-[#997300] font-medium'
                    : 'dark:text-gold text-[#997300]'
                }`}
                variants={secondaryLetterVariants}
                transition={{
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * staggerDuration,
                }}
              >
                {isSpace ? '\u00A0' : char}
              </motion.span>
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default WordScroll;

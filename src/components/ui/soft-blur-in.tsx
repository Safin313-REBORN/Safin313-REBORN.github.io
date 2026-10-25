import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export interface SoftBlurInProps {
  children: string;
  className?: string;
  /** Delay before the animation starts, in milliseconds. */
  delay?: number;
  /** Per-character stagger, in milliseconds. */
  stagger?: number;
  /** Animate only once the text scrolls into view. */
  triggerOnView?: boolean;
  /** Optional prefix element (e.g. opening quote) locked to the first word. */
  prefix?: React.ReactNode;
  /** Optional suffix element (e.g. closing quote) locked to the last word. */
  suffix?: React.ReactNode;
}

const DURATION_S = 0.8;
const MS = 1000;
// Apple's signature ease-out: cubic-bezier(0.22, 1, 0.36, 1)
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * SoftBlurIn — per-character fade-in with a gentle blur and upward motion,
 * with strict word-boundary protection to prevent words from splitting across lines.
 */
export default function SoftBlurIn({
  children,
  className = "",
  delay = 0,
  stagger = 20,
  triggerOnView = false,
  prefix,
  suffix,
}: SoftBlurInProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const play = (!triggerOnView || inView) && !shouldReduceMotion;

  // Split into words by whitespace so letters within each word never break across lines
  const words = children.trim().split(/\s+/);
  let globalCharIndex = 0;

  return (
    <span aria-label={children} className={className} ref={ref}>
      {words.map((word, wordIndex) => {
        const characters = Array.from(word);
        const wordStartIndex = globalCharIndex;
        // Advance global character counter (+1 for the space)
        globalCharIndex += characters.length + 1;

        const isFirst = wordIndex === 0;
        const isLast = wordIndex === words.length - 1;

        return (
          <React.Fragment key={`w-${wordIndex}`}>
            <span className="inline-block whitespace-nowrap">
              {isFirst && prefix}
              {characters.map((char, charIndex) => {
                const charOrder = wordStartIndex + charIndex;
                return (
                  <motion.span
                    key={`c-${wordIndex}-${charIndex}`}
                    animate={play ? { filter: "blur(0px)", opacity: 1, y: 0 } : undefined}
                    aria-hidden="true"
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { filter: "blur(12px)", opacity: 0, y: 14 }
                    }
                    style={{ display: "inline-block" }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : {
                            delay: delay / MS + (charOrder * stagger) / MS,
                            duration: DURATION_S,
                            ease: EASE,
                          }
                    }
                  >
                    {char}
                  </motion.span>
                );
              })}
              {isLast && suffix}
            </span>
            {!isLast && " "}
          </React.Fragment>
        );
      })}
    </span>
  );
}

export { SoftBlurIn };


"use client";

import React, { useState } from "react";
import debounce from "lodash/debounce";
import { AnimationOptions, HTMLMotionProps, motion, useAnimate } from "motion/react";

export interface RandomLetterSwapProps extends Omit<HTMLMotionProps<"span">, "transition"> {
  label: string;
  reverse?: boolean;
  transition?: AnimationOptions;
  staggerDuration?: number;
  className?: string;
  onClick?: () => void;
  mode?: "forward" | "pingpong";
}

export const RandomLetterSwap: React.FC<RandomLetterSwapProps> = ({
  label,
  reverse = true,
  transition = {
    type: "spring",
    duration: 0.7,
  },
  staggerDuration = 0.025,
  className = "",
  onClick,
  mode = "forward",
  ...props
}) => {
  const [scope, animate] = useAnimate();
  const [blocked, setBlocked] = useState(false);

  const mergeTransition = (baseTransition: AnimationOptions, i: number) => ({
    ...baseTransition,
    delay: i * staggerDuration,
  });

  const hoverStart = debounce(
    () => {
      if (!label || blocked) return;
      setBlocked(true);

      const shuffledIndices = Array.from(
        { length: label.length },
        (_, i) => i
      ).sort(() => Math.random() - 0.5);

      for (let i = 0; i < label.length; i++) {
        const randomIndex = shuffledIndices[i];

        animate(
          `.letter-${randomIndex}`,
          {
            y: reverse ? "100%" : "-100%",
          },
          mergeTransition(transition, i)
        ).then(() => {
          if (mode === "forward") {
            animate(
              `.letter-${randomIndex}`,
              { y: 0 },
              { duration: 0 }
            );
          }
        });

        animate(
          `.letter-secondary-${randomIndex}`,
          {
            top: "0%",
          },
          mergeTransition(transition, i)
        )
          .then(() => {
            if (mode === "forward") {
              animate(
                `.letter-secondary-${randomIndex}`,
                {
                  top: reverse ? "-100%" : "100%",
                },
                { duration: 0 }
              );
            }
          })
          .then(() => {
            if (i === label.length - 1) {
              setBlocked(false);
            }
          });
      }
    },
    50,
    { leading: true, trailing: false }
  );

  const hoverEnd = debounce(
    () => {
      if (mode !== "pingpong" || !label) return;
      setBlocked(false);

      const shuffledIndices = Array.from(
        { length: label.length },
        (_, i) => i
      ).sort(() => Math.random() - 0.5);

      for (let i = 0; i < label.length; i++) {
        const randomIndex = shuffledIndices[i];
        animate(
          `.letter-${randomIndex}`,
          { y: 0 },
          mergeTransition(transition, i)
        );

        animate(
          `.letter-secondary-${randomIndex}`,
          { top: reverse ? "-100%" : "100%" },
          mergeTransition(transition, i)
        );
      }
    },
    50,
    { leading: true, trailing: false }
  );

  return (
    <motion.span
      className={`inline-flex justify-center items-center relative overflow-hidden ${className}`}
      onHoverStart={hoverStart}
      onMouseEnter={hoverStart}
      onHoverEnd={mode === "pingpong" ? hoverEnd : undefined}
      onMouseLeave={mode === "pingpong" ? hoverEnd : undefined}
      onClick={onClick}
      ref={scope}
      {...props}
    >
      <span className="sr-only">{label}</span>

      {label.split("").map((letter: string, i: number) => {
        return (
          <span
            className="whitespace-pre relative inline-flex"
            key={i}
            aria-hidden={true}
          >
            <motion.span
              className={`relative letter-${i}`}
              style={{ top: 0 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
            <motion.span
              className={`absolute left-0 letter-secondary-${i}`}
              style={{ top: reverse ? "-100%" : "100%" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
};

export default RandomLetterSwap;

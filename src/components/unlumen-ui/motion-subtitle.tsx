"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface MotionSubtitleProps {
  text: string;
  direction?: "top" | "bottom";
  speed?: number;
  stagger?: number;
  className?: string;
}

export const MotionSubtitle: React.FC<MotionSubtitleProps> = ({
  text,
  direction = "top",
  speed = 1,
  stagger = 0.018,
  className,
}) => {
  const characters = Array.from(text);
  const yOffset = direction === "top" ? -10 : 10;

  return (
    <div className={cn("overflow-hidden inline-flex flex-wrap justify-center", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: Math.max(0.005, stagger / speed),
              },
            },
            exit: {
              opacity: 0,
              transition: { duration: 0.15 },
            },
          }}
          className="inline-flex flex-wrap justify-center"
        >
          {characters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={{
                hidden: { opacity: 0, y: yOffset },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: Math.max(0.2, 0.35 / speed),
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
                exit: { opacity: 0, y: -yOffset },
              }}
              className="inline-block whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default MotionSubtitle;

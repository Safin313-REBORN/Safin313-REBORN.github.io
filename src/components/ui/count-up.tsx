"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type TargetAndTransition,
} from "motion/react";

import { cn } from "@/lib/utils";

type DigitEffect = "none" | "fade" | "blur" | "slide";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  digitEffect?: DigitEffect;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

const DIGIT_HEIGHT_EM = 1.25;
const CYCLES = 3;
const DIGIT_TRACK = Array.from({ length: CYCLES * 10 }, (_, i) => i % 10);

interface RollingDigitProps {
  digit: number;
  digitIndex: number;
  duration: number;
  delay: number;
  isStarted: boolean;
  reducedMotion: boolean;
}

function RollingDigit({
  digit,
  digitIndex,
  duration,
  delay,
  isStarted,
  reducedMotion,
}: RollingDigitProps) {
  // Target index in the final cycle (e.g., 20 + digit for 3 cycles)
  const targetIndex = (CYCLES - 1) * 10 + digit;

  if (reducedMotion) {
    return (
      <span
        className="inline-flex items-center justify-center tabular-nums"
        style={{
          height: `${DIGIT_HEIGHT_EM}em`,
          lineHeight: `${DIGIT_HEIGHT_EM}em`,
          minWidth: "0.6ch",
        }}
      >
        {digit}
      </span>
    );
  }

  return (
    <span
      className="relative inline-block overflow-hidden tabular-nums align-baseline select-none"
      style={{
        height: `${DIGIT_HEIGHT_EM}em`,
        lineHeight: `${DIGIT_HEIGHT_EM}em`,
        minWidth: "0.6ch",
      }}
    >
      <motion.span
        className="flex flex-col"
        initial={{ y: "0em" }}
        animate={
          isStarted
            ? { y: `-${targetIndex * DIGIT_HEIGHT_EM}em` }
            : { y: "0em" }
        }
        transition={{
          duration: Math.max(0.7, duration + digitIndex * 0.1),
          delay: delay + digitIndex * 0.04,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {DIGIT_TRACK.map((d, i) => (
          <span
            key={i}
            className="flex items-center justify-center tabular-nums"
            style={{
              height: `${DIGIT_HEIGHT_EM}em`,
              lineHeight: `${DIGIT_HEIGHT_EM}em`,
            }}
          >
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

type CharSlotProps = {
  char: string;
  charKey: string;
  effect: Exclude<DigitEffect, "none" | "slide">;
  countingUp: boolean;
};

const CHAR_VARIANTS = {
  fade: {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.7 },
    transition: { duration: 0.14, ease: "easeOut" },
    overflow: "hidden" as const,
  },
  blur: {
    initial: (up: boolean) => ({
      opacity: 0,
      filter: "blur(8px)",
      y: up ? -8 : 8,
    }),
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    exit: (up: boolean) => ({
      opacity: 0,
      filter: "blur(8px)",
      y: up ? 8 : -8,
    }),
    transition: { duration: 0.18, ease: "easeOut" },
    overflow: "visible" as const,
  },
};

function CharSlot({ char, charKey, effect, countingUp }: CharSlotProps) {
  const isDigit = /\d/.test(char);

  if (!isDigit) {
    return <span style={{ display: "inline-block" }}>{char}</span>;
  }

  const v = CHAR_VARIANTS[effect];
  const initial =
    typeof v.initial === "function" ? v.initial(countingUp) : v.initial;
  const exit =
    "exit" in v && typeof v.exit === "function"
      ? (v.exit as (up: boolean) => TargetAndTransition)(countingUp)
      : (v.exit as TargetAndTransition);

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        overflow: v.overflow,
      }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={charKey}
          initial={initial as TargetAndTransition}
          animate={v.animate}
          exit={exit}
          transition={v.transition as object}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  digitEffect = "none",
  className,
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = Boolean(shouldReduceMotion);
  const [isStarted, setIsStarted] = React.useState(false);

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes(".")) {
      const parts = str.split(".");
      const decimals = parts[1];
      if (decimals && parseInt(decimals, 10) !== 0) return decimals.length;
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = React.useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;
      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0,
      };
      const formatted = Intl.NumberFormat("en-US", options).format(latest);
      return separator ? formatted.replace(/,/g, separator) : formatted;
    },
    [maxDecimals, separator],
  );

  // Trigger start when in view
  React.useEffect(() => {
    if (isInView && startWhen) {
      setIsStarted(true);
      onStart?.();
      const timer = setTimeout(() => {
        onEnd?.();
      }, (delay + duration + 0.4) * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, startWhen, delay, duration, onStart, onEnd]);

  // Spring & numeric interpolation for non-slide digit effects
  const motionValue = useMotionValue(direction === "down" ? to : from);
  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });

  const initialStr = formatValue(direction === "down" ? to : from);
  const [chars, setChars] = React.useState<string[]>(initialStr.split(""));

  React.useEffect(() => {
    if (digitEffect === "slide") return;
    const initial = formatValue(direction === "down" ? to : from);
    if (digitEffect === "none") {
      if (ref.current) ref.current.textContent = initial;
    } else {
      setChars(initial.split(""));
    }
  }, [from, to, direction, formatValue, digitEffect]);

  React.useEffect(() => {
    if (digitEffect === "slide") return;
    if (isInView && startWhen) {
      const t1 = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);
      return () => clearTimeout(t1);
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, digitEffect]);

  React.useEffect(() => {
    if (digitEffect === "slide") return;
    const unsubscribe = springValue.on("change", (latest: number) => {
      if (digitEffect === "none") {
        if (ref.current) ref.current.textContent = formatValue(latest);
      } else {
        setChars(formatValue(latest).split(""));
      }
    });
    return () => unsubscribe();
  }, [springValue, formatValue, digitEffect]);

  const countingUp = direction === "up";

  // Slide / Slot Odometer Effect: Rolls each digit track and locks in perfectly to target number
  if (digitEffect === "slide") {
    const targetStr = formatValue(direction === "down" ? from : to);
    let digitCounter = 0;

    const items = targetStr.split("").map((ch, idx) => {
      if (/\d/.test(ch)) {
        const d = parseInt(ch, 10);
        const digitIndex = digitCounter++;
        return {
          type: "digit" as const,
          digit: d,
          digitIndex,
          key: `d-${idx}-${d}`,
        };
      }
      return {
        type: "char" as const,
        char: ch,
        key: `c-${idx}-${ch}`,
      };
    });

    return (
      <span
        ref={ref}
        className={cn("inline-flex items-center tabular-nums leading-none select-none", className)}
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {items.map((item) =>
          item.type === "char" ? (
            <span
              key={item.key}
              className="inline-block select-none"
              style={{
                height: `${DIGIT_HEIGHT_EM}em`,
                lineHeight: `${DIGIT_HEIGHT_EM}em`,
              }}
            >
              {item.char}
            </span>
          ) : (
            <RollingDigit
              key={item.key}
              digit={item.digit}
              digitIndex={item.digitIndex}
              duration={duration}
              delay={delay}
              isStarted={isStarted}
              reducedMotion={reducedMotion}
            />
          ),
        )}
      </span>
    );
  }

  if (digitEffect === "none") {
    return <span ref={ref} className={cn(className)} />;
  }

  return (
    <span ref={ref} className={cn("inline-flex items-center", className)}>
      {chars.map((char, i) => (
        <CharSlot
          key={i}
          char={char}
          charKey={`${i}-${char}`}
          effect={digitEffect as Exclude<DigitEffect, "none" | "slide">}
          countingUp={countingUp}
        />
      ))}
    </span>
  );
}

export default CountUp;
export type { CountUpProps, DigitEffect };

'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  MotionStyle,
  SpringOptions,
} from 'motion/react';

export type TiltProps = {
  children: React.ReactNode;
  className?: string;
  style?: MotionStyle;
  rotationFactor?: number;
  isRevese?: boolean;
  isReverse?: boolean;
  springOptions?: SpringOptions;
};

export function Tilt({
  children,
  className,
  style,
  rotationFactor = 15,
  isRevese = false,
  isReverse,
  springOptions,
}: TiltProps) {
  const reverse = isReverse ?? isRevese ?? false;
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const defaultSpringOptions: SpringOptions = {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  };

  const xSpring = useSpring(x, springOptions ?? defaultSpringOptions);
  const ySpring = useSpring(y, springOptions ?? defaultSpringOptions);

  const rotateX = useTransform(
    ySpring,
    [-0.5, 0.5],
    reverse
      ? [rotationFactor, -rotationFactor]
      : [-rotationFactor, rotationFactor]
  );
  const rotateY = useTransform(
    xSpring,
    [-0.5, 0.5],
    reverse
      ? [-rotationFactor, rotationFactor]
      : [rotationFactor, -rotationFactor]
  );

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPos = mouseX / width - 0.5;
    const yPos = mouseY / height - 0.5;

    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        ...style,
        transform,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

/**
 * TiltCard1 — Reference demo from Motion Primitives
 */
export function TiltCard1() {
  return (
    <Tilt rotationFactor={8} isReverse>
      <div
        style={{
          borderRadius: '12px',
        }}
        className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <img
          src="https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg"
          alt="Ghost in the shell - Kôkaku kidôtai"
          className="h-48 w-full object-cover"
        />
        <div className="p-2">
          <h1 className="font-mono leading-snug text-zinc-950 dark:text-zinc-50">
            Ghost in the Shell
          </h1>
          <p className="text-zinc-700 dark:text-zinc-400">Kôkaku kidôtai</p>
        </div>
      </div>
    </Tilt>
  );
}

export default Tilt;

import React, { useEffect, useRef } from 'react';

/**
 * GlobalCursorSpotlight
 * High-Performance Zero-Re-render Ambient Cursor Spotlight.
 * Directly mutates DOM element style via requestAnimationFrame.
 * Does NOT store mouse coordinates in React state.
 */
export const GlobalCursorSpotlight: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    // Check for pointer device / reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.style.display = 'none';
      return;
    }

    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let rafId: number | null = null;
    let isVisible = false;

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        el.style.opacity = '1';
      }

      if (!rafId) {
        rafId = requestAnimationFrame(render);
      }
    };

    const onPointerLeave = () => {
      isVisible = false;
      el.style.opacity = '0';
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false;
        el.style.opacity = '0';
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const render = () => {
      // Smooth interpolation for luxury feel
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      // Continue animating until settled
      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        rafId = requestAnimationFrame(render);
      } else {
        rafId = null;
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 h-[650px] w-[650px] rounded-full opacity-0 transition-opacity duration-700 ease-out will-change-transform"
      style={{
        background:
          'radial-gradient(circle closest-side, rgba(239, 238, 233, 0.055) 0%, rgba(200, 170, 110, 0.02) 40%, transparent 75%)',
      }}
    />
  );
};

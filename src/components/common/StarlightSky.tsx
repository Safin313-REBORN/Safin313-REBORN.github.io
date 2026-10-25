import React, { useEffect, useRef } from 'react';

/**
 * Star particle data structure for individual asynchronous twinkling.
 */
interface CelestialDot {
  x: number;
  y: number;
  baseRadius: number;
  spriteIndex: number;
  minAlpha: number;
  maxAlpha: number;
  speed: number;
  phase: number;
  power: number;
}

/**
 * StarlightSky
 * High-performance, multi-layered micro-celestial star sky inspired by
 * BMW Starlight headliners and luxury night skies.
 *
 * Key Features:
 * 1. High dot density (350-750 micro-dots dynamically scaled by viewport area).
 * 2. Optical blur & bokeh feathering (soft blurred cores with feathered halos).
 * 3. 100% Asynchronous twinkling (every star has independent speed, phase, & power;
 *    never shine up at the same time; breathes smoothly between 0% and 50% brightness).
 * 4. Pre-rendered offscreen sprite cache for 60-120fps zero-garbage rendering.
 */
export const StarlightSky: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let rafId: number | null = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars: CelestialDot[] = [];
    let isDark = document.documentElement.classList.contains('dark');

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Build cached offscreen star sprites for high performance
    const SPRITE_COUNT = 5;
    let cachedSprites: HTMLCanvasElement[] = [];

    const generateSprites = () => {
      cachedSprites = [];
      // Radii for crisp pinpoint star tiers: 0.75px to 1.8px
      const radii = [0.75, 1.0, 1.25, 1.5, 1.8];

      for (let i = 0; i < SPRITE_COUNT; i++) {
        const spriteCanvas = document.createElement('canvas');
        const r = radii[i];
        // Minimal margin for subpixel anti-aliased crisp edges without blur
        const margin = 1;
        const size = Math.ceil((r + margin) * 2);
        spriteCanvas.width = size;
        spriteCanvas.height = size;

        const sCtx = spriteCanvas.getContext('2d');
        if (!sCtx) continue;

        const cx = size / 2;
        const cy = size / 2;

        // Crisp pinpoint gradients without wide blur halos
        const grad = sCtx.createRadialGradient(cx, cy, 0, cx, cy, r + margin);

        if (isDark) {
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(0.45, '#ffe685');
          grad.addColorStop(0.85, '#d4af37');
          grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
        } else {
          grad.addColorStop(0, '#b8860b');
          grad.addColorStop(0.8, '#a67c00');
          grad.addColorStop(1, 'rgba(166, 124, 0, 0)');
        }

        sCtx.fillStyle = grad;
        sCtx.beginPath();
        sCtx.arc(cx, cy, r + margin, 0, Math.PI * 2);
        sCtx.fill();

        cachedSprites.push(spriteCanvas);
      }
    };

    // Initialize stars across canvas
    const initStars = () => {
      // Scale count to viewport area for luxury density
      // ~450-650 stars on desktop; ~120-220 on mobile
      const area = width * height;
      const targetCount = Math.max(160, Math.min(750, Math.floor(area / 3100)));

      stars = [];
      for (let i = 0; i < targetCount; i++) {
        // Skew sprite selection towards smaller micro-stars (BMW starlight roof feel)
        const rand = Math.random();
        let spriteIndex = 0;
        if (rand < 0.55) {
          spriteIndex = 0; // micro 0.85px
        } else if (rand < 0.82) {
          spriteIndex = 1; // small 1.15px
        } else if (rand < 0.93) {
          spriteIndex = 2; // medium 1.45px
        } else if (rand < 0.98) {
          spriteIndex = 3; // accent 1.8px
        } else {
          spriteIndex = 4; // focal 2.2px
        }

        // Independent, asynchronous timing parameters:
        // Speeds between 0.0006 and 0.0022 radians/ms (~2.8s to 10s cycles)
        const speed = 0.0006 + Math.random() * 0.0016;
        // Unique phase offset 0 to 2*PI guarantees no two stars peak together
        const phase = Math.random() * Math.PI * 2;
        // Non-linear power shaping: higher power = longer dim periods, quick gentle peaks
        const power = 1.3 + Math.random() * 1.5;

        // User requirement: "0 brightness then 50% brightness. not stable"
        // Min brightness from 0 to 0.04 (nearly invisible)
        const minAlpha = Math.random() < 0.4 ? 0 : Math.random() * 0.035;
        // Max brightness strictly between 0.28 and 0.50 (capped at 50%)
        const maxAlpha = 0.28 + Math.random() * 0.22;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseRadius: [0.75, 1.0, 1.25, 1.5, 1.8][spriteIndex],
          spriteIndex,
          minAlpha,
          maxAlpha,
          speed,
          phase,
          power,
        });
      }
    };

    // Resize handler
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      generateSprites();
      initStars();
    };

    // Initial setup
    resize();

    // Render loop
    const render = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      const len = stars.length;
      for (let i = 0; i < len; i++) {
        const star = stars[i];

        let alpha = star.maxAlpha;
        if (!prefersReducedMotion) {
          // Asynchronous sine wave computation
          const raw = Math.sin(timestamp * star.speed + star.phase);
          // Normalized to 0..1
          const norm = (raw + 1) * 0.5;
          // Apply smooth quadratic curve for natural stellar scintillation
          const curve = norm * norm;
          alpha = star.minAlpha + (star.maxAlpha - star.minAlpha) * curve;
        }

        // Skip completely dark dots for performance
        if (alpha < 0.008) continue;

        const sprite = cachedSprites[star.spriteIndex];
        if (!sprite) continue;

        ctx.globalAlpha = alpha;
        // Center the sprite on star coordinates
        const half = sprite.width / 2;
        ctx.drawImage(sprite, star.x - half, star.y - half);
      }

      ctx.globalAlpha = 1;
      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(0);
    } else {
      rafId = requestAnimationFrame(render);
    }

    // Watch for theme toggles to regenerate sprite palettes
    const observer = new MutationObserver(() => {
      const nowDark = document.documentElement.classList.contains('dark');
      if (nowDark !== isDark) {
        isDark = nowDark;
        generateSprites();
        if (prefersReducedMotion) {
          render(0);
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Listen to resize with debounce
    let resizeTimer: number | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        if (prefersReducedMotion) {
          render(0);
        }
      }, 150);
    };

    // Pause animation when tab is inactive to preserve CPU / battery
    const handleVisibility = () => {
      if (prefersReducedMotion) return;
      if (document.hidden) {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      } else {
        if (!rafId) {
          rafId = requestAnimationFrame(render);
        }
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (resizeTimer) clearTimeout(resizeTimer);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
};

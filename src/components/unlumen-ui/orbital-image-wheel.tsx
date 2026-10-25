"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { MotionSubtitle } from "@/components/unlumen-ui/motion-subtitle";

gsap.registerPlugin(ScrollTrigger);

export interface OrbitalImageWheelImage {
  src: string;
  alt?: string;
  label?: string;
  subtitle?: string;
  category?: string;
  detailId?: string;
}

export interface OrbitalImageWheelProps {
  /** Images displayed around the wheel. */
  images: OrbitalImageWheelImage[];
  /** Number of full wheel turns during the scroll range. @default 3 */
  turns?: number;
  /** Maximum blur amount (px) away from the focus zone. @default 4 */
  blur?: number;
  /** Minimum brightness (%) away from focus. @default 40 */
  dim?: number;
  /** Extra brightness boost (%) around the active card. @default 30 */
  brightnessBoost?: number;
  /** Multiplier for out-of-focus darkening intensity. @default 1.05 */
  darknessStrength?: number;
  /** Minimum saturation (%) away from focus. @default 55 */
  minSaturation?: number;
  /** Multiplier for out-of-focus desaturation intensity. @default 0.6 */
  saturationStrength?: number;
  /** Focus zone width as normalized angular range. @default 0.34 */
  focusSpread?: number;
  /** Scale reduction amount away from focus. @default 0.06 */
  scaleEffect?: number;
  /** Scroll sensitivity multiplier. Lower values require longer scrolling. @default 0.7 */
  scrollSensitivity?: number;
  /** Card width in pixels. @default 340 */
  itemWidth?: number;
  /** Card height in pixels. @default 240 */
  itemHeight?: number;
  /** Optional fixed wheel diameter in pixels. Defaults to a responsive value based on viewport width. */
  wheelSize?: number;
  /** How much of the wheel sits below the viewport (0..1). `0.5` keeps only the top half visible. @default 0.72 */
  cropRatio?: number;
  /** Scroll section height in viewport units. @default 300 */
  scrollLength?: number;
  /** Bottom offset of the caption block in viewport units. @default 12 */
  captionOffset?: number;
  /** Show or hide the centered caption. @default true */
  showCaption?: boolean;
  /** Subtitle animation direction. @default "top" */
  subtitleDirection?: "top" | "bottom";
  /** Subtitle animation speed multiplier. @default 1 */
  subtitleSpeed?: number;
  /** Delay between subtitle character reveals in seconds. @default 0.018 */
  subtitleStagger?: number;
  /** Optional scrollable container element used as the animation scroller. */
  scrollContainerRef?: RefObject<HTMLElement | null>;
  /** Additional class name on the root element. */
  className?: string;
  /** Optional click handler on the active card. */
  onCardClick?: (image: OrbitalImageWheelImage, index: number) => void;
}

const DEFAULT_TURNS = 3;
const DEFAULT_BLUR = 4;
const DEFAULT_DIM = 40;
const DEFAULT_BRIGHTNESS_BOOST = 30;
const DEFAULT_DARKNESS_STRENGTH = 1.05;
const DEFAULT_MIN_SATURATION = 55;
const DEFAULT_SATURATION_STRENGTH = 0.6;
const DEFAULT_FOCUS_SPREAD = 0.34;
const DEFAULT_SCALE_EFFECT = 0.08;
const DEFAULT_SCROLL_SENSITIVITY = 0.75;
const DEFAULT_ITEM_WIDTH = 340;
const DEFAULT_ITEM_HEIGHT = 240;
const DEFAULT_SCROLL_LENGTH = 280;
const DEFAULT_CROP_RATIO = 0.72;
const DEFAULT_CAPTION_OFFSET = 12;
const DEFAULT_SUBTITLE_DIRECTION = "top";
const DEFAULT_SUBTITLE_SPEED = 1;
const DEFAULT_SUBTITLE_STAGGER = 0.018;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function shortestAngleDistance(a: number, b: number) {
  const full = Math.PI * 2;
  const raw = ((a - b + Math.PI) % full) - Math.PI;
  const normalized = raw < -Math.PI ? raw + full : raw;
  return Math.abs(normalized);
}

function applyScrollSensitivity(progress: number, sensitivity: number) {
  const safeSensitivity = clamp(sensitivity, 0.25, 1.6);
  const exponent = 1 / safeSensitivity;
  return Math.pow(clamp(progress, 0, 1), exponent);
}

function getFocusedImageIndexWithHysteresis(
  progress: number,
  total: number,
  turns: number,
  currentIndex: number,
  hysteresis = 0.18,
) {
  if (total <= 0 || turns <= 0) return 0;

  const phaseRaw = total * (0.25 + progress * turns);
  const phase = ((phaseRaw % total) + total) % total;

  if (currentIndex < 0) {
    return Math.round(phase) % total;
  }

  let next = currentIndex;
  let delta = phase - next;

  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;

  const threshold = 0.5 + clamp(hysteresis, 0, 0.35);

  while (delta > threshold) {
    next = (next + 1) % total;
    delta -= 1;
  }

  while (delta < -threshold) {
    next = (next - 1 + total) % total;
    delta += 1;
  }

  return next;
}

function getSnapProgressForIndex(
  index: number,
  total: number,
  turns: number,
  currentProgress: number,
) {
  if (total <= 0 || turns <= 0) return clamp(currentProgress, 0, 1);

  const safeIndex = ((index % total) + total) % total;
  const minCycle = Math.floor(-turns - 2);
  const maxCycle = Math.ceil(turns + 2);
  let nearest = clamp(currentProgress, 0, 1);
  let minDistance = Number.POSITIVE_INFINITY;

  for (let cycle = minCycle; cycle <= maxCycle; cycle += 1) {
    const progress = (safeIndex / total - 0.25 - cycle) / turns;
    if (progress < 0 || progress > 1) continue;

    const distance = Math.abs(progress - currentProgress);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = progress;
    }
  }

  if (!Number.isFinite(minDistance)) {
    return clamp((safeIndex / total - 0.25) / turns, 0, 1);
  }

  return nearest;
}

function useViewportWidth(viewportRef: RefObject<HTMLDivElement | null>) {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const update = () => setWidth(viewport.clientWidth || 1200);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, [viewportRef]);

  return width;
}

export function OrbitalImageWheel({
  images,
  turns = DEFAULT_TURNS,
  blur = DEFAULT_BLUR,
  dim = DEFAULT_DIM,
  brightnessBoost = DEFAULT_BRIGHTNESS_BOOST,
  darknessStrength = DEFAULT_DARKNESS_STRENGTH,
  minSaturation = DEFAULT_MIN_SATURATION,
  saturationStrength = DEFAULT_SATURATION_STRENGTH,
  focusSpread = DEFAULT_FOCUS_SPREAD,
  scaleEffect = DEFAULT_SCALE_EFFECT,
  scrollSensitivity = DEFAULT_SCROLL_SENSITIVITY,
  itemWidth = DEFAULT_ITEM_WIDTH,
  itemHeight = DEFAULT_ITEM_HEIGHT,
  wheelSize,
  cropRatio = DEFAULT_CROP_RATIO,
  scrollLength = DEFAULT_SCROLL_LENGTH,
  captionOffset = DEFAULT_CAPTION_OFFSET,
  showCaption = true,
  subtitleDirection = DEFAULT_SUBTITLE_DIRECTION,
  subtitleSpeed = DEFAULT_SUBTITLE_SPEED,
  subtitleStagger = DEFAULT_SUBTITLE_STAGGER,
  scrollContainerRef,
  className,
  onCardClick,
}: OrbitalImageWheelProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const wheelScrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const titleClickTweenRef = useRef<gsap.core.Tween | null>(null);
  const titleViewportRef = useRef<HTMLDivElement>(null);
  const titleTrackRef = useRef<HTMLDivElement>(null);
  const titleStartSpacerRef = useRef<HTMLSpanElement>(null);
  const titleEndSpacerRef = useRef<HTMLSpanElement>(null);
  const titleTrackXToRef = useRef<((value: number) => void) | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const viewportWidth = useViewportWidth(viewportRef);

  const boundedTurns = clamp(turns, 0.2, 4);
  const boundedBlur = clamp(blur, 0, 36);
  const boundedDim = clamp(dim, 0, 100);
  const boundedBrightnessBoost = clamp(brightnessBoost, 0, 120);
  const boundedDarknessStrength = clamp(darknessStrength, 0.2, 3);
  const boundedMinSaturation = clamp(minSaturation, 0, 100);
  const boundedSaturationStrength = clamp(saturationStrength, 0.2, 3);
  const boundedFocusSpread = clamp(focusSpread, 0.08, 0.8);
  const boundedScaleEffect = clamp(scaleEffect, 0, 0.3);
  const boundedScrollSensitivity = clamp(scrollSensitivity, 0.25, 1.6);
  
  // Responsive card size clamp to fit mobile viewport cleanly
  const rawItemWidth = clamp(itemWidth, 180, 520);
  const rawItemHeight = clamp(itemHeight, 130, 420);
  const boundedItemWidth = Math.min(rawItemWidth, viewportWidth > 0 ? viewportWidth * 0.85 : rawItemWidth);
  const boundedItemHeight = boundedItemWidth * (rawItemHeight / rawItemWidth);

  const boundedCropRatio = clamp(cropRatio, 0.2, 0.8);
  const boundedScrollLength = clamp(scrollLength, 180, 700);
  const boundedCaptionOffset = clamp(captionOffset, 2, 22);
  const boundedSubtitleSpeed = clamp(subtitleSpeed, 0.3, 3);
  const boundedSubtitleStagger = clamp(subtitleStagger, 0, 0.08);
  const boundedSubtitleDirection =
    subtitleDirection === "bottom" ? "bottom" : "top";

  const responsiveWheelSize = clamp(viewportWidth * 1.7, 950, 2600);
  const boundedWheelSize = clamp(wheelSize ?? responsiveWheelSize, 800, 2800);
  const radius = boundedWheelSize / 2;
  const titleLabels = useMemo(
    () => images.map((img, i) => img.label ?? img.alt ?? `Certificate ${i + 1}`),
    [images],
  );
  const titleTrackLabels = useMemo(() => titleLabels, [titleLabels]);
  const activeTitleTrackIndex = Math.max(
    0,
    Math.min(activeIndex, titleTrackLabels.length - 1),
  );

  const handleTitleClick = useCallback(
    (index: number) => {
      const trigger = wheelScrollTriggerRef.current;
      if (!trigger || images.length === 0) return;

      const currentProgress = clamp(trigger.progress, 0, 1);
      const targetProgress = getSnapProgressForIndex(
        index,
        images.length,
        boundedTurns,
        currentProgress,
      );

      const scrollStart = trigger.start;
      const scrollEnd = trigger.end;
      const scrollRange = scrollEnd - scrollStart;
      if (scrollRange <= 0) return;

      const fromScroll = scrollStart + currentProgress * scrollRange;
      const toScroll = scrollStart + targetProgress * scrollRange;

      setActiveIndex(index);
      titleClickTweenRef.current?.kill();

      const proxy = { scroll: fromScroll };
      titleClickTweenRef.current = gsap.to(proxy, {
        scroll: toScroll,
        duration: 0.65,
        ease: "power3.out",
        overwrite: true,
        onUpdate: () => {
          trigger.scroll(proxy.scroll);
        },
        onComplete: () => {
          setActiveIndex(index);
        },
      });
    },
    [images.length, boundedTurns],
  );

  useEffect(() => {
    const section = sectionRef.current;
    const wheel = wheelRef.current;
    if (!section || !wheel || images.length === 0) return;

    let previousActive = -1;

    const context = gsap.context(() => {
      const cards = Array.from(
        wheel.querySelectorAll<HTMLElement>(".oiw-item"),
      );
      if (cards.length === 0) return;

      const topAnchor = -Math.PI / 2;
      const focusArc = Math.PI * boundedFocusSpread;

      const applyState = (rawProgress: number) => {
        const p = applyScrollSensitivity(rawProgress, boundedScrollSensitivity);
        const rotation = -p * boundedTurns * Math.PI * 2;
        const focusedIndex = getFocusedImageIndexWithHysteresis(
          p,
          cards.length,
          boundedTurns,
          previousActive,
        );

        cards.forEach((card, index) => {
          const base = (index / cards.length) * Math.PI * 2 - Math.PI;
          const theta = base + rotation;
          const x = Math.cos(theta) * radius;
          const y = Math.sin(theta) * radius;

          const distanceToFocus = shortestAngleDistance(theta, topAnchor);
          const focusIntensity = clamp(distanceToFocus / focusArc, 0, 1);

          const darkIntensity = clamp(
            focusIntensity * boundedDarknessStrength,
            0,
            1,
          );
          const saturationIntensity = clamp(
            focusIntensity * boundedSaturationStrength,
            0,
            1,
          );

          const currentBlur = darkIntensity * boundedBlur;
          const peakBrightness = clamp(100 + boundedBrightnessBoost, 100, 220);
          const currentBrightness =
            boundedDim + (1 - darkIntensity) * (peakBrightness - boundedDim);
          const currentSaturation =
            boundedMinSaturation +
            (1 - saturationIntensity) * (100 - boundedMinSaturation);
          const currentScale = 1 - darkIntensity * boundedScaleEffect;
          const drift = clamp(x / radius, -1, 1);
          const tilt = drift * 9;
          const depth = clamp((1 - focusIntensity) * 120, 0, 120);

          const roundedBrightness = Math.round(currentBrightness);
          const roundedSat = Math.round(currentSaturation);
          const filterStr = currentBlur > 0.8
            ? `blur(${currentBlur.toFixed(1)}px) brightness(${roundedBrightness}%) saturate(${roundedSat}%)`
            : `brightness(${roundedBrightness}%) saturate(${roundedSat}%)`;
          const opacity = Number((1 - darkIntensity * 0.35).toFixed(2));

          gsap.set(card, {
            x,
            y,
            xPercent: -50,
            yPercent: -50,
            z: depth,
            rotate: tilt,
            scale: currentScale,
            opacity,
            filter: filterStr,
            zIndex: Math.round(depth),
          });
        });

        if (focusedIndex !== previousActive) {
          previousActive = focusedIndex;
          setActiveIndex(focusedIndex);
        }
      };

      applyState(0);

      const trigger = ScrollTrigger.create({
        trigger: section,
        scroller: scrollContainerRef?.current ?? undefined,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          applyState(self.progress);
        },
      });

      wheelScrollTriggerRef.current = trigger;
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => context.revert();
  }, [
    scrollContainerRef,
    images,
    radius,
    boundedTurns,
    boundedBlur,
    boundedDim,
    boundedBrightnessBoost,
    boundedDarknessStrength,
    boundedMinSaturation,
    boundedSaturationStrength,
    boundedFocusSpread,
    boundedScaleEffect,
    boundedScrollSensitivity,
  ]);

  useEffect(() => {
    return () => {
      titleClickTweenRef.current?.kill();
      wheelScrollTriggerRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const viewport = titleViewportRef.current;
    const track = titleTrackRef.current;
    const startSpacer = titleStartSpacerRef.current;
    const endSpacer = titleEndSpacerRef.current;
    if (!viewport || !track || titleTrackLabels.length === 0) return;

    if (!titleTrackXToRef.current) {
      titleTrackXToRef.current = gsap.quickTo(track, "x", {
        duration: 0.62,
        ease: "power4.out",
        overwrite: true,
      });
    }

    const firstTitle = track.querySelector<HTMLElement>(
      `[data-title-index="0"]`,
    );
    const lastTitle = track.querySelector<HTMLElement>(
      `[data-title-index="${titleTrackLabels.length - 1}"]`,
    );

    const activeTitle = track.querySelector<HTMLElement>(
      `[data-title-index="${activeTitleTrackIndex}"]`,
    );
    if (!activeTitle || !firstTitle || !lastTitle) return;

    const viewportWidthPx = viewport.clientWidth;

    // Add edge spacers so the first and last pills can be centered.
    const startPad = Math.max(
      0,
      viewportWidthPx / 2 - firstTitle.offsetWidth / 2,
    );
    const endPad = Math.max(0, viewportWidthPx / 2 - lastTitle.offsetWidth / 2);

    if (startSpacer) {
      startSpacer.style.width = `${Math.round(startPad)}px`;
    }

    if (endSpacer) {
      endSpacer.style.width = `${Math.round(endPad)}px`;
    }

    const activeCenter = activeTitle.offsetLeft + activeTitle.offsetWidth / 2;

    let targetX = Math.round(viewportWidthPx / 2 - activeCenter);

    if (track.scrollWidth <= viewportWidthPx) {
      targetX = Math.round((viewportWidthPx - track.scrollWidth) / 2);
    } else {
      const minX = viewportWidthPx - track.scrollWidth;
      targetX = Math.round(clamp(targetX, minX, 0));
    }

    titleTrackXToRef.current(targetX);
  }, [activeTitleTrackIndex, titleTrackLabels, viewportWidth]);

  const activeImage = useMemo(() => {
    if (images.length === 0) return null;
    return images[activeIndex] ?? images[0];
  }, [images, activeIndex]);

  if (images.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className={cn("relative w-full select-none", className)}
      style={{ height: `${boundedScrollLength}vh` }}
    >
      <div
        ref={viewportRef}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between"
      >
        {/* Subtle ambient lighting dome */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-gold/10 blur-[130px] -z-10" 
        />

        {/* 3D Revolving Orbital Wheel Container */}
        <div
          ref={wheelRef}
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            width: boundedWheelSize,
            height: boundedWheelSize,
            bottom: `-${boundedWheelSize * boundedCropRatio}px`,
          }}
        >
          <div
            className="relative h-full w-full"
            style={{ perspective: "1400px" }}
          >
            {images.map((img, i) => (
              <figure
                key={i}
                onClick={() => {
                  handleTitleClick(i);
                  onCardClick?.(img, i);
                }}
                className={cn(
                  "oiw-item absolute left-1/2 top-1/2 m-0 overflow-hidden rounded-2xl border transition-all duration-300 shadow-2xl dark:bg-black/90 bg-white cursor-pointer group",
                  i === activeIndex 
                    ? "border-gold/60 shadow-[0_12px_45px_rgba(212,175,55,0.25)] ring-1 ring-gold/40" 
                    : "dark:border-white/20 border-black/10 dark:hover:border-white/40 hover:border-black/30 shadow-lg"
                )}
                style={{ width: boundedItemWidth, height: boundedItemHeight }}
              >
                <div
                  className="absolute inset-0 h-full w-full bg-contain bg-center bg-no-repeat p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${img.src})` }}
                  role="img"
                  aria-label={img.alt ?? img.label ?? `Certificate ${i + 1}`}
                />
                {/* Glossy sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-t dark:from-black/60 from-black/20 via-transparent to-white/[0.04] pointer-events-none" />
                
                {/* Active corner pill badge */}
                {i === activeIndex && (
                  <div className="absolute top-3 right-3 rounded-full border border-gold/50 dark:bg-black/80 bg-white/90 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-gold backdrop-blur-md shadow-lg pointer-events-none">
                    Active
                  </div>
                )}
              </figure>
            ))}
          </div>
        </div>

        {/* Interactive Caption & Carousel Title Pills */}
        {showCaption && activeImage && (
          <div
            className="pointer-events-none absolute inset-x-0 z-30 flex justify-center"
            style={{ bottom: `${boundedCaptionOffset}vh` }}
          >
            <div className="px-6 text-center w-full max-w-4xl">
              <MotionSubtitle
                text={activeImage.subtitle ?? activeImage.alt ?? "Accredited Industry Credential"}
                direction={boundedSubtitleDirection}
                speed={boundedSubtitleSpeed}
                stagger={boundedSubtitleStagger}
                className="mb-3 text-[clamp(0.8rem,1.1vw,1rem)] tracking-[0.06em] text-cream/70 font-sans"
              />

              <div
                ref={titleViewportRef}
                className="pointer-events-auto mx-auto w-[min(94vw,820px)] overflow-hidden py-2"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
                }}
              >
                <div ref={titleTrackRef} className="flex w-max items-center">
                  <span
                    ref={titleStartSpacerRef}
                    aria-hidden
                    className="block h-px shrink-0"
                  />

                  {titleTrackLabels.map((title, i) => {
                    const isSelected = i === activeTitleTrackIndex;
                    return (
                      <button
                        type="button"
                        key={`${title}-${i}`}
                        data-title-index={i}
                        onClick={() => handleTitleClick(i)}
                        aria-current={isSelected ? "true" : undefined}
                        style={{
                          opacity:
                            Math.abs(i - activeTitleTrackIndex) === 0
                              ? 1
                              : Math.abs(i - activeTitleTrackIndex) === 1
                                ? 0.65
                                : Math.abs(i - activeTitleTrackIndex) === 2
                                  ? 0.38
                                  : 0.18,
                          transform:
                            Math.abs(i - activeTitleTrackIndex) === 0
                              ? "scale(1)"
                              : "scale(0.95)",
                        }}
                        className={cn(
                          "oiw-title-item mr-3.5 inline-flex shrink-0 cursor-pointer appearance-none items-center justify-center whitespace-nowrap rounded-full border px-6 py-2.5 text-center leading-none text-[clamp(0.95rem,1.6vw,1.35rem)] font-forum tracking-wide transition-[opacity,transform,color,border-color,background-color] duration-300",
                          isSelected
                            ? "border-gold/60 bg-gold/15 text-gold shadow-[0_0_20px_rgba(212,175,55,0.22)] ring-1 ring-gold/40 font-semibold"
                            : "dark:border-white/15 border-black/15 dark:bg-white/[0.03] bg-white/90 dark:text-cream/50 text-neutral-600 dark:hover:text-white hover:text-black dark:hover:border-white/35 hover:border-black/30 shadow-sm",
                        )}
                      >
                        {title}
                      </button>
                    );
                  })}

                  <span
                    ref={titleEndSpacerRef}
                    aria-hidden
                    className="block h-px shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default OrbitalImageWheel;

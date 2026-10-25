"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export interface HoverFeatureCardItem {
  name: string;
  description: string;
  href?: string;
  img?: string;
  imgLight?: string;
  imgClassName?: string;
  imgWidth?: number;
  containerClassName?: string;
  fadeBottom?: boolean;
  soon?: boolean;
  onClick?: () => void;
  subtitle?: string;
  number?: string;
  icon?: React.ReactNode;
  tags?: string[];
  children?: React.ReactNode;
}

export interface HoverFeatureCardsProps {
  items: HoverFeatureCardItem[];
  className?: string;
  renderLink?: (href: string, children: React.ReactNode) => React.ReactNode;
}

export function HoverFeatureCard({
  item,
  renderLink,
}: {
  item: HoverFeatureCardItem;
  renderLink?: HoverFeatureCardsProps["renderLink"];
}) {
  const isClickable = !item.soon && (Boolean(item.href) || Boolean(item.onClick));

  const inner = (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileTap={{ scale: isClickable ? 0.985 : 1 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      variants={{ rest: { scale: 1, y: 0 } }}
      onClick={isClickable && item.onClick ? item.onClick : undefined}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-label={`Explore deep-dive dossier for ${item.name}`}
      onKeyDown={
        isClickable && item.onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                item.onClick?.();
              }
            }
          : undefined
      }
      className={cn(
        "group flex flex-col w-full h-full relative outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-3xl select-none",
        item.soon
          ? "opacity-75 cursor-not-allowed"
          : isClickable
            ? "cursor-pointer"
            : "",
      )}
    >
      {/* Luxury Feature Card Container with ambient illumination */}
      <div
        className={cn(
          "flex flex-col justify-between rounded-3xl border h-full z-10 transition-all duration-300 w-full relative overflow-hidden shadow-sm",
          "dark:bg-[#121212] bg-white dark:shadow-[0_12px_32px_rgba(0,0,0,0.6)]",
          "dark:border-white/12 border-black/10",
          isClickable
            ? "hover:-translate-y-1 hover:border-gold/50 dark:hover:border-gold/40 hover:shadow-xl dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_24px_rgba(212,175,55,0.14)]"
            : "",
          item.soon ? "border-dashed border-border" : "",
        )}
      >
        {/* Ambient Top-Right Gold Glow on Hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Top Specular Hairline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent dark:via-white/20 via-black/10 to-transparent opacity-60"
        />

        {item.soon && (
          <span className="absolute top-4 right-4 z-10 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border rounded-full px-2.5 py-0.5 bg-surface">
            Coming soon
          </span>
        )}

        <div
          className={cn(
            "relative w-full h-full p-5 xs:p-6 sm:p-7 flex flex-col justify-between gap-4 sm:gap-5",
            item.containerClassName,
          )}
        >
          {item.children ? (
            item.children
          ) : (
            <>
              <div>
                {/* Header: Icon & Monospace Number */}
                <div className="flex items-center justify-between w-full mb-3.5 sm:mb-4">
                  {item.icon ? (
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border dark:border-white/12 border-black/10 dark:bg-white/[0.05] bg-black/5 shadow-xs group-hover:scale-105 group-hover:border-gold/40 transition-all duration-300">
                      {item.icon}
                    </div>
                  ) : (
                    <div />
                  )}
                  {item.number && (
                    <span className="font-mono text-xl sm:text-2xl font-light dark:text-cream/35 text-neutral-400 group-hover:text-gold transition-colors duration-300">
                      {item.number}
                    </span>
                  )}
                </div>

                {/* Subtitle & Title */}
                <div className="flex flex-col gap-1 mb-2.5 sm:mb-3">
                  {item.subtitle && (
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.12em] text-gold font-medium line-clamp-1">
                      {item.subtitle}
                    </span>
                  )}
                  <h4
                    className={cn(
                      "font-forum text-xl sm:text-2xl tracking-tight leading-snug dark:text-white text-neutral-900 group-hover:text-gold transition-colors duration-300",
                      item.soon ? "text-muted-foreground/80" : "",
                    )}
                  >
                    {item.name}
                  </h4>
                </div>

                {/* Core Narrative Description (Integrated for Mobile & Desktop) */}
                {item.description && (
                  <p className="font-sans text-xs sm:text-[13px] dark:text-cream/70 text-neutral-600 font-light leading-relaxed line-clamp-3 mb-3.5 sm:mb-4">
                    {item.description}
                  </p>
                )}

                {/* Curated Skill / Specialization Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border dark:border-white/10 border-black/10 dark:bg-white/[0.04] bg-neutral-100/90 px-2.5 py-1 font-mono text-[9.5px] sm:text-[10px] dark:text-cream/80 text-neutral-700 whitespace-nowrap shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Interactive Luxury Dossier Action Footer */}
              <div className="pt-3.5 sm:pt-4 border-t dark:border-white/10 border-black/10 flex items-center justify-between mt-auto">
                <span className="font-mono text-[11px] sm:text-xs tracking-wider uppercase text-gold group-hover:text-cream dark:group-hover:text-white transition-colors flex items-center gap-2 font-medium">
                  <span>Open Pillar Dossier</span>
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full dark:bg-white/[0.06] bg-black/5 border dark:border-white/10 border-black/10 text-gold group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-300 shrink-0">
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (item.href && renderLink) {
    return renderLink(item.href, inner);
  }

  return inner;
}

export function HoverFeatureCards({
  items,
  className,
  renderLink,
}: HoverFeatureCardsProps) {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full items-stretch", className)}
    >
      {items.map((item) => (
        <HoverFeatureCard key={item.name} item={item} renderLink={renderLink} />
      ))}
    </div>
  );
}

export default HoverFeatureCards;

"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  ThemeToggle,
  type ThemeToggleProps,
  type ThemeToggleValue,
  type ThemeToggleVariant,
} from "./theme-toggle";

export interface ThemeSwitchProps
  extends Partial<Omit<ThemeToggleProps, "onThemeChange" | "theme">> {
  variant?: ThemeToggleVariant;
  className?: string;
  showSystem?: boolean;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  variant = "sun-moon",
  size = "sm",
  showSystem = false,
  className,
  ...props
}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-8 w-8 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-black/5 animate-pulse shrink-0"
      />
    );
  }

  const currentTheme =
    (theme as ThemeToggleValue) ||
    (resolvedTheme as ThemeToggleValue) ||
    "dark";

  return (
    <ThemeToggle
      theme={currentTheme}
      onThemeChange={(newTheme: ThemeToggleValue) => setTheme(newTheme)}
      variant={variant}
      size={size}
      showSystem={showSystem}
      className={className}
      {...props}
    />
  );
};

export default ThemeSwitch;

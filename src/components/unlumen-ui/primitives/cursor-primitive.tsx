"use client";
/* eslint-disable react-refresh/only-export-components */

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  type HTMLMotionProps,
  type SpringOptions,
} from "motion/react";

import { getStrictContext } from "@/lib/get-strict-context";
import { Slot, type WithAsChild } from "@/components/unlumen-ui/primitives/slot";

import type { MotionValue } from "motion/react";

type CursorContextType = {
  cursorPos: { x: number; y: number };
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
  active: boolean;
  global: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  cursorRef: React.RefObject<HTMLDivElement | null>;
};

const [LocalCursorProvider, useCursor] =
  getStrictContext<CursorContextType>("CursorContext");

type CursorProviderProps = {
  children: React.ReactNode;
  global?: boolean;
};

function CursorProvider({ children, global = false }: CursorProviderProps) {
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);
  const [active, setActive] = React.useState(false);
  const cursorPosRef = React.useRef({ x: -1000, y: -1000 });

  const containerRef = React.useRef<HTMLDivElement>(null);
  const cursorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia && !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const id = "__cursor_none_style__";
    if (document.getElementById(id)) return;

    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      .animate-ui-cursor-none, .animate-ui-cursor-none * { cursor: none !important; }
    `;
    document.head.appendChild(style);
  }, []);

  React.useEffect(() => {
    let removeListeners: () => void;

    if (global) {
      const handlePointerMove = (e: PointerEvent) => {
        if (e.pointerType === "touch") return;
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        cursorPosRef.current.x = e.clientX;
        cursorPosRef.current.y = e.clientY;
        setActive((prev) => (prev ? prev : true));
      };

      const handlePointerOut = (e: PointerEvent | MouseEvent) => {
        if (e instanceof PointerEvent && e.relatedTarget === null) {
          setActive(false);
        }
      };

      const handleVisibilityChange = () => {
        if (document.visibilityState === "hidden") setActive(false);
      };

      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("pointerout", handlePointerOut, {
        passive: true,
      });
      window.addEventListener("mouseout", handlePointerOut, { passive: true });
      document.addEventListener("visibilitychange", handleVisibilityChange);

      removeListeners = () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerout", handlePointerOut);
        window.removeEventListener("mouseout", handlePointerOut);
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
      };
    } else {
      if (!containerRef.current) return;

      const parent = containerRef.current.parentElement;
      if (!parent) return;

      if (getComputedStyle(parent).position === "static") {
        parent.style.position = "relative";
      }

      let parentRect: DOMRect | null = null;
      const updateParentRect = () => {
        if (parent) {
          parentRect = parent.getBoundingClientRect();
        }
      };

      const handlePointerMove = (e: PointerEvent) => {
        if (!parentRect) updateParentRect();
        const clientX = e.clientX - (parentRect ? parentRect.left : 0);
        const clientY = e.clientY - (parentRect ? parentRect.top : 0);
        cursorX.set(clientX);
        cursorY.set(clientY);
        cursorPosRef.current.x = clientX;
        cursorPosRef.current.y = clientY;
        setActive((prev) => (prev ? prev : true));
      };

      const handlePointerOut = (e: PointerEvent | MouseEvent) => {
        if (
          e.relatedTarget === null ||
          !(parent as Node).contains(e.relatedTarget as Node)
        ) {
          setActive(false);
          parentRect = null;
        }
      };

      parent.addEventListener("pointerenter", updateParentRect, { passive: true });
      parent.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      parent.addEventListener("pointerout", handlePointerOut, {
        passive: true,
      });
      parent.addEventListener("mouseout", handlePointerOut, { passive: true });

      removeListeners = () => {
        parent.removeEventListener("pointerenter", updateParentRect);
        parent.removeEventListener("pointermove", handlePointerMove);
        parent.removeEventListener("pointerout", handlePointerOut);
        parent.removeEventListener("mouseout", handlePointerOut);
      };
    }

    return removeListeners;
  }, [global, cursorX, cursorY]);

  const contextValue = React.useMemo(
    () => ({
      cursorPos: cursorPosRef.current,
      cursorX,
      cursorY,
      active,
      global,
      containerRef,
      cursorRef,
    }),
    [active, global, cursorX, cursorY]
  );

  return (
    <LocalCursorProvider value={contextValue}>
      {children}
    </LocalCursorProvider>
  );
}

type CursorContainerProps = WithAsChild<HTMLMotionProps<"div">>;

function CursorContainer({
  ref,
  asChild = false,
  ...props
}: CursorContainerProps) {
  const { containerRef, global, active } = useCursor();
  React.useImperativeHandle(ref as React.Ref<HTMLDivElement>, () => containerRef.current as HTMLDivElement);

  const Component = asChild ? Slot : motion.div;

  return (
    <Component
      ref={containerRef as React.Ref<HTMLDivElement>}
      data-slot="cursor-container"
      data-global={global}
      data-active={active}
      {...props}
    />
  );
}

type CursorProps = WithAsChild<
  HTMLMotionProps<"div"> & {
    children: React.ReactNode;
  }
>;

function Cursor({ ref, asChild = false, style, ...props }: CursorProps) {
  const { cursorX, cursorY, active, containerRef, cursorRef, global } = useCursor();
  React.useImperativeHandle(ref as React.Ref<HTMLDivElement>, () => cursorRef.current as HTMLDivElement);

  React.useEffect(() => {
    const target = global
      ? document.documentElement
      : containerRef.current?.parentElement;

    if (!target) return;

    if (active) {
      target.classList.add("animate-ui-cursor-none");
    } else {
      target.classList.remove("animate-ui-cursor-none");
    }

    return () => {
      target.classList.remove("animate-ui-cursor-none");
    };
  }, [active, global, containerRef]);

  const Component = asChild ? Slot : motion.div;

  return (
    <AnimatePresence>
      {active && (
        <Component
          ref={cursorRef as React.Ref<HTMLDivElement>}
          data-slot="cursor"
          data-global={global}
          data-active={active}
          style={{
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
            zIndex: 9999,
            position: global ? "fixed" : "absolute",
            top: cursorY,
            left: cursorX,
            ...style,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

type CursorFollowSide = "top" | "right" | "bottom" | "left";
type CursorFollowAlign = "start" | "center" | "end";

type CursorFollowProps = WithAsChild<
  Omit<HTMLMotionProps<"div">, "transition"> & {
    side?: CursorFollowSide;
    sideOffset?: number;
    align?: CursorFollowAlign;
    alignOffset?: number;
    transition?: SpringOptions;
    children: React.ReactNode;
  }
>;

function CursorFollow({
  ref,
  asChild = false,
  side = "bottom",
  sideOffset = 0,
  align = "end",
  alignOffset = 0,
  style,
  transition = { stiffness: 500, damping: 50, bounce: 0 },
  ...props
}: CursorFollowProps) {
  const { cursorX, cursorY, active, global } = useCursor();
  const cursorFollowRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(
    ref as React.Ref<HTMLDivElement>,
    () => cursorFollowRef.current as HTMLDivElement,
  );

  const springX = useSpring(cursorX, transition);
  const springY = useSpring(cursorY, transition);

  let offsetX = 0;
  let offsetY = 0;

  switch (side) {
    case "top":
      offsetY = -sideOffset;
      offsetX = align === "start" ? alignOffset : align === "end" ? -alignOffset : 0;
      break;
    case "bottom":
      offsetY = sideOffset;
      offsetX = align === "start" ? alignOffset : align === "end" ? -alignOffset : 0;
      break;
    case "left":
      offsetX = -sideOffset;
      offsetY = align === "start" ? alignOffset : align === "end" ? -alignOffset : 0;
      break;
    case "right":
      offsetX = sideOffset;
      offsetY = align === "start" ? alignOffset : align === "end" ? -alignOffset : 0;
      break;
  }

  const Component = asChild ? Slot : motion.div;

  return (
    <AnimatePresence>
      {active && (
        <Component
          ref={cursorFollowRef}
          data-slot="cursor-follow"
          data-global={global}
          data-active={active}
          style={{
            transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`,
            pointerEvents: "none",
            zIndex: 9998,
            position: global ? "fixed" : "absolute",
            top: springY,
            left: springX,
            ...style,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

export {
  CursorProvider,
  Cursor,
  CursorContainer,
  CursorFollow,
  useCursor,
  type CursorProviderProps,
  type CursorProps,
  type CursorContainerProps,
  type CursorFollowProps,
  type CursorFollowAlign,
  type CursorFollowSide,
  type CursorContextType,
};

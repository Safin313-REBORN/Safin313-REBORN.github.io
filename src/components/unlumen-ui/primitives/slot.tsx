import * as React from "react";
import { motion, isMotionComponent, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type AnyProps = Record<string, unknown>;

type DOMMotionProps<T extends HTMLElement = HTMLElement> = Omit<
  HTMLMotionProps<keyof HTMLElementTagNameMap>,
  "ref"
> & { ref?: React.Ref<T> };

type WithAsChild<Base extends object> =
  | (Base & { asChild: true; children: React.ReactElement })
  | (Base & { asChild?: false | undefined });

type SlotProps<T extends HTMLElement = HTMLElement> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
} & DOMMotionProps<T>;

function useComposedRefs<T>(
  childRef: React.Ref<T> | undefined,
  forwardedRef: React.Ref<T> | undefined,
): React.RefCallback<T> {
  return React.useCallback(
    (node) => {
      [childRef, forwardedRef].forEach((ref) => {
        if (!ref) return;
        if (typeof ref === "function") {
          ref(node);
        } else {
          (ref as React.MutableRefObject<T | null>).current = node;
        }
      });
    },
    [childRef, forwardedRef],
  );
}

function mergeProps<T extends HTMLElement>(
  childProps: AnyProps,
  slotProps: DOMMotionProps<T>,
): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps };

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className as string,
      slotProps.className as string,
    );
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    };
  }

  return merged;
}

function Slot<T extends HTMLElement = HTMLElement>({
  children,
  ref,
  ...props
}: SlotProps<T>) {
  const isValid = React.isValidElement(children);

  const childRef = isValid
    ? ((children as unknown as { ref?: React.Ref<T> }).ref ??
       (children.props as { ref?: React.Ref<T> })?.ref)
    : undefined;

  const composedRef = useComposedRefs<T>(childRef, ref);

  const childType = isValid ? children.type : null;
  const isAlreadyMotion =
    typeof childType === "object" &&
    childType !== null &&
    isMotionComponent(childType);

  const Base = React.useMemo(() => {
    if (!childType) return null;
    return isAlreadyMotion
      ? (childType as React.ElementType)
      : motion.create(childType as React.ElementType);
  }, [isAlreadyMotion, childType]);

  if (!isValid || !Base) return null;

  const childProps = { ...((children.props as AnyProps) ?? {}) };
  delete childProps.ref;
  const mergedProps = mergeProps(childProps, props);

  return React.createElement(Base, {
    ...mergedProps,
    ref: composedRef,
  });
}

export {
  Slot,
  type SlotProps,
  type WithAsChild,
  type DOMMotionProps,
  type AnyProps,
};

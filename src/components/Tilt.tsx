"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

type TiltProps = {
  children: ReactNode;
  /** Classes for the outer (hit-area) element. */
  className?: string;
  /** Classes for the inner element that actually rotates. */
  innerClassName?: string;
  /** Max rotation in degrees at the edges. */
  maxTilt?: number;
  /** Perspective distance in px. */
  perspective?: number;
  /** Flip direction: by default the side under the cursor comes toward you. */
  reverse?: boolean;
};

/**
 * Mouse-tilt wrapper powered by GSAP.
 * The outer element is static and receives pointer events (so the hit area
 * never moves while tilting); the inner element rotates in 3D.
 * Disabled on touch devices and when the user prefers reduced motion.
 */
export default function Tilt({
  children,
  className,
  innerClassName,
  maxTilt = 10,
  perspective = 900,
  reverse = false,
}: TiltProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.set(inner, { transformPerspective: perspective, transformOrigin: "50% 50%" });

        // quickTo tweens are created once and reused for every pointer event,
        // so tilting and resetting both go through the same tweens.
        const tiltX = gsap.quickTo(inner, "rotationX", { duration: 0.5, ease: "power3.out" });
        const tiltY = gsap.quickTo(inner, "rotationY", { duration: 0.5, ease: "power3.out" });
        const dir = reverse ? -1 : 1;

        const onMove = (e: PointerEvent) => {
          if (e.pointerType !== "mouse") return;
          const r = outer.getBoundingClientRect();
          // Normalised cursor position, -1 (left/top) .. 1 (right/bottom)
          const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
          const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
          tiltY(-nx * maxTilt * dir);
          tiltX(ny * maxTilt * dir);
        };
        const onLeave = () => {
          tiltX(0);
          tiltY(0);
        };

        outer.addEventListener("pointermove", onMove);
        outer.addEventListener("pointerleave", onLeave);
        return () => {
          outer.removeEventListener("pointermove", onMove);
          outer.removeEventListener("pointerleave", onLeave);
        };
      },
    );

    return () => mm.revert();
  }, [maxTilt, perspective, reverse]);

  return (
    <div ref={outerRef} className={className}>
      <div ref={innerRef} className={innerClassName}>
        {children}
      </div>
    </div>
  );
}

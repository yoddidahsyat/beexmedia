"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

type CountUpProps = {
  to: number;
  /** Minimum digits, e.g. 2 renders 2 as "02". */
  pad?: number;
  duration?: number;
};

const format = (n: number, pad: number) => String(n).padStart(pad, "0");

/**
 * Counts from 0 to `to` the first time it scrolls into view.
 * Renders the final number on the server (and for reduced-motion users).
 */
export default function CountUp({ to, pad = 1, duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = format(Math.round(v), pad);
      },
      onComplete: () => {
        el.textContent = format(to, pad);
      },
    });
    return () => controls.stop();
  }, [inView, to, pad, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(to, pad)}
    </span>
  );
}

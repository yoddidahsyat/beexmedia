"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type CountUpProps = {
  to: number;
  /** Minimum digits, e.g. 2 renders 2 as "02". */
  pad?: number;
  duration?: number;
};

const format = (n: number, pad: number) => String(n).padStart(pad, "0");

/**
 * Counts from 0 to `to` the first time it scrolls into view, using GSAP.
 * Renders the final number on the server (and for reduced-motion users).
 */
export default function CountUp({ to, pad = 1, duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tween: gsap.core.Tween | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect(); // only count up once

        const counter = { value: 0 };
        el.textContent = format(0, pad);
        tween = gsap.to(counter, {
          value: to,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = format(Math.round(counter.value), pad);
          },
          onComplete: () => {
            el.textContent = format(to, pad);
          },
        });
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      tween?.kill();
      el.textContent = format(to, pad); // never leave a half-counted number
    };
  }, [to, pad, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(to, pad)}
    </span>
  );
}

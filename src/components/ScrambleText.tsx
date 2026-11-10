"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+<>/";

type ScrambleTextProps = {
  text: string;
  className?: string;
  /** Classes for the text itself (e.g. gradient text). */
  textClassName?: string;
  /** Total time for the text to resolve, in seconds. */
  duration?: number;
  /** Delay before the animation starts, in seconds. */
  delay?: number;
};

const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

/** Characters before `progress` are resolved; the rest are random. */
function scramble(text: string, progress: number) {
  const resolved = Math.floor(progress * text.length);
  let out = "";
  for (let i = 0; i < text.length; i++) {
    out += i < resolved || text[i] === " " ? text[i] : randomChar();
  }
  return out;
}

/**
 * Scramble-to-reveal text animation driven by GSAP.
 * The real text stays in the layout (invisible while animating) so the line
 * never changes size, and screen readers always read the final text.
 */
export default function ScrambleText({
  text,
  className,
  textClassName,
  duration = 1.2,
  delay = 0,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last = 0;
    const clock = { t: 0 };

    // One linear clock covers delay + duration; the first frame (inside the
    // callback) already shows scrambled text, so the final text never flashes
    // during the delay.
    const tween = gsap.to(clock, {
      t: delay + duration,
      duration: delay + duration,
      ease: "none",
      onUpdate: () => {
        const raw = Math.min(1, Math.max(0, (clock.t - delay) / duration));
        const p = 1 - (1 - raw) * (1 - raw); // ease-out
        const now = performance.now();
        if (now - last < 45 && raw < 1) return; // throttle flicker (~22fps)
        last = now;
        setDisplay(scramble(text, p));
      },
      onComplete: () => setDisplay(null),
    });

    return () => {
      tween.kill();
    };
  }, [text, duration, delay]);

  // `textClassName` is applied to each text layer separately: effects like
  // `bg-clip-text` don't paint through a hidden placeholder or an absolutely
  // positioned overlay when set on the wrapper.
  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      <span
        className={`inline-block ${textClassName ?? ""} ${display === null ? "" : "invisible"}`}
      >
        {text}
      </span>
      {display !== null && (
        <span
          aria-hidden
          className={`absolute left-0 top-0 w-full whitespace-nowrap ${textClassName ?? ""}`}
        >
          {display}
        </span>
      )}
    </span>
  );
}

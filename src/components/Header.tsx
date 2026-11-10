"use client";

import { useSyncExternalStore } from "react";

const SHOW_AFTER = 100; // px scrolled before the navbar appears

function subscribe(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}
const getSnapshot = () => window.scrollY > SHOW_AFTER;
const getServerSnapshot = () => false;

export default function Header() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const link =
    "font-mono-code text-[12px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-on-surface transition-colors";
  return (
    <header
      inert={!visible}
      className={`fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="h-20 w-full px-margin-mobile lg:px-margin max-w-7xl mx-auto flex items-center justify-between border-b border-outline-variant/20">
        <a className="flex items-center gap-space-sm group" href="#">
          <div className="w-6 h-6 rounded-xs bg-primary-container/20 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary-container rounded-xs rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="font-display-lg text-[22px] tracking-wider text-on-surface leading-none">
              BEEX
            </span>
            <span className="font-mono-code text-[9px] tracking-[0.25em] text-outline uppercase leading-none mt-1">
              MEDIA LABS
            </span>
          </div>
        </a>
        <nav className="hidden xl:flex items-center gap-space-xl">
          <a
            aria-current="page"
            className="font-mono-code text-[12px] uppercase tracking-[0.2em] transition-colors text-primary font-bold"
            href="#case-study"
          >
            Work
          </a>
          <a className={link} href="#bts-lab">
            On-Set
          </a>
          <a className={link} href="#dispatch">
            Commission
          </a>
        </nav>
        <div className="flex items-center gap-space-md">
          <div className="hidden md:flex items-center gap-space-xs font-mono-code text-[11px] uppercase text-outline tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
            <span>REC 4K DCI</span>
          </div>
          <a
            className="px-space-md py-2 rounded-xs bg-transparent border border-outline-variant/40 text-on-surface font-mono-code text-[11px] uppercase tracking-widest hover:border-primary-container hover:text-primary transition-all"
            href="#dispatch"
          >
            Dispatch Brief
          </a>
        </div>
      </div>
    </header>
  );
}

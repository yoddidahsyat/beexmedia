"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const SHOW_AFTER = 100; // px scrolled before the navbar appears

function subscribe(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}
const getSnapshot = () => window.scrollY > SHOW_AFTER;
const getServerSnapshot = () => false;

const NAV = [
  { href: "#case-study", label: "Work" },
  { href: "#bts-lab", label: "On-Set" },
  { href: "#dispatch", label: "Commission" },
];

export default function Header() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [open, setOpen] = useState(false);
  // The menu can only be open while the bar itself is showing.
  const menuOpen = open && visible;

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const link =
    "font-mono-code text-[12px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-on-surface transition-colors";

  return (
    // Hidden at the top of the page, but not `inert`: tabbing into it (focus-within)
    // slides it into view so keyboard users can still reach the navigation.
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl transition-all duration-500 ease-out focus-within:translate-y-0 focus-within:opacity-100 focus-within:pointer-events-auto ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="px-margin-mobile lg:px-margin">
      <div className="h-20 max-w-7xl mx-auto flex items-center justify-between border-b border-outline-variant/20">
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
        <nav aria-label="Main" className="hidden xl:flex items-center gap-space-xl">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              aria-current={i === 0 ? "page" : undefined}
              className={
                i === 0
                  ? "font-mono-code text-[12px] uppercase tracking-[0.2em] transition-colors text-primary font-bold"
                  : link
              }
              href={n.href}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-space-md">
          <a
            className="px-space-md py-2 rounded-xs bg-transparent border border-outline-variant/40 text-on-surface font-mono-code text-[11px] uppercase tracking-widest hover:border-primary-container hover:text-primary transition-all"
            href="#dispatch"
          >
            Dispatch Brief
          </a>
          {/* Menu button: only below the xl breakpoint, where the inline nav is hidden */}
          <button
            type="button"
            className="xl:hidden flex h-9 w-9 items-center justify-center rounded-xs border border-outline-variant/40 text-on-surface hover:border-primary-container hover:text-primary transition-colors cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="h-4 w-4" />
          </button>
        </div>
      </div>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!menuOpen}
        className="xl:hidden border-b border-outline-variant/20 bg-surface/95 px-margin-mobile lg:px-margin"
      >
        <ul className="max-w-7xl mx-auto flex flex-col py-space-sm">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={`${link} block py-3`}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

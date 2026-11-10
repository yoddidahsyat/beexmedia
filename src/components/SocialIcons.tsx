import type { SVGProps } from "react";

// lucide-react no longer ships brand icons, so these are inline stroke icons
// in the same 24x24 style.
const base: SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function VimeoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M22 7.4c-.1 2-1.5 4.7-4.2 8.1-2.8 3.6-5.1 5.4-7 5.4-1.2 0-2.2-1.1-3-3.3L6.1 12.5c-.5-2.2-1-3.3-1.6-3.3-.1 0-.6.3-1.5.9L2 9.1c1-.9 1.9-1.7 2.9-2.6 1.3-1.2 2.3-1.8 3-1.9 1.6-.2 2.6.9 3 3.3.4 2.6.7 4.2.8 4.8.5 2.1 1 3.1 1.5 3.1.4 0 1-.6 1.8-1.9.8-1.3 1.2-2.3 1.3-3 .1-1.1-.3-1.7-1.3-1.7-.5 0-1 .1-1.5.3 1-3.2 2.9-4.8 5.6-4.7 2 .1 2.9 1.4 2.8 3.8z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

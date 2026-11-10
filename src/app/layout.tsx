import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";

// Styles are imported above, so stop Font Awesome injecting its own <style> tag.
config.autoAddCss = false;

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BEEX Media — Film & Digital Campaign Studio",
  description:
    "Independent cinema, multi-cam broadcast podcasts, and digital campaign universes engineered with on-set craftsmanship.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${jakarta.variable} ${grotesk.variable} dark antialiased`}
    >
      <body className="bg-surface text-on-surface min-h-screen relative font-body-md">
        <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_85%_0%,rgba(255,94,30,0.12)_0%,transparent_50%)]" />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

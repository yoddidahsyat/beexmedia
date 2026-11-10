import Image from "next/image";
import Tilt from "./Tilt";
import ScrambleText from "./ScrambleText";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-margin-mobile lg:px-margin pt-space-xl pb-space-2xl border-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-xl border-b border-outline-variant/30">
          <div className="flex items-center gap-space-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
            <ScrambleText
              text="BEEX MEDIA LABS • ISSUE 04"
              className="font-mono-code text-[12px] tracking-[0.2em] text-outline uppercase"
            />
          </div>
          <div className="flex items-center gap-space-md text-[11px] font-mono-code uppercase tracking-widest text-outline">
            <span className="hidden md:inline">
              <ScrambleText text="CINEMA STANDARD DCI" delay={0.1} />
            </span>
            <ScrambleText text="YOGYAKARTA • JAKARTA" delay={0.2} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl pt-space-2xl items-end">
          <div className="lg:col-span-7 flex flex-col gap-space-xl">
            <div className="flex flex-col gap-space-sm">
              <span className="font-mono-code text-[11px] tracking-[0.25em] text-primary-container uppercase font-semibold">
                [ 01 — INTRODUCTION ]
              </span>
              <h1 className="font-display-xl text-[68px] sm:text-[92px] lg:text-[110px] text-on-surface uppercase tracking-tight leading-[0.88] font-normal">
                <ScrambleText text="CINEMATIC" delay={0.2} />
                <br />
                <ScrambleText
                  text="FILM & CAMPAIGN"
                  delay={0.45}
                  textClassName="text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-primary-fixed-dim to-on-surface"
                />
                <br />
                <ScrambleText text="STUDIO." delay={0.7} />
              </h1>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-light leading-relaxed tracking-wide">
              Dari konsep taktis hingga pemutaran perdana. Kami merancang sinema independen,
              podcast broadcast multi-kamera, dan semesta kampanye digital dengan kepiawaian
              presisi di lokasi syuting.
            </p>
            <div className="flex flex-wrap items-center gap-space-lg pt-space-md">
              <a
                className="inline-flex items-center gap-space-sm px-space-lg py-3 rounded-xs bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-[0.15em] hover:bg-secondary hover:text-on-secondary transition-all shadow-[0_0_24px_rgba(255,94,30,0.3)]"
                href="#dispatch"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                Send a Brief
              </a>
              <a
                className="inline-flex items-center gap-space-sm text-on-surface font-label-md text-label-md uppercase tracking-[0.15em] hover:text-primary transition-colors border-b border-outline-variant/40 pb-1"
                href="#case-study"
              >
                Explore Portfolio
              </a>
            </div>
          </div>
          <Tilt
            reverse
            className="lg:col-span-5 relative py-space-md motion-safe:animate-fade-in"
            innerClassName="relative w-full aspect-[4/5] rounded-xs overflow-hidden bg-surface-container-low shadow-2xl group border border-outline-variant/20 will-change-transform"
          >
              <Image
                alt="BEEX Media lighting and multi-cam broadcast setup"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoYhzYBSV-RerZa78rZAp7nghfe3VN-8wjj20cZSNTr7fkdOmgMESxg-l7nW2OoG2RfIIIuzBIR2nSMRUh0H_jFS4rTBAKrBSEXpq8OxvPi_BXGs_VWTE5WtsYix-B575RtF5fqL_UQwYmEr5FzLSwKUDQt4cFVG1TpmJk_G869LWr-hfrFje4BZRsrbGpM68tTJT3zKRvZcimQpAtIMYtL9OtqChmKI1JasybeD4jLE6BbpMR8PODcin5Gch_QhpPEg"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute top-space-md left-space-md right-space-md flex justify-between items-center text-[10px] font-mono-code uppercase tracking-widest text-on-surface/75 backdrop-blur-md px-3 py-1.5 rounded-xs bg-surface/50 border border-white/5">
                <span>BEEX ARCHIVE BX-2025</span>
                <span className="text-primary-container font-bold">• POST-PRODUCTION</span>
              </div>
              <div className="absolute bottom-space-md left-space-md right-space-md flex justify-between items-end">
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono-code text-[10px] uppercase text-outline tracking-widest">
                    DIRECTOR&apos;S LOG
                  </span>
                  <p className="font-display-lg text-[22px] uppercase text-on-surface tracking-wider leading-none">
                    TALKSHOW SET &amp; CINE RIG
                  </p>
                </div>
                <span className="font-mono-code text-[11px] text-primary tracking-widest">4K DCI</span>
              </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const specs = [
  ["FORMAT", "Cinema DCI 5.1"],
  ["DURATION", "24 Minutes"],
  ["PRE-PRODUCTION", "Table Reads & Storyboards"],
  ["COLOR SUITE", "ACES 35mm Grain"],
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="w-full px-margin-mobile lg:px-margin py-space-2xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant/20 pb-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-mono-code text-[11px] uppercase tracking-[0.25em] text-primary-container font-semibold">
              [ 02 — CASE STUDY ]
            </span>
            <h2 className="title-line font-display-xl text-[48px] sm:text-[64px] uppercase text-on-surface tracking-tight leading-none">
              “LURUH” — DARI KONSEP SAMPAI SCREENING
            </h2>
          </div>
          <div className="flex items-center gap-space-sm text-right">
            <span className="font-mono-code text-[11px] uppercase text-outline tracking-wider">PARTNER:</span>
            <span className="font-mono-code text-[12px] uppercase text-on-surface font-semibold">SMA Budi Mulia Dua</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/10] rounded-xs overflow-hidden bg-surface-container-low border border-outline-variant/30 group">
              <Image
                alt="Film Luruh screening and cast scene"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/images/case-study.png"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-space-md left-space-md right-space-md flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="font-mono-code text-[10px] uppercase text-primary-container tracking-widest">FEATURED SHORT FILM</span>
                  <h3 className="font-display-lg text-[36px] uppercase text-on-surface tracking-wide">LURUH</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light max-w-sm">
                    Eksplorasi moralitas remaja dan dinamika perkotaan dalam bingkai 2.39:1 sinema.
                  </p>
                </div>
                <div className="font-mono-code text-[11px] uppercase text-outline text-right">
                  <span>EMPIRE XXI • PREMIERE</span>
                  <br />
                  <span className="text-primary">1,200+ ATTENDEES</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="group relative flex flex-col gap-space-sm">
              {/* Accent bar that draws down the left edge on hover */}
              <span className="pointer-events-none absolute -left-4 top-0 h-full w-px origin-top scale-y-0 bg-primary-container transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <span className="font-mono-code text-[11px] uppercase tracking-widest text-outline transition-colors duration-300 group-hover:text-primary-container">DIRECTOR&apos;S MEMORANDUM</span>
              <p className="font-body-md text-body-md text-on-surface/80 font-light leading-relaxed transition-colors duration-300 group-hover:text-on-surface">
                Proses produksi “Luruh” membuktikan kurikulum audio visual praktis berstandar bioskop komersial. BEEX Media memandu seluruh siklus produksi: mentoring penulisan skenario, breakdown teknis lighting &amp; blocking kamera, hingga mastering DCI layar lebar.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-space-md pt-space-sm border-t border-outline-variant/20">
              {specs.map(([k, v]) => (
                <div key={k} className="group relative flex flex-col gap-1 transition-transform duration-300 ease-out hover:translate-x-1">
                  <span className="pointer-events-none absolute -left-3 top-0 h-full w-px origin-top scale-y-0 bg-primary-container transition-transform duration-300 ease-out group-hover:scale-y-100" />
                  <span className="font-mono-code text-[10px] uppercase text-outline tracking-wider transition-colors duration-300 group-hover:text-primary-container">{k}</span>
                  <span className="font-mono-code text-[13px] text-on-surface font-semibold uppercase transition-colors duration-300 group-hover:text-primary">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

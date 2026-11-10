const items = [
  ["01 / DIRECTING", "Narrative Film & Short Drama", "Penulisan naskah, casting, directing, direct on-set production dengan tata cahaya bercerita dramatis."],
  ["02 / BROADCAST", "Multi-Cam Podcasts", "Transformasi talkshow konvensional menjadi pertunjukan visual sekelas Netflix dengan switching multi-kamera."],
  ["03 / COMMERCIALS", "Brand Campaigns", "Digital ads berkecepatan tinggi dan peluncuran produk dengan visual hook yang memikat audiens."],
  ["04 / SOUND", "Audio Engineering & Foley", "Field recording, dialog de-noising, foley design, hingga 5.1 surround mastering standar bioskop."],
  ["05 / COLOR", "Color Grading & Film Post", "DaVinci Resolve studio pipeline. Color management ACES, film grain emulation 35mm, and skin tone fidelity."],
  ["06 / EDUCATION", "Cinematography Incubator", "Program workshop dan kolaborasi institusi edukasi untuk melahirkan sineas muda berjiwa mandiri."],
];

export default function Disciplines() {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-2xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col gap-space-xs border-b border-outline-variant/20 pb-space-lg">
          <span className="font-mono-code text-[11px] uppercase tracking-[0.25em] text-primary-container font-semibold">
            [ 04 — DISCIPLINES ]
          </span>
          <h2 className="title-line font-display-xl text-[48px] sm:text-[64px] uppercase text-on-surface tracking-tight leading-none">
            WHAT WE ENGINEER
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-space-xl gap-x-space-2xl">
          {items.map(([k, t, d]) => (
            <div
              key={k}
              className="group relative flex flex-col gap-2 border-t border-outline-variant/20 pt-space-md pb-space-sm transition-transform duration-500 ease-out hover:-translate-y-1"
            >
              {/* Accent line that sweeps across the top border on hover */}
              <span className="pointer-events-none absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-primary-container transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <div className="flex items-center justify-between">
                <span className="font-mono-code text-[11px] text-outline uppercase transition-colors duration-300 group-hover:text-primary-container">
                  {k}
                </span>
                <span className="font-mono-code text-[14px] text-primary-container opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                  ↗
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface font-semibold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                {t}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed transition-colors duration-300 group-hover:text-on-surface">
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

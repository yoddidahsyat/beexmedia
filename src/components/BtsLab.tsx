import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    alt: "How We Set Our Lights - Gaffer Narendra Satrio",
    src: "/images/bts-lights.png",
    tag: "LIGHTING / GAFFER",
    credit: "GAFFER • NARENDRA SATRIO",
    title: "HOW WE SET OUR LIGHTS",
    body: "Penataan Aputure 300x dengan lantern 90cm untuk kontras lembut pada kulit host di ruangan bersudut sempit.",
    meta: "3-Point Key & Rim",
  },
  {
    alt: "Dynamic Mic Røde PodMic for studio noise reduction",
    src: "/images/bts-mic.png",
    tag: "AUDIO SCIENCE",
    credit: "AUDIOMAN • WIDIHARTO Y.",
    title: "WEAPON OF CHOICE: DYNAMIC MIC",
    body: "Menjinakkan reverberasi kayu dengan Røde PodMic cardioid capsule dan peredam -32dB off-axis rejection.",
    meta: "Zero Phase Noise",
  },
  {
    alt: "Multi-cam Setup and Camera Rigging",
    src: "/images/bts-rig.png",
    tag: "RIG & OPTICS",
    credit: "DOP • HILMY DAFFANURI",
    title: "CAMERA RIG & LIVE SYNC",
    body: "Sinergi mirrorless cine-rig dengan Benro fluid heads, focal length 50mm & 85mm f/1.4 untuk kedalaman cinematic.",
    meta: "LTC Genlock Sync",
  },
];

export default function BtsLab() {
  return (
    <section
      className="w-full px-margin-mobile lg:px-margin py-space-2xl bg-surface-container-lowest border-t border-outline-variant/20"
      id="bts-lab"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant/20 pb-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-mono-code text-[11px] uppercase tracking-[0.25em] text-primary-container font-semibold">
              [ 03 — ON-SET ENGINEERING ]
            </span>
            <h2 className="title-line font-display-xl text-[48px] sm:text-[64px] uppercase text-on-surface tracking-tight leading-none">
              BONGKAR RAHASIA DAPUR
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant font-light max-w-xl">
              Dokumentasi taktis di balik layar. Mengatasi batasan ruang, penataan gaffer presisi, dan isolasi akustik murni.
            </p>
          </div>
          <div className="flex items-center gap-space-xs text-[11px] font-mono-code uppercase text-outline">
            <span className="text-primary-container font-semibold">FIELD ARCHIVE</span>
            <span>/ 3 DISPATCHES</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
          {cards.map((c) => (
            <div key={c.title} className="flex flex-col gap-space-md group">
              <div className="relative aspect-[3/4] w-full rounded-xs overflow-hidden bg-surface-container-low border border-outline-variant/20">
                <Image
                  alt={c.alt}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={c.src}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-70 pointer-events-none" />
                <div className="absolute top-space-sm left-space-sm">
                  <span className="font-mono-code text-[10px] uppercase tracking-widest text-primary bg-surface/80 px-2 py-0.5 rounded-xs backdrop-blur-md">
                    {c.tag}
                  </span>
                </div>
                <div className="absolute bottom-space-sm left-space-sm right-space-sm">
                  <span className="font-mono-code text-[10px] text-outline uppercase">{c.credit}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-wide leading-tight group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">{c.body}</p>
                <div className="pt-1 font-mono-code text-[11px] uppercase tracking-wider text-outline flex items-center justify-between">
                  <span>{c.meta}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 text-primary-container" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

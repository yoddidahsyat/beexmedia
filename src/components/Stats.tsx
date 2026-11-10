import CountUp from "./CountUp";

const stats = [
  {
    label: "01 / RELEASES",
    value: (
      <>
        <CountUp to={50} />
        <span className="text-primary-container">+</span>
      </>
    ),
    desc: "Films, TVCs & digital campaigns",
  },
  {
    label: "02 / STANDARD",
    value: (
      <>
        <CountUp to={4} />K
        <span className="text-primary text-[28px] font-mono-code ml-1">RAW</span>
      </>
    ),
    desc: "Master prime optics & 12-bit color",
  },
  {
    label: "03 / COLLECTIVE",
    value: (
      <>
        <CountUp to={100} />
        <span className="text-outline text-[32px]">%</span>
      </>
    ),
    desc: "In-house gaffers, audio & grading",
  },
  {
    label: "04 / PRESENCE",
    value: (
      <>
        <CountUp to={2} pad={2} />
        <span className="text-primary-container text-[24px] font-mono-code ml-1">HUBS</span>
      </>
    ),
    desc: "Yogyakarta base & Jakarta post-lab",
  },
];

export default function Stats() {
  return (
    <section className="w-full py-space-2xl px-margin-mobile lg:px-margin border-y border-outline-variant/20 bg-surface-container-lowest/40">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-space-xl">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-outline">{s.label}</span>
            <span className="font-display-lg text-[56px] text-on-surface leading-none">{s.value}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant font-light mt-1">{s.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

const inputCls =
  "w-full bg-transparent border-b border-outline-variant/40 py-2 text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary-container transition-colors rounded-none";
const labelCls = "font-mono-code text-[11px] uppercase tracking-wider text-outline";

export default function Dispatch() {
  return (
    <section
      className="w-full px-margin-mobile lg:px-margin py-space-2xl border-t border-outline-variant/20 bg-surface-container-lowest/30"
      id="dispatch"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
          <div className="lg:col-span-6 flex flex-col justify-between gap-space-xl">
            <div className="flex flex-col gap-space-md">
              <span className="font-mono-code text-[11px] uppercase tracking-[0.25em] text-primary-container font-semibold">
                [ 05 — DISPATCH ]
              </span>
              <h2 className="title-line font-display-xl text-[54px] sm:text-[72px] uppercase text-on-surface tracking-tight leading-[0.92]">
                READY TO BRING YOUR VISION TO SCREEN?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant font-light max-w-md leading-relaxed mt-space-sm">
                Konsultasikan brief film naratif, podcast serial, atau peluncuran kampanye brand bersama produser dan pengarah kreatif kami.
              </p>
              <div className="mt-space-sm inline-flex items-center gap-space-sm self-start rounded-full border border-primary-container/40 bg-primary-container/10 px-3 py-1.5 font-mono-code text-[11px] uppercase tracking-widest text-primary-container">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                Response within 24 hours
              </div>
            </div>
            <div className="flex flex-col gap-space-xs font-mono-code text-[12px] text-outline">
              <span className="text-on-surface">• YOGYAKARTA SOUNDSTAGE • CONDONGCATUR</span>
              <span className="text-on-surface">• JAKARTA POST-LAB • KEMANG SELATAN</span>
            </div>
          </div>
          <div className="lg:col-span-6">
            <form
              className="flex flex-col gap-space-md bg-surface p-space-xl rounded-xs border border-outline-variant/20"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Brief pra-produksi terkirim. Tim BEEX Media akan segera merespons.");
              }}
            >
              <div className="flex flex-col gap-1">
                <label className={labelCls}>Nama / Entitas / Brand</label>
                <input className={inputCls} placeholder="Nama Anda atau Institusi" required type="text" />
              </div>
              <div className="flex flex-col gap-1">
                <label className={labelCls}>Email Korespondensi</label>
                <input className={inputCls} placeholder="producer@yourdomain.com" required type="email" />
              </div>
              <div className="flex flex-col gap-1">
                <label className={labelCls}>Disiplin Produksi</label>
                <select className="w-full bg-transparent border-b border-outline-variant/40 py-2 text-on-surface font-body-sm text-body-sm focus:outline-none rounded-none">
                  <option className="bg-surface">Film Pendek / Narrative Cinema</option>
                  <option className="bg-surface">Multi-Cam Broadcast Podcast</option>
                  <option className="bg-surface">Commercial TVC &amp; Digital Campaign</option>
                  <option className="bg-surface">Post-Production &amp; Color Grading</option>
                  <option className="bg-surface">Workshop &amp; Mentorship Produksi</option>
                </select>
              </div>
              <button
                className="mt-space-md py-3 bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-[0.2em] font-semibold hover:bg-secondary hover:text-on-secondary transition-all shadow-[0_0_20px_rgba(255,94,30,0.3)] cursor-pointer"
                type="submit"
              >
                Kirim Brief Pra-Produksi
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

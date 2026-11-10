import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faThreads } from "@fortawesome/free-brands-svg-icons";

const social =
  "flex items-center justify-center w-10 h-10 rounded-xs border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary-container transition-colors";
const SOCIAL_URLS = {
  instagram: "https://www.instagram.com/beex.media/",
  threads: "https://www.threads.com/@beex.media"
}
;
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest relative z-10 px-margin-mobile lg:px-margin pt-space-2xl pb-space-xl mt-space-2xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <div className="w-2.5 h-2.5 bg-primary-container rounded-xs rotate-45" />
              <span className="font-display-lg text-[22px] tracking-wider text-on-surface leading-none">BEEX MEDIA</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant font-light max-w-xs leading-relaxed">
              Studio sinema independen, iklan komersial berfidelitas tinggi, dan kampanye digital yang merancang semesta naratif yang terasa nyata.
            </p>
            <span className="font-mono-code text-[11px] text-outline tracking-widest uppercase">est. 2025</span>
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-outline">SOUNDSTAGES</span>
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-[12px] text-on-surface font-medium uppercase">YOGYAKARTA COMPLEX</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-light">Condongcatur, Sleman, DIY</span>
            </div>
            <div className="flex flex-col gap-1 mt-space-xs">
              <span className="font-mono-code text-[12px] text-on-surface font-medium uppercase">JAKARTA POST-LAB</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-light">Kemang Selatan, South Jakarta</span>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-outline">CONTACT US</span>
            <div className="flex items-center gap-space-sm">
              <a className={social} href={SOCIAL_URLS.instagram} {...external} aria-label="Instagram @beex.media" title="Instagram • @beex.media">
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
              </a>
              <a className={social} href={SOCIAL_URLS.threads} {...external} aria-label="Threads @beex.media" title="Threads • @beex.media">
                <FontAwesomeIcon icon={faThreads} className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-lg border-t border-outline-variant/20">
          <span className="font-mono-code text-[11px] uppercase text-outline tracking-wider">© 2026 BEEX MEDIA ARCHIVE. ALL RIGHTS RESERVED.</span>
          <span className="font-mono-code text-[11px] uppercase text-primary tracking-widest">CRAFTED FOR CINEMA &amp; DIGITAL CAMPAIGNS</span>
        </div>
      </div>
    </footer>
  );
}

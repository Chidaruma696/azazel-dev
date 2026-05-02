"use client";
import { useState } from "react";
import { SigilMark } from "./Sigil";
import { useT } from "./I18nProvider";
import AboutModal from "./AboutModal";

export default function Footer() {
  const { t } = useT();
  const f = t.footer;
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <footer className="relative border-t border-ash/60 px-6 lg:px-12 pt-16 lg:pt-20 pb-10 overflow-hidden">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* identidad */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 text-gold mb-6">
              <SigilMark size={32} />
              <span className="font-display text-lg lg:text-xl tracking-[0.22em] text-bone uppercase">
                Azazel · Dev Studio
              </span>
            </div>
            <p className="font-serif text-bone-soft max-w-md leading-[1.55] text-[15px]">
              {f.tagline}
            </p>
          </div>

          {/* nav */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6 font-mono text-[10px] uppercase tracking-[0.25em]">
            <div>
              <p className="text-bone-dim mb-3">{f.navLabel}</p>
              <ul className="space-y-2 text-bone">
                <li>
                  <a href="#servicios" className="hover:text-gold transition-colors">
                    {f.nav.servicios}
                  </a>
                </li>
                <li>
                  <a href="#obra" className="hover:text-gold transition-colors">
                    {f.nav.obra}
                  </a>
                </li>
                <li>
                  <a href="#estudio" className="hover:text-gold transition-colors">
                    {f.nav.estudio}
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-gold transition-colors">
                    {f.nav.contacto}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-bone-dim mb-3">{f.channelLabel}</p>
              <ul className="space-y-2 text-bone">
                <li>
                  <a
                    href="mailto:tiberius@azazel.dev"
                    className="hover:text-gold transition-colors"
                  >
                    {f.channel.email}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Tiberius-dev66"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    {f.channel.github}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* meta */}
          <div className="lg:col-span-4 lg:text-right font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim">
            <p className="mb-2 text-gold/70">{f.location}</p>
            <p className="text-bone">azazel.dev</p>
            <p className="mt-6">© Azazel Dev Studio</p>
            <p className="mt-1 text-gold/65 italic font-serif normal-case tracking-normal text-sm">
              {f.motto}
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 pt-6 border-t border-ash/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-bone-dim">
          <span>{f.build}</span>
          <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-2">
            <button
              type="button"
              onClick={() => setAboutOpen(true)}
              className="group inline-flex items-center gap-2 text-bone-dim hover:text-gold transition-colors"
            >
              <span className="text-gold/60 group-hover:text-gold">[</span>
              <span>{f.aboutCta}</span>
              <span className="text-gold/60 group-hover:text-gold">]</span>
            </button>
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" />
              {f.available}
            </span>
          </div>
        </div>
      </div>

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </footer>
  );
}

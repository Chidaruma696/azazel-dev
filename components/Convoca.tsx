"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useT } from "./I18nProvider";

export default function Convoca() {
  const { t } = useT();
  const c = t.contacto;

  return (
    <section
      id="contacto"
      className="relative border-t border-ash/60 py-28 lg:py-36 px-6 lg:px-12"
    >
      <SectionHeader numeral={c.numeral} label={c.label} subtitle={c.subtitle} />

      <div className="relative mx-auto max-w-[1600px] mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="lg:col-span-7"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone-dim mb-6">
            {c.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.8rem)] leading-[1.04] text-bone tracking-tight uppercase">
            {c.titleStart}
            <em className="font-serif italic normal-case text-gold"> {c.titleEm} </em>
            {c.titleEnd1}
            <br className="hidden md:block" /> {c.titleEnd2}
          </h2>
          <p className="mt-8 font-serif text-lg text-bone-soft leading-[1.6] max-w-xl">
            {c.body}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 max-w-md font-mono text-[11px] uppercase tracking-[0.22em]">
            {c.info.map((it) => (
              <Item key={it.k} k={it.k} v={it.v} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="lg:col-span-5 space-y-5"
        >
          <a
            href="mailto:tiberius@azazel.dev"
            className="group block border border-gold/45 p-7 hover:bg-gold hover:text-ink transition-colors duration-300"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold/85 group-hover:text-ink/70 mb-4 flex items-center gap-2">
              <span>◈</span>
              <span>{c.emailLabel}</span>
            </div>
            <div className="font-display text-2xl lg:text-[1.85rem] text-bone group-hover:text-ink tracking-tight uppercase break-all">
              tiberius@azazel.dev
            </div>
            <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.32em] text-bone-dim group-hover:text-ink/60 flex items-center justify-between">
              <span>{c.emailCta}</span>
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </div>
          </a>

          <div className="bg-ash/40 p-px">
            {c.socials.map((s) => (
              <ContactTile
                key={s.label}
                label={s.label}
                handle={s.handle}
                href="https://github.com/Tiberius-dev66"
              />
            ))}
          </div>

          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone-dim flex items-center gap-3 pt-2">
            <span className="size-1.5 rounded-full bg-gold animate-pulse" />
            <span>{c.response}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Item({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="text-bone-dim mb-1.5">{k}</p>
      <p className="text-bone">{v}</p>
    </div>
  );
}

function ContactTile({
  label,
  handle,
  href,
}: {
  label: string;
  handle: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-ink p-5 hover:bg-ink-soft transition-colors"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-dim mb-2">
        {label}
      </div>
      <div className="font-mono text-sm text-bone group-hover:text-gold transition-colors flex items-center justify-between">
        <span>{handle}</span>
        <span className="text-bone-dim group-hover:text-gold opacity-0 group-hover:opacity-100 transition">
          ↗
        </span>
      </div>
    </a>
  );
}

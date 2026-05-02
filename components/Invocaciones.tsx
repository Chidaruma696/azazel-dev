"use client";
import { motion } from "framer-motion";
import { SigilDatabase, SigilNetwork, SigilVessel } from "./Sigil";
import SectionHeader from "./SectionHeader";
import { useT } from "./I18nProvider";

const sigils = [SigilDatabase, SigilNetwork, SigilVessel];

export default function Invocaciones() {
  const { t } = useT();
  const s = t.servicios;

  return (
    <section
      id="servicios"
      className="relative border-t border-ash/60 py-28 lg:py-36 px-6 lg:px-12"
    >
      <SectionHeader numeral={s.numeral} label={s.label} subtitle={s.subtitle} />

      <div className="relative mx-auto max-w-[1600px] mt-20 grid gap-px bg-ash/40 lg:grid-cols-3">
        {s.items.map((item, i) => {
          const Sigil = sigils[i] ?? SigilDatabase;
          return (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: i * 0.13,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-ink p-8 lg:p-10 transition-colors hover:bg-ink-soft"
            >
              <header className="flex items-start justify-between">
                <span className="font-display text-3xl text-gold/65">
                  {item.numeral}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-dim">
                  {item.cmd}
                  <span className="blink ml-1 text-gold">▮</span>
                </span>
              </header>

              <div className="mt-12 mb-12 flex justify-center text-gold transition-transform duration-700 ease-out group-hover:rotate-180">
                <Sigil size={130} />
              </div>

              <h3 className="font-display text-2xl lg:text-[1.65rem] text-bone uppercase tracking-tight leading-tight">
                {item.name}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.26em] text-gold/75">
                {item.sub}
              </p>

              <p className="mt-6 font-serif text-[15px] leading-[1.55] text-bone-soft">
                {item.description}
              </p>

              <ul className="mt-8 space-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-dim border-t border-ash/40 pt-6">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="text-gold/70">→</span>
                    <span className="text-bone">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-ash/30 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim flex items-center justify-between">
                <span>{s.cta}</span>
                <span className="text-gold transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

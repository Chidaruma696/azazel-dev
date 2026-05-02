"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useT } from "./I18nProvider";

const tools = [
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "Python",
  "Go",
  "Tailwind",
  "Supabase",
  "Docker",
  "Linux",
];

export default function Grimoire() {
  const { t } = useT();
  const e = t.estudio;

  return (
    <section
      id="estudio"
      className="relative border-t border-ash/60 py-28 lg:py-36 px-6 lg:px-12 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
        <div className="font-display text-[40vw] lg:text-[28vw] leading-none text-bone/[0.022] tracking-tighter">
          A
        </div>
      </div>

      <SectionHeader numeral={e.numeral} label={e.label} subtitle={e.subtitle} />

      <div className="relative mx-auto max-w-[1600px] mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="lg:col-span-5"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold/85 mb-6">
            {e.manifestoLabel}
          </p>
          <p className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.18] text-bone tracking-tight uppercase">
            {e.manifesto1}
            <span className="font-serif italic normal-case text-gold">
              {" "}
              {e.manifesto2}
            </span>{" "}
            {e.manifesto3}
          </p>
          <p className="mt-8 font-serif text-lg leading-[1.6] text-bone-soft">
            {e.body}
          </p>

          <div className="mt-10 border-t border-ash/40 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-dim mb-4">
              {e.toolsLabel}
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.18em]">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="border border-ash/60 px-2.5 py-1 text-bone hover:border-gold/60 hover:text-gold transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7 lg:pl-12 lg:border-l border-ash/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold/85 mb-12">
            {e.principlesLabel}
          </p>
          <div className="space-y-12">
            {e.principles.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.13,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid grid-cols-12 gap-5 group"
              >
                <span className="col-span-2 font-display text-3xl lg:text-4xl text-gold/65 group-hover:text-gold transition-colors">
                  {p.n}
                </span>
                <div className="col-span-10">
                  <h3 className="font-display text-2xl lg:text-[1.7rem] text-bone tracking-tight uppercase leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-serif text-bone-soft text-lg leading-[1.6]">
                    {p.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

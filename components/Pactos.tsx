"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useT } from "./I18nProvider";
import type { DictShape } from "@/lib/dict";

type Project = DictShape["obra"]["items"][number];

export default function Pactos() {
  const { t } = useT();
  const o = t.obra;
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });

  const x = useTransform(scrollYProgress, (p) => {
    if (typeof window === "undefined" || !trackRef.current) return 0;
    const max = trackRef.current.scrollWidth - window.innerWidth;
    return -p * max;
  });

  return (
    <section id="obra" className="relative border-t border-ash/60">
      <div className="px-6 lg:px-12 pt-28 lg:pt-36 pb-10">
        <SectionHeader numeral={o.numeral} label={o.label} subtitle={o.subtitle} />
        <p className="mx-auto max-w-[1600px] mt-10 font-mono text-[11px] uppercase tracking-[0.28em] text-bone-dim flex items-center gap-3">
          <span className="text-gold">↓</span>
          {o.cue}
          <span className="text-gold">→</span>
        </p>
      </div>

      <div ref={containerRef} className="relative h-[340vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 lg:gap-7 pl-6 lg:pl-12 pr-6 lg:pr-12 will-change-transform"
          >
            {o.items.map((p) => (
              <ProjectCard key={p.n} p={p} total={o.items.length} labels={o} />
            ))}
            <EndCard end={o.end} />
          </motion.div>

          <div className="pointer-events-none absolute bottom-6 lg:bottom-10 left-6 right-6 lg:left-12 lg:right-12 h-px bg-ash/50">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              className="h-px bg-gold origin-left"
            />
          </div>

          <div className="pointer-events-none absolute top-6 lg:top-10 right-6 lg:right-12 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-dim flex items-center gap-3">
            <span className="text-gold">◈</span>
            <span>{o.counter}</span>
            <span className="h-px w-6 bg-ash" />
            <span>{o.scroll}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  p,
  total,
  labels,
}: {
  p: Project;
  total: number;
  labels: { moduleLabel: string; stackLabel: string };
}) {
  return (
    <article className="shrink-0 w-[88vw] sm:w-[80vw] lg:w-[62vw] xl:w-[58vw] max-w-[1180px] h-[78vh] lg:h-[80vh] relative border border-ash/60 bg-ink-soft/40 backdrop-blur-sm overflow-hidden flex flex-col p-7 lg:p-12">
      <div className="pointer-events-none absolute right-[-2vw] -bottom-12 font-display text-[36vw] lg:text-[18vw] leading-none text-bone/[0.028] select-none tracking-tighter">
        {p.n}
      </div>

      <header className="relative z-10 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.28em]">
        <span className="text-gold/85">
          № {p.n} / {String(total).padStart(2, "0")}
        </span>
        <span className="text-bone-dim">{p.year}</span>
      </header>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-3xl pt-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
          {p.sector}
        </span>
        <h3 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,3.4rem)] leading-[1.04] text-bone tracking-tight uppercase">
          {p.title}
        </h3>
        <p className="mt-6 font-serif text-base lg:text-lg leading-[1.55] text-bone-soft max-w-2xl">
          {p.detail}
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 pt-6 border-t border-ash/50 font-mono text-[10px] uppercase tracking-[0.22em]">
        <div className="lg:col-span-7">
          <p className="text-bone-dim mb-3">{labels.moduleLabel}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-bone">
            {p.modules.map((m, i) => (
              <span key={m} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-gold/40">·</span>}
                {m}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3">
          <p className="text-bone-dim mb-3">{labels.stackLabel}</p>
          <div className="text-bone-soft">{p.stack.join(" · ")}</div>
        </div>
        <div className="lg:col-span-2 flex lg:justify-end items-start">
          <span className="text-gold border border-gold/40 px-2.5 py-1 inline-flex items-center gap-2">
            <span className="size-1 rounded-full bg-gold" />
            {p.badge}
          </span>
        </div>
      </div>
    </article>
  );
}

function EndCard({ end }: { end: DictShape["obra"]["end"] }) {
  return (
    <article className="shrink-0 w-[88vw] sm:w-[72vw] lg:w-[48vw] xl:w-[42vw] h-[78vh] lg:h-[80vh] relative flex flex-col items-center justify-center text-center border border-gold/45 bg-ink p-10 lg:p-14 gap-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <svg viewBox="0 0 200 200" width="80%" height="80%" aria-hidden="true">
          <g stroke="#c9a961" fill="none" strokeWidth="0.5">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="70" />
            <polygon points="100,30 161,140 39,140" />
            <line x1="60" y1="120" x2="140" y2="120" />
          </g>
        </svg>
      </div>

      <div className="relative font-mono text-[10px] uppercase tracking-[0.32em] text-gold/85">
        {end.number}
      </div>
      <h3 className="relative font-display text-[clamp(1.8rem,3vw,3rem)] text-bone uppercase tracking-tight leading-[1.05]">
        {end.title1}
        <em className="font-serif italic normal-case text-gold"> {end.titleEm}</em>
      </h3>
      <p className="relative font-serif text-base lg:text-lg text-bone-soft leading-[1.55] max-w-md">
        {end.text}
      </p>
      <a
        href="#contacto"
        className="relative mt-4 group inline-flex items-center gap-3 border border-gold px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.28em] text-gold hover:bg-gold hover:text-ink transition-colors"
      >
        <span>{end.cta}</span>
        <span className="transition-transform group-hover:translate-x-1">↗</span>
      </a>
    </article>
  );
}

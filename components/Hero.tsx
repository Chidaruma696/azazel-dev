"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroSigil } from "./Sigil";
import { useT } from "./I18nProvider";

export default function Hero() {
  const { t } = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sigilRotate = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const sigilScale = useTransform(scrollYProgress, [0, 1], [1, 0.78]);
  const sigilOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden pt-14 pb-16"
    >
      {/* líneas de cuadrícula sutiles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-1/4 h-px bg-gold/[0.06]" />
        <div className="absolute inset-x-0 top-3/4 h-px bg-gold/[0.06]" />
        <div className="absolute inset-y-0 left-[8%] w-px bg-gold/[0.06]" />
        <div className="absolute inset-y-0 right-[8%] w-px bg-gold/[0.06]" />
      </div>

      <CornerBrackets />

      <div className="relative mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <motion.div style={{ y: headlineY }} className="z-10 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold/85 flex items-center gap-3"
          >
            <span className="inline-block size-1.5 rounded-full bg-gold" />
            <span>{t.hero.eyebrow}</span>
            <span className="text-ash">·</span>
            <span className="text-bone-dim">{t.hero.yearLabel}</span>
          </motion.div>

          <h1 className="mt-9 font-display text-[clamp(2.6rem,7.6vw,7rem)] leading-[0.96] tracking-[-0.01em] text-bone uppercase">
            <ReveralLine delay={0.15}>{t.hero.h1}</ReveralLine>
            <ReveralLine delay={0.3}>{t.hero.h2}</ReveralLine>
            <ReveralLine
              delay={0.55}
              className="font-serif italic text-bone-soft normal-case pl-10 lg:pl-24 text-[clamp(2.2rem,6.5vw,5.6rem)] leading-[1]"
            >
              {t.hero.h3} <span className="text-gold not-italic">—</span>
            </ReveralLine>
            <ReveralLine
              delay={0.7}
              className="font-serif italic text-bone-soft normal-case pl-10 lg:pl-24 text-[clamp(2.2rem,6.5vw,5.6rem)] leading-[1]"
            >
              {t.hero.h4}
            </ReveralLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.05 }}
            className="mt-10 max-w-xl font-serif text-lg leading-[1.55] text-bone-soft"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="mt-12 flex flex-wrap items-center gap-7"
          >
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-3 border border-gold/55 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.28em] text-gold transition-all hover:bg-gold hover:text-ink"
            >
              <span className="text-gold/60 group-hover:text-ink/60">[</span>
              <span>{t.hero.ctaPrimary}</span>
              <span className="transition-transform group-hover:translate-x-1">↗</span>
              <span className="text-gold/60 group-hover:text-ink/60">]</span>
            </a>
            <a
              href="#obra"
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-bone-dim hover:text-bone transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 grid grid-cols-2 gap-6 max-w-md font-mono text-[10px] uppercase tracking-[0.22em]"
          >
            <Stat n="05" l={t.hero.statProjects} />
            <Stat n="∞" l={t.hero.statCode} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <motion.div
            style={{
              rotate: sigilRotate,
              scale: sigilScale,
              opacity: sigilOpacity,
            }}
            className="text-gold relative"
          >
            <HeroSigil size={520} />
            <div className="absolute inset-0 rounded-full border border-gold/[0.04] scale-[1.15] pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-gold/[0.03] scale-[1.3] pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>

      {/* marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-ash/50 overflow-hidden bg-ink/40 backdrop-blur-sm">
        <div className="marquee-track py-3.5 font-mono text-[11px] uppercase tracking-[0.4em] text-bone-dim/70">
          <MarqueeRow items={t.hero.marquee} />
          <MarqueeRow items={t.hero.marquee} />
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items }: { items: string[] }) {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center shrink-0">
          <span className="text-gold mx-10">◈</span>
          <span className="whitespace-nowrap">{item}</span>
        </span>
      ))}
      <span className="text-gold mx-10">◈</span>
    </div>
  );
}

function ReveralLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-bone leading-none">{n}</div>
      <div className="mt-2 text-bone-dim leading-snug">{l}</div>
    </div>
  );
}

function CornerBrackets() {
  const cls = "absolute size-10 lg:size-14 border-gold/35";
  return (
    <div className="pointer-events-none absolute inset-5 lg:inset-7 hidden md:block">
      <div className={`${cls} top-0 left-0 border-t border-l`} />
      <div className={`${cls} top-0 right-0 border-t border-r`} />
      <div className={`${cls} bottom-0 left-0 border-b border-l`} />
      <div className={`${cls} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}

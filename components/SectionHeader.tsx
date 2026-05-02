"use client";
import { motion } from "framer-motion";

export default function SectionHeader({
  numeral,
  label,
  subtitle,
}: {
  numeral: string;
  label: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-[1600px]"
    >
      <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.32em] text-bone-dim">
        <span className="text-gold text-base leading-none">◈</span>
        <span>{subtitle}</span>
        <span className="h-px flex-1 bg-ash/60 max-w-[180px]" />
      </div>
      <h2 className="mt-7 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-[-0.01em] text-bone uppercase">
        <span className="text-gold/55 mr-5 lg:mr-8 font-serif italic normal-case">
          {numeral}
        </span>
        {label}
      </h2>
    </motion.div>
  );
}

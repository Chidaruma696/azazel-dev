"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useT } from "./I18nProvider";
import { SigilMark } from "./Sigil";

export default function AboutModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t } = useT();
  const e = t.estudio;
  const f = t.footer;

  useEffect(() => {
    if (!open) return;
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/85 backdrop-blur-md px-3 sm:px-4 py-6 sm:py-10 lg:py-16"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={f.aboutTitle}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl border border-ash/70 bg-ink/95 backdrop-blur-sm"
            onClick={(ev) => ev.stopPropagation()}
          >
            <ModalCorners />

            <div className="flex items-center justify-between gap-4 border-b border-ash/50 px-5 sm:px-6 lg:px-9 py-3.5 sm:py-4">
              <div className="flex items-center gap-3 text-gold min-w-0">
                <SigilMark size={20} />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-bone-dim truncate">
                  {f.aboutTitle}
                </span>
              </div>
              <button
                onClick={onClose}
                className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone-dim hover:text-gold transition-colors flex items-center gap-2 shrink-0"
                aria-label={f.aboutClose}
              >
                <span className="hidden sm:inline">{f.aboutClose}</span>
                <span aria-hidden className="text-base sm:text-[10px] leading-none">✕</span>
              </button>
            </div>

            <div className="px-5 sm:px-6 lg:px-9 py-7 sm:py-9 lg:py-12 space-y-10 sm:space-y-12">
              <section>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold/85 mb-4 sm:mb-5">
                  {e.lore.label}
                </p>
                <h3 className="font-display text-[clamp(1.5rem,5.4vw,2.4rem)] leading-[1.08] text-bone tracking-tight uppercase">
                  {e.lore.title}{" "}
                  <span className="font-serif italic normal-case text-gold">
                    {e.lore.titleEm}
                  </span>
                </h3>
                <p className="mt-5 sm:mt-6 font-serif text-[15px] sm:text-base lg:text-lg leading-[1.65] text-bone-soft">
                  {e.lore.text}
                </p>
              </section>

              <section className="border-t border-ash/40 pt-8 sm:pt-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold/85 mb-5 sm:mb-6">
                  {e.founder.label}
                </p>

                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="shrink-0 size-14 sm:size-16 lg:size-[72px] border border-gold/55 flex items-center justify-center font-display text-lg sm:text-xl lg:text-2xl text-gold tracking-[0.04em]">
                    {e.founder.monogram}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-lg sm:text-xl lg:text-2xl text-bone tracking-tight uppercase leading-tight break-words">
                      {e.founder.name}
                    </h4>
                    <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.26em] text-bone-dim">
                      {e.founder.role}
                    </p>
                    <p className="mt-2 font-serif italic text-gold text-[15px] sm:text-base leading-snug">
                      « {e.founder.epithet} »
                    </p>
                  </div>
                </div>

                <p className="mt-6 sm:mt-7 font-serif text-[15px] sm:text-base lg:text-[17px] leading-[1.65] text-bone-soft">
                  {e.founder.bio}
                </p>

                <dl className="mt-7 sm:mt-8 grid grid-cols-1 gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.16em]">
                  {e.founder.facts.map((fact) => (
                    <div
                      key={fact.k}
                      className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4 border-t border-ash/40 pt-3 first:border-t-0 first:pt-0"
                    >
                      <dt className="text-bone-dim">{fact.k}</dt>
                      <dd className="text-bone normal-case tracking-[0.04em] sm:tracking-[0.06em] break-words">
                        {fact.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-ash/40 font-serif italic text-bone-soft text-[15px] sm:text-base leading-snug">
                  <span className="text-gold mr-1.5 sm:mr-2">“</span>
                  {e.founder.quote}
                  <span className="text-gold ml-1">”</span>
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalCorners() {
  const cls = "absolute size-3.5 border-gold/45";
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className={`${cls} top-0 left-0 border-t border-l`} />
      <div className={`${cls} top-0 right-0 border-t border-r`} />
      <div className={`${cls} bottom-0 left-0 border-b border-l`} />
      <div className={`${cls} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}

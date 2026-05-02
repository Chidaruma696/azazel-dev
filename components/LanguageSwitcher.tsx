"use client";
import { useT } from "./I18nProvider";
import { langs, langLabels } from "@/lib/dict";

export default function LanguageSwitcher() {
  const { lang, setLang } = useT();

  return (
    <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em]">
      <span className="hidden md:inline text-bone-dim mr-1">lang</span>
      <span className="hidden md:inline text-ash">/</span>
      {langs.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-pressed={active}
            aria-label={`Switch language to ${l.toUpperCase()}`}
            className={
              "px-1.5 py-1 transition-colors " +
              (active
                ? "text-gold border-b border-gold"
                : "text-bone-dim hover:text-bone border-b border-transparent")
            }
          >
            {langLabels[l]}
          </button>
        );
      })}
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useT } from "./I18nProvider";

export default function StatusBar() {
  const { t } = useT();
  const [time, setTime] = useState("--:--:-- UTC");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-ash/60 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim md:px-8">
        <div className="flex items-center gap-3 md:gap-5">
          <span className="text-gold text-sm leading-none">◈</span>
          <span className="text-bone">{t.statusBar.brand}</span>
          <span className="text-ash hidden sm:inline">/</span>
          <span className="hidden sm:inline">{t.statusBar.version}</span>
        </div>
        <div className="hidden xl:flex items-center gap-5">
          <span>{t.statusBar.location}</span>
          <span className="text-ash">/</span>
          <span className="tabular-nums">{time}</span>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <LanguageSwitcher />
          <span className="text-ash hidden md:inline">/</span>
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-bone-soft hidden lg:inline">
              {t.statusBar.statusLong}
            </span>
            <span className="text-bone-soft lg:hidden">
              {t.statusBar.statusShort}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

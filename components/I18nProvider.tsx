"use client";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dict, langs, type Lang, type DictShape } from "@/lib/dict";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: DictShape;
  ready: boolean;
};

const I18nContext = createContext<Ctx>({
  lang: "es",
  setLang: () => {},
  t: dict.es,
  ready: false,
});

const STORAGE_KEY = "azazel-lang";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [ready, setReady] = useState(false);

  // hidratación: lee el idioma guardado tras montar
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && langs.includes(saved)) {
        setLangState(saved);
      }
    } catch {
      /* noop */
    }
    setReady(true);
  }, []);

  // sincroniza el atributo lang del documento
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* noop */
    }
  };

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: dict[lang], ready }),
    [lang, ready]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useT = () => useContext(I18nContext);

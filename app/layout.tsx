import type { Metadata } from "next";
import { EB_Garamond, Cinzel, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { I18nProvider } from "@/components/I18nProvider";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azazel Dev Studio · Sistemas a medida",
  description:
    "Estudio de software. ERPs, plataformas web y sistemas personalizados — forjados para individuos y empresas.",
  metadataBase: new URL("https://azazel.dev"),
  openGraph: {
    title: "Azazel Dev Studio",
    description: "Sistemas convocados a tu medida.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${garamond.variable} ${cinzel.variable} ${jbmono.variable}`}
    >
      <body className="grain vignette bg-ink text-bone">
        <I18nProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </I18nProvider>
      </body>
    </html>
  );
}

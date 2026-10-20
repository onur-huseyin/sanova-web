import { site } from "@/lib/site";

/** Production URL — set NEXT_PUBLIC_SITE_URL when deploying (e.g. https://sanova.com.tr) */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.sanova.com.tr"
).replace(/\/$/, "");

export const seo = {
  siteUrl,
  title: "SANOVA | Esenyurt Havuz, Pompa ve Villa Teknik Sistemleri",
  titleTemplate: "%s | SANOVA",
  description: site.description,
  locale: "tr_TR",
  keywords: [
    "SANOVA",
    "Esenyurt havuz sistemleri",
    "Akçaburgaz pompa otomasyonu",
    "Esenyurt villa teknik servis",
    "elektrik bakım ve onarım",
    "havuz pompası bakım hizmetleri",
    "havuz teknik servis Esenyurt",
    "villa elektrik bakımı İstanbul",
    "pompa otomasyon sistemi",
    "Akçaburgaz teknik servis",
  ],
  ogImage: {
    url: "/images/og-default.jpg",
    width: 1200,
    height: 630,
    alt: "SANOVA — Esenyurt ve Akçaburgaz’da havuz, pompa ve villa teknik sistemleri",
  },
} as const;

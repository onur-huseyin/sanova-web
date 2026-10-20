import { site } from "@/lib/site";

/** Production URL — set NEXT_PUBLIC_SITE_URL when deploying (e.g. https://sanova.com.tr) */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.sanova.com.tr"
).replace(/\/$/, "");

export const seo = {
  siteUrl,
  title: "SANOVA | Elektrik, Mekanik Bakım Onarım ve Pompa Revizyonu",
  titleTemplate: "%s | SANOVA",
  description: site.description,
  locale: "tr_TR",
  keywords: [
    "SANOVA",
    "elektrik bakım ve onarım",
    "mekanik bakım onarım",
    "pompa sistemleri revizyonu",
    "pompa revizyonu İstanbul",
    "elektrik arıza tespiti",
    "mekanik ekipman bakımı",
    "havuz pompası bakım",
    "Esenyurt elektrik bakım",
    "Akçaburgaz teknik servis",
    "İstanbul elektrik mekanik servis",
  ],
  ogImage: {
    url: "/images/og-default.jpg",
    width: 1200,
    height: 630,
    alt: "SANOVA — elektrik, mekanik bakım onarım ve pompa sistemleri revizyonu",
  },
} as const;

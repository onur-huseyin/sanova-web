"use client";

import { IconPhone, IconWhatsApp } from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";

export function MobileContactBar() {
  const primary = site.phones[0];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-accent/20 bg-bg/95 px-3 py-2.5 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={primary.tel}
          className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-pill py-3 text-sm font-semibold text-pill-text"
        >
          <IconPhone size={28} />
          Ara
        </a>
        <a
          href={primary.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border border-whatsapp/40 bg-whatsapp-soft py-3 text-sm font-semibold text-text"
        >
          <IconWhatsApp size={28} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

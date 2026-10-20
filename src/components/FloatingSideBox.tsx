"use client";

import { IconShield, IconWhatsApp } from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";

export function FloatingSideBox() {
  const primary = site.phones[0];
  const whatsappHref = `${primary.whatsapp}?text=${encodeURIComponent(
    "Merhaba SANOVA, teknik hizmet hakkında bilgi almak istiyorum.",
  )}`;

  return (
    <aside
      className="pointer-events-none fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 pr-3 md:pointer-events-auto md:block lg:pr-5"
      aria-label="Hızlı iletişim"
    >
      <div className="flex w-[12rem] flex-col overflow-hidden rounded-2xl border border-accent/30 bg-surface/95 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="flex items-center gap-3 border-b border-accent/20 bg-accent-soft/60 px-3.5 py-3.5">
          <IconShield size={36} />
          <p className="text-[14px] leading-snug font-medium text-trust">
            Teknik Güvence
          </p>
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-3.5 py-4 transition-colors hover:bg-whatsapp-soft focus-visible:bg-whatsapp-soft"
        >
          <span className="inline-flex shrink-0 transition-transform group-hover:scale-105 group-active:scale-95">
            <IconWhatsApp size={44} />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-[16px] font-semibold text-text">WhatsApp</span>
            <span className="truncate text-[13px] text-accent">Hemen yazın</span>
          </span>
        </a>
      </div>
    </aside>
  );
}

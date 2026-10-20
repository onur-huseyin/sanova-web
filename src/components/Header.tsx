"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Drawer } from "vaul";
import { IconPhone } from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const primaryPhone = site.phones[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/85 py-3 backdrop-blur-md"
          : "bg-transparent py-5 md:py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="#ust" className="relative z-10 shrink-0" aria-label="SANOVA ana sayfa">
          <Image
            src="/logos/sanova-white.png"
            alt="SANOVA"
            width={180}
            height={46}
            className="h-8 w-auto md:h-10"
            priority
          />
        </Link>

        <nav
          className="hidden items-center rounded-full bg-pill px-2 py-1.5 shadow-sm lg:flex"
          aria-label="Ana menü"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-pill-text transition-colors hover:bg-black/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={primaryPhone.tel}
            className="hidden items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent sm:inline-flex"
          >
            <IconPhone size={32} />
            {primaryPhone.display}
          </a>

          <Drawer.Root open={open} onOpenChange={setOpen} direction="right">
            <Drawer.Trigger
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-text transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Menüyü aç"
            >
              <Menu className="size-5" />
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 z-[60] bg-black/60" />
              <Drawer.Content className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,20rem)] flex-col bg-surface outline-none">
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <Drawer.Title className="font-display text-lg font-semibold tracking-wide">
                    Menü
                  </Drawer.Title>
                  <Drawer.Close
                    className="inline-flex size-10 items-center justify-center rounded-full hover:bg-white/5"
                    aria-label="Menüyü kapat"
                  >
                    <X className="size-5" />
                  </Drawer.Close>
                </div>
                <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobil menü">
                  {site.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-base font-medium text-text transition-colors hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href={primaryPhone.tel}
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-pill px-4 py-3 text-sm font-semibold text-pill-text"
                  >
                    <IconPhone size={32} />
                    Bizi Arayın
                  </a>
                </nav>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    </header>
  );
}

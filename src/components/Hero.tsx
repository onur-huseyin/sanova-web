"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { IconArrowDown, IconPhone } from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();
  const primaryPhone = site.phones[0];

  return (
    <section
      id="ust"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Modern yaşam alanı ve havuz manzarası"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-bg/15 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.18),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-24 md:px-8 md:pt-32 md:pb-28">
        <motion.p
          className="mb-5 font-display text-sm font-semibold tracking-[0.28em] text-accent uppercase"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          SANOVA
        </motion.p>

        <motion.h1
          className="font-display max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          {site.tagline}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-trust/80 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          Havuz sistemlerinden pompa otomasyonuna, villa teknik altyapısından
          elektrik bakım ve onarımına kadar profesyonel çözümler.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42 }}
        >
          <Link
            href="#hizmetler"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-pill px-6 py-3.5 text-sm font-semibold text-pill-text transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Hizmetlerimizi Keşfedin
            <IconArrowDown size={28} />
          </Link>
          <a
            href={primaryPhone.tel}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-accent/40 bg-accent-soft px-6 py-3.5 text-sm font-semibold text-trust backdrop-blur-sm transition-colors hover:border-accent hover:bg-accent/25"
          >
            <IconPhone size={28} />
            Bizi Arayın
          </a>
        </motion.div>
      </div>
    </section>
  );
}

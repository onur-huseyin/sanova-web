import Image from "next/image";
import Link from "next/link";
import { site, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="section-green border-t border-accent/15 pb-24 pt-16 md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Image
            src="/logos/sanova-white.png"
            alt="SANOVA"
            width={160}
            height={42}
            className="h-9 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-trust/80">
            Elektrik bakım onarım, mekanik bakım onarım ve pompa sistemleri
            revizyonunda güvenilir teknik çözüm ortağı.
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-sm font-semibold tracking-wide text-accent uppercase">
            Hizmetler
          </h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={`#${s.id}`}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-display text-sm font-semibold tracking-wide text-accent uppercase">
            İletişim
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-trust/85">
            {site.phones.map((p) => (
              <li key={p.e164}>
                <a href={p.tel} className="transition-colors hover:text-accent">
                  {p.display}
                </a>
              </li>
            ))}
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-accent/15 px-5 pt-6 md:px-8">
        <p className="text-xs text-muted">
          © 2026 SANOVA. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

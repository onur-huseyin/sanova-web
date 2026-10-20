import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import {
  IconChat,
  IconFocus,
  IconSystem,
  IconTrust,
} from "@/components/icons/BrandIcons";
import { whyPoints } from "@/lib/site";

const whyIcons = [IconTrust, IconSystem, IconFocus, IconChat] as const;

export function WhySanova() {
  return (
    <section className="section-green border-t border-border py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <FadeIn className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl ring-1 ring-accent/20">
              <Image
                src="/images/why.jpg"
                alt="Yüksek kaliteli villa mimarisi detayı"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-accent/10" />
            </div>
          </FadeIn>

          <div className="md:col-span-7 md:pt-6">
            <FadeIn>
              <p className="font-display text-sm font-semibold tracking-[0.24em] text-accent uppercase">
                Neden SANOVA?
              </p>
              <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
                Güven veren teknik hizmet deneyimi
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-trust/85 md:text-lg">
                Elektrik bakım onarımdan mekanik bakıma, pompa sistemleri
                revizyonundan teknik arıza çözümlerine kadar her adımda
                ölçülebilir ve uygulanabilir çözümler sunuyoruz.
              </p>
            </FadeIn>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {whyPoints.map((item, i) => {
                const WhyIcon = whyIcons[i] ?? IconTrust;
                return (
                  <FadeIn key={item.title} delay={0.05 * (i + 1)}>
                    <li className="rounded-2xl border border-accent/15 bg-accent-soft/40 p-4 pt-5">
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 inline-flex size-14 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-surface-elevated">
                          <WhyIcon size={40} />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold text-trust">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

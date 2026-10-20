import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import {
  IconArrowOut,
  IconElectric,
  IconPool,
  IconPump,
  IconShield,
  IconVilla,
} from "@/components/icons/BrandIcons";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const serviceIcons = {
  havuz: IconPool,
  pompa: IconPump,
  villa: IconVilla,
  elektrik: IconElectric,
} as const;

export function Services() {
  return (
    <section
      id="hizmetler"
      className="section-green-soft scroll-mt-24 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <p className="font-display text-sm font-semibold tracking-[0.24em] text-accent uppercase">
            Hizmetlerimiz
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-text md:text-4xl lg:text-5xl">
            Teknik sistemleriniz için kapsamlı çözümler
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-trust/85 md:text-lg">
            Esenyurt havuz sistemleri, Akçaburgaz pompa otomasyonu, villa teknik
            servis ve elektrik bakım ihtiyaçlarınızı profesyonel bir yaklaşımla
            ele alıyoruz.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;
            const ServiceIcon = serviceIcons[service.id];
            return (
              <FadeIn key={service.id} delay={0.05}>
                <article
                  id={service.id}
                  className={cn(
                    "grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-14",
                    reverse && "md:[&>*:first-child]:order-2",
                  )}
                >
                  <div
                    className={cn(
                      "md:col-span-7",
                      reverse ? "md:translate-y-8" : "md:-translate-y-2",
                    )}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/4] md:aspect-[4/3]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 58vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent-soft shadow-[0_0_24px_rgba(34,197,94,0.15)]">
                      <ServiceIcon size={44} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-text md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-trust/85">
                      {service.summary}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-text/90 md:text-base"
                        >
                          <IconShield size={26} className="mt-0.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#iletisim"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-trust"
                    >
                      Bu hizmet için iletişime geçin
                      <IconArrowOut size={24} />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

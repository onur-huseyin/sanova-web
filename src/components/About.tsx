import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { IconShield } from "@/components/icons/BrandIcons";

export function About() {
  return (
    <section
      id="hakkimizda"
      className="scroll-mt-24 border-t border-border py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-8 lg:gap-16">
        <FadeIn className="md:col-span-5 md:pt-10">
          <p className="font-display text-sm font-semibold tracking-[0.24em] text-accent uppercase">
            SANOVA Hakkında
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-text md:text-4xl">
            Teknik uzmanlık ve{" "}
            <span className="text-accent">çözüm odaklı</span> yaklaşım
          </h2>
          <p className="mt-6 text-base leading-relaxed text-trust/85 md:text-lg">
            SANOVA; havuz sistemleri, pompa otomasyonu, villa teknik altyapı ve
            elektrik bakım alanında profesyonel hizmet sunar. Amacımız, yaşam
            alanlarınızın teknik sistemlerini güvenilir ve düzenli biçimde
            çalışır durumda tutmaktır.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Esenyurt ve Akçaburgaz başta olmak üzere İstanbul’da villa sahipleri,
            müstakil ev sahipleri ve site yönetimleri için sade iletişim ve net
            teknik değerlendirme ile ilerleriz. Her proje, yerinde ihtiyaç
            analiziyle şekillenir.
          </p>
        </FadeIn>

        <FadeIn className="md:col-span-7" delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-accent/20 md:aspect-[5/4]">
            <Image
              src="/images/about.jpg"
              alt="Modern villa mimarisi ve teknik yaşam alanı"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-bg/50 via-transparent to-accent/15" />
          </div>
          <p className="mt-4 flex items-center gap-2.5 text-sm text-trust">
            <IconShield size={28} />
            Premium yaşam alanları için teknik sistem yönetimi
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

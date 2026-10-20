"use client";

import { useState, type FormEvent } from "react";
import { FadeIn } from "@/components/FadeIn";
import { IconPhone, IconPin, IconWhatsApp } from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";

const serviceOptions = [
  "Elektrik Bakım ve Onarım",
  "Mekanik Bakım ve Onarım",
  "Pompa Sistemleri Revizyonu",
  "Havuz Teknik Destek",
  "Diğer / Belirsiz",
];

export function ContactCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState(serviceOptions[0]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="iletisim"
      className="section-green-soft scroll-mt-24 border-t border-border py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <p className="font-display text-sm font-semibold tracking-[0.24em] text-accent uppercase">
            İletişim
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-text md:text-4xl lg:text-5xl">
            Elektrik, mekanik veya pompa ihtiyacınızı{" "}
            <span className="text-accent">birlikte</span> netleştirelim.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-trust/85 md:text-lg">
            Telefon veya WhatsApp üzerinden bize ulaşın. Hizmet bölgemiz:{" "}
            {site.location}.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <FadeIn className="space-y-4 lg:col-span-5">
            {site.phones.map((p) => (
              <div
                key={p.e164}
                className="flex flex-col gap-3 rounded-3xl border border-accent/20 bg-surface p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm text-accent">Telefon</p>
                  <a
                    href={p.tel}
                    className="font-display mt-1 block text-xl font-semibold text-trust transition-colors hover:text-accent"
                  >
                    {p.display}
                  </a>
                </div>
                <div className="flex gap-2">
                  <a
                    href={p.tel}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-pill px-4 py-2.5 text-sm font-semibold text-pill-text transition-transform hover:scale-[1.02] sm:flex-initial"
                  >
                    <IconPhone size={32} />
                    Ara
                  </a>
                  <a
                    href={p.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-whatsapp/40 bg-whatsapp-soft px-4 py-2.5 text-sm font-semibold text-text transition-colors hover:border-whatsapp sm:flex-initial"
                  >
                    <IconWhatsApp size={26} />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3.5 rounded-3xl border border-accent/20 bg-accent-soft/50 p-5">
              <IconPin size={36} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-display text-base font-semibold text-trust">
                  Hizmet bölgesi
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {site.location}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={0.08}>
            <div className="rounded-3xl border border-accent/20 bg-surface p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-text">
                Kısa bilgi formu
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Bu form şu an e-posta veya sunucu üzerinden gönderim yapmaz.
                Bilgilerinizi not aldıktan sonra lütfen telefon veya WhatsApp ile
                bize ulaşın.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                      İsim
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-text outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                      placeholder="Adınız"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-text outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                      placeholder="05xx xxx xx xx"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="need" className="mb-1.5 block text-sm text-muted">
                      Hizmet ihtiyacı
                    </label>
                    <select
                      id="need"
                      name="need"
                      value={need}
                      onChange={(e) => setNeed(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-text outline-none transition-colors focus:border-accent"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-pill px-6 py-3.5 text-sm font-semibold text-pill-text transition-transform hover:scale-[1.01] active:scale-[0.99] sm:w-auto"
                  >
                    Bilgileri Kaydet ve İletişime Geç
                  </button>
                </form>
              ) : (
                <div className="mt-6 space-y-4 rounded-2xl border border-accent/30 bg-accent-soft p-5">
                  <p className="text-sm leading-relaxed text-text">
                    Teşekkürler{name ? `, ${name}` : ""}. Form gönderimi aktif
                    değil. Lütfen aşağıdaki kanallardan bize ulaşın
                    {need ? ` — konu: ${need}` : ""}.
                    {phone ? ` Belirttiğiniz numara: ${phone}.` : ""}
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <a
                      href={site.phones[0].tel}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-pill px-5 py-3 text-sm font-semibold text-pill-text"
                    >
                      <IconPhone size={32} />
                      Hemen Ara
                    </a>
                    <a
                      href={`${site.phones[0].whatsapp}?text=${encodeURIComponent(
                        `Merhaba, ben ${name || "bir müşteri"}. ${need} hakkında bilgi almak istiyorum.${phone ? ` Telefonum: ${phone}.` : ""}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-whatsapp/40 bg-whatsapp-soft px-5 py-3 text-sm font-semibold text-text"
                    >
                      <IconWhatsApp size={26} />
                      WhatsApp ile Yazın
                    </a>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

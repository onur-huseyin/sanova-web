export const site = {
  name: "SANOVA",
  tagline: "Elektrik ve mekanik bakımda güvenilir teknik çözümler.",
  description:
    "İstanbul, Bursa, İzmir, Yalova, Düzce ve Sakarya’da elektrik bakım onarım, mekanik bakım onarım ve pompa sistemleri revizyonu hizmetleri.",
  location: "İstanbul, Bursa, İzmir, Yalova, Düzce, Sakarya",
  areaServed: [
    "İstanbul",
    "Bursa",
    "İzmir",
    "Yalova",
    "Düzce",
    "Sakarya",
    "Esenyurt",
    "Akçaburgaz",
  ],
  phones: [
    {
      display: "0543 371 7431",
      tel: "tel:+905433717431",
      whatsapp: "https://wa.me/905433717431",
      e164: "+905433717431",
    },
    {
      display: "0555 011 69 14",
      tel: "tel:+905550116914",
      whatsapp: "https://wa.me/905550116914",
      e164: "+905550116914",
    },
  ],
  nav: [
    { href: "#hizmetler", label: "Hizmetler" },
    { href: "#hakkimizda", label: "Hakkımızda" },
    { href: "#iletisim", label: "İletişim" },
  ],
} as const;

export const services = [
  {
    id: "elektrik",
    title: "Elektrik Bakım ve Onarım",
    image: "/images/elektrik.jpg",
    imageAlt: "Elektrik panel ve bakım onarım çalışması",
    summary:
      "Elektrik arıza tespiti, tesisat bakım-onarımı ve periyodik kontrollerle sistemlerinizin güvenli ve kesintisiz çalışmasını sağlıyoruz.",
    points: [
      "Elektrik arıza tespiti ve giderimi",
      "Tesisat bakım ve onarım",
      "Periyodik kontrol ve teknik destek",
    ],
  },
  {
    id: "mekanik",
    title: "Mekanik Bakım ve Onarım",
    image: "/images/villa.jpg",
    imageAlt: "Mekanik sistem ve teknik ekipman bakımı",
    summary:
      "Mekanik ekipmanların bakımı, onarımı ve düzenli çalışması için yerinde keşif, teşhis ve uygulama odaklı teknik hizmet sunuyoruz.",
    points: [
      "Mekanik ekipman bakımı",
      "Arıza teşhisi ve onarım",
      "Sistem kontrol ve düzenli bakım",
    ],
  },
  {
    id: "pompa",
    title: "Pompa Sistemleri Revizyonu",
    image: "/images/pompa.jpg",
    imageAlt: "Pompa sistemi revizyon ve bakım çalışması",
    summary:
      "Pompa sistemlerinin revizyonu, performans iyileştirmesi, kontrol paneli ve otomasyon güncellemeleriyle verimli ve güvenilir çalışma hedefleriz.",
    points: [
      "Pompa revizyonu ve yenileme",
      "Performans ve verimlilik kontrolü",
      "Kontrol, otomasyon ve arıza çözümleri",
    ],
  },
  {
    id: "havuz",
    title: "Havuz Teknik Destek",
    image: "/images/havuz.jpg",
    imageAlt: "Havuz teknik sistem ve ekipman görünümü",
    summary:
      "Havuz teknik sistemlerinde elektrik-mekanik destek, ekipman kontrolü ve arıza çözümleriyle tamamlayıcı hizmet veriyoruz.",
    points: [
      "Havuz ekipman kontrolü",
      "Teknik arıza desteği",
      "Bakım ve sistem kontrolü",
    ],
  },
] as const;

export const whyPoints = [
  {
    title: "Güvenilir teknik yaklaşım",
    text: "Elektrik ve mekanik işlerde net teşhis, planlı uygulama ve açık iletişim esas alınır.",
  },
  {
    title: "Sistemli çalışma",
    text: "Keşif, teşhis, revizyon ve kontrol adımlarını düzenli bir akışla yöneterek sürprizleri azaltırız.",
  },
  {
    title: "Pompa ve mekanik uzmanlığı",
    text: "Pompa sistemleri revizyonunda ve mekanik bakımda sorunun kaynağına odaklanırız.",
  },
  {
    title: "Erişilebilir iletişim",
    text: "Telefon ve WhatsApp üzerinden hızlı ulaşım; ihtiyacınızı birlikte netleştiririz.",
  },
] as const;

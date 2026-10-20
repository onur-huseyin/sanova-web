export const site = {
  name: "SANOVA",
  tagline: "Villalar, bungalovlar ve akıllı evler için premium hizmet",
  description:
    "Esenyurt ve Akçaburgaz’da havuz sistemleri, pompa otomasyonu, villa teknik servis ve elektrik bakım hizmetleri.",
  location: "İstanbul, Bursa, İzmir, Yalova, Düzce, Sakarya",
  areaServed: ["Esenyurt", "Akçaburgaz", "İstanbul"],
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
    id: "havuz",
    title: "Havuz Sistemleri",
    image: "/images/havuz.jpg",
    imageAlt: "Modern villa havuzu ve teknik sistem görünümü",
    summary:
      "Havuz teknik sistemleri, ekipman kurulumu ve kontrolü ile bakım ve arıza çözümlerini tek çatı altında yönetiyoruz.",
    points: [
      "Havuz teknik sistemleri",
      "Ekipman kurulumu ve kontrolü",
      "Bakım ve arıza çözümleri",
    ],
  },
  {
    id: "pompa",
    title: "Pompa ve Otomasyon",
    image: "/images/pompa.jpg",
    imageAlt: "Pompa ve otomasyon ekipmanı detayı",
    summary:
      "Pompa sistemleri kurulumu, kontrol ve otomasyon çözümleri ile teknik arıza tespiti ve sistem kontrolleri sunuyoruz.",
    points: [
      "Kurulum ve bakım",
      "Kontrol ve otomasyon",
      "Arıza tespiti ve kontroller",
    ],
  },
  {
    id: "villa",
    title: "Villa Teknik Sistemleri",
    image: "/images/villa.jpg",
    imageAlt: "Modern villa dış görünümü",
    summary:
      "Villa teknik altyapı sistemleri ve elektrik kontrol hizmetleriyle yaşam alanlarınızın düzenli çalışmasını destekliyoruz.",
    points: [
      "Teknik altyapı sistemleri",
      "Elektrik kontrol ve bakım",
      "Güvenilir çalışma çözümleri",
    ],
  },
  {
    id: "elektrik",
    title: "Elektrik Bakım ve Onarım",
    image: "/images/elektrik.jpg",
    imageAlt: "Elektrik panel ve teknik bakım çalışması",
    summary:
      "Elektrik arıza tespiti, tesisat bakım-onarımı ve periyodik kontrol ile teknik destek sağlıyoruz.",
    points: [
      "Arıza tespiti",
      "Tesisat bakım ve onarım",
      "Periyodik kontrol ve destek",
    ],
  },
] as const;

export const whyPoints = [
  {
    title: "Güvenilir hizmet anlayışı",
    text: "Her işte net iletişim, planlı ilerleme ve sonuç odaklı teknik yaklaşım esas alınır.",
  },
  {
    title: "Sistemli çalışma",
    text: "Keşif, teşhis ve uygulama süreçlerini düzenli bir akışla yöneterek sürprizleri azaltırız.",
  },
  {
    title: "Teknik çözüm odaklılık",
    text: "Havuz, pompa, villa ve elektrik sistemlerinde sorunun kaynağına odaklanırız.",
  },
  {
    title: "Erişilebilir iletişim",
    text: "Telefon ve WhatsApp üzerinden hızlı ulaşım; ihtiyaçlarınızı birlikte netleştiririz.",
  },
] as const;

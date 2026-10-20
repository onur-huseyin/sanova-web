import { site, services } from "@/lib/site";
import { seo, siteUrl } from "@/lib/seo";

export function JsonLd() {
  const primaryPhone = site.phones[0].e164;

  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: site.name,
    url: siteUrl,
    logo: `${siteUrl}/logos/sanova-white.png`,
    image: `${siteUrl}${seo.ogImage.url}`,
    description: site.description,
    telephone: site.phones.map((p) => p.e164),
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: site.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    contactPoint: site.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.e164,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish"],
    })),
  };

  const localBusiness = {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteUrl}/#localbusiness`,
    name: site.name,
    url: siteUrl,
    description: site.description,
    image: [
      `${siteUrl}${seo.ogImage.url}`,
      `${siteUrl}/images/hero.jpg`,
      `${siteUrl}/images/elektrik.jpg`,
    ],
    telephone: primaryPhone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: site.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SANOVA Hizmetleri",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          provider: { "@id": `${siteUrl}/#localbusiness` },
          areaServed: site.areaServed.map((name) => ({
            "@type": "City",
            name,
          })),
        },
      })),
    },
    parentOrganization: { "@id": `${siteUrl}/#organization` },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: site.name,
    description: site.description,
    inLanguage: "tr-TR",
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: seo.title,
    description: seo.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#localbusiness` },
    inLanguage: "tr-TR",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}${seo.ogImage.url}`,
    },
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website, webPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

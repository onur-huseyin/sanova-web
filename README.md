# SANOVA — Premium Kurumsal Web Sitesi

SANOVA markası için havuz sistemleri, pompa otomasyonu, villa teknik sistemleri ve elektrik bakım hizmetlerini tanıtan tek sayfalık premium kurumsal site.

## Teknolojiler

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Motion
- Vaul (mobil menü)
- Lucide Icons

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda: [http://localhost:3000](http://localhost:3000)

## Üretim derlemesi

```bash
npm run build
npm start
```

## Site URL (SEO)

Canlı domain’i ortam değişkeni ile tanımlayın. Sitemap, robots, canonical ve JSON-LD bu değeri kullanır:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://www.sanova.com.tr
```

Varsayılan (tanımlanmazsa): `https://www.sanova.com.tr`

### Google Search Console

1. Siteyi doğrulayın (HTML etiketi veya DNS).
2. `https://YOUR-DOMAIN/sitemap.xml` adresini gönderin.
3. `https://YOUR-DOMAIN/robots.txt` erişimini kontrol edin.

## Favicon

Favicon seti `public/` ve `src/app/` altında üretilir:

```bash
npm run generate:favicons
```

Dosyalar: `favicon.ico`, `icon.svg`, `apple-touch-icon.png`, `icons/icon-192.png`, `icons/icon-512.png`

## Logo üretimi

```bash
npm run generate:logos
```

Şeffaf PNG logolar: `public/logos/sanova-black.png`, `public/logos/sanova-white.png`

## İletişim bağlantıları

- Telefon: `tel:+905433717431`, `tel:+905550116914`
- WhatsApp: `https://wa.me/905433717431`, `https://wa.me/905550116914`

İletişim formu yalnızca yerel not tutar; gerçek gönderim yoktur. Kullanıcı telefon veya WhatsApp’a yönlendirilir.

## Hizmet bölgesi

Esenyurt, Akçaburgaz, İstanbul

## SEO özeti

- Canonical URL + Open Graph / Twitter kartları
- `robots.ts` ve `sitemap.ts`
- Web App Manifest
- Schema.org `@graph`: Organization, LocalBusiness, WebSite, WebPage, Service kataloğu
- Yerel anahtar kelimeler doğal içerikte (uydurma adres / çalışma saati yok)

# Mezo Global — Next.js + Kinetic Typography

## Yerelde çalıştırma
```bash
npm install
npm run dev
# http://localhost:3000
```

## Klasör yapısı
```
app/layout.tsx              → global metadata, font, Nav/Footer, PageTransition wrapper
app/page.tsx                → ana sayfa
app/hizmetler/page.tsx      → hizmetler listesi
app/hizmetler/[slug]/page.tsx → TEK template'ten 4 Urfa etkinlik sayfası (generateStaticParams + generateMetadata)
app/konaklama/page.tsx
app/iletisim/page.tsx
app/sitemap.ts              → /sitemap.xml — otomatik, lib/pages.ts'den besleniyor
app/robots.ts               → /robots.txt — otomatik
lib/pages.ts                → TEK merkez: tüm hizmetlerin içeriği + SEO verisi
components/Nav.tsx          → client-side routing (tam sayfa yenilenmiyor)
components/PageTransition.tsx → route değişiminde asit sarısı wipe animasyonu
components/Marquee.tsx
app/globals.css             → tasarım tokenları
```

## Yeni bir etkinlik/hizmet sayfası eklemek
`lib/pages.ts` → `services` dizisine yeni bir obje ekle (slug, title, description, hero içerikleri, problems, process, scope, case study, related).
Bu kadar — sayfa otomatik oluşur (`/hizmetler/[slug]`), sitemap'e otomatik girer, SEO otomatik kurulur.

## Coolify'a deploy
1. Coolify → **New Resource → Application → Public/Private Git Repository** (bu klasörü bir git reposuna push'la) veya **Dockerfile** kaynağı olarak doğrudan bu klasörü seç.
2. Coolify, kökteki `Dockerfile`'ı otomatik algılar (Nixpacks yerine Dockerfile builder seçili olsun — build ayarlarında "Build Pack: Dockerfile").
3. Port: **3000** (Dockerfile'da `EXPOSE 3000` tanımlı, Coolify'da aynı portu belirt).
4. Domain: Coolify'ın "Domains" alanına `mezoglobal.com` gir, Coolify Let's Encrypt SSL'i otomatik kurar.
5. Environment variable gerekmiyor (iletişim formu backend'i eklenene kadar). İleride SMTP eklersek `.env` üzerinden `SMTP_HOST` vb. tanımlanır.
6. Push sonrası Coolify otomatik build + deploy yapar; sonraki git push'larda otomatik yeniden deploy (webhook) ayarlanabilir.

## İletişim formu
Şu an form `/api/iletisim`'e POST atıyor ama bu route henüz yok — ne istediğini söyle (SMTP mail / DB kayıt / üçüncü parti form servisi), `app/api/iletisim/route.ts` olarak ekleyeyim.

## Domain / SEO değişikliği
Tüm URL'ler `lib/pages.ts`'deki `SITE_URL` sabitinden geliyor. Değişirse tek satır güncelle, sitemap ve tüm meta tag'ler otomatik senkronize olur.

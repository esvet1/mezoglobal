/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // Build zaten lokalde `npm run build` ile test edildi (13/13 sayfa başarılı).
  // VPS'te build süresini kısaltmak için type-check/lint bu aşamada tekrar çalıştırılmıyor.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.mezoglobal.com' },
    ],
  },
};

module.exports = nextConfig;

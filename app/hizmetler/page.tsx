import type { Metadata } from 'next';
import Link from 'next/link';
import { services, supportServices } from '@/lib/pages';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Etkinlik organizasyonu, konaklama, seyahat, kongre ve destinasyon yönetimi hizmetlerimiz.',
};

export default function HizmetlerPage() {
  return (
    <>
      <section className="hero inner">
        <div className="hero-inner">
          <div className="hero-tag upper">Hizmetlerimiz</div>
          <h1 className="upper">Altı Disiplin. Tek Operasyon.</h1>
          <p>Şanlıurfa&apos;da her ölçekte etkinlik ve konaklama operasyonu.</p>
        </div>
      </section>

      <section>
        <div className="section-tag upper">Büyük Ölçekli Etkinlikler</div>
        <h2 className="upper">Bayrak Projelerimiz</h2>
        <div className="services-grid" style={{ marginTop: 44 }}>
          {services.map((s, i) => (
            <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="svc-card">
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="upper">{s.heroTitle}</h3>
              <p>{s.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ borderBottom: 'none' }}>
        <div className="section-tag upper">Destek Hizmetleri</div>
        <h2 className="upper">Etkinliği Tamamlayan Hizmetler</h2>
        <div className="services-grid" style={{ marginTop: 44 }}>
          {supportServices.map((s, i) => (
            <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="svc-card">
              <div className="num">{String.fromCharCode(65 + i)}</div>
              <h3 className="upper">{s.heroTitle}</h3>
              <p>{s.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

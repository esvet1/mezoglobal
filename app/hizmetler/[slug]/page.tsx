import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allServices, getService, SITE_URL, SITE_NAME } from '@/lib/pages';

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};

  const url = `${SITE_URL}/hizmetler/${service.slug}`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.description,
      url,
      images: service.ogImage ? [service.ogImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const relatedServices = service.related
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.tag,
    name: service.heroTitle,
    description: service.description,
    areaServed: { '@type': 'City', name: service.area },
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: `${SITE_URL}/hizmetler` },
      { '@type': 'ListItem', position: 3, name: service.heroTitle, item: `${SITE_URL}/hizmetler/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="crumbs" aria-label="breadcrumb">
        <Link href="/">Ana Sayfa</Link> / <Link href="/hizmetler">Hizmetler</Link> / {service.heroTitle}
      </nav>

      <section className="hero inner">
        <div className="bgnum">{service.slug.slice(0, 2).toUpperCase()}</div>
        <div className="hero-inner">
          <div className="hero-tag upper">{service.heroTag}</div>
          <h1 className="upper">{service.heroTitle}</h1>
          <p>{service.heroDesc}</p>
          <div className="hero-actions">
            <Link href="/iletisim" className="btn btn-primary upper">
              Projeni Planla →
            </Link>
            <Link href="#kapsam" className="btn btn-outline upper">
              Kapsamı Gör
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="section-tag upper">Hizmet Hakkında</div>
        <h2 className="upper">
          Sahaya Çıkmadan Önce
          <br />
          Her Şey Planlanır.
        </h2>
        <p className="lead">{service.description}</p>
      </section>

      <section>
        <div className="section-tag upper">Çözdüğümüz Problemler</div>
        <h2 className="upper">
          Saha Operasyonu
          <br />
          Karmaşası Bitiyor.
        </h2>
        <div className="problem-grid">
          {service.problems.map((p, i) => (
            <div className="problem-card" key={i}>
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-tag upper">Süreç</div>
        <h2 className="upper">Brief&apos;ten Sahaya.</h2>
        <div className="process-list">
          {service.process.map((step, i) => (
            <div className="process-item" key={i}>
              <div className="pn">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="kapsam">
        <div className="section-tag upper">Kapsam</div>
        <h2 className="upper">Neler Dahil.</h2>
        <ul className="scope-list">
          {service.scope.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <div className="section-tag upper">Saha Örneği</div>
        <h2 className="upper">Kurumsal Uygulama.</h2>
        <div className="case">
          <div className="meta upper">{service.caseStudy.meta}</div>
          <h3 className="upper">{service.caseStudy.title}</h3>
          <p>{service.caseStudy.desc}</p>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section style={{ borderBottom: 'none' }}>
          <div className="section-tag upper">İlgili Hizmetler</div>
          <h2 className="upper">
            Bununla Birlikte
            <br />
            Bakılanlar.
          </h2>
          <div className="related">
            {relatedServices.map((rs) => (
              <Link key={rs!.slug} href={`/hizmetler/${rs!.slug}`}>
                <span className="rn">→</span>
                <span className="t">{rs!.heroTitle}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="cta-block">
        <h2 className="upper">
          {service.heroTitle}&apos;de
          <br />
          Sahaya Çıkalım.
        </h2>
        <Link href="/iletisim" className="btn btn-primary upper">
          Projeni Anlat →
        </Link>
      </section>
    </>
  );
}

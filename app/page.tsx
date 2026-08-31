import Link from 'next/link';
import Marquee from '@/components/Marquee';
import ContactForm from '@/components/ContactForm';
import { services, supportServices } from '@/lib/pages';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="bgnum">GT</div>
        <div className="hero-inner">
          <div className="hero-tag upper">Göbeklitepe / Teknofest / Gastronomi / Konser — Şanlıurfa</div>
          <h1 className="upper">
            Urfa&apos;da Etkinlik.
            <br />
            <span className="hi">Uçtan Uca</span> Operasyon.
          </h1>
          <p>
            Göbeklitepe kültür turlarından Teknofest&apos;e, gastronomi festivalinden büyük konserlere —
            Şanlıurfa&apos;daki her ölçekte etkinliği ve konaklamayı tek elden yönetiyoruz.
          </p>
          <div className="hero-actions">
            <Link href="/iletisim" className="btn btn-primary upper">
              Projeni Anlat →
            </Link>
            <Link href="/hizmetler" className="btn btn-outline upper">
              Hizmetleri Gör
            </Link>
          </div>
        </div>
      </section>

      <Marquee accent items={['GÖBEKLİTEPE', 'TEKNOFEST ŞANLIURFA', 'URFA GASTRONOMİ', 'URFA KONSER']} />

      <section id="services">
        <div className="section-head">
          <div>
            <div className="section-tag upper">Hizmetlerimiz</div>
            <h2 className="upper">
              Altı Disiplin.
              <br />
              Tek Operasyon.
            </h2>
          </div>
          <p>Her hizmet ayrı bir uzmanlık, hepsi aynı ekip tarafından koordine edilir.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="svc-card">
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="upper">{s.heroTitle}</h3>
              <p>{s.description}</p>
            </Link>
          ))}
          <Link href="/konaklama" className="svc-card">
            <div className="num">05</div>
            <h3 className="upper">Konaklama</h3>
            <p>Şehir merkezi ve grup konaklama ağı.</p>
          </Link>
        </div>
      </section>

      <section id="projects" style={{ padding: 0, borderBottom: 'none' }}>
        {services.map((s, i) => (
          <div className="stack-item" key={s.slug}>
            <div className="g">
              <div className="bignum">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="meta upper">{s.tag}</div>
                <h3 className="upper">{s.heroTitle}</h3>
                <div className="desc">{s.heroDesc}</div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="konaklama">
        <div className="section-head">
          <div>
            <div className="section-tag upper">Konaklama</div>
            <h2 className="upper">
              Şanlıurfa&apos;da
              <br />
              Otel Ağı.
            </h2>
          </div>
          <p>Etkinliğin ölçeğine göre şehir merkezinden Balıklıgöl çevresine kadar konaklama seçenekleri.</p>
        </div>
        <div className="services-grid">
          <div className="svc-card">
            <div className="num">A</div>
            <h3 className="upper">Şehir Merkezi Otelleri</h3>
            <p>Kongre ve iş seyahati için merkezi konumda toplu konaklama.</p>
          </div>
          <div className="svc-card">
            <div className="num">B</div>
            <h3 className="upper">Balıklıgöl Çevresi</h3>
            <p>Tarihi merkeze yürüme mesafesinde butik konaklama seçenekleri.</p>
          </div>
          <div className="svc-card">
            <div className="num">C</div>
            <h3 className="upper">Grup &amp; Kurumsal Bloklar</h3>
            <p>Rooming list yönetimi ile büyük ölçekli grup rezervasyonu.</p>
          </div>
        </div>
      </section>

      <section id="destek-hizmetleri">
        <div className="section-head">
          <div>
            <div className="section-tag upper">Destek Hizmetleri</div>
            <h2 className="upper">
              Etkinliği
              <br />
              Tamamlayanlar.
            </h2>
          </div>
          <p>Rehberlik, transfer ve kültürel programlarla etkinliğin her adımını kapsıyoruz.</p>
        </div>
        <div className="services-grid">
          {supportServices.map((s, i) => (
            <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="svc-card">
              <div className="num">{String.fromCharCode(65 + i)}</div>
              <h3 className="upper">{s.heroTitle}</h3>
              <p>{s.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Marquee
        speed="slow"
        items={[
          '"GÖBEKLİTEPE TURUNDA HİÇ AKSAMA YAŞAMADIK."',
          '"TEKNOFEST SAHASINDA TEK TELEFONLA HER ŞEY ÇÖZÜLDÜ."',
          '"URFA\'DA KONAKLAMADAN SAHNEYE HER ŞEY SORUNSUZDU."',
        ]}
      />

      <section id="contact">
        <div className="section-head">
          <div>
            <div className="section-tag upper">İletişim</div>
            <h2 className="upper">
              Projeni
              <br />
              Anlat.
            </h2>
          </div>
        </div>
        <ContactForm />
      </section>

      <div className="foot-cta">
        <h2 className="upper">
          Sahaya
          <br />
          Çıkalım.
        </h2>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <Link href="/iletisim" className="btn btn-primary upper">
            Projeni Anlat →
          </Link>
        </div>
      </div>
      <Marquee accent items={['MEZO GLOBAL', 'EVENTS', 'TRAVEL', 'HOSPITALITY']} />
    </>
  );
}

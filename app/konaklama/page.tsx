import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Şanlıurfa'da Konaklama",
  description: 'Şehir merkezi, Balıklıgöl çevresi ve grup/kurumsal konaklama seçenekleri.',
};

export default function KonaklamaPage() {
  return (
    <>
      <section className="hero inner">
        <div className="hero-inner">
          <div className="hero-tag upper">Konaklama</div>
          <h1 className="upper">Şanlıurfa&apos;da Otel Ağı</h1>
          <p>Etkinliğin ölçeğine göre şehir merkezinden Balıklıgöl çevresine kadar konaklama seçenekleri.</p>
        </div>
      </section>

      <section style={{ borderBottom: 'none' }}>
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
    </>
  );
}

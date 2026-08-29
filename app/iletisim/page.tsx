import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Projenizi anlatın, size en kısa sürede dönüş yapalım.',
};

export default function IletisimPage() {
  return (
    <>
      <section className="hero inner">
        <div className="hero-inner">
          <div className="hero-tag upper">İletişim</div>
          <h1 className="upper">Projeni Anlat.</h1>
          <p>Etkinlik, konaklama veya operasyon ihtiyacını anlat, 24 saat içinde dönelim.</p>
        </div>
      </section>

      <section style={{ borderBottom: 'none' }}>
        <form className="contact-form" action="/api/iletisim" method="post">
          <div className="contact-row">
            <div className="field">
              <label className="upper">Ad Soyad</label>
              <input type="text" name="ad_soyad" placeholder="Adınız" required />
            </div>
            <div className="field">
              <label className="upper">Firma</label>
              <input type="text" name="firma" placeholder="Firma Adı" />
            </div>
          </div>
          <div className="contact-row">
            <div className="field">
              <label className="upper">E-posta</label>
              <input type="email" name="eposta" placeholder="ornek@firma.com" required />
            </div>
            <div className="field">
              <label className="upper">Etkinlik Türü</label>
              <input type="text" name="etkinlik_turu" placeholder="Kongre / Lansman / Toplantı" />
            </div>
          </div>
          <div className="field">
            <label className="upper">Projenizi Anlatın</label>
            <textarea name="mesaj" rows={3} placeholder="Kısaca anlatın" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary upper">
              Projeyi Gönder →
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

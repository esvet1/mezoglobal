import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

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
        <ContactForm />
      </section>
    </>
  );
}

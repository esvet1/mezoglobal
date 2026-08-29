import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="foot-bottom">
        <span>© Mezo Global {new Date().getFullYear()}</span>
        <span>
          <Link href="/">Ana Sayfa</Link> · <Link href="/hizmetler">Hizmetler</Link> ·{' '}
          <Link href="/iletisim">İletişim</Link>
        </span>
      </div>
    </footer>
  );
}

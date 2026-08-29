'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/#projects', label: 'Projeler' },
  { href: '/konaklama', label: 'Konaklama' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header>
      <div className="logo upper">
        <Link href="/">Mezo Global</Link>
      </div>
      <nav>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`upper ${pathname === l.href ? 'is-active' : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/iletisim" className="btn btn-outline upper">
        Konuşalım
      </Link>
    </header>
  );
}

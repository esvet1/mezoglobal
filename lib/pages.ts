export const SITE_URL = 'https://www.mezoglobal.com';
export const SITE_NAME = 'Mezo Global';

export type ServicePage = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  area: string;
  ogImage?: string;
  heroTag: string;
  heroTitle: string;
  heroDesc: string;
  problems: string[];
  process: { title: string; desc: string }[];
  scope: string[];
  caseStudy: { meta: string; title: string; desc: string };
  related: string[]; // slugs
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

export const services: ServicePage[] = [
  {
    slug: 'goebeklitepe-turlari',
    title: 'Göbeklitepe Kültür Turları | Kurumsal Grup Organizasyonu — Mezo Global',
    description:
      "Göbeklitepe'de VIP saha ziyareti, uzman eşliğinde tur programı ve kurumsal grup organizasyonu.",
    tag: 'Arkeoturizm — Göbeklitepe / Şanlıurfa',
    area: 'Şanlıurfa',
    heroTag: 'Arkeoturizm — Göbeklitepe / Şanlıurfa',
    heroTitle: 'Göbeklitepe Kültür Turları',
    heroDesc:
      'Dünyanın bilinen en eski tapınak alanında, kurumsal gruplar ve VIP ziyaretçiler için uçtan uca organize edilmiş kültür turu deneyimi.',
    problems: [
      'Büyük grupların saha erişim izinleri ve zamanlama koordinasyonu.',
      'Transfer, rehberlik ve konaklamanın ayrı ayrı organize edilme yükü.',
      'Kurumsal davetli listelerinde VIP akış ve zamanlama hassasiyeti.',
    ],
    process: [
      { title: 'Brief', desc: 'Grup büyüklüğü, tarih ve amaç netleştirilir.' },
      { title: 'Planlama', desc: 'Saha izinleri, rehber ve transfer programı kurulur.' },
      { title: 'Koordinasyon', desc: 'Konaklama ve zamanlama diğer etkinliklerle senkronize edilir.' },
      { title: 'Saha Operasyonu', desc: 'Tur günü tam saha desteği ile yürütülür.' },
    ],
    scope: [
      'VIP saha ziyareti planlaması',
      'Uzman eşliğinde tur programı',
      'Transfer ve şoförlü araç koordinasyonu',
      'Grup rezervasyon ve saha izinleri',
      'Konaklama ile senkronize zamanlama',
      'Basın ve davetli listesi yönetimi',
    ],
    caseStudy: {
      meta: 'Kurumsal Kültür Turu — Şanlıurfa',
      title: '120 Kişilik Yönetici Grubu',
      desc: 'İki gün süren programda saha ziyareti, uzman rehberlik ve şehir merkezinde konaklama tek operasyon planı altında yürütüldü.',
    },
    related: ['teknofest-sanliurfa', 'urfa-gastronomi-festivali'],
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    slug: 'teknofest-sanliurfa',
    title: 'Teknofest Şanlıurfa Organizasyonu | Mezo Global',
    description: 'Teknofest Şanlıurfa etkinliğinde saha operasyonu, katılımcı ve stant koordinasyonu.',
    tag: 'Teknoloji Festivali — Şanlıurfa',
    area: 'Şanlıurfa',
    heroTag: 'Teknoloji Festivali — Şanlıurfa',
    heroTitle: 'Teknofest Şanlıurfa',
    heroDesc: 'Çok günlük, büyük ölçekli teknoloji festivalinde uçtan uca saha ve katılımcı operasyonu.',
    problems: [
      'Yüzlerce katılımcı ve stantın eş zamanlı koordinasyonu.',
      'Çok günlük etkinlikte lojistik ve konaklama planlaması.',
      'Yoğun ziyaretçi akışında güvenlik ve yönlendirme.',
    ],
    process: [
      { title: 'Brief', desc: 'Katılımcı sayısı, alan planı ve süre netleştirilir.' },
      { title: 'Planlama', desc: 'Stant, konaklama ve transfer programı kurulur.' },
      { title: 'Koordinasyon', desc: 'Saha ekipleri ve tedarikçilerle senkronizasyon.' },
      { title: 'Saha Operasyonu', desc: 'Etkinlik boyunca kesintisiz saha desteği.' },
    ],
    scope: [
      'Stant ve alan koordinasyonu',
      'Katılımcı ve ekip konaklaması',
      'Transfer ve lojistik yönetimi',
      'Saha güvenliği koordinasyonu',
      'Basın ve VIP davetli yönetimi',
      'Çok günlük operasyon takibi',
    ],
    caseStudy: {
      meta: 'Teknoloji Festivali — Şanlıurfa',
      title: 'Çok Günlük Saha Operasyonu',
      desc: 'Yüzlerce katılımcı ve stant, tek operasyon merkezinden koordine edildi; konaklama ve transfer kesintisiz yürütüldü.',
    },
    related: ['goebeklitepe-turlari', 'urfa-konser-organizasyonu'],
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    slug: 'urfa-gastronomi-festivali',
    title: 'Urfa Gastronomi Festivali Organizasyonu | Mezo Global',
    description: 'Şanlıurfa gastronomi festivali için etkinlik kurgusu, stant ve davetli yönetimi.',
    tag: 'Gastronomi Festivali — Şanlıurfa',
    area: 'Şanlıurfa',
    heroTag: 'Gastronomi Festivali — Şanlıurfa',
    heroTitle: 'Urfa Gastronomi Festivali',
    heroDesc: 'Yöresel mutfağı öne çıkaran, stant ve tadım alanlarıyla kurgulanmış festival organizasyonu.',
    problems: [
      'Onlarca lezzet standının aynı anda operasyonu.',
      'Tadım alanı düzeni ve ziyaretçi akış planlaması.',
      'Basın ve davetli listesi yönetimi.',
    ],
    process: [
      { title: 'Brief', desc: 'Festival teması, katılımcı stant sayısı belirlenir.' },
      { title: 'Planlama', desc: 'Alan düzeni ve tedarikçi koordinasyonu kurulur.' },
      { title: 'Koordinasyon', desc: 'Basın ve davetli programı senkronize edilir.' },
      { title: 'Saha Operasyonu', desc: 'Festival günü tam saha desteği ile yürütülür.' },
    ],
    scope: [
      'Stant ve tadım alanı düzeni',
      'Yerel üretici koordinasyonu',
      'Basın ve davetli yönetimi',
      'Sahne ve program akışı',
      'Ziyaretçi yönlendirme',
      'Saha operasyon ekibi',
    ],
    caseStudy: {
      meta: 'Gastronomi Festivali — Şanlıurfa',
      title: '40 Standlı Festival Alanı',
      desc: 'Yerel üreticilerle koordineli, iki günlük festival tek operasyon planı altında sorunsuz yürütüldü.',
    },
    related: ['urfa-konser-organizasyonu', 'goebeklitepe-turlari'],
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    slug: 'urfa-konser-organizasyonu',
    title: 'Urfa Konser Organizasyonları | Mezo Global',
    description: "Şanlıurfa'da sahne ve prodüksiyon yönetimi, sanatçı konaklaması, saha operasyonu.",
    tag: 'Konser & Sahne — Şanlıurfa',
    area: 'Şanlıurfa',
    heroTag: 'Konser & Sahne — Şanlıurfa',
    heroTitle: 'Urfa Konser Organizasyonları',
    heroDesc: 'Sahne kurulumundan sanatçı konaklamasına, büyük ölçekli konser prodüksiyonu.',
    problems: [
      'Sahne ve prodüksiyon ekibinin zamanlaması.',
      'Sanatçı ve ekip konaklama/transfer koordinasyonu.',
      'Kalabalık akışı ve güvenlik planlaması.',
    ],
    process: [
      { title: 'Brief', desc: 'Sahne ölçeği, katılımcı sayısı netleştirilir.' },
      { title: 'Planlama', desc: 'Prodüksiyon, konaklama ve transfer programı kurulur.' },
      { title: 'Koordinasyon', desc: 'Güvenlik ve kalabalık akışı planı senkronize edilir.' },
      { title: 'Saha Operasyonu', desc: 'Konser günü tam saha ve sahne desteği.' },
    ],
    scope: [
      'Sahne ve prodüksiyon yönetimi',
      'Sanatçı ve ekip konaklaması',
      'Transfer koordinasyonu',
      'Kalabalık akış planlaması',
      'Güvenlik koordinasyonu',
      'Basın ve VIP alan yönetimi',
    ],
    caseStudy: {
      meta: 'Konser Organizasyonu — Şanlıurfa',
      title: 'Açık Hava Ana Sahne Prodüksiyonu',
      desc: 'Sahne kurulumundan sanatçı ağırlamaya, tüm süreç tek operasyon ekibiyle koordine edildi.',
    },
    related: ['urfa-gastronomi-festivali', 'teknofest-sanliurfa'],
    changefreq: 'monthly',
    priority: 0.8,
  },
];

export const supportServices: ServicePage[] = [
  {
    slug: 'sanliurfa-rehberlik',
    title: 'Şanlıurfa Rehberlik Hizmeti | Profesyonel Turist Rehberi — Mezo Global',
    description:
      'Şanlıurfa\'da profesyonel turist rehberliği: Göbeklitepe, Balıklıgöl, Kale ve tarihi çarşı turlarında uzman eşliğinde gezi.',
    tag: 'Rehberlik Hizmeti — Şanlıurfa',
    area: 'Şanlıurfa',
    heroTag: 'Profesyonel Rehberlik — Şanlıurfa',
    heroTitle: 'Şanlıurfa Rehberlik Hizmeti',
    heroDesc:
      'Göbeklitepe gezi programından Balıklıgöl ve tarihi çarşıya, kurumsal gruplar için lisanslı rehber eşliğinde şehir turu.',
    problems: [
      'Grupların tarihi bölgelerde doğru bilgiyle yönlendirilme ihtiyacı.',
      'Çok dilli katılımcılarda rehberlik ve çeviri koordinasyonu.',
      'Tur programının diğer etkinliklerle zamanlama uyumu.',
    ],
    process: [
      { title: 'Brief', desc: 'Grup profili, dil ihtiyacı ve gezi süresi belirlenir.' },
      { title: 'Planlama', desc: 'Rota, rehber ataması ve zamanlama kurulur.' },
      { title: 'Koordinasyon', desc: 'Transfer ve konaklama ile senkronize edilir.' },
      { title: 'Saha Operasyonu', desc: 'Tur boyunca kesintisiz rehberlik desteği.' },
    ],
    scope: [
      'Lisanslı profesyonel rehber ataması',
      'Göbeklitepe, Balıklıgöl, Kale turu',
      'Çok dilli rehberlik (talebe göre)',
      'Tarihi çarşı ve müze gezisi',
      'Transfer ile senkronize program',
      'Kurumsal grup rehberliği',
    ],
    caseStudy: {
      meta: 'Rehberlik Hizmeti — Şanlıurfa',
      title: 'Uluslararası Delegasyon Turu',
      desc: 'Çok dilli bir kurumsal delegasyona, şehir merkezi ve Göbeklitepe\'yi kapsayan iki günlük rehberli tur programı sunuldu.',
    },
    related: ['goebeklitepe-turlari', 'havalimani-transfer'],
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    slug: 'havalimani-transfer',
    title: 'Şanlıurfa Havalimanı Transfer Hizmeti | Mezo Global',
    description:
      'GAP Havalimanı transfer hizmeti: kurumsal grup karşılama, şoförlü araç ve otel-havalimanı-etkinlik alanı koordinasyonu.',
    tag: 'Transfer Hizmeti — Şanlıurfa',
    area: 'Şanlıurfa',
    heroTag: 'Havalimanı Transferi — Şanlıurfa',
    heroTitle: 'Şanlıurfa Havalimanı Transferleri',
    heroDesc: 'GAP Havalimanı\'ndan otel, etkinlik alanı ve şehir merkezine kesintisiz, şoförlü grup transferi.',
    problems: [
      'Farklı uçuşlarla gelen kalabalık grupların karşılanması.',
      'Havalimanı-otel-etkinlik alanı arası çoklu transfer koordinasyonu.',
      'Uçuş gecikmelerinde esnek planlama ihtiyacı.',
    ],
    process: [
      { title: 'Brief', desc: 'Uçuş bilgileri ve grup büyüklüğü toplanır.' },
      { title: 'Planlama', desc: 'Araç filosu ve şoför ataması yapılır.' },
      { title: 'Koordinasyon', desc: 'Konaklama ve etkinlik programıyla senkronize edilir.' },
      { title: 'Saha Operasyonu', desc: 'Karşılama ve transfer kesintisiz yürütülür.' },
    ],
    scope: [
      'Havalimanı karşılama ve yönlendirme',
      'Şoförlü araç filosu (binek/midibüs/otobüs)',
      'Çoklu uçuş koordinasyonu',
      'Otel ve etkinlik alanına transfer',
      'Uçuş gecikmesi takibi',
      'VIP karşılama hizmeti',
    ],
    caseStudy: {
      meta: 'Transfer Hizmeti — Şanlıurfa',
      title: '300 Kişilik Teknofest Katılımcı Transferi',
      desc: 'Farklı uçuşlarla gelen 300 katılımcı, havalimanından etkinlik alanına ve konaklama noktalarına aksamadan ulaştırıldı.',
    },
    related: ['sanliurfa-rehberlik', 'teknofest-sanliurfa'],
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    slug: 'sanliurfa-sira-geceleri',
    title: 'Şanlıurfa Sıra Geceleri Organizasyonu | Mezo Global',
    description:
      'Geleneksel Şanlıurfa Sıra Gecesi organizasyonu: kurumsal davetler ve gruplar için otantik müzik, sohbet ve ikram deneyimi.',
    tag: 'Kültürel Etkinlik — Şanlıurfa',
    area: 'Şanlıurfa',
    heroTag: 'Geleneksel Kültür Etkinliği — Şanlıurfa',
    heroTitle: 'Şanlıurfa Sıra Geceleri',
    heroDesc: 'UNESCO tarafından da tanınan Urfa Sıra Gecesi geleneğini kurumsal davetler için otantik bir deneyime dönüştürüyoruz.',
    problems: [
      'Otantik mekân ve sanatçı koordinasyonu ihtiyacı.',
      'Kurumsal davetlerde protokol ve ağırlama hassasiyeti.',
      'Yerel ikram ve program akışının planlanması.',
    ],
    process: [
      { title: 'Brief', desc: 'Davetli sayısı ve program amacı netleştirilir.' },
      { title: 'Planlama', desc: 'Mekân, sanatçı ve ikram programı kurulur.' },
      { title: 'Koordinasyon', desc: 'Transfer ve konaklama ile senkronize edilir.' },
      { title: 'Saha Operasyonu', desc: 'Gece boyunca tam saha ve ağırlama desteği.' },
    ],
    scope: [
      'Otantik mekân seçimi ve kurulumu',
      'Yerel sanatçı ve müzik programı',
      'Geleneksel ikram organizasyonu',
      'Davetli karşılama ve protokol',
      'Transfer ile senkronize zamanlama',
      'Kurumsal davet yönetimi',
    ],
    caseStudy: {
      meta: 'Kültürel Etkinlik — Şanlıurfa',
      title: 'Kurumsal Davet Gecesi',
      desc: '80 kişilik yönetici davetinde otantik mekan, yerel müzik ve ikramla geleneksel bir Sıra Gecesi deneyimi sunuldu.',
    },
    related: ['urfa-gastronomi-festivali', 'sanliurfa-rehberlik'],
    changefreq: 'monthly',
    priority: 0.7,
  },
];

export const allServices = [...services, ...supportServices];

export const staticPages = [
  { path: '/', changefreq: 'weekly' as const, priority: 1.0 },
  { path: '/konaklama', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/iletisim', changefreq: 'yearly' as const, priority: 0.6 },
];

export function getService(slug: string) {
  return allServices.find((s) => s.slug === slug);
}

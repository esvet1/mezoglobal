import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { ad_soyad, firma, eposta, etkinlik_turu, mesaj } = body;

    if (!ad_soyad || !eposta) {
      return NextResponse.json({ ok: false, error: 'Ad soyad ve e-posta zorunlu.' }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
      console.error('SMTP env değişkenleri eksik: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO gerekli.');
      return NextResponse.json({ ok: false, error: 'Sunucu mail yapılandırması eksik.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465, // 465 = SSL, 587 = STARTTLS
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Mezo Global Web Formu" <${SMTP_USER}>`,
      to: MAIL_TO,
      replyTo: eposta,
      subject: `Yeni proje talebi — ${ad_soyad}${firma ? ' / ' + firma : ''}`,
      text: [
        `Ad Soyad: ${ad_soyad}`,
        `Firma: ${firma || '-'}`,
        `E-posta: ${eposta}`,
        `Etkinlik Türü: ${etkinlik_turu || '-'}`,
        '',
        'Mesaj:',
        mesaj || '-',
      ].join('\n'),
      html: `
        <h2>Yeni proje talebi</h2>
        <p><b>Ad Soyad:</b> ${escapeHtml(ad_soyad)}</p>
        <p><b>Firma:</b> ${escapeHtml(firma || '-')}</p>
        <p><b>E-posta:</b> ${escapeHtml(eposta)}</p>
        <p><b>Etkinlik Türü:</b> ${escapeHtml(etkinlik_turu || '-')}</p>
        <p><b>Mesaj:</b><br/>${escapeHtml(mesaj || '-').replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('İletişim formu gönderim hatası:', err);
    return NextResponse.json({ ok: false, error: 'Gönderim sırasında bir hata oluştu.' }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

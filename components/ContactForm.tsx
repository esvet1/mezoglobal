'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/iletisim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || 'Gönderim başarısız.');
      setStatus('ok');
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Bir hata oluştu, tekrar dene.');
    }
  }

  if (status === 'ok') {
    return (
      <div className="case" style={{ marginTop: 0 }}>
        <div className="meta upper">Teşekkürler</div>
        <h3 className="upper">Mesajın Ulaştı.</h3>
        <p>En kısa sürede dönüş yapacağız.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary upper" disabled={status === 'sending'}>
          {status === 'sending' ? 'Gönderiliyor…' : 'Projeyi Gönder →'}
        </button>
        {status === 'error' && (
          <p style={{ color: '#DFE104', marginTop: 12, fontSize: 13 }}>{errorMsg}</p>
        )}
      </div>
    </form>
  );
}

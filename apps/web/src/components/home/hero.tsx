import { ArrowUpRight } from 'lucide-react';
import { copy } from '@/data/site-copy';
import type { Locale } from '@/lib/i18n';

const LOGO = '/KamalLogo_ColoredLogo_RGB.svg';

export function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-brand">
        <img src={LOGO} alt={locale === 'ar' ? t.brandAr : t.brandEn} />
      </div>
      <div className="launch-label">
        <span /> {t.comingSoon}
      </div>
      <h1 id="hero-title">{locale === 'ar' ? t.brandAr : t.brandEn}</h1>
      <div className="hero-rule" />
      <h2>
        {t.headline} <span>{t.headlineMuted}</span>
      </h2>
      <p>{t.intro}</p>
      <a className="primary-link" href="mailto:info@kamal-co.sa">
        {t.cta} <ArrowUpRight size={19} strokeWidth={1.6} />
      </a>
      <div className="hero-footnote">
        <span className="short-rule" /> KAMAL-CO.SA <span className="short-rule" />
      </div>
    </section>
  );
}

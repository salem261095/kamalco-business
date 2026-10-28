import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { copy } from '@/data/site-copy';
import type { Locale } from '@/lib/i18n';

export function Contact({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-intro">
        <span className="eyebrow">{t.contactEyebrow}</span>
        <h2 id="contact-title">{t.contactTitle}</h2>
      </div>
      <a className="contact-link" href="mailto:info@kamal-co.sa">
        <Mail size={21} strokeWidth={1.5} />
        <span>
          <span className="contact-label">{t.emailLabel}</span>
          <span className="contact-value">info@kamal-co.sa</span>
        </span>
        <ArrowUpRight className="contact-arrow" size={20} strokeWidth={1.5} />
      </a>
      <a className="contact-link" href="tel:+966547503037">
        <Phone size={21} strokeWidth={1.5} />
        <span>
          <span className="contact-label">{t.callLabel}</span>
          <span className="contact-value" dir="ltr">+966547503037</span>
        </span>
        <ArrowUpRight className="contact-arrow" size={20} strokeWidth={1.5} />
      </a>
      <div className="contact-link contact-plain">
        <MapPin size={21} strokeWidth={1.5} />
        <span>
          <span className="contact-label">{t.addressLabel}</span>
          <span className="contact-value">{t.addressValue}</span>
        </span>
      </div>
    </section>
  );
}

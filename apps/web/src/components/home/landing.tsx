import type { Locale } from '@/lib/i18n';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Hero } from '@/components/home/hero';
import { Contact } from '@/components/home/contact';

export function Landing({ locale }: { locale: Locale }) {
  return (
    <div className="page-frame" lang={locale}>
      <SiteHeader locale={locale} />
      <main>
        <Hero locale={locale} />
      </main>
      <footer className="contact-wrapper">
        <Contact locale={locale} />
        <SiteFooter locale={locale} />
      </footer>
    </div>
  );
}

import { localePath, type Locale } from '@/lib/i18n';

export function SiteHeader({ locale }: { locale: Locale }) {
  const other: Locale = locale === 'ar' ? 'en' : 'ar';

  return (
    <header className="site-header">
      <div className="header-actions">
        <a className="lang-switch" href={localePath(other)} hrefLang={other} lang={other}>
          {other === 'ar' ? 'العربية' : 'English'}
        </a>
      </div>
    </header>
  );
}


import { copy } from '@/data/site-copy';
import type { Locale } from '@/lib/i18n';

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <div className="site-footer">
      <span>{t.footerRights}</span>
      <div>
        <span className="footer-domain">kamal-co.sa</span>
      </div>
    </div>
  );
}

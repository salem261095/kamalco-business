import { useLocation } from 'react-router';
import { useCookieBanner } from '@/hooks/use-cookie-banner';
import { copy } from '@/data/site-copy';
import { localeFromPathname } from '@/lib/i18n';

export function CookieBanner() {
  const { pathname } = useLocation();
  const t = copy[localeFromPathname(pathname)];
  const banner = useCookieBanner();
  if (!banner.isOpen) return null;
  return (
    <section className="cookie-banner" role="dialog" aria-label={t.cookieTitle}>
      <div>
        <h2>{t.cookieTitle}</h2>
        <p>{t.cookieBody}</p>
      </div>
      {banner.isCustomizing && (
        <fieldset>
          <legend>{t.cookieLegend}</legend>
          <label>
            <input type="checkbox" checked={banner.choices.analytics} onChange={(e) => banner.setChoice('analytics', e.target.checked)} />
            <span>{t.analytics}<small>{t.analyticsHint}</small></span>
          </label>
          <label>
            <input type="checkbox" checked={banner.choices.marketing} onChange={(e) => banner.setChoice('marketing', e.target.checked)} />
            <span>{t.marketing}<small>{t.marketingHint}</small></span>
          </label>
          <label>
            <input type="checkbox" checked={banner.choices.platformAnalytics} onChange={(e) => banner.setChoice('platformAnalytics', e.target.checked)} />
            <span>{t.platform}<small>{t.platformHint}</small></span>
          </label>
        </fieldset>
      )}
      <div className="cookie-actions">
        <button type="button" onClick={banner.rejectOptional}>{t.reject}</button>
        <button type="button" onClick={banner.acceptAll}>{t.accept}</button>
        <button type="button" className="cookie-customize" onClick={banner.isCustomizing ? banner.saveChoices : banner.customize}>
          {banner.isCustomizing ? t.save : t.customize}
        </button>
      </div>
    </section>
  );
}

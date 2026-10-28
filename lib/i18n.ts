export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'ar'] as const;

export type Locale = (typeof LOCALES)[number];

export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split('/')[1] as Locale;
  return LOCALES.includes(segment) ? segment : DEFAULT_LOCALE;
}

export function localePath(locale: Locale, hash = ''): string {
  const base = locale === DEFAULT_LOCALE ? '/' : `/${locale}`;
  return hash ? `${base}${hash}` : base;
}

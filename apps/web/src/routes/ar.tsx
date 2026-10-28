import type { Route } from './+types/ar';
import { seo } from '@/lib/seo';
import { Landing } from '@/components/home/landing';
import { copy } from '@/data/site-copy';

const ORIGIN = 'https://kamal-co.sa';

export function meta({ matches, location }: Route.MetaArgs) {
  const t = copy.ar;
  return seo({ matches, location }, {
    title: t.metaTitle,
    description: t.metaDescription,
    image: `${ORIGIN}/KamalLogo_ColoredLogo_RGB.svg`,
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebSite', name: t.brandAr, alternateName: t.brandEn, url: `${ORIGIN}/ar`, inLanguage: 'ar' },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: t.brandAr,
        alternateName: t.brandEn,
        url: ORIGIN,
        email: 'info@kamal-co.sa',
        telephone: '+966547503037',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'شارع الأسرة، حي العقيق',
          addressLocality: 'الخبر',
          addressCountry: 'SA',
        },
      },
    ],
  });
}

export function links() {
  return [
    { rel: 'alternate', hrefLang: 'en', href: `${ORIGIN}/` },
    { rel: 'alternate', hrefLang: 'ar', href: `${ORIGIN}/ar` },
    { rel: 'alternate', hrefLang: 'x-default', href: `${ORIGIN}/` },
  ];
}

export default function ArabicHome() {
  return <Landing locale="ar" />;
}

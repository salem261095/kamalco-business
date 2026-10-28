import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { Landing } from '@/components/home/landing';
import { copy } from '@/data/site-copy';

const ORIGIN = 'https://kamal-co.sa';

export function meta({ matches, location }: Route.MetaArgs) {
  const t = copy.en;
  return seo({ matches, location }, {
    title: t.metaTitle,
    description: t.metaDescription,
    image: `${ORIGIN}/KamalLogo_ColoredLogo_RGB.svg`,
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebSite', name: t.brandEn, alternateName: t.brandAr, url: ORIGIN, inLanguage: ['en', 'ar'] },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: t.brandEn,
        alternateName: t.brandAr,
        url: ORIGIN,
        email: 'info@kamal-co.sa',
        telephone: '+966547503037',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Alosrah St., Al Aqiq District',
          addressLocality: 'Al Khobar',
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

export default function HomePage() {
  return <Landing locale="en" />;
}

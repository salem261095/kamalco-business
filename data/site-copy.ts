import type { Locale } from '@/lib/i18n';

export type SiteCopy = {
  brandEn: string;
  brandAr: string;
  comingSoon: string;
  headline: string;
  headlineMuted: string;
  intro: string;
  cta: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesLead: string;
  services: { title: string; desc: string }[];
  contactEyebrow: string;
  contactTitle: string;
  emailLabel: string;
  callLabel: string;
  addressLabel: string;
  addressValue: string;
  mapsUrl: string;
  contactNav: string;
  footerRights: string;
  cookieTitle: string;
  cookieBody: string;
  cookieLegend: string;
  analytics: string;
  analyticsHint: string;
  marketing: string;
  marketingHint: string;
  platform: string;
  platformHint: string;
  reject: string;
  accept: string;
  customize: string;
  save: string;
  metaTitle: string;
  metaDescription: string;
};

const servicesEn = [
  { title: 'Human Resources', desc: 'Recruitment, onboarding, payroll and HR operations handled end to end.' },
  { title: 'Government Relations', desc: 'Licenses, permits and official transactions managed on your behalf.' },
  { title: 'Digital Platforms', desc: 'Setup and administration of your electronic government and business platforms.' },
  { title: 'Personnel Affairs', desc: 'Contracts, Iqama, labour files and employee documentation kept current.' },
  { title: 'Administrative Services', desc: 'Day-to-day administrative workflows that keep your operation running.' },
];

const servicesAr = [
  { title: 'الموارد البشرية', desc: 'التوظيف والاستقطاب والرواتب وعمليات الموارد البشرية من البداية حتى النهاية.' },
  { title: 'العلاقات الحكومية', desc: 'التراخيص والتصاريح والمعاملات الرسمية تُدار نيابةً عن منشأتكم.' },
  { title: 'المنصات الإلكترونية', desc: 'إعداد وإدارة منصاتكم الحكومية والتجارية الإلكترونية.' },
  { title: 'شؤون الموظفين', desc: 'العقود والإقامات وملفات العمل ووثائق الموظفين محدّثة دائماً.' },
  { title: 'الخدمات الإدارية', desc: 'المهام الإدارية اليومية التي تُبقي أعمالكم في حركة منتظمة.' },
];

export const copy: Record<Locale, SiteCopy> = {
  en: {
    brandEn: 'Kamal Business Services',
    brandAr: 'كمال الأعمال المشتركة',
    comingSoon: 'WEBSITE COMING SOON',
    headline: 'Your strategic business partner.',
    headlineMuted: 'Coming soon.',
    intro:
      'Kamal Business Services is a Saudi company providing integrated business support services that help owners manage administrative and operational work with efficiency and professionalism.',
    cta: 'Get in touch',
    servicesEyebrow: 'WHAT WE DO',
    servicesTitle: 'A full spectrum of business support, under one partner.',
    servicesLead:
      'We take on human resources, government relations, digital platforms, personnel affairs and administrative services — so leadership can focus on the core business and its growth.',
    services: servicesEn,
    contactEyebrow: 'LET’S CONNECT',
    contactTitle: 'We’re just a message away.',
    emailLabel: 'EMAIL US',
    callLabel: 'CALL US',
    addressLabel: 'VISIT US',
    addressValue: 'Alosrah St., Al Aqiq District, Al Khobar, Saudi Arabia',
    mapsUrl: 'https://maps.google.com/?q=Alosrah+St%2C+Al+Aqiq+District%2C+Al+Khobar%2C+Saudi+Arabia',
    contactNav: 'Contact us',
    footerRights: '© 2026 Kamal Business Services. All rights reserved.',
    cookieTitle: 'Your cookie preferences',
    cookieBody: 'Essential cookies keep this site working. You choose whether to allow optional analytics and marketing cookies.',
    cookieLegend: 'Optional cookies',
    analytics: 'Analytics',
    analyticsHint: 'Visitor statistics for this website.',
    marketing: 'Marketing',
    marketingHint: 'Ad measurement and personalised ads.',
    platform: 'Platform analytics',
    platformHint: 'Helps Hostinger understand and improve its platform without directly identifying you.',
    reject: 'Reject optional',
    accept: 'Accept all',
    customize: 'Customize',
    save: 'Save choices',
    metaTitle: 'Kamal Business Services — Business Support Services',
    metaDescription:
      'Kamal Business Services (كمال الأعمال المشتركة) is a Saudi firm providing integrated business support — HR, government relations, digital platforms, personnel affairs and administrative services.',
  },
  ar: {
    brandEn: 'Kamal Business Services',
    brandAr: 'كمال الأعمال المشتركة',
    comingSoon: 'الموقع قيد الإطلاق',
    headline: 'شريككم الاستراتيجي في الأعمال.',
    headlineMuted: 'قريباً.',
    intro:
      'كمال الأعمال المشتركة شركة سعودية متخصصة في تقديم خدمات الأعمال المساندة للمنشآت، من خلال حلول متكاملة تساعد أصحاب الأعمال على إدارة عملياتهم الإدارية والتشغيلية بكفاءة واحترافية.',
    cta: 'تواصلوا معنا',
    servicesEyebrow: 'ماذا نقدّم',
    servicesTitle: 'طيف كامل من خدمات الأعمال المساندة، تحت شريك واحد.',
    servicesLead:
      'نتولى الموارد البشرية والعلاقات الحكومية والمنصات الإلكترونية وشؤون الموظفين والخدمات الإدارية، ليتفرغ الإدارة لنشاطها الأساسي ونمو أعمالها.',
    services: servicesAr,
    contactEyebrow: 'لنتواصل',
    contactTitle: 'نحن على بُعد رسالة واحدة.',
    emailLabel: 'راسلونا',
    callLabel: 'اتصلوا بنا',
    addressLabel: 'زورونا',
    addressValue: 'الخبر، حي العقيق، شارع الأسرة، المملكة العربية السعودية',
    mapsUrl: 'https://maps.google.com/?q=%D8%A7%D9%84%D8%AE%D8%A8%D8%B1%D8%8C+%D8%AD%D9%8A+%D8%A7%D9%84%D8%B9%D9%82%D9%8A%D9%82%D8%8C+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%A3%D8%B3%D8%B1%D8%A9%D8%8C+%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9',
    contactNav: 'تواصلوا معنا',
    footerRights: '© 2026 كمال الأعمال المشتركة. جميع الحقوق محفوظة.',
    cookieTitle: 'تفضيلات ملفات تعريف الارتباط',
    cookieBody: 'الملفات الأساسية تُبقي الموقع يعمل. أنتم تختارون السماح بملفات التحليلات والتسويق الاختيارية.',
    cookieLegend: 'ملفات اختيارية',
    analytics: 'التحليلات',
    analyticsHint: 'إحصاءات الزوار لهذا الموقع.',
    marketing: 'التسويق',
    marketingHint: 'قياس الإعلانات والإعلانات المخصصة.',
    platform: 'تحليلات المنصة',
    platformHint: 'تساعد Hostinger على فهم منصتها وتحسينها دون التعرف عليكم مباشرة.',
    reject: 'رفض الاختيارية',
    accept: 'قبول الكل',
    customize: 'تخصيص',
    save: 'حفظ الاختيارات',
    metaTitle: 'كمال الأعمال المشتركة — خدمات الأعمال المساندة',
    metaDescription:
      'كمال الأعمال المشتركة (Kamal Business Services) شركة سعودية تقدّم خدمات أعمال مساندة متكاملة: الموارد البشرية، العلاقات الحكومية، المنصات الإلكترونية، شؤون الموظفين والخدمات الإدارية.',
  },
};

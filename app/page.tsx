import type { Metadata } from 'next';
import { Landing } from '@/components/home/landing';

export const metadata: Metadata = {
	title: 'Kamal Business Services | Business Support Services',
	description: 'Kamal Business Services provides integrated business support services in Saudi Arabia.',
	alternates: { canonical: '/', languages: { en: '/', ar: '/ar' } },
};

export default function HomePage() {
	return <Landing locale="en" />;
}
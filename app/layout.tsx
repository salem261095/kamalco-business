import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Kamal Business Services',
	description: 'Integrated business support services in Saudi Arabia.',
	icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
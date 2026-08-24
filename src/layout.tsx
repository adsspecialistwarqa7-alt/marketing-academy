import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic, Tajawal } from 'next/font/google';
import './globals.css';

// خط العناوين: وزن أثقل وحضور بصري أقوى
const displayFont = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['600', '700'],
  variable: '--font-display',
});

// خط النصوص: مريح للقراءة الطويلة
const bodyFont = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'أكاديمية التسويق الرقمي',
  description: 'منصة تدريب عربية متخصصة في التسويق الرقمي — Media Buying, SEO, Social Media وأكثر',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

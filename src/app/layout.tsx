import type { Metadata } from 'next';
import './globals.css';
import { MainLayout } from '@/components/layout/main-layout';

export const metadata: Metadata = {
  title: 'VPK Nursing College',
  description: 'The Dr V P Kanakaraddi Memorial College Of Nursing, Mahalingpur',
  manifest: '/manifest.json',
  themeColor: '#0f172a',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'VPK Nursing College',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'VPK Nursing College',
    title: 'VPK Nursing College',
    description: 'The Dr V P Kanakaraddi Memorial College Of Nursing, Mahalingpur',
  },
  twitter: {
    card: 'summary',
    title: 'VPK Nursing College',
    description: 'The Dr V P Kanakaraddi Memorial College Of Nursing, Mahalingpur',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth fusion-extension-loaded">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/Images/logo.jpeg" />
        <link rel="apple-touch-icon" href="/Images/logo.jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-body antialiased bg-background">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

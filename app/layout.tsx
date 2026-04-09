import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Temwani Msiska - Senior Systems Developer | Digital Public Infrastructure',
  description: 'Professional portfolio of Temwani Msiska, Senior Systems Developer at SMART Zambia Institute with 8+ years of experience in digital public infrastructure, GovTech, and systems development.',
  keywords: 'Senior Systems Developer, Digital Public Infrastructure, GovTech, Smart Zambia, SMART Zambia Institute, Web Development, Code SHEROs, Code Bloom',
  authors: [{ name: 'Temwani Msiska' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Temwani Msiska - Business Analyst & Systems Developer',
    description: 'Professional portfolio showcasing expertise in business analysis, systems development, and digital transformation across Africa.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Temwani Msiska - Senior Systems Developer | Digital Public Infrastructure',
    description: 'Professional portfolio showcasing expertise in digital public infrastructure, GovTech, and systems development across Africa.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}

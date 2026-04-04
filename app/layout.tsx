import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Temwani Msiska - Business Analyst & Systems Developer',
  description: 'Professional portfolio of Temwani Msiska, an accomplished Business Analyst and Systems Developer with 8+ years of experience in digital transformation and systems development.',
  keywords: 'Business Analyst, Systems Developer, Digital Transformation, Smart Zambia, Government Service Bus, Web Development, Database Management, Cloud Solutions',
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
    title: 'Temwani Msiska - Business Analyst & Systems Developer',
    description: 'Professional portfolio showcasing expertise in business analysis, systems development, and digital transformation across Africa.',
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

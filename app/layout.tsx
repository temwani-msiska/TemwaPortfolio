import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
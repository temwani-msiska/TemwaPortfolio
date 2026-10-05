import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Portfolio', mobile: true },
  { href: '/blog', label: 'Blog', mobile: true },
  { href: '/#projects', label: 'Projects', mobile: false },
  { href: '/#experience', label: 'Experience', mobile: false },
];

export function BlogNav() {
  return (
    <div className="sticky top-2 md:top-3 z-40 px-2 md:px-5">
      <div className="bg-white/90 backdrop-blur-md rounded-full px-4 md:px-8 py-3 flex items-center justify-between border border-neutral-200">
        <Link href="/" className="text-sm font-heading font-bold text-neutral-900">
          TM
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm transition-colors',
                link.href === '/blog' ? 'text-neutral-900 font-medium' : 'text-neutral-500 hover:text-neutral-900',
                !link.mobile && 'hidden md:inline'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/#contact"
          className="bg-neutral-900 text-white rounded-full px-4 md:px-5 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
        >
          <span className="hidden sm:inline">Let&apos;s Talk</span>
          <span className="sm:hidden">Talk</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

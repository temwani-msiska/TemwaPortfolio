'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import type { ArticleHeading } from './article-body';

export function TableOfContents({ headings }: { headings: ArticleHeading[] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id);

  useEffect(() => {
    if (headings.length === 0) return;
    const update = () => {
      const threshold = window.scrollY + 160;
      let current = headings[0].id;
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (!element) continue;
        if (element.getBoundingClientRect().top + window.scrollY <= threshold) {
          current = heading.id;
        }
      }
      setActiveId(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page">
      <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-4">On this page</p>
      <ul className="border-l border-neutral-200">
        {headings.map((heading) => {
          const isActive = heading.id === activeId;
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={cn(
                  'block -ml-px border-l-2 pl-4 py-1.5 text-sm leading-snug transition-colors',
                  isActive
                    ? 'border-primary text-neutral-900 font-medium'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900'
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

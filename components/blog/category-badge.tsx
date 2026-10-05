import { cn } from '@/lib/utils';

const categoryDots: Record<string, string> = {
  'EdTech & Social Impact': 'bg-accent',
  'Digital Public Infrastructure': 'bg-primary',
  'GovTech & Public Sector Innovation': 'bg-primary-light',
  'Internet & Digital Governance': 'bg-accent-secondary',
  'Policy to Implementation': 'bg-primary-dark',
};

export function categoryDotClass(category: string): string {
  return categoryDots[category] ?? 'bg-neutral-400';
}

export function CategoryBadge({ category, className }: { category: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full whitespace-nowrap',
        className
      )}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', categoryDotClass(category))} />
      {category}
    </span>
  );
}

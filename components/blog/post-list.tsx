'use client';

import { useState } from 'react';
import { categories, type PostSummary } from '@/lib/blog-data';
import { cn } from '@/lib/utils';
import { categoryDotClass } from './category-badge';
import { FeaturedPostCard, PostCard } from './post-card';

const ALL = 'All';

export function PostList({ posts }: { posts: PostSummary[] }) {
  const [active, setActive] = useState<string>(ALL);

  const filters = [
    { label: ALL, count: posts.length },
    ...categories
      .map((category) => ({ label: category, count: posts.filter((p) => p.category === category).length }))
      .filter((filter) => filter.count > 0),
  ];

  const filtered = active === ALL ? posts : posts.filter((post) => post.category === active);
  const featured = active === ALL ? filtered[0] : undefined;
  const gridPosts = featured ? filtered.slice(1) : filtered;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
        {filters.map((filter) => {
          const isActive = filter.label === active;
          return (
            <button
              key={filter.label}
              type="button"
              onClick={() => setActive(filter.label)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors',
                isActive
                  ? 'bg-neutral-900 border-neutral-900 text-white'
                  : 'border-neutral-200 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
              )}
            >
              {filter.label !== ALL && (
                <span className={cn('w-1.5 h-1.5 rounded-full', categoryDotClass(filter.label))} />
              )}
              {filter.label}
              <span className="text-xs text-neutral-400">{filter.count}</span>
            </button>
          );
        })}
      </div>

      {featured && (
        <div className="mb-4 md:mb-6">
          <FeaturedPostCard post={featured} />
        </div>
      )}

      {gridPosts.length > 0 && (
        <>
          <div className="flex items-center gap-3 mt-14 md:mt-16 mb-8">
            <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">
              {active === ALL ? 'More articles' : active}
            </span>
            <div className="flex-1 h-px bg-neutral-200" />
            <span className="text-sm text-neutral-400">{gridPosts.length}</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {gridPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

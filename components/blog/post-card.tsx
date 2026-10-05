import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { formatPostDate, postDateIso, type PostSummary } from '@/lib/blog-data';
import { CategoryBadge } from './category-badge';
import { PostImage } from './post-image';

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white border border-neutral-200 rounded-[20px] md:rounded-3xl p-3 hover:border-neutral-900 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1 transition-all duration-300"
    >
      {post.image && (
        <PostImage
          src={post.image}
          alt={post.title}
          className="aspect-[16/10] rounded-2xl"
          imgClassName="group-hover:scale-[1.03] transition-transform duration-700"
        />
      )}
      <div className="flex flex-col flex-1 p-4 md:p-5">
        <div className="flex items-center justify-between gap-3 mb-4">
          <CategoryBadge category={post.category} />
          <span className="text-xs text-neutral-400 whitespace-nowrap">{post.readTime}</span>
        </div>
        <h3 className="text-xl font-heading font-bold text-neutral-900 leading-snug tracking-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3 mb-6">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between">
          <time dateTime={postDateIso(post.date)} className="text-xs text-neutral-400">
            {formatPostDate(post.date, 'short')}
          </time>
          <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:border-neutral-900 group-hover:text-white transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedPostCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid lg:grid-cols-2 bg-white border border-neutral-200 rounded-[20px] md:rounded-3xl overflow-hidden hover:border-neutral-900 transition-colors duration-300"
    >
      {post.image && (
        <PostImage
          src={post.image}
          alt={post.title}
          priority
          className="aspect-[16/10] lg:aspect-auto lg:min-h-[480px]"
          imgClassName="group-hover:scale-[1.03] transition-transform duration-700"
        />
      )}
      <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-3 py-1 text-xs font-medium text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Latest article
          </span>
          <CategoryBadge category={post.category} />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.05] text-neutral-900 mb-5 group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-neutral-600 md:text-lg leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-neutral-400">
            <time dateTime={postDateIso(post.date)}>{formatPostDate(post.date)}</time>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span>{post.readTime}</span>
          </div>
          <span className="inline-flex items-center gap-2 bg-neutral-900 text-white rounded-full px-5 py-2.5 text-sm font-medium group-hover:bg-neutral-800 transition-colors">
            Read article <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

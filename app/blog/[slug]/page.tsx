import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import {
  formatPostDate,
  getAdjacentPosts,
  getAllBlogSlugs,
  getBlogPost,
  getRelatedPosts,
  postDateIso,
  type BlogPost,
} from '@/lib/blog-data';
import { siteUrl } from '@/lib/site';
import { ArticleBody, extractHeadings } from '@/components/blog/article-body';
import { BlogFooter } from '@/components/blog/blog-footer';
import { BlogNav } from '@/components/blog/blog-nav';
import { CategoryBadge } from '@/components/blog/category-badge';
import { PostCard } from '@/components/blog/post-card';
import { PostImage } from '@/components/blog/post-image';
import { ReadingProgress } from '@/components/blog/reading-progress';
import { ShareButtons } from '@/components/blog/share-buttons';
import { TableOfContents } from '@/components/blog/table-of-contents';

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  const url = `${siteUrl}/blog/${post.slug}`;
  const image = post.image
    ? post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`
    : undefined;
  return {
    title: `${post.title} | Temwani Msiska`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url,
      publishedTime: postDateIso(post.date),
      authors: ['Temwani Msiska'],
      images: image ? [image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: image ? [image] : undefined,
    },
  };
}

function AdjacentPostLink({ post, direction }: { post: BlogPost; direction: 'older' | 'newer' }) {
  const isNewer = direction === 'newer';
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col border border-neutral-200 rounded-2xl p-6 hover:border-neutral-900 transition-colors ${isNewer ? 'md:text-right md:items-end' : ''}`}
    >
      <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-neutral-400 mb-3">
        {!isNewer && <ArrowLeft className="w-3.5 h-3.5" />}
        {isNewer ? 'Newer article' : 'Older article'}
        {isNewer && <ArrowRight className="w-3.5 h-3.5" />}
      </span>
      <span className="font-heading font-bold text-neutral-900 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
        {post.title}
      </span>
    </Link>
  );
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post, 3);
  const { newer, older } = getAdjacentPosts(post.slug);
  const url = `${siteUrl}/blog/${post.slug}`;

  const tags = (
    <div className="flex flex-wrap gap-2">
      {post.tags.map((tag) => (
        <span key={tag} className="px-3 py-1 border border-neutral-200 text-neutral-600 text-xs rounded-full">
          {tag}
        </span>
      ))}
    </div>
  );

  return (
    <main className="min-h-screen bg-neutral-300/40 pb-2 md:pb-5">
      <ReadingProgress />
      <div className="pt-2 md:pt-3">
        <BlogNav />
      </div>

      <header className="px-2 md:px-5 mt-2">
        <div className="relative overflow-hidden bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200 px-5 md:px-10 pt-8 md:pt-12 pb-10 md:pb-14">
          <div className="pointer-events-none absolute -top-48 -left-40 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-3xl" />
          <div className="relative max-w-6xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All articles
            </Link>

            <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                  <CategoryBadge category={post.category} />
                  <time dateTime={postDateIso(post.date)}>{formatPostDate(post.date)}</time>
                  <span className="w-1 h-1 rounded-full bg-neutral-300" />
                  <span>{post.readTime}</span>
                </div>
                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-[-0.02em] leading-[1.02] text-neutral-900">
                  {post.title}
                </h1>
                <p className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">{post.excerpt}</p>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0">
                      TM
                    </div>
                    <div>
                      <p className="text-sm font-heading font-semibold text-neutral-900">Temwani Msiska</p>
                      <p className="text-xs text-neutral-500">Systems Developer &amp; Tech Entrepreneur, Lusaka</p>
                    </div>
                  </div>
                  <ShareButtons url={url} title={post.title} />
                </div>
              </div>
              {post.image && (
                <div className="lg:col-span-5">
                  <PostImage
                    src={post.image}
                    alt={post.title}
                    priority
                    className="aspect-[16/10] lg:aspect-[4/5] rounded-[20px] md:rounded-3xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="px-2 md:px-5 mt-2">
        <div className="bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200 px-5 md:px-10 py-12 md:py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 space-y-10">
                <TableOfContents headings={headings} />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-4">Tagged</p>
                  {tags}
                </div>
              </div>
            </aside>

            <article className="lg:col-span-8 lg:col-start-4 max-w-3xl">
              {headings.length > 0 && (
                <details className="group lg:hidden mb-10 rounded-2xl border border-neutral-200 p-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-medium text-neutral-900">
                    On this page
                    <ChevronDown className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <ol className="mt-4 space-y-2.5">
                    {headings.map((heading, index) => (
                      <li key={heading.id} className="flex gap-3 text-sm">
                        <span className="text-neutral-300 tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                        <a href={`#${heading.id}`} className="text-neutral-600 hover:text-neutral-900 transition-colors">
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
              )}

              <ArticleBody content={post.content} />

              <div className="lg:hidden mt-12 pt-8 border-t border-neutral-200">
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-4">Tagged</p>
                {tags}
              </div>

              <div className="mt-14 pt-10 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <p className="text-sm text-neutral-500">Found this useful? Pass it on.</p>
                <ShareButtons url={url} title={post.title} />
              </div>

              <div className="mt-10 relative overflow-hidden rounded-3xl border border-neutral-200 p-7 md:p-8">
                <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl" />
                <div className="relative flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-bold flex-shrink-0">
                    TM
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-neutral-900">Temwani Msiska</p>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      Systems developer and tech entrepreneur based in Lusaka, Zambia. Building national digital
                      infrastructure at SMART Zambia Institute and growing Code SHEROs, a movement teaching African
                      girls to code through story-driven experiences.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-1.5 bg-neutral-900 text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors"
                      >
                        Get in touch <ArrowUpRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/#about"
                        className="inline-flex items-center gap-1.5 border border-neutral-200 text-neutral-700 rounded-full px-5 py-2.5 text-sm font-medium hover:border-neutral-900 hover:text-neutral-900 transition-colors"
                      >
                        More about me
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-2 md:px-5 mt-2">
        <div className="bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200 px-5 md:px-10 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            {(older || newer) && (
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-14 md:mb-16">
                {older ? <AdjacentPostLink post={older} direction="older" /> : <div className="hidden md:block" />}
                {newer && <AdjacentPostLink post={newer} direction="newer" />}
              </div>
            )}

            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">Keep reading</span>
              <div className="flex-1 h-px bg-neutral-200" />
              <Link href="/blog" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                All articles
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {related.map((relatedPost) => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <BlogFooter />
    </main>
  );
}

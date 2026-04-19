import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs, blogPosts } from '@/lib/blog-data';

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug: slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} | Temwani Msiska`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-stone-100 via-neutral-100 to-neutral-200/70">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-neutral-300/60 to-transparent blur-3xl" />
        <div className="absolute top-[30%] -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-stone-300/50 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-neutral-400/30 to-transparent blur-3xl" />
      </div>

      {/* Top nav */}
      <div className="relative z-10 px-6 md:px-12 pt-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            ← Back to Blog
          </Link>
          <Link
            href="/"
            className="text-sm font-heading font-bold text-neutral-900"
          >
            TM
          </Link>
        </div>
      </div>

      {/* Editorial header */}
      <header className="relative z-10 px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="px-3 py-1.5 bg-neutral-900 text-white text-xs uppercase tracking-wider rounded-full font-medium">
              {post.category}
            </span>
            <span className="text-neutral-500 text-xs uppercase tracking-wider">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-neutral-900 mb-8 leading-[1.05] tracking-tight">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-neutral-500">
            <span className="font-medium text-neutral-700">Temwani Msiska</span>
            <span className="w-1 h-1 rounded-full bg-neutral-400"></span>
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      </header>

      {/* Featured Image — large, floating */}
      {post.image && (
        <div className="relative z-10 px-4 md:px-12 mb-16 md:mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl shadow-neutral-900/20 ring-1 ring-neutral-900/5">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[450px] md:h-[700px] object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Article Content — no card, just typography on the gradient */}
      <article className="relative z-10 px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-1">
            {post.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mt-14 mb-5 tracking-tight">
                    {trimmed.replace('## ', '')}
                  </h2>
                );
              }
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl md:text-3xl font-heading font-semibold text-neutral-900 mt-10 mb-4 tracking-tight">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              if (trimmed) {
                const parts = trimmed.split(/(codesheros\.co\.zm)/g);
                return (
                  <p key={index} className="text-lg md:text-xl text-neutral-700 leading-[1.8] mb-7">
                    {parts.map((part, i) =>
                      part === 'codesheros.co.zm' ? (
                        <a key={i} href="https://www.codesheros.co.zm" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900 transition-colors">codesheros.co.zm</a>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-16 pt-10 border-t border-neutral-300/60">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-neutral-500 mr-2">Tagged</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-neutral-300/60 text-neutral-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author signature */}
          <div className="mt-12 flex items-center gap-4 p-6 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/60">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center text-white font-heading font-bold text-lg flex-shrink-0">
              TM
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-neutral-900">Temwani Msiska</p>
              <p className="text-xs text-neutral-600">Systems Developer & Tech Entrepreneur, Lusaka</p>
            </div>
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts — floating, no cards */}
      {relatedPosts.length > 0 && (
        <section className="relative z-10 px-6 md:px-12 pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-neutral-900 tracking-tight">
                Keep reading
              </h2>
              <Link
                href="/blog"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                All posts →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  {relatedPost.image && (
                    <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-5 shadow-xl shadow-neutral-900/10 ring-1 ring-neutral-900/5">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="px-1">
                    <span className="text-xs uppercase tracking-wider text-neutral-500">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-neutral-900 mt-2 mb-2 line-clamp-2 group-hover:text-neutral-600 transition-colors tracking-tight">
                      {relatedPost.title}
                    </h3>
                    <p className="text-neutral-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 pb-8">
        <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-300/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">&copy; 2026 Temwani Msiska</p>
          <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}

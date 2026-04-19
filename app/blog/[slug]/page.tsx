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
    <main className="min-h-screen bg-neutral-300/40">
      {/* Header */}
      <header className="px-2 md:px-5 pt-2 md:pt-5">
        <div className="bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200 py-12 md:py-16 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-8"
            >
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2.5 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full">
                {post.category}
              </span>
              <span className="text-neutral-400 text-xs">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-neutral-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <time className="text-neutral-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.image && (
        <div className="px-2 md:px-5 mt-2">
          <div className="max-w-5xl mx-auto rounded-[20px] md:rounded-[28px] overflow-hidden border border-neutral-200">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="px-2 md:px-5 mt-2">
        <div className="bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200 py-12 md:py-16 px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mt-10 mb-4">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl md:text-2xl font-heading font-semibold text-neutral-900 mt-8 mb-3">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }
                if (trimmed) {
                  const parts = trimmed.split(/(codesheros\.co\.zm)/g);
                  return (
                    <p key={index} className="text-neutral-700 leading-relaxed mb-6">
                      {parts.map((part, i) =>
                        part === 'codesheros.co.zm' ? (
                          <a key={i} href="https://www.codesheros.co.zm" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline hover:no-underline">codesheros.co.zm</a>
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
            <div className="mt-12 pt-8 border-t border-neutral-100">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-neutral-200 text-neutral-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-2 md:px-5 mt-2">
          <div className="bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200 py-12 md:py-16 px-6 md:px-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">Related Posts</span>
                <div className="flex-1 h-px bg-neutral-200"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 transition-all duration-300"
                  >
                    {relatedPost.image && (
                      <div className="h-56 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <span className="px-2.5 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-heading font-bold text-neutral-900 mt-3 mb-2 line-clamp-2 group-hover:text-neutral-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-neutral-500 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="px-2 md:px-5 pt-2 pb-2 md:pb-5">
        <div className="bg-neutral-900 rounded-[20px] md:rounded-[28px] py-8 px-4 md:px-10 text-center">
          <Link href="/" className="text-neutral-400 hover:text-white transition-colors text-sm">
            ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}

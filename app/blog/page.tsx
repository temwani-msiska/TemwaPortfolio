import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata = {
  title: 'Blog | Temwani Msiska',
  description: 'Exploring how digital technologies shape public institutions, policy frameworks, and global cooperation.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-300/40">
      {/* Header */}
      <header className="px-2 md:px-5 pt-2 md:pt-5">
        <div className="bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200 py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-8"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 mb-6">Blog</h1>
            <p className="text-lg text-neutral-700 max-w-2xl">
              Technology. Governance. Public Digital Systems.
            </p>
            <p className="text-neutral-500 mt-4 max-w-2xl">
              Exploring how digital technologies shape public institutions, policy frameworks,
              and global cooperation — with a focus on GovTech and emerging economies.
            </p>
          </div>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <section className="px-2 md:px-5 mt-2">
        <div className="bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200 py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-10">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-all duration-300 overflow-hidden"
                >
                  <div className="md:flex">
                    {post.image && (
                      <div className="md:w-1/2 h-72 md:h-[420px] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className={`p-8 md:p-10 flex flex-col justify-center ${post.image ? 'md:w-1/2' : 'w-full'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-2.5 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full">
                          {post.category}
                        </span>
                        <span className="text-neutral-400 text-xs">{post.readTime}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-neutral-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-neutral-500 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <time className="text-neutral-400 text-sm">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <span className="text-sm text-neutral-700 font-medium group-hover:text-neutral-900 transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-2 md:px-5 pt-2 pb-2 md:pb-5">
        <div className="bg-neutral-900 rounded-[20px] md:rounded-[28px] py-8 px-4 md:px-10 text-center">
          <p className="text-neutral-500 text-sm">
            Temwani Msiska
          </p>
        </div>
      </footer>
    </main>
  );
}

import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata = {
  title: 'Blog | Temwani Msiska',
  description: 'Exploring how digital technologies shape public institutions, policy frameworks, and global cooperation.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#E91E8C]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/"
            className="inline-block text-[#E91E8C] hover:text-[#C2185B] transition-colors mb-8"
          >
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A0525] mb-6">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Technology. Governance. Public Digital Systems.
          </p>
          <p className="text-gray-500 mt-4 max-w-2xl">
            Exploring how digital technologies shape public institutions, policy frameworks,
            and global cooperation — with a focus on GovTech and emerging economies.
          </p>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="md:flex">
                  {post.image && (
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className={`p-8 ${post.image ? 'md:w-2/3' : 'w-full'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#E91E8C]/10 text-[#E91E8C] text-sm rounded-full border border-[#E91E8C]/20">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#1A0525] mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-gray-400 text-sm">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span className="text-[#E91E8C] font-medium">
                        Read more
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            Temwani Msiska
          </p>
        </div>
      </footer>
    </main>
  );
}

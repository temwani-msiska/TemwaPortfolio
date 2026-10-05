import type { Metadata } from 'next';
import { getPostSummaries } from '@/lib/blog-data';
import { BlogNav } from '@/components/blog/blog-nav';
import { BlogFooter } from '@/components/blog/blog-footer';
import { PostList } from '@/components/blog/post-list';

export const metadata: Metadata = {
  title: 'Blog | Temwani Msiska',
  description:
    'Essays on technology, governance and public digital systems: how digital technologies shape public institutions, policy frameworks and global cooperation, with a focus on GovTech and emerging economies.',
};

export default function BlogPage() {
  const posts = getPostSummaries();

  return (
    <main className="min-h-screen bg-neutral-300/40 pb-2 md:pb-5">
      <div className="pt-2 md:pt-3">
        <BlogNav />
      </div>

      <header className="px-2 md:px-5 mt-2">
        <div className="relative overflow-hidden bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200 px-5 md:px-10 pt-14 md:pt-24 pb-12 md:pb-20">
          <div className="pointer-events-none absolute -top-48 -right-40 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-3xl" />
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-10 md:mb-14">
              <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">Blog</span>
              <div className="flex-1 h-px bg-neutral-200" />
              <span className="text-sm text-neutral-400">{posts.length} articles</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-[-0.03em] leading-[0.95] text-neutral-900">
              Technology, governance &amp;{' '}
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                public digital systems.
              </span>
            </h1>

            <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-6 md:gap-10 items-end">
              <p className="md:col-span-7 text-lg md:text-xl text-neutral-600 leading-relaxed">
                Exploring how digital technologies shape public institutions, policy frameworks, and global
                cooperation, with a focus on GovTech and emerging economies.
              </p>
              <div className="md:col-span-5 md:justify-self-end flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-bold text-xs flex-shrink-0">
                  TM
                </div>
                <div>
                  <p className="text-sm font-heading font-semibold text-neutral-900">Temwani Msiska</p>
                  <p className="text-xs text-neutral-500">Writing from Lusaka, Zambia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="px-2 md:px-5 mt-2">
        <div className="bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200 px-5 md:px-10 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <PostList posts={posts} />
          </div>
        </div>
      </section>

      <BlogFooter />
    </main>
  );
}

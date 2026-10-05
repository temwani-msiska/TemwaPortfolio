import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export function BlogFooter() {
  return (
    <footer className="px-2 md:px-5 mt-2">
      <div className="relative overflow-hidden bg-neutral-900 rounded-[20px] md:rounded-[28px]">
        <div className="pointer-events-none absolute -top-40 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-primary-light/70 via-accent/40 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-24 w-[420px] h-[420px] rounded-full bg-primary/70 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">Let&apos;s talk</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-heading font-bold text-white tracking-tight leading-[1.05]">
                Working on digital public infrastructure or GovTech?{' '}
                <span className="bg-gradient-to-r from-accent via-[#F26BB0] to-accent-secondary bg-clip-text text-transparent">
                  Let&apos;s compare notes.
                </span>
              </h2>
              <p className="mt-5 text-neutral-400 leading-relaxed max-w-lg">
                I am open to collaborations, speaking invitations, and honest conversations about building public systems that actually reach citizens.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:temwani.msiska@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-neutral-900 rounded-full px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors"
              >
                Send an email <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/temwani-msiska"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-neutral-700 text-white rounded-full px-6 py-3 text-sm font-medium hover:border-neutral-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-14 md:mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-heading font-bold text-white mb-1">Temwani Msiska</h3>
              <p className="text-neutral-500 text-sm">Building technology that creates opportunity across Africa</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/temwani-msiska"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/temwani-msiska"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:temwani.msiska@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-neutral-600 text-xs">&copy; 2026 Temwani Msiska</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

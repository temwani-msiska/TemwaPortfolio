"use client";

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Award, Github, Globe, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';
import {
  consultingExperiences,
  education,
  governmentExperiences,
  projects,
  skills,
  techStack,
  ventureExperiences,
  type Experience,
} from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';
import { PostCard } from '@/components/blog/post-card';

const stickyNavLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#education', label: 'Education' },
];

const heroNavLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const mobileMenuLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#passion', label: 'Code SHEROs' },
  { href: '#blog', label: 'Blog' },
  { href: '#education', label: 'Education' },
  { href: '#international', label: 'International' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://www.codesheros.co.zm', label: 'codesheros.co.zm', icon: Globe },
  { href: 'https://www.codebloom.co.zm', label: 'codebloom.co.zm', icon: Globe },
  { href: 'https://www.linkedin.com/in/temwani-msiska', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/temwani-msiska', label: 'GitHub', icon: Github },
];

const marqueeItems = [
  'Digital Public Infrastructure',
  'GovTech',
  'Systems Development',
  'API Integration',
  'Code SHEROs',
  'Women in Tech',
  'Lusaka, Zambia',
];

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '1M+', label: 'Users Impacted' },
  { value: '70%', label: 'Efficiency Gains' },
];

const currently = [
  { role: 'Senior Systems Developer', organisation: 'SMART Zambia Institute', href: 'https://zamportal.gov.zm/' },
  { role: 'CEO & Founder', organisation: 'Code SHEROs', href: 'https://www.codesheros.co.zm' },
  { role: 'CEO & Founder', organisation: 'Pixel Pulse Studio', href: 'https://www.pixelpulse.co.zm/' },
];

const international = [
  { title: 'GovStack Women in GovTech Challenge 2026 Mentee', detail: 'Selected from 1,300+ applicants across 137 countries' },
  { title: 'OpenG2P Advanced Training Course', detail: 'IIIT Bangalore, December 2024' },
  { title: 'AFRALO Individual Member', detail: 'ICANN' },
];

const certifications = [
  { name: 'OpenG2P Advanced Training Course, IIIT Bangalore', detail: 'December 2024' },
  { name: 'Digital Awareness Certificate', detail: '' },
  { name: 'Introduction to Modern Artificial Intelligence', detail: '' },
  { name: 'CAPM Certification', detail: 'In progress, target May 2026' },
];

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'French', level: 'Intermediate' },
];

const contactLinks = [
  { href: 'https://www.linkedin.com/in/temwani-msiska', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/temwani-msiska', label: 'GitHub', icon: Github },
  { href: 'https://www.codesheros.co.zm', label: 'codesheros.co.zm', icon: Globe },
  { href: 'https://www.codebloom.co.zm', label: 'codebloom.co.zm', icon: Globe },
];

function SectionHeader({ label, action, dark = false }: { label: string; action?: ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-10 md:mb-12">
      <span className={cn('text-sm font-medium tracking-wider uppercase', dark ? 'text-neutral-500' : 'text-neutral-400')}>
        {label}
      </span>
      <div className={cn('flex-1 h-px', dark ? 'bg-neutral-800' : 'bg-neutral-200')} />
      {action}
    </div>
  );
}

function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mx-2 md:mx-5 mt-2 bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200', className)}>
      {children}
    </div>
  );
}

function ExperienceGroup({ title, items }: { title: string; items: Experience[] }) {
  return (
    <div>
      <h3 className="text-sm font-heading font-bold text-neutral-400 uppercase tracking-wider">{title}</h3>
      <div>
        {items.map((exp) => {
          const isCurrent = exp.period.includes('Present');
          return (
            <div
              key={`${exp.title}-${exp.company}-${exp.period}`}
              className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-neutral-100 last:border-0"
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-2.5">
                  <span className={cn('w-2 h-2 rounded-full flex-shrink-0', isCurrent ? 'bg-accent animate-pulse' : 'bg-neutral-300')} />
                  <span className="text-sm text-neutral-500">{exp.period}</span>
                </div>
                <span className="mt-3 inline-block px-2.5 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full font-medium">
                  {exp.type}
                </span>
              </div>
              <div className="md:col-span-9">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h4 className="text-xl md:text-2xl font-heading font-bold text-neutral-900 tracking-tight">{exp.title}</h4>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${exp.company} website`}
                      className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:bg-neutral-900 hover:border-neutral-900 hover:text-white transition-colors flex-shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-neutral-500 font-medium mb-4">{exp.company}</p>
                <p className="text-neutral-600 leading-relaxed mb-5">{exp.description}</p>
                <ul className="space-y-2.5">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-neutral-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-300/40 pb-2 md:pb-5">
      {/* Sticky Nav - appears on scroll */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        )}
      >
        <div className="mx-2 md:mx-5 mt-2 md:mt-3">
          <div className="bg-white/90 backdrop-blur-md rounded-full px-4 md:px-8 py-3 flex items-center justify-between border border-neutral-200">
            <a href="#hero" className="text-sm font-heading font-bold text-neutral-900">TM</a>
            <div className="hidden md:flex items-center gap-6">
              {stickyNavLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <a href="#contact" className="bg-neutral-900 text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-1.5">
              Let&apos;s Talk <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="p-2 md:p-5 pb-0 md:pb-0">
        <div className="relative overflow-hidden bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200 min-h-[calc(100vh-16px)] md:min-h-[calc(100vh-40px)] flex flex-col">
          <div className="pointer-events-none absolute -top-48 -right-48 w-[720px] h-[720px] rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-56 -left-48 w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-accent/10 via-primary/10 to-transparent blur-3xl" />

          <nav className="flex items-center justify-between px-4 md:px-10 py-4 md:py-5 relative z-20">
            <div className="flex items-center gap-2 border border-neutral-200 rounded-full px-4 py-2 bg-white/70 backdrop-blur-sm">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-medium text-neutral-700">Open to Collaborate</span>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              {heroNavLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a href="#contact" className="bg-neutral-900 text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2">
                Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 bg-white/70 hover:bg-neutral-50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-16 left-4 right-4 bg-white rounded-2xl border border-neutral-200 shadow-xl z-30 p-4">
              <div className="flex flex-col gap-1">
                {mobileMenuLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="flex-1 flex flex-col justify-center items-center relative px-4 md:px-10 pt-4 md:pt-0">
            <div className="text-center w-full select-none pointer-events-none">
              <h1 className="text-[16vw] md:text-[12vw] font-heading font-bold leading-[0.85] tracking-[-0.04em] text-outline uppercase">
                Temwani
              </h1>
              <h1 className="text-[16vw] md:text-[12vw] font-heading font-bold leading-[0.85] tracking-[-0.04em] text-neutral-900 uppercase">
                Msiska
              </h1>
            </div>
          </div>

          <div className="relative z-10 overflow-hidden border-y border-neutral-100 py-3">
            <div className="flex w-max animate-marquee">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={index} className="flex items-center gap-6 pr-6 text-xs md:text-sm font-medium uppercase tracking-wider text-neutral-400 whitespace-nowrap">
                  {item}
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-20 flex flex-col md:flex-row items-start md:items-end justify-between px-4 md:px-10 pb-6 md:pb-10 pt-6 md:pt-8 gap-6">
            <div className="max-w-md">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-neutral-900 mb-2">
                Systems Developer &amp; Tech Entrepreneur
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                Building national systems at SMART Zambia Institute and growing Code SHEROs to empower the next generation of African female coders through storytelling.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-neutral-900 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
                Let&apos;s collaborate <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-row md:flex-col flex-wrap gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-neutral-200 bg-white/70 rounded-full px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors"
                >
                  <link.icon className="w-4 h-4" /> {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About + Skills */}
      <Card>
        <section id="about" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader label="About" />
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-4">
                <div className="relative">
                  <div className="absolute -inset-1.5 rounded-[28px] bg-gradient-to-br from-primary via-primary-light to-accent opacity-50 blur-md" />
                  <img
                    src="/images/temwani.jpg"
                    alt="Temwani Msiska"
                    className="relative w-full aspect-[4/5] object-cover object-top rounded-3xl"
                  />
                </div>
                <div className="mt-5 flex items-center gap-2 text-sm text-neutral-500">
                  <MapPin className="w-4 h-4 text-neutral-400" /> Lusaka, Zambia
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-neutral-900 leading-[1.15] tracking-tight">
                  Building Zambia&apos;s{' '}
                  <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                    digital public infrastructure
                  </span>{' '}
                  by day, and a movement of girls who code.
                </p>
                <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                  I am a systems developer and tech entrepreneur based in Lusaka, Zambia. I build scalable government digital infrastructure at SMART Zambia Institute, while also leading Code SHEROs, a movement equipping African girls with coding skills through immersive, story driven experiences.
                </p>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="border border-neutral-200 rounded-2xl p-5 hover:border-neutral-900 transition-colors">
                      <p className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 mb-3">Currently</p>
                  <div className="divide-y divide-neutral-100 border-y border-neutral-100">
                    {currently.map((item) => (
                      <a
                        key={item.organisation}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 py-3.5"
                      >
                        <div className="flex items-start sm:items-center gap-3 min-w-0">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0 mt-1.5 sm:mt-0" />
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 min-w-0">
                            <span className="text-sm text-neutral-800 font-medium">{item.role}</span>
                            <span className="text-sm text-neutral-400">{item.organisation}</span>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 transition-colors flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-10 border-t border-neutral-100">
          <div className="max-w-6xl mx-auto">
            <SectionHeader label="Skills" />
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-8">Core Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-3">
                          <span className={cn('w-8 h-8 rounded-lg bg-gradient-to-br text-white flex items-center justify-center', skill.color)}>
                            <skill.icon className="w-4 h-4" />
                          </span>
                          <span className="text-neutral-800 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-neutral-400 tabular-nums">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-neutral-100 overflow-hidden">
                        <div
                          className={cn('h-full rounded-full bg-gradient-to-r', skill.color)}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-8">Tech Stack</h3>
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 border border-neutral-200 rounded-full text-sm font-medium text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Card>

      {/* Experience */}
      <Card>
        <section id="experience" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader label="Experience" />
            <div className="space-y-16 md:space-y-20">
              <ExperienceGroup title="Government / Formal" items={governmentExperiences} />
              <ExperienceGroup title="Ventures" items={ventureExperiences} />
              <ExperienceGroup title="Consulting" items={consultingExperiences} />
            </div>
          </div>
        </section>
      </Card>

      {/* Projects */}
      <Card>
        <section id="projects" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader label="Projects" />
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col border border-neutral-200 rounded-3xl p-6 md:p-7 hover:border-neutral-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className={cn('w-12 h-12 rounded-2xl bg-gradient-to-br text-white flex items-center justify-center', project.gradient)}>
                      <project.icon className="w-5 h-5" />
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-xs text-neutral-400">{project.status}</span>
                      <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-neutral-900 tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-neutral-100">
                    <p className="text-sm text-neutral-700 font-medium">{project.impact}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </Card>

      {/* Code SHEROs */}
      <section id="passion" className="scroll-mt-24 mx-2 md:mx-5 mt-2">
        <div className="relative overflow-hidden bg-neutral-900 rounded-[20px] md:rounded-[28px] px-4 md:px-10 py-16 md:py-24 text-white">
          <div className="pointer-events-none absolute -top-48 -right-32 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-primary-light/70 via-accent/40 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-56 -left-32 w-[520px] h-[520px] rounded-full bg-primary/70 blur-3xl" />
          <div className="relative max-w-6xl mx-auto">
            <SectionHeader label="What I'm Building" dark />
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-br from-primary-light via-accent to-accent-secondary opacity-40 blur-xl" />
                  <img
                    src="/images/code-sheros-poster.jpg"
                    alt="Code SHEROs characters"
                    className="relative w-full aspect-square object-cover rounded-3xl ring-1 ring-white/10"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 border border-neutral-700 rounded-full px-3 py-1 text-xs font-medium text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Pilot launching Q3 2026
                </span>
                <h3 className="mt-5 text-3xl md:text-5xl font-heading font-bold tracking-tight leading-[1.05]">
                  Teaching African girls to code through{' '}
                  <span className="bg-gradient-to-r from-accent via-[#F26BB0] to-accent-secondary bg-clip-text text-transparent">
                    story driven missions.
                  </span>
                </h3>
                <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
                  Code SHEROs is an interactive coding education platform for girls aged 7 to 18, built in Zambia and designed for Africa. Players become digital heroes who learn HTML, CSS, and JavaScript by battling villains and solving coding challenges alongside three mentor characters: Byte, Pixel, and Nova.
                </p>
                <p className="mt-4 text-neutral-400">
                  Preparing for pilot launch across 3 to 5 schools in Lusaka, targeting 100 to 200 girls in Q3 2026.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
                  {[
                    { label: 'Role', value: 'CEO & Founder' },
                    { label: 'Stack', value: 'Next.js, Django, TS' },
                    { label: 'Stage', value: 'Pre-launch' },
                  ].map((item) => (
                    <div key={item.label} className="border border-neutral-700/80 bg-white/[0.03] rounded-2xl p-4">
                      <span className="text-xs text-neutral-500 uppercase tracking-wider">{item.label}</span>
                      <p className="text-sm text-white mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://www.codesheros.co.zm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-neutral-900 rounded-full px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
                  >
                    Visit Site <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/blog/building-code-sheros"
                    className="border border-neutral-600 text-white rounded-full px-6 py-3 text-sm font-medium hover:border-neutral-300 transition-colors"
                  >
                    Read the Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <Card>
        <section id="blog" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              label="Blog"
              action={
                <Link href="/blog" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors inline-flex items-center gap-1">
                  All articles <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              }
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </Card>

      {/* Education, International, Certifications */}
      <Card>
        <section id="education" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader label="Education" />
            <div>
              {education.map((edu) => (
                <div key={edu.degree} className="grid md:grid-cols-12 gap-3 md:gap-8 py-6 border-b border-neutral-100 last:border-0">
                  <div className="md:col-span-3">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full font-medium">
                      <span className={cn('w-1.5 h-1.5 rounded-full bg-gradient-to-r', edu.gradient)} />
                      {edu.level}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-lg font-heading font-bold text-neutral-900">{edu.degree}</h3>
                    <p className="text-neutral-500 text-sm">{edu.institution}</p>
                    <p className="text-neutral-400 text-sm">{edu.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="international" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-10 border-t border-neutral-100">
          <div className="max-w-6xl mx-auto">
            <SectionHeader label="International" />
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {international.map((item) => (
                <div key={item.title} className="border border-neutral-200 rounded-3xl p-6 hover:border-neutral-900 transition-colors">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center mb-5">
                    <Globe className="w-4 h-4" />
                  </span>
                  <h3 className="text-base font-heading font-bold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-10 border-t border-neutral-100">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <SectionHeader label="Certifications" />
              <div>
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3 py-4 border-b border-neutral-100 last:border-0">
                    <Award className="w-4 h-4 text-neutral-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-neutral-900">{cert.name}</h3>
                      {cert.detail && <p className="text-xs text-neutral-400 mt-0.5">{cert.detail}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="languages">
              <SectionHeader label="Languages" />
              <div className="grid grid-cols-2 gap-4">
                {languages.map((language) => (
                  <div key={language.name} className="border border-neutral-200 rounded-2xl p-6 text-center hover:border-neutral-900 transition-colors">
                    <h3 className="text-lg font-heading font-bold text-neutral-900 mb-1">{language.name}</h3>
                    <p className="text-sm text-neutral-400">{language.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Card>

      {/* Contact */}
      <Card className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-48 -right-40 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-3xl" />
        <section id="contact" className="relative scroll-mt-24 py-16 md:py-24 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <SectionHeader label="Contact" />
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-neutral-900 tracking-tight leading-[1.05] mb-5">
                  Let&apos;s build something{' '}
                  <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">meaningful</span>{' '}
                  together.
                </h2>
                <p className="text-neutral-500 leading-relaxed mb-8">
                  Whether it&apos;s digital government infrastructure, coding education for girls, or scalable technology solutions, I&apos;m always interested in meaningful collaboration across Africa.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-neutral-600">
                    <MapPin className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm">Lusaka, Zambia</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-600">
                    <Mail className="w-4 h-4 text-neutral-400" />
                    <a href="mailto:temwani.msiska@gmail.com" className="text-sm hover:text-neutral-900 transition-colors">
                      temwani.msiska@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:temwani.msiska@gmail.com"
                  className="flex items-center justify-between bg-neutral-900 text-white rounded-2xl px-6 py-5 hover:bg-neutral-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Send an Email</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                {contactLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-neutral-200 rounded-2xl px-6 py-5 hover:border-neutral-900 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="w-5 h-5 text-neutral-600" />
                      <span className="font-medium text-neutral-700">{link.label}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Card>

      {/* Footer */}
      <footer className="mx-2 md:mx-5 mt-2">
        <div className="bg-neutral-900 rounded-[20px] md:rounded-[28px] py-10 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-heading font-bold text-white mb-1">Temwani Msiska</h3>
                <p className="text-neutral-500 text-sm">
                  Building technology that creates opportunity across Africa
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/temwani-msiska" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/temwani-msiska" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="mailto:temwani.msiska@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <p className="text-neutral-600 text-xs">
                &copy; 2026 Temwani Msiska
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

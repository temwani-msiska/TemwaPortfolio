"use client";

import {
  useState,
  useEffect
} from 'react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import {
  Code,
  Database,
  Globe,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Server,
  Users,
  TrendingUp,
  Award,
  ExternalLink,
  GraduationCap,
  Zap,
  CheckCircle,
  Building,
  Calendar,
  Rocket,
  Cloud,
  Smartphone,
  Monitor,
  BookOpen,
  Star,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

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

  const skills = [
    { name: 'Systems Development', level: 92, icon: Code, color: 'from-[#4A0E6B] to-[#2D0840]' },
    { name: 'Digital Transformation', level: 94, icon: Zap, color: 'from-[#E91E8C] to-[#2D0840]' },
    { name: 'API Development', level: 90, icon: Server, color: 'from-[#E91E8C] to-[#C2185B]' },
    { name: 'Full-Stack Development', level: 89, icon: Monitor, color: 'from-[#4A0E6B] to-[#E91E8C]' },
    { name: 'Database Management', level: 87, icon: Database, color: 'from-[#C2185B] to-[#E91E8C]' }
  ];

  const consultingExperiences = [
    {
      title: 'AI Agent Instruction Specialist & Automation Developer',
      company: 'Belvoir Group (Remote, UK)',
      period: 'January 2026 - Present',
      type: 'Part-time / Remote',
      description: 'Sole developer of the Belvoir Automation Hub, a property management automation platform built with Django 5.0, PostgreSQL, and Railway.',
      achievements: [
        'Designed multi-step workflows for property onboarding, inventory management, and compliance reporting',
        'Integrated external systems via APIs and Playwright browser automation',
        'Experimented with Claude AI and emerging agentic frameworks for workflow generation'
      ],
      icon: Zap,
      gradient: 'from-[#4A0E6B] to-[#E91E8C]'
    },
    {
      title: 'Advanced AI Trainer',
      company: 'Invisible Technologies',
      period: 'April 2024 - June 2024',
      type: 'Part-time / Remote',
      description: 'Evaluated and rewrote AI generated content to improve authenticity and real world accuracy.',
      achievements: [
        'Evaluated AI generated content and rewrote responses for authenticity',
        'Created natural prompts and conversations to improve AI system training',
        'Helped fine tune large language models for real world use cases'
      ],
      icon: Code,
      gradient: 'from-[#E91E8C] to-[#2D0840]'
    }
  ];

  const governmentExperiences = [
    {
      title: 'Senior Systems Developer',
      company: 'SMART Zambia Institute',
      period: 'March 2026 - Present',
      type: 'Government',
      description: 'Leading digital transformation initiatives for national e-government service delivery at the Office of the President.',
      achievements: [
        'Lead digital transformation initiatives for national e-government service delivery',
        'Develop secure, scalable software systems for the Government Service Bus platform',
        'Design API integrations connecting multiple government agencies and third party services',
        'Conduct stakeholder requirements analysis and translate policy objectives into technical solutions'
      ],
      icon: Building,
      gradient: 'from-[#E91E8C] to-[#2D0840]',
      link: 'https://zamportal.gov.zm/'
    },
    {
      title: 'Business Analyst and Systems Developer',
      company: 'SMART Zambia Institute',
      period: 'January 2025 - April 2026',
      type: 'Government',
      description: 'Collaborated with the Ministry of Finance and National Planning on the Government Service Bus initiative.',
      achievements: [
        'Gathered and documented detailed system requirements for national e-government services on the Government Service Bus',
        'Created comprehensive user manuals and conducted training for government staff across ministries',
        'Collaborated with the Ministry of Finance and National Planning on integrated digital service delivery'
      ],
      icon: Building,
      gradient: 'from-[#2D0840] to-[#4A0E6B]'
    },
    {
      title: 'Systems Developer',
      company: 'SMART Zambia Institute',
      period: 'January 2024 - January 2025',
      type: 'Government',
      description: 'Built and maintained software systems powering Zambia\'s digital public infrastructure.',
      achievements: [
        'Built and maintained software systems powering Zambia\'s digital public infrastructure',
        'Implemented platform integrations across government systems with automated testing',
        'Provided user support, system monitoring, and feedback driven continuous improvement'
      ],
      icon: Code,
      gradient: 'from-[#2D0840] to-[#E91E8C]'
    },
    {
      title: 'Records Officer',
      company: 'Government Printers, Ministry of Transport and Logistics',
      period: 'June 2021 - December 2023',
      type: 'Government',
      description: 'Managed records and administrative operations across government agency.',
      achievements: [
        'Managed records and administrative operations across government agency',
        'Supported compliance and documentation workflows'
      ],
      icon: Building,
      gradient: 'from-[#4A0E6B] to-[#2D0840]'
    },
    {
      title: 'Intern',
      company: 'BongoHive Technology and Innovation Hub',
      period: 'May 2014 - October 2015',
      type: 'Tech Hub',
      description: 'Early contributor to Zambia\'s founding tech innovation hub.',
      achievements: [
        'Early contributor to Zambia\'s founding tech innovation hub',
        'Developed technical foundation through collaborative projects',
        'Supported early stage operations in emerging African tech ecosystem'
      ],
      icon: Rocket,
      gradient: 'from-[#E91E8C] to-[#4A0E6B]'
    }
  ];

const projects = [
    {
      title: 'Code SHEROs',
      description: 'Story driven coding platform teaching African girls aged 7 to 18 to code through gamified missions. Pilot launching across Lusaka schools in Q3 2026.',
      tags: ['EdTech', 'Social Impact', 'Django', 'Next.js'],
      impact: 'Building coding literacy for girls across Africa',
      icon: Rocket,
      gradient: 'from-[#E91E8C] to-[#4A0E6B]',
      link: 'https://www.codesheros.co.zm',
      status: 'Live'
    },
    {
      title: 'Code Bloom',
      description: 'Women-led digital studio building tech solutions and social impact ventures. The parent company behind Code SHEROs.',
      tags: ['Digital Studio', 'Social Impact', 'Women in Tech'],
      impact: 'Empowering women-led innovation in Zambia',
      icon: Users,
      gradient: 'from-[#2D0840] to-[#E91E8C]',
      link: 'https://www.codebloom.co.zm',
      status: 'Live'
    },
    {
      title: 'Pixel Pulse Studio',
      description: 'Technology consultancy delivering end-to-end web and mobile solutions. Built Zamlex AI, Temzie Bites, and Smart Mechanics.',
      tags: ['Consultancy', 'Web', 'Mobile', 'Cloud'],
      impact: 'Shipping products for clients across Zambia and beyond',
      icon: Zap,
      gradient: 'from-[#4A0E6B] to-[#E91E8C]',
      link: 'https://www.pixelpulse.co.zm/',
      status: 'Live'
    }
  ];

  const education = [
    {
      degree: 'BSc (Hons) Computer Systems and Networking',
      institution: 'Greenwich University',
      achievement: 'Upper Second Class Honours',
      level: 'Bachelor\'s Degree',
      gradient: 'from-[#E91E8C] to-[#2D0840]'
    },
    {
      degree: 'NCC Education Level Diploma in Computing (Level 5)',
      institution: 'Computer Science',
      achievement: 'With Merit',
      level: 'Level 5 Diploma',
      gradient: 'from-[#2D0840] to-[#E91E8C]'
    },
    {
      degree: 'NCC Education Level Diploma in Computing (Level 4)',
      institution: 'Computer Science',
      achievement: 'Completed',
      level: 'Level 4 Diploma',
      gradient: 'from-[#E91E8C] to-[#4A0E6B]'
    },
    {
      degree: 'NCC Education Level Diploma in Computing (Level 3)',
      institution: 'Computer Science',
      achievement: 'With Merit',
      level: 'Level 3 Diploma',
      gradient: 'from-[#4A0E6B] to-[#E91E8C]'
    }
  ];

  const techStack = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'Django', 'PostgreSQL', 
    'Docker', 'AWS', 'Vercel', 'DigitalOcean', 'GraphQL', 'REST APIs',
    'GitHub Actions', 'Microservices', 'Serverless', 'NLP'
  ];

  return (
    <div className="min-h-screen bg-neutral-300/40">
      {/* Sticky Nav - appears on scroll */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="mx-2 md:mx-5 mt-2 md:mt-3">
          <div className="bg-white/90 backdrop-blur-md rounded-full px-4 md:px-8 py-3 flex items-center justify-between border border-neutral-200">
            <a href="#hero" className="text-sm font-heading font-bold text-neutral-900">TM</a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">About</a>
              <a href="#experience" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Experience</a>
              <a href="#projects" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Projects</a>
              <a href="#blog" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Blog</a>
              <a href="#education" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Education</a>
            </div>
            <a href="#contact" className="bg-neutral-900 text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-1.5">
              Let&apos;s Talk <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen p-2 md:p-5">
        <div className="bg-white rounded-[20px] md:rounded-[28px] min-h-[calc(100vh-16px)] md:min-h-[calc(100vh-40px)] relative overflow-hidden flex flex-col">
          {/* Hero Nav */}
          <nav className="flex items-center justify-between px-4 md:px-10 py-4 md:py-5 relative z-20">
            <div className="flex items-center gap-2 border border-neutral-200 rounded-full px-4 py-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-medium text-neutral-700">Open to Collaborate</span>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <a href="#projects" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Projects <span className="text-neutral-300">[{projects.length}]</span></a>
              <a href="#experience" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Experience <span className="text-neutral-300">[8y+]</span></a>
              <a href="#skills" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Skills</a>
              <a href="#blog" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Blog</a>
              <a href="#contact" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#contact" className="bg-neutral-900 text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2">
                Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-16 left-4 right-4 bg-white rounded-2xl border border-neutral-200 shadow-xl z-30 p-4">
              <div className="flex flex-col gap-1">
                {[
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
                ].map((item) => (
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

          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center items-center relative px-4 md:px-10 pt-4 md:pt-0">
            {/* Giant Name */}
            <div className="text-center w-full select-none pointer-events-none">
              <h1 className="text-[16vw] md:text-[12vw] font-heading font-bold leading-[0.85] tracking-[-0.04em] text-outline uppercase">
                Temwani
              </h1>
              <h1 className="text-[16vw] md:text-[12vw] font-heading font-bold leading-[0.85] tracking-[-0.04em] text-neutral-900 uppercase">
                Msiska
              </h1>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="relative z-20 flex flex-col md:flex-row items-start md:items-end justify-between px-4 md:px-10 pb-6 md:pb-10 pt-2 gap-6">
            {/* Left: Role + CTA */}
            <div className="max-w-md">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-neutral-900 mb-2">
                Senior Systems Developer
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                Building national systems at SMART Zambia Institute and growing Code SHEROs to empower the next generation of African female coders through storytelling.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-neutral-900 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
                Let&apos;s collaborate <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Social Links */}
            <div className="flex flex-row md:flex-col flex-wrap gap-2.5">
              <a href="https://www.codesheros.co.zm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-neutral-200 rounded-full px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 transition-colors">
                <Globe className="w-4 h-4" /> codesheros.co.zm
              </a>
              <a href="https://www.codebloom.co.zm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-neutral-200 rounded-full px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 transition-colors">
                <Globe className="w-4 h-4" /> codebloom.co.zm
              </a>
              <a href="https://www.linkedin.com/in/temwani-msiska" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-neutral-200 rounded-full px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://github.com/temwani-msiska" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-neutral-200 rounded-full px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container - single continuous card */}
      <div className="mx-2 md:mx-5 mt-2 bg-white rounded-[20px] md:rounded-[28px] border border-neutral-200">

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">About</span>
              <div className="flex-1 h-px bg-neutral-200"></div>
            </div>
            <div className="grid md:grid-cols-5 gap-12 md:gap-16">
              <div className="md:col-span-3 space-y-5">
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                  I am a systems developer and tech entrepreneur based in Lusaka, Zambia. I build scalable government digital infrastructure at SMART Zambia Institute, while also leading Code SHEROs, a movement equipping African girls with coding skills through immersive, story driven experiences.
                </p>
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                {[
                  { value: '8+', label: 'Years Experience' },
                  { value: '50+', label: 'Projects Delivered' },
                  { value: '1M+', label: 'Users Impacted' },
                  { value: '70%', label: 'Efficiency Gains' },
                ].map((stat, i) => (
                  <div key={i} className="border border-neutral-200 rounded-2xl p-5 text-center hover:border-neutral-400 transition-colors">
                    <h3 className="text-3xl font-heading font-bold text-neutral-900 mb-1">{stat.value}</h3>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 px-4 md:px-10 ">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">Skills</span>
              <div className="flex-1 h-px bg-neutral-200"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-14">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">Core Expertise</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0">
                      <span className="text-neutral-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-neutral-400">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((tech, index) => (
                    <span key={index} className="px-4 py-2 border border-neutral-200 rounded-full text-sm font-medium text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200 cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 px-4 md:px-10 ">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">Experience</span>
              <div className="flex-1 h-px bg-neutral-200"></div>
            </div>

            {/* Government / Formal */}
            <h3 className="text-lg font-heading font-bold text-neutral-400 uppercase tracking-wider mb-6">Government / Formal</h3>
            <div className="space-y-0">
              {governmentExperiences.map((exp, index) => (
                <div key={index} className={`py-8 md:py-10 ${index !== governmentExperiences.length - 1 ? 'border-b border-neutral-200' : ''}`}>
                  <div className="grid md:grid-cols-4 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <span className="text-sm text-neutral-400">{exp.period}</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-neutral-900">{exp.title}</h3>
                        {exp.link && (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors ml-2 flex-shrink-0">
                            <ArrowUpRight className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <p className="text-neutral-500 font-medium mb-4">{exp.company}</p>
                      <p className="text-neutral-600 leading-relaxed mb-5">{exp.description}</p>
                      <div className="space-y-2.5">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-neutral-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Consulting */}
            <h3 className="text-lg font-heading font-bold text-neutral-400 uppercase tracking-wider mb-6 mt-14">Consulting</h3>
            <div className="space-y-0">
              {consultingExperiences.map((exp, index) => (
                <div key={index} className={`py-8 md:py-10 ${index !== consultingExperiences.length - 1 ? 'border-b border-neutral-200' : ''}`}>
                  <div className="grid md:grid-cols-4 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <span className="text-sm text-neutral-400">{exp.period}</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-neutral-900">{exp.title}</h3>
                      </div>
                      <p className="text-neutral-500 font-medium mb-4">{exp.company}</p>
                      <p className="text-neutral-600 leading-relaxed mb-5">{exp.description}</p>
                      <div className="space-y-2.5">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-neutral-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 px-4 md:px-10 ">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">Projects</span>
              <div className="flex-1 h-px bg-neutral-200"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group border border-neutral-200 rounded-2xl p-6 md:p-8 hover:border-neutral-900 transition-all duration-300 ${index === projects.length - 1 && projects.length % 2 !== 0 ? 'md:col-start-1 md:col-end-2 md:mx-auto md:w-full md:max-w-[calc(50%-0.75rem)]' : ''}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-xs text-neutral-400">{project.status}</span>
                      <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                    </div>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-neutral-100">
                    <p className="text-sm text-neutral-700 font-medium">{project.impact}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
      </section>

      {/* Passion Projects */}
      <section id="passion" className="">
        <div className="bg-neutral-900 m-3 md:m-5 rounded-2xl md:rounded-3xl py-16 md:py-24 px-4 md:px-10 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-sm font-medium text-neutral-500 tracking-wider uppercase">What I&apos;m Building</span>
              <div className="flex-1 h-px bg-neutral-700"></div>
            </div>

            <div className="grid md:grid-cols-5 gap-10 md:gap-16">
              <div className="md:col-span-2 flex flex-col justify-between">
                <div className="aspect-[4/3] bg-neutral-800 rounded-xl overflow-hidden mb-4">
                  {/* Code SHEROs image placeholder */}
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
                  <a
                    href="/blog/building-code-sheros"
                    className="border border-neutral-600 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Read the Story
                  </a>
                </div>
              </div>

              <div className="md:col-span-3">
                <p className="text-lg text-neutral-300 leading-relaxed mb-5">
                  Teaching African girls to code through story driven missions. Code SHEROs is an interactive coding education platform for girls aged 7 to 18, built in Zambia and designed for Africa. Players become digital heroes who learn HTML, CSS, and JavaScript by battling villains and solving coding challenges alongside three mentor characters: Byte, Pixel, and Nova.
                </p>
                <p className="text-neutral-400 mb-8">
                  Preparing for pilot launch across 3 to 5 schools in Lusaka, targeting 100 to 200 girls in Q3 2026.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-neutral-700 rounded-xl p-4">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider">Role</span>
                    <p className="text-sm text-white mt-1">CEO & Founder</p>
                  </div>
                  <div className="border border-neutral-700 rounded-xl p-4">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider">Stack</span>
                    <p className="text-sm text-white mt-1">Next.js, Django, TS</p>
                  </div>
                  <div className="border border-neutral-700 rounded-xl p-4">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider">Stage</span>
                    <p className="text-sm text-white mt-1">Pre-launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-24 px-4 md:px-10 ">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">Blog</span>
              <div className="flex-1 h-px bg-neutral-200"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10">
              {blogPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 transition-all duration-300"
                >
                  {post.image && (
                    <div className="h-40 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full">
                        {post.category}
                      </span>
                      <span className="text-neutral-300 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-heading font-bold text-neutral-900 mb-2 line-clamp-2 group-hover:text-neutral-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <time className="text-neutral-300 text-xs">
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </time>
                      <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-neutral-200 text-neutral-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200"
              >
                View All Posts <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-24 px-4 md:px-10 ">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">Education</span>
              <div className="flex-1 h-px bg-neutral-200"></div>
            </div>
            <div className="space-y-0">
              {education.map((edu, index) => (
                <div key={index} className={`py-6 ${index !== education.length - 1 ? 'border-b border-neutral-100' : ''}`}>
                  <div className="grid md:grid-cols-4 gap-2 md:gap-8">
                    <div className="md:col-span-1">
                      <span className="px-2.5 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-full font-medium">{edu.level}</span>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-lg font-heading font-bold text-neutral-900">{edu.degree}</h3>
                      <p className="text-neutral-500 text-sm">{edu.institution}</p>
                      <p className="text-neutral-400 text-sm">{edu.achievement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* International Experience Section */}
      <section id="international" className="py-16 md:py-24 px-4 md:px-10 ">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">International</span>
              <div className="flex-1 h-px bg-neutral-200"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'GovStack Women in GovTech Challenge 2026 Mentee', detail: 'Selected from 1,300+ applicants across 137 countries' },
                { title: 'OpenG2P Advanced Training Course', detail: 'IIIT Bangalore, December 2024' },
                { title: 'AFRALO Individual Member', detail: 'ICANN' },
                { title: 'ICANN Fellowship Applicant', detail: 'ICANN87 Muscat Oman, October 2026' }
              ].map((item, index) => (
                <div key={index} className="border border-neutral-200 rounded-2xl p-5 hover:border-neutral-400 transition-colors">
                  <Globe className="w-5 h-5 text-neutral-300 mb-3" />
                  <h3 className="text-base font-heading font-bold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Certifications + Languages Section */}
      <section id="certifications" className="py-16 md:py-24 px-4 md:px-10 ">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">Certifications</span>
                  <div className="flex-1 h-px bg-neutral-200"></div>
                </div>
                <div className="space-y-0">
                  {[
                    { name: 'OpenG2P Advanced Training Course, IIIT Bangalore', detail: 'December 2024' },
                    { name: 'Digital Awareness Certificate', detail: '' },
                    { name: 'Introduction to Modern Artificial Intelligence', detail: '' },
                    { name: 'CAPM Certification', detail: 'In progress, target May 2026' }
                  ].map((cert, index) => (
                    <div key={index} className="py-4 border-b border-neutral-100 last:border-0">
                      <h3 className="text-sm font-medium text-neutral-900">{cert.name}</h3>
                      {cert.detail && <p className="text-xs text-neutral-400 mt-0.5">{cert.detail}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div id="languages">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">Languages</span>
                  <div className="flex-1 h-px bg-neutral-200"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-neutral-200 rounded-2xl p-6 text-center hover:border-neutral-400 transition-colors">
                    <h3 className="text-lg font-heading font-bold text-neutral-900 mb-1">English</h3>
                    <p className="text-sm text-neutral-400">Fluent</p>
                  </div>
                  <div className="border border-neutral-200 rounded-2xl p-6 text-center hover:border-neutral-400 transition-colors">
                    <h3 className="text-lg font-heading font-bold text-neutral-900 mb-1">French</h3>
                    <p className="text-sm text-neutral-400">Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-10 ">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-sm font-medium text-neutral-400 tracking-wider uppercase">Contact</span>
              <div className="flex-1 h-px bg-neutral-200"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                  Let&apos;s build something<br />meaningful together.
                </h2>
                <p className="text-neutral-500 leading-relaxed mb-8">
                  Whether it&apos;s digital government infrastructure, coding education for girls, or scalable technology solutions — I&apos;m always interested in meaningful collaboration across Africa.
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
                <a
                  href="https://www.linkedin.com/in/temwani-msiska"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-neutral-200 rounded-2xl px-6 py-5 hover:border-neutral-400 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-neutral-600" />
                    <span className="font-medium text-neutral-700">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                </a>
                <a
                  href="https://github.com/temwani-msiska"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-neutral-200 rounded-2xl px-6 py-5 hover:border-neutral-400 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-neutral-600" />
                    <span className="font-medium text-neutral-700">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                </a>
                <a
                  href="https://www.codesheros.co.zm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-neutral-200 rounded-2xl px-6 py-5 hover:border-neutral-400 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-neutral-600" />
                    <span className="font-medium text-neutral-700">codesheros.co.zm</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                </a>
                <a
                  href="https://www.codebloom.co.zm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-neutral-200 rounded-2xl px-6 py-5 hover:border-neutral-400 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-neutral-600" />
                    <span className="font-medium text-neutral-700">codebloom.co.zm</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                </a>
              </div>
            </div>
          </div>
      </section>

      </div>{/* End Main Content Container */}

      {/* Footer */}
      <footer className="px-2 md:px-5 pt-2 pb-2 md:pb-5">
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
                <a href="https://www.linkedin.com/in/temwani-msiska" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/temwani-msiska" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="mailto:temwani.msiska@gmail.com" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors">
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
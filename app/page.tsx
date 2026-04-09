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
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Server, 
  Users, 
  TrendingUp, 
  Award,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Zap,
  CheckCircle,
  Building,
  Calendar,
  Rocket,
  Shield,
  Cloud,
  Smartphone,
  Monitor,
  BookOpen,
  Star
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Business Analysis', level: 95, icon: TrendingUp, color: 'from-[#E91E8C] to-[#C2185B]' },
    { name: 'Systems Development', level: 92, icon: Code, color: 'from-[#4A0E6B] to-[#2D0840]' },
    { name: 'Digital Transformation', level: 94, icon: Zap, color: 'from-[#E91E8C] to-[#2D0840]' },
    { name: 'Cloud Architecture', level: 88, icon: Cloud, color: 'from-[#2D0840] to-[#4A0E6B]' },
    { name: 'API Development', level: 90, icon: Server, color: 'from-[#E91E8C] to-[#C2185B]' },
    { name: 'Full-Stack Development', level: 89, icon: Monitor, color: 'from-[#4A0E6B] to-[#E91E8C]' },
    { name: 'Database Management', level: 87, icon: Database, color: 'from-[#C2185B] to-[#E91E8C]' },
    { name: 'Mobile Development', level: 85, icon: Smartphone, color: 'from-[#2D0840] to-[#E91E8C]' }
  ];

  const experiences = [
    {
      title: 'Senior Systems Developer',
      company: 'SMART Zambia Institute',
      period: 'March 2026 - Present',
      type: 'Government',
      description: 'Developing national payment and payroll systems at SMART Zambia Institute under the Office of the President, building secure digital infrastructure for civil servants nationwide.',
      achievements: [
        'Developing the Payment Aggregator system to curb payslip fraud through integration with accredited financial institutions, multi-factor authentication, and multi-layered access controls',
        'Built the ePayslip system digitising payroll delivery for civil servants nationwide',
        'Contributing to the Cash for Work digital payment system supporting social protection disbursements'
      ],
      icon: Building,
      gradient: 'from-[#E91E8C] to-[#2D0840]',
      link: 'https://zamportal.gov.zm/'
    },
    {
      title: 'Business Analyst and Systems Developer',
      company: 'SMART Zambia Institute - Government Service Bus',
      period: 'January 2025 - April 2026',
      type: 'Government',
      description: 'Collaborated with the Ministry of Finance and National Planning on the Government Service Bus initiative, bridging policy intent with practical implementation for national e-government services.',
      achievements: [
        'Gathered and documented system requirements for national e-government services on the GSB',
        'Created user manuals and conducted training for government staff across ministries',
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
      description: 'Designed and maintained robust software systems to enhance Zambia\'s digital public infrastructure and improve government service delivery across multiple platforms.',
      achievements: [
        'Developed scalable software systems for national digital infrastructure',
        'Conducted comprehensive system requirements analysis with stakeholders',
        'Implemented innovative solutions with seamless government platform integration',
        'Provided frontline user support and system monitoring for deployed solutions',
        'Collaborated with cross-functional teams to optimize operational efficiency',
        'Drove continuous improvement through user feedback and system evaluation'
      ],
      icon: Code,
      gradient: 'from-[#2D0840] to-[#E91E8C]'
    },
    {
      title: 'CEO & Founder',
      company: 'Code SHEROs (A Code Bloom / Codebloom Digital Technologies Company)',
      period: '2026 - Present',
      type: 'EdTech',
      description: 'Building Africa\'s first story driven coding education platform for girls aged 7 to 18. Code SHEROs teaches HTML, CSS, and JavaScript through gamified missions featuring three mentor characters who guide players through progressively challenging coding worlds.',
      achievements: [
        'Built the full platform independently: Django REST backend, Next.js frontend, PostgreSQL, GPT 4o integration',
        'Designed 8 learning tracks across 3 character worlds with 12 interactive challenge types',
        'Developed organisation system with teacher dashboards, pacing controls, and impact reporting',
        'Preparing pilot programme targeting 100 to 200 girls across 3 to 5 Lusaka schools in Q3 2026'
      ],
      icon: Rocket,
      gradient: 'from-[#E91E8C] to-[#4A0E6B]',
      link: 'https://www.codesheros.co.zm'
    },
    {
      title: 'CEO & Founder',
      company: 'Pixel Pulse Studio',
      period: 'January 2018 - Present',
      type: 'Entrepreneurship',
      description: 'Founded and lead a technology studio delivering end-to-end web and mobile solutions with scalable cloud architecture, clean API contracts, and automated CI/CD pipelines.',
      achievements: [
        'Built Zamlex AI: AI-powered legal-tech platform reducing legal research time by 70%',
        'Developed Temzie Bites: Interactive cultural hub preserving Zambian culinary heritage',
        'Architected scalable microservices using React, Next.js, Node.js, and TypeScript',
        'Implemented robust DevOps practices with Docker, GitHub Actions, and zero-downtime deployments',
        'Delivered WCAG-compliant, mobile-first user interfaces across multiple projects',
        'Established automated CI/CD pipelines deployed to AWS, Vercel, and DigitalOcean',
        'Founded Code SHEROs (2026): story driven coding platform for African girls, now operating as a separate company under Code Bloom / Codebloom Digital Technologies'
      ],
      icon: Rocket,
      gradient: 'from-[#E91E8C] to-[#2D0840]',
      link: 'https://www.pixelpulse.co.zm/'
    }
  ];

const projects = [
  
    {
      title: 'Zamlex AI',
      description: 'AI-powered legal-tech platform that demystifies Zambian law for entrepreneurs, investors, and startups using advanced NLP and GraphQL.',
      tags: ['AI/ML', 'Legal Tech', 'NLP', 'GraphQL', 'Serverless'],
      impact: 'Reduced legal research time by 70% for business professionals',
      icon: Zap,
      gradient: 'from-[#2D0840] to-[#E91E8C]',
      link: 'https://ai.zamlex.com/',
      status: 'Live'
    },
    {
      title: 'Temzie Bites',
      description: 'Interactive cultural hub preserving Zambia\'s culinary heritage with Strapi CMS, geolocation search, and responsive video storytelling.',
      tags: ['Cultural Preservation', 'Headless CMS', 'Geolocation', 'Video Streaming'],
      impact: 'Preserving and sharing Zambian cultural heritage digitally',
      icon: Globe,
      gradient: 'from-[#E91E8C] to-[#4A0E6B]',
      link: 'https://www.temziebites.com/',
      status: 'Live'
    },
    {
      title: 'Smart Mechanics',
      description: 'A dynamic and engaging portfolio website for Smart Mechanics, a leading mechanical service provider in Zambia since 2018. ',
      tags: ['Portfolio Website', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      impact: 'Enhanced digital presence for mechanical services',
      icon: Globe,
      gradient: 'from-[#2D0840] to-[#E91E8C]',
      link: 'https://www.smartmechanics.co.zm/',
      status: 'Live'
    },
    {
      title: 'Cowrie Shell',
      description: 'An innovative giving platform connecting donors to African communities through transparent donations. It enables grassroots organizations to identify needs, local vendors to provide solutions, secure fund releases, and real-time impact tracking.',
      tags: ['Social Impact Platform', 'Blockchain', 'Transparent Giving', 'Community Development'],
      impact: 'Revolutionizing charitable giving with transparency and cultural relevance',
      icon: Globe,
      gradient: 'from-[#E91E8C] to-[#2D0840]',
      link: 'https://www.cowrieshell.africa/',
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
    <div className="min-h-screen bg-gradient-to-br from-[#FDF6FF] to-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2D0840]/95 backdrop-blur-sm shadow-lg' : 'bg-[#2D0840]'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-heading font-bold text-white">
              Temwani Msiska
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-[#E91E8C] transition-colors">About</a>
              <a href="#skills" className="text-white/80 hover:text-[#E91E8C] transition-colors">Skills</a>
              <a href="#experience" className="text-white/80 hover:text-[#E91E8C] transition-colors">Experience</a>
              <a href="#projects" className="text-white/80 hover:text-[#E91E8C] transition-colors">Projects</a>
              <a href="#passion" className="text-white/80 hover:text-[#E91E8C] transition-colors">Passion Projects</a>
              <a href="#blog" className="text-white/80 hover:text-[#E91E8C] transition-colors">Blog</a>
              <a href="#education" className="text-white/80 hover:text-[#E91E8C] transition-colors">Education</a>
              <a href="#international" className="text-white/80 hover:text-[#E91E8C] transition-colors">International</a>
              <a href="#certifications" className="text-white/80 hover:text-[#E91E8C] transition-colors">Certifications</a>
              <a href="#contact" className="text-white/80 hover:text-[#E91E8C] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E91E8C]/20 via-transparent to-[#2D0840]/20"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
          <div className="mb-12">
            <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-[#E91E8C] to-[#2D0840] rounded-full flex items-center justify-center shadow-2xl p-2">
              <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center p-1">
                <img 
                  src="/WhatsApp Image 2025-05-21 at 18.19.13_42fc92ab.jpg" 
                  alt="Temwani Msiska"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-[#1A0525] mb-6">
              Temwani Msiska
            </h1>
            <p className="text-2xl md:text-3xl text-[#E91E8C] font-semibold mb-4">
              Senior Systems Developer | Digital Public Infrastructure | GovTech
            </p>
            <p className="text-xl text-[#1A0525] font-medium mb-8">
              CEO & Founder, Code SHEROs | Pixel Pulse Studio |{' '}
              <a href="https://www.codesheros.co.zm" target="_blank" rel="noopener noreferrer" className="text-[#E91E8C] hover:underline">codesheros.co.zm</a>
              {' | '}
              <a href="https://www.codebloom.co.zm" target="_blank" rel="noopener noreferrer" className="text-[#E91E8C] hover:underline">codebloom.co.zm</a>
            </p>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Developing national payment and payroll systems at SMART Zambia Institute, while building Code SHEROs, a platform teaching African girls to code through story driven missions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="bg-[#E91E8C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#C2185B] transition-colors shadow-lg hover:shadow-xl">
              Get In Touch
            </a>
            <a href="#projects" className="border-2 border-[#E91E8C] text-[#E91E8C] px-8 py-4 rounded-lg font-semibold hover:bg-[#E91E8C] hover:text-white transition-colors">
              View Projects
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#E91E8C]" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0525] mb-6">About Me</h2>
            <div className="w-24 h-1 bg-[#E91E8C] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am an IT professional with over eight years of experience as a Senior Systems Developer, currently developing national payment and payroll systems at SMART Zambia Institute under the Office of the President.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As CEO and Founder of Code SHEROs, I am building Africa's first story driven coding education platform for girls aged 7 to 18. The platform teaches real programming through gamified missions, and is preparing for its pilot launch across Lusaka schools in Q3 2026.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through Code Bloom, a women-led digital studio where passion meets purpose, and Pixel Pulse Studio, my technology consultancy, I deliver end-to-end web and mobile solutions. My work bridges the gap between policy intent and practical implementation, turning stakeholder needs into efficient, scalable digital services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#E91E8C]/10 to-[#E91E8C]/20 p-6 rounded-xl text-center border border-[#E91E8C]/20">
                <Award className="w-12 h-12 text-[#E91E8C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1A0525] mb-2">8+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-[#4A0E6B]/5 to-[#4A0E6B]/10 p-6 rounded-xl text-center border border-[#4A0E6B]/20">
                <Rocket className="w-12 h-12 text-[#4A0E6B] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1A0525] mb-2">50+</h3>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div className="bg-gradient-to-br from-[#E91E8C]/10 to-[#4A0E6B]/10 p-6 rounded-xl text-center border border-[#E91E8C]/20">
                <Users className="w-12 h-12 text-[#E91E8C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1A0525] mb-2">1M+</h3>
                <p className="text-gray-600">Users Impacted</p>
              </div>
              <div className="bg-gradient-to-br from-[#4A0E6B]/5 to-[#E91E8C]/10 p-6 rounded-xl text-center border border-[#4A0E6B]/20">
                <TrendingUp className="w-12 h-12 text-[#4A0E6B] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1A0525] mb-2">70%</h3>
                <p className="text-gray-600">Efficiency Gains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-[#FDF6FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0525] mb-6">Core Expertise</h2>
            <div className="w-24 h-1 bg-[#E91E8C] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A0525]">{skill.name}</h3>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tech Stack */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#1A0525] mb-6 text-center">Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-[#E6F9FC] text-[#00B4D8] rounded-full text-sm font-medium hover:bg-[#d0f4f9] transition-colors border border-[#00B4D8]/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0525] mb-6">Professional Journey</h2>
            <div className="w-24 h-1 bg-[#E91E8C] mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className={`bg-gradient-to-r ${exp.gradient} p-1 rounded-xl shadow-lg`}>
                  <div className="bg-white p-8 rounded-xl">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${exp.gradient} flex items-center justify-center mr-4`}>
                            <exp.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#1A0525] mb-1">{exp.title}</h3>
                            <div className="flex items-center">
                              <p className="text-xl text-[#E91E8C] font-semibold">{exp.company}</p>
                              {exp.link && (
                                <a 
                                  href={exp.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="ml-2 text-[#E91E8C] hover:text-[#4A0E6B] transition-colors"
                                >
                                  <ExternalLink className="w-5 h-5" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          <span className="px-3 py-1 bg-[#E91E8C]/10 text-[#E91E8C] text-sm rounded-full font-medium border border-[#E91E8C]/20">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{exp.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#E91E8C] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
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
      <section id="projects" className="py-20 bg-gradient-to-br from-[#FDF6FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0525] mb-6">Key Projects</h2>
            <div className="w-24 h-1 bg-[#E91E8C] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group border border-gray-100"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}>
                        {project.status}
                      </span>
                      <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-[#E91E8C] transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A0525] mb-3 group-hover:text-[#E91E8C] transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#E91E8C]/10 text-[#E91E8C] text-sm rounded-full font-medium border border-[#E91E8C]/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-[#E91E8C] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium mb-1">Impact:</p>
                      <p className="text-[#1A0525] font-medium">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Passion Projects */}
      <section id="passion" className="py-20 bg-[#FDF6FF]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center text-[#1A0525] mb-2">What I am Building</h2>
          <p className="text-center text-[#6B4D7A] mb-12 max-w-2xl mx-auto">
            Projects driven by purpose, not just profit. These are the things I work on because they matter.
          </p>

          <div className="bg-white rounded-xl shadow-lg border-l-4 border-[#E91E8C] p-8 md:p-10">
            <div className="md:flex md:gap-10">
              <div className="md:w-2/5 mb-6 md:mb-0 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-heading font-bold text-[#4A0E6B] mb-2">&lt;Code&gt; SHEROs</h3>
                <a
                  href="https://www.codesheros.co.zm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00B4D8] hover:underline text-sm"
                >
                  codesheros.co.zm
                </a>
              </div>

              <div className="md:w-3/5">
                <p className="text-xl font-semibold text-[#4A0E6B] mb-4">
                  Teaching African girls to code through story driven missions.
                </p>
                <p className="text-[#1A0525] mb-4">
                  Code SHEROs is an interactive coding education platform for girls aged 7 to 18, built in Zambia and designed for Africa. Players become digital heroes who learn HTML, CSS, and JavaScript by battling villains and solving coding challenges alongside three mentor characters: Byte, Pixel, and Nova.
                </p>
                <p className="text-[#1A0525] mb-6">
                  The platform is preparing for its pilot launch across 3 to 5 schools in Lusaka, targeting 100 to 200 girls in Q3 2026.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-sm">
                  <div>
                    <span className="text-[#6B4D7A]">Role:</span>
                    <span className="text-[#1A0525] ml-1">CEO & Founder</span>
                  </div>
                  <div>
                    <span className="text-[#6B4D7A]">Stack:</span>
                    <span className="text-[#1A0525] ml-1">Next.js, Django, TypeScript</span>
                  </div>
                  <div>
                    <span className="text-[#6B4D7A]">Stage:</span>
                    <span className="text-[#1A0525] ml-1">Pre launch, pilot in prep</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.codesheros.co.zm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#E91E8C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C2185B] transition-colors shadow-md"
                  >
                    Visit codesheros.co.zm
                  </a>
                  <a
                    href="/blog/building-code-sheros"
                    className="border-2 border-[#4A0E6B] text-[#4A0E6B] px-6 py-3 rounded-lg font-semibold hover:bg-[#4A0E6B] hover:text-white transition-colors"
                  >
                    Read the Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0525] mb-6">Blog</h2>
            <div className="w-24 h-1 bg-[#E91E8C] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#6B4D7A] max-w-2xl mx-auto">
              Writing about digital transformation, public systems, and building technology that creates opportunity across Africa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 overflow-hidden"
              >
                {post.image && (
                  <div className="h-40 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#E91E8C]/10 text-[#E91E8C] text-sm rounded-full border border-[#E91E8C]/20">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A0525] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-gray-400 text-sm">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="text-[#E91E8C] font-medium text-sm">
                      Read more
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block border-2 border-[#E91E8C] text-[#E91E8C] px-8 py-4 rounded-lg font-semibold hover:bg-[#E91E8C] hover:text-white transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-[#FDF6FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0525] mb-6">Education</h2>
            <div className="w-24 h-1 bg-[#E91E8C] mx-auto rounded-full"></div>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div key={index} className={`bg-gradient-to-r ${edu.gradient} p-1 rounded-xl shadow-lg`}>
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${edu.gradient} rounded-xl flex items-center justify-center mr-4`}>
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A0525] mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-[#E91E8C] font-semibold mb-1">{edu.institution}</p>
                        <p className="text-md text-[#1A0525] font-medium">{edu.achievement}</p>
                      </div>
                    </div>
                    <div className="text-center lg:text-right">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#E91E8C]/10 to-[#4A0E6B]/10 rounded-full border border-[#E91E8C]/20">
                        <BookOpen className="w-5 h-5 text-[#E91E8C] mr-2" />
                        <span className="text-[#1A0525] font-semibold">{edu.level}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Experience Section */}
      <section id="international" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0525] mb-6">International Experience</h2>
            <div className="w-24 h-1 bg-[#E91E8C] mx-auto rounded-full"></div>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                title: 'GovStack Women in GovTech Challenge 2026 Mentee',
                detail: 'Selected from 1,300+ applicants across 137 countries',
                gradient: 'from-[#E91E8C] to-[#2D0840]'
              },
              {
                title: 'OpenG2P Advanced Training Course',
                detail: 'IIIT Bangalore, December 2024',
                gradient: 'from-[#2D0840] to-[#E91E8C]'
              },
              {
                title: 'AFRALO Individual Member',
                detail: 'ICANN',
                gradient: 'from-[#E91E8C] to-[#4A0E6B]'
              },
              {
                title: 'ICANN Fellowship Applicant',
                detail: 'ICANN87 Muscat Oman, October 2026',
                gradient: 'from-[#4A0E6B] to-[#E91E8C]'
              }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-r ${item.gradient} p-1 rounded-xl shadow-lg`}>
                <div className="bg-white p-6 rounded-xl flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A0525] mb-1">{item.title}</h3>
                    <p className="text-lg text-[#E91E8C] font-semibold">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gradient-to-br from-[#FDF6FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0525] mb-6">Certifications</h2>
            <div className="w-24 h-1 bg-[#E91E8C] mx-auto rounded-full"></div>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { name: 'OpenG2P Advanced Training Course, IIIT Bangalore', detail: 'December 2024', gradient: 'from-[#E91E8C] to-[#2D0840]' },
              { name: 'Digital Awareness Certificate', detail: '', gradient: 'from-[#2D0840] to-[#E91E8C]' },
              { name: 'Introduction to Modern Artificial Intelligence', detail: '', gradient: 'from-[#E91E8C] to-[#4A0E6B]' },
              { name: 'CAPM Certification', detail: 'In progress, target May 2026', gradient: 'from-[#4A0E6B] to-[#E91E8C]' }
            ].map((cert, index) => (
              <div key={index} className={`bg-gradient-to-r ${cert.gradient} p-1 rounded-xl shadow-lg`}>
                <div className="bg-white p-6 rounded-xl flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A0525]">{cert.name}</h3>
                    {cert.detail && <p className="text-[#E91E8C] font-medium">{cert.detail}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0525] mb-6">Languages</h2>
            <div className="w-24 h-1 bg-[#E91E8C] mx-auto rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-[#E91E8C] to-[#2D0840] p-1 rounded-xl shadow-lg">
              <div className="bg-white p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-[#1A0525] mb-2">English</h3>
                <p className="text-[#E91E8C] font-semibold">Fluent</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#2D0840] to-[#E91E8C] p-1 rounded-xl shadow-lg">
              <div className="bg-white p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-[#1A0525] mb-2">French</h3>
                <p className="text-[#E91E8C] font-semibold">Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#FDF6FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1A0525] mb-6">Let's Connect</h2>
            <div className="w-24 h-1 bg-[#E91E8C] mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Building systems that empower people and create opportunity across Africa. Whether it is digital government infrastructure, coding education for girls, or scalable technology solutions, I am always interested in meaningful collaboration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#E91E8C]/10 rounded-lg flex items-center justify-center border border-[#E91E8C]/20">
                  <MapPin className="w-6 h-6 text-[#E91E8C]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A0525]">Location</h3>
                  <p className="text-gray-600">Lusaka, Zambia</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#E91E8C]/10 rounded-lg flex items-center justify-center border border-[#E91E8C]/20">
                  <Linkedin className="w-6 h-6 text-[#E91E8C]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A0525]">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/temwani-msiska" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#E91E8C] transition-colors"
                  >
                    Connect with me professionally
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#4A0E6B]/10 rounded-lg flex items-center justify-center border border-[#4A0E6B]/20">
                  <Github className="w-6 h-6 text-[#4A0E6B]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A0525]">GitHub</h3>
                  <a 
                    href="https://github.com/temwani-msiska" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#4A0E6B] transition-colors"
                  >
                    View my code repositories
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1A0525] mb-6">Ready to Collaborate?</h3>
              <p className="text-gray-700 mb-6">
                Looking to collaborate on projects that turn complex challenges into effective, 
                user-focused solutions? Let's discuss how we can work together to drive meaningful 
                digital transformation across Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:temwani.msiska@gmail.com" 
                  className="bg-[#E91E8C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C2185B] transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/temwani-msiska" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-[#E91E8C] text-[#E91E8C] px-6 py-3 rounded-lg font-semibold hover:bg-[#E91E8C] hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/temwani-msiska" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-[#4A0E6B] text-[#4A0E6B] px-6 py-3 rounded-lg font-semibold hover:bg-[#4A0E6B] hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D0840] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Temwani Msiska</h3>
            <p className="text-gray-400 mb-6">
              Building technology that creates opportunity across Africa
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/temwani-msiska" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E91E8C] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/temwani-msiska" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E91E8C] transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="mailto:temwani.msiska@gmail.com" 
                className="text-gray-400 hover:text-[#E91E8C] transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2026 Temwani Msiska. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
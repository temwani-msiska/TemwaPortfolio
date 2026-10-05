import type { LucideIcon } from 'lucide-react';
import { Building, Code, Database, Monitor, Rocket, Server, Users, Zap } from 'lucide-react';

export interface Experience {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  icon: LucideIcon;
  gradient: string;
  link?: string;
}

export const skills = [
  { name: 'Systems Development', level: 92, icon: Code, color: 'from-[#4A0E6B] to-[#2D0840]' },
  { name: 'Digital Transformation', level: 94, icon: Zap, color: 'from-[#E91E8C] to-[#2D0840]' },
  { name: 'API Development', level: 90, icon: Server, color: 'from-[#E91E8C] to-[#C2185B]' },
  { name: 'Full-Stack Development', level: 89, icon: Monitor, color: 'from-[#4A0E6B] to-[#E91E8C]' },
  { name: 'Database Management', level: 87, icon: Database, color: 'from-[#C2185B] to-[#E91E8C]' }
];

export const consultingExperiences: Experience[] = [
  {
    title: 'AI Agent Instruction Specialist & Automation Developer',
    company: 'Belvoir Group (Remote, UK)',
    period: 'January 2026 - Present',
    type: 'Part-time / Remote',
    description: 'Developer of the Belvoir Automation Hub, a property management automation platform built with Django 5.0, PostgreSQL, and Railway.',
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

export const governmentExperiences: Experience[] = [
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
    description: 'Built foundational software development skills through hands-on projects within a collaborative innovation environment.',
    achievements: [
      'Supported internal operations by documenting meetings and maintaining coordination workflows across teams',
      'Contributed to the execution of community programs and events within Zambia\'s emerging tech ecosystem',
      'Managed digital communication channels to support outreach, engagement, and ecosystem visibility',
      'Provided front-desk and administrative support, ensuring smooth day-to-day operations and a professional user experience'
    ],
    icon: Rocket,
    gradient: 'from-[#E91E8C] to-[#4A0E6B]'
  },
  {
    title: 'Trainee Sales Associate',
    company: 'Riverbed Limited Zambia',
    period: 'October 2014 - January 2015',
    type: 'Retail',
    description: 'Advised clients on products and services while supporting the full sales cycle from customer welcome through payment processing.',
    achievements: [
      'Provided advice to clients on products and services, and answered customer queries and concerns',
      'Quoted prices, discounts, credit terms, warranties and delivery dates to prospective buyers',
      'Welcomed customers and determined their needs and wants to recommend suitable options',
      'Prepared sales contracts and accepted payments through cash and cheque'
    ],
    icon: Users,
    gradient: 'from-[#2D0840] to-[#E91E8C]'
  }
];

export const ventureExperiences: Experience[] = [
  {
    title: 'CEO and Founder',
    company: 'Code SHEROs',
    period: '2026 - Present',
    type: 'Venture',
    description: 'Building Africa\'s first offline-capable coding platform for girls aged 7 to 12.',
    achievements: [
      'Building Africa\'s first offline-capable coding platform for girls aged 7 to 12',
      'Developed full stack independently: Django REST backend, Next.js frontend, PostgreSQL, GPT 4o integration',
      'Designed 8 learning tracks with 12 interactive challenge types and teacher dashboards for impact reporting',
      'Preparing pilot programme targeting 100 to 200 girls across Lusaka schools in Q3 2026'
    ],
    icon: Rocket,
    gradient: 'from-[#E91E8C] to-[#4A0E6B]',
    link: 'https://www.codesheros.co.zm'
  },
  {
    title: 'CEO and Founder',
    company: 'Code Bloom (Codebloom Digital Technologies)',
    period: '2026 - Present',
    type: 'Venture',
    description: 'Women-led digital studio combining technology and creative impact.',
    achievements: [
      'Women-led digital studio combining technology and creative impact',
      'Founding partner in building African tech ecosystem for underrepresented founders'
    ],
    icon: Users,
    gradient: 'from-[#2D0840] to-[#E91E8C]',
    link: 'https://www.codebloom.co.zm'
  },
  {
    title: 'CEO and Founder',
    company: 'Pixel Pulse Studio',
    period: '2018 - Present',
    type: 'Venture',
    description: 'Technology consultancy delivering end-to-end web and mobile solutions for clients across Zambia.',
    achievements: [
      'Built Zamlex AI: AI-powered legal tech platform using NLP and GraphQL, reducing legal research time by 70%',
      'Architected scalable microservices with Docker, GitHub Actions, zero-downtime deployments on AWS and Vercel',
      'Established automated CI/CD pipelines and WCAG-compliant, mobile-first interfaces across client projects'
    ],
    icon: Zap,
    gradient: 'from-[#4A0E6B] to-[#E91E8C]',
    link: 'https://www.pixelpulse.co.zm/'
  }
];

export const projects = [
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

export const education = [
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

export const techStack = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Django', 'PostgreSQL', 
  'Docker', 'AWS', 'Vercel', 'DigitalOcean', 'GraphQL', 'REST APIs',
  'GitHub Actions', 'Microservices', 'Serverless', 'NLP'
];

import React, { useState, useCallback } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Server,
  Database,
  ShieldCheck,
  PawPrint,
  Coins,
  LayoutGrid,
  Repeat,
  Activity,
  ShoppingBag,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { UiverseSkillCard } from '../ui/uiverse-skill-card';

interface WebDevSectionProps {
  onSelectDetail: (detailId: string) => void;
}

interface WebProject {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  primaryTag: string;
  detailId: string;
  liveUrl?: string;
  githubUrl: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  techStack: string[];
  stats: Array<{ label: string; value: string }>;
}

const WEB_PROJECTS: WebProject[] = [
  {
    id: 'pawshome',
    title: 'PawsHome',
    subtitle: 'Production MERN Pet Adoption Platform',
    badge: 'Live Production',
    primaryTag: 'Pet Adoption',
    detailId: 'proj-pawshome',
    liveUrl: 'https://pawshome.vercel.app',
    githubUrl: 'https://github.com/Safin313-REBORN',
    icon: PawPrint,
    description:
      'Architected and shipped an end-to-end pet adoption platform with decoupled client and server repositories. Implemented secure JWT HTTPOnly cookie authentication, Firebase Auth, MongoDB Atlas persistence, CORS-hardened REST API, and Framer Motion micro-animations.',
    techStack: ['React 18', 'Node.js', 'Express', 'MongoDB Atlas', 'Firebase Auth', 'Tailwind CSS', 'Framer Motion'],
    stats: [
      { label: 'Auth Architecture', value: 'JWT HTTPOnly' },
      { label: 'Database Tier', value: 'MongoDB Atlas' },
      { label: 'Deployment', value: 'Vercel + Render' },
      { label: 'Repositories', value: 'Client + Server' },
    ],
  },
  {
    id: 'crowdfunding',
    title: 'Crowdfunding Engine',
    subtitle: 'Full-Stack Community Pledge & Campaign System',
    badge: 'MERN Full-Stack',
    primaryTag: 'Pledge Engine',
    detailId: 'proj-crowdfunding',
    githubUrl: 'https://github.com/Safin313-REBORN',
    icon: Coins,
    description:
      'A complete crowdfunding application with decoupled frontend and backend microservices. Encompasses campaign launching, multi-tier contributions, live pledge tracking, and administrative verification workflows on React and Node/Express.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'RESTful API', 'Tailwind CSS'],
    stats: [
      { label: 'API Pattern', value: 'RESTful Microservices' },
      { label: 'Data Store', value: 'Indexed Schemas' },
      { label: 'Workflows', value: 'Pledge Lifecycle' },
      { label: 'Architecture', value: 'Decoupled Tier' },
    ],
  },
  {
    id: 'apple-gallery',
    title: 'Apple Tile Gallery',
    subtitle: 'Next.js 14 Showcase & BetterAuth Authentication',
    badge: 'Next.js 14 · Auth',
    primaryTag: 'Tile Showcase',
    detailId: 'proj-apple-gallery',
    githubUrl: 'https://github.com/Safin313-REBORN',
    icon: LayoutGrid,
    description:
      'High-performance tile gallery built with Next.js App Router and TypeScript, incorporating modern BetterAuth authentication, MongoDB data storage, DaisyUI design primitives, and touch-optimized Swiper carousels.',
    techStack: ['Next.js 14', 'TypeScript', 'BetterAuth', 'MongoDB', 'DaisyUI', 'Swiper JS'],
    stats: [
      { label: 'Framework', value: 'Next.js App Router' },
      { label: 'Typing', value: 'Strict TypeScript' },
      { label: 'Auth Solution', value: 'BetterAuth Session' },
      { label: 'Carousel Engine', value: 'Hardware-Accel' },
    ],
  },
  {
    id: 'skillswap',
    title: 'SkillSwap Exchange',
    subtitle: 'Peer-to-Peer Collaborative Talent Barter Platform',
    badge: 'Vite 5 · Node.js',
    primaryTag: 'Talent Barter',
    detailId: 'proj-skillswap',
    githubUrl: 'https://github.com/Safin313-REBORN',
    icon: Repeat,
    description:
      'A peer-to-peer talent barter exchange pairing a fast Vite/React frontend with an Express API backend. Users match mutual learning needs, initiate skill swap sessions, and track status milestones in real time.',
    techStack: ['React 18', 'Vite 5', 'Node.js', 'Express', 'MongoDB Atlas', 'Tailwind CSS'],
    stats: [
      { label: 'Matching Algorithm', value: 'Skill Matrix' },
      { label: 'Bundler', value: 'Vite 5 HMR' },
      { label: 'State Workflow', value: '4 Lifecycle Steps' },
      { label: 'Real-Time Sync', value: 'Zero-Lag' },
    ],
  },
  {
    id: 'keenkeeper',
    title: 'Keen Keeper',
    subtitle: 'Relationship Tracking & Cadence Analytics',
    badge: 'React · Recharts',
    primaryTag: 'Social Analytics',
    detailId: 'proj-keenkeeper',
    githubUrl: 'https://github.com/Safin313-REBORN',
    icon: Activity,
    description:
      'A relationship-tracking and habit-analytics application built with React, Vite, and Tailwind CSS. Employs Recharts charts to visualize connection frequency, alert users when contacts need reaching out to, and promote mindful social engagement.',
    techStack: ['React', 'Recharts', 'Vite 5', 'Tailwind CSS', 'Reactive Storage'],
    stats: [
      { label: 'Visualization', value: 'Recharts Engine' },
      { label: 'Bundler', value: 'Vite 5 Fast HMR' },
      { label: 'State Sync', value: 'Reactive Storage' },
      { label: 'Design System', value: 'Custom Dark Mode' },
    ],
  },
  {
    id: 'digitools',
    title: 'DigiTools Market',
    subtitle: 'Digital Assets Platform & Interactive Cart Engine',
    badge: 'React · Cart System',
    primaryTag: 'Asset Marketplace',
    detailId: 'proj-digitools',
    githubUrl: 'https://github.com/Safin313-REBORN',
    icon: ShoppingBag,
    description:
      'A sleek digital marketplace built in React with Vite, Tailwind CSS, and DaisyUI. Features multi-category catalog filtering, real-time cart subtotal computations, and responsive notification toasts via React-Toastify.',
    techStack: ['React', 'Cart Context', 'DaisyUI', 'Tailwind CSS', 'Vite 5'],
    stats: [
      { label: 'Cart Engine', value: 'Context Math' },
      { label: 'Toasts', value: 'React-Toastify' },
      { label: 'Components', value: 'DaisyUI Primitives' },
      { label: 'Build Time', value: '<250ms Vite' },
    ],
  },
  {
    id: 'windows-cheatsheet',
    title: 'Cyber Cheatsheet',
    subtitle: 'Windows Defense Reference & Security Toolkit',
    badge: 'Systems & Cyber',
    primaryTag: 'Security Suite',
    detailId: 'proj-windows-cheatsheet',
    githubUrl: 'https://github.com/Safin313-REBORN',
    icon: Terminal,
    description:
      'An open-source reference guide for cybersecurity practitioners, penetration testers, and systems engineers. Encompasses Windows internal commands, PowerShell automation, network forensics, and privilege analysis.',
    techStack: ['PowerShell', 'Windows CLI', 'Sysinternals', 'Wireshark', 'OWASP'],
    stats: [
      { label: 'License', value: 'MIT Open Source' },
      { label: 'Domain', value: 'Cyber & Sysadmin' },
      { label: 'Tooling', value: 'PowerShell / CLI' },
      { label: 'Target', value: 'Forensics & Audit' },
    ],
  },
];

const WEB_SKILLS = [
  { name: 'React 18 & Vite 5', level: 'Production', note: 'Hooks, custom state architecture, virtual DOM tuning' },
  { name: 'Next.js 14 & App Router', level: 'Advanced', note: 'Server components, streaming, dynamic metadata' },
  { name: 'Node.js & Express REST APIs', level: 'Production', note: 'Middleware chains, route controllers, rate limiting' },
  { name: 'MongoDB Atlas & Mongoose', level: 'Production', note: 'Compound indexing, schema validation, aggregation' },
  { name: 'BetterAuth & JWT HTTPOnly', level: 'Advanced', note: 'Session tokens, XSS/CSRF mitigation, OAuth 2.0' },
  { name: 'Tailwind CSS & Motion Primitives', level: 'Expert', note: 'Editorial design tokens, responsive layouts, physics' },
];

export const WebDevSection: React.FC<WebDevSectionProps> = ({ onSelectDetail }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + WEB_PROJECTS.length) % WEB_PROJECTS.length);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % WEB_PROJECTS.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX;
    if (diffX > 50) {
      prevSlide();
    } else if (diffX < -50) {
      nextSlide();
    }
    setTouchStartX(null);
  };

  const getOffset = (idx: number, current: number, total: number) => {
    let diff = idx - current;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) return '0';
    if (diff === 1) return '1';
    if (diff === -1) return '-1';
    if (diff === 2) return '2';
    if (diff === -2) return '-2';
    if (diff < -2) return 'hidden-left';
    return 'hidden-right';
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16 sm:py-24 overflow-x-clip">
      {/* Sector Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b dark:border-white/10 border-black/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] dark:text-cream/50 text-neutral-500 mb-2">
            <span className="text-gold">Engineering Sector</span>
            <span>/</span>
            <span>01</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl dark:text-white text-neutral-900 tracking-tight">
            Web Systems & Full-Stack Architecture
          </h2>
        </div>
        <p className="font-sans text-sm dark:text-cream/60 text-neutral-600 max-w-md font-light leading-relaxed">
          Production full-stack applications engineered for speed, strict typing, decoupled microservices, and hardened authentication.
        </p>
      </div>

      {/* Core Technical Stack Banner */}
      <div className="mb-14 rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-5 sm:p-8 shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b dark:border-white/10 border-black/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 bg-gold/10">
              <Layers className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h3 className="font-forum text-xl dark:text-white text-neutral-900">Full-Stack Competencies & Standards</h3>
              <p className="font-sans text-xs dark:text-cream/60 text-neutral-600 font-light">
                End-to-end fluency from database schemas to interactive client interfaces.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-xs dark:text-cream/80 text-neutral-700">
              <Server className="h-3 w-3 text-gold" /> REST Microservices
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-xs dark:text-cream/80 text-neutral-700">
              <Database className="h-3 w-3 text-gold" /> Cloud Atlas Schemas
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-xs dark:text-cream/80 text-neutral-700">
              <ShieldCheck className="h-3 w-3 text-emerald-500" /> HTTPOnly Auth
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 pt-4">
          {WEB_SKILLS.map((skill, idx) => (
            <UiverseSkillCard
              key={idx}
              name={skill.name}
              level={skill.level}
              note={skill.note}
              onClick={() => onSelectDetail('skill-web-backend')}
            />
          ))}
        </div>
      </div>

      {/* Featured Web Systems: Luxury 3D Perspective Card Slide Deck */}
      <div className="rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-neutral-50 p-4 sm:p-8 shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
        {/* Showcase Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b dark:border-white/10 border-black/10 pb-5 mb-6">
          <div className="flex items-center gap-2.5">
            <Sparkles className="h-4 w-4 text-gold" />
            <h3 className="font-forum text-xl sm:text-2xl dark:text-white text-neutral-900 tracking-wide">
              Architectural Systems Deck
            </h3>
            <span className="font-mono text-xs text-gold/80 bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/30">
              07 Deployments
            </span>
          </div>

          {/* Slide Arrow Navigation & Counter */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs dark:text-cream/60 text-neutral-500">
              #{String(currentIndex + 1).padStart(2, '0')} / 07
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="h-8 w-8 rounded-lg border dark:border-white/15 border-black/15 dark:bg-white/5 bg-white hover:border-gold/60 hover:text-gold flex items-center justify-center transition-all shadow-sm"
                aria-label="Previous Project"
                title="Previous Project"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextSlide}
                className="h-8 w-8 rounded-lg border dark:border-white/15 border-black/15 dark:bg-white/5 bg-white hover:border-gold/60 hover:text-gold flex items-center justify-center transition-all shadow-sm"
                aria-label="Next Project"
                title="Next Project"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Perspective Stage */}
        <div
          className="project-slide-stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="project-slide-track">
            {WEB_PROJECTS.map((project, idx) => {
              const IconComponent = project.icon;
              const offsetStr = getOffset(idx, currentIndex, WEB_PROJECTS.length);
              const isCenter = offsetStr === '0';

              return (
                <div
                  key={project.id}
                  data-offset={offsetStr}
                  className={`project-slide-card flex flex-col justify-between p-4 sm:p-7 ${
                    isCenter ? 'is-active ring-1 ring-gold/70' : 'hover:border-gold/40'
                  }`}
                  onClick={() => {
                    if (isCenter) {
                      onSelectDetail(project.detailId);
                    } else {
                      setCurrentIndex(idx);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Inspect ${project.title}`}
                >
                  <div>
                    {/* Card Top: Index, Badge & Links */}
                    <div className="flex items-center justify-between gap-2 mb-2 sm:mb-4">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="font-mono text-[11px] sm:text-xs font-bold text-gold tracking-tight">
                          #{String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 sm:px-2.5 sm:py-0.5 font-mono text-[9px] sm:text-[10px] font-semibold text-gold shadow-sm">
                          {project.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 sm:gap-1.5" onClick={(e) => e.stopPropagation()}>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 sm:p-1.5 rounded-lg border dark:border-white/10 border-black/10 dark:text-cream/70 text-neutral-600 hover:text-gold hover:border-gold/50 transition-colors"
                            title="Launch Live Application"
                          >
                            <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 sm:p-1.5 rounded-lg border dark:border-white/10 border-black/10 dark:text-cream/70 text-neutral-600 hover:text-gold hover:border-gold/50 transition-colors"
                          title="View GitHub Repository"
                        >
                          <GithubIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Project Icon Avatar & Category */}
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                      <div className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 rounded-xl border border-gold/40 bg-gold/10 flex items-center justify-center text-gold shadow-sm">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-forum text-lg sm:text-2xl dark:text-white text-neutral-900 tracking-wide leading-tight truncate">
                          {project.title}
                        </h4>
                        <p className="font-sans text-[10px] sm:text-[11px] font-medium text-gold/90 truncate">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="font-sans text-[11px] sm:text-xs dark:text-cream/70 text-neutral-600 line-clamp-2 sm:line-clamp-3 leading-relaxed font-light mb-2.5 sm:mb-4">
                      {project.description}
                    </p>

                    {/* Key Metrics Matrix (2 items) */}
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2 border-t dark:border-white/10 border-black/10 pt-2 sm:pt-3 mb-2 sm:mb-4">
                      {project.stats.slice(0, 2).map((stat, sIdx) => (
                        <div
                          key={sIdx}
                          className="rounded-lg border dark:border-white/5 border-black/5 dark:bg-[#181818] bg-neutral-100 p-1.5 sm:p-2"
                        >
                          <span className="font-mono text-[8.5px] sm:text-[9px] dark:text-cream/50 text-neutral-500 uppercase block truncate">
                            {stat.label}
                          </span>
                          <span className="font-mono text-[10px] sm:text-[11px] dark:text-white text-neutral-900 font-semibold block mt-0.5 truncate">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-1.5 sm:px-2 py-0.5 font-mono text-[9px] sm:text-[10px] dark:text-cream/80 text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="rounded-md border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-1 sm:px-1.5 py-0.5 font-mono text-[9px] sm:text-[10px] text-gold">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectDetail(project.detailId);
                    }}
                    className="w-full mt-2.5 sm:mt-4 flex items-center justify-between rounded-xl border border-gold/40 bg-gold/10 hover:bg-gold/20 px-3 py-2 sm:px-3.5 sm:py-2.5 font-mono text-[11px] sm:text-xs text-gold transition-all group"
                  >
                    <span className="font-medium">Inspect System Dossier</span>
                    <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 pt-3.5 sm:pt-5 border-t dark:border-white/10 border-black/10">
          {WEB_PROJECTS.map((project, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={project.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-6 sm:h-7 px-2.5 sm:px-3 rounded-full font-mono text-[10px] sm:text-[11px] transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gold text-black font-bold shadow-md shadow-gold/30 scale-105'
                    : 'dark:bg-white/5 bg-neutral-100 dark:text-cream/60 text-neutral-600 hover:dark:bg-white/10 hover:bg-neutral-200'
                }`}
                title={project.title}
              >
                <span>#{String(idx + 1).padStart(2, '0')}</span>
                <span className="hidden sm:inline">{project.title}</span>
              </button>
            );
          })}
        </div>

        <p className="font-mono text-[11px] dark:text-cream/50 text-neutral-500 text-center mt-3">
          Click any side card or use arrows to slide · Click center card to open full architectural dossier
        </p>
      </div>
    </div>
  );
};

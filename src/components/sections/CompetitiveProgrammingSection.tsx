import React from 'react';
import { SpotlightCard } from '../common/SpotlightCard';
import { ArrowRight, Trophy, Terminal, ExternalLink, GitCommit, CheckCircle2, Award, Code2, Flame } from 'lucide-react';
import { GithubGraph } from '../common/GithubGraph';
import { SAFIN_GITHUB_CONTRIBUTIONS } from '../../data/githubContributions';
import { Tilt } from '@/components/core/tilt';
import { UiverseSkillCard } from '../ui/uiverse-skill-card';

interface CompetitiveProgrammingSectionProps {
  onSelectDetail: (detailId: string) => void;
}

const CONTEST_HONORS = [
  {
    id: 'takeoff',
    title: 'DIU Take Off Programming Contest',
    badge: 'Contest Finalist',
    organization: 'DIU Computer Programming Club (CPC)',
    detailId: 'achieve-diu-takeoff',
    description:
      'Recognized as a Finalist and Core Organizing Volunteer for DIU Take Off, the flagship competitive coding contest for university undergraduates. Handled mock round coordination and solved complex timed problem sets under contest pressure.',
    stats: [
      { label: 'Recognition', value: 'Finalist Award' },
      { label: 'Tournament', value: 'DIU Take Off' },
      { label: 'Host Club', value: 'DIU CPC' },
      { label: 'Language', value: 'Pure C' },
    ],
  },
  {
    id: 'uta',
    title: 'Unlock The Algorithm (UTA)',
    badge: 'Bootcamp Finalist',
    organization: 'Algorithmic Problem-Solving Initiative',
    detailId: 'achieve-uta',
    description:
      'Finalist in Unlock The Algorithm (UTA), an intensive tournament designed to cultivate advanced algorithmic intuition, dynamic programming problem-solving, and efficient graph traversal methods.',
    stats: [
      { label: 'Status', value: 'Finalist Honors' },
      { label: 'Domain', value: 'Data Structures' },
      { label: 'Focus', value: 'Algorithm Design' },
      { label: 'Peer Rank', value: 'Top Percentile' },
    ],
  },
  {
    id: 'c-systems',
    title: 'C Console Application Suite',
    badge: 'Systems Archive',
    organization: 'Standalone Systems & Binary Files',
    detailId: 'proj-c-suite',
    description:
      'Curated repository of four terminal applications engineered in pure C99: Student Records, E-Commerce Orders, Marks Manager, and Real-Time Clock with binary file persistence and zero heap memory leaks.',
    stats: [
      { label: 'Suite Size', value: '4 Applications' },
      { label: 'Language', value: '100% C99' },
      { label: 'Memory Model', value: 'Pointers & Structs' },
      { label: 'Persistence', value: 'Binary File Streams' },
    ],
  },
];

const ALGO_PILLARS = [
  { name: 'Pure C (C99) & C++ STL', level: '100% Baseline', note: 'Direct memory layout, pointer arithmetic, manual heap management' },
  { name: 'Data Structures Mastery', level: 'Advanced', note: 'Linked lists, binary search trees, priority heaps, hash tables' },
  { name: 'Graph Theory & Traversal', level: 'Proficient', note: 'BFS, DFS, shortest path (Dijkstra), cycle detection' },
  { name: 'Dynamic Programming & Greedy', level: 'Active Practice', note: 'Memoization tables, knapsack, interval scheduling' },
  { name: 'Big-O Complexity Bounds', level: 'Rigor', note: 'Strict time and space complexity optimization under contest limits' },
  { name: 'Beecrowd Online Judge', level: '380+ Solved', note: 'Curated problem solutions repository in GitHub archive' },
];

export const CompetitiveProgrammingSection: React.FC<CompetitiveProgrammingSectionProps> = ({ onSelectDetail }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16 sm:py-24 overflow-x-clip">
      {/* Sector Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b dark:border-white/10 border-black/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] dark:text-cream/50 text-neutral-500 mb-2">
            <span className="text-gold">Engineering Sector</span>
            <span>/</span>
            <span>05</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl dark:text-white text-neutral-900 tracking-tight">
            Competitive Programming & Algorithmic Rigor
          </h2>
        </div>
        <p className="font-sans text-sm dark:text-cream/60 text-neutral-600 max-w-md font-light leading-relaxed">
          Daily problem solving, contest finalist honors, memory discipline, and data structures practiced in pure C and C++.
        </p>
      </div>

      {/* Featured Competitive Programming Matrix with Interactive GitHub Graph */}
      <div className="mb-16">
        <SpotlightCard className="p-5 sm:p-10 border-gold/40 dark:bg-[#111111] bg-white shadow-lg">
          {/* Top Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b dark:border-white/10 border-black/10">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="inline-flex h-6 items-center gap-1.5 whitespace-nowrap shrink-0 rounded-full border border-gold/50 bg-gold/15 px-3 font-mono text-[11px] font-semibold text-gold uppercase tracking-wider shadow-[0_0_12px_rgba(212,175,55,0.12)]">
                  <Trophy className="h-3 w-3" />
                  Algorithmic Stream
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono dark:text-cream/70 text-neutral-700 dark:bg-white/5 bg-neutral-100 border dark:border-white/10 border-black/10 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                  <Terminal className="h-3 w-3 text-gold" />
                  100% Pure C & C++
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-0.5 whitespace-nowrap font-medium">
                  <Flame className="h-3 w-3" />
                  Active Streak
                </span>
              </div>
              <h3 className="font-forum text-2xl sm:text-3xl dark:text-white text-neutral-900 tracking-wide">
                Live GitHub Contribution & Problem Solving Matrix
              </h3>
              <p className="font-sans text-xs sm:text-sm dark:text-cream/70 text-neutral-600 font-light mt-1 max-w-2xl">
                Continuous commit history across Beecrowd / URI Online Judge solutions, contest simulations, and systems repositories.
              </p>
            </div>

            {/* Quick Actions & Profile Link */}
            <div className="flex items-center gap-3 self-start lg:self-center">
              <a
                href="https://github.com/Safin313-REBORN"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border dark:border-white/20 border-black/15 dark:bg-white/5 bg-neutral-100 px-4 py-2 font-mono text-xs dark:text-cream text-neutral-800 hover:border-gold dark:hover:text-white hover:text-black transition-all dark:hover:bg-white/10 hover:bg-neutral-200"
              >
                <GitCommit className="h-3.5 w-3.5 text-gold group-hover:rotate-45 transition-transform" />
                <span className="font-bold">@Safin313-REBORN</span>
                <ExternalLink className="h-3 w-3 dark:text-cream/50 text-neutral-400 group-hover:text-gold" />
              </a>
            </div>
          </div>

          {/* Interactive GitHub Contribution Graph */}
          <div className="py-8 border-b dark:border-white/10 border-black/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-mono text-xs dark:text-cream/60 text-neutral-600">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Public Repository & Competitive Activity (Past 7 Months)</span>
              </div>
              <span className="font-mono text-xs text-gold/80 hidden sm:inline">
                Hover over cells for commit timestamps
              </span>
            </div>

            {/* The Graph */}
            <div className="rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#0c0c0c] bg-neutral-50 p-4 sm:p-6 shadow-sm overflow-x-auto">
              <GithubGraph
                account="Safin313-REBORN"
                data={SAFIN_GITHUB_CONTRIBUTIONS}
                variant="github"
                animation="wave"
                ambientEffect="none"
                showLegend={true}
                showAccount={false}
                months={7}
                autoFit={false}
                cellSize={16}
                cellGap={4}
                cellRadius={3}
              />
            </div>
          </div>

          {/* Key CP Highlights & Badges Footer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <Tilt rotationFactor={8} isReverse className="h-full">
              <div
                style={{
                  borderRadius: '16px',
                  transform: 'translateZ(20px)',
                  transformStyle: 'preserve-3d',
                }}
                className="group h-full rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-4 sm:p-5 transition-all duration-300 dark:hover:border-gold/60 hover:border-gold/50 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)] flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="font-mono text-[10px] uppercase dark:text-cream/50 text-neutral-500 tracking-wider block">
                      Contest Status
                    </span>
                    <span className="font-mono text-[10px] dark:text-cream/40 text-neutral-400">01</span>
                  </div>
                  <h4 className="font-forum text-base sm:text-lg dark:text-white text-neutral-900 font-semibold flex items-center gap-1.5 group-hover:text-gold transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Finalist</span>
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs dark:text-cream/60 text-neutral-600 leading-relaxed font-light mt-1">
                    DIU Take Off & UTA
                  </p>
                </div>
              </div>
            </Tilt>

            <Tilt rotationFactor={8} isReverse className="h-full">
              <div
                style={{
                  borderRadius: '16px',
                  transform: 'translateZ(20px)',
                  transformStyle: 'preserve-3d',
                }}
                className="group h-full rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-4 sm:p-5 transition-all duration-300 dark:hover:border-gold/60 hover:border-gold/50 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)] flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="font-mono text-[10px] uppercase dark:text-cream/50 text-neutral-500 tracking-wider block">
                      Baseline Stack
                    </span>
                    <span className="font-mono text-[10px] dark:text-cream/40 text-neutral-400">02</span>
                  </div>
                  <h4 className="font-forum text-base sm:text-lg dark:text-white text-neutral-900 font-semibold flex items-center gap-1.5 group-hover:text-gold transition-colors">
                    <span className="text-gold font-mono text-sm font-bold shrink-0">#</span>
                    <span>C & C++</span>
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs dark:text-cream/60 text-neutral-600 leading-relaxed font-light mt-1">
                    Pointers & Struct Layouts
                  </p>
                </div>
              </div>
            </Tilt>

            <Tilt rotationFactor={8} isReverse className="h-full">
              <div
                style={{
                  borderRadius: '16px',
                  transform: 'translateZ(20px)',
                  transformStyle: 'preserve-3d',
                }}
                className="group h-full rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-4 sm:p-5 transition-all duration-300 dark:hover:border-gold/60 hover:border-gold/50 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)] flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="font-mono text-[10px] uppercase dark:text-cream/50 text-neutral-500 tracking-wider block">
                      Online Judge
                    </span>
                    <span className="font-mono text-[10px] dark:text-cream/40 text-neutral-400">03</span>
                  </div>
                  <h4 className="font-forum text-base sm:text-lg dark:text-white text-neutral-900 font-semibold flex items-center gap-1.5 group-hover:text-gold transition-colors">
                    <Terminal className="h-4 w-4 text-gold shrink-0" />
                    <span>Beecrowd Archive</span>
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs dark:text-cream/60 text-neutral-600 leading-relaxed font-light mt-1">
                    380+ Solved Challenges
                  </p>
                </div>
              </div>
            </Tilt>

            <Tilt rotationFactor={8} isReverse className="h-full">
              <div
                style={{
                  borderRadius: '16px',
                  transform: 'translateZ(20px)',
                  transformStyle: 'preserve-3d',
                }}
                className="group h-full rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-4 sm:p-5 transition-all duration-300 dark:hover:border-gold/60 hover:border-gold/50 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)] flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="font-mono text-[10px] uppercase dark:text-cream/50 text-neutral-500 tracking-wider block">
                      Club Leadership
                    </span>
                    <span className="font-mono text-[10px] dark:text-cream/40 text-neutral-400">04</span>
                  </div>
                  <h4 className="font-forum text-base sm:text-lg dark:text-white text-neutral-900 font-semibold flex items-center gap-1.5 group-hover:text-gold transition-colors">
                    <Trophy className="h-4 w-4 text-gold shrink-0" />
                    <span>DIU CPC Member</span>
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs dark:text-cream/60 text-neutral-600 leading-relaxed font-light mt-1">
                    Contests & Mock Logistics
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </SpotlightCard>
      </div>

      {/* Algorithmic Competencies Banner */}
      <div className="mb-14 rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-6 sm:p-8 shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3 pb-6 border-b dark:border-white/10 border-black/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 bg-gold/10">
            <Code2 className="h-5 w-5 text-gold" />
          </div>
          <div>
            <h3 className="font-forum text-xl dark:text-white text-neutral-900">Algorithmic Disciplines & Principles</h3>
            <p className="font-sans text-xs dark:text-cream/60 text-neutral-600 font-light">Focusing on efficiency, deterministic memory footprints, and mathematical logic.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 pt-4">
          {ALGO_PILLARS.map((item, idx) => (
            <UiverseSkillCard
              key={idx}
              name={item.name}
              level={item.level}
              note={item.note}
              onClick={() => {
                if (item.name.toLowerCase().includes('beecrowd')) {
                  onSelectDetail('proj-beecrowd-archive');
                } else if (item.name.toLowerCase().includes('pure c')) {
                  onSelectDetail('proj-c-suite');
                } else {
                  onSelectDetail('skill-languages');
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Contest Honors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CONTEST_HONORS.map((item) => (
          <SpotlightCard
            key={item.id}
            onClick={() => onSelectDetail(item.detailId)}
            className="p-6 sm:p-7 flex flex-col justify-between group cursor-pointer hover:border-gold/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <span className="inline-flex items-center whitespace-nowrap shrink-0 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-gold shadow-[0_0_10px_rgba(212,175,55,0.08)]">
                  {item.badge}
                </span>
                <Award className="h-4 w-4 dark:text-cream/40 text-neutral-400 group-hover:text-gold transition-colors" />
              </div>

              <h3 className="font-forum text-xl dark:text-white text-neutral-900 tracking-wide mb-1 group-hover:text-gold transition-colors line-clamp-1">
                {item.title}
              </h3>
              <p className="font-sans text-xs font-medium text-gold/90 dark:text-gold/80 mb-2.5 line-clamp-1">
                {item.organization}
              </p>
              <p className="font-sans text-xs dark:text-cream/65 text-neutral-600 leading-relaxed font-light mb-5 line-clamp-2">
                {item.description}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-gold group-hover:translate-x-1 transition-transform pt-3 border-t dark:border-white/5 border-black/10">
              <span>Inspect Contest Dossier</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

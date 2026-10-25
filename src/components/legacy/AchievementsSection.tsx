import React from 'react';
import { MILESTONES } from '../../data/portfolioData';
import { SpotlightCard } from '../common/SpotlightCard';
import { ArrowRight, Trophy, Terminal, ExternalLink, GitCommit, CheckCircle2 } from 'lucide-react';
import { GithubGraph } from '../common/GithubGraph';
import { SAFIN_GITHUB_CONTRIBUTIONS } from '../../data/githubContributions';

interface AchievementsSectionProps {
  onSelectDetail: (detailId: string) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onSelectDetail }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-12">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cream/50 mb-2">
            <span className="text-gold">06</span>
            <span>/</span>
            <span>Benchmarks & Honors</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Milestones, Contests & Recognitions
          </h2>
        </div>
        <p className="font-sans text-sm text-cream/60 max-w-md font-light leading-relaxed">
          Peer-reviewed research authorship, competitive programming honors, and institutional leadership awards.
        </p>
      </div>

      {/* Featured Competitive Programming Sector with Interactive GitHub Graph */}
      <div className="mb-16">
        <SpotlightCard className="p-8 sm:p-10 border-gold/30 dark:bg-[#111111] bg-white shadow-lg">
          {/* Top Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="flex h-6 items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 font-mono text-[11px] font-semibold text-gold uppercase tracking-wider">
                  <Trophy className="h-3 w-3" />
                  Competitive Programming Sector
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-cream/60 bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5">
                  <Terminal className="h-3 w-3 text-gold" />
                  100% Pure C & C++
                </span>
              </div>
              <h3 className="font-forum text-2xl sm:text-3xl text-white tracking-wide">
                Algorithmic Commitment & Problem Solving Matrix
              </h3>
              <p className="font-sans text-xs sm:text-sm text-cream/70 font-light mt-1 max-w-2xl">
                Continuous activity stream across Beecrowd / URI Online Judge, DIU Take Off Contests, and Unlock The Algorithm (UTA) repositories.
              </p>
            </div>

            {/* Quick Actions & Profile Link */}
            <div className="flex items-center gap-3 self-start lg:self-center">
              <a
                href="https://github.com/Safin313-REBORN"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-mono text-xs text-cream hover:border-gold hover:text-white transition-all hover:bg-white/10"
              >
                <GitCommit className="h-3.5 w-3.5 text-gold group-hover:rotate-45 transition-transform" />
                <span>@Safin313-REBORN</span>
                <ExternalLink className="h-3 w-3 text-cream/50 group-hover:text-gold" />
              </a>
            </div>
          </div>

          {/* Interactive GitHub Contribution Graph */}
          <div className="py-8 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-cream/60">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Public & Repository Contributions (Past 6 Months)</span>
              </div>
              <span className="font-mono text-xs text-gold/80 hidden sm:inline">
                Hover cells for commit timestamps
              </span>
            </div>

            {/* The Graph */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 sm:p-6 backdrop-blur-sm overflow-x-auto">
              <GithubGraph
                account="Safin313-REBORN"
                data={SAFIN_GITHUB_CONTRIBUTIONS}
                variant="github"
                animation="wave"
                ambientEffect="twinkle"
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
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="font-mono text-[10px] uppercase text-cream/50 tracking-wider block mb-1">
                Contest Status
              </span>
              <span className="font-forum text-lg text-white font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Finalist
              </span>
              <span className="font-sans text-[11px] text-cream/60 block mt-0.5">
                DIU Take Off & UTA
              </span>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="font-mono text-[10px] uppercase text-cream/50 tracking-wider block mb-1">
                Baseline Stack
              </span>
              <span className="font-forum text-lg text-white font-semibold flex items-center gap-1.5">
                <span className="text-gold font-mono text-sm font-bold">#</span>
                C & C++
              </span>
              <span className="font-sans text-[11px] text-cream/60 block mt-0.5">
                Pointers & Struct Layouts
              </span>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="font-mono text-[10px] uppercase text-cream/50 tracking-wider block mb-1">
                Online Judge
              </span>
              <span className="font-forum text-lg text-white font-semibold">
                Beecrowd Archive
              </span>
              <span className="font-sans text-[11px] text-cream/60 block mt-0.5">
                Curated Problem Solutions
              </span>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
              <span className="font-mono text-[10px] uppercase text-cream/50 tracking-wider block mb-1">
                Club Leadership
              </span>
              <span className="font-forum text-lg text-white font-semibold">
                DIU CPC Member
              </span>
              <span className="font-sans text-[11px] text-cream/60 block mt-0.5">
                Contests & Mock Logistics
              </span>
            </div>
          </div>
        </SpotlightCard>
      </div>

      {/* Grid of Milestone Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MILESTONES.map((item) => (
          <SpotlightCard
            key={item.id}
            onClick={() => onSelectDetail(item.detailId)}
            className="p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-[11px] text-gold font-medium">
                  {item.badge}
                </span>
                <span className="font-mono text-xs text-cream/50">{item.dateOrRank}</span>
              </div>

              <h3 className="font-forum text-2xl text-white tracking-wide mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-xs font-medium text-cream/80 mb-4">
                {item.organization}
              </p>
              <p className="font-sans text-xs text-cream/65 leading-relaxed font-light mb-6">
                {item.summary}
              </p>

              {/* Metrics row */}
              <div className="space-y-2 border-t border-white/10 pt-4 mb-6">
                {item.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs font-mono py-0.5"
                  >
                    <span className="text-cream/50">{metric.label}</span>
                    <span className="text-white font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-gold group-hover:translate-x-1 transition-transform pt-2 border-t border-white/5">
              <span>View Milestone Dossier</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

import { CANDIDATE_INFO } from '../../data/portfolioData';
import { ArrowDown, Terminal, Shield, Cpu } from 'lucide-react';

interface HeroSectionProps {
  onSelectDetail: (detailId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectDetail }) => {
  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-screen w-full flex flex-col justify-center items-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-black"
    >
      {/* Background ambient radial illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[550px] rounded-full bg-gradient-to-b from-white/[0.045] via-gold/[0.015] to-transparent blur-3xl opacity-75"
      />

      {/* Subtle background luxury cursive marquee running behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-0 right-0 -translate-y-1/2 flex select-none overflow-hidden opacity-10 z-0"
      >
        <div className="flex animate-marquee whitespace-nowrap font-script text-7xl sm:text-8xl md:text-9xl text-cream">
          <span className="mx-6">Saharia Hassan Safin</span>
          <span className="mx-6">·</span>
          <span className="mx-6">Full-Stack Architect</span>
          <span className="mx-6">·</span>
          <span className="mx-6">Embedded Systems</span>
          <span className="mx-6">·</span>
          <span className="mx-6">Defensive Cybersecurity</span>
          <span className="mx-6">·</span>
          <span className="mx-6">iCONEECT 2026 Author</span>
          <span className="mx-6">·</span>
        </div>
        <div
          aria-hidden="true"
          className="flex animate-marquee whitespace-nowrap font-script text-7xl sm:text-8xl md:text-9xl text-cream"
        >
          <span className="mx-6">Saharia Hassan Safin</span>
          <span className="mx-6">·</span>
          <span className="mx-6">Full-Stack Architect</span>
          <span className="mx-6">·</span>
          <span className="mx-6">Embedded Systems</span>
          <span className="mx-6">·</span>
          <span className="mx-6">Defensive Cybersecurity</span>
          <span className="mx-6">·</span>
          <span className="mx-6">iCONEECT 2026 Author</span>
          <span className="mx-6">·</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Editorial Headline & Meta */}
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/80">
              Active In Dhaka & Remote
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide text-white leading-[1.08]">
              Saharia Hassan <br className="hidden sm:inline" />
              <span className="italic font-cinzel text-cream">Safin</span>
            </h1>
            <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-gold/90 font-medium">
              Full-Stack Developer · Embedded Systems · Defensive Cyber
            </p>
          </div>

          <p className="font-sans text-base sm:text-lg text-cream/75 leading-relaxed font-light">
            Computer Science & Engineering student at Daffodil International University and Frontend Developer at Projectile Electronic. Bridging production MERN platforms, low-level C firmware, and peer-reviewed IoT machine learning (iCONEECT 2026).
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#work"
              className="neumorphic-btn inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-xs sm:text-sm font-medium text-white tracking-wide shadow-neumorphic focus:outline-none focus-visible:ring-2 focus-visible:ring-cream/60"
            >
              <Terminal className="h-4 w-4 text-gold" />
              <span>Explore Selected Work</span>
            </a>

            <a
              href="#simulator"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-medium text-cream backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:text-white"
            >
              <Cpu className="h-4 w-4 text-cream/70" />
              <span>Launch Simulator</span>
            </a>

            <a
              href={CANDIDATE_INFO.resumePdf}
              download="Saharia_Hassan_Safin_Resume.pdf"
              className="botao"
              aria-label="Download Saharia Hassan Safin Resume PDF"
            >
              <span className="texto font-cinzel tracking-wider inline-flex items-center gap-1.5">
                <span>Resume</span>
                <svg
                  className="h-3 w-3 opacity-90 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </span>
              <svg
                className="mysvg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          {/* Core Verticals Quick Tags */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-4">
            <button
              type="button"
              onClick={() => onSelectDetail('pillar-algorithmic')}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono text-cream/60 hover:text-white hover:border-white/25 transition-all"
            >
              #C99-Algorithms
            </button>
            <button
              type="button"
              onClick={() => onSelectDetail('pillar-systems')}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono text-cream/60 hover:text-white hover:border-white/25 transition-all"
            >
              #ESP32-IoT
            </button>
            <button
              type="button"
              onClick={() => onSelectDetail('skill-web-backend')}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono text-cream/60 hover:text-white hover:border-white/25 transition-all"
            >
              #MERN-Stack
            </button>
            <button
              type="button"
              onClick={() => onSelectDetail('research-sleepguard')}
              className="inline-flex items-center whitespace-nowrap rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-mono font-medium text-gold hover:bg-gold/20 transition-all shadow-[0_0_10px_rgba(212,175,55,0.08)]"
            >
              #iCONEECT-2026
            </button>
          </div>
        </div>

        {/* Right Column: Portrait Cutout with Ambient Radial Bloom */}
        <div className="relative flex justify-center items-center">
          {/* Radial Bloom Behind Portrait */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -m-8 rounded-full bg-gradient-to-tr from-gold/20 via-white/10 to-transparent blur-2xl opacity-60 animate-pulse-subtle"
          />

          {/* Geometric luxury frame */}
          <div className="relative group p-2 rounded-3xl border border-white/15 bg-white/[0.025] backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:border-white/35">
            <div className="relative h-[360px] w-[270px] sm:h-[460px] sm:w-[340px] md:h-[500px] md:w-[370px] overflow-hidden rounded-2xl bg-neutral-950">
              <img
                src={CANDIDATE_INFO.image}
                alt="Portrait of Saharia Hassan Safin"
                width={370}
                height={500}
                decoding="async"
                // @ts-expect-error fetchpriority attribute
                fetchpriority="high"
                loading="eager"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gradient vignette overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-60"
              />

              {/* Inset metadata tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/15 bg-black/60 px-4 py-2.5 backdrop-blur-md">
                <div>
                  <div className="font-cinzel text-sm text-cream font-medium tracking-wide">
                    Saharia Hassan Safin
                  </div>
                  <div className="font-mono text-[10px] text-cream/60">
                    DIU CSE · Projectile Electronic
                  </div>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Shield className="h-3.5 w-3.5 text-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Metrics Bar */}
      <div className="relative z-10 mt-16 mx-auto max-w-7xl w-full grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-8">
        <div
          onClick={() => onSelectDetail('research-sleepguard')}
          role="button"
          tabIndex={0}
          aria-label="Inspect SleepGuard research metrics"
          className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.04]"
        >
          <div className="font-mono text-2xl sm:text-3xl font-semibold text-white group-hover:text-gold transition-colors">
            98.95%
          </div>
          <div className="font-sans text-xs font-medium text-cream/80 mt-1">
            Apnea ML Accuracy
          </div>
          <div className="font-mono text-[10px] text-cream/45 mt-0.5">
            iCONEECT 2026 Peer-Reviewed
          </div>
        </div>

        <div
          onClick={() => onSelectDetail('proj-github-portfolio')}
          role="button"
          tabIndex={0}
          aria-label="Inspect GitHub developer footprint"
          className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.04]"
        >
          <div className="font-mono text-2xl sm:text-3xl font-semibold text-white group-hover:text-gold transition-colors">
            32+
          </div>
          <div className="font-sans text-xs font-medium text-cream/80 mt-1">
            Open-Source Repositories
          </div>
          <div className="font-mono text-[10px] text-cream/45 mt-0.5">
            Web, C Firmware, Tools & Docs
          </div>
        </div>

        <div
          onClick={() => onSelectDetail('pillar-algorithmic')}
          role="button"
          tabIndex={0}
          aria-label="Inspect algorithmic baseline"
          className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.04]"
        >
          <div className="font-mono text-2xl sm:text-3xl font-semibold text-white group-hover:text-gold transition-colors">
            100% C
          </div>
          <div className="font-sans text-xs font-medium text-cream/80 mt-1">
            Competitive Algorithmic Baseline
          </div>
          <div className="font-mono text-[10px] text-cream/45 mt-0.5">
            Beecrowd Online Judge Archive
          </div>
        </div>

        <div
          onClick={() => onSelectDetail('proj-pawshome')}
          role="button"
          tabIndex={0}
          aria-label="Inspect PawsHome MERN architecture"
          className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.04]"
        >
          <div className="font-mono text-2xl sm:text-3xl font-semibold text-white group-hover:text-gold transition-colors">
            MERN
          </div>
          <div className="font-sans text-xs font-medium text-cream/80 mt-1">
            Production Cloud Delivery
          </div>
          <div className="font-mono text-[10px] text-cream/45 mt-0.5">
            JWT HTTPOnly + Render/Vercel
          </div>
        </div>
      </div>

      {/* Down anchor */}
      <a
        href="#story"
        aria-label="Scroll to Section 01: Story"
        className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream/60 transition-all hover:bg-white/15 hover:text-white"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
};

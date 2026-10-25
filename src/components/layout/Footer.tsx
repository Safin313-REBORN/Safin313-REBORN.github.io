import React from 'react';
import { CANDIDATE_INFO } from '../../data/portfolioData';
import {
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  WhatsappIcon,
  FiverrIcon,
} from '../common/SocialIcons';
import { Mail } from 'lucide-react';
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t dark:border-white/10 border-black/10 dark:bg-black/80 bg-[#f4f3ef]/80 backdrop-blur-xl pt-20 pb-12 dark:text-cream text-neutral-800 overflow-hidden transition-colors duration-300">
      {/* Ambient background bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-t dark:from-white/[0.03] from-black/[0.02] to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-12 overflow-x-clip">
        {/* Top editorial banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b dark:border-white/10 border-black/10">
          <div className="md:col-span-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] dark:text-cream/40 text-neutral-500">
              Candidate Dossier · Engineering Invariant
            </span>
            <blockquote className="font-forum text-xl sm:text-2xl dark:text-cream/90 text-neutral-900 leading-snug">
              “{CANDIDATE_INFO.philosophyQuote}”
            </blockquote>
            <p className="font-cinzel text-xl sm:text-2xl text-gold/90 pt-2 tracking-[0.16em] uppercase">
              {CANDIDATE_INFO.signatureText}
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/50 text-neutral-600">
              Core Verticals
            </h4>
            <ul className="space-y-2 text-sm dark:text-cream/70 text-neutral-600 font-sans">
              <li className="dark:hover:text-white hover:text-black transition-colors">Full-Stack MERN Architecture</li>
              <li className="dark:hover:text-white hover:text-black transition-colors">Low-Level C & Systems Modeling</li>
              <li className="dark:hover:text-white hover:text-black transition-colors">Robotics & Embedded IoT</li>
              <li className="dark:hover:text-white hover:text-black transition-colors">Defensive Cyber & Network Auditing</li>
              <li className="dark:hover:text-white hover:text-black transition-colors">Peer-Reviewed ML Research</li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] dark:text-cream/50 text-neutral-600 mb-3">
                Direct Touchpoints
              </h4>
              <div className="flex flex-col space-y-2 text-sm">
                <a
                  href={`mailto:${CANDIDATE_INFO.email}`}
                  className="group inline-flex items-center gap-2.5 dark:text-cream/70 text-neutral-600 dark:hover:text-gold hover:text-[#997300] transition-all duration-200 hover:translate-x-1"
                >
                  <Mail className="h-4 w-4 dark:text-cream/50 text-neutral-400 dark:group-hover:text-gold group-hover:text-[#997300] group-hover:scale-110 transition-all duration-200" />
                  <span>{CANDIDATE_INFO.email}</span>
                </a>
                <a
                  href={CANDIDATE_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 dark:text-cream/70 text-neutral-600 dark:hover:text-[#25D366] hover:text-[#128C7E] transition-all duration-200 hover:translate-x-1"
                >
                  <WhatsappIcon className="h-4 w-4 dark:text-cream/50 text-neutral-400 dark:group-hover:text-[#25D366] group-hover:text-[#128C7E] group-hover:scale-110 transition-all duration-200" />
                  <span>{CANDIDATE_INFO.whatsappDisplay}</span>
                </a>
                <a
                  href={CANDIDATE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 dark:text-cream/70 text-neutral-600 dark:hover:text-white hover:text-[#24292e] transition-all duration-200 hover:translate-x-1"
                >
                  <GithubIcon className="h-4 w-4 dark:text-cream/50 text-neutral-400 dark:group-hover:text-white group-hover:text-[#24292e] group-hover:scale-110 transition-all duration-200" />
                  <span>{CANDIDATE_INFO.githubDisplay}</span>
                </a>
                <a
                  href={CANDIDATE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 dark:text-cream/70 text-neutral-600 dark:hover:text-[#38bdf8] hover:text-[#0a66c2] transition-all duration-200 hover:translate-x-1"
                >
                  <LinkedinIcon className="h-4 w-4 dark:text-cream/50 text-neutral-400 dark:group-hover:text-[#38bdf8] group-hover:text-[#0a66c2] group-hover:scale-110 transition-all duration-200" />
                  <span>{CANDIDATE_INFO.linkedinDisplay}</span>
                </a>
                <a
                  href={CANDIDATE_INFO.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 dark:text-cream/70 text-neutral-600 dark:hover:text-[#34d399] hover:text-[#00ab6c] transition-all duration-200 hover:translate-x-1"
                >
                  <MediumIcon className="h-4 w-4 dark:text-cream/50 text-neutral-400 dark:group-hover:text-[#34d399] group-hover:text-[#00ab6c] group-hover:scale-110 transition-all duration-200" />
                  <span>{CANDIDATE_INFO.mediumDisplay}</span>
                </a>
                <a
                  href={CANDIDATE_INFO.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 dark:text-cream/70 text-neutral-600 dark:hover:text-[#1dbf73] hover:text-[#109655] transition-all duration-200 hover:translate-x-1"
                >
                  <FiverrIcon className="h-4 w-4 dark:text-cream/50 text-neutral-400 dark:group-hover:text-[#1dbf73] group-hover:text-[#109655] group-hover:scale-110 transition-all duration-200" />
                  <span>{CANDIDATE_INFO.fiverrDisplay}</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                type="button"
                className="back-to-top-btn"
                aria-label="Back to top"
              >
                <div className="text font-cinzel font-semibold tracking-wider">
                  <span>B</span>
                  <span>a</span>
                  <span>c</span>
                  <span>k</span>
                </div>
                <div className="clone font-cinzel font-semibold tracking-wider">
                  <span>B</span>
                  <span>a</span>
                  <span>c</span>
                  <span>k</span>
                </div>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono dark:text-cream/40 text-neutral-500">
          <div>
            © {currentYear} <span className="font-cinzel tracking-wider dark:text-cream text-neutral-900 font-medium">{CANDIDATE_INFO.name}</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>React 18 · Vite 5 · TypeScript 5 · Tailwind CSS</span>
            <span>•</span>
            <span className="dark:text-cream/60 text-neutral-600">Editorial Luxury Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

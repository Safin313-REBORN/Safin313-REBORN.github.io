import React from 'react';
import { SpotlightCard } from '../common/SpotlightCard';
import { ArrowRight, Shield, Terminal, Eye, Lock } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { UiverseSkillCard } from '../ui/uiverse-skill-card';

interface CybersecuritySectionProps {
  onSelectDetail: (detailId: string) => void;
}

const CYBER_FOCUS_AREAS = [
  {
    id: 'windows-cheatsheet',
    title: 'Windows Commands Cheatsheet',
    subtitle: 'Cybersecurity, Recon & Sysadmin Terminal Reference',
    badge: 'Open Source · MIT',
    detailId: 'proj-windows-cheatsheet',
    githubUrl: 'https://github.com/Safin313-REBORN',
    description:
      'Authored and published a widely consulted Windows CMD & PowerShell reference manual for penetration testers, security analysts, and systems administrators. Covers privilege escalation discovery, active directory recon, and network mapping.',
    techStack: ['PowerShell', 'Windows CMD', 'Network Recon', 'Privilege Escalation', 'MIT License'],
    stats: [
      { label: 'License', value: 'MIT Open Source' },
      { label: 'Scope', value: 'CMD + PowerShell' },
      { label: 'Target', value: 'Security Learners' },
      { label: 'Auditing', value: 'Privilege Escalation' },
    ],
  },
  {
    id: 'network-pcap-audit',
    title: 'Network Packet Dissection & PCAP Auditing',
    subtitle: 'Wireshark Protocol Analysis & Anomaly Detection',
    badge: 'Defensive Lab',
    detailId: 'pillar-cyber',
    description:
      'Hands-on packet stream dissection using Wireshark across TCP/IP stacks. Analyzing TCP three-way handshake anomalies, DNS tunneling detection, ARP poisoning reconnaissance, and TLS encryption handshake validations.',
    techStack: ['Wireshark', 'PCAP Analysis', 'TCP/IP Protocol', 'ARP Defense', 'DNS Spoofing Analysis'],
    stats: [
      { label: 'Analysis Tool', value: 'Wireshark & Tshark' },
      { label: 'Protocols', value: 'TCP, UDP, DNS, TLS' },
      { label: 'Inspection', value: 'Deep Packet Inspection' },
      { label: 'Mitigation', value: 'ARP Poison Defense' },
    ],
  },
  {
    id: 'owasp-hardening',
    title: 'OWASP Top 10 Web Defense & Audit Suite',
    subtitle: 'Injection Prevention, Session Guards & CSRF Hardening',
    badge: 'Application Security',
    detailId: 'skill-cybersecurity',
    description:
      'Systematic hardening of production web architectures against OWASP Top 10 vulnerabilities. Implements parameter sanitization against SQL injection, strict CSP headers against XSS, and HTTPOnly/SameSite cookie guards.',
    techStack: ['OWASP Top 10', 'CSP Headers', 'HTTPOnly Cookies', 'Input Sanitization', 'CORS Rules'],
    stats: [
      { label: 'Vulnerability Focus', value: 'OWASP Top 10' },
      { label: 'Token Defense', value: 'HTTPOnly + SameSite' },
      { label: 'Recon Tool', value: 'OSINT & Dorking' },
      { label: 'Pen-Test Lab', value: 'Kali Linux VM' },
    ],
  },
];

const CYBER_SKILLS = [
  { name: 'Kali Linux Toolchain', level: 'Practitioner', note: 'Dedicated penetration testing environment and command-line forensics' },
  { name: 'Wireshark & Deep Packet Analysis', level: 'Practitioner', note: 'Capturing, filtering, and dissecting live traffic flows and handshake faults' },
  { name: 'Metasploit Framework', level: 'Practitioner', note: 'Vulnerability exploitation modeling, payloads, and defense verification' },
  { name: 'OWASP Security Top 10 Hardening', level: 'Applied', note: 'Preventing XSS, CSRF, NoSQL injection, and broken access controls' },
  { name: 'OSINT & Reconnaissance', level: 'Certified', note: 'Open-source intelligence, domain footprinting, and Google Dorking' },
  { name: 'Cisco Networking Basics', level: 'Certified', note: 'OSI 7-layer architecture, subnetting, CIDR, and routing fundamentals' },
];

export const CybersecuritySection: React.FC<CybersecuritySectionProps> = ({ onSelectDetail }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16 sm:py-24 overflow-x-clip">
      {/* Sector Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b dark:border-white/10 border-black/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] dark:text-cream/50 text-neutral-500 mb-2">
            <span className="text-gold">Engineering Sector</span>
            <span>/</span>
            <span>03</span>
          </div>
          <h2 className="font-forum text-3xl sm:text-4xl md:text-5xl dark:text-white text-neutral-900 tracking-tight">
            Cybersecurity & Defensive Auditing
          </h2>
        </div>
        <p className="font-sans text-sm dark:text-cream/60 text-neutral-600 max-w-md font-light leading-relaxed">
          Proactive network dissection, penetration testing environments, OWASP web application hardening, and ethical hacking.
        </p>
      </div>

      {/* Core Technical Stack Banner */}
      <div className="mb-14 rounded-2xl border dark:border-white/10 border-black/10 dark:bg-[#111111] bg-white p-5 sm:p-8 shadow-sm dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b dark:border-white/10 border-black/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 bg-gold/10">
              <Shield className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h3 className="font-forum text-xl dark:text-white text-neutral-900">Security Arsenal & Verification Toolchain</h3>
              <p className="font-sans text-xs dark:text-cream/60 text-neutral-600 font-light">Combining offensive intelligence with deterministic defense-in-depth.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-xs dark:text-cream/80 text-neutral-700">
              <Terminal className="h-3 w-3 text-gold" /> Kali Linux Toolchain
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-xs dark:text-cream/80 text-neutral-700">
              <Eye className="h-3 w-3 text-gold" /> Wireshark PCAP
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-3 py-1 font-mono text-xs dark:text-cream/80 text-neutral-700">
              <Lock className="h-3 w-3 text-emerald-500" /> OWASP Top 10
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 pt-4">
          {CYBER_SKILLS.map((skill, idx) => (
            <UiverseSkillCard
              key={idx}
              name={skill.name}
              level={skill.level}
              note={skill.note}
              onClick={() => onSelectDetail('skill-cybersecurity')}
            />
          ))}
        </div>
      </div>

      {/* Cyber Projects & Labs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CYBER_FOCUS_AREAS.map((item) => (
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
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="dark:text-cream/50 text-neutral-400 dark:hover:text-gold hover:text-black transition-colors p-1"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                )}
              </div>

              <h3 className="font-forum text-xl dark:text-white text-neutral-900 tracking-wide mb-1 group-hover:text-gold transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="font-sans text-xs font-medium text-gold/90 dark:text-gold/80 mb-2.5 line-clamp-2">
                {item.subtitle}
              </p>
              <p className="font-sans text-xs dark:text-cream/65 text-neutral-600 leading-relaxed font-light mb-4 line-clamp-2">
                {item.description}
              </p>

              {/* Core Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {item.techStack.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border dark:border-white/10 border-black/10 dark:bg-white/5 bg-neutral-100 px-2 py-0.5 font-mono text-[10px] dark:text-cream/80 text-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-gold group-hover:translate-x-1 transition-transform pt-3 border-t dark:border-white/5 border-black/10">
              <span>Inspect Security Dossier</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

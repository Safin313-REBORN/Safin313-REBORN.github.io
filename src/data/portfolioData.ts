import {
  PillarItem,
  CourseworkItem,
  RoadmapPhase,
  ProjectItem,
  MilestoneItem,
  CertificateItem,
  ExperienceItem,
} from '../types/portfolio';

export const CANDIDATE_INFO = {
  name: 'Saharia Hassan Safin',
  role: 'Full-Stack Developer · Embedded Systems Engineer · Cybersecurity Enthusiast',
  shortTitle: 'Software Architect & Systems Engineer',
  signatureText: 'Saharia Hassan Safin',
  location: 'Dhaka, Bangladesh',
  phone: '01763609992',
  phoneDisplay: '+880 1763-609992',
  whatsapp: 'https://wa.me/8801763609992',
  whatsappDisplay: '+880 1763-609992',
  email: 'safinhassan164@gmail.com',
  github: 'https://github.com/Safin313-REBORN',
  githubDisplay: 'github.com/Safin313-REBORN',
  linkedin: 'https://linkedin.com/in/saharia-hassan-safin',
  linkedinDisplay: 'linkedin.com/in/saharia-hassan-safin',
  medium: 'https://medium.com/@sahariahassansafin',
  mediumDisplay: 'medium.com/@sahariahassansafin',
  fiverr: 'https://fiverr.com/shahariarsaf892',
  fiverrDisplay: 'fiverr.com/shahariarsaf892',
  image: '/assets/saharia-safin.jpg',
  resumePdf: '/assets/Saharia_Hassan_Safin_Resume.pdf',
  executiveBio:
    'Results-driven Computer Science & Engineering student and full-stack developer with a proven record of shipping production-grade MERN applications, engineering custom embedded IoT systems, and co-authoring peer-reviewed academic research (iCONEECT 2026). Currently working as a frontend developer at Projectile Electronic, where I also build robotics projects and take on leadership and shop-management responsibilities. Strong competitive-programming foundation backed by real software delivery — cloud deployment, secure authentication, and hardware/firmware architecture. Actively expanding into cybersecurity and ethical hacking, with hands-on practice in network analysis, penetration testing fundamentals, and CTF challenges. Freelances independently on Fiverr, and has been formally recognized for institutional leadership through volunteer service in a corporate strategic training program.',
  philosophyQuote:
    'I find order in chaos, intelligence in complexity, and power in the architecture of the unknown. I dissect what others fear to question, uncover what others fail to perceive, and engineer what others deem impossible. In silence, I master systems; in darkness, I discover possibilities; beyond limits, I architect the future.',
  openTo: [
    'Full-Stack Engineering Roles',
    'Embedded / IoT Systems Projects',
    'Cybersecurity Research & Internships',
    'Global Freelance Collaborations',
  ],
};

// --------------------------------------------------------------------------
// SECTION 01: PILLARS
// --------------------------------------------------------------------------
export const PILLARS: PillarItem[] = [
  {
    id: 'pillar-1',
    number: '01',
    title: 'Algorithmic Mindset',
    subtitle: 'Low-Level Rigor & Discrete Logic',
    description:
      'Mastery of pointer arithmetic, stack/heap boundaries, and structural algorithmic complexity. Trained in pure C to build deterministic systems that eliminate latency and respect finite computing boundaries.',
    detailId: 'pillar-algorithmic',
    icon: 'Cpu',
    traits: ['C99 / C++ Systems', 'Zero-Leak Heap Discipline', 'Beecrowd Online Judge', 'O(N log N) Bounds'],
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'Systems & Embedded IoT',
    subtitle: 'Hardware × Software Synthesis',
    description:
      'Bridging physical sensor telemetry with real-time firmware loops. From engineering robotics at Projectile Electronic to peer-reviewed machine learning on biometric signals (SpO2 & heart rate).',
    detailId: 'pillar-systems',
    icon: 'Radio',
    traits: ['ESP32 / FreeRTOS', 'I2C / SPI Sensors', 'Robotics Hardware', '98.95% Apnea ML'],
  },
  {
    id: 'pillar-3',
    number: '03',
    title: 'Defensive Cyber Posture',
    subtitle: 'Network Auditing & Surface Defense',
    description:
      'Hardening web applications and inspecting networks from both offensive and defensive vantage points. Hands-on in Kali Linux, Wireshark packet dissectors, Metasploit, and HTTPOnly authentication.',
    detailId: 'pillar-cyber',
    icon: 'Shield',
    traits: ['Kali Linux & Wireshark', 'Metasploit & OSINT', 'OWASP Hardening', 'Cisco Certified'],
  },
];

// --------------------------------------------------------------------------
// SECTION 02: ACADEMICS & COURSEWORK
// --------------------------------------------------------------------------
export const ACADEMIC_INSTITUTIONS = [
  {
    id: 'diu',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Daffodil International University (DIU)',
    location: 'Dhaka, Bangladesh',
    period: '2025 – Present',
    badge: 'Undergraduate Program',
    detailId: 'diu-cse-degree',
    highlights: [
      'Department of Computer Science and Engineering',
      'Executive Member of DIU Computer Programming Club (CPC)',
      'Active Member of DIU Cybersecurity Club and Skill Up Club',
      'Peer-reviewed research co-authorship published at iCONEECT 2026',
    ],
  },
  {
    id: 'bgc',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Barishal Govt. College',
    location: 'Barishal, Bangladesh',
    period: '2023 – 2024',
    badge: 'Science Division',
    detailId: 'barishal-college-hsc',
    highlights: [
      'Advanced Mathematics, Physics, Chemistry, and ICT',
      'Promoted to Lance Corporal (LCPL) in Bangladesh National Cadet Corps (BNCC)',
      'Rigorous foundation in analytical problem solving and calculus',
    ],
  },
  {
    id: 'bzs',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Barishal Zilla School',
    location: 'Barishal, Bangladesh',
    period: '2021 – 2022',
    badge: 'Science Division',
    detailId: 'barishal-zilla-ssc',
    highlights: [
      'Historic premier secondary institution established in 1829',
      'Science concentration with distinctions in mathematics',
      'Foundational computing, civic engagement, and scout drills',
    ],
  },
];

export const CORE_COURSEWORK: CourseworkItem[] = [
  { name: 'Data Structures & Algorithms', badge: 'Core Theory', focus: 'Time/space Big-O, balanced trees, graph traversal, and dynamic programming' },
  { name: 'Operating Systems & Concurrency', badge: 'Systems', focus: 'Process scheduling, deadlocks, semaphores, memory paging, and file systems' },
  { name: 'Computer Networks & Protocols', badge: 'Infrastructure', focus: 'OSI 7-layer model, TCP/IP handshake, DNS, HTTP/S, packet routing, and Wireshark' },
  { name: 'Database Management Systems', badge: 'Data Tier', focus: 'Relational schema design, normalization, indexing, transactions, and NoSQL MongoDB' },
  { name: 'Object-Oriented Programming', badge: 'Architecture', focus: 'Design patterns, encapsulation, polymorphism, inheritance in C++, Java, and PHP' },
  { name: 'Embedded Systems & Microcontrollers', badge: 'Hardware', focus: 'GPIO interrupts, analog-to-digital conversion, I2C/SPI busses, and FreeRTOS tasks' },
  { name: 'Information Security & Cryptography', badge: 'Defense', focus: 'Symmetric/asymmetric encryption, hashing, authentication tokens, and OWASP Top 10' },
  { name: 'Machine Learning & Biometrics', badge: 'Applied AI', focus: 'Feature engineering, SMOTE balancing, ensemble models, and edge inference' },
];

export const RESEARCH_PUBLICATION = {
  title: 'An IoT-Compatible Machine Learning Framework for Sleep Apnea Risk Prediction Using SpO2 and Heart Rate (SleepGuard)',
  conference: '2026 1st International Conference on Next-Generation Electrical & Electronics, Computer Systems, and Technologies (iCONEECT)',
  dates: '25–26 September 2026',
  location: 'Premier University, Chittagong, Bangladesh',
  authors: ['Md Muhasin Ali', 'Md Sadin Foraji', 'Md. Rakibul Islam', 'Saharia Hassan Safin', 'Abdullah Al Masud', 'Israt Jahan Mojumdar'],
  summary:
    'Proposed SleepGuard, an ultra-lightweight edge ML screening framework that classifies sleep apnea risk into Normal, Warning, or Critical states from four non-invasive inputs: age, gender, heart rate (BPM), and blood oxygen saturation (SpO2). Trained on 471 clinical records with SMOTE data-balancing strictly isolated to training splits; the soft-voting hybrid ensemble achieved 98.95% test accuracy.',
  detailId: 'research-sleepguard',
  metrics: [
    { label: 'Test Accuracy', value: '98.95%' },
    { label: 'Patient Cohort', value: '471 Records' },
    { label: 'Input Signals', value: '4 Non-Invasive' },
    { label: 'Architecture', value: 'Soft-Voting Hybrid' },
  ],
};

// --------------------------------------------------------------------------
// SECTION 03: TECHNICAL ARSENAL (4 DOMAINS)
// --------------------------------------------------------------------------
export const ARSENAL_DOMAINS = [
  {
    id: 'arsenal-lang',
    domainNumber: '01',
    title: 'Programming Languages',
    subtitle: 'Compiled systems & modern runtime versatility',
    detailId: 'skill-languages',
    icon: 'Code2',
    skills: [
      { name: 'C', level: 'Advanced / Native', note: 'Pointers, struct layout, memory' },
      { name: 'C++', level: 'Advanced', note: 'STL, OOP, competitive code' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', note: 'Asynchronous event loop, DOM' },
      { name: 'TypeScript', level: 'Proficient', note: 'Strict typing, interfaces, generics' },
      { name: 'Python', level: 'Proficient', note: 'Data pipelines, Scikit-learn, ML' },
      { name: 'Java & PHP', level: 'Foundational', note: 'OOP patterns, MVC, server scripts' },
    ],
  },
  {
    id: 'arsenal-web',
    domainNumber: '02',
    title: 'Full-Stack & Web Systems',
    subtitle: 'Decoupled, high-performance web engineering',
    detailId: 'skill-web-backend',
    icon: 'Layers',
    skills: [
      { name: 'React 18 & Vite 5', level: 'Production', note: 'Hooks, state architecture, HMR' },
      { name: 'Next.js & BetterAuth', level: 'Advanced', note: 'SSR, app router, modern auth' },
      { name: 'Node.js & Express', level: 'Production', note: 'RESTful microservices, middleware' },
      { name: 'MongoDB Atlas', level: 'Production', note: 'Indexed schemas, aggregation' },
      { name: 'Tailwind CSS & DaisyUI', level: 'Expert', note: 'Custom design systems & tokens' },
      { name: 'JWT & Firebase Auth', level: 'Production', note: 'HTTPOnly cookies, OAuth flows' },
    ],
  },
  {
    id: 'arsenal-iot',
    domainNumber: '03',
    title: 'Embedded Systems & IoT',
    subtitle: 'Microcontrollers, sensors & robotics hardware',
    detailId: 'skill-embedded-iot',
    icon: 'Cpu',
    skills: [
      { name: 'ESP32 (Tensilica)', level: 'Advanced', note: 'Dual-core, WiFi/BLE, FreeRTOS' },
      { name: 'Arduino (AVR)', level: 'Advanced', note: 'Interrupts, PWM, serial control' },
      { name: 'OLED Programming', level: 'Production', note: 'SSD1306, I2C graphical UI' },
      { name: 'Sensor Integration', level: 'Production', note: 'SpO2, PPG heart rate, telemetry' },
      { name: 'Robotics Prototyping', level: 'Industry', note: 'Motors, relays, hardware at Projectile' },
      { name: 'Firmware Architecture', level: 'Advanced', note: 'Non-blocking state machines' },
    ],
  },
  {
    id: 'arsenal-cyber',
    domainNumber: '04',
    title: 'Cybersecurity & Theory',
    subtitle: 'Defensive audits, packet inspection & algorithms',
    detailId: 'skill-cybersecurity',
    icon: 'ShieldCheck',
    skills: [
      { name: 'Kali Linux Toolchain', level: 'Practitioner', note: 'Dedicated penetration environment' },
      { name: 'Wireshark & PCAP', level: 'Practitioner', note: 'Network packet dissection' },
      { name: 'Metasploit & Scanners', level: 'Practitioner', note: 'Vulnerability mapping & exploits' },
      { name: 'OWASP Security Top 10', level: 'Applied', note: 'XSS, CSRF, SQLi sanitization' },
      { name: 'OSINT & Google Dorking', level: 'Certified', note: 'Reconnaissance & asset mapping' },
      { name: 'Competitive Programming', level: 'Active', note: 'Data structures & Beecrowd' },
    ],
  },
];

// --------------------------------------------------------------------------
// SECTION 04: ROADMAP PHASES
// --------------------------------------------------------------------------
export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    number: '01',
    phase: 'Phase 01',
    title: 'Low-Level Foundations & Algorithmic Rigor',
    status: 'Mastered',
    timeline: '2022 – 2024',
    summary:
      'Grounded in pure C, manual memory layout, pointer mechanics, and structural algorithms. Solved extensive competitive problems on Beecrowd and engineered four file-persisted terminal applications.',
    competencies: ['Pointer arithmetic & dynamic heap', 'Beecrowd Online Judge archive', 'Struct-driven file serialization', 'ANSI terminal GUI suites'],
    detailId: 'roadmap-phase-1',
  },
  {
    number: '02',
    phase: 'Phase 02',
    title: 'Full-Stack MERN, Cloud Architecture & Secure APIs',
    status: 'Mastered',
    timeline: '2024 – 2026',
    summary:
      'Engineered and deployed decoupled web applications with secure HTTPOnly JWT authentication, MongoDB Atlas databases, and responsive client interfaces on Render and Vercel. Active freelance delivery on Fiverr.',
    competencies: ['Decoupled MERN architectures', 'HTTPOnly cookie JWT security', 'Vercel & Render CI/CD pipelines', 'Global freelance delivery on Fiverr'],
    detailId: 'roadmap-phase-2',
  },
  {
    number: '03',
    phase: 'Phase 03',
    title: 'Embedded IoT, Hardware Robotics & Edge ML',
    status: 'In Progress',
    timeline: '2026 – Present',
    summary:
      'Synthesizing embedded hardware with machine learning intelligence. Working at Projectile Electronic building robotics and client web platforms, alongside co-authoring peer-reviewed biomedical research at iCONEECT 2026.',
    competencies: ['ESP32 & Arduino hardware prototyping', 'Projectile Electronic frontend & robotics', 'Biometric telemetry (SpO2 & BPM)', 'iCONEECT 2026 research co-authorship'],
    detailId: 'roadmap-phase-3',
  },
  {
    number: '04',
    phase: 'Phase 04',
    title: 'Applied Cybersecurity & Defensive Systems Architecture',
    status: 'Target Goal',
    timeline: '2026 – 2028',
    summary:
      'Unifying low-level C programming, cloud microservices, and network defense to audit high-consequence infrastructure. Preparing for industry penetration testing accreditations and IoT firmware security research.',
    competencies: ['Advanced network penetration testing', 'IoT firmware reverse engineering', 'Professional security accreditations', 'AI red-teaming & system hardening'],
    detailId: 'roadmap-phase-4',
  },
];

// --------------------------------------------------------------------------
// SECTION 05: SELECTED PROJECTS
// --------------------------------------------------------------------------
export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: 'pawshome',
    title: 'PawsHome',
    subtitle: 'Production MERN Pet Adoption Platform',
    category: 'Full-Stack Web App',
    badge: 'Live Product',
    liveUrl: 'https://pawshome.vercel.app',
    githubUrl: 'https://github.com/Safin313-REBORN',
    description:
      'Architected and shipped a production pet adoption platform end-to-end with independent client and server repositories. Implemented secure JWT HTTPOnly cookie authentication, Firebase Auth, MongoDB Atlas persistence, CORS-hardened REST API, and Framer Motion micro-animations.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Firebase Auth', 'Tailwind CSS', 'Framer Motion'],
    stats: [
      { label: 'Auth Security', value: 'JWT HTTPOnly' },
      { label: 'Database', value: 'Atlas Cloud' },
      { label: 'Hosting', value: 'Render + Vercel' },
      { label: 'Repositories', value: 'Client + Server' },
    ],
    detailId: 'proj-pawshome',
  },
  {
    id: 'sleepguard',
    title: 'SleepGuard ML Framework',
    subtitle: 'IoT-Compatible Apnea Risk Prediction',
    category: 'Biomedical AI Research',
    badge: 'iCONEECT 2026',
    githubUrl: 'https://github.com/Safin313-REBORN',
    description:
      'A lightweight machine learning screening framework that classifies obstructive sleep apnea risk from four easily acquired bio-signals (age, gender, BPM, and SpO2). Trained on 471 clinical records with SMOTE data-balancing, achieving 98.95% test classification accuracy.',
    techStack: ['Python', 'Scikit-learn', 'SMOTE', 'IoT Telemetry', 'Ensemble Learning', 'Biometrics'],
    stats: [
      { label: 'Accuracy', value: '98.95%' },
      { label: 'Features', value: '4 Signals' },
      { label: 'Records', value: '471 Patients' },
      { label: 'Conference', value: 'iCONEECT 2026' },
    ],
    detailId: 'research-sleepguard',
  },
  {
    id: 'crowdfunding',
    title: 'Crowdfunding Platform',
    subtitle: 'Full-Stack Community Pledge Engine',
    category: 'MERN Web App',
    badge: 'Client + Server',
    githubUrl: 'https://github.com/Safin313-REBORN',
    description:
      'A complete crowdfunding web application featuring independent client and server codebases. Encompasses campaign launching, multi-tier contributions, live pledge tracking, and administrative verification workflows on React and Node/Express.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Tailwind CSS'],
    stats: [
      { label: 'API Pattern', value: 'RESTful' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Workflows', value: 'Campaign Lifecycle' },
      { label: 'Architecture', value: 'Decoupled' },
    ],
    detailId: 'proj-crowdfunding',
  },
  {
    id: 'skillswap',
    title: 'SkillSwap Platform',
    subtitle: 'Peer-to-Peer Talent Exchange Market',
    category: 'Full-Stack Web App',
    badge: 'Client + Server',
    githubUrl: 'https://github.com/Safin313-REBORN',
    description:
      'A peer-to-peer talent barter exchange pairing a fast Vite/React frontend with an Express API backend. Users match mutual learning needs, initiate skill swap sessions, and track status milestones in real time.',
    techStack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB Atlas', 'Tailwind CSS'],
    stats: [
      { label: 'Engine', value: 'Matching Matrix' },
      { label: 'Bundler', value: 'Vite 5' },
      { label: 'Status States', value: '4 Lifecycle Steps' },
      { label: 'Data Store', value: 'MongoDB' },
    ],
    detailId: 'proj-skillswap',
  },
  {
    id: 'apple-gallery',
    title: 'Apple Tile Gallery',
    subtitle: 'Interactive Media Showcase & Modern Auth',
    category: 'Modern Web App',
    badge: 'Next.js · TypeScript',
    githubUrl: 'https://github.com/Safin313-REBORN',
    description:
      'A tile gallery web application built with Next.js and TypeScript, incorporating modern BetterAuth authentication, MongoDB data storage, DaisyUI primitives, and touch-optimized Swiper carousels.',
    techStack: ['Next.js', 'TypeScript', 'BetterAuth', 'MongoDB', 'DaisyUI', 'Swiper'],
    stats: [
      { label: 'Framework', value: 'Next.js 14+' },
      { label: 'Typing', value: 'Strict TypeScript' },
      { label: 'Auth Solution', value: 'BetterAuth' },
      { label: 'UI Slider', value: 'Swiper JS' },
    ],
    detailId: 'proj-apple-gallery',
  },
  {
    id: 'c-console-suite',
    title: 'C Console Application Suite',
    subtitle: 'Four Systems Applications in Pure C',
    category: 'Systems Programming',
    badge: 'Structs · File I/O',
    githubUrl: 'https://github.com/Safin313-REBORN',
    description:
      'A comprehensive suite of four terminal applications featuring binary/text file persistence, pointer-based record structures, and formatted ANSI terminal user interfaces: Student Records, E-Commerce Orders, Marks Manager, and Real-Time Clock.',
    techStack: ['Pure C (C99)', 'Binary File I/O', 'Struct Data Layout', 'Memory Pointers', 'ANSI Escape Codes'],
    stats: [
      { label: 'Apps in Suite', value: '4 Complete' },
      { label: 'Language', value: '100% C' },
      { label: 'Persistence', value: 'File Streams' },
      { label: 'Memory', value: 'Zero Leaks' },
    ],
    detailId: 'proj-c-suite',
  },
  {
    id: 'keenkeeper',
    title: 'Keen Keeper',
    subtitle: 'Relationship Cadence & Frequency Tracker',
    category: 'Analytics Web App',
    badge: 'React · Recharts',
    githubUrl: 'https://github.com/Safin313-REBORN',
    description:
      'A relationship-nurturing tracking tool built with React, Vite, and Tailwind CSS. Employs dynamic Recharts SVG visualizations to map communication frequency and remind users when to rekindle connections.',
    techStack: ['React', 'Recharts', 'Vite', 'Tailwind CSS', 'Local Persistence'],
    stats: [
      { label: 'Visualization', value: 'Recharts' },
      { label: 'Styling', value: 'Tailwind' },
      { label: 'State Sync', value: 'Zero-Lag' },
      { label: 'Focus', value: 'Habit Analytics' },
    ],
    detailId: 'proj-keenkeeper',
  },
  {
    id: 'windows-cheatsheet',
    title: 'Windows Commands Cheatsheet',
    subtitle: 'Cybersecurity & Sysadmin Terminal Reference',
    category: 'Security Reference',
    badge: 'MIT Licensed',
    githubUrl: 'https://github.com/Safin313-REBORN',
    description:
      'Authored and published a widely consulted Windows CMD & PowerShell reference manual for penetration testers, security analysts, and systems administrators, released under open-source MIT licensing.',
    techStack: ['PowerShell', 'Windows CMD', 'Network Recon', 'Privilege Escalation', 'MIT License'],
    stats: [
      { label: 'License', value: 'MIT Open Source' },
      { label: 'Scope', value: 'CMD + PowerShell' },
      { label: 'Target', value: 'Security Learners' },
      { label: 'Community', value: 'GitHub Pinned' },
    ],
    detailId: 'proj-windows-cheatsheet',
  },
];

// --------------------------------------------------------------------------
// SECTION 06: MILESTONES & ACHIEVEMENTS
// --------------------------------------------------------------------------
export const MILESTONES: MilestoneItem[] = [
  {
    id: 'm1',
    title: 'Peer-Reviewed Conference Research Authorship (iCONEECT 2026)',
    organization: 'Premier University, Chittagong',
    dateOrRank: 'Sept 25–26, 2026',
    badge: 'Published Paper',
    summary:
      'Co-authored research on "SleepGuard: IoT Machine Learning Framework for Sleep Apnea Risk Prediction Using SpO2 and Heart Rate", accepted and presented at iCONEECT 2026.',
    detailId: 'achieve-iconeect',
    metrics: [
      { label: 'Classification Accuracy', value: '98.95%' },
      { label: 'Model', value: 'Soft-Voting Hybrid' },
      { label: 'Data Balancing', value: 'SMOTE Isolated' },
    ],
  },
  {
    id: 'm2',
    title: 'Certificate of Appreciation — Titas Gas Corporate Training',
    organization: 'Titas Gas Transmission & Distribution PLC × DIU CSE × HRDI',
    dateOrRank: 'July 16–18, 2026',
    badge: 'Corporate Honors',
    summary:
      'Formally honored for outstanding contribution in executing a three-day executive training program on AI-Powered Productivity Transformation, awarded by Head of CSE and Director in-charge HRDI.',
    detailId: 'achieve-titas-leadership',
    metrics: [
      { label: 'Corporate Host', value: 'Titas Gas PLC' },
      { label: 'Program Duration', value: '3 Full Days' },
      { label: 'Awarding Signers', value: 'Head of CSE & HRDI' },
    ],
  },
  {
    id: 'm3',
    title: 'DIU Take Off Programming Contest — Volunteer & Finalist Recognition',
    organization: 'DIU Computer Programming Club (CPC)',
    dateOrRank: 'Finalist Honors',
    badge: 'Contest Honors',
    summary:
      'Served as a core volunteer and recognized as a Finalist for outstanding participation and contribution to DIU Take Off, the premier competitive coding tournament for computer science undergraduates.',
    detailId: 'achieve-diu-takeoff',
    metrics: [
      { label: 'Recognition', value: 'Finalist Award' },
      { label: 'Event', value: 'DIU Take Off' },
      { label: 'Organization', value: 'DIU CPC' },
    ],
  },
  {
    id: 'm4',
    title: 'Unlock The Algorithm (UTA) — Finalist Recognition',
    organization: 'Unlock The Algorithm (UTA)',
    dateOrRank: 'Finalist Honors',
    badge: 'Algorithmic Honors',
    summary:
      'Contributed as a volunteer and earned an official Finalist Certificate for outstanding contribution and algorithmic commitment in the Unlock The Algorithm competitive problem-solving track.',
    detailId: 'achieve-uta',
    metrics: [
      { label: 'Credential', value: 'Finalist Certificate' },
      { label: 'Focus', value: 'Data Structures & Algo' },
      { label: 'Contribution', value: 'Event & Competition' },
    ],
  },
  {
    id: 'm5',
    title: 'Beecrowd Online Judge Algorithmic Problem Solving Archive',
    organization: 'Beecrowd / URI Online Judge',
    dateOrRank: 'Continuous Practice',
    badge: '100% C Language',
    summary:
      'Maintains an active, open-source repository of solved algorithmic challenges in pure C, reflecting relentless discipline in algorithmic mathematics, pointers, and memory constraints.',
    detailId: 'proj-beecrowd-archive',
    metrics: [
      { label: 'Language', value: '100% Standard C' },
      { label: 'Status', value: 'Pinned GitHub Repo' },
      { label: 'Time Bound', value: 'Sub-millisecond' },
    ],
  },
  {
    id: 'm6',
    title: 'Open-Source Developer Presence & 32 Public Repositories',
    organization: 'GitHub Global Developer Network',
    dateOrRank: '32 Public Repos',
    badge: 'Active Profile',
    summary:
      'Curates a consistent, security-focused GitHub profile with animated dashboards, live contribution tracking, and open-source documentation spanning web, IoT, and systems programming.',
    detailId: 'proj-github-portfolio',
    metrics: [
      { label: 'Repositories', value: '32 Repos' },
      { label: 'Profile Focus', value: 'Security & Systems' },
      { label: 'Documentation', value: 'Branded READMEs' },
    ],
  },
];

// --------------------------------------------------------------------------
// SECTION 07: CREDENTIALS & CERTIFICATIONS
// --------------------------------------------------------------------------
export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'c1',
    title: 'Cisco Networking Academy — Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Verified Credential',
    category: 'Cybersecurity',
    detailId: 'cert-cisco-cyber',
    topics: ['CIA Triad & Threat Profiles', 'Network Security & Firewalls', 'Malware Taxonomy', 'Enterprise Defense Posture'],
  },
  {
    id: 'c2',
    title: 'freeCodeCamp — Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    date: '300 Hours',
    category: 'Web & Programming',
    detailId: 'cert-fcc-web',
    topics: ['HTML5 Semantic Architecture', 'CSS3 Modern Flexbox & Grid', 'Fluid Viewports & Breakpoints', 'WCAG 2.1 Accessibility'],
  },
  {
    id: 'c3',
    title: 'freeCodeCamp — JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: '300 Hours',
    category: 'Web & Programming',
    detailId: 'cert-fcc-js',
    topics: ['ES6+ Syntax & Closures', 'Functional Array Methods', 'Algorithmic Problem Solving', 'Object-Oriented JavaScript'],
  },
  {
    id: 'c4',
    title: 'Python Programming Certification (with Academic Transcript)',
    issuer: 'Accredited Academic Track',
    date: 'Verified Transcript',
    category: 'Web & Programming',
    detailId: 'cert-python-academic',
    topics: ['Python Object-Oriented Design', 'NumPy & Data Manipulation', 'Scikit-learn Pipelines', 'Academic Transcript Verified'],
  },
  {
    id: 'c5',
    title: 'Cyber Hygiene, OSINT, Digital Forensics & Google Dorking Workshops',
    issuer: 'Cybersecurity Workshop Series',
    date: '2026 Series',
    category: 'Cybersecurity',
    detailId: 'cert-cyber-workshops',
    topics: ['OSINT Reconnaissance Techniques', 'Digital Forensics Disk Artifacts', 'Advanced Search Google Dorking', 'Humanitarian Cyber Awareness'],
  },
  {
    id: 'c6',
    title: 'BNCC Camping, Leadership & Disaster Management Certificates',
    issuer: 'Bangladesh National Cadet Corps (BNCC)',
    date: 'Lance Corporal (LCPL)',
    category: 'Field & Office',
    detailId: 'cert-bncc-discipline',
    topics: ['Military Squad Command Drills', 'Annual Camping Field Survival', 'Civil Fire Fighting Protocols', 'Disaster Relief Management'],
  },
  {
    id: 'c7',
    title: 'Microsoft Excel Certification (with Academic Transcript)',
    issuer: 'Office Productivity Track',
    date: 'Academic Verified',
    category: 'Field & Office',
    detailId: 'cert-python-academic',
    topics: ['Spreadsheet Data Modeling', 'Statistical Formulas & VLOOKUP', 'Pivot Table Summaries', 'Academic Transcript Verified'],
  },
  {
    id: 'c8',
    title: 'Certificate of Appreciation — AI Productivity Leadership',
    issuer: 'Titas Gas PLC × DIU CSE × HRDI',
    date: 'July 2026',
    category: 'Institutional',
    detailId: 'achieve-titas-leadership',
    topics: ['Executive AI Transformation', 'Departmental Organization Support', 'Institutional Recognition', 'Dr. Sheak Rashed Haider Noori'],
  },
];

// --------------------------------------------------------------------------
// SECTION 08: LEADERSHIP, CLUBS & EXPERIENCE
// --------------------------------------------------------------------------
export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Frontend Developer & Employee',
    organization: 'Projectile Electronic',
    period: 'June 2026 – Present',
    category: 'Industry',
    location: 'Dhaka, Bangladesh',
    summary:
      'Working as a full-time frontend developer and technical team member. Builds and maintains user-facing web portals, designs hardware robotics projects combining electronics with software, and handles daily shop operations.',
    contributions: [
      'Engineered and maintains responsive client-facing web portals and technical documentation.',
      'Designed and built custom robotics mechanisms integrating microcontrollers, motor drivers, and sensor firmware.',
      'Supervises daily technical shop operations, component inventory, and client hardware troubleshooting.',
      'Coordinates collaborative engineering tasks across hardware and software delivery tracks.',
    ],
    detailId: 'exp-projectile',
  },
  {
    id: 'exp2',
    role: 'Executive Member',
    organization: 'Computer Programming Club (CPC), DIU',
    period: 'Active Term',
    category: 'Executive Leadership',
    location: 'Daffodil International University',
    summary:
      'Serves on the Executive Panel of DIU CPC, steering programming events, competitive coding rounds, and mentoring the student computing community.',
    contributions: [
      'Coordinates intra-university programming contests and mock algorithmic rounds for hundreds of student participants.',
      'Mentors junior engineering students in C/C++, data structures, and competitive problem solving.',
      'Supports guest lecture sessions and technical workshops with alumni and industry leaders.',
      'Contributes to club publications, contest problem setting, and judge environments.',
    ],
    detailId: 'exp-cpc-diu',
  },
  {
    id: 'exp3',
    role: 'Active Member',
    organization: 'Cybersecurity Club, DIU',
    period: 'Active Term',
    category: 'Community Outreach',
    location: 'Daffodil International University',
    summary:
      'Engages in club sessions, ethical hacking labs, vulnerability assessment exercises, and capture-the-flag (CTF) security scrimmages.',
    contributions: [
      'Participates in hands-on workshops covering Kali Linux, Wireshark packet capture, and Metasploit penetration audits.',
      'Collaborates on campus digital safety seminars and student cyber hygiene campaigns.',
      'Explores web vulnerability assessments mapped against the OWASP Top 10 framework.',
    ],
    detailId: 'exp-cyber-club',
  },
  {
    id: 'exp4',
    role: 'Lance Corporal (LCPL)',
    organization: 'Bangladesh National Cadet Corps (BNCC)',
    period: '2023 – Present',
    category: 'National Service',
    location: 'Bangladesh',
    summary:
      'Holds the rank of Lance Corporal in the Bangladesh National Cadet Corps, reflecting proven discipline, leadership command training, and commitment to organized national youth service.',
    contributions: [
      'Completed annual cadet camping maneuvers, survival training, and physical endurance courses.',
      'Certified in national disaster management, emergency first response, and fire fighting tactics.',
      'Commands platoon drill formations and enforces unit military discipline.',
      'Maintains unwavering dedication to national service, civic duty, and leadership integrity.',
    ],
    detailId: 'exp-bncc-corps',
  },
  {
    id: 'exp5',
    role: 'Active Member',
    organization: 'Skill Up Club, DIU',
    period: 'Active Term',
    category: 'Community Outreach',
    location: 'Daffodil International University',
    summary:
      'Participates in student skill-enhancement programs, technical workshops, communication seminars, and peer-learning circles across faculties.',
    contributions: [
      'Attends masterclasses in professional communication, technical presentation, and project pitches.',
      'Assists in organizing campus-wide skills expos and networking events.',
      'Leads small peer-review groups reviewing developer portfolios and GitHub repositories.',
    ],
    detailId: 'exp-skill-up-club',
  },
  {
    id: 'exp6',
    role: 'Independent Technical Freelancer',
    organization: 'Fiverr Global Marketplace',
    period: 'Active Freelance',
    category: 'Industry',
    location: 'Remote / Global',
    summary:
      'Operates an independent freelance software engineering practice delivering full-stack web development, custom scripts, and embedded firmware to international clients.',
    contributions: [
      'Delivers customized React, MERN, and Node.js solutions aligned with client specifications.',
      'Maintains a 5.0-star customer satisfaction record through prompt communication and pristine deliverables.',
      'Develops custom C/C++ utilities, data parsers, and embedded sensor scripts on demand.',
    ],
    detailId: 'exp-fiverr-freelance',
  },
];

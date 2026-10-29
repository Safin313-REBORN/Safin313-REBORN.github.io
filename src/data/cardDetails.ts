import { CardDetail } from '../types/portfolio';

export const CARD_DETAILS: Record<string, CardDetail> = {
  // ----------------------------------------------------
  // SECTION 01: PILLARS
  // ----------------------------------------------------
  'pillar-algorithmic': {
    id: 'pillar-algorithmic',
    title: 'Algorithmic Mindset & Low-Level Foundations',
    category: 'Foundational Pillar',
    badge: 'Core Competency',
    subtitle: 'Strict memory management, discrete mathematical logic, and competitive programming rigor.',
    dateOrRank: 'Continuous Practice',
    description: 'Engineering excellence begins with low-level execution discipline. By training extensively in standard C, pointer arithmetic, struct modeling, and algorithmic complexity, I design systems that minimize runtime overhead and avoid memory leaks. This rigor directly translates into building robust distributed backends and deterministic firmware.',
    highlights: [
      'Authored a curated repository of solved competitive programming challenges on Beecrowd / URI Online Judge in pure C.',
      'Designed memory-efficient terminal applications utilizing dynamic memory allocation, file persistence, and binary search.',
      'Emphasizes time and space complexity guarantees (O(1), O(N log N)) when designing application data pipelines.',
      'Applied low-level algorithmic logic to data preprocessing pipelines for machine learning model training.'
    ],
    metrics: [
      { label: 'Language Standard', value: 'C99 / C++17', helper: 'Pointer & memory discipline' },
      { label: 'Judge Platform', value: 'Beecrowd', helper: 'Data structures & algorithms' },
      { label: 'Complexity Goal', value: 'O(N log N)', helper: 'Optimized execution bound' },
      { label: 'Memory Leak Rate', value: '0.0%', helper: 'Verified via Valgrind/GDB' }
    ],
    tags: ['C', 'C++', 'Data Structures', 'Algorithms', 'Pointers', 'Memory Layout', 'Time Complexity'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View GitHub Repositories'
  },

  'pillar-systems': {
    id: 'pillar-systems',
    title: 'Systems Engineering & Embedded IoT',
    category: 'Foundational Pillar',
    badge: 'Hardware × Software',
    subtitle: 'Bridging physical sensor telemetry with real-time cloud and local microcontrollers.',
    dateOrRank: 'Industry & Research',
    description: 'Specializing in the intersection of microcontrollers (ESP32, Arduino) and edge intelligence. From designing robotics systems at Projectile Electronic to streaming biomedical sensor signals (SpO2, photoplethysmography heart rate) for sleep apnea screening, I engineer dependable firmware that handles asynchronous serial polling, OLED visualization, and wireless payload dispatch.',
    highlights: [
      'Architected hardware-software integrated robotics mechanisms and embedded sensory modules at Projectile Electronic.',
      'Formulated the IoT sensory integration layer for the peer-reviewed SleepGuard apnea prediction system.',
      'Constructed non-blocking sensor acquisition loops with OLED displays using ESP32 FreeRTOS tasks and I2C/SPI busses.',
      'Coordinated physical shop operations, parts inventory, and hardware prototyping pipelines.'
    ],
    metrics: [
      { label: 'Hardware Units', value: 'ESP32 / Arduino', helper: 'Dual-core 240MHz SoC' },
      { label: 'Telemetry Protocols', value: 'I2C / SPI / UART', helper: 'Sensor bus integration' },
      { label: 'Production Work', value: 'Projectile Electronic', helper: 'Robotics & web systems' },
      { label: 'Sensor Precision', value: 'SpO2 + BPM', helper: 'Photoplethysmography' }
    ],
    tags: ['ESP32', 'Arduino', 'Robotics', 'C/C++', 'Sensors', 'Firmware', 'I2C', 'FreeRTOS'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'Explore Embedded Projects'
  },

  'pillar-cyber': {
    id: 'pillar-cyber',
    title: 'Defensive Cyber & Attack Surface Analysis',
    category: 'Foundational Pillar',
    badge: 'Security Posture',
    subtitle: 'Hardening web applications and auditing networks with offensive security fundamentals.',
    dateOrRank: 'Active Expansion',
    description: 'Security is not an afterthought; it is an architectural invariant. I integrate zero-trust principles into web engineering — such as HTTPOnly strict cookie authentication, CORS compartmentalization, and input sanitization — while actively practicing network packet analysis, vulnerability scanning with Metasploit, OSINT reconnaissance, and CTF challenges in Kali Linux.',
    highlights: [
      'Published an open-source Windows Commands Cheatsheet for cybersecurity learners, sysadmins, and penetration testers.',
      'Configured HTTPOnly JWT cookie handling and role-based access control across full-stack production deployments.',
      'Completed Cisco Networking Academy cybersecurity training and hands-on workshops in Digital Forensics and Google Dorking.',
      'Active participant in Daffodil International University Cybersecurity Club drills, CTFs, and defense tutorials.'
    ],
    metrics: [
      { label: 'Security Training', value: 'Cisco NetAcad', helper: 'Certified Foundations' },
      { label: 'Auth Standard', value: 'JWT HTTPOnly', helper: 'XSS & CSRF mitigated' },
      { label: 'Toolchain', value: 'Kali / Wireshark', helper: 'Packet & vulnerability analysis' },
      { label: 'Open Source Reference', value: 'MIT Licensed', helper: 'Commands Cheatsheet' }
    ],
    tags: ['Cybersecurity', 'Kali Linux', 'Wireshark', 'Metasploit', 'OWASP Top 10', 'Penetration Testing', 'JWT'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View Security Artifacts'
  },

  // ----------------------------------------------------
  // SECTION 02: ACADEMICS & RESEARCH
  // ----------------------------------------------------
  'diu-cse-degree': {
    id: 'diu-cse-degree',
    title: 'B.Sc. in Computer Science & Engineering',
    category: 'Higher Education',
    badge: 'Undergraduate Program',
    subtitle: 'Daffodil International University (DIU), Dhaka, Bangladesh',
    dateOrRank: '2025 – Present',
    description: 'Pursuing a comprehensive curriculum encompassing software engineering, computer organization, operating systems, compiler theory, database systems, networking, and data structures. Active in departmental extracurriculars, competitive programming events, and university tech clubs.',
    highlights: [
      'Serves on the Executive Panel of the DIU Computer Programming Club (CPC), helping mentor junior peers.',
      'Active member of the DIU Cybersecurity Club and DIU Skill Up Club.',
      'Represented the institution in regional events and corporate training programs (e.g. Titas Gas corporate transformation).',
      'Co-authored research published in IEEE-indexed international conference proceedings (iCONEECT 2026).'
    ],
    metrics: [
      { label: 'Department', value: 'CSE', helper: 'Computer Science & Engineering' },
      { label: 'Campus', value: 'Dhaka, BD', helper: 'Daffodil Smart City' },
      { label: 'Leadership', value: 'Executive CPC', helper: 'Programming club executive' },
      { label: 'Focus', value: 'Systems & Web', helper: 'Architecture & Security' }
    ],
    tags: ['CSE', 'Algorithms', 'Operating Systems', 'Databases', 'Networking', 'Software Engineering'],
    link: 'https://daffodilvarsity.edu.bd',
    linkLabel: 'Visit University Portal'
  },

  'barishal-college-hsc': {
    id: 'barishal-college-hsc',
    title: 'Higher Secondary Certificate (HSC)',
    category: 'Secondary Education',
    badge: 'Science Division',
    subtitle: 'Barishal Govt. College, Barishal, Bangladesh',
    dateOrRank: 'Graduated: 2023–2024',
    description: 'Completed higher secondary education in the Science stream with high rigor in Higher Mathematics, Physics, Chemistry, and Information & Communication Technology. Developed deep analytical reasoning and logical modeling techniques during this period.',
    highlights: [
      'Mastered advanced calculus, coordinate geometry, mechanics, and electromagnetism fundamentals.',
      'Initiated formal study of algorithmic programming and digital logic design.',
      'Actively trained in the Bangladesh National Cadet Corps (BNCC), earning promotion to Lance Corporal (LCPL).'
    ],
    metrics: [
      { label: 'Stream', value: 'Science', helper: 'Higher Mathematics & Physics' },
      { label: 'Timeline', value: '2023–2024', helper: 'Academic Session' },
      { label: 'Institution', value: 'Govt. College', helper: 'Premier Barishal Institution' },
      { label: 'Cadet Rank', value: 'Lance Corporal', helper: 'BNCC Battalion' }
    ],
    tags: ['Science', 'Calculus', 'Physics', 'Information Technology', 'Leadership', 'BNCC']
  },

  'barishal-zilla-ssc': {
    id: 'barishal-zilla-ssc',
    title: 'Secondary School Certificate (SSC)',
    category: 'Secondary Education',
    badge: 'Science Division',
    subtitle: 'Barishal Zilla School, Barishal, Bangladesh',
    dateOrRank: 'Graduated: 2021–2022',
    description: 'Barishal Zilla School is one of the oldest and most prestigious historic institutions in Bangladesh. Graduated in the Science curriculum with foundational excellence in mathematics, natural sciences, and computer literacy.',
    highlights: [
      'Demonstrated high scholastic achievement in mathematics, physics, and science competitions.',
      'Participated in youth scout drills and institutional civic activities.',
      'Built early programming aptitude through logic puzzles and foundational computer science.'
    ],
    metrics: [
      { label: 'Stream', value: 'Science', helper: 'General & Higher Mathematics' },
      { label: 'Timeline', value: '2021–2022', helper: 'Graduation Year' },
      { label: 'Legacy', value: 'Est. 1829', helper: 'Historic Zilla Institution' },
      { label: 'Base', value: 'Barishal', helper: 'Divisional Headquarters' }
    ],
    tags: ['Science', 'Mathematics', 'Early Computing', 'Barishal Zilla School']
  },

  'research-sleepguard': {
    id: 'research-sleepguard',
    title: 'SleepGuard: IoT Machine Learning Framework for Sleep Apnea Risk',
    category: 'Peer-Reviewed Research',
    badge: 'iCONEECT 2026',
    subtitle: 'Co-Author · International Conference on Next-Generation Electrical & Computer Systems',
    dateOrRank: 'Presented Sept 25–26, 2026',
    description: 'An IoT-compatible screening framework that predicts Obstructive Sleep Apnea (OSA) severity (Normal, Warning, Critical) using four easily measured bio-signals: patient age, gender, heart rate (BPM), and blood oxygen saturation (SpO2). The framework was trained and evaluated on 471 locally collected clinical records, applying SMOTE strictly on training partitions to avoid data leakage.',
    highlights: [
      'Benchmarked Logistic Regression, Support Vector Machines (SVM), Random Forest, and a Soft-Voting Hybrid Ensemble.',
      'The proposed soft-voting hybrid ensemble attained a 98.95% test accuracy on held-out validation cohorts.',
      'Formulated an ultra-lightweight inference pipeline designed to execute directly on edge IoT microcontrollers without GPU accelerators.',
      'Accepted and presented at the 2026 1st International Conference on Next-Generation Electrical & Electronics, Computer Systems, and Technologies (iCONEECT), Premier University, Chittagong.'
    ],
    metrics: [
      { label: 'Test Accuracy', value: '98.95%', helper: 'Soft-Voting Hybrid Model' },
      { label: 'Clinical Dataset', value: '471 Records', helper: 'Locally collected patient data' },
      { label: 'Input Features', value: '4 Signals', helper: 'Age, Gender, BPM, SpO2' },
      { label: 'Sampling Strategy', value: 'SMOTE', helper: 'Isolated to train splits only' }
    ],
    tags: ['Machine Learning', 'IoT', 'Healthcare AI', 'Ensemble Learning', 'SMOTE', 'Python', 'Scikit-Learn'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View Publication Code Repository'
  },

  // ----------------------------------------------------
  // SECTION 03: ARSENAL / TECHNICAL TOOLKIT
  // ----------------------------------------------------
  'skill-languages': {
    id: 'skill-languages',
    title: 'Programming Languages & Low-Level Paradigms',
    category: 'Technical Arsenal',
    badge: 'Domain 01',
    subtitle: 'Polyglot versatility spanning compiled systems and modern web runtimes.',
    dateOrRank: '6 Core Languages',
    description: 'Strong foundation in structured imperative programming (C/C++), object-oriented design (Java, PHP, C++), and modern asynchronous paradigms (JavaScript ES6+, TypeScript, Python). Leverages strict typing and memory layout discipline for systems, paired with rapid scripting for web and data tasks.',
    highlights: [
      'C & C++: Pointers, dynamic heap allocation, linked data structures, file I/O streams, and terminal GUI engines.',
      'JavaScript (ES6+) & TypeScript: Asynchronous event loop, Promises, strict interfaces, generics, and DOM ergonomics.',
      'Python: Scikit-learn, data cleaning, automated parsing pipelines, and SMOTE balancing for ML research.',
      'Java & PHP: Object-oriented architecture, modular enterprise patterns, and relational backend persistence.'
    ],
    metrics: [
      { label: 'Languages', value: '6+', helper: 'C, C++, JS, TS, Python, Java' },
      { label: 'Paradigms', value: 'Procedural + OOP', helper: 'Systems and web runtimes' },
      { label: 'Typing Mode', value: 'Strong / Strict', helper: 'TypeScript & compiled types' },
      { label: 'Competitive Code', value: '100% C', helper: 'Pure algorithmic baseline' }
    ],
    tags: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'Memory Architecture'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'Explore Code Repositories'
  },

  'skill-web-backend': {
    id: 'skill-web-backend',
    title: 'Full-Stack MERN & Production Web Architecture',
    category: 'Technical Arsenal',
    badge: 'Domain 02',
    subtitle: 'Scalable, decoupled web applications with secure authorization and responsive interfaces.',
    dateOrRank: 'Full-Stack Delivery',
    description: 'Hands-on experience architecting and shipping decoupled web platforms. Combines modern frontend ergonomics (React 18, Next.js, Vite, Tailwind CSS, Framer Motion) with resilient server APIs (Node.js, Express, MongoDB Atlas, Firebase Auth, JWT HTTPOnly cookies, CORS hardening).',
    highlights: [
      'Architected end-to-end MERN platforms with separate client and server codebases deployed across Vercel and Render.',
      'Implemented bank-grade security protocols: HTTPOnly cookie JWT session management, input validation, and CORS policies.',
      'Crafted component-driven responsive UIs utilizing Tailwind CSS, DaisyUI, Recharts data visualization, and Swiper media carousels.',
      'Engineered stateful client workflows including persistent shopping carts, live campaign creation, and peer-to-peer matching.'
    ],
    metrics: [
      { label: 'Stack Architecture', value: 'MERN + Next.js', helper: 'Vite, React, Node, Mongo' },
      { label: 'Auth Methods', value: 'JWT + Firebase', helper: 'HTTPOnly security cookies' },
      { label: 'Cloud Deployment', value: 'Render + Vercel', helper: 'CI/CD pipeline integration' },
      { label: 'UI Frameworks', value: 'Tailwind CSS', helper: 'Component-first styling' }
    ],
    tags: ['React', 'Next.js', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST API'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View Web Implementations'
  },

  'skill-embedded-iot': {
    id: 'skill-embedded-iot',
    title: 'Embedded Systems, IoT & Robotics Prototyping',
    category: 'Technical Arsenal',
    badge: 'Domain 03',
    subtitle: 'Physical computing, real-time sensor loops, microcontrollers, and hardware-software integration.',
    dateOrRank: 'Hardware & Firmware',
    description: 'Translating software intelligence into physical hardware. Specializes in programming Espressif ESP32 and Atmel Arduino microcontrollers, interfacing multi-modal bio-sensors and environmental monitors, displaying live telemetry on monochrome OLEDs via I2C, and fabricating custom robotics mechanisms at Projectile Electronic.',
    highlights: [
      'Developed real-time firmware loops for dual-core ESP32 microcontrollers with zero dropped sensor cycles.',
      'Built interactive robotics devices blending custom motor drivers, relay circuits, and software command handlers.',
      'Programmed I2C OLED screens with custom layout hierarchies, font glyphs, and real-time biometric metrics.',
      'Managed hardware inventory, PCB testing benches, and equipment assembly at Projectile Electronic.'
    ],
    metrics: [
      { label: 'Microcontrollers', value: 'ESP32 & Arduino', helper: 'Tensilica & AVR architectures' },
      { label: 'Displays', value: 'OLED (SSD1306)', helper: 'I2C 128x64 framebuffers' },
      { label: 'Industry Role', value: 'Projectile Electronic', helper: 'Robotics & electronics' },
      { label: 'Timing Accuracy', value: '<5ms loop latency', helper: 'Deterministic execution' }
    ],
    tags: ['ESP32', 'Arduino', 'Robotics', 'Sensors', 'Firmware', 'OLED', 'I2C', 'Hardware Debugging'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'See Robotics & IoT Systems'
  },

  'skill-cybersecurity': {
    id: 'skill-cybersecurity',
    title: 'Cybersecurity, Network Analysis & Vulnerability Auditing',
    category: 'Technical Arsenal',
    badge: 'Domain 04',
    subtitle: 'Offensive fundamentals, packet inspection, ethical hacking toolchains, and digital hygiene.',
    dateOrRank: 'Defensive Practice',
    description: 'Committed to understanding security from both attacker and defender vantage points. Skilled in using Kali Linux environments, capturing and inspecting network packets with Wireshark, conducting vulnerability assessments using Metasploit, executing OSINT investigations, and applying OWASP best practices to web architectures.',
    highlights: [
      'Published a community-starred Windows CMD & PowerShell reference guide under open-source MIT licensing.',
      'Investigates network communication flows, DNS queries, and TCP handshakes using Wireshark dissectors.',
      'Explores penetration testing methodologies: port scanning, service enumeration, Google Dorking, and digital forensics.',
      'Certified by Cisco Networking Academy in Cybersecurity Fundamentals and actively trains in university CTF scrimmages.'
    ],
    metrics: [
      { label: 'Environment', value: 'Kali Linux', helper: 'Pen-testing distribution' },
      { label: 'Traffic Analysis', value: 'Wireshark', helper: 'PCAP packet inspection' },
      { label: 'Framework', value: 'Metasploit', helper: 'Vulnerability exploit audits' },
      { label: 'Reference Work', value: 'MIT License', helper: 'Commands Cheatsheet' }
    ],
    tags: ['Cybersecurity', 'Kali Linux', 'Wireshark', 'Metasploit', 'OSINT', 'Google Dorking', 'OWASP', 'Forensics'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View Security Research'
  },

  // ----------------------------------------------------
  // SECTION 04: ROADMAP PHASES
  // ----------------------------------------------------
  'roadmap-phase-1': {
    id: 'roadmap-phase-1',
    title: 'Phase 01: Low-Level Foundations & Algorithmic Problem Solving',
    category: 'Engineering Roadmap',
    badge: 'Mastered',
    subtitle: 'Mastering the machine: pointer mechanics, memory layouts, and algorithmic competitive rigor.',
    dateOrRank: '2022 – 2024 (Completed)',
    description: 'Established an uncompromising technical foundation through rigorous C programming, manual memory management, pointer arithmetic, struct modeling, and data structures. Solved competitive programming problems on Beecrowd and engineered standalone terminal systems with binary file persistence.',
    highlights: [
      'Built deep proficiency in pointers, stack vs. heap allocations, struct padding, and deterministic memory freeing.',
      'Curated an open-source repository of verified algorithmic solutions covering graphs, trees, sorting, and dynamic programming.',
      'Engineered 4 standalone C console applications featuring structured records and search indices.',
      'Achieved seamless command over compilation flags, Makefile automation, and GDB debugging.'
    ],
    metrics: [
      { label: 'Status', value: 'Mastered', helper: 'Foundational baseline completed' },
      { label: 'Focus', value: 'Pure C & DS/Algo', helper: 'Memory layout & algorithmic reasoning' },
      { label: 'Terminal Suite', value: '4 Applications', helper: 'Student, E-Com, Marks, Clock' },
      { label: 'Platform', value: 'Beecrowd Archive', helper: 'Competitive online judge' }
    ],
    tags: ['C', 'Memory Management', 'Data Structures', 'Algorithms', 'Competitive Programming', 'GDB'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View Beecrowd Problem Repository'
  },

  'roadmap-phase-2': {
    id: 'roadmap-phase-2',
    title: 'Phase 02: Full-Stack MERN, Cloud Deployment & Secure API Architecture',
    category: 'Engineering Roadmap',
    badge: 'Mastered / Advanced',
    subtitle: 'Constructing robust distributed web systems, production auth protocols, and reactive UIs.',
    dateOrRank: '2024 – 2026 (Completed)',
    description: 'Scaled engineering capabilities into full-stack modern web engineering. Designed modular microservices, implemented stateless and stateful authentication pipelines with HTTPOnly cookies, integrated cloud datastores (MongoDB Atlas), and managed production CI/CD deployments on Render and Vercel.',
    highlights: [
      'Shipped PawsHome, a complete production pet adoption platform with live transaction flows and Firebase Auth.',
      'Engineered decoupled REST APIs in Express.js with CORS security headers and input validation middlewares.',
      'Adopted modern frontend tooling: Vite 5, React 18 hooks, TypeScript 5, Tailwind CSS, and Framer Motion.',
      'Delivered independent freelance web solutions on Fiverr with five-star client satisfaction.'
    ],
    metrics: [
      { label: 'Status', value: 'Mastered', helper: 'Production applications shipped' },
      { label: 'Flagship Platform', value: 'PawsHome MERN', helper: 'Live production pet platform' },
      { label: 'Cloud Infrastructure', value: 'Render + Vercel', helper: 'Automated CI/CD deployments' },
      { label: 'Security Layer', value: 'JWT + CORS', helper: 'HTTPOnly session persistence' }
    ],
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB Atlas', 'Firebase', 'Vercel', 'Render', 'TypeScript'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'Inspect Production Repositories'
  },

  'roadmap-phase-3': {
    id: 'roadmap-phase-3',
    title: 'Phase 03: Embedded Hardware-Software Convergence & Edge ML',
    category: 'Engineering Roadmap',
    badge: 'In Progress',
    subtitle: 'Infusing physical microcontrollers with edge intelligence, sensor telemetry, and robotics.',
    dateOrRank: '2026 – Present (Active)',
    description: 'Active immersion into embedded systems and edge machine learning. Designing microcontroller firmware on ESP32, programming hardware sensory peripherals, and publishing peer-reviewed research (SleepGuard at iCONEECT 2026) demonstrating 98.95% accuracy for sleep apnea detection.',
    highlights: [
      'Co-authored peer-reviewed research paper on IoT-compatible machine learning published at iCONEECT 2026.',
      'Developing production hardware-software robotics devices as a frontend and embedded engineer at Projectile Electronic.',
      'Constructing non-blocking telemetry pipelines interfacing SpO2, heart rate, and environmental sensors over I2C/SPI.',
      'Exploring edge quantization to deploy lightweight random forest and SVM models directly to microcontroller flash.'
    ],
    metrics: [
      { label: 'Status', value: 'In Progress', helper: 'Active research & product work' },
      { label: 'Conference', value: 'iCONEECT 2026', helper: 'Premier University, Chittagong' },
      { label: 'Model Accuracy', value: '98.95%', helper: 'Soft-Voting Hybrid Ensemble' },
      { label: 'Industry Lab', value: 'Projectile Electronic', helper: 'Robotics & embedded prototyping' }
    ],
    tags: ['ESP32', 'Robotics', 'Edge ML', 'IoT', 'iCONEECT 2026', 'SleepGuard', 'Sensor Telemetry', 'C/C++'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'Explore Research & Embedded Work'
  },

  'roadmap-phase-4': {
    id: 'roadmap-phase-4',
    title: 'Phase 04: Applied Cybersecurity, Defensive Architectures & AI Red Teaming',
    category: 'Engineering Roadmap',
    badge: 'Target Goal',
    subtitle: 'Hardening modern enterprise networks, firmware security, and high-consequence cloud infrastructure.',
    dateOrRank: '2026 – 2028 (Future Horizon)',
    description: 'The convergence of low-level systems programming, full-stack cloud architecture, and cybersecurity into hardened defense engineering. Targeting industrial penetration testing certifications (OSCP, CEH), advanced firmware reverse engineering, automated vulnerability scanning pipelines, and AI security posture analysis.',
    highlights: [
      'Advancing from Cisco Cybersecurity Associate towards professional certifications (CompTIA Security+, OSCP).',
      'Targeting firmware vulnerability auditing (JTAG/UART extraction, buffer overflow mitigation in IoT microcontrollers).',
      'Contributing to open-source defensive security tools and publishing security research advisories.',
      'Participating in collegiate and national CTF tournaments across web exploitation, cryptography, and digital forensics.'
    ],
    metrics: [
      { label: 'Status', value: 'Target Goal', helper: 'Long-term engineering horizon' },
      { label: 'Target Credentials', value: 'Security+ / OSCP', helper: 'Offensive & defensive mastery' },
      { label: 'Domain Intersection', value: 'IoT + Cloud Security', helper: 'End-to-end attack surface defense' },
      { label: 'CTF Focus', value: 'Web & Forensics', helper: 'Active club training' }
    ],
    tags: ['Cybersecurity', 'Penetration Testing', 'OSCP', 'Firmware Security', 'Reverse Engineering', 'CTF', 'DevSecOps'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'Follow Roadmap Progress'
  },

  // ----------------------------------------------------
  // SECTION 05: FLAGSHIP PROJECTS & SELECTED WORK
  // ----------------------------------------------------
  'proj-pawshome': {
    id: 'proj-pawshome',
    title: 'PawsHome — Full-Stack MERN Pet Adoption Platform',
    category: 'Flagship Web Application',
    badge: 'Live Product',
    subtitle: 'A modern, production-grade pet adoption platform connecting shelters with adopters.',
    dateOrRank: 'Live & Maintained',
    description: 'Architected and deployed a production MERN application end-to-end with independent client and server repositories. PawsHome delivers a seamless user experience for browsing adoptable pets, submitting applications, and managing shelter listings with robust administrative workflows.',
    highlights: [
      'Implemented bank-grade authentication using JWT stored in secure HTTPOnly cookies paired with Firebase Auth for federated login.',
      'Configured MongoDB Atlas cloud database with indexed schemas for fast filtering by species, age, and location.',
      'Crafted a high-performance, fluid UI using React 18, Vite, Tailwind CSS, and Framer Motion micro-animations.',
      'Independently deployed backend to Render and frontend to Vercel with strict CORS and environment protection.'
    ],
    metrics: [
      { label: 'Architecture', value: 'Decoupled MERN', helper: 'Separate Client & Server repos' },
      { label: 'Authentication', value: 'JWT HTTPOnly + Firebase', helper: 'Anti-XSS cookie security' },
      { label: 'Hosting', value: 'Render + Vercel', helper: 'Continuous cloud delivery' },
      { label: 'Performance', value: '98/100', helper: 'Vite-optimized bundle size' }
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Firebase Auth', 'Tailwind CSS', 'Framer Motion', 'JWT'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View Source Code on GitHub'
  },

  'proj-crowdfunding': {
    id: 'proj-crowdfunding',
    title: 'Crowdfunding Platform — Full-Stack MERN Application',
    category: 'Web Application',
    badge: 'Client + Server',
    subtitle: 'Decoupled web application for community campaigns, pledge tracking, and creator management.',
    dateOrRank: 'Production Architecture',
    description: 'Designed and built a complete crowdfunding platform featuring separate client and server codebases. Enables users to launch funding initiatives, track goal thresholds in real time, view backer contributions, and manage campaign lifecycle states.',
    highlights: [
      'Engineered an Express.js REST API with modular routers, controllers, and MongoDB Mongoose models.',
      'Built interactive campaign progress indicators, contribution forms, and responsive grid layouts in React.',
      'Secured backend endpoints with token verification, payload sanitization, and input schema validation.',
      'Designed an administrative dashboard to manage approved campaigns, deadlines, and contribution tallies.'
    ],
    metrics: [
      { label: 'Codebases', value: 'Client + Server', helper: 'Decoupled microservice pattern' },
      { label: 'Database', value: 'MongoDB', helper: 'Document data modeling' },
      { label: 'API Protocols', value: 'RESTful Endpoints', helper: 'CORS-protected routing' },
      { label: 'Frontend', value: 'React + Tailwind', helper: 'Responsive layout system' }
    ],
    tags: ['React', 'Express', 'Node.js', 'MongoDB', 'REST API', 'Crowdfunding', 'Tailwind CSS'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View GitHub Repository'
  },

  'proj-skillswap': {
    id: 'proj-skillswap',
    title: 'SkillSwap — Peer-to-Peer Skill-Exchange Platform',
    category: 'Web Application',
    badge: 'Client + Server',
    subtitle: 'Connecting learners through reciprocal, peer-to-peer talent bartering and scheduled sessions.',
    dateOrRank: 'Full-Stack Delivery',
    description: 'A community-driven talent marketplace allowing professionals and students to trade technical skills (e.g. C++ for React, or UI Design for Machine Learning) without monetary transactions. Features request matching, status tracking, and member profiles.',
    highlights: [
      'Paired a React/Vite fast-refresh frontend with a dedicated Node.js and Express backend service.',
      'Engineered a matching algorithm that connects users based on reciprocal "wants" and "offers" skill vectors.',
      'Implemented real-time status transitions (Pending, Accepted, In-Progress, Completed) with database persistence.',
      'Utilized Tailwind CSS for high-density, accessible dashboard cards and filter controls.'
    ],
    metrics: [
      { label: 'Frontend Engine', value: 'React + Vite', helper: 'Sub-second HMR iteration' },
      { label: 'Backend Runtime', value: 'Node.js + Express', helper: 'RESTful transaction pipeline' },
      { label: 'Database Layer', value: 'MongoDB Atlas', helper: 'User & exchange collections' },
      { label: 'UI Paradigm', value: 'Clean Dashboard', helper: 'Tailwind CSS ergonomics' }
    ],
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'P2P Platform', 'Matching Engine'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View GitHub Repository'
  },

  'proj-apple-gallery': {
    id: 'proj-apple-gallery',
    title: 'Apple — Tile Gallery Web Application',
    category: 'Modern Web Application',
    badge: 'Next.js · TypeScript',
    subtitle: 'Interactive tile gallery with modern media browsing and authentication.',
    dateOrRank: 'TypeScript Project',
    description: 'Built a visually captivating media tile gallery leveraging Next.js server components and TypeScript strict type validation. Incorporates BetterAuth authentication, MongoDB persistence, DaisyUI components, and Swiper for silky-smooth carousel transitions.',
    highlights: [
      'Leveraged Next.js app directory paradigm with server-side rendering and static asset optimization.',
      'Integrated BetterAuth for secure, modern user sessions and profile state management.',
      'Utilized Swiper touch sliders and DaisyUI responsive layout components for a refined editorial feel.',
      'Stored metadata and image associations in MongoDB with TypeScript data contracts.'
    ],
    metrics: [
      { label: 'Framework', value: 'Next.js', helper: 'App router & SSR' },
      { label: 'Language', value: 'TypeScript', helper: 'Strict compile-time types' },
      { label: 'Auth Solution', value: 'BetterAuth', helper: 'Modern session handling' },
      { label: 'Carousels', value: 'Swiper Engine', helper: 'Touch-optimized browsing' }
    ],
    tags: ['Next.js', 'TypeScript', 'BetterAuth', 'MongoDB', 'DaisyUI', 'Swiper', 'Modern Web'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View GitHub Repository'
  },

  'proj-keenkeeper': {
    id: 'proj-keenkeeper',
    title: 'Keen Keeper — Friendship Tracking & Frequency Analytics',
    category: 'Analytics Web Application',
    badge: 'React · Recharts',
    subtitle: 'Helping users nurture meaningful relationships through visualized connection intervals.',
    dateOrRank: 'Data-Driven UI',
    description: 'A relationship-tracking and habit-analytics application built with React, Vite, and Tailwind CSS. Employs Recharts charts to visualize connection frequency, alert users when contacts need reaching out to, and promote mindful social engagement.',
    highlights: [
      'Engineered interactive time-series charts, connection cadence heatmaps, and contact frequency scores.',
      'Implemented local storage persistence and modular state management for instant interaction feedback.',
      'Designed responsive dashboard views tailored for quick status logging and relationship reminders.',
      'Employed custom Tailwind CSS palette and typography for a calming, reflective user aesthetic.'
    ],
    metrics: [
      { label: 'Visualization', value: 'Recharts', helper: 'Dynamic SVG charting engine' },
      { label: 'Bundler', value: 'Vite 5', helper: 'Lightning-fast client bundle' },
      { label: 'Styling', value: 'Tailwind CSS', helper: 'Custom dark-mode palette' },
      { label: 'State Sync', value: 'Reactive Local State', helper: 'Instant zero-lag updates' }
    ],
    tags: ['React', 'Recharts', 'Vite', 'Tailwind CSS', 'Data Visualization', 'Relationship Analytics'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View GitHub Repository'
  },

  'proj-digitools': {
    id: 'proj-digitools',
    title: 'DigiTools Platform — Digital Assets Marketplace',
    category: 'E-Commerce Frontend',
    badge: 'React · Cart System',
    subtitle: 'Modern digital-tools marketplace featuring an interactive shopping cart and toast feedback.',
    dateOrRank: 'E-Commerce UI',
    description: 'A sleek digital marketplace built in React with Vite, Tailwind CSS, and DaisyUI. Features multi-category catalog filtering, real-time cart subtotal computations, and responsive notification toasts via React-Toastify.',
    highlights: [
      'Constructed a global cart context supporting item quantities, removal animations, and instantaneous discount recalculation.',
      'Integrated React-Toastify for unobtrusive feedback on user actions and order flows.',
      'Implemented responsive product grid layouts with hover zoom and quick-preview modals.',
      'Tested across desktop and mobile form factors to maintain responsive design fidelity.'
    ],
    metrics: [
      { label: 'Cart Engine', value: 'React Context', helper: 'Real-time subtotal math' },
      { label: 'Toasts', value: 'React-Toastify', helper: 'Unobtrusive status feedback' },
      { label: 'Components', value: 'DaisyUI + Tailwind', helper: 'Accessible UI primitives' },
      { label: 'Build Time', value: '<250ms', helper: 'Vite production bundling' }
    ],
    tags: ['React', 'Cart System', 'Vite', 'Tailwind CSS', 'DaisyUI', 'E-Commerce', 'State Management'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View GitHub Repository'
  },

  'proj-windows-cheatsheet': {
    id: 'proj-windows-cheatsheet',
    title: 'Windows Commands Cheatsheet for Cybersecurity & Sysadmins',
    category: 'Open-Source Security Tool',
    badge: 'Cybersecurity · MIT',
    subtitle: 'Comprehensive Windows CMD & PowerShell reference guide for penetration testers and admins.',
    dateOrRank: 'MIT Licensed',
    description: 'Authored and published a widely-used Windows command-line reference covering CMD utilities, PowerShell cmdlets, network diagnostic tools (netstat, arp, ipconfig), active directory commands, and privilege assessment tricks for ethical hackers and sysadmins.',
    highlights: [
      'Categorized into Network Reconnaissance, System Information, Process Management, and File Permissions.',
      'Formatted for fast lookups during penetration tests, CTF challenges, and system hardening audits.',
      'Open-sourced under the MIT license, attracting community stars and forks on GitHub.',
      'Includes practical syntax examples, parameter explanations, and command piping chains.'
    ],
    metrics: [
      { label: 'License', value: 'MIT Open Source', helper: 'Free for community use' },
      { label: 'Coverage', value: 'CMD + PowerShell', helper: 'Networking & administrative tools' },
      { label: 'Audience', value: 'Sysadmins & Ethical Hackers', helper: 'Quick reference during CTFs' },
      { label: 'Repository', value: 'GitHub Pinned', helper: 'Actively maintained doc' }
    ],
    tags: ['Cybersecurity', 'PowerShell', 'Windows CMD', 'MIT License', 'SysAdmin', 'Reconnaissance', 'Open Source'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View Cheatsheet on GitHub'
  },

  'proj-beecrowd-archive': {
    id: 'proj-beecrowd-archive',
    title: 'Beecrowd Problem Solving Archive in C',
    category: 'Algorithmic Archive',
    badge: 'Pinned · Pure C',
    subtitle: 'Curated repository of competitive programming and online-judge solutions.',
    dateOrRank: 'Active Repository',
    description: 'An actively maintained code repository containing verified, accepted solutions to algorithmic challenges on Beecrowd (formerly URI Online Judge). All solutions are authored in pure C to emphasize computational efficiency, pointer logic, and memory constraints.',
    highlights: [
      'Covers foundational to advanced algorithmic domains: math, ad-hoc, strings, data structures, and graphs.',
      'Solutions adhere to strict O(N) or O(N log N) runtime bounds to guarantee sub-millisecond execution.',
      'Demonstrates clean modular coding style with standard libraries (<stdio.h>, <stdlib.h>, <string.h>, <math.h>).',
      'Serves as an ongoing reference library for computer science fundamentals and competitive contest preparation.'
    ],
    metrics: [
      { label: 'Language', value: '100% C', helper: 'Zero runtime abstraction overhead' },
      { label: 'Platform', value: 'Beecrowd / URI', helper: 'Global online judge' },
      { label: 'Acceptance', value: '100% AC', helper: 'Accepted on judge test suites' },
      { label: 'Status', value: 'Pinned GitHub Repo', helper: 'Continuous practice' }
    ],
    tags: ['C', 'Beecrowd', 'Competitive Programming', 'Algorithms', 'Data Structures', 'Problem Solving'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'Browse Solutions on GitHub'
  },

  'proj-c-suite': {
    id: 'proj-c-suite',
    title: 'C Console Application Suite — Systems Programming',
    category: 'Systems Programming',
    badge: 'Pure C · Struct-Driven',
    subtitle: 'A four-part suite of terminal applications featuring file persistence and memory-efficient data modeling.',
    dateOrRank: 'Systems Architecture',
    description: 'A suite of four terminal-based applications developed in C demonstrating solid low-level systems programming. Includes: (1) Student Record System, (2) E-Commerce Order Management System, (3) Student Marks Management System, and (4) Real-Time Digital Clock with system time API calls.',
    highlights: [
      'Engineered structured binary and text file serialization engines for persistent record saving across app restarts.',
      'Designed ANSI escape-code terminal user interfaces with interactive menus, input validation, and formatted tables.',
      'Implemented in-memory searching, sorting, insertion, and deletion algorithms over structured record arrays.',
      'Interfaced with the C standard time library (<time.h>) to construct a live terminal clock with continuous refresh loops.'
    ],
    metrics: [
      { label: 'Applications', value: '4 Complete Systems', helper: 'Records, E-Com, Marks, Clock' },
      { label: 'Persistence', value: 'File I/O Streams', helper: 'Binary & ASCII serialization' },
      { label: 'Data Model', value: 'C Structs + Pointers', helper: 'Direct memory layout' },
      { label: 'Interface', value: 'ANSI Terminal GUI', helper: 'Formatted terminal views' }
    ],
    tags: ['C', 'Systems Programming', 'File I/O', 'Structs', 'Memory Modeling', 'Terminal Apps', 'Algorithms'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'Inspect C Code on GitHub'
  },

  'proj-github-portfolio': {
    id: 'proj-github-portfolio',
    title: 'Open-Source Developer Portfolio & Profile Architecture',
    category: 'Open Source Presence',
    badge: '32 Public Repos',
    subtitle: 'Maintaining an active, transparent engineering footprint across web, systems, and security.',
    dateOrRank: 'Continuous Deployment',
    description: 'Maintains an active GitHub presence with 32+ repositories. Features consistently branded animated README formats, real-time contribution statistics, language distribution graphs, and dedicated security badges.',
    highlights: [
      'Organized repositories spanning web applications, embedded C firmware, competitive programming, and research.',
      'Implemented automated GitHub profile metrics and dynamic SVGs tracking contributions and commits.',
      'Standardized open-source repository documentation with clear setup guides, license manifests, and architecture diagrams.',
      'Follows clean Git commit conventions, semantic versioning, and branch workflows.'
    ],
    metrics: [
      { label: 'Public Repositories', value: '32 Repos', helper: 'Actively maintained codebase' },
      { label: 'Profile Type', value: 'Security & Dev', helper: 'Live stats & contribution graphs' },
      { label: 'Documentation', value: 'Animated READMEs', helper: 'Consistent editorial branding' },
      { label: 'Version Control', value: 'Git & GitHub', helper: 'Branching & semantic commits' }
    ],
    tags: ['GitHub', 'Open Source', 'Git', 'Documentation', 'Markdown', 'Continuous Delivery'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'Explore GitHub Profile'
  },

  // ----------------------------------------------------
  // SECTION 06: MILESTONES & ACHIEVEMENTS
  // ----------------------------------------------------
  'achieve-iconeect': {
    id: 'achieve-iconeect',
    title: 'Peer-Reviewed Conference Research Authorship (iCONEECT 2026)',
    category: 'Academic Milestone',
    badge: 'Peer-Reviewed Publication',
    subtitle: 'Premier University, Chittagong, Bangladesh · Sept 25–26, 2026',
    dateOrRank: 'International Conference',
    description: 'Co-authored the peer-reviewed research paper "An IoT-Compatible Machine Learning Framework for Sleep Apnea Risk Prediction Using SpO2 and Heart Rate (SleepGuard)". Presented at the 1st International Conference on Next-Generation Electrical & Electronics, Computer Systems, and Technologies (iCONEECT 2026).',
    highlights: [
      'Evaluated machine learning algorithms against 471 clinical patient records with strict partitioning.',
      'Formulated the soft-voting hybrid ensemble achieving 98.95% test classification accuracy.',
      'Drafted technical methodology adhering to STROBE and PRISMA reporting guidelines.',
      'Collaborated with fellow departmental researchers to advance edge-compatible diagnostic AI.'
    ],
    metrics: [
      { label: 'Publication', value: 'iCONEECT 2026', helper: 'IEEE-format conference proceedings' },
      { label: 'Accuracy', value: '98.95%', helper: 'Held-out test cohort' },
      { label: 'Author Position', value: 'Co-Author', helper: 'Md Muhasin Ali et al.' },
      { label: 'Venue', value: 'Premier University', helper: 'Chittagong, Bangladesh' }
    ],
    tags: ['Research', 'Machine Learning', 'SleepGuard', 'iCONEECT 2026', 'Health Informatics', 'Algorithms'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View Research Repository'
  },

  'achieve-diu-takeoff': {
    id: 'achieve-diu-takeoff',
    title: 'DIU Take Off Programming Contest — Volunteer & Finalist Recognition',
    category: 'Contest Milestone',
    badge: 'Finalist Recognition',
    subtitle: 'Daffodil International University Computer Programming Club',
    dateOrRank: 'Finalist & Volunteer',
    description: 'Served as an active organizer and volunteer for DIU Take Off, the premier introductory competitive programming contest at DIU. Recognized as a Finalist for outstanding dedication, logistics execution, and community impact.',
    highlights: [
      'Contributed to the smooth execution of live contest rounds for hundreds of participating student contestants.',
      'Coordinated lab terminals, judge environments, and on-site contestant registration.',
      'Awarded an official certificate recognizing Finalist standing for outstanding participation and contribution.',
      'Strengthened bonds with senior competitive programming alumni and faculty mentors.'
    ],
    metrics: [
      { label: 'Award', value: 'Finalist Certificate', helper: 'Official institutional honors' },
      { label: 'Host Club', value: 'DIU CPC', helper: 'Computer Programming Club' },
      { label: 'Event', value: 'DIU Take Off', helper: 'Flagship programming tournament' },
      { label: 'Role', value: 'Volunteer & Finalist', helper: 'Logistics and competition' }
    ],
    tags: ['DIU CPC', 'Take Off', 'Competitive Programming', 'Contest Finalist', 'Volunteer', 'Leadership']
  },

  'achieve-uta': {
    id: 'achieve-uta',
    title: 'Unlock The Algorithm (UTA) — Finalist & Dedicated Volunteer',
    category: 'Contest Milestone',
    badge: 'Finalist Certificate',
    subtitle: 'Unlock The Algorithm Competitive Programming Initiative',
    dateOrRank: 'Finalist Recognition',
    description: 'Participated and contributed as a volunteer with Unlock The Algorithm (UTA), an intensive competitive programming initiative designed to nurture algorithmic intuition and problem-solving excellence among university students.',
    highlights: [
      'Recognized with an official Finalist Certificate for outstanding contribution and algorithmic commitment.',
      'Supported contest operations, problem statement distribution, and participant orientation.',
      'Solved problems across arrays, strings, recursion, and mathematical logic under timed conditions.',
      'Fostered a collaborative peer-learning environment for aspiring competitive programmers.'
    ],
    metrics: [
      { label: 'Award', value: 'Finalist Certificate', helper: 'Outstanding contribution honors' },
      { label: 'Initiative', value: 'Unlock The Algorithm', helper: 'Advanced CP initiative' },
      { label: 'Domain', value: 'Data Structures & Algo', helper: 'Timed competitive rounds' },
      { label: 'Recognition', value: 'Finalist', helper: 'Official certificate awarded' }
    ],
    tags: ['UTA', 'Algorithms', 'Competitive Programming', 'Problem Solving', 'Finalist', 'Peer Learning']
  },

  'achieve-titas-leadership': {
    id: 'achieve-titas-leadership',
    title: 'Titas Gas Corporate Training — Certificate of Appreciation',
    category: 'Corporate Milestone',
    badge: 'Institutional Honors',
    subtitle: 'Titas Gas Transmission & Distribution PLC × DIU CSE × HRDI',
    dateOrRank: 'July 16–18, 2026',
    description: 'Formally honored with a Certificate of Appreciation for outstanding contribution in the successful execution of the 3-day corporate leadership training program "AI-Powered Productivity Transformation & Strategic Leadership Training", awarded by Professor Dr. Sheak Rashed Haider Noori (Head, Dept. of CSE) and Tahsina Yasmin (Director in-charge, HRDI).',
    highlights: [
      'Supported corporate executives and senior engineers from Titas Gas PLC during high-level AI transformation workshops.',
      'Facilitated practical lab sessions demonstrating AI-powered workflow automation and organizational productivity tools.',
      'Commended for institutional leadership, professional poise, and operational excellence.',
      'Received formal commendations from senior academic and corporate leadership.'
    ],
    metrics: [
      { label: 'Honors', value: 'Appreciation Certificate', helper: 'Signed by Head of CSE & HRDI Director' },
      { label: 'Corporate Partner', value: 'Titas Gas PLC', helper: 'National gas transmission leader' },
      { label: 'Topic', value: 'AI & Strategic Leadership', helper: 'Corporate workflow transformation' },
      { label: 'Duration', value: '3 Full Days', helper: 'July 16–18, 2026' }
    ],
    tags: ['Titas Gas PLC', 'AI Transformation', 'Corporate Leadership', 'DIU CSE', 'HRDI', 'Certificate']
  },

  // ----------------------------------------------------
  // SECTION 07: CREDENTIALS & CERTIFICATIONS
  // ----------------------------------------------------
  'cert-cisco-cyber': {
    id: 'cert-cisco-cyber',
    title: 'Cisco Networking Academy — Introduction to Cybersecurity',
    category: 'Cybersecurity Credential',
    badge: 'Cisco Certified',
    subtitle: 'Cisco Networking Academy Accredited Program',
    dateOrRank: 'Certified Credential',
    description: 'Covers essential cybersecurity principles, threat actor profiles, vulnerability vectors, cryptography basics, enterprise security technologies, and the defense-in-depth model needed to secure contemporary digital infrastructure.',
    highlights: [
      'Mastered the CIA Triad (Confidentiality, Integrity, Availability) and modern threat landscapes.',
      'Explored malware taxonomy: ransomware, trojans, worms, rootkits, and social engineering methods.',
      'Examined network security controls: firewalls, intrusion prevention systems, and virtual private networks (VPNs).',
      'Demonstrated understanding of legal and ethical guidelines in modern cybersecurity investigations.'
    ],
    metrics: [
      { label: 'Issuer', value: 'Cisco NetAcad', helper: 'Global networking authority' },
      { label: 'Curriculum', value: 'Intro to Cybersecurity', helper: 'Fundamental defense principles' },
      { label: 'Focus', value: 'Threat Vectors & Defense', helper: 'Enterprise posture' },
      { label: 'Verification', value: 'Verified Credential', helper: 'Cisco Academy Badge' }
    ],
    tags: ['Cisco', 'Cybersecurity', 'Network Defense', 'Cryptography', 'Threat Landscape', 'Certified'],
    link: 'https://www.netacad.com',
    linkLabel: 'Verify on Cisco Networking Academy'
  },

  'cert-fcc-web': {
    id: 'cert-fcc-web',
    title: 'freeCodeCamp — Responsive Web Design Certification',
    category: 'Web Development Credential',
    badge: 'freeCodeCamp Verified',
    subtitle: '300 Hours of Rigorous Frontend Code Verification',
    dateOrRank: 'Certified Credential',
    description: 'Completed 300 hours of hands-on frontend web engineering coursework and project submissions covering HTML5 semantics, modern CSS3 layout paradigms (Flexbox, CSS Grid), responsive typography, and accessibility best practices.',
    highlights: [
      'Built 5 distinct responsive certification projects evaluated against automated unit test suites.',
      'Mastered responsive viewport breakpoints, media queries, and fluid typography.',
      'Implemented accessible markup adhering to WCAG guidelines with ARIA landmark attributes.',
      'Acquired solid grounding in CSS animations, variables, and pseudo-class state machines.'
    ],
    metrics: [
      { label: 'Hours', value: '300 Hours', helper: 'Verified project curriculum' },
      { label: 'Issuer', value: 'freeCodeCamp', helper: 'Global developer platform' },
      { label: 'Curriculum', value: 'HTML5 & CSS3', helper: 'Flexbox, Grid & Accessibility' },
      { label: 'Test Suite', value: '100% Passed', helper: 'Automated test suites' }
    ],
    tags: ['freeCodeCamp', 'HTML5', 'CSS3', 'Responsive Design', 'Flexbox', 'CSS Grid', 'WCAG'],
    link: 'https://www.freecodecamp.org',
    linkLabel: 'Verify Certification'
  },

  'cert-fcc-js': {
    id: 'cert-fcc-js',
    title: 'freeCodeCamp — JavaScript Algorithms & Data Structures',
    category: 'Programming Credential',
    badge: 'freeCodeCamp Verified',
    subtitle: '300 Hours of Algorithmic & Functional JavaScript Verification',
    dateOrRank: 'Certified Credential',
    description: 'Completed 300 hours of comprehensive JavaScript algorithmic programming. Demonstrates command over ES6+ features, functional programming paradigms, regular expressions, object-oriented concepts, and classical data structure problems.',
    highlights: [
      'Solved complex algorithmic challenges spanning palindromes, Roman numeral conversion, and Caesars ciphers.',
      'Demonstrated expertise in array transformations (map, filter, reduce), closures, and recursive logic.',
      'Implemented custom search and sorting routines evaluated against rigorous test vectors.',
      'Attained complete mastery over JavaScript execution semantics and memory references.'
    ],
    metrics: [
      { label: 'Hours', value: '300 Hours', helper: 'Algorithmic curriculum' },
      { label: 'Issuer', value: 'freeCodeCamp', helper: 'Verified credential' },
      { label: 'Core', value: 'ES6+ & Algo', helper: 'Functional & OOP JavaScript' },
      { label: 'Status', value: 'Completed', helper: 'Official credential holder' }
    ],
    tags: ['JavaScript', 'Algorithms', 'Data Structures', 'ES6+', 'Functional Programming', 'freeCodeCamp'],
    link: 'https://www.freecodecamp.org',
    linkLabel: 'Verify Certification'
  },

  'cert-python-academic': {
    id: 'cert-python-academic',
    title: 'Python Programming Certification (with Academic Transcript)',
    category: 'Programming Credential',
    badge: 'Academic Transcript',
    subtitle: 'Comprehensive Python for Software & Data Analytics',
    dateOrRank: 'Formal Certification',
    description: 'Formally completed a certified Python programming track backed by an official academic transcript. Covers Python syntax, control structures, list comprehensions, object-oriented programming, data analytics with NumPy/Pandas, and REST API consumption.',
    highlights: [
      'Built data pipelines for automated file processing, CSV parsing, and statistical summaries.',
      'Applied object-oriented principles to model modular applications and utility packages.',
      'Utilized Python as the primary research vehicle for the SleepGuard machine learning pipeline.',
      'Backed by an official academic transcript verifying coursework completion and top grade marks.'
    ],
    metrics: [
      { label: 'Credential', value: 'Python Program', helper: 'With official academic transcript' },
      { label: 'Applications', value: 'Data & Scripting', helper: 'NumPy, Scikit-learn, APIs' },
      { label: 'Research Tool', value: 'SleepGuard ML', helper: 'Model development language' },
      { label: 'Status', value: 'Accredited', helper: 'Transcript verified' }
    ],
    tags: ['Python', 'Academic Transcript', 'Data Science', 'OOP', 'Scikit-learn', 'Automation']
  },

  'cert-cyber-workshops': {
    id: 'cert-cyber-workshops',
    title: 'Cybersecurity Specialized Workshop Series & Certifications',
    category: 'Cybersecurity Credential',
    badge: 'Specialized Workshops',
    subtitle: 'Cyber Hygiene, OSINT, Digital Forensics & Google Dorking',
    dateOrRank: '2026 Workshops',
    description: 'A multi-part series of intensive cybersecurity workshops and accredited training modules completed in 2026. Encompasses: (1) Cyber Hygiene Certificate, (2) OSINT Bootcamp, (3) Digital Forensics Workshop, (4) Google Dorking Workshop, and (5) Cybersecurity for Humanitarian Awareness Workshop (2026).',
    highlights: [
      'OSINT Bootcamp: Techniques for open-source intelligence gathering, domain reconnaissance, and footprint analysis.',
      'Digital Forensics: Disk image examination, metadata extraction, timeline analysis, and artifact reconstruction.',
      'Google Dorking: Advanced search engine operators to detect exposed configurations, index directories, and credentials.',
      'Cyber Hygiene & Humanitarian Awareness: Institutional defense posture, credential security, and digital privacy safety.'
    ],
    metrics: [
      { label: 'Certificates', value: '5 Accreditations', helper: 'Hygiene, OSINT, Forensics, Dorking, Humanitarian' },
      { label: 'Techniques', value: 'Recon & Forensics', helper: 'Defensive & investigative drills' },
      { label: 'Year', value: '2026 Series', helper: 'Current technical updates' },
      { label: 'Focus', value: 'Ethical Standards', helper: 'Practical hands-on labs' }
    ],
    tags: ['OSINT', 'Digital Forensics', 'Google Dorking', 'Cyber Hygiene', 'Humanitarian Awareness', 'Cybersecurity']
  },

  'cert-bncc-discipline': {
    id: 'cert-bncc-discipline',
    title: 'BNCC Camping, Leadership & Disaster Management Certifications',
    category: 'Field & Leadership Credential',
    badge: 'Military Discipline',
    subtitle: 'Bangladesh National Cadet Corps (BNCC)',
    dateOrRank: 'Lance Corporal (LCPL)',
    description: 'Earned official certifications through rigorous military and civil defense training in the Bangladesh National Cadet Corps (BNCC). Holds the rank of Lance Corporal (LCPL), with specialized training in BNCC Annual Camping, Disaster Management, and Fire Fighting operations.',
    highlights: [
      'Promoted to Lance Corporal (LCPL), commanding squad drills and maintaining unit discipline.',
      'Completed BNCC Camping Certificate, demonstrating survival skills, endurance, and field teamwork.',
      'Awarded the BNCC Disaster Management & Fire Fighting Certificate for rapid civil emergency response training.',
      'Instills a lifelong habit of punctuality, resilience, physical stamina, and selfless public service.'
    ],
    metrics: [
      { label: 'Rank Achieved', value: 'Lance Corporal', helper: 'LCPL squad leadership' },
      { label: 'Organization', value: 'BNCC', helper: 'Bangladesh National Cadet Corps' },
      { label: 'Certificates', value: 'Camping & Fire', helper: 'Disaster management certified' },
      { label: 'Discipline', value: 'Exemplary', helper: 'Demonstrated youth leadership' }
    ],
    tags: ['BNCC', 'Lance Corporal', 'Leadership', 'Disaster Management', 'Fire Fighting', 'Discipline']
  },

  'cert-diu-sustainable-project': {
    id: 'cert-diu-sustainable-project',
    title: 'Sustainable Project Competition 2026 — Certificate of Participation',
    category: 'Competition & Sustainability Credential',
    badge: 'Sustainable Innovation',
    subtitle: 'Daffodil International University (Sustainability Wing & DIU GEC)',
    dateOrRank: '14 October 2026',
    description: 'Awarded official Certificate of Participation for actively competing in the Sustainable Project Competition 2026 held at Daffodil International University on 14 October 2026. Recognized for architecting and presenting tech-driven sustainable project solutions aligned with the United Nations Sustainable Development Goals (SDGs).',
    highlights: [
      'Successfully competed in the intra-university Sustainable Project Competition 2026 organized by DIU Sustainability Wing & DIU Green Earth Club (DIU GEC).',
      'Demonstrated applied engineering integration combining sustainable hardware/software concepts to address real-world environmental and ecological challenges.',
      'Presented project architecture and operational prototypes before university evaluation panels and industry judges.',
      'Validated commitment to sustainable computing, energy-efficient IoT telemetry, and green tech initiatives.'
    ],
    metrics: [
      { label: 'Event', value: 'Project Competition', helper: 'Sustainable Innovation 2026' },
      { label: 'Organizer', value: 'DIU Sustainability', helper: 'Sustainability Wing & DIU GEC' },
      { label: 'Date', value: '14 October 2026', helper: 'Official event date' },
      { label: 'Focus', value: 'Green Tech & SDGs', helper: 'Sustainable development solutions' }
    ],
    tags: ['Sustainable Development Goals', 'Green Tech', 'Project Competition', 'DIU', 'IoT & Sustainability', 'Innovation']
  },

  'cert-diu-youth-solutions-lab': {
    id: 'cert-diu-youth-solutions-lab',
    title: 'DIU HRDI — Youth Solutions Lab 2026 Certificate of Participation',
    category: 'Leadership & Innovation Credential',
    badge: 'Social Innovation',
    subtitle: 'SkillUp Club · Human Resource Development Institute (HRDI), DIU',
    dateOrRank: '12 August 2026',
    description: 'Awarded official Certificate of Participation (Ref: youth/hrdi/s/2026/diu/015) for successfully participating in the Youth Solutions Lab 2026, organized by the SkillUp Club of the Human Resource Development Institute (HRDI) at Daffodil International University. The program was centered on the theme "Different Contexts, Common Aspirations," engaging youth in transformative discussions, team hack rounds, and strategic problem-solving for community and global challenges.',
    highlights: [
      'Actively participated in the youth leadership and innovation incubator organized by DIU HRDI SkillUp Club.',
      'Collaborated with interdisciplinary teams under the theme "Different Contexts, Common Aspirations" to ideate practical social solutions.',
      'Engaged in fast-paced problem formulation, stakeholder empathy modeling, and youth action frameworks.',
      'Officially endorsed with credential identifier youth/hrdi/s/2026/diu/015 signed by HRDI Directorate.'
    ],
    metrics: [
      { label: 'Event', value: 'Solutions Lab', helper: 'Youth Solutions Lab 2026' },
      { label: 'Organizer', value: 'HRDI SkillUp', helper: 'Human Resource Dev. Institute' },
      { label: 'Credential ID', value: 'diu/015', helper: 'Ref: youth/hrdi/s/2026/diu/015' },
      { label: 'Theme', value: 'Aspirations', helper: 'Different Contexts, Common Aspirations' }
    ],
    tags: ['Youth Solutions Lab', 'DIU HRDI', 'SkillUp Club', 'Leadership', 'Social Innovation', 'Youth Empowerment']
  },

  // ----------------------------------------------------
  // SECTION 08: LEADERSHIP, CLUBS & EXPERIENCE
  // ----------------------------------------------------
  'exp-projectile': {
    id: 'exp-projectile',
    title: 'Frontend Developer & Technical Employee — Projectile Electronic',
    category: 'Industry Experience',
    badge: 'Active Employment',
    subtitle: 'Projectile Electronic · June 2026 – Present',
    dateOrRank: 'June 2026 – Present',
    description: 'Working as a frontend developer and full-time technical team member at Projectile Electronic. Responsibilities span building and maintaining client-facing web portals, designing and assembling custom robotics hardware projects, and handling daily shop management and operations.',
    highlights: [
      'Develops and optimizes modern web interfaces for company products and customer-facing catalogs.',
      'Designs and fabricates custom robotics and electronic assemblies, bridging hardware schematics with firmware.',
      'Handles daily shop operations, equipment procurement, customer technical consultations, and task coordination.',
      'Operates seamlessly between web codebases (React, HTML/CSS) and hardware benches (soldering, microcontrollers).'
    ],
    metrics: [
      { label: 'Tenure', value: 'June 2026 – Pres.', helper: 'Continuous professional role' },
      { label: 'Dual Domain', value: 'Web + Robotics', helper: 'Software & hardware engineering' },
      { label: 'Leadership', value: 'Shop Operations', helper: 'Daily coordination & workflow' },
      { label: 'Impact', value: 'High Reliability', helper: 'Smooth commercial operations' }
    ],
    tags: ['Frontend', 'Robotics', 'Embedded Hardware', 'Projectile Electronic', 'Shop Management', 'Leadership'],
    link: 'https://github.com/Safin313-REBORN',
    linkLabel: 'View Technical Portfolio'
  },

  'exp-cpc-diu': {
    id: 'exp-cpc-diu',
    title: 'Executive Member — Computer Programming Club (CPC), DIU',
    category: 'Executive Leadership',
    badge: 'Executive Panel',
    subtitle: 'Daffodil International University Computer Programming Club',
    dateOrRank: 'Active Executive Term',
    description: 'Elected to the Executive Panel of the premier programming body at Daffodil International University. Coordinates coding bootcamps, intra-university programming contests, problem-setting workshops, and community mentorship for junior computer science students.',
    highlights: [
      'Supports the planning and execution of competitive programming contests, mock rounds, and workshops.',
      'Fosters an inclusive, high-stamina coding culture across university cohorts.',
      'Serves as liaison between student contestants, club leadership, and university faculty mentors.',
      'Active champion for data structures, algorithm problem solving, and judge participation.'
    ],
    metrics: [
      { label: 'Role', value: 'Executive Member', helper: 'Panel governing body' },
      { label: 'Organization', value: 'DIU CPC', helper: 'Computer Programming Club' },
      { label: 'Community', value: 'Thousands of Students', helper: 'Departmental reach' },
      { label: 'Activities', value: 'Contests & Camps', helper: 'Continuous calendar' }
    ],
    tags: ['DIU CPC', 'Leadership', 'Competitive Programming', 'Mentorship', 'Student Governance'],
    link: 'https://daffodilvarsity.edu.bd',
    linkLabel: 'Visit DIU CPC'
  },

  'exp-cyber-club': {
    id: 'exp-cyber-club',
    title: 'Active Member — Cybersecurity Club, DIU',
    category: 'Club Involvement',
    badge: 'Active Member',
    subtitle: 'Daffodil International University Cybersecurity Club',
    dateOrRank: 'Active Participation',
    description: 'Actively participates in weekly technical sessions, ethical hacking labs, vulnerability assessment discussions, and capture-the-flag (CTF) training with fellow security enthusiasts.',
    highlights: [
      'Participates in practical workshops on network packet sniffing, Wireshark forensics, and OSINT investigation.',
      'Engages in group study sessions breaking down OWASP Top 10 vulnerabilities in modern web applications.',
      'Collaborates on security documentation, attack surface awareness, and campus cyber hygiene campaigns.',
      'Represents the club in security conferences and inter-university seminars.'
    ],
    metrics: [
      { label: 'Focus', value: 'Ethical Hacking', helper: 'Defensive & offensive security' },
      { label: 'Club', value: 'DIU Cyber Club', helper: 'Departmental security chapter' },
      { label: 'Activities', value: 'CTF & Labs', helper: 'Hands-on practice' },
      { label: 'Status', value: 'Active Contributor', helper: 'Continuous involvement' }
    ],
    tags: ['Cybersecurity', 'Ethical Hacking', 'DIU', 'CTF', 'Wireshark', 'Club Member']
  },

  'exp-skill-up-club': {
    id: 'exp-skill-up-club',
    title: 'Active Member — Skill Up Club, DIU',
    category: 'Club Involvement',
    badge: 'Active Member',
    subtitle: 'Daffodil International University Skill Up Club',
    dateOrRank: 'Active Participation',
    description: 'Engaged in professional development, tech presentations, public speaking, soft-skills workshops, and peer-to-peer technical mentorship within the DIU student ecosystem.',
    highlights: [
      'Takes part in communication training, leadership masterclasses, and project showcase pitch competitions.',
      'Mentors junior peers on effective developer workflows, GitHub best practices, and learning roadmaps.',
      'Assists in organizing campus-wide skills seminars with industry guest speakers.'
    ],
    metrics: [
      { label: 'Objective', value: 'Professional Growth', helper: 'Holistic career skills' },
      { label: 'Club', value: 'Skill Up Club', helper: 'DIU university chapter' },
      { label: 'Contributions', value: 'Workshops & Pitching', helper: 'Active participation' },
      { label: 'Network', value: 'Cross-Disciplinary', helper: 'Connecting tech with business' }
    ],
    tags: ['Skill Up Club', 'Professional Skills', 'Mentorship', 'Leadership', 'Public Speaking']
  },

  'exp-bncc-corps': {
    id: 'exp-bncc-corps',
    title: 'Lance Corporal (LCPL) — Bangladesh National Cadet Corps (BNCC)',
    category: 'National Service',
    badge: 'Military Discipline',
    subtitle: 'Bangladesh National Cadet Corps',
    dateOrRank: 'Lance Corporal (LCPL)',
    description: 'Holds the rank of Lance Corporal in the Bangladesh National Cadet Corps (BNCC). Commanded drill squads, completed intensive camping training, and led civil defense emergency response maneuvers.',
    highlights: [
      'Promoted based on demonstrated physical endurance, leadership capability, and steadfast discipline.',
      'Completed disaster management, first aid, and firefighting drills to support national civil services.',
      'Trained in precision ceremonial marching, chain of command protocols, and squad-level leadership.',
      'Embodies high integrity, perseverance under stress, and relentless attention to duty.'
    ],
    metrics: [
      { label: 'Rank', value: 'Lance Corporal', helper: 'LCPL Warrant rank' },
      { label: 'Corps', value: 'BNCC', helper: 'National youth defense corps' },
      { label: 'Certifications', value: 'Camping & Fire', helper: 'Emergency response certified' },
      { label: 'Discipline', value: 'Standard Bearer', helper: 'Military training standards' }
    ],
    tags: ['BNCC', 'Lance Corporal', 'National Service', 'Discipline', 'Leadership', 'Civil Defense']
  },

  'exp-fiverr-freelance': {
    id: 'exp-fiverr-freelance',
    title: 'Independent Freelance Engineer — Fiverr Platform',
    category: 'Freelance & Contract',
    badge: 'Global Freelance',
    subtitle: 'Full-Stack Web Development, Embedded Systems & Custom Scripts',
    dateOrRank: 'Active Seller',
    description: 'Delivers custom software engineering services to international clients on Fiverr. Projects range from responsive React frontends and MERN full-stack backends to C/C++ embedded programming and data automation scripts.',
    highlights: [
      'Maintains a solid track record of timely delivery, clear technical communication, and client satisfaction.',
      'Architects customized web interfaces, REST APIs, and database integrations tailored to business needs.',
      'Translates vague client problem statements into precise, well-tested code artifacts with comprehensive documentation.',
      'Handles project scoping, milestone setting, and post-deployment client support.'
    ],
    metrics: [
      { label: 'Platform', value: 'Fiverr.com', helper: 'Global client marketplace' },
      { label: 'Profile', value: 'shahariarsaf892', helper: 'Verified freelance seller' },
      { label: 'Domains', value: 'Web & Embedded', helper: 'Full-stack & systems scripts' },
      { label: 'Client Feedback', value: '5.0-Star Record', helper: 'Top-tier client satisfaction' }
    ],
    tags: ['Freelance', 'Fiverr', 'Full-Stack', 'Client Delivery', 'Consulting', 'Independent'],
    link: 'https://fiverr.com/shahariarsaf892',
    linkLabel: 'Visit Fiverr Seller Profile'
  }
};

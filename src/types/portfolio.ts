export interface MetricItem {
  label: string;
  value: string;
  helper?: string;
}

export interface CardDetail {
  id: string;
  title: string;
  category: string;
  badge: string;
  subtitle: string;
  dateOrRank: string;
  description: string;
  highlights: string[];
  metrics: MetricItem[];
  tags: string[];
  link?: string;
  linkLabel?: string;
  codeSnippet?: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  sectionId: string;
  number: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  display: string;
  iconName: 'github' | 'linkedin' | 'medium' | 'book-open' | 'mail' | 'phone' | 'external';
}

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detailId: string;
  icon: string;
  traits: string[];
}

export interface CourseworkItem {
  name: string;
  badge: string;
  focus: string;
}

export interface RoadmapPhase {
  number: string;
  phase: string;
  title: string;
  status: 'Mastered' | 'In Progress' | 'Target Goal';
  timeline: string;
  summary: string;
  competencies: string[];
  detailId: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  techStack: string[];
  stats: MetricItem[];
  detailId: string;
}

export interface MilestoneItem {
  id: string;
  title: string;
  organization: string;
  dateOrRank: string;
  badge: string;
  summary: string;
  detailId: string;
  metrics: MetricItem[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Cybersecurity' | 'Web & Programming' | 'Institutional' | 'Field & Office';
  credentialUrl?: string;
  detailId: string;
  topics: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  category: 'Industry' | 'Executive Leadership' | 'National Service' | 'Community Outreach';
  location: string;
  summary: string;
  contributions: string[];
  detailId: string;
}

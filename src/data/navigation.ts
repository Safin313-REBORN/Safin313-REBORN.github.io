import { NavLinkItem, SocialLink } from '../types/portfolio';

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Story', href: '#story', sectionId: 'story', number: '01' },
  { label: 'Academics', href: '#academics', sectionId: 'academics', number: '02' },
  { label: 'Web Systems', href: '#web-dev', sectionId: 'web-dev', number: '03' },
  { label: 'Robotics & IoT', href: '#robotics-iot', sectionId: 'robotics-iot', number: '04' },
  { label: 'Cybersecurity', href: '#cybersecurity', sectionId: 'cybersecurity', number: '05' },
  { label: 'Publications', href: '#publications', sectionId: 'publications', number: '06' },
  { label: 'Competitive CP', href: '#competitive-programming', sectionId: 'competitive-programming', number: '07' },
  { label: 'Roadmap', href: '#roadmap', sectionId: 'roadmap', number: '08' },
  { label: 'Certificates', href: '#certificates', sectionId: 'certificates', number: '09' },
  { label: 'Leadership', href: '#leadership', sectionId: 'leadership', number: '10' },
  { label: 'Connect', href: '#connect', sectionId: 'connect', number: '11' },
];

export const ALL_NAV_SECTIONS = [
  'hero',
  'story',
  'academics',
  'web-dev',
  'robotics-iot',
  'cybersecurity',
  'publications',
  'competitive-programming',
  'roadmap',
  'certificates',
  'credentials',
  'leadership',
  'connect',
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Safin313-REBORN',
    display: 'github.com/Safin313-REBORN',
    iconName: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/saharia-hassan-safin',
    display: 'linkedin.com/in/saharia-hassan-safin',
    iconName: 'linkedin',
  },
  {
    platform: 'Medium',
    url: 'https://medium.com/@sahariahassansafin',
    display: 'medium.com/@sahariahassansafin',
    iconName: 'book-open',
  },
  {
    platform: 'Email',
    url: 'mailto:safinhassan164@gmail.com',
    display: 'safinhassan164@gmail.com',
    iconName: 'mail',
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/SahariaHassanSafin',
    display: '@SahariaHassanSafin',
    iconName: 'phone',
  },
  {
    platform: 'Fiverr',
    url: 'https://fiverr.com/shahariarsaf892',
    display: 'fiverr.com/shahariarsaf892',
    iconName: 'external',
  },
];

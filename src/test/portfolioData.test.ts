import { describe, it, expect } from 'vitest';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { CARD_DETAILS } from '../data/cardDetails';

describe('Portfolio Core Data Integrity', () => {
  it('validates WhatsApp Click-to-Chat API format uses numerical international format', () => {
    // WhatsApp Click-to-Chat must use https://wa.me/<number> without '+' or alphanumeric usernames
    expect(CANDIDATE_INFO.whatsapp).toMatch(/^https:\/\/wa\.me\/\d{10,15}$/);
    expect(CANDIDATE_INFO.whatsapp).toBe('https://wa.me/8801763609992');
  });

  it('validates primary contact email format', () => {
    expect(CANDIDATE_INFO.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(CANDIDATE_INFO.email).toBe('safinhassan164@gmail.com');
  });

  it('validates social touchpoint URLs are secure HTTPS', () => {
    expect(CANDIDATE_INFO.github).toMatch(/^https:\/\/github\.com\//);
    expect(CANDIDATE_INFO.linkedin).toMatch(/^https:\/\/linkedin\.com\//);
    expect(CANDIDATE_INFO.medium).toMatch(/^https:\/\/medium\.com\//);
    expect(CANDIDATE_INFO.fiverr).toMatch(/^https:\/\/fiverr\.com\//);
  });

  it('validates all card dossier details conform to CardDetail interface', () => {
    const keys = Object.keys(CARD_DETAILS);
    expect(keys.length).toBeGreaterThan(10);

    for (const key of keys) {
      const card = CARD_DETAILS[key];
      expect(card.id).toBe(key);
      expect(card.title).toBeTruthy();
      expect(card.category).toBeTruthy();
      expect(card.badge).toBeTruthy();
      expect(Array.isArray(card.tags)).toBe(true);
      expect(Array.isArray(card.metrics)).toBe(true);
      expect(Array.isArray(card.highlights)).toBe(true);
    }
  });
});

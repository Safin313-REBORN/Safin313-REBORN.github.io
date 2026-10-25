import { GithubContribution } from '../components/common/GithubGraph';

/**
 * Generates realistic competitive programming and repository commit history
 * for Safin313-REBORN covering the past 6-8 months.
 */
export function generateSafinContributions(): GithubContribution[] {
  const contributions: GithubContribution[] = [];
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 190);

  // Deterministic pseudo-random sequence for consistent rendering
  let seed = 42;
  function random() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
    const isoDate = d.toISOString().slice(0, 10);
    const dayOfWeek = d.getDay(); // 0 is Sunday, 6 is Saturday
    
    // Higher probability on weekdays and contest weekends
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const activityChance = isWeekend ? 0.72 : 0.65;
    
    let count = 0;
    let level = 0;

    if (random() < activityChance) {
      const r = random();
      if (r < 0.35) {
        count = Math.floor(random() * 2) + 1; // 1-2
        level = 1;
      } else if (r < 0.70) {
        count = Math.floor(random() * 3) + 3; // 3-5
        level = 2;
      } else if (r < 0.90) {
        count = Math.floor(random() * 4) + 6; // 6-9
        level = 3;
      } else {
        count = Math.floor(random() * 5) + 10; // 10-14
        level = 4;
      }
    }

    contributions.push({
      date: isoDate,
      count,
      level,
    });
  }

  return contributions;
}

export const SAFIN_GITHUB_CONTRIBUTIONS = generateSafinContributions();

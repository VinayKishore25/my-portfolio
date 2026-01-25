/**
 * Platform Configuration
 * Centralized configuration for all coding platforms
 */

import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
  SiGithub,
} from "react-icons/si";

/**
 * Platform identifiers enum
 */
export const PLATFORMS = {
  LEETCODE: "leetcode",
  CODEFORCES: "codeforces",
  CODECHEF: "codechef",
  HACKERRANK: "hackerrank",
  GITHUB: "github",
};

/**
 * Ordered list of platforms for consistent rendering
 */
export const PLATFORM_LIST = [
  PLATFORMS.LEETCODE,
  PLATFORMS.CODEFORCES,
  PLATFORMS.CODECHEF,
  PLATFORMS.HACKERRANK,
  PLATFORMS.GITHUB,
];

/**
 * Platform configuration with usernames, URLs, icons, and colors
 */
export const platformConfig = {
  [PLATFORMS.LEETCODE]: {
    name: "LeetCode",
    username: "VinayKishore25",
    profileUrl: "https://leetcode.com/u/VinayKishore25/",
    icon: SiLeetcode,
    color: "#FFA116",
    description: "Problem Solving",
  },
  [PLATFORMS.CODEFORCES]: {
    name: "Codeforces",
    username: "vinaykishore2512",
    profileUrl: "https://codeforces.com/profile/vinaykishore2512",
    icon: SiCodeforces,
    color: "#1F8ACB",
    description: "Competitive Programming",
  },
  [PLATFORMS.CODECHEF]: {
    name: "CodeChef",
    username: "vinaykishore25",
    profileUrl: "https://www.codechef.com/users/vinaykishore25",
    icon: SiCodechef,
    color: "#5B4638",
    description: "Competitive Programming",
  },
  [PLATFORMS.HACKERRANK]: {
    name: "HackerRank",
    username: "vinaykishore2512",
    profileUrl: "https://www.hackerrank.com/profile/vinaykishore2512",
    icon: SiHackerrank,
    color: "#00EA64",
    description: "Skill Certifications",
  },
  [PLATFORMS.GITHUB]: {
    name: "GitHub",
    username: "VinayKishore25",
    profileUrl: "https://github.com/VinayKishore25",
    icon: SiGithub,
    color: "#ffffff",
    description: "Open Source Projects",
  },
};

/**
 * Codeforces rank color mapping
 */
export const CODEFORCES_RANK_COLORS = {
  newbie: "#808080",
  pupil: "#008000",
  specialist: "#03A89E",
  expert: "#0000FF",
  "candidate master": "#AA00AA",
  master: "#FF8C00",
  "international master": "#FF8C00",
  grandmaster: "#FF0000",
  "international grandmaster": "#FF0000",
  "legendary grandmaster": "#FF0000",
};

/**
 * HackerRank badge level colors
 */
export const HACKERRANK_LEVEL_COLORS = {
  Gold: "#FFD700",
  Silver: "#C0C0C0",
  Bronze: "#CD7F32",
};

/**
 * LeetCode difficulty configuration
 */
export const LEETCODE_DIFFICULTY_CONFIG = {
  Easy: {
    color: "#00B8A3",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-400",
  },
  Medium: {
    color: "#FFC01E",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-400",
  },
  Hard: {
    color: "#FF375F",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    textColor: "text-red-400",
  },
};

/**
 * Get platform config by key
 * @param {string} platform - Platform identifier
 * @returns {Object} Platform configuration
 */
export const getPlatformConfig = (platform) => {
  return platformConfig[platform] || platformConfig[PLATFORMS.LEETCODE];
};

/**
 * Get Codeforces rank color
 * @param {string} rank - Codeforces rank
 * @returns {string} Color hex code
 */
export const getCodeforcesRankColor = (rank) => {
  if (!rank) return "#808080";
  return CODEFORCES_RANK_COLORS[rank.toLowerCase()] || "#808080";
};

/**
 * Get HackerRank badge level color
 * @param {string} level - Badge level (Gold, Silver, Bronze)
 * @returns {string} Color hex code
 */
export const getHackerRankLevelColor = (level) => {
  return HACKERRANK_LEVEL_COLORS[level] || "#808080";
};

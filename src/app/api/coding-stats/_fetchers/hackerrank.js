/**
 * HackerRank Stats Fetcher
 *
 * Fetches statistics from HackerRank using their REST API
 * with graceful fallback handling
 */

const HACKERRANK_API_BASE = "https://www.hackerrank.com/rest/hackers";

/**
 * Fetch with timeout
 * @param {string} url - URL to fetch
 * @param {Object} options - Fetch options
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<Response>} Fetch response
 */
const fetchWithTimeout = async (url, options = {}, timeout = 10000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
};

/**
 * Get fallback data when API fails
 * @param {string} username - HackerRank username
 * @returns {Object} Fallback stats object
 */
const getFallbackData = (username) => ({
  username,
  fullName: null,
  country: null,
  school: null,
  badgeCount: null,
  badges: [],
  scores: [],
  level: null,
  followers: null,
  apiUnavailable: true,
  message:
    "HackerRank data is temporarily unavailable. Please visit the profile directly.",
});

/**
 * Fetch HackerRank statistics for a user
 * @param {string} username - HackerRank username
 * @returns {Promise<Object>} HackerRank stats object
 */
export const fetchHackerRankStats = async (username) => {
  try {
    // Fetch user profile
    const profileResponse = await fetchWithTimeout(
      `${HACKERRANK_API_BASE}/${username}`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      },
    );

    if (!profileResponse.ok) {
      console.error(`HackerRank API error: ${profileResponse.status}`);
      return getFallbackData(username);
    }

    const profileData = await profileResponse.json();
    const model = profileData.model;

    if (!model) {
      console.error("HackerRank: User not found");
      return getFallbackData(username);
    }

    // Fetch badges
    let badges = [];
    try {
      const badgesResponse = await fetchWithTimeout(
        `${HACKERRANK_API_BASE}/${username}/badges`,
        {
          headers: {
            Accept: "application/json",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          },
        },
      );

      if (badgesResponse.ok) {
        const badgesData = await badgesResponse.json();
        badges = (badgesData.models || []).map((badge) => ({
          name: badge.badge_name,
          stars: badge.stars || 1,
          level: badge.solved || "Bronze",
          icon: badge.badge_icon_url,
        }));
      }
    } catch (error) {
      console.log("Failed to fetch HackerRank badges:", error.message);
    }

    // Fetch scores (skills)
    let scores = [];
    try {
      const scoresResponse = await fetchWithTimeout(
        `${HACKERRANK_API_BASE}/${username}/scores_elo`,
        {
          headers: {
            Accept: "application/json",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          },
        },
      );

      if (scoresResponse.ok) {
        const scoresData = await scoresResponse.json();
        scores = (scoresData.models || [])
          .filter((score) => score.score > 0)
          .map((score) => ({
            name: score.name || score.slug,
            score: score.score,
          }));
      }
    } catch (error) {
      console.log("Failed to fetch HackerRank scores:", error.message);
    }

    return {
      username: model.username,
      fullName: model.name,
      country: model.country,
      school: model.school,
      badgeCount: badges.length,
      badges,
      scores,
      level: model.level,
      followers: model.followers_count,
    };
  } catch (error) {
    console.error("HackerRank fetch error:", error.message);
    return getFallbackData(username);
  }
};

export default fetchHackerRankStats;

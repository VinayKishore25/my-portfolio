/**
 * CodeChef Stats Fetcher
 *
 * Fetches statistics from CodeChef using third-party APIs
 * Falls back to cached/default data if all APIs fail
 */

/**
 * Third-party API endpoints for CodeChef
 * CodeChef doesn't have a public API, so we use community APIs
 */
const CODECHEF_APIS = [
  (username) => `https://codechefapi.vercel.app/${username}`,
];

/**
 * Fetch with timeout
 * @param {string} url - URL to fetch
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<Response>} Fetch response
 */
const fetchWithTimeout = async (url, timeout = 8000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
};

/**
 * Parse CodeChef API response (handles different API formats)
 * @param {Object} data - Raw API response
 * @returns {Object} Normalized stats object
 */
const parseCodeChefResponse = (data) => {
  // Calculate stars from rating if not provided
  const rating = data.currentRating || data.rating || data.current_rating || 0;
  const calculatedStars =
    rating > 0 ? Math.min(Math.floor(rating / 400) + 1, 7) : 0;

  // Parse numeric values properly
  const parseNumber = (val) => {
    if (typeof val === "number") return val;
    if (typeof val === "string") {
      const num = parseInt(val.replace(/[^\d]/g, ""));
      return isNaN(num) ? null : num;
    }
    return null;
  };

  return {
    username: data.username || data.name || data.handle || data.user,
    fullName: data.name || data.fullName || data.full_name,
    rating: rating,
    highestRating:
      data.highestRating || data.maxRating || data.highest_rating || rating,
    stars:
      data.stars || (calculatedStars > 0 ? `${calculatedStars}★` : "Unrated"),
    globalRank:
      parseNumber(data.globalRank) ||
      parseNumber(data.global_rank) ||
      parseNumber(data.rank),
    countryRank:
      parseNumber(data.countryRank) || parseNumber(data.country_rank),
    country: data.country || data.countryName,
    problemsSolved:
      parseNumber(data.numberOfProblemsSolved) ||
      parseNumber(data.problemsSolved) ||
      parseNumber(data.fully_solved?.count) ||
      parseNumber(data.problems_solved) ||
      parseNumber(data.solved),
    contests:
      parseNumber(data.contests) ||
      data.ratingData?.length ||
      parseNumber(data.contest_participated) ||
      parseNumber(data.contests_participated),
    recentContests: (
      data.ratingData ||
      data.contests_history ||
      data.rating_data ||
      []
    )
      .slice(-5)
      .reverse()
      .map((contest) => ({
        name:
          contest.name ||
          contest.code ||
          contest.contest_name ||
          contest.contestName,
        rank: contest.rank || contest.contest_rank,
        rating: contest.rating || contest.new_rating || contest.newRating,
      })),
  };
};

/**
 * Get fallback data when all APIs fail
 * @param {string} username - CodeChef username
 * @returns {Object} Fallback stats object
 */
const getFallbackData = (username) => ({
  username,
  fullName: null,
  rating: null,
  highestRating: null,
  stars: "—",
  globalRank: null,
  countryRank: null,
  country: null,
  problemsSolved: null,
  contests: null,
  recentContests: [],
  apiUnavailable: true,
  message:
    "CodeChef API is temporarily unavailable. Please visit the profile directly.",
});

/**
 * Fetch CodeChef statistics for a user
 * @param {string} username - CodeChef username
 * @returns {Promise<Object>} CodeChef stats object
 */
export const fetchCodeChefStats = async (username) => {
  // Try each API endpoint
  for (let i = 0; i < CODECHEF_APIS.length; i++) {
    try {
      const url = CODECHEF_APIS[i](username);
      console.log(`Trying CodeChef API ${i + 1}: ${url}`);

      const response = await fetchWithTimeout(url);

      if (response.ok) {
        const data = await response.json();
        const payload = data?.data ?? data;
        const statusText = String(data?.status || "").toLowerCase();

        // Check if response has valid data
        // API might return error object or status field
        if (
          payload &&
          data?.success !== false &&
          !data?.error &&
          !data?.message?.toLowerCase?.().includes("error") &&
          !statusText.includes("error") &&
          !statusText.includes("fail")
        ) {
          console.log(`CodeChef API ${i + 1} succeeded`);
          return parseCodeChefResponse(payload);
        }
      }

      console.log(`CodeChef API ${i + 1} returned status: ${response.status}`);
    } catch (error) {
      console.log(`CodeChef API ${i + 1} failed:`, error.message);
    }
  }

  // All APIs failed - return fallback data instead of throwing
  console.log("All CodeChef APIs failed, returning fallback data");
  return getFallbackData(username);
};

export default fetchCodeChefStats;

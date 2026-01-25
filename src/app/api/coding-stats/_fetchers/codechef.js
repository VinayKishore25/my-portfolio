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
  (username) => `https://codechef-api.vercel.app/handle/${username}`,
  (username) => `https://codechef-api.vercel.app/${username}`,
  (username) =>
    `https://competitive-coding-api.herokuapp.com/api/codechef/${username}`,
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
  const rating = data.currentRating || data.rating || 0;
  const calculatedStars =
    rating > 0 ? Math.min(Math.floor(rating / 400) + 1, 7) : 0;

  return {
    username: data.username || data.name || data.handle,
    fullName: data.name || data.fullName,
    rating: rating,
    highestRating: data.highestRating || data.maxRating || rating,
    stars:
      data.stars || (calculatedStars > 0 ? `${calculatedStars}★` : "Unrated"),
    globalRank: data.globalRank || data.global_rank,
    countryRank: data.countryRank || data.country_rank,
    country: data.country,
    problemsSolved:
      data.problemsSolved || data.fully_solved?.count || data.problems_solved,
    contests:
      data.contests || data.ratingData?.length || data.contest_participated,
    recentContests: (data.ratingData || data.contests_history || [])
      .slice(-5)
      .reverse()
      .map((contest) => ({
        name: contest.name || contest.code || contest.contest_name,
        rank: contest.rank,
        rating: contest.rating || contest.new_rating,
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

        // Check if response has valid data
        if (data && !data.error && !data.status?.includes("error")) {
          console.log(`CodeChef API ${i + 1} succeeded`);
          return parseCodeChefResponse(data);
        }
      }
    } catch (error) {
      console.log(`CodeChef API ${i + 1} failed:`, error.message);
    }
  }

  // All APIs failed - return fallback data instead of throwing
  console.log("All CodeChef APIs failed, returning fallback data");
  return getFallbackData(username);
};

export default fetchCodeChefStats;

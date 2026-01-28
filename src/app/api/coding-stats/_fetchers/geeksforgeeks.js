/**
 * GeeksforGeeks Stats Fetcher
 *
 * Fetches statistics from GeeksforGeeks by scraping the profile page
 * since no public API is available
 */

/**
 * Fetch with timeout
 * @param {string} url - URL to fetch
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<Response>} Fetch response
 */
const fetchWithTimeout = async (url, timeout = 10000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
};

/**
 * Parse GeeksforGeeks profile data from HTML
 * The profile page contains JSON data embedded in script tags
 * @param {string} html - Raw HTML content
 * @returns {Object|null} Parsed stats object or null
 */
const parseGFGProfileData = (html) => {
  try {
    // GFG embeds user data as JSON in the page with escaped quotes
    // Pattern: \"score\":1953,\"monthly_score\":82,\"total_problems_solved\":670

    // Handle both escaped and unescaped quotes
    const scoreMatch = html.match(/\\?"score\\?"\s*:\s*(\d+)/);
    const monthlyScoreMatch = html.match(/\\?"monthly_score\\?"\s*:\s*(\d+)/);
    const problemsSolvedMatch = html.match(
      /\\?"total_problems_solved\\?"\s*:\s*(\d+)/,
    );
    const instituteRankMatch = html.match(/\\?"institute_rank\\?"\s*:\s*(\d+)/);
    const currentStreakMatch = html.match(
      /\\?"pod_solved_current_streak\\?"\s*:\s*(\d+)/,
    );
    const longestStreakMatch = html.match(
      /\\?"pod_solved_longest_streak\\?"\s*:\s*(\d+)/,
    );
    const podSubmissionsMatch = html.match(
      /\\?"pod_correct_submissions_count\\?"\s*:\s*(\d+)/,
    );

    // Extract username from page
    const usernameMatch = html.match(
      /\\?"userName\\?"\s*:\s*\\?"([^"\\]+)\\?"/,
    );

    // Extract institute/college name
    const instituteMatch = html.match(
      /\\?"institute_name\\?"\s*:\s*\\?"([^"\\]+)\\?"/,
    );

    if (!scoreMatch && !problemsSolvedMatch) {
      console.log("GFG: No score or problemsSolved found in HTML");
      return null;
    }

    return {
      username: usernameMatch ? usernameMatch[1] : null,
      codingScore: scoreMatch ? parseInt(scoreMatch[1]) : null,
      monthlyScore: monthlyScoreMatch ? parseInt(monthlyScoreMatch[1]) : null,
      problemsSolved: problemsSolvedMatch
        ? parseInt(problemsSolvedMatch[1])
        : null,
      instituteRank: instituteRankMatch
        ? parseInt(instituteRankMatch[1])
        : null,
      currentStreak: currentStreakMatch ? parseInt(currentStreakMatch[1]) : 0,
      longestStreak: longestStreakMatch ? parseInt(longestStreakMatch[1]) : 0,
      podSubmissions: podSubmissionsMatch
        ? parseInt(podSubmissionsMatch[1])
        : 0,
      institute: instituteMatch ? instituteMatch[1].replace(/-/g, " ") : null,
    };
  } catch (error) {
    console.error("Error parsing GFG profile data:", error);
    return null;
  }
};

/**
 * Get fallback data when scraping fails
 * @param {string} username - GFG username
 * @returns {Object} Fallback stats object
 */
const getFallbackData = (username) => ({
  username,
  codingScore: null,
  monthlyScore: null,
  problemsSolved: null,
  instituteRank: null,
  currentStreak: null,
  longestStreak: null,
  podSubmissions: null,
  institute: null,
  apiUnavailable: true,
  message:
    "GeeksforGeeks data is temporarily unavailable. Please visit the profile directly.",
});

/**
 * Fetch GeeksforGeeks statistics for a user
 * @param {string} username - GFG username
 * @returns {Promise<Object>} GFG stats object
 */
export const fetchGeeksforGeeksStats = async (username) => {
  try {
    const url = `https://www.geeksforgeeks.org/user/${username}/`;
    console.log(`Fetching GFG profile: ${url}`);

    const response = await fetchWithTimeout(url);

    if (response.ok) {
      const html = await response.text();
      const data = parseGFGProfileData(html);

      if (data) {
        console.log("GFG profile data parsed successfully");
        return {
          ...data,
          username: data.username || username,
        };
      }
    }

    console.log(`GFG fetch failed with status: ${response.status}`);
  } catch (error) {
    console.log(`GFG fetch failed:`, error.message);
  }

  // Scraping failed - return fallback data
  console.log("GFG scraping failed, returning fallback data");
  return getFallbackData(username);
};

export default fetchGeeksforGeeksStats;

/**
 * Codeforces Stats Fetcher
 *
 * Fetches statistics from Codeforces using their REST API
 */

const CODEFORCES_API_BASE = "https://codeforces.com/api";

/**
 * Make a request to Codeforces API
 * @param {string} endpoint - API endpoint
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} API response result
 */
const codeforcesRequest = async (endpoint, params = {}) => {
  const url = new URL(`${CODEFORCES_API_BASE}/${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Codeforces API error: ${response.status}`);
  }

  const data = await response.json();

  if (data.status !== "OK") {
    throw new Error(data.comment || "Codeforces API error");
  }

  return data.result;
};

/**
 * Count unique solved problems from submissions
 * @param {Array} submissions - User submissions array
 * @returns {number} Count of unique solved problems
 */
const countSolvedProblems = (submissions) => {
  const solvedSet = new Set();

  submissions.forEach((sub) => {
    if (sub.verdict === "OK") {
      const problemId = `${sub.problem.contestId}-${sub.problem.index}`;
      solvedSet.add(problemId);
    }
  });

  return solvedSet.size;
};

/**
 * Parse recent contests from rating changes
 * @param {Array} ratingChanges - Rating changes array
 * @returns {Array} Parsed recent contests
 */
const parseRecentContests = (ratingChanges) => {
  return ratingChanges.slice(0, 5).map((contest) => ({
    contestId: contest.contestId,
    contestName: contest.contestName,
    rank: contest.rank,
    oldRating: contest.oldRating,
    newRating: contest.newRating,
    ratingChange: contest.newRating - contest.oldRating,
  }));
};

/**
 * Fetch Codeforces statistics for a user
 * @param {string} username - Codeforces handle
 * @returns {Promise<Object>} Codeforces stats object
 */
export const fetchCodeforcesStats = async (username) => {
  try {
    // Fetch user info
    const userInfo = await codeforcesRequest("user.info", {
      handles: username,
    });
    const user = userInfo[0];

    if (!user) {
      throw new Error("User not found");
    }

    // Fetch submissions and rating changes in parallel
    const [submissions, ratingChanges] = await Promise.all([
      codeforcesRequest("user.status", {
        handle: username,
        from: 1,
        count: 10000,
      }).catch(() => []),
      codeforcesRequest("user.rating", { handle: username }).catch(() => []),
    ]);

    // Calculate solved problems count
    const problemsSolved = countSolvedProblems(submissions);

    // Parse recent contests (most recent first)
    const recentContests = parseRecentContests([...ratingChanges].reverse());

    return {
      handle: user.handle,
      rating: user.rating,
      maxRating: user.maxRating,
      rank: user.rank,
      maxRank: user.maxRank,
      contribution: user.contribution,
      friendOfCount: user.friendOfCount,
      avatar: user.avatar,
      titlePhoto: user.titlePhoto,
      problemsSolved,
      contestsCount: ratingChanges.length,
      recentContests,
      registrationTime: user.registrationTimeSeconds,
      lastOnline: user.lastOnlineTimeSeconds,
    };
  } catch (error) {
    console.error("Codeforces fetch error:", error);
    throw error;
  }
};

export default fetchCodeforcesStats;

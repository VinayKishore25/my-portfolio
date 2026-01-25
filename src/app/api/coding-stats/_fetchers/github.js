/**
 * GitHub Stats Fetcher
 *
 * Fetches statistics from GitHub using their REST API
 */

const GITHUB_API_BASE = "https://api.github.com";

/**
 * Make a request to GitHub API
 * @param {string} endpoint - API endpoint
 * @returns {Promise<Object>} API response
 */
const githubRequest = async (endpoint) => {
  const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-Stats-Fetcher",
    },
  });

  // Handle rate limiting
  if (response.status === 403 || response.status === 429) {
    const resetTime = response.headers.get("X-RateLimit-Reset");
    throw new Error(`RATE_LIMITED:${resetTime}`);
  }

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
};

/**
 * Calculate total stars from repositories
 * @param {Array} repos - Repository array
 * @returns {number} Total star count
 */
const calculateTotalStars = (repos) => {
  return repos.reduce((total, repo) => total + (repo.stargazers_count || 0), 0);
};

/**
 * Aggregate languages from repositories
 * @param {Array} repos - Repository array
 * @returns {Array} Top languages with counts
 */
const aggregateLanguages = (repos) => {
  const langCount = {};

  repos.forEach((repo) => {
    if (repo.language) {
      langCount[repo.language] = (langCount[repo.language] || 0) + 1;
    }
  });

  return Object.entries(langCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }));
};

/**
 * Get top repositories by stars
 * @param {Array} repos - Repository array
 * @returns {Array} Top repositories
 */
const getTopRepos = (repos) => {
  return repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
    .slice(0, 5)
    .map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
    }));
};

/**
 * Fetch GitHub statistics for a user
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} GitHub stats object
 */
export const fetchGitHubStats = async (username) => {
  try {
    // Fetch user info and repos in parallel
    const [user, repos] = await Promise.all([
      githubRequest(`/users/${username}`),
      githubRequest(`/users/${username}/repos?per_page=100&sort=updated`),
    ]);

    // Calculate stats
    const totalStars = calculateTotalStars(repos);
    const topLanguages = aggregateLanguages(repos);
    const topRepos = getTopRepos(repos);

    // Try to get contribution count (this is approximate)
    let contributions = null;
    try {
      const eventsResponse = await githubRequest(
        `/users/${username}/events/public?per_page=100`,
      );
      contributions = eventsResponse.length;
    } catch (error) {
      console.log("Could not fetch GitHub events");
    }

    return {
      username: user.login,
      name: user.name,
      bio: user.bio,
      avatar: user.avatar_url,
      location: user.location,
      company: user.company,
      blog: user.blog,
      publicRepos: user.public_repos,
      publicGists: user.public_gists,
      followers: user.followers,
      following: user.following,
      createdAt: user.created_at,
      totalStars,
      contributions,
      topLanguages,
      topRepos,
    };
  } catch (error) {
    // Handle rate limiting specially
    if (error.message.startsWith("RATE_LIMITED")) {
      const resetTime = error.message.split(":")[1];
      return {
        rateLimited: true,
        resetTime: parseInt(resetTime) * 1000,
      };
    }

    console.error("GitHub fetch error:", error);
    throw error;
  }
};

export default fetchGitHubStats;

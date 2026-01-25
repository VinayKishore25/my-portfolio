"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { PLATFORM_LIST, platformConfig } from "../_constants";

/**
 * Initial loading state for all platforms
 */
const createInitialLoadingState = () =>
  PLATFORM_LIST.reduce((acc, platform) => {
    acc[platform] = true;
    return acc;
  }, {});

/**
 * Fetch stats for a single platform
 * @param {string} platform - Platform identifier
 * @param {string} username - Platform username
 * @returns {Promise<Object|null>} Platform stats or null on error
 */
const fetchPlatformStats = async (platform, username) => {
  try {
    const response = await fetch(
      `/api/coding-stats?platform=${platform}&username=${username}`,
    );
    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error(`Error fetching ${platform} stats:`, error);
    return null;
  }
};

/**
 * Custom hook for fetching and managing coding platform statistics
 *
 * @returns {Object} Hook return value
 * @returns {Object} stats - Stats object keyed by platform
 * @returns {Object} loading - Loading state object keyed by platform
 * @returns {Object} errors - Error state object keyed by platform
 * @returns {Function} refetchPlatform - Function to refetch a specific platform
 * @returns {Function} refetchAll - Function to refetch all platforms
 * @returns {boolean} isAnyLoading - True if any platform is still loading
 */
export const useCodingStats = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(createInitialLoadingState);
  const [errors, setErrors] = useState({});

  /**
   * Fetch stats for a single platform and update state
   */
  const fetchAndUpdatePlatform = useCallback(async (platform) => {
    const config = platformConfig[platform];
    if (!config) return;

    setLoading((prev) => ({ ...prev, [platform]: true }));
    setErrors((prev) => ({ ...prev, [platform]: null }));

    const data = await fetchPlatformStats(platform, config.username);

    if (data) {
      setStats((prev) => ({ ...prev, [platform]: data }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [platform]: `Failed to fetch ${config.name} data`,
      }));
    }

    setLoading((prev) => ({ ...prev, [platform]: false }));
  }, []);

  /**
   * Refetch a specific platform's stats
   */
  const refetchPlatform = useCallback(
    (platform) => {
      fetchAndUpdatePlatform(platform);
    },
    [fetchAndUpdatePlatform],
  );

  /**
   * Refetch all platforms' stats
   */
  const refetchAll = useCallback(() => {
    PLATFORM_LIST.forEach(fetchAndUpdatePlatform);
  }, [fetchAndUpdatePlatform]);

  /**
   * Initial fetch on mount
   */
  useEffect(() => {
    PLATFORM_LIST.forEach(fetchAndUpdatePlatform);
  }, [fetchAndUpdatePlatform]);

  /**
   * Computed value: is any platform still loading
   */
  const isAnyLoading = useMemo(
    () => Object.values(loading).some(Boolean),
    [loading],
  );

  return {
    stats,
    loading,
    errors,
    refetchPlatform,
    refetchAll,
    isAnyLoading,
  };
};

export default useCodingStats;

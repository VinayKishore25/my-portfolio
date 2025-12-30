/**
 * Utility Functions
 * Common helper functions used across the application
 */

import { clsx } from "clsx";

/**
 * Merge class names conditionally
 * @param  {...any} inputs - Class names or conditional class objects
 * @returns {string} - Merged class names
 */
export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Format number with suffix
 * @param {number} num - Number to format
 * @returns {string} - Formatted number with K/M suffix
 */
export function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

/**
 * Generate random ID
 * @returns {string} - Random ID
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Check if code is running on client
 * @returns {boolean}
 */
export const isClient = typeof window !== "undefined";

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of element to scroll to
 */
export function scrollToElement(elementId) {
  if (!isClient) return;
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

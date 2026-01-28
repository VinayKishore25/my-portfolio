"use client";

/**
 * ErrorPanel Component
 * Displays error state for a platform panel
 */

/**
 * @param {Object} props
 * @param {string} props.message - Error message to display
 */
export const ErrorPanel = ({ message }) => (
  <div className="text-center py-8">
    <p className="text-white/60 mb-2">{message}</p>
    <p className="text-white/40 text-sm">
      Please try again later or visit the profile directly.
    </p>
  </div>
);

export default ErrorPanel;

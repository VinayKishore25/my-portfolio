/**
 * ProgressRing Component
 * A circular progress indicator with customizable appearance
 */

/**
 * @param {Object} props
 * @param {number} props.value - Current value (0-100)
 * @param {number} [props.max=100] - Maximum value
 * @param {number} [props.size=80] - Size in pixels
 * @param {number} [props.strokeWidth=6] - Stroke width in pixels
 * @param {string} [props.color="#22c55e"] - Progress color
 */
export const ProgressRing = ({
  value,
  max = 100,
  size = 80,
  strokeWidth = 6,
  color = "#22c55e",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = Math.min((value / max) * 100, 100);
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-white">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressRing;

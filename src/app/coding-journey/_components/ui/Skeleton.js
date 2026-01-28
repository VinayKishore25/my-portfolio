"use client";

/**
 * Skeleton Component
 * A placeholder loading indicator for content that is being fetched
 */

import { cn } from "@/lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes
 */
export const Skeleton = ({ className }) => (
  <div className={cn("animate-pulse rounded-lg bg-white/[0.05]", className)} />
);

export default Skeleton;

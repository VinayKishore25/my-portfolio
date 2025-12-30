/**
 * useInViewAnimation Hook
 * Custom hook for triggering animations when element enters viewport
 */

"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function useInViewAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    ...options,
  });

  return { ref, isInView };
}

export default useInViewAnimation;

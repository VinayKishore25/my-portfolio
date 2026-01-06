"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const HoveredLink = ({ href, children }) => (
  <Link
    href={href}
    className="block px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
  >
    {children}
  </Link>
);

export const Menu = ({ setActive, children }) => (
  <div
    onMouseLeave={() => setActive(null)}
    className="relative mx-auto flex items-center justify-center"
  >
    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 shadow-lg">
      {children}
    </div>
  </div>
);

export const MenuItem = ({ item, children, active, setActive }) => {
  const isActive = active === item;
  return (
    <div className="relative" onMouseEnter={() => setActive(item)}>
      <button
        className={cn(
          "px-4 py-2 rounded-xl font-semibold text-sm text-white transition-all duration-200",
          isActive ? "bg-accent text-white shadow-md shadow-accent/30" : "hover:bg-white/10"
        )}
      >
        {item}
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full mt-2 min-w-[220px] rounded-2xl border border-white/15 bg-primary/80 backdrop-blur-lg shadow-xl"
          >
            <div className="p-3 space-y-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Optional ProductItem placeholder (not used now but kept for compatibility)
export const ProductItem = ({ title, href, src, description }) => (
  <Link href={href} className="block p-3 rounded-xl hover:bg-white/10 transition-colors">
    <div className="text-white font-semibold mb-1">{title}</div>
    <div className="text-white/60 text-sm">{description}</div>
  </Link>
);

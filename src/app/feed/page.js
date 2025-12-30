"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import {
  HiOutlineNewspaper,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";

const items = [
  {
    id: 1,
    icon: <HiOutlineNewspaper />,
    title: "Published a new blog",
    description: "Sharpening Problem-Solving: My Daily Routine",
    time: "2h ago",
  },
  {
    id: 2,
    icon: <HiRectangleGroup />,
    title: "Updated skills page",
    description: "Refined charts and performance optimizations",
    time: "Yesterday",
  },
  {
    id: 3,
    icon: <HiViewColumns />,
    title: "Pushed portfolio changes",
    description: "Responsive header navigation and hero spacing",
    time: "Dec 20, 2025",
  },
  {
    id: 4,
    icon: <HiUser />,
    title: "Mentor feedback session",
    description: "Iterated on content clarity and UX polish",
    time: "Dec 18, 2025",
  },
];

const Feed = () => {
  return (
    <div className="bg-primary/30 min-h-screen pt-24 sm:pt-28 pb-16">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-10"
        >
          Activity <span className="text-accent">Feed</span>
        </motion.h2>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeIn("up", 0.2 + idx * 0.06)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-white/10 border border-white/10 hover:border-accent/50 transition-colors rounded-xl p-4 backdrop-blur-sm flex items-start gap-4"
            >
              <div className="text-accent text-2xl shrink-0">{item.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <span className="text-white/60 text-xs">{item.time}</span>
                </div>
                <p className="text-white/80 text-sm mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;

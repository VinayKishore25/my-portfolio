"use client";
import React, { useState } from "react";
import { useTheme } from "@/components/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSwatch, HiXMark, HiCheck } from "react-icons/hi2";

const ThemeToggle = () => {
  const { themes, currentTheme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Theme Toggle Button - Professional floating action button */}
      <motion.button
        onClick={togglePanel}
        className="fixed bottom-20 left-4 xl:bottom-6 xl:left-6 z-50 w-14 h-14 xl:w-16 xl:h-16 rounded-full shadow-lg shadow-accent/25 bg-gradient-to-br from-accent to-accent/80 text-primary flex items-center justify-center hover:shadow-xl hover:shadow-accent/40 transition-shadow duration-300"
        whileHover={{ scale: 1.05, rotate: 15 }}
        whileTap={{ scale: 0.95 }}
        title="Change Theme"
      >
        <HiOutlineSwatch className="w-6 h-6 xl:w-7 xl:h-7 stroke-[2]" />
      </motion.button>

      {/* Theme Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-36 left-4 xl:bottom-24 xl:left-6 w-[calc(100vw-2rem)] max-w-72 bg-primary/95 backdrop-blur-xl border border-white/10 rounded-2xl z-50 p-4 xl:p-5 shadow-2xl shadow-black/30"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-base font-semibold text-white">Theme</h3>
                <p className="text-xs text-white/50">Choose your style</p>
              </div>
              <button
                onClick={togglePanel}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <HiXMark size={18} />
              </button>
            </div>

            <div className="space-y-2">
              {Object.entries(themes).map(([key, theme]) => (
                <motion.button
                  key={key}
                  onClick={() => changeTheme(key)}
                  className={`w-full p-3 rounded-xl border transition-all flex items-center justify-between group ${
                    currentTheme === key
                      ? "border-accent/50 bg-accent/10"
                      : "border-white/5 hover:border-white/15 hover:bg-white/5"
                  }`}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1">
                      <div
                        className="w-5 h-5 rounded-full border-2 border-primary"
                        style={{ backgroundColor: theme.accent }}
                      />
                      <div
                        className="w-5 h-5 rounded-full border-2 border-primary"
                        style={{ backgroundColor: theme.secondary }}
                      />
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        currentTheme === key
                          ? "text-accent"
                          : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {theme.name}
                    </span>
                  </div>
                  {currentTheme === key && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 rounded-full bg-accent flex items-center justify-center"
                    >
                      <HiCheck size={12} className="text-primary" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={togglePanel}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeToggle;

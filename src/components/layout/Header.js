"use client";
// Next Image
import Image from "next/image";

// Components
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navData } from "@/data/navigation";
import { HiXMark, HiBars3 } from "react-icons/hi2";

const Header = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-30 w-full bg-white/10 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-y-4 py-4">
            {/* Logo */}
            <p
              className="font-bold text-white cursor-pointer text-2xl sm:text-3xl"
              onClick={() => window.scrollTo(0, 0)}
            >
              Vinay{" "}
              <span className="font-medium" style={{ color: theme.accent }}>
                Kishore
              </span>
            </p>

            {/* Hamburger Menu - Mobile Only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden absolute right-4 top-4 z-50 p-2 text-white hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiXMark className="w-6 h-6" />
              ) : (
                <HiBars3 className="w-6 h-6" />
              )}
            </button>

            {/* Top Navigation (centered) - Hidden on mobile */}
            <div className="hidden lg:flex w-full lg:flex-1 justify-center">
              <nav className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
                {navData.map((link, index) => {
                  const hasSubmenu = link.submenu && link.submenu.length > 0;
                  const isActive =
                    link.path === pathname ||
                    (hasSubmenu &&
                      link.submenu.some((sub) => pathname.includes(sub.name)));

                  return (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() =>
                        hasSubmenu && setOpenDropdown(link.name)
                      }
                      onMouseLeave={() => hasSubmenu && setOpenDropdown(null)}
                    >
                      <Link
                        href={link.path}
                        className={`${
                          isActive ? "text-accent" : "text-white"
                        } flex items-center gap-2 hover:text-accent transition-all duration-300 capitalize font-medium text-sm sm:text-base`}
                      >
                        <span className="text-lg sm:text-xl">{link.icon}</span>
                        <span className="hidden xs:inline sm:inline">
                          {link.name}
                        </span>
                        {hasSubmenu && (
                          <svg
                            className="hidden sm:inline w-4 h-4 ml-1 transition-transform duration-300"
                            style={{
                              transform:
                                openDropdown === link.name
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </Link>

                      {hasSubmenu && openDropdown === link.name && (
                        <div className="hidden sm:block absolute top-full left-0 mt-0 min-w-[200px] bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden animate-fadeIn z-50 pt-3">
                          <div className="space-y-0">
                            {link.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.path}
                                className="block px-4 py-3 text-white hover:bg-accent/20 hover:text-accent transition-all duration-300 text-sm font-medium"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Invisible hover bridge to dropdown */}
                      {hasSubmenu && openDropdown === link.name && (
                        <div className="hidden sm:block absolute top-full left-0 right-0 h-3 bg-transparent" />
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 h-screen w-64 bg-primary border-r border-white/10 z-30 lg:hidden overflow-y-auto pt-20"
            >
              <nav className="flex flex-col gap-2 px-4">
                {navData.map((link, index) => {
                  const hasSubmenu = link.submenu && link.submenu.length > 0;
                  const isActive =
                    link.path === pathname ||
                    (hasSubmenu &&
                      link.submenu.some((sub) => pathname.includes(sub.name)));

                  return (
                    <div key={index}>
                      <Link
                        href={link.path}
                        onClick={() => !hasSubmenu && setMobileMenuOpen(false)}
                        className={`${
                          isActive ? "text-accent" : "text-white"
                        } flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 capitalize font-medium`}
                      >
                        <span className="text-xl">{link.icon}</span>
                        <span>{link.name}</span>
                        {hasSubmenu && (
                          <svg
                            className="w-4 h-4 ml-auto transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </Link>

                      {/* Mobile Submenu */}
                      {hasSubmenu && (
                        <div className="ml-6 flex flex-col gap-1">
                          {link.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-white/70 hover:text-accent px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 text-sm font-medium"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

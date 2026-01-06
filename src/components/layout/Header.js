"use client";
// Next Image
import Image from "next/image";

// Components
import { motion } from "framer-motion";
import { useTheme } from "@/components/context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navData } from "@/data/navigation";

const Header = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
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

          {/* Top Navigation (centered) */}
          <div className="w-full lg:flex-1 flex justify-center">
            <nav className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
              {navData.map((link, index) => {
                const hasSubmenu = link.submenu && link.submenu.length > 0;
                const isActive =
                  link.path === pathname ||
                  (hasSubmenu && link.submenu.some((sub) => pathname.includes(sub.name)));

                return (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => hasSubmenu && setOpenDropdown(link.name)}
                    onMouseLeave={() => hasSubmenu && setOpenDropdown(null)}
                  >
                    <Link
                      href={link.path}
                      className={`${
                        isActive ? "text-accent" : "text-white"
                      } flex items-center gap-2 hover:text-accent transition-all duration-300 capitalize font-medium text-sm sm:text-base`}
                    >
                      <span className="text-lg sm:text-xl">{link.icon}</span>
                      <span className="hidden xs:inline sm:inline">{link.name}</span>
                      {hasSubmenu && (
                        <svg
                          className="hidden sm:inline w-4 h-4 ml-1 transition-transform duration-300"
                          style={{ transform: openDropdown === link.name ? "rotate(180deg)" : "rotate(0deg)" }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
  );
};

export default Header;

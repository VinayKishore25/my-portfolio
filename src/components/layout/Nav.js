// Icons
"use client";
import { useState } from "react";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiBookOpen,
  HiRss,
  HiEnvelope,
} from "react-icons/hi2";

// Next Link
import Link from "next/link";

// Next Router
import { useRouter, usePathname } from "next/navigation";
import { navData } from "@/data/navigation";

const Nav = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-start gap-4 md:gap-8 py-4 md:py-6 flex-wrap">
          {navData.map((link, index) => {
              const hasSubmenu = link.submenu && link.submenu.length > 0;
              const isActive = link.path === pathname || (hasSubmenu && link.submenu.some(sub => pathname.includes(sub.name)));

            return (
                <div
                  className="relative"
                key={index}
                  onMouseEnter={() => hasSubmenu && setOpenDropdown(link.name)}
                  onMouseLeave={() => hasSubmenu && setOpenDropdown(null)}
              >
                  <Link
                    className={`${
                      isActive ? "text-accent" : "text-white"
                    } flex items-center gap-2 hover:text-accent transition-all duration-300 capitalize font-medium text-sm md:text-base lg:text-lg`}
                    href={link.path}
                  >
                    {/* Icon */}
                    <div className="text-lg md:text-xl">{link.icon}</div>
                    {/* Text - Hidden on mobile, shown on tablet and up */}
                    <span className="hidden sm:inline">{link.name}</span>
                    {/* Dropdown indicator */}
                    {hasSubmenu && (
                      <svg 
                        className="hidden sm:inline w-4 h-4 ml-1 transition-transform duration-300" 
                        style={{ transform: openDropdown === link.name ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasSubmenu && openDropdown === link.name && (
                    <div className="hidden sm:block absolute top-full left-0 mt-2 min-w-[200px] bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                      {link.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.path}
                          className="block px-4 py-3 text-white hover:bg-accent/20 hover:text-accent transition-all duration-300 text-sm font-medium"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

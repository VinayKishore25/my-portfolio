// Icons
"use client";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-start gap-4 md:gap-8 py-4 md:py-6 flex-wrap">
          {navData.map((link, index) => {
            return (
              <Link
                className={`${
                  link.path === pathname ? "text-accent" : "text-white"
                } flex items-center gap-2 hover:text-accent transition-all duration-300 capitalize font-medium text-sm md:text-base lg:text-lg`}
                href={link.path}
                key={index}
              >
                {/* Icon */}
                <div className="text-lg md:text-xl">{link.icon}</div>
                {/* Text - Hidden on mobile, shown on tablet and up */}
                <span className="hidden sm:inline">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

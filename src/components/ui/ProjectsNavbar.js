"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./navbar-menu";
import { cn } from "@/lib/utils";

export function ProjectsNavbar({ className = "top-2" }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center",
        className
      )}
    >
      <div className="fixed inset-x-0 max-w-2xl mx-auto z-50">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-3 text-sm">
              <HoveredLink href="/work?tab=all">All Projects</HoveredLink>
              <HoveredLink href="/work?tab=freelance">Freelance</HoveredLink>
              <HoveredLink href="/work?tab=experience">Experience</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default ProjectsNavbar;

"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const themes = {
  crimsonNight: {
    primary: "#180C12",
    secondary: "#2A1A24",
    accent: "#EF4444",
    name: "Crimson Night",
  },
  midnightViolet: {
    primary: "#0F0A1F",
    secondary: "#22144A",
    accent: "#A855F7",
    name: "Midnight Violet",
  },
  oceanSunset: {
    primary: "#0B1724",
    secondary: "#1F2F46",
    accent: "#F97316",
    name: "Ocean Sunset",
  },
  obsidianRose: {
    primary: "#1A0B12",
    secondary: "#732C3F",
    accent: "#C57C8A",
    name: "Obsidian ROSE",
  },
  tealAurora: {
    primary: "#0B1F2A",
    secondary: "#123A4A",
    accent: "#14B8A6",
    name: "Teal Aurora",
  },
  slateCitrus: {
    primary: "#0F1720",
    secondary: "#1F2933",
    accent: "#F59E0B",
    name: "Slate Citrus",
  },
  neonElectric: {
    primary: "#0D0D0D",
    secondary: "#1A1A1A",
    accent: "#00FF88",
    name: "Neon Electric",
  },
  vividCyan: {
    primary: "#0D1B2A",
    secondary: "#1B3A52",
    accent: "#00D9FF",
    name: "Vivid Cyan",
  },
  forestGreen: {
    primary: "#0F1F15",
    secondary: "#1A3A2A",
    accent: "#10B981",
    name: "Forest Green",
  },
  luxuryGold: {
    primary: "#1A1410",
    secondary: "#2D2416",
    accent: "#D4AF37",
    name: "Luxury Gold",
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("crimsonNight");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    } else {
      setCurrentTheme("crimsonNight");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", currentTheme);

    // Update CSS custom properties
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty(
      "--color-primary",
      theme.primary
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      theme.secondary
    );
    document.documentElement.style.setProperty("--color-accent", theme.accent);
  }, [currentTheme]);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    currentTheme,
    themes,
    changeTheme,
    theme: themes[currentTheme],
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

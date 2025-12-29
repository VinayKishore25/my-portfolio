"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const themes = {
  default: {
    primary: '#131424',
    secondary: '#393A47',
    accent: '#F13024',
    name: 'Default'
  },
  blue: {
    primary: '#0f172a',
    secondary: '#1e293b',
    accent: '#3b82f6',
    name: 'Blue'
  },
  green: {
    primary: '#0f1419',
    secondary: '#1f2937',
    accent: '#10b981',
    name: 'Green'
  },
  purple: {
    primary: '#1a1625',
    secondary: '#2d1b69',
    accent: '#8b5cf6',
    name: 'Purple'
  },
  orange: {
    primary: '#1c1917',
    secondary: '#44403c',
    accent: '#f97316',
    name: 'Orange'
  },
  // --- NEW PALETTES ---
  sapphireVeil: {
    // #0D2440 (Darkest Blue)
    primary: '#0D2440', 
    // #2E5E99 (Mid-Dark Blue)
    secondary: '#2E5E99', 
    // #7BA4D0 (Mid-Light Blue)
    accent: '#7BA4D0',
    name: 'Sapphire VEIL'
  },
  amberMirage: {
    // #5A3C0B (Darkest Brown/Amber)
    primary: '#5A3C0B', 
    // #C48B28 (Dark Amber)
    secondary: '#C48B28', 
    // #EBC176 (Light Amber)
    accent: '#EBC176',
    name: 'Amber MIRAGE'
  },
  obsidianRose: {
    // #1A0B12 (Darkest Rose/Black)
    primary: '#1A0B12', 
    // #732C3F (Dark Burgundy/Rose)
    secondary: '#732C3F', 
    // #C57C8A (Mid-Rose)
    accent: '#C57C8A',
    name: 'Obsidian ROSE'
  }
  // --- END NEW PALETTES ---
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', currentTheme);
    
    // Update CSS custom properties
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    document.documentElement.style.setProperty('--color-accent', theme.accent);
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
    theme: themes[currentTheme]
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
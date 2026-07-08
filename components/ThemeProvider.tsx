'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const THEME_VARS = {
  dark: {
    '--color-bg': '0 0 0',
    '--color-surface': '18 18 18',
    '--color-border': '42 42 42',
    '--color-text': '255 255 255',
    '--color-muted': '160 160 160',
    '--color-accent': '229 229 229',
    '--color-scroll-track': '26 26 26',
    '--color-scroll-thumb-start': '75 85 99',
    '--color-scroll-thumb-end': '45 55 72',
  },
  light: {
    '--color-bg': '247 245 240',
    '--color-surface': '255 252 247',
    '--color-border': '217 210 198',
    '--color-text': '27 25 23',
    '--color-muted': '93 86 79',
    '--color-accent': '45 41 38',
    '--color-scroll-track': '232 227 219',
    '--color-scroll-thumb-start': '169 162 153',
    '--color-scroll-thumb-end': '124 116 106',
  },
} as const;

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const palette = THEME_VARS[theme];

  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  for (const [key, value] of Object.entries(palette)) {
    root.style.setProperty(key, value);
  }

  document.body.style.backgroundColor = `rgb(${palette['--color-bg']})`;
  document.body.style.color = `rgb(${palette['--color-text']})`;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedTheme = window.localStorage.getItem('theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const storedTheme = getStoredTheme();

    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme);
      return;
    }

    if (!storedTheme) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

      if (systemTheme !== theme) {
        setTheme(systemTheme);
      }
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
"use client";

import { useEffect, useState, useCallback } from "react";

const DARK_MODE_STORAGE_KEY = "inspector.template.darkMode";

function getStoredPreference(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = localStorage.getItem(DARK_MODE_STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      return stored;
    }
  } catch {
    // ignore
  }
  return "dark";
}

function applyTheme(isDark: boolean) {
  if (typeof document === "undefined") return;
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => getStoredPreference() === "dark");

  useEffect(() => {
    applyTheme(isDarkMode);
    try {
      localStorage.setItem(DARK_MODE_STORAGE_KEY, isDarkMode ? "dark" : "light");
    } catch {
      // ignore
    }
  }, [isDarkMode]);

  useEffect(() => {
    applyTheme(getStoredPreference() === "dark");
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return { isDarkMode, toggleDarkMode };
}

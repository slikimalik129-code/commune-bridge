"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="px-5 py-3 rounded-2xl border border-cyan-400 hover:bg-cyan-400/10 transition duration-300"
    >
      Switch Theme
    </button>
  );
}
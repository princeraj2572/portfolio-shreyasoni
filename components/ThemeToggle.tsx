"use client";

import { useEffect, useState } from "react";

const THEMES = [
  { key: "sakura", name: "Sakura Breeze", icon: "🌸" },
  { key: "shadow", name: "Shadow Realm", icon: "🖤" },
] as const;

export default function ThemeToggle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("portfolioTheme");
    const savedIndex = THEMES.findIndex((t) => t.key === saved);
    const initial = savedIndex === -1 ? 0 : savedIndex;
    // localStorage isn't available during SSR, so the saved theme can only be read after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIndex(initial);
    document.body.setAttribute("data-theme", THEMES[initial].key);
  }, []);

  const handleClick = () => {
    const next = (index + 1) % THEMES.length;
    setIndex(next);
    document.body.setAttribute("data-theme", THEMES[next].key);
    localStorage.setItem("portfolioTheme", THEMES[next].key);
  };

  const current = THEMES[index];

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1.5 bg-lavender/50 border border-lavenderDeep/40 rounded-full text-xs font-semibold text-mutedPlum flex items-center gap-1.5 shadow-sm hover:bg-lavender active:scale-105 transition-all"
    >
      <span>{current.icon}</span>
      <span>{current.name}</span>
    </button>
  );
}

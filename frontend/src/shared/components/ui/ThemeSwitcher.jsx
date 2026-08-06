import { useEffect, useRef, useState } from "react";
import { HiMiniSwatch, HiChevronDown, HiCheck } from "react-icons/hi2";

import {
  THEMES,
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
} from "@/app/config/themes";

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
  });

  const dropdownRef = useRef(null);

  const activeTheme =
    THEMES.find((item) => item.id === theme) ?? THEMES[0];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        title="Theme change"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 transition-all hover:border-primary hover:bg-surface-hover"
      >
        <HiMiniSwatch
          className="text-lg"
          style={{ color: activeTheme.color }}
        />

        <span className="hidden text-sm font-medium sm:inline">
          {activeTheme.name}
        </span>

        <HiChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute right-0 mt-2 w-52 origin-top-right rounded-xl border border-border bg-surface-elevated p-2 shadow-lg transition-all duration-200 ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-95 opacity-0"
        }`}
      >
        {THEMES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setTheme(item.id);
              setOpen(false);
            }}
            className={`mb-1 flex w-full items-center justify-between rounded-lg px-3 py-2 transition-all duration-200 hover:bg-surface-hover hover:pl-4 ${
              activeTheme.id === item.id
                ? "border border-primary bg-surface-hover"
                : "border border-transparent"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className="size-3 rounded-sm"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span>{item.name}</span>
            </div>

            {activeTheme.id === item.id && (
              <HiCheck className="text-primary text-lg" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
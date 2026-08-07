"use client";

import { useContext } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ThemeContext, ThemeDispatchContext } from "@/lib/ui/theme-provider";
import {
  ThemeModeContext,
  ThemeModeDispatchContext,
} from "@/lib/ui/theme-mode-provider";

export default function ButtonTheme() {
  function getSystemTheme() {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  const theme = useContext(ThemeContext);
  const themeDispatch = useContext(ThemeDispatchContext);
  const mode = useContext(ThemeModeContext);
  const modeDispatch = useContext(ThemeModeDispatchContext);
  const nextTheme = () => {
    switch (theme) {
      case "no-preference":
        return "light";
      case "light":
        return "dark";
      case "dark":
        return "light";
      default:
        return getSystemTheme();
    }
  };
  return (
    <button
      onClick={() => {
        modeDispatch({
          type: "SET_MODE",
          payload: "app",
        });
        themeDispatch({
          type: "SET_THEME",
          payload: nextTheme(),
        });
      }}
      className="hover:cursor-pointer"
    >
      {theme === "dark" ? (
        <SunIcon className="w-8 h-8" />
      ) : (
        <MoonIcon className="w-8 h-8" />
      )}
    </button>
  );
}

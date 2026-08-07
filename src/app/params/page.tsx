"use client";
import { useContext } from "react";
import { ThemeContext, ThemeDispatchContext } from "@/lib/ui/theme-provider";
import {
  ThemeModeContext,
  ThemeModeDispatchContext,
} from "@/lib/ui/theme-mode-provider";

export default function ParamsPage() {
  const theme = useContext(ThemeContext);
  const themeDispatch = useContext(ThemeDispatchContext);
  const mode = useContext(ThemeModeContext);
  const modeDispatch = useContext(ThemeModeDispatchContext);

  function getSystemTheme() {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return (
    <section className="mx-auto w-full">
      <h2 className="text-2xl font-bold mb-8">Params</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <button
            className="w-full hover:cursor-pointer"
            onClick={() => {
              modeDispatch({
                type: "SET_MODE",
                payload: "app",
              });
              themeDispatch({
                type: "SET_THEME",
                payload: "dark",
              });
            }}
          >
            Use app dark mode
          </button>
          <button
            className="w-full hover:cursor-pointer"
            onClick={() => {
              modeDispatch({
                type: "SET_MODE",
                payload: "app",
              });
              themeDispatch({
                type: "SET_THEME",
                payload: "light",
              });
            }}
          >
            Use app light mode
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="w-full hover:cursor-pointer"
            onClick={() => {
              modeDispatch({
                type: "SET_MODE",
                payload: "system",
              });
              themeDispatch({
                type: "SYSTEM_THEME",
                payload: getSystemTheme(),
              });
            }}
          >
            Use system theme
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p>Current mode: {mode}</p>
          <p>Current theme: {theme}</p>
        </div>
      </div>
    </section>
  );
}

"use client";
import {
  createContext,
  useReducer,
  useEffect,
  ReactNode,
  useState,
  useContext,
} from "react";
import { ThemeModeProvider, ThemeModeContext } from "./theme-mode-provider";

export const ThemeContext = createContext<string>("no-preference");
export const ThemeDispatchContext = createContext<
  React.Dispatch<{ type: string; payload: string }>
>(() => {
  return () => {};
});

function themeReducer(
  state: string,
  action: { type: string; payload: string },
) {
  switch (action.type) {
    case "SET_THEME":
      return action.payload;
    default:
      return getSystemTheme();
  }
}

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const mode = useContext(ThemeModeContext);
  const [theme, themeDispatch] = useReducer(themeReducer, getSystemTheme());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", () => {
      if (mq.matches) {
        themeDispatch({ type: "SET_THEME", payload: "dark" });
      } else {
        themeDispatch({ type: "SET_THEME", payload: "light" });
      }
    });
    return () => {
      mq.removeEventListener("change", () => {
        themeDispatch({ type: "SET_THEME", payload: getSystemTheme() });
      });
    };
  }, [mode]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, [theme]);

  return (
    <ThemeModeProvider>
      <ThemeContext value={theme}>
        <ThemeDispatchContext value={themeDispatch}>
          {children}
        </ThemeDispatchContext>
      </ThemeContext>
    </ThemeModeProvider>
  );
}

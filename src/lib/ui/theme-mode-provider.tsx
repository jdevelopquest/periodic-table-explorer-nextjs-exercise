import { createContext, ReactNode, useReducer, useEffect } from "react";

export const ThemeModeContext = createContext<string>("system");
export const ThemeModeDispatchContext = createContext<
  React.Dispatch<{ type: string; payload: string }>
>(
  (() => {
    return () => {};
  })(),
);

function themeModeReducer(
  state: string,
  action: { type: string; payload: string },
) {
  switch (action.type) {
    case "SET_MODE":
      return action.payload;
    default:
      return "system";
  }
}

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, modeDispatch] = useReducer(themeModeReducer, "system");
  return (
    <ThemeModeContext value={mode}>
      <ThemeModeDispatchContext value={modeDispatch}>
        {children}
      </ThemeModeDispatchContext>
    </ThemeModeContext>
  );
}

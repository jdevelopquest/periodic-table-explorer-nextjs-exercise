"use client";

import { MoonIcon, SunIcon, UserIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/lib/ui/theme-provider";

export default function ButtonTheme() {
  const [theme, switchToLight, switchToDark, switchToSystem] = useTheme();
  const switchers = {
    light: switchToLight,
    dark: switchToDark,
    system: switchToSystem,
  };
  const icon = (value: string) => {
    switch (value) {
      case "dark":
        return <MoonIcon className="w-8 h-8" />;
      case "light":
        return <SunIcon className="w-8 h-8" />;
      default:
        return <UserIcon className="w-8 h-8" />;
    }
  };
  return (
    <div className="flex gap-4">
      {Object.entries(switchers).map(([value, switcher]) => (
        <button
          key={value}
          onClick={switcher}
          className="hover:cursor-pointer"
          aria-label={`Toggle to ${value}`}
        >
          {icon(value)}
        </button>
      ))}
    </div>
  );
}

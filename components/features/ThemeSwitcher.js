import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun } from "akar-icons";
import { Moon } from "akar-icons";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  const switchTheme = () => {
    if (mounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-white focus:outline-none dark:bg-black h-8 w-8 transform ease-in-out active:scale-75"
      onClick={switchTheme}
    >
      {mounted && (
        <div>
          {theme === "dark" ? (
            <Sun className="text-black dark:text-white" />
          ) : (
            <Moon className="text-black dark:text-white" />
          )}
        </div>
      )}
    </button>
  );
}

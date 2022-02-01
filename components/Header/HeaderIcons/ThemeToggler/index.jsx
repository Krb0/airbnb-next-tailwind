import { useState, useEffect } from "react";
import MoonIcon from "@heroicons/react/solid/MoonIcon";
import SunIcon from "@heroicons/react/solid/SunIcon";
const ThemeToggler = ({ theme, setTheme, systemTheme }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? "dark" : theme;

    if (currentTheme === "dark") {
      return (
        <MoonIcon
          className="h-4 sm:h-6 cursor-pointer dark:text-gray-200"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <SunIcon
          className="h-4 sm:h-6 cursor-pointer text-yellow-500"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return <>{renderThemeChanger()} </>;
};

export default ThemeToggler;

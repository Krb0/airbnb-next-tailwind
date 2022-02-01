import React from "react";
import { useTheme } from "next-themes";
import HeaderIcons from "./HeaderIcons";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 dark:bg-black transition-all ease-in duration-300 ">
      <HeaderLogo theme={theme} />
      <HeaderSearch />
      <HeaderIcons
        theme={theme}
        setTheme={setTheme}
        systemTheme={systemTheme}
      />
    </header>
  );
};

export default Header;

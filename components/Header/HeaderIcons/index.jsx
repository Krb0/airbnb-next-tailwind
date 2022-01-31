import GlobeAltIcon from "@heroicons/react/outline/GlobeAltIcon";
import MenuIcon from "@heroicons/react/solid/MenuIcon";
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import ThemeToggler from "./ThemeToggler";
const HeaderIcons = ({ theme, setTheme }) => {
  return (
    <div className="flex space-x-4 items-center justify-end text-gray-500">
      <p className="hidden md:inline cursor-pointer font-light dark:text-gray-200 ">
        Become a host
      </p>
      <ThemeToggler theme={theme} setTheme={setTheme} />
      <GlobeAltIcon className="hidden sm:inline h-6 text-gray-600 cursor-pointer dark:text-gray-200" />
      <div className="flex items-center border-2 p-2 rounded-full text-gray-600 space-x-1 dark:text-gray-200 dark:border-gray-500 cursor-pointer">
        <MenuIcon className="h-3 sm:h-5 " />
        <UserCircleIcon className="h-3 sm:h-5 " />
      </div>
    </div>
  );
};

export default HeaderIcons;

import React from "react";
import SearchIcon from "@heroicons/react/solid/SearchIcon";
const HeaderSearch = () => {
  return (
    <div className="flex items-center md:border-2 rounded-full px-3 md:shadow-sm dark:border-black w-100">
      <input
        placeholder="Search"
        type="text"
        className="block self-center sm:hidden bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 text-center dark:text-white dark:placeholder-gray-400 w-[60px] mx-auto"
      />
      <input
        placeholder="Start your search"
        type="text"
        className="hidden sm:block bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400 dark:text-white dark:placeholder-gray-400"
      />
      <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer dark:bg-black " />
    </div>
  );
};

export default HeaderSearch;

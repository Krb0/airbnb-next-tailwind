import React from "react";
import Image from "next/image";
import SearchIcon from "@heroicons/react/solid/SearchIcon";
import GlobeAltIcon from "@heroicons/react/outline/GlobeAltIcon";
import MenuIcon from "@heroicons/react/solid/MenuIcon";
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon";
import Logo from "../../assets/Airbnb_Logo.png";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={Logo}
          layout="fill"
          alt="Logo"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full px-3 md:shadow-sm">
        <input
          placeholder="Start your search"
          type="text"
          className="bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer font-light">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 text-gray-600 cursor-pointer" />
        <div className="flex items-center border-2 p-2 rounded-full text-gray-600 space-x-2 ">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;

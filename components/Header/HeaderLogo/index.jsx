import React from "react";
import Image from "next/image";
import Logo from "../../../assets/Airbnb_Logo.png";
import LogoDark from "../../../assets/Airbnb_Logo_Dark.png";
const HeaderLogo = ({ theme }) => {
  return (
    <div className="relative flex items-center h-8 sm:h-10 cursor-pointer my-auto ">
      <Image
        src={theme === "dark" ? LogoDark : Logo}
        layout="fill"
        alt="Logo"
        objectFit="contain"
        objectPosition="left"
      />
    </div>
  );
};

export default HeaderLogo;

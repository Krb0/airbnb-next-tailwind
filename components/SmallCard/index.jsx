import React from "react";
import Image from "next/image";

const SmallCard = ({ location, distance, img }) => {
  return (
    <div className="dark:text-white flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-150 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" alt={location} />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="dark:text-gray-500 text-gray-400">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;

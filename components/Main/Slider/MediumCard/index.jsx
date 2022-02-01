import React from "react";
import Image from "next/image";
const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out w-[800px] ">
      <div className="relative h-80 aspect-square">
        <Image src={img} layout="fill" alt={title} />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;

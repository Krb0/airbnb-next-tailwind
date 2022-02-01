import React from "react";
import Image from "next/image";
const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer ">
      <div className="relative h-96 min-w-[200px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Wishlist Banner"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-40 left-12">
        <h3 className="text-black text-xl sm:text-4xl mb-6 w-64 font-extrabold ">
          {title}
        </h3>
        <p className="text-gray-700 text-sm sm:text-lg font-semibold ">
          {description}
        </p>
        <button className="text-xs text-white bg-gray-900 px-4 py-2 rounded-lg mt-6 ml-3">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;

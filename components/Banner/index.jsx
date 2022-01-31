import React from "react";
import Image from "next/image";
import HeroImage from "../../assets/hero-image.jpg";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[300px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src={HeroImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Banner"
        priority={true}
      />
      <div className="absolute top-1/2 w-full text-center ">
        <p className="font-bold text-sm sm:text-lg text-black mb-4">
          Not sure where to go? Perfect.
        </p>
        <button className="dark:bg-gray-900 dark:text-white text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition-all duration-150">{`I'm Flexible.`}</button>
      </div>
    </div>
  );
};

export default Banner;

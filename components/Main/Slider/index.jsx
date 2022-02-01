import React from "react";
import MediumCard from "./MediumCard";
const Slider = ({ cardsData }) => {
  return (
    <section className="py-8 ">
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-y-hidden scrollbar-hide p-3 ">
        {cardsData?.map((item) => (
          <MediumCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Slider;

import React from "react";

import SmallCard from "./SmallCard";

const Locations = ({ exploreData }) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-bold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {exploreData?.map((item) => (
          <SmallCard {...item} key={item.location} />
        ))}
      </div>
    </section>
  );
};

export default Locations;

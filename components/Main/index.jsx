import React from "react";
import Locations from "./Locations";
import Slider from "./Slider";
import LargeCard from "./LargeCard";
import LargeImg from "../../assets/wishlist-baner.webp";
const Main = ({ cardsData, exploreData }) => {
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <Locations exploreData={exploreData} />
      <Slider cardsData={cardsData} />
      <LargeCard
        img={LargeImg}
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttonText="Get Inspired"
      />
    </main>
  );
};

export default Main;

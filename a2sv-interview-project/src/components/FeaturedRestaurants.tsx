import React from "react";
import SingleRestaurant from "./SingleRestaurant";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const FeaturedRestaurants = () => {
  return (
    <div className="my-10 flex flex-col justify-center items-center md:flex-row flex-wrap gap-4 mx-auto">
      {array.map((item, index) => (
        <SingleRestaurant key={index} />
      ))}
    </div>
  );
};

export default FeaturedRestaurants;

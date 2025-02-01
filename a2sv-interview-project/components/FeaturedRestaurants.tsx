"use client";

// import React, { useState } from "react";
import Restaurant from "./Restaurant";
import { Button } from "./ui/button";

const restaurants = [
  {
    name: "Bow Lasagna",
    rating: 4.6,
    price: 2.99,
    status: "Closed",
    image: "/featured-restaurants/bow lasagna.png",
    icon: "/hotel-icons/hotel-icon-1.png",
  },
  {
    name: "Mixed Avocado Smoothy",
    rating: 4.0,
    price: 5.99,
    status: "Closed",
    image: "/featured-restaurants/mixed avocado.png",
    icon: "/hotel-icons/hotel-icon-2.png",
  },

  {
    name: "Pancake",
    rating: 5.0,
    price: 3.99,
    status: "Open Now",
    image: "/featured-restaurants/pancake.png",
    icon: "/hotel-icons/hotel-icon-3.png",
  },
  {
    name: "Cupcake",
    rating: 5.0,
    price: 1.99,
    status: "Open Now",
    image: "/featured-restaurants/cupcake.png",
    icon: "/hotel-icons/hotel-icon-4.png",
  },
  {
    name: "Creamy Stake",
    rating: 4.5,
    price: 12.99,
    status: "Open Now",
    image: "/featured-restaurants/creamy stake.png",
    icon: "/hotel-icons/hotel-icon-5.png",
  },
  {
    name: "State with potatos",
    rating: 5.0,
    price: 15.99,
    status: "Open Now",
    image: "/featured-restaurants/stake potatoes.png",
    icon: "/hotel-icons/hotel-icon-6.png",
  },
  {
    name: "Indian spicy soup",
    rating: 4.5,
    price: 9.99,
    status: "Open Now",
    image: "/featured-restaurants/indian spicy.png",
    icon: "/hotel-icons/hotel-icon-7.png",
  },
  {
    name: "Stake Omlet",
    rating: 4.9,
    price: 11.99,
    status: "Open Now",
    image: "/featured-restaurants/stake omelet.png",
    icon: "/hotel-icons/hotel-icon-8.png",
  },
];

const FeaturedRestaurants = () => {
//   const [restaurants, setRestaurants] = useState();
  return (
    <>
      <div className="w-[86%] mx-auto mb-7">
        <div className=" flex flex-col md:flex-row flex-wrap justify-between items-center gap-4">
          {restaurants.map((restaurant, index) => {
            return (
              <div key={index}>
                <Restaurant
                  name={restaurant.name}
                  image={restaurant.image}
                  price={restaurant.price}
                  rating={restaurant.rating}
                  status={restaurant.status}
                  icon={restaurant.icon}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button className="bg-[#FF9A0E] shadow-2xl shadow-[#FF9A0E] font-bold">
            Load More
          </Button>
        </div>
      </div>
    </>
  );
};

export default FeaturedRestaurants;

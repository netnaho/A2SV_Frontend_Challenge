import Image from "next/image";
import React from "react";

const Restaurant = ({
  name,
  image,
  rating,
  price,
  status,
  icon,
}: {
  name: string;
  image: string;
  rating: number;
  price: number;
  status: string;
  icon: string;
}) => {
  return (
    <div className="flex flex-col w-[260px] md:w-[290px] gap-y-2">
      <div className="relative w-[260px] md:w-[310px] rounded-lg overflow-hidden">
        <div className="absolute bg-[#F17228] px-1 py-1 rounded-md top-3 left-3 flex gap-x-2">
          <Image
            className="object-contain"
            src="/icons/tag-icon.png"
            alt="search"
            width={15}
            height={15}
          />
          <span className="text-white text-sm font-bold">${price}</span>
        </div>
        <Image
          className="object-contain"
          src={image}
          alt="hero"
          width={400}
          height={400}
        />
      </div>
      <div className="flex gap-x-4 items-center">
        <div>
          <Image src={icon} alt="search" width={50} height={50} />
        </div>
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <span>
            <Image
              src="/icons/star-icon.png"
              alt="search"
              width={20}
              height={20}
            />
            <span className="text-[#FFB30E]">{rating}</span>
          </span>
        </div>
      </div>
      <div
        className={`px-3 py-1 rounded-full ${
          status === "Open Now"
            ? "bg-[#79B93C33] text-[#79B93C]"
            : "bg-[#F1722833] text-[#F17228]"
        }  font-bold w-fit`}
      >
        {status}
      </div>
    </div>
  );
};

export default Restaurant;

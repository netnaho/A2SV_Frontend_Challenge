import Image from "next/image";
import React from "react";

const SingleRestaurant = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-2">
        <div className="w-[300px] h-[300px] rounded-lg overflow-hidden ">
          <Image
            className="rounded-lg"
            src="/image.png"
            alt="hero"
            width={400}
            height={400}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <div className="h-[40px] w-[40px] bg-green-600 rounded-lg"></div>
          <h1>Stake with potatos</h1>
        </div>

        <div className="w-[60px] h-[30px] text-center rounded-full bg-[#79B93C33] text-[#79B93C] font-bold">
          Open
        </div>
      </div>
    </div>
  );
};

export default SingleRestaurant;

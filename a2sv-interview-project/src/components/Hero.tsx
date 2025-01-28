import Image from "next/image";
import React from "react";
// import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className=" bg-[#FFB30E] h-[500px]">
        <div className="flex flex-col overflow-hidden gap-20 relative md:flex-row justify-center items-center h-full w-[80%] mx-auto">
          <div className="w-[50%] flex flex-col gap-y-4">
            <div className="text-white">
              <h1 className="text-4xl font-bold">Are you starving?</h1>
              <p className="text-sm">
                Within a few clicks, find meals that are accessible near yo
              </p>
            </div>
            <div className="w-full h-[150px] rounded-lg bg-white">
              <div></div>
              <div></div>
            </div>
          </div>
          {/* Image */}
          <div className="w-[50%] relative bottom-0 right-0">
            <Image
              className="absolute -bottom-64 "
              src="/Image Base.png"
              alt="hero"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

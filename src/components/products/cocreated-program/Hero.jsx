import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <h1 className="absolute top-20 right-20 font-semibold text-white text-[2.7rem]">
          Co-created Innovation Program
        </h1>
        <div className="absolute top-38 text-right right-20 font-semibold text-white">
          <p>upto 50% of Discount</p>
          <p>Free Sample (Limited Spots Available)</p>
        </div>
        <div className="absolute bottom-20 right-20 text-white border-blue-500 border py-2 px-3 rounded-xl">
          Join Now
        </div>
        <img src="/iot-sensing/iot-img-2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Innovation = () => {
  return (
    <div className="my-20">
      <div className="ml-4 md:ml-23">
        <h1 className="mt-10 font-semibold text-2xl md:text-3xl text-[#333333]">
          Innovation
        </h1>
        <p className="text-[#333333] mt-3 w-[95%] mb-10 sm:mb-0 md:w-[35%]">
          Milesight strongly believes that innovative technologies are essential
          and key to lead success for our partners.
        </p>
      </div>
      <div className="w-[97vw] h-85 rounded-r-2xl relative max-w-screen-xl">
        <img
          src="/home/5g.jpg"
          alt=""
          className="object-cover w-300 h-85 rounded-r-2xl blur-xs mt-2"
        />
        <img
          src="/home/5g.jpg"
          alt=""
          className="object-cover absolute -top-6 h-90 sm:right-50 rounded-md"
        />
      </div>
    </div>
  );
};

export default Innovation;

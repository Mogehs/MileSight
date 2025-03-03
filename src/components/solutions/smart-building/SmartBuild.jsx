import React from "react";
import pic from '/Smartbuilding/banner.jpg';

const SmartBuild = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px] overflow-hidden">
      <img src={pic} alt="Smart Building" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
        <div className="max-w-[50%]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight">
            Smart Building Solutions with Sensing Insights
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-2">
            Offers Infinite Possibilities to Buildings
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartBuild;

import React from "react";

function RestroomCards() {
  return (
    <div className="relative hidden lg:flex flex-col items-center gap-2">
      {/* Top Center Card with Effect */}
      <div className="relative">
        {/* Shadow Effect Behind */}
        <div className="absolute top-1 left-1 w-64 h-full bg-[#e0dfdf] border border-[#c7c5c5] shadow-lg rounded-xl"></div>
        {/* Main Card */}
        <div className="relative bg-[#f3f2f2] border border-[#d3d1d1] shadow-xl rounded-xl w-64 px-6 py-4">
          <div className="flex items-center pb-1 gap-2 border-b-2 border-b-[#a3a1a6] w-fit">
            <img
              className="h-[1.5rem] bg-[#1370da] rounded-full"
              src="/Solution/smart-restroom/card-1-img.svg"
              alt="not found"
            />
            <h3>Smart Display</h3>
          </div>
          <p className="text-[10px]">Customized Display</p>
        </div>
      </div>

      {/* Second Card (Left) with Effect */}
      <div className="relative -ml-140">
        {/* Shadow Effect Behind */}
        <div className="absolute top-1 left-1 w-64 h-full bg-[#dcdcdc] border border-[#bfbfbf] shadow-lg rounded-xl"></div>
        {/* Main Card */}
        <div className="relative bg-[#eaeaea] border border-[#bfbfbf] shadow-xl rounded-xl w-64 px-6 py-4">
          <div className="flex items-center pb-1 gap-2 border-b-2 border-b-[#9a999e] w-fit">
            <img
              className="h-[1.5rem] bg-[#1370da] rounded-full"
              src="/Solution/smart-restroom/card-2-img.svg"
              alt="not found"
            />
            <h3>Integrated Management</h3>
          </div>
          <p className="text-[10px]">
            Energy Management, Reasonably Allocate Resources, Higher Cost
            Performance, and Smart Maintenance
          </p>
        </div>
      </div>

      {/* Third Card (Right) with Effect */}
      <div className="relative ml-36">
        {/* Shadow Effect Behind */}
        <div className="absolute top-1 left-1 w-64 h-full bg-[#d3d3d3] border border-[#a6a6a6] shadow-lg rounded-xl"></div>
        {/* Main Card */}
        <div className="relative bg-[#dddcdc] border border-[#a6a6a6] shadow-xl rounded-xl w-64 px-6 py-4">
          <div className="flex items-center pb-1 gap-2 border-b-2 border-b-[#8d8b90] w-fit">
            <img
              className="h-[1.5rem] bg-[#1370da] rounded-full"
              src="/Solution/smart-restroom/card-3-img.svg"
              alt="not found"
            />
            <h3>Emergency Response</h3>
          </div>
          <p className="text-[10px]">One Key Alarm</p>
        </div>
      </div>
    </div>
  );
}

export default RestroomCards;

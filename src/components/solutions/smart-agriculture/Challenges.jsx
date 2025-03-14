import React from "react";

function Challenges() {
  return (
    <div
      id="agri-challenges"
      className="bg-[#f9f9f9] p-4 flex md:flex-row flex-col gap-4"
    >
      <div className="md:w-[50%] flex flex-col gap-8 md:p-8">
        <h2 className="text-[#333] lg:text-[2rem] md:text-[1rem] text-[25px]">
          What Kind of Problems Do Farmers Face?
        </h2>
        <p className="text-[#666]">
          Under traditional agriculture, farmers rely on time-and-volume-based
          farming strategy which results in resource excess or insufficiency.
          The lack of real-time insightful data in the farm and complexities of
          conventional agriculture system lead to inefficiency, great manpower,
          and high operation cost.
        </p>
        <h2 className="text-[#333]">
          To address that, farmers need to deal with many problems, including
          how to:
        </h2>
        <div className="flex lg:flex-row flex-col lg:items-center gap-4">
          <p className="text-[#666]">
            Get Real-Time
            <br /> Insights to Increase
            <br /> Farming Efficiency
          </p>
          <p className="text-[#666] lg:border-l border-[#e2e2e2] lg:pl-4">
            Lower Cost,
            <br />
            Waste and Effort by <br />
            Remote Management
          </p>
          <p className="text-[#666] lg:border-l border-[#e2e2e2] lg:pl-4">
            Tackle Volatile <br />
            Weather Caused <br />
            by Climate Changes
          </p>
        </div>
      </div>

      <div className="relative md:w-[50%] md:p-8 flex flex-col lg:gap-0 gap-6 justify-center items-center">
        <img
          className="lg:absolute lg:top-20 lg:right-40 xl:top-5 xl:right-45 z-10 md:w-60 rounded-md shadow-lg"
          src="/Solution/smart-agri/img1.jpg"
          alt="not found"
        />
        <img
          className="lg:absolute right-0 md:w-60 rounded-md shadow-lg z-5"
          src="/Solution/smart-agri/img2.jpg"
          alt="not found"
        />
        <img
          className="lg:absolute lg:bottom-20 lg:right-40 xl:bottom-0 xl:right-50 md:w-60 rounded-md shadow-lg"
          src="/Solution/smart-agri/img3.jpg"
          alt="not found"
        />
      </div>
    </div>
  );
}

export default Challenges;

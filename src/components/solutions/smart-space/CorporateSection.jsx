import React from "react";

function CorporateSection() {
  return (
    <div
      id="smart-carbon"
      className="h-[80vh] bg-cover bg-center text-white flex flex-col items-center justify-center gap-6 my-8 p-4"
      style={{
        backgroundImage: "url('/Solution/smart-space/corporat-bg-img.jpg')",
      }}
    >
      <h2 className="md:text-[1.5rem] text-[20px] pt-8">
        Understand Corporate Carbon Footprint and How to Reduce It
      </h2>
      <p className=" md:w-[75%] xl:block hidden">
        Currently, the accumulation rate of carbon dioxide (CO <sub>2</sub> ) in
        the atmosphere has exceeded any period in human history, increasing by
        over 10% in just the past 20 years. This alarming trend makes it
        critical for businesses worldwide to take proactive measures to control
        carbon emissions.{" "}
      </p>
      <p className="md:w-[75%] lg:block hidden">
        The Corporate Carbon Footprint refers to all the direct and indirect
        emissions resulting from a company's activities. Milesight's CoWork
        Smart Space Solution plays a key role in reducing these emissions by
        optimizing energy use, thereby indirectly contributing to a lower carbon
        footprint.
      </p>
      <button className="bg-[#0299f4] text-white py-1 px-6 rounded cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
        Learn More
      </button>
    </div>
  );
}

export default CorporateSection;

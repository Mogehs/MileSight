import React from "react";

const items = [
  {
    name: "Smart Office",
    image: "/home/smart-office.jpg",
  },
  {
    name: "Smart restroom",
    image: "/home/smart-restroom.jpg",
  },
  {
    name: "Indoor Air Quality",
    image: "/home/indoor-air-quality.jpg",
  },
  {
    name: "people counting",
    image: "/home/people-counting.jpg",
  },
  {
    name: "video surveillance",
    image: "/home/video-surveillance.jpg",
  },
  {
    name: "intelligent traffic",
    image: "/home/intelligent-traffic (1).jpg",
  },
];

const Solution = () => {
  return (
    <div className="my-20">
      <div className="ml-23">
        <h1 className="mt-10 font-semibold text-3xl text-[#333333]">
          Solution
        </h1>
        <p className="text-[#333333] mt-3 w-[35%]">
          Milesight provides a range of solutions to empower a more productive
          and effective society.
        </p>
      </div>
      <div className="bg-red-600 w-[90%] h-[20rem] mx-auto gap-2 overflow-auto flex">
        {items.map((item, index) => (
          <>
            <div className="">
              <img src={item.image} alt={item.name} className="rounded-lg" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Solution;

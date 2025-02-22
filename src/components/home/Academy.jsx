import React, { useState } from "react";

const academyList = [
  {
    img: "/academy/training-video-center.jpg",
    content: "",
  },
];

const Academy = () => {
  const [entered, setEnterd] = useState(false);

  return (
    <div className="my-20">
      <h1 className="text-[#333333] font-bold text-center text-[2.5rem]">
        Academy
      </h1>
      <p className="text-center text-[#333333] text-[0.8rem]">
        Gain deeper understanding about Milesight's latest products,
        technologies and solutions at Milesight Academy.
      </p>
      <div className=" h-[20rem] my-20 w-[80%] mx-auto">
        <div
          className="relative"
          onMouseEnter={() => setEnterd(true)}
          onMouseLeave={() => setEnterd(false)}
        >
          <div
            className={`bg-gray-200 w-[80%] sm:w-[30%] h-[15rem] mx-auto lg:m-0 absolute top-0 left-0 rounded-lg cursor-pointer transition-all linear ${
              entered && "z-40 top-10 left-10"
            }`}
          ></div>
          <div
            className={`w-[80%] sm:w-[30%] h-[15rem] mx-auto lg:m-0 absolute top-7 left-7 cursor-pointer transition-all linear ${
              !entered && " left-0"
            }`}
          >
            <img
              src="/academy/webinar.jpg"
              alt="academy-img"
              className="h-full object-cover rounded-lg w-full "
            />
          </div>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setEnterd(true)}
          onMouseLeave={() => setEnterd(false)}
        >
          <div
            className={`bg-gray-200 w-[80%] sm:w-[30%] h-[15rem] mx-auto lg:m-0 absolute top-0 left-0 rounded-lg cursor-pointer transition-all linear ${
              entered && "z-40 top-10 left-10"
            }`}
          ></div>
          <div
            className={`w-[80%] sm:w-[30%] h-[15rem] mx-auto lg:m-0 absolute top-7 left-7 cursor-pointer transition-all linear ${
              !entered && " left-0"
            }`}
          >
            <img
              src="/academy/training-video-center.jpg"
              alt="academy-img"
              className="h-full object-cover rounded-lg w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;

import React, { useState } from "react";
import ContentSection from "./ContentSection";
import {
  aboutData,
  productData,
  innovationData,
  solutionData,
  tutorialData,
  unboxingData,
  demoData,
} from "./data";

const options = [
  {
    id: "about",
    imgSrc: "/resources/video-center/icon1.svg",
    label: "About Milesight",
    data: aboutData,
  },
  {
    id: "product",
    imgSrc: "/resources/video-center/icon2.svg",
    label: "Product Introduction",
    data: productData,
  },
  {
    id: "solution",
    imgSrc: "/resources/video-center/icon3.svg",
    label: "Solution",
    data: solutionData,
  },
  {
    id: "innovation",
    imgSrc: "/resources/video-center/icon4.svg",
    label: "Innovation",
    data: innovationData,
  },
  {
    id: "demo",
    imgSrc: "/resources/video-center/icon5.svg",
    label: "Demo",
    data: demoData,
  },
  {
    id: "tutorials",
    imgSrc: "/resources/video-center/icon6.svg",
    label: "Tutorials",
    data: tutorialData,
  },
  {
    id: "unboxing",
    imgSrc: "/resources/video-center/icon7.svg",
    label: "Unboxing",
    data: unboxingData,
  },
];

function GroupSelection() {
  const [active, setActive] = useState("about");

  return (
    <div className="">
      {/* Selection Options */}
      <div className="lg:sticky lg:top-15 bg-white text-white flex flex-wrap md:gap-12 gap-6 items-center justify-center lg:py-8">
        {options.map(({ id, imgSrc, label }) => (
          <div
            key={id}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img
              className={`border border-[#c3c3c3] rounded-full p-2 hover:cursor-pointer lg:w-[4rem] lg:h-[4rem] w-12 h-12 transition ${
                active === id ? "bg-[#00667C]" : ""
              }`}
              src={imgSrc}
              alt={label}
              onClick={() => setActive(id)}
            />
            <p
              className={`text-[#6b7274] transition text-[10px] md:text-[15px] text-center ${
                active === id ? "text-[#00667C] font-semibold" : ""
              }`}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Dynamic Section Rendering */}
      <div>
        {" "}
        <ContentSection
          data={options.find((option) => option.id === active)?.data}
        />
      </div>
    </div>
  );
}

export default GroupSelection;

import React from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../menueContext";

const companyData = [
  {
    title: "Corporate Info",
    links: [
      { label: "About Us", path: "/company/about-us" },
      { label: "Our Brand", path: "/company/our-brand" },
      { label: "Events", path: "/company/events" },
    ],
  },
];

const Company = () => {
  const { closeMenu } = useMenu();

  return (
    <div className="flex h-fit p-6 sm:px-6 absolute sm:w-[50rem] sm:ml-60 mt-2 rounded-2xl sm:h-[10rem] mx-auto z-50 bg-white/30 backdrop-blur-[6px]">
      <div className="grid grid-cols-4 gap-10 md:gap-16">
        {companyData.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-black text-nowrap">
              {section.title}
            </h2>
            <ul className="space-y-4 md:flex  md:gap-10 text-nowrap">
              {section.links.map((item, linkIndex) => (
                <li key={linkIndex} onClick={closeMenu}>
                  <a
                    href={item.path}
                    className="text-white text-[15px] sm:text-[16px] hover:text-[#7CCA9A] transition-colors duration-300 buttonAnim2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;

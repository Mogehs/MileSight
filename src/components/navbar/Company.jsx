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
    <div className="flex items-center h-fit bg-gray-50 p-6 absolute w-full z-50">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:gap-16">
        {companyData.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              {section.title}
            </h2>
            <ul className="space-y-4 md:flex  md:gap-10">
              {section.links.map((item, linkIndex) => (
                <li key={linkIndex} onClick={closeMenu}>
                  <a
                    href={item.path}
                    className="text-gray-700 text-[15px] sm:text-[16px] hover:text-[#7CCA9A] transition-colors duration-300"
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

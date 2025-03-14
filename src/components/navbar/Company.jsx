import React from "react";
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
  {
    title: "Library",
    links: [
      { label: "Blog", path: "/company/blog" },
      { label: "News", path: "/company/news" },
      { label: "Newsletter", path: "/company/newsletter" },
    ],
  },
];

const Company = () => {
  const { closeMenu } = useMenu();

  return (
    <div className="flex h-fit p-6 sm:px-6 absolute sm:w-[50rem] sm:ml-45 mt-2 rounded-2xl sm:h-[12rem] mx-auto z-50 bg-white/30 backdrop-blur-[6px]">
      <div className="grid grid-cols-2 gap-10 sm:gap-0 w-100">
        {companyData.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-black">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.links.map((item, linkIndex) => (
                <li key={linkIndex} onClick={closeMenu}>
                  <a
                    href={item.path}
                    className="text-black text-[15px] sm:text-[16px] hover:text-[#7CCA9A] transition-colors duration-300 buttonAnim2"
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

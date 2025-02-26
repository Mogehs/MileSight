import React from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../menueContext";

const resourcesData = [
  {
    title: "Support",
    links: ["Submit a Ticket", "Help Center", "Online Demo"],
  },
  {
    title: "Academy",
    links: [
      "Product Training",
      "Solution Training",
      "Technical Training",
      "Roadmap",
    ],
  },
  {
    title: "Video Center",
    links: ["Products", "Solutions", "Technology Innovations", "Tutorials"],
  },
  {
    title: "Download Center",
    links: [
      "Datasheet & User Guide",
      "Software & Firmware",
      "Release Note",
      "Developer Zone",
    ],
  },
];

const Resources = () => {
  const { closeMenu } = useMenu();

  return (
    <div className="flex justify-center items-center h-fit bg-gray-50 p-6 absolute w-full z-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
        {resourcesData.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              {section.title}
            </h2>
            <ul className="space-y-4">
              {section.links.map((item, linkIndex) => (
                <li key={linkIndex} onClick={closeMenu}>
                  <Link
                    to=""
                    className="text-gray-700 text-[15px] sm:text-[16px] hover:text-[#0299f4] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;

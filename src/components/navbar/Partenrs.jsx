import React from "react";
import { Link } from "react-router-dom";

const partnersData = [
  {
    title: "Milesight Partner Ecosystem",
    links: [
      "Find a Technology Partner",
      "Technology Partner Program",
      "Find a Channel Partner",
      "Channel Partner Program",
      "Project Registration",
      "IoT Collaboration Start Guide",
    ],
  },
  {
    title: "Developer Zone",
    links: ["Developer Resource Hub", "Open Source", "Join the Community"],
  },
];

const Partners = () => {
  return (
    <div className="flex justify-center items-center h-fit bg-gray-50 p-6 absolute w-full z-50">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
        {partnersData.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              {section.title}
            </h2>
            <ul className="space-y-4">
              {section.links.map((item, linkIndex) => (
                <li key={linkIndex}>
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

export default Partners;

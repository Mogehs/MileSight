import React from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../menueContext";

const partnersData = [
  {
    title: "Milesight Partner Ecosystem",
    links: [
      {
        title: "Find a Technology Partner",
        path: "/solutions/find-technology-partner",
      },
      {
        title: "Technology Partner Program",
        path: "/solutions/technology-partner-program",
      },
      {
        title: "Find a Channel Partner",
        path: "/solutions/find-channel-partner",
      },
      {
        title: "Channel Partner Program",
        path: "/solutions/channel-partner-program",
      },
      {
        title: "Project Registration",
        path: "/solutions/project-registration",
      },
    ],
  },
  {
    title: "Developer Zone",
    links: [
      {
        title: "Developer Resource Hub",
        path: "/resources/developer-zone",
      },
      {
        title: "Open Source",
        path: "/resources/developer-zone",
      },
      {
        title: "Join the Community",
        path: "/resources/developer-zone",
      },
    ],
  },
];

const Partners = () => {
  const { closeMenu } = useMenu();

  return (
    <div className="flex justify-center items-center h-fit bg-gray-50 p-6 absolute w-full z-50">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-10 md:gap-16">
        {partnersData.map((section, index) => (
          <div key={index}>
            <h2 className="text-md sm:text-md font-semibold mb-2">
              {section.title}
            </h2>
            <ul className="space-y-3 text-sm">
              {section.links.map((item, linkIndex) => (
                <li key={linkIndex} onClick={closeMenu}>
                  <Link
                    to={item.path}
                    className="text-gray-700 text-[12px] sm:text-[14px] hover:text-[#7CCA9A] transition-colors duration-300"
                  >
                    {item.title}
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

import { Link } from "react-router-dom";
import { useMenu } from "../menueContext";

const partnersData = [
  {
    title: "Milesight Partner Ecosystem",
    links: [
      {
        title: "Find a Channel Partner",
        path: "/solutions/find-technology-partner",
      },

      {
        title: "Channel Partner Program",
        path: "/solutions/find-channel-partner",
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
    <div className="flex justify-center items-center h-fit   p-6 absolute sm:w-[50rem] sm:ml-60 mt-2 rounded-2xl sm:h-[14rem] mx-auto z-50 bg-white/30 backdrop-blur-[6px] ">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-10 md:gap-16">
        {partnersData.map((section, index) => (
          <div key={index}>
            <h2 className="text-xs sm:text-lg font-semibold mb-2 text-black">
              {section.title}
            </h2>
            <ul className="sm:space-y-3 text-xs sm:text-lg text-nowrap space-y-2 text-white">
              {section.links.map((item, linkIndex) => (
                <li key={linkIndex} onClick={closeMenu}>
                  <a
                    href={item.path}
                    className=" text-[12px] sm:text-[14px] hover:text-[#7CCA9A] transition-colors duration-300 buttonAnim2"
                  >
                    {item.title}
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

export default Partners;

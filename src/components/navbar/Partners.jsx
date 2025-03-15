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
      {
        title: "Project Registration",
        path: "/partner/project",
      },

      {
        title: "Technology Partner Program",
        path: "/partner/technology-partner-program",
      },
      {
        title: "Find a Technology Partner",
        path: "/partner/find-technology-partner",
      },
      {
        title: "IoT Collaboration Start Guide",
        path: "/partner/iot-collaboration-start-guide",
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
    <div className="flex justify-center items-center h-fit p-6 absolute sm:w-[50rem] sm:ml-45 mt-2 rounded-2xl sm:h-[14rem] mx-auto z-50 bg-white/30 backdrop-blur-[6px]">
      <div className="grid grid-cols-3 gap-10 md:gap-16 w-full">
        <div className="col-span-2">
          <h2 className="text-xs sm:text-lg font-semibold text-black">
            Milesight Partner Ecosystem
          </h2>
          <hr className="mb-3" />
          <div className="grid grid-cols-2 gap-4  space-y-2">
            {partnersData[0].links.map((item, index) => (
              <a
                key={index}
                href={item.path}
                onClick={closeMenu}
                className="text-[12px] sm:text-[14px] text-white hover:text-[#7CCA9A] transition-colors duration-300 buttonAnim2 w-fit"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs sm:text-lg font-semibold text-black">
            Developer Zone
          </h2>
          <hr className="mb-2" />
          <ul className="sm:space-y-3 text-xs sm:text-lg space-y-2 text-white">
            {partnersData[1].links.map((item, index) => (
              <li key={index} onClick={closeMenu}>
                <a
                  href={item.path}
                  className="text-[12px] sm:text-[14px] hover:text-[#7CCA9A] transition-colors duration-300 buttonAnim2"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners;

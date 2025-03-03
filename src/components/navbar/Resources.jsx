import { Link } from "react-router-dom";
import { useMenu } from "../menueContext";

const resourcesData = [
  // {
  //   title: "Support",
  //   links: [
  //     { title: "Submit a Ticket", link: "/resources/submit-ticket" },
  //     { title: "Help Center", link: "/resources/help-center" },
  //     { title: "Online Demo", link: "/resources/online-demo" },
  //   ],
  // },
  {
    title: "Academy",
    links: [
      {
        title: "Product Training",
        link: "/resources/academy/product-training",
      },
      {
        title: "Solution Training",
        link: "/resources/academy/solution-training",
      },
    ],
  },

  {
    title: "Download Center",
    links: [
      {
        title: "Datasheet & User Guide",
        link: "/resources/download-center",
      },
      {
        title: "Software & Firmware",
        link: "/resources/download-center",
      },
      {
        title: "Release Note",
        link: "/resources/download-center",
      },
      {
        title: "Developer Zone",
        link: "/resources/developer-zone",
      },
    ],
  },
];

const Resources = () => {
  const { closeMenu } = useMenu();

  return (
    <div className="flex justify-center items-center h-fit bg-gray-50 p-6 absolute w-full z-50">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-5">
        {resourcesData.map((section, index) => (
          <div key={index}>
            <h2 className="text-sm sm:text-md font-semibold mb-2">
              {section.title}
            </h2>
            <ul className="space-y-2 text-sm">
              {section.links.map((item, linkIndex) => (
                <li key={linkIndex} onClick={closeMenu}>
                  <a
                    href={item.link}
                    className="text-gray-700 text-[12px] sm:text-[14px] hover:text-[#7CCA9A] transition-colors duration-300"
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

export default Resources;

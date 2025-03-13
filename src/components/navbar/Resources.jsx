import { useMenu } from "../menueContext";

const resourcesData = [
  {
    title: "Support",
    links: [
      { title: "Submit a Ticket", link: "/resources/submit-ticket" },
      { title: "Help Center", link: "/resources/submit-ticket" },
      { title: "Online Demo", link: "/resources/online-demo" },
    ],
  },
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
    <div className="flex justify-center h-[25rem] w-full p-6 sm:px-6 absolute sm:w-[50rem] sm:ml-45 mt-2 rounded-2xl sm:h-[12rem] mx-auto z-50  bg-white/30 backdrop-blur-[6px] ">
      <div className="grid grid-cols-2 md:grid-cols-3 sm:gap-10 md:gap-5">
        {resourcesData.map((section, index) => (
          <div key={index}>
            <h2 className="text-sm sm:text-lg font-semibold mb-1 text-black">
              {section.title}
            </h2>
            <ul className="space-y-2 text-sm">
              {section.links.map((item, linkIndex) => (
                <li key={linkIndex} onClick={closeMenu}>
                  <a
                    href={item.link}
                    className="text-black text-[12px] text-nowrap sm:text-[14px] hover:text-[#7CCA9A] transition-colors duration-300 buttonAnim2"
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

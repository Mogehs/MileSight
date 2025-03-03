import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon

const SectionFive = () => {
  // Data for cards
  const cards = [
    {
      title: "FT101 Field Tester",
      description: "A portable field tester designed for assessing and optimizing LoRaWAN® network signals.",
      image: "/DeveloperZone/bea-7.jpg",
    },
    {
      title: "SCT01 Sensor Configuration Tool",
      description: "A portable sensor configuration tool designed to streamline the setup and management of Milesight IoT devices equipped with NFC capabilities.",
      image: "/DeveloperZone/bea-8.jpg",
    },
    {
      title: "AIoT Sensing Platform",
      description: "An integrated management system designed to centralize the management of Milesight visual sensing devices and providing insightful data analytics.",
      image: "/DeveloperZone/bea-9.jpg",
    },
    {
      title: "DeviceHub",
      description: "A centralized device management platform designed to streamline the deployment of a range of Milesight devices across multiple locations.",
      image: "/DeveloperZone/bea-10.jpg",
    },
    {
      title: "Toolbox",
      description: "GAn intelligent management application designed specifically for Milesight sensor users to perform configuration, monitoring, information query, and more operations.",
      image: "/DeveloperZone/bea-11.jpg",
    },
  ];

  return (
    <div className="px-12 py-10 flex flex-col items-center">
      {/* Main Card - Centered Heading & Description */}
      <div className="p-6 w-full text-center">
        <h2 className="text-[17px] sm:text-2xl font-semibold text-[#333333]">Open-source Approach, No Vendor Lock-in</h2>
        <p className="mt-4 justify-start sm:text-[13px] text-[#666666]">
        Milesight offers open-source tools and platforms that empower you to fully control, customize, and brand IoT solutions. With flexibility to develop new features using our open-source codes and adapt the solutions to reflect your branding—from logos to comprehensive feature reworks—you can tailor the technology to your specific needs.
        </p>
      </div>

      {/* Grid Section with 5 Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* First Row - 3 Cards */}
        {cards.slice(0, 3).map((card, index) => (
          <div key={index} className="bg-gray-100 rounded-md p-6 shadow-md flex justify-between items-center">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-[14px] sm:text-[15px] font-medium text-[#333]">{card.title}</h2>
              <p className="mt-2 text-[13px] sm:text-[12px] text-[#666]">{card.description}</p>
              <button className="mt-4 flex items-center py-2 px-3 border border-[#666666] text-[#666666] hover:text-white hover:bg-[#027ac3]">
               <FaArrowRight className="ml-2" />
              </button>
            </div>
            {/* Image Section */}
            <img src={card.image} alt={card.title} className="w-24 h-32 ml-4 object-contain" />
          </div>
        ))}
      </div>

      {/* Second Row - 2 Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {cards.slice(3, 5).map((card, index) => (
          <div key={index} className="bg-gray-100 rounded-md p-6 shadow-md flex justify-between items-center">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-[14px ]sm:text-[15px] font-medium text-[#333]">{card.title}</h2>
              <p className="mt-2 text-[13px] sm:text-[12px] text-[#666]">{card.description}</p>
              <button className="mt-4 flex items-center py-2 px-3 border border-[#666666] text-[#666666] hover:text-white hover:bg-[#027ac3]">
                <FaArrowRight className="ml-2" />
              </button>
            </div>
            {/* Image Section */}
            <img src={card.image} alt={card.title} className="w-20 h-32 ml-4 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFive;

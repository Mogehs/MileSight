import React from "react";

const dataLeft = [
  { title: "Firmware", description: "Keep your Milesight devices up to date to enjoy the latest innovations.", image: "/DownloadCenter/le1.jpg" },
  { title: "Software", description: "Download and explore Milesight software including Milesight DeviceHub, Milesight ToolBox and etc.", image: "/DownloadCenter/le2.jpg" },
  { title: "Document Center", description: "Access to the datasheet, user guide, quick guide and more on IoT products.", image: "/DownloadCenter/le3.jpg" },
  { title: "Release Note", description: "Get updates on product upgrade and learn what's better about Milesight IoT products.", image: "/DownloadCenter/le4.jpg" },
  { title: "Knowledge Base", description: "Get quick and useful support help to address your problems.", image: "/DownloadCenter/le5.jpg" },
  { title: "Marketing Collaterals", description: "Get the latest product brochure, catalogue and mroe on IoT products", image: "/DownloadCenter/le6.jpg" },
];

const dataRight = [
  { title: "Firmware", description: "Keep your Milesight devices up to date to enjoy the latest innovations.", image: "/DownloadCenter/ri1.jpg" },
  { title: "Software", description: "Download and explore Milesight software including Milesight VMS Enterprise, CMS, M-Sight Pro APP and etc.", image: "/DownloadCenter/ri2.jpg" },
  { title: "Document Center", description: "Detailed instruction guide on how to start and make the best of Milesight products.", image: "/DownloadCenter/ri3.jpg" },
  { title: "White Paper", description: "TShare the latest advanced technologies, unique structure design and other features for you.", image: "/DownloadCenter/ri4.jpg" },
  { title: "Marketing Collateral", description: "Access comprehensive resources to elevate your knowledge of Milesight products and their standout features.", image: "/DownloadCenter/ri5.jpg" },
];

const SectionCrad = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="border-l-8 border-[#0299f4] h-10 "></div>
          <h2 className="text-2xl font-bold">IOT</h2>
        </div>
        {dataLeft.map((item, index) => (
          <div key={index} className="flex gap-4 p-4 border border-gray-300 hover:bg-[#eee] rounded-lg shadow-md mb-4">
            <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-md" />
            <div>
              <h3 className="text-[13px] sm:text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-[13px] sm:text-[14px]">{item.description}</p>
              <button className="mt-2 px-3 py-2 bg-[#0299f4] text-white text-[12px] rounded-md hover:bg-blue-700">Learn More</button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Right Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="border-l-8 border-[#0299f4] h-10"></div>
          <h2 className="text-2xl font-bold">Security</h2>
        </div>
        {dataRight.map((item, index) => (
          <div key={index} className="flex gap-4 p-4 border border-gray-300 hover:bg-[#eee] rounded-lg shadow-md mb-4">
            <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-md" />
            <div>
              <h3 className="text-[13px] sm:text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-[13px] sm:text-[14px]">{item.description}</p>
              <button className="mt-2 px-3 py-2 bg-[#0299f4] text-white text-[10px] sm:text-[12px] rounded-md hover:bg-blue-700">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionCrad;

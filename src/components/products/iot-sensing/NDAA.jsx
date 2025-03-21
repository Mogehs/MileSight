import React from "react";
import cameraData from "../../../utils/cameraData";

const data = [
  {
    title: "Mini Series",
    img: "/VideoSurivilence/ndaa-page-pc-mini-series.png",
    items: Object.keys(cameraData).filter((key) => key.includes("Mini")),
  },
  {
    title: "Pro Series",
    img: "/VideoSurivilence/ndaa-page-pc-mini-series.png",
    items: Object.keys(cameraData).filter((key) => key.includes("Pro")),
  },
  {
    title: "Panoramic Series",
    img: "/VideoSurivilence/ndaa-page-pc-mini-series.png",
    items: Object.keys(cameraData).filter((key) => key.includes("Panoramic")),
  },
  {
    title: "PTZ Series",
    img: "/VideoSurivilence/ndaa-page-pc-mini-series.png",
    items: Object.keys(cameraData).filter((key) => key.includes("PTZ")),
  },
  {
    title: "Color Series",
    img: "/VideoSurivilence/ndaa-page-pc-mini-series.png",
    items: Object.keys(cameraData).filter((key) => key.includes("Color")),
  },
];

const NDAA = () => {
  return (
    <div>
      <div
        className="md:h-[60vh] bg-cover bg-center flex md:flex-row flex-col items-center justify-between text-white relative"
        style={{
          backgroundImage: "url('/VideoSurivilence/ndaa-page-pc-banner.jpg')",
        }}
      >
        <div className="flex flex-col px-8">
          <h1 className="md:text-[2.5rem] text-[20px] my-2">
            NDAA Compliant Products
          </h1>
          <p className="md:text-[1rem] text-[10px] md:w-[65%] lg:w-[42%]">
            Milesight NDAA Compliant Products, which do not use or deploy
            critical components including SoCs produced by NDAA banned component
            vendors, are recommended for enterprises and critical applications
            where compliance is essential.
          </p>
          <div className="my-2 md:my-5 lg:mt-10 flex gap-2 sm:gap-5 flex-col sm:flex-row">
            <button
              className="bg-[#7CCA9A] text-[0.6rem] md:text-sm p-[5px] rounded-md cursor-pointer"
              onClick={() =>
                window.open(
                  "/instructions-pdf/milesight-network-camera-quick-start-guide.pdf",
                  "_blank"
                )
              }
            >
              Download Brochure
            </button>
            <button
              className="bg-[#7CCA9A] text-[0.6rem] sm:text-sm p-[5px] rounded-md cursor-pointer"
              onClick={() =>
                window.open(
                  "/instructions-pdf/milesight-network-camera-quick-start-guide.pdf",
                  "_blank"
                )
              }
            >
              Download NDAA Compliant Product List
            </button>
          </div>
        </div>
      </div>

      <div className="my-20">
        <p className="text-center font-semibold text-[1.8rem]">
          NDAA Compliant Product Series
        </p>
        <div className="w-full h-fit mt-4">
          <div className="w-full mx-auto sm:w-11/12 h-fit sm:mt-6 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((item, index) => (
              <div
                className="w-full h-fit flex px-2 flex-col lg:flex-row justify-center items-center pr-2 border border-gray-300 rounded-md hover:shadow hover:shadow-gray-400 gap-20"
                key={index}
              >
                <img src={item.img} alt={item.title} className="h-40" />
                <div className="mt-2 gap-2">
                  <h1 className="text-xs sm:text-xl font-semibold mt-2">
                    {item.title}
                  </h1>
                  <ul className="mt-2 text-sm text-gray-500 list-disc marker:text-[#00667C]">
                    {item.items.map((li, i) => (
                      <li key={i} className="text-xs hover:text-[#7CCA9A]">
                        <a href={`/products/detail?title=${li}`}>{li}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-10 text-white">
            <button
              className="bg-[#00667C] text-[0.6rem] sm:text-sm p-[5px] rounded-md cursor-pointer"
              onClick={() =>
                window.open(
                  "/instructions-pdf/milesight-network-camera-quick-start-guide.pdf",
                  "_blank"
                )
              }
            >
              Download NDAA Compliant Product List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NDAA;

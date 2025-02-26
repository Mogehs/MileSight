import { useState } from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import enbg from "/Enriched/enbg.jpg";
import div1 from "/Enriched/div1.jpg";
import div2 from "/Enriched/div2.jpg";
import div3 from "/Enriched/div3.jpg";
import div4 from "/Enriched/div4.jpg";
import div11 from "/Enriched/div11.png";
import div22 from "/Enriched/div22.png";
import div33 from "/Enriched/div33.png";
import div44 from "/Enriched/div44.png";

export default function Enriched() {
  // Mapping of main images and their overlays
  const imageMapping = {
    div1: { main: div1, overlay: div11 },
    div2: { main: div2, overlay: div22 },
    div3: { main: div3, overlay: div33 },
    div4: { main: div4, overlay: div44 },
  };

  // Default selected image
  const [selectedImage, setSelectedImage] = useState(imageMapping.div1);

  const data = [
    {
      key: "div1",
      img: div1,
      title: "Urban Roadway",
      icon: <IoMdRadioButtonOn />,
    },
    {
      key: "div2",
      img: div2,
      title: "Intersection",
      icon: <IoMdRadioButtonOn />,
    },
    { key: "div3", img: div3, title: "On-Street", icon: <IoMdRadioButtonOn /> },
    { key: "div4", img: div4, title: "Highway", icon: <IoMdRadioButtonOn /> },
  ];

  return (
    <div
      className="w-full bg-cover"
      style={{ backgroundImage: `url(${enbg})` }}
    >
      <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-2 p-2">
        <h1 className="text-xl text-white md:text-3xl mb-3">
          Enriched Intelligent Traffic Functions & Scenarios
        </h1>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Image Section */}
          <div className="w-full md:w-[75%] relative ">
            <div className="relative w-full h-full rounded-lg">
              {/* Main Image */}
              <img
                src={selectedImage.main}
                alt="Main"
                className="w-full rounded-lg h-full object-cover"
              />
              {/* Overlay Image */}
              <img
                src={selectedImage.overlay}
                alt="Overlay"
                className="w-full  rounded-lg h-full absolute top-0 z-20 object-cover"
              />
            </div>
          </div>

          {/* Right-Side Selection Buttons */}
          <div className=" grid grid-cols-2 gap-2 w-full md:flex md:flex-col md:w-[20%]">
            {data.map((item) => (
              <div
                key={item.key}
                className="bg-white border border-gray-400 cursor-pointer transition-all hover:shadow-lg rounded-lg "
                onClick={() => setSelectedImage(imageMapping[item.key])}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-3/3 rounded-lg object-cover"
                />
                {/* Content (Text + Icon) */}
                <div className="flex  justify-between items-center  p-2">
                  <p className="font-semibold">{item.title}</p>
                  <span className="text-blue-500 text-lg">{item.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useRef } from "react";
import { X, Youtube } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";

export default function CitySection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const sliderRef = useRef(null);

  const data = [
    {
      id: "resources-counting",
      img: "/resources/solution-training/city-img.jpg",
      title: "Milesight Smart Restroom Solution using LoRaWAN®",
      url: "https://www.youtube.com/embed/sVqGIrfp7Mo",
    },
  ];

  return (
    <div className="relative w-full mx-auto mt-4">
      {/* Slider Container */}
      <div className="relative w-full mx-auto">
        <div
          id="resources-all"
          ref={sliderRef}
          className="flex flex-col gap-4 "
        >
          {data.map((item, index) => (
            <div
              id={item.id}
              key={index}
              className="relative cursor-pointer group p-4"
            >
              {/* Mian Title */}
              <div className="flex md:flex-row flex-col md:gap-8 gap-1 justify-between items-center border-b border-[#dedede] pb-4">
                <div className="relative">
                  <input className="border border-[#aeaeae] rounded p-1" />
                  <CiSearch size={20} className="absolute top-2 left-1" />
                </div>
                <div className="flex items-center gap-4 text-nowrap text-sm">
                  <FaYoutube size={30} className="text-[#ff0000]" />
                  <p className="text-[#64b6f6]">More Videos</p>
                  <GrFormNextLink size={25} className="text-[#64b6f6]" />
                </div>
              </div>

              {/* Thumbnail */}
              <img
                src={item.img}
                alt={item.title}
                className="w-120 h-36 sm:w-72 sm:h-44 rounded-lg object-cover hover:opacity-80 transition mt-4"
                onClick={() => setActiveVideo(item.url)}
              />

              {/* YouTube Icon - Centered */}
              <div
                onClick={() => setActiveVideo(item.url)}
                className="absolute top-45 left-40 md:left-40 md:top-40 -translate-x-1/2 -translate-y-1/2 bg-[#38313153] p-3 rounded-full shadow-lg cursor-pointer transition hover:bg-[#ff0000]"
              >
                <Youtube size={22} className="text-white" />
              </div>

              {/* Title */}
              <p className=" mt-2 text-sm text-[#333] md:w-[50%] lg:w-[15%]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative w-[90%] sm:w-[70%] lg:w-[50%]">
            <button
              className="absolute top-[-50px] right-[-15px] md:right-[-50px] bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-800"
              onClick={() => setActiveVideo(null)}
            >
              <X size={24} />
            </button>

            <iframe
              width="100%"
              height="315"
              src={activeVideo}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

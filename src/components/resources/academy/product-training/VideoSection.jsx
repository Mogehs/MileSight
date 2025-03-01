import { useState, useRef } from "react";
import { X, Youtube } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sliderRef = useRef(null);

  const data = [
    {
      id: "video-lineup",
      mainTitle: "Milesight Product Lineup",
      images: [
        {
          img: "/resources/product-training/video-img4 (2).jpg",
          title: "The Introduction of Milesight Product Lineup",
          url: "https://www.youtube.com/embed/5mL3HOeJnHo",
        },
        {
          img: "/resources/product-training/video-img4.jpg",
          title: "Milesight Camera Lineup & Hardware Composition",
          url: "https://www.youtube.com/embed/SQEHbrULHKo",
        },
      ],
    },
    {
      id: "video-network",
      mainTitle: "Network Camera",
      images: [
        {
          img: "/resources/product-training/video-img5.jpg",
          title: "Mini & Pro Network Camera",
          url: "https://www.youtube.com/embed/BGXr9q0NmnY",
        },
        {
          img: "/resources/product-training/video-img6.jpg",
          title: "Software Instruction of Network Cameras",
          url: "https://www.youtube.com/embed/_bmd3pPhmFg",
        },
        {
          img: "/resources/product-training/video-img7.jpg",
          title: "Milesight AI Features",
          url: "https://www.youtube.com/embed/OFQl8Hf0MEE",
        },
      ],
    },
    {
      id: "video-vms",
      mainTitle: "VMS Enterprise",
      images: [
        {
          img: "/resources/product-training/video-img8.jpg",
          title: "VMS Quick Set Up",
          url: "https://www.youtube.com/embed/3uphX1ZdjdM",
        },
        {
          img: "/resources/product-training/video-img9.jpg",
          title: "VMS Live View and Playback",
          url: "https://www.youtube.com/embed/MbDIcMveWug",
        },
        {
          img: "/resources/product-training/video-img10.jpg",
          title: "Unleashing the Power of VMS AI",
          url: "https://www.youtube.com/embed/ynckjHCRkxE",
        },
        {
          img: "/resources/product-training/video-img11.jpg",
          title: "Milesight VMS AI & AI Box",
          url: "https://www.youtube.com/embed/pVqobPL3XxU",
        },
        {
          img: "/resources/product-training/video-img12.jpg",
          title: "Video Surveillance Appliance",
          url: "https://www.youtube.com/embed/7OqTBeU8wKY",
        },
      ],
    },
  ];

  return (
    <div id="video-all" className="relative w-full mx-auto mt-4">
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
                <div>
                  <h2 className="md:text-[1.5rem] text-sm font-bold text-[#333] ">
                    {item.mainTitle}
                  </h2>
                </div>
                <div className="flex items-center gap-4 text-nowrap text-sm">
                  <FaYoutube size={30} className="text-[#ff0000]" />
                  <p className="text-[#64b6f6]">More Videos</p>
                  <GrFormNextLink size={25} className="text-[#64b6f6]" />
                </div>
              </div>

              {/* Thumbnail */}
              <div className="flex md:flex-row flex-col items-center justify-start flex-wrap gap-4">
                {item.images.map((img, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img
                      src={img.img}
                      alt={img.title}
                      className="w-120 md:w-50 max-h-28 rounded-lg object-cover hover:opacity-80 transition mt-4"
                      onClick={() => setActiveVideo(img.url)}
                    />

                    {/* YouTube Icon - Centered */}
                    <div
                      onClick={() => setActiveVideo(img.url)}
                      className={`absolute left-35 top-20 md:left-25 -translate-x-1/2 -translate-y-1/2 bg-[#38313153] p-3 rounded-full shadow-lg cursor-pointer transition hover:bg-[#ff0000]`}
                    >
                      <Youtube size={15} className="text-white" />
                    </div>

                    {/* Title */}
                    <p className=" mt-2 text-sm text-[#333] md:w-[60%] lg:w-[80%]">
                      {img.title}
                    </p>
                  </div>
                ))}
              </div>
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

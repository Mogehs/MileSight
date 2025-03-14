import { useRef } from "react";
import { Card } from "../../../components/products/video-servillance/Cards";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CollaborationNews() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll 80% of the visible width

      sliderRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const slider = [
    {
      title: "Milesight Partners with Network Optix (Nx) for Deep Integration",
      description:
        "Milesight has completed the seamless integration of advanced functions such as Milesight VCA Events, Milesight LPR Integration, and Object Tracking with Nx Witness VMS, greatly enhancing the scalability of Milesight products.",
      img: "/partners/partner-program/card1.png",
    },
    {
      title:
        "Milesight and ThingsBoard, Inc. Announced a Technical Partnership to Provide More Integrated loT Solutions",
      description:
        "Both companies aim to provide comprehensive and seamless solutions for diverse loT applications by combining their expertise and technologies.",
      img: "/partners/partner-program/card2.jpg",
    },
    {
      title:
        "The partnership aims to leverage 3dEYE's cloud AI platform and Milesight Corporation's expertise.",
      description:
        "The partnership leverages AI technology and camera expertise to deliver innovative solutions to the global market.",
      img: "/partners/partner-program/card3.jpg",
    },
    {
      title:
        "Milesight, Actility, and Akenza Release New loT Solutions for Smart Buildings",
      description:
        "The three IoT starter kits provide Milesight devices, LoRaWAN connectivity from Actility, and Akenza's IoT platform, all pre-integrated.",
      img: "/partners/partner-program/card4.jpg",
    },
  ];

  return (
    <div className="relative mt-10">
      <h1 className="text-center font-semibold text-2xl sm:text-4xl">
        What's Hot
      </h1>

      {/* Slider Container */}
      <div
        className="w-full sm:w-[90%] mx-auto mt-10 md:overflow-hidden  overflow-x-auto scrollbar-hide"
        ref={sliderRef}
      >
        <div className="flex gap-4 w-max">
          {slider.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-0 right-4 hidden  md:flex gap-4 px-4 rounded">
        <button
          onClick={() => scroll("left")}
          className="bg-gray-300 p-3 rounded-full shadow-lg hover:bg-blue-400 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-gray-300 p-3 rounded-full shadow-lg hover:bg-blue-400 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

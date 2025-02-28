import { useRef } from "react";
import traffic from "/VideoSurivilence/traffic.jpg";
import off from "/VideoSurivilence/off.jpg";
import cameraseries from "/VideoSurivilence/cameraseries.jpg";
import one from "/VideoSurivilence/one.jpg";
import threed from "/VideoSurivilence/threed.png";
import { Card } from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MultiPotential() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth / 2; // Scroll half the width

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
      title: "AI Multi-directional Network Camera",
      decription: "Navigate Your Options: Compare Milesight,IoT",
      img: "/company/brand/make-sensing-matter-iot-sensors-comparison.png",
    },
    {
      title: "Solar-powered Camera Series",
      decription: "All-in-one Security Kit Green and efficient!",
      img: "/company/brand/make-sensing-matter-meta-data-brochure.png",
    },
    {
      title: "AI Dual-sensor 180° Panoramic Camera",
      decription: "Wider Coverage, Sharper Vision, Zero Distortion",
      img: "/company/brand/make-sensing-matter-smart-building-brochure.png",
    },
    {
      title: "TrafficX Cameras Series",
      decription: "Wider Coverage, Sharper Vision, Zero Distortion",
      img: traffic,
    },
    {
      title: "TrafficX Cameras Series",
      decription: "Wider Coverage, Sharper Vision, Zero Distortion",
      img: cameraseries,
    },
    {
      title: "TrafficX Cameras Series",
      decription: "Wider Coverage, Sharper Vision, Zero Distortion",
      img: one,
    },
  ];

  return (
    <div className="relative my-20">
      <h1 className="text-center font-semibold text-lg sm:text-3xl sm:  w-[40%] mx-auto">
        See what's possible with Milesight's multi-potential sensing products
      </h1>

      {/* Slider Container */}
      <div
        className="w-full sm:w-[90%] mx-auto mt-10 overflow-x-hidden h-[28rem] scrollbar-hide"
        ref={sliderRef}
      >
        <div className="flex gap-4 w-max">
          {slider.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Navigation Buttons (Centered at Bottom) */}
      <div className="absolute bottom-20 left-1/2  -translate-x-1/2 flex gap-4 px-4  rounded">
        <button
          onClick={() => scroll("left")}
          className="bg-gray-300 p-2 rounded-full shadow-lg hover:bg-blue-400"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-gray-300 p-2 rounded-full shadow-lg hover:bg-blue-400"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

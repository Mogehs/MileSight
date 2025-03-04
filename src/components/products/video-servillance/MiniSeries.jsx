import camera from "/VideoSurivilence/camera.png";
import cam from "/VideoSurivilence/cam.png";
import vandal from "/VideoSurivilence/vandal.png";
import statics from "/VideoSurivilence/static.png";
import { Link } from "react-router-dom";
import { useMenu } from "../../menueContext";

export default function MiniSeries({ filter }) {
  const { closeMenu } = useMenu();

  const camerAray = [
    {
      name: "AI Motorized Dome Camera",
      img: camera,
      category: "Mini",
      path: "/products/ai-motorized-mini-dome",
    },
    { name: "AI Motorized Bullet Camera", img: cam, category: "Mini" },
    { name: "AI Vandal-proof Mini Dome Camera", img: vandal, category: "Mini" },
    {
      name: "AI Vandal-proof Mini Bullet Camera",
      img: statics,
      category: "Mini",
    },
    {
      name: "AI Weather proof Mini Dome Camera",
      img: "/VideoSurivilence/ai-weather-prof-mini-dome-camera.png",
      category: "Mini",
    },
    {
      name: "AI Weather proof Mini Bullet Camera",
      img: "/VideoSurivilence/ai-weather-prof-mini-bullet-camera.png",
      category: "Mini",
    },
    {
      name: "AI IR Mini Dome Camera",
      img: "/VideoSurivilence/ai-ir-mini-dome-camera.png",
      category: "Mini",
    },
    {
      name: "AI Color + Vandal-proof Mini Bullet Camera",
      img: "/VideoSurivilence/ai-color-vandal-proof-mini-bullet-camera.png",
      category: "Mini",
    },
  ];

  const filteredCameras = filter
    ? camerAray.filter((item) => item.category === filter)
    : camerAray;

  return (
    <div className="w-full px-4 sm:mt-5">
      <div className="sm:w-[90%] mx-auto w-full">
        {/* <span className="text-gray-500 block text-center mb-3 mt-3 text-sm sm:text-base">
          Entry-level · Compact · Stylish
        </span> */}

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-3">
          {filteredCameras.length > 0 ? (
            filteredCameras.map((item, index) => (
              <>
                <a href="/products/ai-motorized-mini-dome" onClick={closeMenu}>
                  <div
                    className="p-3 transition-all ease-in-out delay-100 hover:shadow-md hover:shadow-blue-200 cursor-pointer h-auto flex flex-col items-center justify-center border sm:border-0 rounded-lg shadow-sm bg-white"
                    key={index}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="transition-transform ease-in-out delay-400 h-[90px] w-[140px] sm:h-[100px] sm:w-[180px] hover:scale-110"
                    />
                    <span className="text-xs sm:text-sm text-center mt-2">
                      {item.name}
                    </span>
                  </div>
                </a>
              </>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No products found for {filter}
            </p>
          )}
        </div>

        <a
          href="/products/NDAA-Compilant"
          className="underline text-center mt-4 cursor-pointer text-sm sm:text-base hover:text-[#7CCA9A]"
        >
          <p> View All Products</p>
        </a>
      </div>
    </div>
  );
}

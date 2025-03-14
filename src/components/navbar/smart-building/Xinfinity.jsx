import { useMenu } from "../../menueContext";

import one from "/agriculture-navbar/x1-sensing-camera.png";
import two from "/agriculture-navbar/x5-sensing-camera.png";
import three from "/agriculture-navbar/hl31.png";

export default function Xinfinity({ filter }) {
  const { closeMenu } = useMenu();

  const camerAray = [
    {
      name: "X1 Sensing Camera",
      img: one,
      category: "Mini",
      path: "/products/ai-motorized-mini-dome",
    },
    { name: "X5 Sensing Camera", img: two, category: "Mini" },
    { name: "HL31 Wi-Fi HaLow Gateway", img: three, category: "Mini" },
  ];

  const filteredCameras = filter
    ? camerAray.filter((item) => item.category === filter)
    : camerAray;

  return (
    <div className="w-full sm:mt-5  text-black font-bold">
      <div className="sm:w-[90%]">
        {/* <span className="text-gray-500 block text-center mb-3 mt-3 text-sm sm:text-base">
          Entry-level · Compact · Stylish
        </span> */}

        <div className="grid grid-cols-3 gap-y-10">
          {filteredCameras.length > 0 ? (
            filteredCameras.map((item, index) => (
              <>
                <a href="/products/ai-motorized-mini-dome" onClick={closeMenu}>
                  <div
                    className="p-1 transition-all ease-in-out delay-100 hover:shadow-md hover:shadow-blue-200 cursor-pointer h-auto flex flex-col items-center justify-center border sm:border-0 rounded-lg shadow-sm w-30"
                    key={index}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="transition-transform ease-in-out delay-400 h-[70px] w-[120px] sm:h-[70px] sm:w-[110px] hover:scale-110 object-cover"
                    />
                    <span className="text-xs sm:text-xs text-center mt-2">
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
      </div>
    </div>
  );
}

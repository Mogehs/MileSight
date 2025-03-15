import { useMenu } from "../../menueContext";

import one from "/navbar-iot/lorawan-insertion-temperature-sensor-ts101.png";
import two from "/navbar-iot/lorawan-platinum-temperature-sensor-em500-pt100.png";
import three from "/navbar-iot/lorawan-temperature-and-humidity-sensor-em300-th.png";
import four from "/navbar-iot/lorawan-temperature-and-humidity-sensor-em320-th.png";
import five from "/navbar-iot/ts301-ts302.png";

export default function TrashBin({ filter }) {
  const { closeMenu } = useMenu();

  const camerAray = [
    {
      name: "VS121",
      img: one,
      category: "Mini",
      path: "/products/ai-motorized-mini-dome",
    },
    { name: "VS125", img: two, category: "Mini" },
    { name: "VS224", img: three, category: "Mini" },
    {
      name: "VS133",
      img: four,
      category: "Mini",
    },
    {
      name: "VS135",
      img: five,
      category: "Mini",
    },
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
                <a href="" onClick={closeMenu}>
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

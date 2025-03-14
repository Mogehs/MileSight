import camera from "/gateway-navbar/sg50.png";
import cam from "/gateway-navbar/lorawan-indoor-lorawan-gateway-ug65.png";
import vandal from "/gateway-navbar/lorawan-industrial-lorawan-gateway-ug56.png";
import statics from "/gateway-navbar/lorawan-mini-lorawan-gateway-ug63.png";
import { useMenu } from "../../menueContext";

export default function Gateway({ filter }) {
  const { closeMenu } = useMenu();

  const camerAray = [
    {
      name: "SG50 Ultra Low Paower Lorawan Gateway",
      img: cam,
      category: "Mini",
      path: "/products/ai-motorized-mini-dome",
    },
    { name: "UG63 Mini Lorawan Gateway", img: camera, category: "Mini" },
    { name: "AI Vandal-proof Mini Dome Camera", img: vandal, category: "Mini" },
    {
      name: "UG56 Industrial Lorawan Gateway",
      img: statics,
      category: "Mini",
    },
    {
      name: "UG65 Indoor Lorawan Gateway",
      img: "/gateway-navbar/lorawan-outdoor-lorawan-gateway-ug67.png",
      category: "Mini",
    },
  ];

  const filteredCameras = filter
    ? camerAray.filter((item) => item.category === filter)
    : camerAray;

  return (
    <div className="w-full sm:mt-5 text-black font-bold">
      <div className="sm:w-[90%]">
        {/* <span className="text-gray-500 block text-center mb-3 mt-3 text-sm sm:text-base">
          Entry-level · Compact · Stylish
        </span> */}

        <div className="grid grid-cols-3 gap-y-2">
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
                      className="transition-transform ease-in-out delay-400 h-[70px] w-[120px] sm:h-[70px] sm:w-[110px] hover:scale-110"
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

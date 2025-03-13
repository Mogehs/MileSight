import img1 from "/iot-controller/lorawan-milesight-iot-cloud.png";
import img2 from "/iot-controller/milesight-aiot-sensing-platform.png";
import img3 from "/iot-controller/lorawan-device-hub.png";
import img4 from "/iot-controller/lorawan-milesight-vpn.png";
import { useMenu } from "../../menueContext";

export default function IoT({ filter }) {
  const { closeMenu } = useMenu();

  const camerAray = [
    {
      name: "Milesight IoT Cloud",
      img: img1,

      path: "/products/ai-motorized-mini-dome",
    },
    {
      name: "Milesight AIoT Sensing Platform",
      img: img2,
    },
    { name: "DeviceHub", img: img3 },
    {
      name: "MilesightVPN",
      img: img4,
    },
  ];

  const filteredCameras = filter
    ? camerAray.filter((item) => item.category === filter)
    : camerAray;

  return (
    <div className="w-full sm:mt-5 text-black font-bold">
      <div className="sm:w-[90%]">
        <div className="grid grid-cols-3 gap-y-2">
          {filteredCameras.length > 0 ? (
            filteredCameras.map((item, index) => (
              <>
                <a href="/products/5g-cellular" onClick={closeMenu}>
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

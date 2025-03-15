import { useMenu } from "../../menueContext";
import img1 from "/traffic-navbar/trafficx-camera.png";
import img2 from "/traffic-navbar/trafficx-enforcement-camera.png";
import img3 from "/traffic-navbar/ai-road-traffic-pro-bullet-plus-camera.png";
import img4 from "/traffic-navbar/ai-road-traffic-supplement-light-pro-bullet-plus-camera (1).png";
export default function ParkingManagement({ filter }) {
  const { closeMenu } = useMenu();

  const camerAray = [
    {
      name: "4G Solar-powered ANPR Camera",
      img: img1,
      category: "Mini",
    },
    {
      name: "4G Solar-powered Traffic Sensing Camera",
      img: img2,
      category: "Mini",
      path: "/products/vs125",
    },
    {
      name: "AI Road Traffic Supplement Light Pro Bullet Plus Camera",
      img: img3,
      category: "Mini",
      path: "/products/ai-motorized-mini-dome",
    },
    {
      name: "AI Road Traffic PTZ Bullet Plus Camera",
      img: img4,
      category: "Mini",
      path: "/products/vs125",
    },
  ];

  const filteredCameras = filter
    ? camerAray.filter((item) => item.category === filter)
    : camerAray;

  return (
    <div className="w-full sm:mt-5  text-black font-bold">
      <div className="sm:w-[100%]">
        <div className="grid grid-cols-3 gap-y-5">
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
                      className="transition-transform ease-in-out delay-400 h-[70px] w-[120px] sm:h-[70px] sm:w-[110px] hover:scale-110 object-contain"
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

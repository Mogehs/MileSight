import { useMenu } from "../../menueContext";
import img1 from "/client-pic/PTZ Series/AI 5X_20X_23X PTZ Bullet Plus Network Camera _/ptz-bullet-plus-camera-3-06.png";
import img2 from "/client-pic/PTZ Series/AI 12X PTZ Bullet Network Camera/ai-12x-ptz-bullet-network-camera-pedestal-mount-right-10.png";
import img3 from "/client-pic/PTZ Series/AI 12X_20X_23X PTZ Dome Security Camera/ptz-dome-3-07.png";
import img4 from "/client-pic/PTZ Series/AI 36X_42X Speed Dome Network Camera with Wiper _/AI 36X_42X Speed Dome Network Camera with Wiper _-16.png";
import img5 from "/client-pic/PTZ Series/PTZ Speed Dome Camera_ AI 25X_30X Speed Dome Network Camera/wiper-speed-dome-CAmera-13.png";

export default function PtzSeries({ filter }) {
  const { closeMenu } = useMenu();

  const camerAray = [
    {
      name: "AI 5X_20X_23X PTZ Bullet Plus Network Camera _",
      img: img1,
      path: "/products/ai-motorized-mini-dome",
    },
    {
      name: "AI 12X PTZ Bullet Network Camera",
      img: img2,
      category: "Mini",
    },
    {
      name: "AI 12X_20X_23X PTZ Dome Security Camera",
      img: img3,
      category: "Mini",
    },
    {
      name: "AI 36X_42X Speed Dome Network Camera with Wiper _",
      img: img4,
      category: "Mini",
    },
    {
      name: "PTZ Speed Dome Camera_ AI 25X_30X Speed Dome Network Camera",
      img: img5,
      category: "Mini",
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
                <a href="/products/ai-motorized-mini-dome" onClick={closeMenu}>
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

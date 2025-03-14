import img1 from "/client-pic/PTZ Series/AI 5X_20X_23X PTZ Bullet Plus Network Camera _/ptz-bullet-plus-camera-3-06.png";
import img2 from "/client-pic/PTZ Series/AI 12X PTZ Bullet Network Camera/ai-12x-ptz-bullet-network-camera-pedestal-mount-right-10.png";
import img3 from "/client-pic/PTZ Series/AI 12X_20X_23X PTZ Dome Security Camera/ptz-dome-3-07.png";
import img4 from "/client-pic/PTZ Series/AI 36X_42X Speed Dome Network Camera with Wiper _/AI 36X_42X Speed Dome Network Camera with Wiper _-16.png";
import img5 from "/client-pic/PTZ Series/PTZ Speed Dome Camera_ AI 25X_30X Speed Dome Network Camera/wiper-speed-dome-CAmera-13.png";

export default function PtzSeries() {
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
  return (
    <div className="w-full px-4 sm:mt-5">
      <div className="sm:w-[90%] mx-auto w-full">
        <span className="text-gray-500 block text-center mb-3 mt-3 text-sm sm:text-base">
          Pan · Tilt · Zoom
        </span>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-3">
          {camerAray.map((item, index) => (
            <div
              className="p-3 transition-all ease-in-out delay-100 hover:shadow-md hover:shadow-blue-200 cursor-pointer flex flex-col items-center justify-center border sm:border-0 rounded-lg shadow-sm bg-white"
              key={index}
            >
              <img
                src={item.img}
                alt={item.name}
                className="transition-transform ease-in-out delay-400 h-[90px] w-[140px] sm:h-[100px] sm:w-[100px] hover:scale-110 object-cover"
              />
              <span className="text-xs sm:text-sm text-center mt-2">
                {item.name}
              </span>
            </div>
          ))}
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

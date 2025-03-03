import pc from "/VideoSurivilence/pc.png";
import miles from "/VideoSurivilence/miles.png";
import camera from "/VideoSurivilence/camera.png";

export default function Panoramic() {
  const camerAray = [
    { name: "AI 180° Panoramic Mini Bullet Camera", img: pc },
    { name: "AI Dual-sensor 180° Panoramic Camera", img: camera },
    { name: "AI 180° Panoramic Mini Dome Camera", img: pc },
    { name: "AI Multi-directional Camera", img: miles },
    { name: "AI 360° Panoramic Fisheye Camera", img: miles },
  ];

  return (
    <div className="w-full px-4 sm:mt-5">
      <div className="sm:w-[90%] mx-auto w-full">
        <span className="text-gray-500 block text-center mb-3 mt-3 text-sm sm:text-base">
          Comprehensive · Seamless
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
                className="transition-transform ease-in-out delay-400 h-[90px] w-[140px] sm:h-[100px] sm:w-[180px] hover:scale-110"
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

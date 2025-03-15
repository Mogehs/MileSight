import img1 from "/client-pic/Panoramic Series/AI 360° Panoramic Fisheye/AI 360° Panoramic Fisheye-21.png";
import img2 from "/client-pic/Panoramic Series/AI Multi-directional Camera/AI Multi-directional Camera-31.png";
import img3 from "/client-pic/Panoramic Series/ai-180-panoramic-mini-bullet-camera/ai-180-panoramic-mini-bullet-camera-25.png";
import img4 from "/client-pic/Panoramic Series/ai-180-panoramic-mini-CAmera/ai-180-panoramic-mini-CAmera-23.png";
import img5 from "/client-pic/Panoramic Series/dual-sensor-panoramic-camera-/dual-sensor-panoramic-camera--28.png";

export default function Panoramic() {
  const camerAray = [
    { name: "AI 180° Panoramic Mini Bullet Camera", img: img1 },
    { name: "AI Dual-sensor 180° Panoramic Camera", img: img2 },
    { name: "AI 180° Panoramic Mini Dome Camera", img: img3 },
    { name: "AI Multi-directional Camera", img: img4 },
    { name: "AI 360° Panoramic Fisheye Camera", img: img5 },
  ];

  return (
    <div className="w-full px-4 sm:mt-5">
      <div className="sm:w-[90%] mx-auto w-full">
        <span className="text-gray-500 block text-center mb-3 mt-3 text-sm sm:text-base">
          Comprehensive · Seamless
        </span>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-3">
          {camerAray.map((item, index) => (
            <>
              <a href={`/products/detail?title=${item.name}`}>
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
              </a>
            </>
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

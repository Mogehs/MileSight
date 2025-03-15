import img1 from "/client-pic/Pro Series/AI 4X_12X Pro Bullet Plus Network Camera/AI 4X_12X Pro Bullet Plus Network Camera (3).png";
import img2 from "/client-pic/Pro Series/AI Motorized Pro Bullet Network Camera/AI Motorized Pro Bullet Network Camera _-69.png";
import img3 from "/client-pic/Pro Series/AI Motorized Pro Bullet Plus/ai-pro-bullet-plus-side Camera-58-58.png";
import img4 from "/client-pic/Pro Series/AI Motorized Pro Dome Network Camera/ai-pro-dome-camera--60.png";
import img5 from "/client-pic/Pro Series/AI Pro Box Plus Network Camera/AI Pro Box Plus Network Camera-65.png";

export default function ProSeries() {
  const cameraArray = [
    {
      name: "AI 4X_12X Pro Bullet Plus Network Camera",
      img: img1,
    },
    { name: "AI Motorized Pro Bullet Network Camera", img: img2 },
    { name: "AI Motorized Pro Bullet Plus", img: img3 },
    { name: "AI Motorized Pro Dome Camera", img: img4 },
    { name: "AI Pro Box Plus Camera", img: img5 },
  ];

  return (
    <div className="w-full sm:mt-5">
      <div className="sm:w-[90%]">
        {/* <span className="text-gray-500 block text-center mb-3 mt-3 text-sm sm:text-base">
          Professional · Trustful · Reliable
        </span> */}

        <div className="grid grid-cols-3 gap-y-2 text-black font-bold">
          {cameraArray.map((item, index) => (
            <>
              <a href={`/products/detail?title=${item.name}`}>
                <div
                  className="p-1 transition-all ease-in-out delay-100 hover:shadow-md hover:shadow-blue-200 cursor-pointer h-auto flex flex-col items-center justify-center border sm:border-0 rounded-lg shadow-sm w-30"
                  key={index}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="transition-transform ease-in-out delay-400 h-[70px] w-[120px] sm:h-[70px] sm:w-[110px] hover:scale-110 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-center mt-2">
                    {item.name}
                  </span>
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

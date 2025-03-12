import camera from "/VideoSurivilence/camera.png";
import pro from "/VideoSurivilence/pro.png";
import cam from "/VideoSurivilence/cam.png";

export default function ProSeries() {
  const camerAray = [
    {
      name: "AI Motorized Dome CameraAI 4X/12X Pro Bullet Plus Camera",
      img: cam,
    },
    { name: "AI Motorized Pro Bullet Plus Camera", img: cam },
    { name: "AI Motorized Pro Bullet Camera", img: cam },
    { name: "AI Motorized Pro Dome Camera", img: camera },
    { name: "AI Pro Box Plus Camera", img: pro },
  ];

  return (
    <div className="w-full sm:mt-5">
      <div className="sm:w-[90%]">
        {/* <span className="text-gray-500 block text-center mb-3 mt-3 text-sm sm:text-base">
          Professional · Trustful · Reliable
        </span> */}

        <div className="grid grid-cols-3 gap-y-2 text-black font-bold">
          {camerAray.map((item, index) => (
            <div
              className="p-1 transition-all ease-in-out delay-100 hover:shadow-md hover:shadow-blue-200 cursor-pointer h-auto flex flex-col items-center justify-center border sm:border-0 rounded-lg shadow-sm w-30"
              key={index}
            >
              <img
                src={item.img}
                alt={item.name}
                className="transition-transform ease-in-out delay-400 h-[70px] w-[120px] sm:h-[70px] sm:w-[110px] hover:scale-110"
              />
              <span className="text-xs sm:text-sm text-center mt-2">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

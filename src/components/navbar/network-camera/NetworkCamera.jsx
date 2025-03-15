import { useMenu } from "../../menueContext";
import img1 from "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-42.png";
import img2 from "/client-pic/Mini Series/AI Motorized Bullet Network Camera _ Mini/AI Motorized Bullet Network Camera _ Mini-48.png";
import img3 from "/client-pic/Mini Series/AI Motorized Dome Network Camera/AI Motorized Dome Network Camera-36.png";
import img4 from "/client-pic/Mini Series/AI Vandal-proof Mini Bullet Network Camera/AI Vandal-proof Mini Bullet Network Camera-51.png";
import img5 from "/client-pic/Mini Series/AI Vandal-proof Mini Dome/AI Vandal-proof Mini Do-33.png";
import img6 from "/client-pic/Mini Series/AI Weather proof Mini Bullet/AI Weather proof Mini Bullet Camera-39.png";

export default function NetworkCamera({ filter }) {
  const { closeMenu } = useMenu();

  const camerAray = [
    {
      name: "AI IR Mini Dome Camera",
      img: img1,
      path: "/products/ai-motorized-mini-dome",
    },
    {
      name: "AI Motorized Bullet Camera Mini",
      img: img2,
      category: "Mini",
    },
    {
      name: "AI Motorized Dome Camera",
      img: img3,
      category: "Mini",
    },
    {
      name: "AI Vandal-proof Mini Bullet Network Camera",
      img: img4,
      category: "Mini",
    },
    {
      name: "AI Weather proof Mini Dome Camera",
      img: img5,
      category: "Mini",
    },
    {
      name: "AI Weather proof Mini Bullet",
      img: img6,
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
                <a
                  href={`/products/detail?title=${item.name}`}
                  onClick={closeMenu}
                >
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

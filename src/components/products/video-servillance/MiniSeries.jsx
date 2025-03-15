import img1 from "/client-pic/Mini Series/AI IR Mini Dome Camera/AI IR Mini Dome Camera-42.png";
import img2 from "/client-pic/Mini Series/AI Motorized Bullet Network Camera _ Mini/AI Motorized Bullet Network Camera _ Mini-48.png";
import img3 from "/client-pic/Mini Series/AI Motorized Dome Network Camera/AI Motorized Dome Network Camera-36.png";
import img4 from "/client-pic/Mini Series/AI Vandal-proof Mini Bullet Network Camera/AI Vandal-proof Mini Bullet Network Camera-51.png";
import img5 from "/client-pic/Mini Series/AI Vandal-proof Mini Dome/AI Vandal-proof Mini Do-33.png";
import img6 from "/client-pic/Mini Series/AI Weather proof Mini Bullet/AI Weather proof Mini Bullet Camera-39.png";

export default function MiniSeries({ filter }) {
  const camerAray = [
    {
      name: "AI IR Mini Dome Camera",
      img: img1,
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
    <div className="w-full px-4 sm:mt-5">
      <div className="sm:w-[90%] mx-auto w-full">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-3">
          {filteredCameras.length > 0 ? (
            filteredCameras.map((item, index) => (
              <>
                <a href={`/products/detail?title=${item.name}`}>
                  <div
                    className="p-3 transition-all ease-in-out delay-100 hover:shadow-md hover:shadow-blue-200 cursor-pointer h-auto flex flex-col items-center justify-center border sm:border-0 rounded-lg shadow-sm bg-white"
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
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No products found for {filter}
            </p>
          )}
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

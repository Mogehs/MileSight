import enhanced from "/Diverse/en1.jpg";
import enhanced1 from "/Diverse/en2.jpg";

export default function Enhanced() {
  const enhandata = [
    {
      img: enhanced,
      title: "Masking of License Plates and Faces",
    },
    {
      img: enhanced1,
      title: "Offline Data Re-synchronization",
    },
  ];

  return (
    <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
      <h1 className="text-center text-xl md:text-3xl font-semibold text-[#00667C]">
        Enhanced Privacy & Data Protection
      </h1>

      {/* Images in a row */}
      <div className="flex flex-col md:flex-row gap-6 mt-6 items-center justify-center">
        {enhandata.map((item, index) => (
          <div
            key={index}
            className="w-full  text-center border border-gray-300 rounded-lg overflow-hidden shadow-md transition-all cursor-pointer transform hover:border-blue-400"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#7CCA9A]">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-6 group">
        <button className="w-1/2 md:w-1/3 bg-[#00667C] hover:text-[#00667C] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#7CCA9A] transition hover:-translate-y-1.5 cursor-pointer">
          <a href="/products/NDAA-Compil">More Details</a>
        </button>
      </div>
    </div>
  );
}

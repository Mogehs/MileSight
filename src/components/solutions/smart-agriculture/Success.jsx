import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

const Success = () => {
  const data = [
    {
      img: "/Solution/smart-agri/success1.jpg",
      title: "Remote Vineyard Irrigation Solution in Ningxia, China",
    },
    {
      img: "/Solution/smart-agri/success2.jpg",
      title: "Smart Greenhouse Solution in Mauritius",
    },
    {
      img: "/Solution/smart-agri/success3.jpg",
      title: "Greenhouse Temperature and Ventilation Management in America",
    },
    {
      img: "/Solution/smart-agri/success4.jpg",
      title: "Smart Pig Farming in Netherlands",
    },
    {
      img: "/Solution/smart-agri/success5.jpg",
      title: "Smart Poultry Farming in Africa",
    },
    {
      img: "/Solution/smart-agri/success6.jpg",
      title: "Digital Farming in Austria",
    },
    {
      img: "/Solution/smart-agri/success7.jpg",
      title: "Smart Irrigation Solution in Australia",
    },
    {
      img: "/Solution/smart-agri/success8.jpg",
      title: "Smart Fig Plantation Solution in Shandong, China",
    },
  ];

  return (
    <div
      id="agri-stories"
      className="w-full flex justify-center items-center bg-white py-10"
    >
      <div className="w-full sm:w-10/12 lg:w-8/12 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-center mb-6 text-2xl font-semibold text-[#666] sm:text-4xl">
          Success Story
        </h1>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className=" w-[100%]"
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className="text-center flex flex-col  items-center p-4 w-full"
            >
              <img
                className="object-contain mx-auto rounded-lg" // Adjusted size
                src={item.img}
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Success;

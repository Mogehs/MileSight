import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

export const HearCrausel = () => {
    const data = [
        {
            img: "/partners/partner-program/one.png",
            title:
                "Uniting forces with Milesight highlights our commitment to redefining IoT possibilities. This collaboration amplifies our dedication to delivering cutting-edge solutions and providing connectivity, innovation, and efficiency for commercial projects.",
            caption: ["Wienke Giezeman", "CEO, The Things Industries"],
        },
        {
            img: "/partners/partner-program/two.png",
            title:
                "With Milesight cameras now cloud-enabled by 3dEYE pure cloud video AI platform, we're advancing live video monitoring and video verification industry. This integration reduces false alarms by 90% and boosts operator efficiency by 80%, propelling us towards a safer, smarter future.",
            caption: ["Katherine Balabanova", "CRO/Board Director, 3dEYE Inc."],
        },
        {
            img: "/partners/partner-program/three.png",
            title:
                "We're thrilled about partnering with Milesight. Their expertise in IoT innovation, coupled with Actility's advanced connectivity solutions portfolio, will allow quicker and more secure deployments of LoRaWAN® solutions across many IoT segments.",
            caption: ["Oliver Hersent", "CEO, Actility"],
        },
        {
            img: "/partners/partner-program/four.png",
            title:
                "We welcome Milesight to the Zatpark ecosystem, bringing their global ANPR presence. This addition promises to enhance the suite of options available to Zatpark customers, aligning with our goal of improving parking management through technological integration.",
            caption: ["Jono Clark", "Technical Partnership Manager, Unity5"],
        },
    ];

    return (
        <div className="w-full flex justify-center items-center bg-white py-10">
            <div className="w-full sm:w-10/12 lg:w-8/12 bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-center mb-6 text-2xl font-semibold text-[#00667C] sm:text-4xl">
                    Hear from our Partners
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
                                className="h-24 w-24 object-contain mx-auto rounded-lg" // Adjusted size
                                src={item.img}
                                alt={`Slide ${index + 1}`}
                            />
                            <div className="mt-4 text-center w-[80%] sm:w-[80%] mx-auto px-4">
                                <p className="text-gray-700 italic">{item.title}</p>
                                <h5 className="text-lg font-semibold">{item.caption[0]}</h5>
                                <p className="text-gray-500 text-sm">{item.caption[1]}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

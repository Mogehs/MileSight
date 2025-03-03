import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import pic from '/Smartbuilding/bann.jpg';
import pic2 from '/Smartbuilding/bann2.jpg';
import pic3 from '/Smartbuilding/bann3.jpg';
import pic4 from '/Smartbuilding/bann4.jpg';
import pic5 from '/Smartbuilding/bann5.jpg';
import pic6 from '/Smartbuilding/bann6.jpg';
import pic7 from '/Smartbuilding/bann7.jpg';
import pic8 from '/Smartbuilding/bann8.jpg';

const SuccessStory = () => {
    const images = [pic, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

    return (
        <div className="w-full h-[430px] flex flex-col items-center justify-center ">
            <h1 className='text-4xl font-semibold  mb-5'>Success Story</h1>
            <div className='h-[80%] w-full max-w-5xl relative overflow-hidden rounded-lg shadow-lg'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    className="w-full h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full flex items-center justify-center transform transition-all duration-500 ease-in-out">
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-[300px] object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-next absolute top-1/2 right-[-20px] z-10 transform -translate-y-1/2 bg-white bg-opacity-70 p-3 rounded-full cursor-pointer hover:bg-opacity-100 shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
                <div className="custom-prev absolute top-1/2 left-[-20px] z-10 transform -translate-y-1/2 bg-white bg-opacity-70 p-3 rounded-full cursor-pointer hover:bg-opacity-100 shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SuccessStory;

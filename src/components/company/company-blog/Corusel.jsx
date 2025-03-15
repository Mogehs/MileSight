import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const carouselData = [
  {
    img: "/company/blog/c.jpg",
    title: "How to Prompt Competition with Panoramic Cameras in a Large Shopping Mall",
    description: "Milesight AI 180°&360° Panoramic Cameras helps large shopping to increase competition by optimizing customers shopping experiences",
    date: "May 25, 2023",
    buttonText: "Product"
  },
  {
    img: "/company/blog/c1.jpg",
    title: "The Future of Warmth: Smart Radiator Thermostat Innovation Featuring LoRaWAN® Technology",
    description: "Milesight officially released WT101 smart radiator thermostat to enhance the control and efficiency of heating systems in buildings",
    date: "October 25, 2023",
    buttonText: "Product"
  },
  {
    img: "/company/blog/c2.jpg",
    title: "VS350 Passage People Counter Efficient Counting the Way Forward",
    description: "Milesight release new product - VS350 passage people counter to efficiently enable smart traffic management.",
    date: "October 25, 2023",
    buttonText: "Product"
  },
  {
    img: "/company/blog/c3.jpg",
    title: "Transforming Indoor Environments with LoRaWAN: Innovative Solutions for Enhanced Comfort and Efficiency",
    description: "By leveraging the power of LoRaWAN, Milesight can significantly improve the quality of our indoor environments, making them more comfortable, efficient, and responsive to our needs.",
    date: "June 28, 2024",
    buttonText: "Solution"
  },
  {
    img: "/company/blog/c5.jpg",
    title: "5 Key Considerations for Intelligent Traffic Camera",
    description: "How to find the most suitable traffic camera for you? See these 5 important factors when choosing an intelligent traffic camera.",
    date: "June 27, 2023",
    buttonText: "Product"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto py-8 px-4">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2">
        <img
          src={carouselData[currentIndex].img}
          alt="Carousel"
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md transition-opacity duration-500"
        />
      </div>

      {/* Right Side: Data */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8 bg-gray-50 min-h-[16rem] md:min-h-[24rem] p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{carouselData[currentIndex].title}</h2>
        <p className="text-gray-700 mb-2">{carouselData[currentIndex].description}</p>
        <span className="text-gray-500 mb-4">{carouselData[currentIndex].date}</span>
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition w-max">
          {carouselData[currentIndex].buttonText} <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

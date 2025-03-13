import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const years = ["All", "2021", "2022", "2023", "2024", "2025"];
const categories = ["All", "Product", "Solution", "Innovation", "Compaing"];

const cardsData = [
  { image: "/company/events/banner.png", title: "Simplifying IoT Deployment: Milesight LoRaWAN® Gateways Integrated with Popular LoRaWAN®", description: "Network Servers Milesight LoRaWAN gateways are compatible with a wide range of mainstream LoRaWAN Network Servers...", date: "10", month: "March", year: "2004", button: "Product" },
  { image: "/aboutimg/growth1.jpg", title: "Milesight GDPR-Compliant People Counting Series Sensor for Elevating Space Intelligence", description: "Milesight’s People Counting Series proves that technology can be both smart and secure. By combinin...", date: "12", month: "April", year: "2005", button: "Solution" },
  { image: "/aboutimg/Gicon111.png", title: "Five Case Shares, Our Five-Star Expert Partner: Utilizing IoT Solutions to Boost Operations", description: "Energy Efficiency in Smart Buildings and Smart Cities Across Industries in Spain Monolitic is our experienced partner who has successfully grounded educational and practical...", date: "15", month: "May", year: "2007", button: "Compaing" },
  { image: "/company/events/banner.png", title: "How Ultrasonic Distance Sensors Work: The Technology Behind and 6 Practical Applications", description: "Explore the benefits of Ultrasonic Distance Sensors in smart city applications. Improve waste management...", date: "18", month: "June", year: "2004", button: "Product" },
  { image: "/company/events/milesight-events-bg-intersec-dubai.png", title: "Comparing People Counting Technologies in 2025: Advancements in Accuracy, Efficiency", description:"Discover the various people counting technologies, including AI-based, Time-of-Flight (ToF), Passive...", date: "20", month: "July", year: "2005", button: "Innovation" },
  { image: "/aboutimg/growth1.jpg", title: "Building Safer, Healthier, and Smarter Campuses with IoT-based Smart School Solution", description: "Milesight focus on three essential aspects: personal safety, personal health, and property safety, ensuring...", date: "25", month: "August", year: "2007", button: "Solution" },
  { image: "/aboutimg/Gicon111.png", title: "Temperature and Humidity Monitoring: All Needs Solved at Milesight!", description: "Contact us to get special discount and limited free sensors to roll out your temperature and humidity...", date: "28", month: "September", year: "2004", button: "Compaing" },
  { image: "/company/events/milesight-events-bg-intersec-dubai.png", title: "Revolutionizing Connectivity: Exploring the Potentials of 5G IoT Applications for Businesses", description: "5G technology is currently being deployed by network operators worldwide, with widespread adoption...", date: "30", month: "October", year: "2005", button: "Innovation" },
  { image: "/aboutimg/growth1.jpg", title: "Cold Chain Temperature Monitoring: Ensuring Product Safety Every Step of the Way", description: "Get insights into cold chain temperature monitoring. Explore technologies, challenges, and best practices...", date: "5", month: "November", year: "2007", button: "Solution" },
];

const CardFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Cards
  const filteredCards = cardsData.filter((card) => {
    const matchesCategory = selectedCategory === "All" || card.button === selectedCategory;
    const matchesYear = selectedYear === "All" || card.year === selectedYear;
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          card.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesYear && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Navbar */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <nav className="flex space-x-4 text-[#333]">
          {categories.map((category) => (
            <button
              key={category}
              className={`font-medium px-3 py-1 rounded ${selectedCategory === category ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <select
            className="border border-[#666] px-2 py-1 rounded"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-[#666] px-2 py-1 pl-8 rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-2 top-3 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div key={index} className="p-4 bg-gray-50 shadow-md rounded-lg">
              <img src={card.image} alt={card.title} className="w-full h-40 rounded-md mb-4" />
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-2">{card.description}</p>
              <p className="text-gray-500 mb-4">{card.date} {card.month}, {card.year}</p>
              <button className="border border-[#666] text-[#666] text-[12px] px-3 py-1 rounded-full">
                {card.button}
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default CardFilter;

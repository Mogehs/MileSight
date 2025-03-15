import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const years = ["All", "2023", "2024", "2025"];
const categories = ["All", "Product", "Solution", "Innovation", "Compaing"];

const cardsData = [
  { image: "/company/blog/p1.jpg", title: "Simplifying IoT Deployment", description: "Network Servers Milesight LoRaWAN...", date: "10", month: "March", year: "2023", button: "Product" },
  { image: "/company/blog/s1.jpg", title: "GDPR-Compliant People Counting", description: "Milesight’s People Counting Series...", date: "12", month: "April", year: "2023", button: "Solution" },
  { image: "/company/blog/cp1.jpg", title: "IoT Solutions to Boost Operations", description: "Energy Efficiency in Smart Buildings...", date: "15", month: "May", year: "2023", button: "Compaing" },
  { image: "/company/blog/p2.jpg", title: "How Ultrasonic Distance Sensors Work", description: "Explore the benefits of Ultrasonic...", date: "18", month: "June", year: "2024", button: "Product" },
  { image: "/company/blog/ci1.jpg", title: "Comparing People Counting Tech", description: "Discover the various people counting...", date: "20", month: "July", year: "2024", button: "Innovation" },
  { image: "/company/blog/s2.jpg", title: "Smart School Solution", description: "Ensuring safety, security & efficiency...", date: "25", month: "August", year: "2024", button: "Solution" },
  { image: "/company/blog/cp1.jpg", title: "Temperature and Humidity Monitoring", description: "Get special discounts and free sensors...", date: "28", month: "September", year: "2025", button: "Compaing" },
  { image: "/company/blog/ci2.jpg", title: "5G IoT Applications for Businesses", description: "5G technology is currently being deployed...", date: "30", month: "October", year: "2025", button: "Innovation" },
  { image: "/company/blog/s3.jpg", title: "Cold Chain Temperature Monitoring", description: "Ensuring product safety every step...", date: "5", month: "November", year: "2025", button: "Solution" },
];

const CardFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered Cards Logic
  let filteredCards = cardsData.filter(card => 
    (selectedYear === "All" || card.year === selectedYear) &&
    (selectedCategory === "All" || card.button === selectedCategory) &&
    (searchQuery === "" || card.title.toLowerCase().includes(searchQuery.toLowerCase()) || card.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // If a specific year is selected, show only 3 cards from that year
  if (selectedYear !== "All") {
    filteredCards = filteredCards.slice(0, 3);
  }

  return (
    <div className="max-w-7xl mx-auto ">
      {/* Navbar */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4 md:gap-2 py-5 px-4">
        <nav className="flex flex-wrap gap-2 md:space-x-4 text-[#333]">
          {categories.map((category) => (
            <button
              key={category}
              className={`font-medium px-3 py-1 rounded ${
                selectedCategory === category ? "bg-blue-600 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <select
            className="border border-[#666] px-2 py-1 rounded w-full md:w-auto"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              className="border border-[#666] px-2 py-1 rounded pl-8 w-full md:w-auto"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-2 top-2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div key={index} className="p-4 bg-gray-50 shadow-md rounded-lg">
              <img src={card.image} alt={card.title} className="w-full h-40 rounded-md mb-4" />
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-2">{card.description}</p>
              <p className="text-gray-500 mb-4">
                {card.date} {card.month}, {card.year}
              </p>
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

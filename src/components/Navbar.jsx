import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiGlobalLine } from "react-icons/ri";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import Products from "./navbar/Products";
import Solutions from "./navbar/Solutions";
import Innovation from "./navbar/Innovation";
import Company from "./navbar/Company";
import Partners from "./navbar/Partenrs";
import Resources from "./navbar/Resources";

export default function Navbar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

  return (
    <div>
      <nav
        className="flex items-center justify-between bg-white text-black p-4 shadow-lg relative"
        onMouseLeave={() => setActiveDropdown(null)} // Hide dropdown when leaving navbar
      >
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <img
            src="/MileSightLogo.png"
            alt="Logo"
            className="w-40 h-12 object-cover"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        {/* Center - Navbar Items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 md:flex space-x-6 text-lg transition-all duration-300`}
        >
          {[
            { label: "Products", component: <Products /> },
            { label: "Solutions", component: <Solutions /> },
            { label: "Innovation", component: <Innovation /> },
            { label: "Company", component: <Company /> },
            { label: "Partners", component: <Partners /> },
            { label: "Resources", component: <Resources /> },
          ].map(({ label, component }) => (
            <div
              key={label}
              className="relative inline-block"
              onMouseEnter={() => setActiveDropdown(label)}
            >
              <a href="#" className="block md:inline hover:text-gray-600">
                {label}
              </a>

              {/* Full-Screen Dropdown Content */}
              {activeDropdown === label && (
                <div
                  className="fixed left-0 top-[65px] w-full bg-white shadow-lg p-6 z-50"
                  onMouseEnter={() => setActiveDropdown(label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {component}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search Bar - Visible on smaller screens */}
          <div className="relative md:hidden">
            <CiSearch
              className="cursor-pointer"
              onClick={() => setSearchVisible(!searchVisible)}
            />
            {searchVisible && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-10 left-0 bg-gray-800 border border-gray-600 text-white px-2 py-1 rounded"
              />
            )}
          </div>

          {/* Language Selector */}
          <div className="relative">
            <div
              className="flex items-center cursor-pointer "
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <RiGlobalLine className="mr-1" />
              <span>{selectedLanguage}</span>
              <FaAngleDown className="ml-1" />
            </div>
            {dropdownOpen && (
              <div className="absolute bg-white border z-50 text-black mt-2 py-2 w-24 rounded shadow-lg">
                <p
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => {
                    setSelectedLanguage("Urdu");
                    setDropdownOpen(false);
                  }}
                >
                  Urdu
                </p>
                <p
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => {
                    setSelectedLanguage("Punjabi");
                    setDropdownOpen(false);
                  }}
                >
                  Punjabi
                </p>
              </div>
            )}
          </div>

          {/* Contact Button */}
          <button className="bg-[#0299f4] px-3 py-1 text-white rounded-3xl hover:bg-blue-700 flex items-center justify-center">
            Contact
          </button>

          {/* Online Demo Button */}
          <button className="px-3 py-1 rounded-3xl border flex items-center justify-center gap-1">
            <IoPlayCircleOutline className="text-yellow-500 text-lg" />
            <span className="text-sm font-medium">Online Demo</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

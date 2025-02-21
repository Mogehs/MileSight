import { useState } from "react";
import { RiGlobalLine } from "react-icons/ri";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import Products from "./navbar/Products";
import Solutions from "./navbar/Solutions";
import Innovation from "./navbar/Innovation";
import Company from "./navbar/Company";
import Partners from "./navbar/Partenrs";
import Resources from "./navbar/Resources";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // Handle hover with delay only on small screens
  const handleMouseEnter = (label) => {
    if (window.innerWidth < 768) { // Only for small screens
      const timeout = setTimeout(() => {
        setActiveDropdown(label);
      }, 300); // 300ms delay
      setHoverTimeout(timeout);
    } else {
      setActiveDropdown(label); // No delay for large screens
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setActiveDropdown(null);
  };

  return (
    <div>
      <nav className="flex items-center justify-between bg-white text-black p-4 shadow-lg absloute">
        <Link to="/">
          <div className="flex items-center">
            <img src="/Nexyws.png" alt="Logo" className="w-50 h-12 object-cover" />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center - Navbar Items */}
        <div
             className={`${menuOpen ? "block" : "hidden"} 
             z-50 flex flex-col md:flex absolute md:static w-[50%] top-18 right-0  md:w-auto 
             h-full md:h-auto text-center bg-white md:bg-transparent 
             shadow-md md:shadow-none p-4 md:p-0 space-y-7 md:space-y-0  
             md:flex-row md:space-x-3 text-lg  transition-all duration-300 
             justify-start items-center`}
        >
          {[{ label: "Products", component: <Products /> },
          { label: "Solutions", component: <Solutions /> },
          { label: "Innovation", component: <Innovation /> },
          { label: "Company", component: <Company /> },
          { label: "Partners", component: <Partners /> },
          { label: "Resources", component: <Resources /> },
          ].map(({ label, component }) => (
            <div
              key={label}
              className="relative inline-block"
              onMouseEnter={() => handleMouseEnter(label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="#" className="block md:inline hover:text-gray-600">{label}</Link>
              {activeDropdown === label && (
                <div className="fixed left-0 top-[65px] w-full bg-white shadow-lg p-6 z-50">
                  {component}
                </div>
              )}
            </div>
          ))}

          {/* Language Selector - Visible in Mobile Menu */}
          <div className="relative flex justify-center w-full">
            <div className="flex items-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <RiGlobalLine className="mr-1" />
              <span>{selectedLanguage}</span>
              <FaAngleDown className="ml-1" />
            </div>
            {dropdownOpen && (
              <div className="absolute bg-white border z-50 text-black mt-8 py-2 w-24 rounded shadow-lg">
                <p className="px-4 py-2 cursor-pointer" onClick={() => { setSelectedLanguage("Urdu"); setDropdownOpen(false); }}>Urdu</p>
                <p className="px-4 py-2 cursor-pointer" onClick={() => { setSelectedLanguage("Punjabi"); setDropdownOpen(false); }}>Punjabi</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Visible Only on lg+ Screens */}
        <div className="hidden lg:flex items-center space-x-2">
          <button className="bg-[#0299f4] px-3 py-1 text-white rounded-3xl hover:bg-blue-700 flex items-center justify-center">Contact</button>
          <button className="px-2 py-1 rounded-3xl border flex items-center justify-center gap-1">
            <IoPlayCircleOutline className="text-yellow-500 text-lg" />
            <span className="text-sm font-medium text-nowrap">Online Demo</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useMenu } from "./menueContext";
import Products from "./navbar/Products";
import Solutions from "./navbar/Solutions";
import Company from "./navbar/Company";
import Partners from "./navbar/Partners";
import Resources from "./navbar/Resources";
import { useState } from "react";

const navLinks = [
  { name: "Products", path: "/products/iot-sensing", component: <Products /> },
  { name: "Solutions", path: "/solutions", component: <Solutions /> },
  { name: "Company", path: "/company", component: <Company /> },
  { name: "Partners", path: "/partners", component: <Partners /> },
  { name: "Resources", path: "/resources", component: <Resources /> },
];

const actionLinks = [
  {
    name: "Contact",
    path: "/contact",
    className:
      "bg-[#00667C] px-3 py-1 text-white rounded-3xl hover:bg-[#7CCA9A] text-[0.7rem] ml-10",
  },
  {
    name: "Online Demo",
    path: "/demo",
    className:
      "px-2 py-1 rounded-3xl border flex items-center justify-center gap-1 text-nowrap text-[0.7rem]",
  },
];

export default function Navbar() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <>
      <nav
        className="flex sticky w-full z-[300] items-center justify-between bg-white text-black pr-1 sm:px-4 py-3 shadow-lg top-0"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link to="/" onClick={closeMenu}>
          <img
            src="/Nexyws.png"
            alt="Logo"
            className="w-35 sm:w-40 h-12 object-cover"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className=""
              onMouseEnter={() =>
                item.component ? setActiveDropdown(item.name) : null
              }
            >
              <div className="hover:text-gray-600">{item.name}</div>

              {/* Dropdown Component (Visible on Hover) */}
              {activeDropdown === item.name && item.component && (
                <div
                  className="absolute left-0 top-full z-50 w-full"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.component}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          {actionLinks.map((item, index) => (
            <Link key={index} to={item.path} className={item.className}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu (Slide-in effect) */}
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-md p-6 space-y-4 flex flex-col transition-transform duration-300 z-[200] h-screen overflow-y-auto ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          {navLinks.map((item, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === item.name ? null : item.name
                  )
                }
                className="flex justify-between items-center w-full text-lg hover:text-gray-600 py-2"
              >
                {item.name}
                {mobileDropdown === item.name ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              {/* Mobile Dropdown Menu */}
              {mobileDropdown === item.name && item.component && (
                <div className="bg-gray-100 rounded-md absolute w-full left-0">
                  {item.component}
                </div>
              )}
            </div>
          ))}

          {/* Action Buttons - Mobile */}
          <div className="flex flex-col space-y-2 w-full">
            {actionLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`${item.className} text-center w-full`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* <Products /> */}
    </>
  );
}

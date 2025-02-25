import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Products from "./navbar/Products";
import Solutions from "./navbar/Solutions";
import Innovation from "./navbar/Innovation";
import Company from "./navbar/Company";
import Partners from "./navbar/Partenrs";
import Resources from "./navbar/Resources";

const navLinks = [
  { name: "Products", path: "/products/iot-sensing", component: <Products /> },
  { name: "Solutions", path: "/solutions", component: <Solutions /> },
  { name: "Innovation", path: "/innovation", component: <Innovation /> },
  { name: "Company", path: "/company", component: <Company /> },
  { name: "Partners", path: "/partners", component: <Partners /> },
  { name: "Resources", path: "/resources", component: <Resources /> },
];

const actionLinks = [
  {
    name: "Contact",
    path: "/contact",
    className:
      "bg-[#0299f4] px-3 py-1 text-white rounded-3xl hover:bg-blue-700",
  },
  {
    name: "Online Demo",
    path: "/demo",
    className:
      "px-2 py-1 rounded-3xl border flex items-center justify-center gap-1",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <nav
        className="flex items-center justify-between bg-white text-black pr-1 sm:px-4 py-3 shadow-lg relative"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link to="/">
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
              <Link to={item.path} className="hover:text-gray-600">
                {item.name}
              </Link>

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
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu (Slide-in effect) */}
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-md p-6 space-y-4 flex flex-col items-start transition-transform duration-300 z-100 h-screen ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block text-lg hover:text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Action Buttons - Mobile */}
          <div className="flex flex-col space-y-2 w-full">
            {actionLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`${item.className} text-center w-full`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

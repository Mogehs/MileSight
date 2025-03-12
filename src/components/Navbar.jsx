import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useMenu } from "./menueContext";
import Products from "./navbar/Products";
import Solutions from "./navbar/Solutions";
import Company from "./navbar/Company";
import Partners from "./navbar/Partners";
import Resources from "./navbar/Resources";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import axios from "axios";

const navLinks = [
  { name: "Products", path: "/products/iot-sensing", component: <Products /> },
  {
    name: "Solutions",
    path: "/products/video-surveillance",
    component: <Solutions />,
  },
  { name: "Company", path: "/company/about-us", component: <Company /> },
  {
    name: "Partners",
    path: "/solutions/find-technology-partner",
    component: <Partners />,
  },
  {
    name: "Resources",
    path: "/resources/submit-ticket",
    component: <Resources />,
  },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [user, setUser] = useState(null); // State to store user info

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const USER_API = import.meta.env.VITE_USER_API_END_POINT;
        const res = await axios.get(`${USER_API}/user`, {
          withCredentials: true,
        });
        if (res.status === 200) {
          setUser(res.data);
        }
      } catch (err) {
        setUser(null); // If request fails, assume user is not logged in
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <nav
        className="flex sticky w-full z-[300] justify-between lg:justify-center flex-wrap items-center gap-3  bg-white text-[#00667C] cursor-pointer px-2 lg:px-4 py-3 shadow-lg top-0"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div>
          <a href="/" onClick={closeMenu}>
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-35 sm:w-40 h-12 object-cover transform transition-all ease-in dela-1 hover:shadow-md hover:shadow-[#7CCA9A] rounded-lg"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-black">
          {navLinks.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() =>
                item.component ? setActiveDropdown(item.name) : null
              }
              onMouseLeave={() => {
                setActiveDropdown(null);
                setHoveredIndex(index);
              }}
            >
              <div
                className={`hover:text-gray-600 mt-1 text-lg max-w-28 transform transition-all ease-in-out delay-75 font-medium  ${
                  hoveredIndex === index
                    ? "shadow-lg shadow-[#7CCA9A] text-gray-600"
                    : "hover:text-gray-600 hover:shadow-lg hover:shadow-[#7CCA9A]"
                } px-2 rounded-lg py-1`}
                onMouseEnter={() => setHoveredIndex(true)}
              >
                <a href={item.path}>{item.name}</a>
              </div>

              {/* Dropdown Component with Animation */}
              <AnimatePresence>
                {activeDropdown === item.name && item.component && (
                  <motion.div
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    exit={{ y: -10 }}
                    transition={{ duration: 0.1 }}
                    className="absolute left-0 top-full z-50 w-full rounded-md"
                  >
                    {item.component}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Action Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-2 mt-2">
          <a
            href="https://github.com"
            className="p-2 border flex items-center gap-1 text-[0.8rem] text-[#00667C] hover:text-[#7CCA9A] transition-all ease-in rounded-md font-bold"
          >
            <FaGithub className="text-2xl" />
            Create Live Meeting
          </a>
          <a
            href="/resources/online-demo"
            className="bg-[#00667C] text-nowrap px-3 sm:py-1 text-white rounded-3xl hover:bg-[#7CCA9A] text-[0.9rem] py-3 transition-all transform ease-in-out"
          >
            Online Demo
          </a>

          {/* Show user initial if logged in, otherwise show "Get Started" */}
          {user ? (
            <div className="w-10 h-10 bg-[#7FC99D] text-white rounded-full flex items-center justify-center font-bold text-lg uppercase">
              {user?.name?.charAt(0)}
            </div>
          ) : (
            <a
              href="/register"
              className="bg-[#7FC99D] text-nowrap px-3 sm:py-1 text-white rounded-3xl hover:bg-[#006878] text-[0.9rem] py-3 transition-all transform ease-in-out"
            >
              Get Started
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
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

              <AnimatePresence>
                {mobileDropdown === item.name && item.component && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-100 rounded-md absolute w-full left-0"
                  >
                    {item.component}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Action Buttons - Mobile */}
          <div className="flex flex-col space-y-2 items-center w-full">
            <a
              href="/resources/online-demo"
              className="bg-[#00667C] px-3 py-2 text-white rounded-lg hover:bg-[#7CCA9A]"
            >
              Online Demo
            </a>

            {/* User Initial for Mobile */}
            {user ? (
              <div className="w-10 h-10 bg-[#7FC99D] text-white rounded-full flex items-center justify-center font-bold text-lg uppercase">
                {user?.name?.charAt(0)}
              </div>
            ) : (
              <a
                href="/register"
                className="bg-[#7FC99D] px-3 py-2 text-white rounded-lg hover:bg-[#006878]"
              >
                Get Started
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

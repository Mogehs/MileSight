import React, { useState } from "react";
import { FaGlobe, FaPhone, FaEnvelope, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiChat } from "react-icons/hi";
import { MdHeadsetMic } from "react-icons/md";
import { ImEmbed2 } from "react-icons/im";
import { IoFolderOutline } from "react-icons/io5";

const ContactForm = () => {
  // Country State
  const [showCountryList, setShowCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Country");
  const countries = [
    { code: "+44", name: "UK" },
    { code: "+91", name: "IN" },
    { code: "+49", name: "DE" },
    { code: "+81", name: "JP" },
  ];

  const handleSelectCountry = (country) => {
    setSelectedCountry(`${country.code} ${country.name}`);
    setShowCountryList(false);
  };

  // Business Type State
  const [showBusinessList, setShowBusinessList] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState("Select Business Type");
  const businessTypes = ["Retail", "Manufacturing", "Technology", "Finance", "Healthcare"];

  const handleSelectBusiness = (business) => {
    setSelectedBusiness(business);
    setShowBusinessList(false);
  };

  // Interested Product State
  const [showProductList, setShowProductList] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Interested Product");
  const products = [
    "IoT Sensors",
    "AI Solutions",
    "Cloud Services",
    "Security Systems",
    "Networking Devices",
  ];

  const handleSelect = (product) => {
    setSelectedProduct(product);
    setShowProductList(false);
  };

  // Form Data State
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    company: "",
    phone: "",
    website: "",
    message: "",
    verifyCode: "",
  });

  // Handle Change Function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      Email: formData.email,
      Country: selectedCountry,
      Company: formData.company,
      Phone: formData.phone,
      BusinessType: selectedBusiness,
      Website: formData.website,
      InterestedProduct: selectedProduct,
      Message: formData.message,
      VerifyCode: formData.verifyCode,
    });
  };
  return (
    <div className="flex flex-col md:flex-row p-6 gap-6 bg-gray-100 mt-[22rem] sm:mt-[25rem] md:mt-[23rem]lg:mt-[15rem]">
      {/* Left Form Section */}
      <div className="w-full md:w-[40rem] bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="country"
            placeholder="Your Country"
            className="w-full p-3 border rounded-lg"
            value={formData.country}
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Your Company"
            className="w-full p-3 border rounded-lg"
            value={formData.company}
            onChange={handleChange}
          />

          {/* Country Code & Phone Number */}
          <div className="flex gap-2 relative">
            <div className="w-1/3 relative">
              <div
                className="p-3 border rounded-lg flex justify-between items-center cursor-pointer"
                onClick={() => setShowCountryList(!showCountryList)}
              >
                <span className="text-[11px] sm:text-[20px] font-base text-nowrap">{selectedCountry}</span>
                <FaChevronDown className="text-gray-500" />
              </div>

              {showCountryList && (
                <ul className="absolute bg-white border w-full mt-1 rounded-lg shadow-lg z-10">
                  {countries.map((country, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSelectCountry(country)}
                    >
                      {country.code} {country.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-2/3 p-3 border rounded-lg"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Business Type Dropdown */}
          <div className="relative">
            <div
              className="p-3 border rounded-lg flex justify-between items-center cursor-pointer"
              onClick={() => setShowBusinessList(!showBusinessList)}
            >
              <span>{selectedBusiness}</span>
              <FaChevronDown className="text-gray-500" />
            </div>

            {showBusinessList && (
              <ul className="absolute bg-white border w-full mt-1 rounded-lg shadow-lg z-10">
                {businessTypes.map((business, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelectBusiness(business)}
                  >
                    {business}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input
            type="text"
            name="website"
            placeholder="Your Website"
            className="w-full p-3 border rounded-lg"
            value={formData.website}
            onChange={handleChange}
          />

          {/* Product Dropdown */}
          <div className="relative">
            <div
              className="p-3 border rounded-lg flex justify-between items-center cursor-pointer"
              onClick={() => setShowProductList(!showProductList)}
            >
              <span>{selectedProduct}</span>
              <FaChevronDown className="text-gray-500" />
            </div>

            {showProductList && (
              <ul className="absolute bg-white border w-full mt-1 rounded-lg shadow-lg z-10">
                {products.map((product, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelect(product)}
                  >
                    {product}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 border rounded-lg h-24"
            value={formData.message}
            onChange={handleChange}
          />

          <input
            type="text"
            name="verifyCode"
            placeholder="Verify Code"
            className="w-full p-3 border rounded-lg"
            value={formData.verifyCode}
            onChange={handleChange}
          />

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>

      {/* Right Contact Info Section */}
      <div className="w-full md:w-2/4 bg-white p-6 shadow-lg rounded-lg">
        <div className="flex items-center mb-4 gap-4">
          <h2 className="text-[15px] text-black font-base">Sales & Distribution</h2>
          <CiUser className="text-gray-700 text-2xl" />
        </div>
        <hr className="mb-4" />

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <ul className="bg-[#f0faff] w-full md:w-[50%] list-disc p-5 rounded-md">
            <li className="text-[11px] text-[#666666]">Video Surveillance</li>
            <li className="text-[11px] text-[#666666]">Intelligent Traffic</li>
          </ul>
          <div className="bg-[#f4f6f8] w-full md:w-[50%] p-5 rounded-md">
            <p className="flex items-center text-[12px] text-[#0299f4]">
              <MdOutlineMailOutline className="mr-2 text-[17px]" />
              supportthinker@gmail.com
            </p>
            <p className="flex items-center text-[12px] text-[#0299f4]">
              <BiMessageRoundedDetail className="mr-2 text-[17px]" />
              codesthinker@gmail.com
            </p>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <ul className="bg-[#f0faff] w-full md:w-[50%] list-disc p-5 rounded-md">
            <li className="text-[11px] text-[#666666]">IoT LoRaWAN® Series</li>
            <li className="text-[11px] text-[#666666]">5G & Cellular Products</li>
            <li className="text-[11px] text-[#666666]">Environmental Sensing</li>
            <li className="text-[11px] text-[#666666]">Software & Platform</li>
            <li className="text-[11px] text-[#666666]">X Infinity</li>
          </ul>
          <div className="bg-[#f4f6f8] w-full md:w-[50%] p-5 rounded-md">
            <p className="flex items-center text-[12px] text-[#0299f4]">
              <MdOutlineMailOutline className="mr-2 text-[17px]" />
              iot.sales@milesight.com
            </p>
            <p className="flex items-center text-[12px] text-[#0299f4]">
              <HiChat className="mr-2 text-green-600 text-[17px]" />
              +86 17750659069 (Live Chat)
            </p>
            <p className="flex items-center text-[12px] text-[#0299f4]">
              <IoLogoWhatsapp className="mr-2 text-green-600 text-[17px]" />
              +86 17750659069 (Live Chat)
            </p>
          </div>
        </div>


        <div className="flex items-center mb-4 gap-4">
          <h2 className="text-[15px] text-black font-base">Support & Knowledge Base</h2>
          <MdHeadsetMic className="text-gray-700 text-2xl" />
        </div>
        <hr className="mb-4" />
        <h3 className="text-[13px] text-[#666666] mb-4">Need support in</h3>
        <div className="grid grid-cols-3 gap-2">
          {["Video Surveillance", "Intelligent Traffic", "IoT LoRaWAN® Series", "5G & Cellular Products", "Environmental Sensing", "Software & Platform"].map((city) => (
            <button key={city} className="text-[8px] sm:text-[10px] text-nowrap text-[#666666] py-2 px-2 rounded-2xl hover:bg-[#0299f4] bg-gray-300 hover:text-white transition">
              {city}
            </button>
          ))}
        </div>

        <div className="flex items-center mt-6 gap-4">
          <h2 className="text-[15px] text-black font-base">Marketing & Public Relations</h2>
          <ImEmbed2 className="text-gray-700 text-2xl" />
        </div>
        <hr className="my-2" />
        <h3 className="text-[13px] text-[#666666] mb-2">For marketing and PR cooperations reach us at</h3>
        <div className="flex flex-col gap-2">
          <p className="flex items-center text-[12px] text-[#0299f4]"><MdOutlineMailOutline className="mr-2 text-[17px]" />supportthinker@gmail.com</p>
          <p className="flex items-center text-[12px] text-[#0299f4]"><MdOutlineMailOutline className="mr-2 text-[17px]" />codesthinker@gmail.com</p>
        </div>

        <div className="flex items-center mt-6 gap-4">
          <h2 className="text-[15px] text-black font-base">Subscribe Our Newsletter</h2>
          <IoFolderOutline className="text-gray-700 text-2xl" />
        </div>
        <hr className="my-2" />
        <div className="flex items-center gap-2">
          <h2 className="text-[13px] text-[#0299f4] font-base">Get new and updates about our product</h2>
          <FaArrowRight className="text-[13px] text-[#0299f4]" />
        </div>
        <hr className="w-[16rem] text-[#0299f4]" />

        <div className="flex flex-row items-center gap-[20px] my-4">
          <div className="right-[50px]">
            <img src="/contact/contactfotter.png" alt="Company Logo" className="w-22" />
          </div>
          <div>
            <p className="flex items-center text-[13px] sm:text-[14px] text-nowrap">Dilwar colony street #4,Bahawalpur</p>
            <p className="flex items-center text-[13px] sm:text-[14px] text-nowrap">+92 123 456789</p>
            <p className="flex items-center text-[13px] sm:text-[14px] text-nowrap">codesthinker@gmail.com</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ContactForm;




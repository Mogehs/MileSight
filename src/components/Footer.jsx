import { FaEnvelope, FaGlobe } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-500 py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Column */}
        <div>
          <div className="flex gap-2">
            <img
              src="/MileSightLogo.png"
              alt="Milesight"
              className="w-40 object-cover"
            />
          </div>
          <p className="text-sm mt-2">
            Milesight offers multi-potential sensing products to capture
            meaningful data. It innovatively applies AI, 5G, IoT to bring real
            impacts to diverse applications. Committed to making sensing matter,
            Milesight responsively addresses customer demands and works closely
            with a growing partner ecosystem to realize the value of data.
          </p>
          <h4 className="text-lg font-semibold mt-5">
            Subscribe to Our Newsletter
          </h4>
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex items-center bg-white p-2 rounded border border-xl">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none text-gray-500 flex-1"
              />
            </div>
            <div className="flex items-center bg-white p-2 rounded border border-xl">
              <FaGlobe className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Country"
                className="bg-transparent outline-none text-gray-500 flex-1"
              />
            </div>
            <div className="flex items-center bg-white p-2 rounded border border-xl">
              <input
                type="text"
                placeholder="Verify Code"
                className="bg-transparent outline-none text-gray-500 flex-1"
              />
              <button className="ml-2 bg-blue-600 px-4 py-2 rounded text-white font-semibold">
                Register
              </button>
            </div>
          </div>
          <h4 className="text-lg font-semibold mt-5">Follow</h4>
          <p className="text-sm">Follow us on social media.</p>
          <div className="flex space-x-4 mt-3">
            <FaFacebook className="text-blue-600 text-xl cursor-pointer" />
            <FaTwitter className="text-blue-400 text-xl cursor-pointer" />
            <FaLinkedin className="text-blue-700 text-xl cursor-pointer" />
            <FaInstagram className="text-pink-500 text-xl cursor-pointer" />
            <FaYoutube className="text-red-600 text-xl cursor-pointer" />
            <FaGithub className="text-gray-800 text-xl cursor-pointer" />
          </div>
        </div>

        {/* Second, Third, and Fourth Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Second Column */}
          <div>
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="mt-2 space-y-2 text-nowrap text-[14px]">
              <li>Video Surveillance</li>
              <li>Intelligent Traffic</li>
              <li>IoT LoRaWAN® Sensor</li>
              <li>LoRaWAN® Gateway</li>
              <li>IoT Controller</li>
              <li>5G & Cellular Products</li>
              <li>Software & Platform</li>
            </ul>
            <h3 className="text-lg font-semibold mt-5">Company</h3>
            <ul className="mt-2 space-y-2 text-nowrap text-[14px]">
              <li>Our Brand</li>
              <li>Success Stories</li>
              <li>Ecosystem</li>
              <li>Partner Program</li>
              <li>Contact Us</li>
              <li>Legal</li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="mt-2 space-y-2 text-nowrap text-[14px]">
              <li>Intelligent Traffic Solution</li>
              <li>Smart Building</li>
              <li>Smart Office</li>
              <li>Smart Restroom</li>
              <li>IAQ</li>
              <li>Energy Efficiency</li>
              <li>People Counting</li>
            </ul>
            <h3 className="text-lg font-semibold mt-5">Resources</h3>
            <ul className="mt-2 space-y-2 text-nowrap text-[14px]">
              <li>Security Support</li>
              <li>IoT Support</li>
              <li>Academy</li>
              <li>Video Center</li>
              <li>Download Center</li>
              <li>Developer Zone</li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div>
            <h3 className="text-lg font-semibold">Innovation</h3>
            <ul className="mt-2 space-y-2 text-nowrap text-[14px]">
              <li>Milesight D2D</li>
              <li>AIoT</li>
              <li>LoRaWAN®</li>
              <li>AI VCA</li>
              <li>5G</li>
              <li>Structure Design</li>
              <li>Heat Map</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="m-4 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm  sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              codes Thinker
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium  sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

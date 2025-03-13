import { Link } from "react-router-dom";
import { useMenu } from "../menueContext";

const solutionsData = [
  [
    {
      label: "Video Surveillance",
      link: "/products/video-surveillance",
    },
    {
      label: "Smart Restroom",
      link: "/solutions/smart-restroom",
    },
    {
      label: "Smart Space",
      link: "/solutions/smart-space",
    },
    {
      label: "Smart HVAC Management",
      link: "/solutions/smart-hvac",
    },
  ],
  [
    {
      label: "Intelligent Traffic Solution",
      link: "/solutions/intelligent-traffic-solution",
    },
    {
      label: "Indoor Air Quality",
      link: "/solutions/indoor-air-quality-monitoring",
    },
    {
      label: "People Counting",
      link: "/solutions/people-counting",
    },
    {
      label: "Space Occupancy",
      link: "/solutions/smart-space-occupancy",
    },
  ],
  [
    {
      label: "Smart Building",
      link: "/solutions/smart-building",
    },
    {
      label: "Energy Efficiency",
      link: "/solutions/energy-efficiency",
    },
    {
      label: "Smart City",
      link: "/solutions/smart-city",
    },
    {
      label: "Waste Management",
      link: "/solutions/waste-management",
    },
  ],
  [
    {
      label: "Smart Agriculture",
      link: "/solutions/waste-management",
    },
  ],
];

const Solutions = () => {
  const { closeMenu } = useMenu();

  return (
    <div className="flex justify-center items-center h-fit   p-6 absolute sm:w-[52rem] sm:ml-60 mt-2 rounded-2xl sm:h-[14rem] mx-auto z-50 bg-white/30 backdrop-blur-[6px] ">
      <div className="grid grid-cols-2 md:grid-cols-4  gap-10 md:gap-5">
        {solutionsData.map((column, colIndex) => (
          <div key={colIndex}>
            <ul className="space-y-2">
              {column.map((item, index) => (
                <li key={index} onClick={closeMenu}>
                  <a
                    href={item.link}
                    className="text-white text-[14px] sm:text-[0.9rem] hover:text-[#7CCA9A] transition-colors duration-300 buttonAnim2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;

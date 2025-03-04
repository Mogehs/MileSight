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
    // {
    //   label: "Energy Efficiency",
    //   link: "/solutions/energy-efficiency",
    // },
    {
      label: "Smart City",
      link: "/solutions/smart-city",
    },
    {
      label: "Waste Management",
      link: "/solutions/waste-management",
    },
  ],
];

const Solutions = () => {
  const { closeMenu } = useMenu();

  return (
    <div className="flex justify-center items-center h-fit bg-gray-50 p-6 absolute w-full z-50">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
        {solutionsData.map((column, colIndex) => (
          <div key={colIndex}>
            <ul className="space-y-2">
              {column.map((item, index) => (
                <li key={index} onClick={closeMenu}>
                  <a
                    href={item.link}
                    className="text-gray-700 text-[12px] sm:text-[14px] hover:text-[#7CCA9A] transition-colors duration-300"
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

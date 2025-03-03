import ground from "/Explore/ground.png";
import airport from "/Explore/airport.png";
import government from "/Explore/government.png";
import healthcare from "/Explore/healthcare.png";
import safecity from "/Explore/safecity.png";
import residential from "/Explore/residential.png";
import energy from "/Explore/energy.png";
import commercial from "/Explore/commercial.png";

export default function Explore() {
  return (
    <div className="w-full p-4 mt-10">
      {/* Grid Layout - 6 columns, 3 rows */}
      <div className="grid grid-cols-1  gap-4">
        {/* Row 1 */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div
            className="cursor-pointer  flex justify-center flex-col items-start bg-cover bg-center text-white p-4  relative overflow-hidden h-40 group"
            style={{ backgroundImage: `url(${ground})` }}
          >
            <p className="font-semibold text-2xl">Education </p>
            <div className="absolute bottom-[-20px] group-hover:bottom-10 transition-all duration-300 ease-in-out">
              <p className="text-xs">
                Create a better environment for staff and students
              </p>
            </div>
          </div>

          <div
            className=" cursor-pointer  flex justify-center flex-col items-start   bg-cover bg-center p-4 text-white relative overflow-hidden h-40 group"
            style={{ backgroundImage: `url(${airport})` }}
          >
            <p className="font-semibold text-2xl">Airport</p>
            <div className="absolute bottom-[-20px] group-hover:bottom-10 transition-all duration-300 ease-in-out">
              <p className="text-xs">
                Increasing efficiency, reducing security risks
              </p>
            </div>
          </div>

          <div
            className=" cursor-pointer  flex justify-center flex-col items-start   bg-cover bg-center p-4 text-white relative overflow-hidden h-40 group"
            style={{ backgroundImage: `url(${government})` }}
          >
            <p className="font-semibold text-2xl">Government</p>
            <div className="absolute bottom-[-20px] group-hover:bottom-10 transition-all duration-300 ease-in-out">
              <p className="text-xs">
                Protecting government facilities and public safety
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div
            className="cursor-pointer  flex justify-center flex-col items-start   bg-cover bg-center p-4 text-white relative overflow-hidden h-40 group"
            style={{ backgroundImage: `url(${healthcare})` }}
          >
            <p className="font-semibold text-2xl">Healthcare Security</p>
            <div className="absolute bottom-[-20px] group-hover:bottom-10 transition-all duration-300 ease-in-out">
              <p className="text-xs">
                Ensuring a secure healthcare environment
              </p>
            </div>
          </div>

          {/* Center Section */}

          <div className="  bg-cover bg-center p-4 flex items-end justify-center">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-xl lg:text-3xl font-semibold">
                Explore Success Cases
              </h1>
              <div className="flex justify-center flex-col items-center w-full lg:w-[70%] rounded-lg py-2 cursor-pointer mt-2 border border-gray-400 transition-all duration-300 bg-[#00667C] hover:bg-[#7CCA9A] text-white">
                <a href="/resources/academy/product-training">
                  <span>View All Stories</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="cursor-pointer  flex justify-center flex-col items-start   bg-cover bg-center p-4 text-white relative overflow-hidden h-40 group"
            style={{ backgroundImage: `url(${safecity})` }}
          >
            <p className="font-semibold text-2xl">Safe City</p>
            <div className="absolute bottom-[-20px] group-hover:bottom-10 transition-all duration-300 ease-in-out">
              <p className="text-xs">Round-the-clock surveillance</p>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            className="cursor-pointer  flex justify-center flex-col items-start   bg-cover bg-center p-4 text-white relative overflow-hidden h-40 group"
            style={{ backgroundImage: `url(${energy})` }}
          >
            <p className="font-semibold text-2xl">Energy</p>
            <div className="absolute bottom-[-20px] group-hover:bottom-10 transition-all duration-300 ease-in-out">
              <p className="text-xs">
                Boosting security, efficiency, and eco-friendliness
              </p>
            </div>
          </div>

          <div
            className="cursor-pointer  flex justify-center flex-col items-start   bg-cover bg-center p-4 text-white relative overflow-hidden h-40 group"
            style={{ backgroundImage: `url(${commercial})` }}
          >
            <p className="font-semibold text-2xl">Commercial</p>
            <div className="absolute bottom-[-20px] group-hover:bottom-10 transition-all duration-300 ease-in-out">
              <p className="text-xs">
                Enhance Security, analyze customer flow, maximize business
              </p>
            </div>
          </div>

          <div
            className="cursor-pointer  flex justify-center flex-col items-start   bg-cover bg-center p-4 text-white relative overflow-hidden h-40 group"
            style={{ backgroundImage: `url(${residential})` }}
          >
            <p className="font-semibold text-xl md:text-2xl">
              Residential Safety
            </p>
            <div className="absolute bottom-[-20px] group-hover:bottom-10 transition-all duration-300 ease-in-out">
              <p className="text-xs">
                Monitors surroundings and safeguard property
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

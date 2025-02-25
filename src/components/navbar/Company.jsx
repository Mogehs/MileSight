import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="absolute left-0 w-full text-black shadow-lg bg-white py-8 h-screen md:h-[13rem]">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-start gap-12 px-6">
        {/* Column 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-4">
          <h2 className="text-xl font-semibold mb-4">Corporate Info</h2>
          <ul>
            {["About Us", "Our Brand", "Events", "Impact Awards"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    to=""
                    className="block hover:text-[#0299f4] text-sm font-medium transition duration-200"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-4">
          <h2 className="text-xl font-semibold mb-4">Library</h2>
          <ul>
            {["Blog", "News", "Newsletter"].map((item, index) => (
              <li key={index}>
                <Link
                  to=""
                  className="block hover:text-[#0299f4] text-sm font-medium transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Company;

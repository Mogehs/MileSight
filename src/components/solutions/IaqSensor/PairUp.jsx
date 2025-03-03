import cam1 from "/IaqAdvanced/wireless.png";
import cam2 from "/IaqAdvanced/lorawan.png";
import airoad from "/IaqAdvanced/cames.png";
import aiplus from "/IaqAdvanced/demo.png";
import free from "/IaqAdvanced/free.png";

export default function PairUp() {
  const data = [
    {
      img: cam1,
      title: "IoT Controller UC300",
      title2: "Empower Automatic and Intelligent Control",
      features: [
        "Bridge Modbus Data between Serial and Ethernet Network",
        "Integrated Rich Interfaces: DI / DO / AI / RS232 / RS485 / PT100 / RTD Input",
        "Autonomous Operation when the Network is Unavailable",
        "Milesight D2D with Communication Latency to ‹ 1 Sec",
      ],
      learn: "Learn More",
      btn: "What Is Milesight D2D",
    },
    {
      img: cam2,
      title: "LoRaWAN® Gateways",
      title2: "Enable All-Round Connectivity",
      features: [
        "Handle Massive Sensor Data Efficiently",
        "Handle Higher Amount of Traffic with Lower Consumption",
        "Extraordinary Features: Noise Analyzer, Multicast, Gateway fleet",
        "Support BACnet (UG56/65/67)",
        "Embedded Node-RED Development Tool and Python SDK(UG56/65/67)",
      ],
      learn: "Learn More",
      btn: "What Is LoRaWAN®",
    },
    {
      img: airoad,
      title: "Milesight IoT Cloud",
      title2: "Stay informed and control from anywhere",
      features: [
        "PCustom Multiple Combinations of Conditions and Triggers",
        "Allow Admin to Check and Export Daily/Weekly/Monthly Reports",
        "Visualized Dashboard & Intuitive Widgets",
        "Drag and Drop Experience & Full Screen Mode Available",
      ],
      learn: "Learn More",
    },
    {
      img: aiplus,
      title: "IAQ Data at A Glance",
      title2: "Clear Your Doubts",
      features: [
        "Never used Milesight IoT Cloud before?",
        "That’s why we have prepared an online demo for you here!",
      ],
      btn: "Explore IAQ Demo",
      free: free,
    },
  ];

  return (
    <div className="w-full h-fit mt-4 p-4">
      <h1 className="text-center font-semibold md:text-4xl mb-4 text-[#00667C]">
        Pair up Our Products to Unlock Features
      </h1>
      <div className="w-full mx-auto sm:w-11/12 h-fit sm:mt-6 mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            className="relative w-full h-fit flex px-2 flex-col lg:flex-row justify-center items-center pr-2 border border-gray-300 rounded-md cursor-pointer hover:shadow hover:shadow-gray-400 p-4"
            key={index}
          >
            {item.free && (
              <img
                src={item.free}
                alt="Free"
                className="absolute top-0 right-0 w-12 h-12"
              />
            )}
            <img src={item.img} alt="missing" className="w-32 h-auto" />
            <div className="mt-2 gap-2 w-full">
              <h1 className="text-xs sm:text-xl font-semibold mt-2 text-[#00667C]">
                {item.title}
              </h1>
              {item.title2 && (
                <h1 className="text-lg font-semibold mt-2 text-[#00667C]">
                  {item.title2}
                </h1>
              )}
              <ul className="mt-2 text-sm  list-disc marker:text-[#7CCA9A] pl-4">
                {item.features.map((feature, i) => (
                  <li key={i} className="text-xs">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-4">
                {item.learn && (
                  <button
                    className="text-[#00667C] text-xs sm:text-sm font-semibold hover:underline"
                    onClick={() =>
                      window.open(
                        "/instructions-pdf/milesight-network-camera-quick-start-guide.pdf",
                        "_blank"
                      )
                    }
                  >
                    {item.learn}
                  </button>
                )}
                {item.btn && (
                  <button
                    className="text-xs lg:text-lg rounded-2xl bg-[#00667C] text-white hover:bg-[#7CCA9A] hover:text-[#00667C] px-4 py-2 mt-2 scale-[0.6] transform transition-all ease-in delay-100 hover:scale-[0.7] cursor-pointer"
                    onClick={() =>
                      window.open(
                        "/instructions-pdf/milesight-network-camera-quick-start-guide.pdf",
                        "_blank"
                      )
                    }
                  >
                    {item.btn}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

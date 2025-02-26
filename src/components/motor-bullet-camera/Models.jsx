import {
  models,
  analyticSpecifications,
  videoSpecifications,
  audioSpecifications,
  generalSpecifications,
  networkSpecifications,
  cameraSpecifications,
  lensSpecifications,
  interfaceSpecifications,
  systemSpecifications,
} from "./specs";

const Models = () => {
  return (
    <div className="w-[70%] mx-auto my-20">
      <div>
        <h1 className="text-[2rem]">Specifications</h1>
        <div className="mt-3">
          {models.map((spec, index) => (
            <div key={index}>
              <h1 className="font-semibold mt-7">{spec.title}</h1>
              <ul className="flex items-center gap-5 mt-2 text-gray-500">
                {spec.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10">
        <h1 className="font-semibold text-[1.5rem]">Camera</h1>
        <hr className="border-t border-gray-400 mt-4" />
        <div className="w-[80%] mt-6">
          {cameraSpecifications.map((spec, index) => (
            <div
              key={index}
              className="grid grid-cols-3 w-full py-4 text-gray-700"
            >
              <h1 className="col-span-1">{spec.label}</h1>
              <p className="col-span-2">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10">
        <h1 className="font-semibold text-[1.5rem]">Lens</h1>
        <hr className="border-t border-gray-400 mt-4" />
        <div className="w-[80%] mt-6">
          {lensSpecifications.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 w-full py-4 text-gray-700 ${
                index === 4 ? "gap-2" : ""
              }`}
            >
              <h1 className="col-span-1">{spec.label}</h1>
              <p className="col-span-2">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
        <h1 className="font-semibold text-[1.5rem]">Video</h1>
        <hr className="border-t border-gray-400 mt-4" />
        <div className="w-[80%] mt-6">
          {videoSpecifications.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 w-full py-4 text-gray-700`}
            >
              <h1 className="col-span-1">{spec.label}</h1>
              <p className="col-span-2">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
        <h1 className="font-semibold text-[1.5rem]">Interface</h1>
        <hr className="border-t border-gray-400 mt-4" />
        <div className="w-[80%] mt-6">
          {interfaceSpecifications.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 w-full py-4 text-gray-700`}
            >
              <h1 className="col-span-1">{spec.label}</h1>
              <p className="col-span-2">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
        <h1 className="font-semibold text-[1.5rem]">Network</h1>
        <hr className="border-t border-gray-400 mt-4" />
        <div className="w-[80%] mt-6">
          {networkSpecifications.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 w-full py-4 text-gray-700`}
            >
              <h1 className="col-span-1">{spec.label}</h1>
              <p className="col-span-2">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
        <h1 className="font-semibold text-[1.5rem]">Audio</h1>
        <hr className="border-t border-gray-400 mt-4" />
        <div className="w-[80%] mt-6">
          {audioSpecifications.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 w-full py-4 text-gray-700`}
            >
              <h1 className="col-span-1">{spec.label}</h1>
              <p className="col-span-2">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
        <h1 className="font-semibold text-[1.5rem]">Intelligent Analytics</h1>
        <hr className="border-t border-gray-400 mt-4" />
        <div className="w-[80%] mt-6">
          {analyticSpecifications.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 w-full py-4 text-gray-700`}
            >
              <h1 className="col-span-1">{spec.label}</h1>
              <p className="col-span-2">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
        <h1 className="font-semibold text-[1.5rem]">System</h1>
        <hr className="border-t border-gray-400 mt-4" />
        <div className="w-[80%] mt-6">
          {systemSpecifications.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 w-full py-4 text-gray-700`}
            >
              <h1 className="col-span-1">{spec.label}</h1>
              <p className="col-span-2">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
        <h1 className="font-semibold text-[1.5rem]">General</h1>
        <hr className="border-t border-gray-400 mt-4" />
        <div className="w-[80%] mt-6">
          {generalSpecifications.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 w-full py-4 text-gray-700`}
            >
              <h1 className="col-span-1">{spec.label}</h1>
              <p className="col-span-2">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;

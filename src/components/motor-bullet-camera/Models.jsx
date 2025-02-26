import { useState } from "react";
import {
  allModels,
  cameraSpecifications1,
  lensSpecifications1,
  videoSpecifications1,
  interfaceSpecifications1,
  networkSpecifications1,
  audioSpecifications1,
  analyticSpecifications1,
  systemSpecifications1,
  generalSpecifications1,
  cameraSpecifications2,
  lensSpecifications2,
  videoSpecifications2,
  interfaceSpecifications2,
  networkSpecifications2,
  audioSpecifications2,
  analyticSpecifications2,
  systemSpecifications2,
  generalSpecifications2,
  cameraSpecifications3,
  lensSpecifications3,
  videoSpecifications3,
  interfaceSpecifications3,
  networkSpecifications3,
  audioSpecifications3,
  analyticSpecifications3,
  systemSpecifications3,
  generalSpecifications3,
  cameraSpecifications4,
  lensSpecifications4,
  videoSpecifications4,
  interfaceSpecifications4,
  networkSpecifications4,
  audioSpecifications4,
  analyticSpecifications4,
  systemSpecifications4,
  generalSpecifications4,
  cameraSpecifications5,
  lensSpecifications5,
  videoSpecifications5,
  interfaceSpecifications5,
  networkSpecifications5,
  audioSpecifications5,
  analyticSpecifications5,
  systemSpecifications5,
  generalSpecifications5,
  cameraSpecifications6,
  lensSpecifications6,
  videoSpecifications6,
  interfaceSpecifications6,
  networkSpecifications6,
  audioSpecifications6,
  analyticSpecifications6,
  systemSpecifications6,
  generalSpecifications6,
  cameraSpecifications7,
  lensSpecifications7,
  videoSpecifications7,
  interfaceSpecifications7,
  networkSpecifications7,
  audioSpecifications7,
  analyticSpecifications7,
  systemSpecifications7,
  generalSpecifications7,
  cameraSpecifications8,
  lensSpecifications8,
  videoSpecifications8,
  interfaceSpecifications8,
  networkSpecifications8,
  audioSpecifications8,
  analyticSpecifications8,
  systemSpecifications8,
  generalSpecifications8,
} from "./specs";

const modelSpecs = {
  "MS-C2975-R(T)F(I)PC": {
    Camera: cameraSpecifications1,
    Lens: lensSpecifications1,
    Video: videoSpecifications1,
    Interface: interfaceSpecifications1,
    Network: networkSpecifications1,
    Audio: audioSpecifications1,
    Analytics: analyticSpecifications1,
    System: systemSpecifications1,
    General: generalSpecifications1,
  },
  "MS-C5375-F(I)PC": {
    Camera: cameraSpecifications2,
    Lens: lensSpecifications2,
    Video: videoSpecifications2,
    Interface: interfaceSpecifications2,
    Network: networkSpecifications2,
    Audio: audioSpecifications2,
    Analytics: analyticSpecifications2,
    System: systemSpecifications2,
    General: generalSpecifications2,
  },
  "MS-C8175-F(I)PC": {
    Camera: cameraSpecifications3,
    Lens: lensSpecifications3,
    Video: videoSpecifications3,
    Interface: interfaceSpecifications3,
    Network: networkSpecifications3,
    Audio: audioSpecifications3,
    Analytics: analyticSpecifications3,
    System: systemSpecifications3,
    General: generalSpecifications3,
  },
  "MS-C5375-FPDB": {
    Camera: cameraSpecifications4,
    Lens: lensSpecifications4,
    Video: videoSpecifications4,
    Interface: interfaceSpecifications4,
    Network: networkSpecifications4,
    Audio: audioSpecifications4,
    Analytics: analyticSpecifications4,
    System: systemSpecifications4,
    General: generalSpecifications4,
  },
  "MS-C2975-(R)FPD": {
    Camera: cameraSpecifications5,
    Lens: lensSpecifications5,
    Video: videoSpecifications5,
    Interface: interfaceSpecifications5,
    Network: networkSpecifications5,
    Audio: audioSpecifications5,
    Analytics: analyticSpecifications5,
    System: systemSpecifications5,
    General: generalSpecifications5,
  },
  "MS-C4575-FPD": {
    Camera: cameraSpecifications6,
    Lens: lensSpecifications6,
    Video: videoSpecifications6,
    Interface: interfaceSpecifications6,
    Network: networkSpecifications6,
    Audio: audioSpecifications6,
    Analytics: analyticSpecifications6,
    System: systemSpecifications6,
    General: generalSpecifications6,
  },
  "MS-C5375-FPD": {
    Camera: cameraSpecifications7,
    Lens: lensSpecifications7,
    Video: videoSpecifications7,
    Interface: interfaceSpecifications7,
    Network: networkSpecifications7,
    Audio: audioSpecifications7,
    Analytics: analyticSpecifications7,
    System: systemSpecifications7,
    General: generalSpecifications7,
  },
  "MS-C8175-(S)FPD": {
    Camera: cameraSpecifications8,
    Lens: lensSpecifications8,
    Video: videoSpecifications8,
    Interface: interfaceSpecifications8,
    Network: networkSpecifications8,
    Audio: audioSpecifications8,
    Analytics: analyticSpecifications8,
    System: systemSpecifications8,
    General: generalSpecifications8,
  },
};

const Models = () => {
  const [selectedCategory, setSelectedCategory] = useState(allModels[0]);
  const [selectedModel, setSelectedModel] = useState(selectedCategory.items[0]);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-20 overflow-hidden">
      <h1 className="text-xl md:text-2xl font-semibold">Specifications</h1>

      {/* Category Selection */}
      <div className="flex flex-wrap gap-3 mt-4">
        {allModels.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg text-sm md:text-base ${
              selectedCategory.title === category.title
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedModel(category.items[0]);
            }}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Model Selection */}
      <div className="flex flex-wrap gap-3 mt-4">
        {selectedCategory.items.map((model, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-md border text-sm md:text-base ${
              selectedModel === model
                ? "bg-sky-600 text-white"
                : "border-gray-400"
            }`}
            onClick={() => setSelectedModel(model)}
          >
            {model}
          </button>
        ))}
      </div>

      {/* Specifications1 Display */}
      <div className="my-10">
        {modelSpecs[selectedModel] ? (
          Object.entries(modelSpecs[selectedModel]).map(
            ([category, specs], idx) => (
              <div key={idx} className="my-8">
                <h2 className="font-semibold text-lg md:text-xl ">
                  {category}
                </h2>
                <hr className="border-t border-gray-400 mt-3" />

                <div className="w-full mt-4 my-12">
                  <div className="grid grid-cols-3 text-[0.6rem]  sm:text-sm  sm:gap-5 md:text-base">
                    {specs.map((spec, index) => (
                      <>
                        <h3
                          className={`font-medium  col-span-1 border-[1px] border-gray-400 border-t-[0px] border-l-[1px]  p-2 sm:border-none sm:p-0 text-gray-600 ${
                            index === 0 && "border-t-[1px]"
                          }`}
                        >
                          {spec.label}
                        </h3>
                        <p
                          className={`text-gray-700 col-span-2 border-gray-400 border-b-[1px] border-r-[1px] p-2 sm:p-0 sm:border-none ${
                            index === 0 && "border-t-[1px]"
                          }`}
                        >
                          {Array.isArray(spec.value)
                            ? spec.value.join(", ")
                            : spec.value}
                        </p>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            )
          )
        ) : (
          <p className="text-gray-500 mt-6">
            No specifications1 available for this model.
          </p>
        )}
      </div>
      <div className="mt-2 text-[0.8rem] text-gray-500 border-gray-300 border-t-1">
        <p className="mt-5">Naming Conventions</p>
        <ul>
          <li>R - High Frame Rate (60fps)</li>
          <li>T- High Frame Rate (100fps)</li>
          <li> F - Motorized Vari-focal Lens</li>
          <li> I- Pris Supported (Optional) P - PoE</li>
          <li> Supported C/D - A-Series</li>
        </ul>
      </div>
    </div>
  );
};

export default Models;

import acroom from "/IaqAdvanced/acroom.jpg";
export default function Indoor() {
  const data = [
    {
      title:
        "Did you know that heating and cooling buildings uses a lot of energy?",
      description:
        "According to USEPA, it could be up to 43 percent of all energy use in the United States. The main purposes of a Heating, Ventilation and Air-Conditioning (HVAC) system are to help maintain good indoor air quality (IAQ) through adequate ventilation with filtration and provide thermal comfort. HVAC systems are among the largest energy consumers in schools.In Demand Controlled Ventilation (DCV), IAQ sensors and IoT controllers are great helpers which are commonly used to measure the air composition in ventilation units to monitor and adjust the performance of HVAC systems and other indoor air quality management strategies.",
      btn: "Check How Milesight Helps Worldwide",
      img: acroom,
    },
  ];
  return (
    <div className=" w-full">
      <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
        <h1 className=" text-x md:text-3xl font-semibold text-center text-[#00667C]">
          Why Indoor Air Quality Monitoring Matters?
          <br />
          The Air Is More Helpful than You Think.
        </h1>

        <div className=" flex gap-4 mt-2 md:mt-8 px-4">
          {data.map((item, ind) => (
            <div
              key={ind}
              className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className=" w-full grid-cols-5">
                <img
                  src={item.img}
                  alt=""
                  className=" w-full md:w-[90%] h-full object-cover rounded-md shadow shadow-gray-400"
                />
              </div>
              <div className=" w-full grid-cols-8">
                <h1 className=" text-lg font-semibold mt-2 text-[#00667C]">
                  {item.title}
                </h1>
                <p className=" text-xs md:text-md text-gray-500 mt-2">
                  {item.description}
                </p>
                <button className=" text-xs md:text-lg rounded-2xl bg-[#00667C] text-white hover:bg-[#7CCA9A] hover:text-[#00667C] px-4 py-2 mt-2 scale-[0.9] transform transition-all ease-in delay-100  hover:scale-[1] cursor-pointer">
                  <a href="/resources/academy/product-training">{item.btn}</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

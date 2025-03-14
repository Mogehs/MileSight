

function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center bg-no-repeat p-4 flex flex-col justify-center gap-2 md:pl-16"
      style={{
        backgroundImage: "url('/partners/partner-program/partner-hero.jpg')",
      }}
    >
      <h2 className="md:text-[2rem] lg:text-[3rem] text-[25px] text-[#fff]">
        Technology Partner Program
      </h2>
      <p className="text-[#fff] md:text-[1rem] text-[20px] md:w-[48%]">
        Together, we can unlock potential sensing intelligence and go beyond the
        limits.
      </p>
      <div className="flex md:flex-row flex-col w-full items-center mt-4 gap-4">
        <button className="border border-white px-2 py-1 rounded-md bg-[#242529] text-white hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 w-full md:w-auto">
          Find a Technology Partner
        </button>
        <button className="border border-white px-2 py-1 rounded-md bg-[#242529] text-white hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 w-full md:w-auto">
          Become a Technology Partner
        </button>
      </div>
    </div>
  );
}

export default Hero;

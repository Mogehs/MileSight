function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center bg-no-repeat p-4 flex flex-col justify-center gap-2 md:pl-16"
      style={{
        backgroundImage: "url('/Solution/smart-agri/bg.jpg')",
      }}
    >
      <h2 className="md:text-[2rem] lg:text-[3rem] text-[25px] text-[#fff]">
        Smart Agriculture Solution
      </h2>
      <p className="text-[#fff] md:text-[1rem] text-[20px] md:w-[48%]">
        Bring Agriculture Efficiency with Sensing Technology
      </p>
    </div>
  );
}

export default Hero;

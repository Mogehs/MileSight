import React from "react";

function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center bg-no-repeat p-4 flex flex-col justify-center gap-2 md:pl-16"
      style={{
        backgroundImage: "url('/partners/project-registration/hero.jpg')",
      }}
    >
      <h2 className="md:text-[2rem] lg:text-[3rem] text-[25px] text-[#fff]">
        Project Registration
      </h2>
      <p className="text-[#fff] md:text-[1rem] text-[20px] md:w-[48%]">
        The Milesight Project Registration program gives our customers a
        competitive advantage to strengthen their position on projects with
        active additional support.
      </p>
    </div>
  );
}

export default Hero;

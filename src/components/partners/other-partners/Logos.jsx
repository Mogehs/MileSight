import React from "react";

const Logos = () => {
  let blogs = [1, 2, 4, 5, 6, 7, 7];
  return (
    <div>
      {" "}
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-10">
          {blogs.map((_, index) => (
            <div
              key={index}
              className="w-full sm:w-[16rem] md:w-[18rem] lg:w-[14rem]"
            >
              <img
                src="/partners/acam-cctv-solution.png"
                alt="Acam Technology Ltd"
                className="rounded-lg w-full object-cover"
              />
              <div className="text-[1rem] py-2">
                <h1 className="font-semibold">Acam Technology Ltd</h1>
                <p>
                  Country: United Kingdom
                  <br />
                  Tel.: +44 1332 382555
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;

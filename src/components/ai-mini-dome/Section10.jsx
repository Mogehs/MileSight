import React from "react";

function Section10() {
  return (
    <div
      className="h-[80vh] bg-no-repeat bg-cover bg-center flex flex-col justify-center md:px-8 px-2 gap-6 mb-8 text-white"
      style={{ backgroundImage: "url('/mini-dome/section10-img.jpg')" }}
    >
      <h2 className="md:text-[2.5rem] text-[20px] md:block hidden">
        SIP/VoIP Support
      </h2>
      <p className="md:w-[40%] md:block hidden">
        Milesight AI Camera features industry leading SIP/VoIP function and
        video <br />
        streaming for mobile phones and video phones.
      </p>
    </div>
  );
}

export default Section10;

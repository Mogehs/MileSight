import React from "react";

function Button({ text }) {
  return (
    <div className="text-center my-4">
      <button
        className="bg-[#0299f4] text-white p-2 text-sm md:text-[16px] md:p-4 text-nowrap rounded-lg hover:cursor-pointer"
        onClick={() =>
          window.open(
            "/instructions-pdf/milesight-network-camera-quick-start-guide.pdf",
            "_blank"
          )
        }
      >
        {text}
      </button>
    </div>
  );
}

export default Button;

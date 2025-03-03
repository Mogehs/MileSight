import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";

const Downloads = () => {
  const docs = [
    "Milesight-AI-Motorized-Dome-Network-Camera-NDAA-Datasheet-en",
    "Milesight-AI-Motorized-Dome-Network-Camera-Datasheet-en",
    "Milesight-AI-Motorized-Dome-Network-Camera-NDAA-Datasheet-en-Project-Based",
    "Milesight-Network-Camera-User-Manual",
    "Milesight-Network-Camera-User-Manual-AI-Series",
    "Milesight-Network-Camera-Quick-Start-Guide",
  ];

  return (
    <div className="max-w-4xl w-[90%] mx-auto p-4">
      <p className="font-medium text-2xl sm:text-2xl md:text-3xl text-left">
        Documents
      </p>
      <ul className="w-full my-6 space-y-4">
        {docs.map((item, idx) => (
          <React.Fragment key={idx}>
            <li className="flex items-center justify-between gap-4 p-3 rounded-md shadow-md transition-all hover:text-[#7CCA9A]">
              <a
                href="/instructions-pdf/milesight-network-camera-quick-start-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full text-black hover:text-[#7CCA9A] transition-all"
              >
                <IoDocumentTextOutline className="text-xl sm:text-2xl" />
                <span className="text-sm sm:text-base md:text-sm truncate">
                  {item.replace(/-/g, " ")}
                </span>
              </a>
              <a
                href={`/instructions-pdf/${item}.pdf`}
                download
                className=" hover:text-[#7CCA9A] transition-all"
              >
                <CiSaveDown2 className="text-xl hidden sm:inline sm:text-2xl" />
              </a>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Downloads;

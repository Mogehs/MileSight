import { FaDownload } from "react-icons/fa";
import pdfs from "/Diverse/pdfs.png";

export default function DownloadPdf() {
  const pdfData = [
    { img: pdfs, title: "Supported Regions List" },
    { img: pdfs, title: "White Paper: Intelligent Traffic Camera" },
    { img: pdfs, title: "Troubleshooting ANPR Solution" },
    { img: pdfs, title: "Brochure: Milesight Intelligent Traffic Camera" },
  ];

  return (
    <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
      <h1 className="text-2xl text-[#00667C] sm:text-4xl font-semibold text-center">
        Downloads
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {pdfData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start bg-white shadow-md rounded-lg p-4  hover:border-blue-400 transition "
          >
            <div className=" flex items-center ">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-26 object-contain mr-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <button
                  className=" mt-2 border border-gray-400 px-2 py-2 rounded-lg flex items-center gap-2 bg-[#00667C] hover:text-[#00667C] text-white shadow-md hover:bg-[#7CCA9A] transition hover:-translate-y-1.5 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "/instructions-pdf/milesight-network-camera-quick-start-guide.pdf",
                      "_blank"
                    )
                  }
                >
                  <FaDownload />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

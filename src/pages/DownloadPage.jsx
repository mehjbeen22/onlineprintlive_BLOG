import { useState } from "react";
import LoaderBar from "./LoderBar";

const DownloadPage = () => {
  const [isLoader, setIsLoader] = useState(true);
  const handleIsLoader = () => {
    setIsLoader(false);
  };
  return (
    <>
      {isLoader ? (
        <div className="bg-white text-[#701a75] h-80 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-8">
            Get Link to Download Drivers or Setup Printer
          </h2>
          <div className="flex gap-4">
            <button
              onClick={handleIsLoader}
              className="bg-[#701a75] text-white py-3 px-6 rounded-lg shadow hover:bg-[#7c0e30] transition duration-300"
            >
              Download for Windows
            </button>
            <button
              onClick={handleIsLoader}
              className="bg-[#701a75] text-white py-3 px-6 rounded-lg shadow hover:bg-[#7c0e30] transition duration-300"
            >
              Download for Mac
            </button>
          </div>
        </div>
      ) : (
        <LoaderBar />
      )}
    </>
  );
};

export default DownloadPage;

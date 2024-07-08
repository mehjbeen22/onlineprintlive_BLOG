import { useEffect, useState } from "react";

const LoaderBar = () => {
  const [width, setWidth] = useState(0);
  const [downloadFailed, setDownloadFailed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (width < 100) {
        setWidth((prevWidth) => prevWidth + 10);
      } else {
        clearInterval(interval);
        setDownloadFailed(true);
      }
    }, 2000); // Adjust the interval to change the speed (1000ms = 1 second)

    return () => clearInterval(interval);
  }, [width]);

  return (
    <main className="flex justify-center items-center p-10">
      <section className="bg-white w-[90%] p-10">
        <p className="bg-[#701a75] text-white p-5 text-3xl">Printer Connect</p>
        <div>
          <p className="text-lg mt-4">Downloading drivers......</p>

          <section className="h-4 bg-gray-300 overflow-hidden mt-10">
            <div
              className={`h-full ${
                width === 100 ? "bg-red-500" : "bg-green-500"
              } `}
              style={{
                width: `${width}%`,
                transition: "width 0.3s ease",
                minWidth: "10%",
              }}
            ></div>
          </section>
        </div>

        {/* Downloading Fail Section */}
        {downloadFailed && (
          <div className="mt-6">
            <p className="font-bold text-red-500 text-xl">
              DOWNLOADING FAILED!
            </p>
            <p className="text-lg">
              <span className="text-red-500 mr-4">X</span>Network Error:
              Download could not be completed!
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default LoaderBar;

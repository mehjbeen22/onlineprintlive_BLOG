import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

const Banner = () => {
  return (
    <div className="bg-[#701a75] p-8 rounded-lg mt-6">
      <section className="flex flex-col lg:flex-row justify-around items-center bg-white shadow-lg rounded-lg p-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col items-center space-y-2">
          <FileDownloadDoneIcon className="text-[#701a75]" fontSize="large" />
          <p className="text-xl font- text-[#701a75]">Super Efficient</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <FileDownloadDoneIcon className="text-[#701a75]" fontSize="large" />
          <p className="text-xl font-semibold text-[#701a75]">
            Deeply Committed
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <FileDownloadDoneIcon className="text-[#701a75]" fontSize="large" />
          <p className="text-xl font-semibold text-[#701a75]">Highly Skilled</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;

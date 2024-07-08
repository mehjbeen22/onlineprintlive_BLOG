import CheckBoxIcon from "@mui/icons-material/CheckBox";
import SetupPage from "./SetupPage";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <main className="bg-white text-[#701a75] min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-8 p-10">
          <section className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">
              Having Trouble With Printers?
            </h1>
            <h2 className="text-xl font-semibold mb-6">
              24X7 Expert Technical Support
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckBoxIcon className="text-[#701a75]" />
                <p>Set-up and Configure New Wireless Printer</p>
              </li>
              <li className="flex items-center gap-3">
                <CheckBoxIcon className="text-[#701a75]" />
                <p>Wi-Fi Connections Set-up</p>
              </li>
              <li className="flex items-center gap-3">
                <CheckBoxIcon className="text-[#701a75]" />
                <p>Install, Re-Install and Update New Drivers</p>
              </li>
              <li className="flex items-center gap-3">
                <CheckBoxIcon className="text-[#701a75]" />
                <p>Resolve Printer Offline Issue</p>
              </li>
            </ul>
            <p className="mt-8">
              Please contact our 24X7 Customer Support Service
            </p>
          </section>
          <section className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://img.freepik.com/free-photo/side-view-woman-using-printer-work_23-2149713704.jpg?t=st=1719986878~exp=1719990478~hmac=905989301b33c6ec49fc781e358d3ca7d80f9aca92d674ef4a80b3d3c718a856&w=740"
              alt="Printer Scanner"
              className="max-w-full rounded-lg shadow-lg object-cover max-h-[400px]"
            />
          </section>
        </div>

        <div className="flex justify-center space-x-4 bg-slate-300 p-5 shadow-inner">
          <Link
            // to="/downloaddrivers"
            className="bg-[#701a75] text-white py-2 px-4 rounded shadow hover:bg-[#86122b] transition duration-300"
          >
            New Printer Setup
          </Link>
          <Link
            // to="/downloaddrivers"
            className="bg-[#701a75] text-white py-2 px-4 rounded shadow hover:bg-[#86122b] transition duration-300"
          >
            Fix Online Printer
          </Link>
          <Link
            // to="/downloaddrivers"
            className="bg-[#701a75] text-white py-2 px-4 rounded shadow hover:bg-[#86122b] transition duration-300"
          >
            Update Printer Drivers
          </Link>
        </div>
      </main>

      <SetupPage />
    </>
  );
}

export default HomePage;

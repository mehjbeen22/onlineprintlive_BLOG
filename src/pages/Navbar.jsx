import PrintIcon from "@mui/icons-material/Print";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#701a75] text-white shadow-lg flex">
      <div>
        <Link to="/" className="container mx-auto px-4 py-2 flex items-center">
          <PrintIcon className="text-white mr-4" sx={{ fontSize: "3rem" }} />
          <div>
            <p className="text-lg font-bold">onlineprintlive</p>
            <p className="text-sm">Your Printer Solutions</p>
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center gap-10 ml-10">
        <Link to="/printerOffline" className="hover:text-[#f1f5f9]">
          Printer Offline
        </Link>
        <Link to="/printerSetup" className="hover:text-[#f1f5f9]">
          Printer Setup
        </Link>
        <Link to="/privacypolicy" className="hover:text-[#f1f5f9]">
          Privacy Policy
        </Link>
        <Link to="/blogs" className="hover:text-[#f1f5f9]">
          Blogs
        </Link>
        <Link to="/faqs" className="hover:text-[#f1f5f9]">
          FAQs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

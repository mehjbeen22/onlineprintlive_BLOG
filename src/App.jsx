import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./pages/Footer";
import DownloadPage from "./pages/DownloadPage";
import PrinterOffline from "./pages/services/PrinterOffline";
import PrinterSetupIssue from "./pages/services/PrinterSetupIssue";
import PrivacyPolicy from "./pages/services/PrivacyPolicy";
import FAQsPage from "./pages/services/Faqs";
import BlogPage from "./pages/services/blogs/BlogPage";
import BlogDetailPage from "./pages/services/blogs/BlogDetailPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/downloaddrivers" element={<DownloadPage />} />
        <Route path="/printerOffline" element={<PrinterOffline />} />
        <Route path="/printerSetup" element={<PrinterSetupIssue />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:blogId" element={<BlogDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

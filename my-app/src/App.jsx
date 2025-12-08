import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import { Routes, Route } from "react-router-dom";
import Saaspage from "./pages/Products/Saaspage";
import Crmpage from "./pages/Products/Crmpage";
import Erppage from "./pages/Products/Erppage";
import Lmspage from "./pages/Products/Lmspae";
import Billingpage from "./pages/Products/Billingpage";
import Floatingaction from "./components/Floatingaction";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <Floatingaction />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/saas" element={<Saaspage/>} />
        <Route path="/products/crm" element={<Crmpage/>} />
        <Route path="/products/erp" element={<Erppage/>} />
        <Route path="/products/lms" element={<Lmspage/>} />
        <Route path="/products/billing" element={<Billingpage/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

      

        
      </Routes>
      
    </>
  );
}

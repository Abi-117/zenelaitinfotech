import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Overview from "./pages/Overview";

import Crmpage from "./pages/Products/Crmpage";
import Erppage from "./pages/Products/Erppage";
import Lmspage from "./pages/Products/Lmspage";
import Billingpage from "./pages/Products/Billingpage";

import Floatingaction from "./components/Floatingaction";
import ScrollToTop from "./components/ScrollToTop";

import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// ADMIN
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminNavbarEdit from "./admin/AdminNavbarEdit";
import AdminHome from "./admin/AdminHome";
import AdminAbout from "./admin/AdminAbout";
import AdminService from "./admin/AdminService";
import AdminContactEdit from "./admin/AdminContact";
import AdminContactInbox from "./admin/AdminContactInbox";
import AdminProducts from "./admin/AdminProducts";
import AdminLms from "./admin/AdminLms";
import AdminFooter from "./admin/AdminFooter";
import AdminErp from "./admin/AdminErp";
import AdminCrm from "./admin/AdminCrm";
import AdminBilling from "./admin/AdminBilling";
import AdminOverview from "./admin/AdminOverview";


export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  // ✅ Check admin token
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAdmin(true);
    }
  }, []);

  // ✅ Hide Navbar + Footer in admin pages
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* MAIN WEBSITE HEADER */}
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <Floatingaction />}

      <ScrollToTop />

      <Routes>
        {/* MAIN WEBSITE ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

        <Route path="/products/crm" element={<Crmpage />} />
        <Route path="/products/erp" element={<Erppage />} />
        <Route path="/products/lms" element={<Lmspage />} />
        <Route path="/products/billing" element={<Billingpage />} />

        <Route path="/service" element={<Service />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/contact" element={<Contact />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/navbar" element={<AdminNavbarEdit />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/about" element={<AdminAbout />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/service" element={<AdminService />} />
        <Route path="/admin/contacts" element={<AdminContactEdit />} />
        <Route path="/admin/contact-inbox" element={<AdminContactInbox />} />
        <Route path="/admin/footer" element={<AdminFooter />} />
        <Route path="/admin/lms" element={<AdminLms />} />
        <Route path="/admin/erp" element={<AdminErp />} />
        <Route path="/admin/crm" element={<AdminCrm />} />   
        <Route path="/admin/billing" element={<AdminBilling />} /> 
        <Route path="/admin/overview" element={<AdminOverview />} />
        

        {/* ADMIN LOGIN / DASHBOARD */}
        <Route
          path="/admin"
          element={
            isAdmin ? (
              <AdminDashboard />
            ) : (
              <AdminLogin onLogin={setIsAdmin} />
            )
          }
        />
      </Routes>

      {/* MAIN WEBSITE FOOTER */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

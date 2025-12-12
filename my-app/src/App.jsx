import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

import Saaspage from "./pages/Products/Saaspage";
import Crmpage from "./pages/Products/Crmpage";
import Erppage from "./pages/Products/Erppage";
import Lmspage from "./pages/Products/Lmspae";
import Billingpage from "./pages/Products/Billingpage";

import Floatingaction from "./components/Floatingaction";
import ScrollToTop from "./components/ScrollToTop";

import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminNavbarEdit from "./admin/AdminNavbarEdit";
import AdminHomeEdit from "./admin/AdminHome";
import AdminAbout from "./admin/AdminAbout";


export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  // ✔ Check token on page load
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAdmin(true);
    }
  }, []);

  // ✔ Hide main website navbar in admin pages
  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbar && <Navbar />}
      {!hideNavbar && <Floatingaction />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Main Website Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/saas" element={<Saaspage />} />
        <Route path="/products/crm" element={<Crmpage />} />
        <Route path="/products/erp" element={<Erppage />} />
        <Route path="/products/lms" element={<Lmspage />} />
        <Route path="/products/billing" element={<Billingpage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin – Navbar Editor */}
        <Route path="/admin/navbar" element={<AdminNavbarEdit />} />
        <Route path="/admin/home" element={<AdminHomeEdit />} />
        <Route path="/admin/about" element={<AdminAbout />}></Route>


        {/* Admin – Login / Dashboard */}
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
    </>
  );
}

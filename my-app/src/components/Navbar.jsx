import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Logo from "../assets/logo-hover.png";
import HoverLogo from "../assets/zenlogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const [menuOpen, setMenuOpen] = useState(false);
  const [nav, setNav] = useState({
    home: "Home",
    about: "About",
    products: "Products",
    service: "Service",
    overview: "Overview",
    contact: "Contact",
    button: "Get Started →",
  });

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/navbar");
        if (res.data) setNav(res.data);
      } catch (error) {
        console.error("Failed to fetch navbar data:", error);
      }
    };

    fetchNavbar();
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <div className="logo-wrapper">
              <img src={Logo} className="logo normal" alt="Logo" />
              <img src={HoverLogo} className="logo hover" alt="Hover Logo" />
            </div>
          </Link>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>{nav.home}</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>{nav.about}</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>{nav.products}</Link></li>
          <li><Link to="/service" onClick={() => setMenuOpen(false)}>{nav.service}</Link></li>
          <li><Link to="/overview" onClick={() => setMenuOpen(false)}>{nav.overview} </Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>{nav.contact}</Link></li>

          {!isContactPage && (
            <li>
              <button
                className="btn"
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
              >
                {nav.button}
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/zenlogo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [nav, setNav] = useState({
    home: "Home",
    about: "About",
    products: "Products",
    service: "Service",
    contact: "Contact",
    button: "Get Started →"
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/navbar").then((res) => {
      if (res.data) setNav(res.data);
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>{nav.home}</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>{nav.about}</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>{nav.products}</Link></li>
          <li><Link to="/service" onClick={() => setMenuOpen(false)}>{nav.service}</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>{nav.contact}</Link></li>
          <li>
            <button className="btn" onClick={() => { navigate("/contact"); setMenuOpen(false); }}>
              {nav.button}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

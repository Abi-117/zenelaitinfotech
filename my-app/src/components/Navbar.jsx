import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/zenlogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <button className="btn" onClick={() => { navigate("/contact"); setMenuOpen(false); }}>
              Get Started →
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

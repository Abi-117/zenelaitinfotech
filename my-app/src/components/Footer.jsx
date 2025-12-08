import React from "react";
import "./Footer.css";
import Logo1 from "../assets/blizzen.png";
import { Link } from "react-router-dom";
import Footerlogo from "../assets/logo1.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO + TEXT */}
        <div className="footer-col">
          <a href="/">
          <img
            src={Footerlogo}
            alt="Zenelait Logo"
            className="footer-logo"
          /></a>
          <p className="footer-text">
            Leading provider of enterprise software
            solutions for businesses worldwide.
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="footer-col">
          <h3 className="footer-title">Products</h3>
          <ul>
            <li>
            <Link to="/products/saas" className="footer-link">SaaS Solutions</Link></li>
            <li><Link to="/products/erp"  className="footer-link">ERP Systems</Link></li>
             <li><Link to="/products/lms"  className="footer-link">Learning Management</Link></li>
             <li><Link to="/products/billing"  className="footer-link">Billing Software</Link></li>
             <li><Link to="/products/crm"  className="footer-link">Customer Relationship Management </Link> </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h3 className="footer-title">Company</h3>
          <ul>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/contact" className="footer-link">Contact </Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-col">
          <h3 className="footer-title">Contact Info</h3>
          <ul>
            <li>Anna Nagar, Chennai</li>
            <li>+91 9884264816</li>
            <li>zenelaitinfotech@gmail.com</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
  © 2025 Zenelait. All Rights Reserved.

  <p
    className="footer-para"
    style={{ display: "flex", alignItems: "center", gap: "5px" }}
  >
    Developed by{" "}
    <a
      href="https://www.blizzencreations.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="footerlogo" src={Logo1} alt="Blizzen Creations" />
    </a>
  </p>
</div>

    </footer>
  );
}

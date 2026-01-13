import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosBase"; // <-- use axios base
import Footerlogo from "../assets/logo1.png";
import Logo1 from "../assets/blizzen.png";
import "./Footer.css";

export default function Footer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .get("/api/footer") // <-- relative path
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO / Developed by */}
        <div className="footer-col">
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

        {/* PRODUCTS */}
        <div className="footer-col">
          <h3 className="footer-title">Products</h3>
          <ul>
            {(data?.products || []).map((p, i) => (
              <li key={i}>
                <Link to={p.link} className="footer-link">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h3 className="footer-title">Company</h3>
          <ul>
            {(data?.company || []).map((c, i) => (
              <li key={i}>
                <Link to={c.link} className="footer-link">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3 className="footer-title">Contact Info</h3>
          <ul>
            <li>{data?.address}</li>
            <li>{data?.phone}</li>
            <li>{data?.email}</li>
          </ul>
          <a href="/">
            <img src={Footerlogo} alt="Footer Logo" className="footer-logo" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        {data?.copyrightText}
      </div>
    </footer>
  );
}

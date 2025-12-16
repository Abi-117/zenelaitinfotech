import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Footerlogo from "../assets/logo1.png";
import Logo1 from "../assets/blizzen.png";


export default function Footer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/footer")
      .then((res) => setData(res.data));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-col">
          <a href="/">
            <img
              src={Footerlogo}
              alt="Footer Logo"
              className="footer-logo"
            />
          </a>
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
        </div>

      </div>

      <div className="footer-bottom">
        {data?.copyrightText}

        <p className="footer-para">
          Developed by{" "}
          <a
            href={data?.developerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footerlogo"
              src={data?.developerLogo}
              alt="Developer"
            />
          </a>
        </p>
      </div>
    </footer>
  );
}

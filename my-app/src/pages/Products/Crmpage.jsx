import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CTA from "../../components/Cta";
import "./Crmpage.css";
import Crmimg from "../../assets/crmbg.jpeg";

export default function Crmpage() {
  const navigate = useNavigate();
  const [crm, setCrm] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/crm")
      .then((res) => setCrm(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!crm) return <h2>Loading...</h2>;

  return (
    <div className="crm-page">
      {/* HERO */}
      <section className="crm-hero">
        <div className="hero-crmcontent">
          <h2>{crm.title}</h2>
          <p className="subtitle">{crm.subtitle}</p>

          <div className="hero-buttons">
            <button className="btn-demo" onClick={() => navigate("/contact")}>
              Request Demo
            </button>
            <button
              className="btn-products"
              onClick={() =>
                window.open("https://wa.me/919884264816", "_blank")
              }
            >
              More Details
            </button>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="crm-benefits">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h2>Key Benefits</h2>

        <div className="crm-benefits-wrapper">
          <ul>
            {crm.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <img src={Crmimg} alt="CRM Benefits" className="crm-benefits-img" />
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="crm-perfect-for">
        <h2>Perfect For</h2>
        <div className="audience-grid">
          {crm.perfectFor.map((item, i) => (
            <div className="audience-card" key={i}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CRM */}
      <section className="why-saas">
        <h2>Why Choose Zenelait CRM?</h2>
        <div className="why-grid">
          {crm.why.map((item, i) => (
            <div className="why-card" key={i}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}

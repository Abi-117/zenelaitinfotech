import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import CTA from "../../components/Cta";
import "./Erppage.css";
import axios from "axios";

export default function Erppage() {
  const navigate = useNavigate();
  const [erp, setErp] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/erp")
      .then(res => setErp(res.data))
      .catch(() => setErp(null));
  }, []);

  if (!erp) return null;

  return (
    <div className="erp-page">
      {/* HERO */}
      <section className="erp-hero">
        <div className="hero-erpcontent">
          <h2>{erp.heroTitle}</h2>
          <p className="subtitle">{erp.heroText}</p>

          <div className="hero-buttons">
            <button className="btn-demo" onClick={() => navigate("/contact")}>
              Request Demo
            </button>
            <button
              className="btn-products"
              onClick={() => window.open(erp.whatsapp, "_blank")}
            >
              More Details
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="erp-features">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <h2>{erp.featuresTitle}</h2>

        <div className="key-featureslist">
          <ul>
            {erp.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <img src={erp.featureImage} alt="ERP" className="key-features-img" />
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="erp-perfect-for">
        <h2>Perfect For</h2>
        <div className="audience-grid">
          {erp.perfectFor.map((p, i) => (
            <div className="audience-card" key={i}>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ERP */}
      <section className="why-erp">
        <h2>{erp.whyTitle}</h2>
        <div className="why-grid">
          {erp.why.map((w, i) => (
            <div className="why-card" key={i}>
              <h4>{w.title}</h4>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}

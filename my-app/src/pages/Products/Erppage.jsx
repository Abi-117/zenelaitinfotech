import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosBase"; // centralized axios instance
import CTA from "../../components/Cta";
import "./Erppage.css";
import Erppg from "../../assets/Erpbg.jpeg";

/* 🔥 DEFAULT SAFE STRUCTURE */
const defaultErp = {
  heroTitle: "",
  heroText: "",
  features: [],
  perfectFor: [],
  why: [],
};

export default function Erppage() {
  const navigate = useNavigate();
  const [erp, setErp] = useState(defaultErp);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchErp = async () => {
      try {
        const res = await api.get("/api/erp");
        const data = res.data || {};

        /* ✅ Normalize backend response */
        setErp({
          heroTitle: data.heroTitle || "",
          heroText: data.heroText || "",
          features: Array.isArray(data.features) ? data.features : [],
          perfectFor: Array.isArray(data.perfectFor) ? data.perfectFor : [],
          why: Array.isArray(data.why) ? data.why : [],
        });
      } catch (err) {
        console.error("ERP API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchErp();
  }, []);

  if (loading) return <h2 style={{ padding: 20 }}>Loading...</h2>;

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
              onClick={() => window.open("https://wa.me/919884264816", "_blank")}
            >
              More Details
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="erp-features">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h2>Features</h2>
        <div className="key-featureslist">
          <ul>
            {erp.features.length === 0 ? (
              <li>No features available</li>
            ) : (
              erp.features.map((f, i) => <li key={i}>{f}</li>)
            )}
          </ul>
          <img src={Erppg} alt="ERP decoration" className="key-features-img" />
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="erp-perfect-for">
        <h2>Perfect For</h2>
        <div className="audience-grid">
          {erp.perfectFor.length === 0 ? (
            <p>No data available</p>
          ) : (
            erp.perfectFor.map((p, i) => (
              <div className="audience-card" key={i}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* WHY ERP */}
      <section className="why-erp">
        <h2>Why Choose ERP</h2>
        <div className="why-grid">
          {erp.why.length === 0 ? (
            <p>No data available</p>
          ) : (
            erp.why.map((w, i) => (
              <div className="why-card" key={i}>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))
          )}
        </div>
      </section>

      <CTA />
    </div>
  );
}

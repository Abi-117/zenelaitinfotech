import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosBase"; // centralized axios instance
import CTA from "../../components/Cta";
import "./Lmspage.css";
import Lmsimg from "../../assets/lmsbg.jpeg";

/* 🔥 DEFAULT SAFE STRUCTURE */
const defaultLms = {
  heroTitle: "",
  heroText: "",
  features: [],
  perfectFor: [],
  whyChoose: [],
  benefits: [],
};

export default function Lmspage() {
  const navigate = useNavigate();
  const [lms, setLms] = useState(defaultLms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLms = async () => {
      try {
        const res = await api.get("/api/lms");
        const data = res.data || {};

        setLms({
          heroTitle: data.heroTitle || "",
          heroText: data.heroText || "",
          features: Array.isArray(data.features) ? data.features : [],
          perfectFor: Array.isArray(data.perfectFor) ? data.perfectFor : [],
          whyChoose: Array.isArray(data.whyChoose) ? data.whyChoose : [],
          benefits: Array.isArray(data.benefits) ? data.benefits : [],
        });
      } catch (err) {
        console.error("LMS API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLms();
  }, []);

  if (loading) return <h2 style={{ padding: 20 }}>Loading...</h2>;

  return (
    <div className="lms-page">
      {/* HERO */}
      <section className="lms-hero">
        <div className="hero-lmscontent">
          <h2>{lms.heroTitle}</h2>
          <p className="subtitle">{lms.heroText}</p>
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
      <section className="lms-features">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h2>Key Features</h2>
        <div className="lms-list">
          <ul>
            {lms.features.length === 0 ? (
              <li>No features available</li>
            ) : (
              lms.features.map((f, i) => <li key={i}>{f}</li>)
            )}
          </ul>
          <img src={Lmsimg} alt="LMS decoration" className="lms-features-img" />
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="lms-perfect-for">
        <h2>Perfect For</h2>
        <div className="audience-grid">
          {lms.perfectFor.length === 0 ? (
            <p>No data available</p>
          ) : (
            lms.perfectFor.map((p, i) => (
              <div className="audience-card" key={i}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-lms">
        <h2>Why Choose Zenelait LMS?</h2>
        <div className="why-grid">
          {lms.whyChoose.length === 0 ? (
            <p>No data available</p>
          ) : (
            lms.whyChoose.map((w, i) => (
              <div className="why-card" key={i}>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="lms-benefits">
        <h2>Benefits of Zenelait LMS</h2>
        <div className="benefits-grid">
          {lms.benefits.length === 0 ? (
            <p>No benefits available</p>
          ) : (
            lms.benefits.map((b, i) => (
              <div className="benefit-card" key={i}>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))
          )}
        </div>
      </section>

      <CTA />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CTA from "../../components/Cta";
import "./Saaspage.css";
import Saasbg from "../../assets/Saasbg.jpeg";

const API = "http://localhost:5000";

export default function Saaspage() {
  const navigate = useNavigate();
  const [saas, setSaas] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/api/saas`)
      .then((res) => {
        setSaas(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (!saas) return <p className="loading">No Data Found</p>;

  return (
    <div className="saas-page">
      {/* HERO */}
      <section
        className="saas-hero"
        style={{
          backgroundImage: saas.heroImage
            ? `url(${API}/uploads/${saas.heroImage})`
            : "none"
        }}
      >
        <div className="hero-overlay">
          <div className="hero-saascontent">
            <h1>{saas.heroTitle}</h1>
            <p className="subtitle">{saas.heroText}</p>

            <div className="hero-buttons">
              <button
                className="btn-demo"
                onClick={() => navigate("/contact")}
              >
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
        </div>
      </section>

      {/* FEATURES */}
      {saas.features?.length > 0 && (
        <section className="saas-dashboard">
          <button className="back-btn" onClick={() => navigate(-1)}>
   ← Back
</button>
          <h2>What We Provide</h2>
          <div className="key-featureslisted">
          <ul className="feature-list">
            {saas.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <img
            src={Saasbg} 
            alt="SaaS decoration"
            className="key-features-img"
          />
          </div>
        </section>
      )}

      {/* PERFECT FOR */}
      {saas.perfectFor?.length > 0 && (
        <section className="perfect-for">
          <h2>Perfect For</h2>
          <div className="audience-grid">
            {saas.perfectFor.map((p, i) => (
              <div className="audience-card" key={i}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* WHY CHOOSE */}
      {saas.whyChoose?.length > 0 && (
        <section className="why-saas">
          <h2>Why Choose Zenelait SaaS Solutions?</h2>
          <div className="why-grid">
            {saas.whyChoose.map((w, i) => (
              <div className="why-card" key={i}>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <CTA />
    </div>
  );
}

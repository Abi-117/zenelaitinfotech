import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import CTA from "../../components/Cta";
import "./Saaspage.css";

export default function Saaspage() {
  const navigate = useNavigate();

  const [saas, setSaas] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/saas")
      .then(res => setSaas(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!saas) return <p>Loading...</p>;

  return (
    <div className="saas-page">

      {/* HERO */}
      <section className="saas-hero">
        <div className="hero-saascontent">
          <h1>{saas.heroTitle}</h1>
          <p className="subtitle">{saas.heroText}</p>

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

      {/* FEATURES */}
      <section className="saas-dashboard">
        <h2>What We Provide</h2>
        <ul>
          {saas.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      {/* PERFECT FOR */}
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

      {/* WHY CHOOSE */}
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

      <CTA />
      <Footer />
    </div>
  );
}

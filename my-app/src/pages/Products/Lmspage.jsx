import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CTA from "../../components/Cta";
import "./Lmspage.css";
import Lmsimg from "../../assets/lmsbg.jpeg";

export default function Lmspage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/lms").then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="lms-page">
      {/* HERO */}
      <section className="lms-hero">
        <div className="hero-lmscontent">
          <h2>{data.heroTitle}</h2>
          <p className="subtitle">{data.heroText}</p>

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
      <section className="lms-features">
        <button className="back-btn" onClick={() => navigate(-1)}>
   ← Back
</button>
        <h2>Key Features</h2>
         <div className="lms-list">
        <ul>
          {data.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
         <img
      src={Lmsimg} 
      alt="LMS decoration"
      className="lms-features-img"
    />
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="lms-perfect-for">
        <h2>Perfect For</h2>
        <div className="audience-grid">
          {data.perfectFor.map((p, i) => (
            <div className="audience-card" key={i}>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-lms">
        <h2>Why Choose Zenelait LMS?</h2>
        <div className="why-grid">
          {data.whyChoose.map((w, i) => (
            <div className="why-card" key={i}>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="lms-benefits">
        <h2>Benefits of Zenelait LMS</h2>
        <div className="benefits-grid">
          {data.benefits.map((b, i) => (
            <div className="benefit-card" key={i}>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      
    </div>
  );
}

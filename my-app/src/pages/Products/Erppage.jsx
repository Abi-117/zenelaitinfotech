import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CTA from "../../components/Cta";
import "./Erppage.css";
import Erppg from "../../assets/Erpbg.jpeg";

const API = "http://localhost:5000";

export default function Erppage() {
  const navigate = useNavigate();
  const [erp, setErp] = useState(null);

  useEffect(() => {
    axios.get(`${API}/api/erp`)
      .then(res => setErp(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!erp) return <p>Loading...</p>;

  return (
    <div className="erp-page">
      <section className="erp-hero">
        <div className="hero-erpcontent">
        <h2>{erp.heroTitle}</h2>
        <p>{erp.heroText}</p>
         <div className="hero-buttons">
        
        <button
              className="btn-demo"
              onClick={() => navigate("/contact")}
            >
              Request Demo
            </button>
        <button
            className="btn-products"
            onClick={() => {
              window.open("https://wa.me/919884264816", "_blank");
            }}
          >
            More Details
          </button>
        </div>
        </div>
      </section>

      <section className="erp-features">
        <button className="back-btn" onClick={() => navigate(-1)}>
   ← Back
</button>
        <h2>Features</h2>
        <div className="key-featureslist">
        <ul>
          {erp.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <img
      src={Erppg} 
      alt="ERP decoration"
      className="key-features-img"
    />
  </div>
      </section>

      <section className="erp-perfect-for">
        <h2>Perfect For</h2>
        <div className="audience-grid">
        
        {erp.perfectFor.map((p, i) => (
          <div className="audience-card" key={i}>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
        </div>
      </section>

      <section className="why-erp">
        
        <h2>Why Choose ERP</h2>
        <div className="why-grid">
        {erp.why.map((w, i) => (
          <div className="why-card" key={i}>
            <h4>{w.title}</h4>
            <p>{w.desc}</p>
            
          </div>
        ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}

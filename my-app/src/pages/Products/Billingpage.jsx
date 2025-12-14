import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import CTA from "../../components/Cta";
import "./Billingpage.css";
import Billingimg from "../../assets/billingbg.jpeg";

export default function Billingpage() {
  const navigate = useNavigate();
  const [billing, setBilling] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/billing")
      .then((res) => setBilling(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!billing) return <h2>Loading...</h2>;

  return (
    <div className="billing-page">
      {/* HERO */}
      <section className="billing-hero">
        <div className="hero-contents">
          <h2>{billing.title}</h2>
          <p className="subtitle">{billing.subtitle}</p>

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
      <section className="billing-features">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h2>Key Benefits</h2>

        <div className="billing-features-wrapper">
          <ul>
            {billing.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <img
            src={Billingimg}
            alt="Billing features"
            className="billing-features-img"
          />
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="billing-perfect-for">
        <h2>Perfect For</h2>
        <div className="audience-grid">
          {billing.perfectFor.map((item, i) => (
            <div className="audience-card" key={i}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BILLING */}
      <section className="billing-why">
        <h2>Why Choose Our Billing Software?</h2>
        <div className="why-grid">
          {billing.why.map((item, i) => (
            <div className="why-card" key={i}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="billing-industries">
        <h2>Industries We Serve</h2>
        <div className="industry-grid">
          {billing.industries.map((ind, i) => (
            <span key={i}>{ind}</span>
          ))}
        </div>
      </section>

      {/* REPORTS */}
      <section className="billing-reports">
        <h2>Powerful Reports & Analytics</h2>
        <p>{billing.reportsSubtitle}</p>

        <div className="report-grid">
          {billing.reports.map((r, i) => (
            <div className="report-card" key={i}>
              {r}
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT */}
      <section className="billing-support">
        <h2>{billing.supportTitle}</h2>
        <p>{billing.supportDesc}</p>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}

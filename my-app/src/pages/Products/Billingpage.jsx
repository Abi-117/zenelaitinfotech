import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CTA from "../../components/Cta";
import "./Billingpage.css";
import Billingimg from "../../assets/billingbg.jpeg";

const API = "http://localhost:5000";

/* 🔥 DEFAULT SAFE STRUCTURE */
const defaultBilling = {
  title: "",
  subtitle: "",
  benefits: [],
  perfectFor: [],
  why: [],
};

export default function Billingpage() {
  const navigate = useNavigate();
  const [billing, setBilling] = useState(defaultBilling);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/api/billing`)
      .then((res) => {
        const data = res.data || {};

        /* ✅ Normalize backend response */
        setBilling({
          title: data.title || "",
          subtitle: data.subtitle || "",
          benefits: Array.isArray(data.benefits) ? data.benefits : [],
          perfectFor: Array.isArray(data.perfectFor) ? data.perfectFor : [],
          why: Array.isArray(data.why) ? data.why : [],
        });
      })
      .catch((err) => console.error("Billing API error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2 style={{ padding: 20 }}>Loading...</h2>;

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
            {billing.benefits.length === 0 ? (
              <li>No benefits available</li>
            ) : (
              billing.benefits.map((b, i) => <li key={i}>{b}</li>)
            )}
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
          {billing.perfectFor.length === 0 ? (
            <p>No data available</p>
          ) : (
            billing.perfectFor.map((item, i) => (
              <div className="audience-card" key={i}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* WHY BILLING */}
      <section className="billing-why">
        <h2>Why Choose Our Billing Software?</h2>

        <div className="why-grid">
          {billing.why.length === 0 ? (
            <p>No data available</p>
          ) : (
            billing.why.map((item, i) => (
              <div className="why-card" key={i}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))
          )}
        </div>
      </section>

      <CTA />
    </div>
  );
}

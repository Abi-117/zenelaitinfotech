import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosBase"; // centralized axios
import CTA from "../../components/Cta";
import "./Crmpage.css";
import Crmimg from "../../assets/crmbg.jpeg";

/* 🔥 DEFAULT SAFE STRUCTURE */
const defaultCrm = {
  title: "",
  subtitle: "",
  benefits: [],
  perfectFor: [],
  why: [],
};

export default function Crmpage() {
  const navigate = useNavigate();
  const [crm, setCrm] = useState(defaultCrm);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrm = async () => {
      try {
        const res = await api.get("/api/crm"); // relative path
        const data = res.data || {};

        /* ✅ Normalize backend response */
        setCrm({
          title: data.title || "",
          subtitle: data.subtitle || "",
          benefits: Array.isArray(data.benefits) ? data.benefits : [],
          perfectFor: Array.isArray(data.perfectFor) ? data.perfectFor : [],
          why: Array.isArray(data.why) ? data.why : [],
        });
      } catch (err) {
        console.error("CRM API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCrm();
  }, []);

  if (loading) return <h2 style={{ padding: 20 }}>Loading...</h2>;

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
            {crm.benefits.length === 0 ? (
              <li>No benefits available</li>
            ) : (
              crm.benefits.map((b, i) => <li key={i}>{b}</li>)
            )}
          </ul>

          <img src={Crmimg} alt="CRM Benefits" className="crm-benefits-img" />
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="crm-perfect-for">
        <h2>Perfect For</h2>
        <div className="audience-grid">
          {crm.perfectFor.length === 0 ? (
            <p>No data available</p>
          ) : (
            crm.perfectFor.map((item, i) => (
              <div className="audience-card" key={i}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* WHY CRM */}
      <section className="why-saas">
        <h2>Why Choose Zenelait CRM?</h2>
        <div className="why-grid">
          {crm.why.length === 0 ? (
            <p>No data available</p>
          ) : (
            crm.why.map((item, i) => (
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

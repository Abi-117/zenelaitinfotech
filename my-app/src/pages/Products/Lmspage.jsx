import React, { useEffect, useState } from "react";
import axios from "axios";
import CTA from "../../components/Cta";

const API = "http://localhost:5000";

export default function Lmspage() {
  const [lms, setLms] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/api/lms`)
      .then((res) => {
        setLms(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (!lms) return <p className="loading">No LMS Data Found</p>;

  return (
    <div className="lms-page">
      {/* HERO */}
      <section className="lms-hero">
        <h2>{lms.heroTitle}</h2>
        <p>{lms.heroText}</p>
      </section>

      {/* FEATURES */}
      {lms.features?.length > 0 && (
        <section className="lms-features">
          <h2>Key Features</h2>
          <ul>
            {lms.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>
      )}

      {/* PERFECT FOR */}
      {lms.perfectFor?.length > 0 && (
        <section className="lms-perfect-for">
          <h2>Perfect For</h2>
          <div className="audience-grid">
            {lms.perfectFor.map((p, i) => (
              <div className="audience-card" key={i}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* WHY CHOOSE */}
      {lms.whyChoose?.length > 0 && (
        <section className="why-lms">
          <h2>Why Choose Our LMS</h2>
          <div className="why-grid">
            {lms.whyChoose.map((w, i) => (
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

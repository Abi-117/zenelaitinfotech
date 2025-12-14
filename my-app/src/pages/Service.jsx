import React, { useEffect, useState } from "react";
import {
  Code2,
  Palette,
  Rocket,
  Search,
  Settings,
  Smartphone,
} from "lucide-react";
import "./Service.css";
import CTA from "../components/Cta";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const iconMap = {
  Code2,
  Palette,
  Rocket,
  Search,
  Settings,
  Smartphone,
};

const Service = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="services-page">

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>{data?.heroTitle || "Web Development Services"}</h1>
          <p>
            {data?.heroText ||
              "We build secure, scalable, and high-performance web applications."}
          </p>
          <button className="hero-btn">
            <Link to="/contact" className="hero-btnlink">
              Start Your Project
            </Link>
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {(data?.services || []).map((s, i) => {
              const Icon = iconMap[s.icon] || Code2;
              return (
                <div className="card" key={i}>
                  <Icon className="service-icon" />
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technologies">
        <div className="container">
          <div className="tech-grid">
            {(data?.technologies || []).map((t, i) => (
              <div key={i} className="tech-item">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          {(data?.processSteps || []).map((p, i) => (
            <div key={i} className="process-card">
              <div className="process-step">{p.step}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    
    </div>
  );
};

export default Service;

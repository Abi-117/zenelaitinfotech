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
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <>
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
          <div className="section-header">
            <h2>Our Expertise</h2>
            <p>Transforming ideas into high-quality software solutions with expert engineering and modern technology.</p>
          </div>
          <div className="services-grid">
            {(data?.services || []).map((s, i) => {
              const Icon = iconMap[s.icon] || Code2;
              return (
                <div className="card" key={i}>
                  <div className="icon-wrapper">
                  <Icon className="service-icon" />
                  </div>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-description">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technologies">
        <div className="container">
           <div className="section-header">
            <h2>Technologies We Master</h2>
            <p>Leveraging modern tools and frameworks for exceptional web experiences.</p>
          </div>
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
           <div className="section-header1">
            <h2>Our Development Process</h2>
            <p>A structured approach to deliver high-quality solutions efficiently.</p>
          </div>
          <div className="process-list">
          {(data?.processSteps || []).map((p, i) => (
            <div key={i} className="process-card">
              <div className="process-step">{p.step}</div>
              <div className="process-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <CTA />
     
    </div>
    </>
  );
};

export default Service;

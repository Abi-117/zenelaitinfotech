import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Overview.css";

import {
  ArrowRight,
  MessageCircle,
  CalendarCheck,
  Globe,
  BarChart3,
  GraduationCap,
  Receipt,
  Users,
  Wrench,
  Shield,
  BadgeIndianRupee,
  Headphones,
} from "lucide-react";

export default function Overview() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/landing")
      .then((res) => setData(res.data));
  }, []);

  if (!data) return null;

  return (
    <section className="landing-page">
      {/* ================= HERO ================= */}
      <section className="hero1">
        <div className="hero-bg1 hero-bg-1"></div>
        <div className="hero-bg1 hero-bg-2"></div>

        <div className="hero-container1">
          <h2 className="hero-logo1">
            <span>Zenelait</span>
            <span className="primary"> Info Tech</span>
          </h2>

          <h1 className="hero-title1">
            {data.heroTitle} <br />
            <span className="primary subtitle1">{data.heroHighlight}</span>
          </h1>

          <p className="hero-services1">{data.heroServices}</p>

          <div className="hero-actions1">
            <button className="btn primary-btn big"  onClick={() =>
                window.open("https://wa.me/919884264816", "_blank")
              }>
              Get Free Demo <ArrowRight size={20} />
            </button>
          </div>

          <p className="hero-trust1">{data.heroTrust}</p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section1 light">
        <div className="container1">
          <h2 className="section-title1">Our Services</h2>

          <div className="services-grid1">
            {data.services.map((s, i) => (
              <ServiceCard
                key={i}
                title={s.title}
                desc={s.desc}
                icon={getServiceIcon(s.icon)}
              />
            ))}
          </div>
          
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="section1">
        <div className="container1">
          <h2 className="section-title1">
            Why Choose <span className="primary">Zenelait Info Tech</span>?
          </h2>

          <div className="why-grid1">
            {data.whyChoose.map((w, i) => (
              <WhyItem
                key={i}
                title={w.title}
                desc={w.desc}
                icon={getWhyIcon(w.icon)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section1 cta1">
        <div className="container1 center">
          <h2 className="cta-title1">{data.ctaTitle}</h2>
          <p className="cta-text1">{data.ctaText}</p>

          
            <button className="btn primary-btn big"  onClick={() =>
                window.open("https://wa.me/919884264816", "_blank")
              }>
            <CalendarCheck size={20} /> Book a Free Consultation
          </button>
        </div>
      </section>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="service-card">
      <div className="icon-box">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function WhyItem({ icon, title, desc }) {
  return (
    <div className="why-item1">
      <div className="icon-box small">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

/* ================= ICON MAPPING ================= */

function getServiceIcon(name) {
  switch (name) {
    case "web":
      return <Globe size={28} />;
    case "erp":
      return <BarChart3 size={28} />;
    case "lms":
      return <GraduationCap size={28} />;
    case "billing":
      return <Receipt size={28} />;
    case "crm":
      return <Users size={28} />;
    default:
      return <Globe size={28} />;
  }
}

function getWhyIcon(name) {
  switch (name) {
    case "custom":
      return <Wrench />;
    case "secure":
      return <Shield />;
    case "price":
      return <BadgeIndianRupee />;
    case "support":
      return <Headphones />;
    default:
      return <Wrench />;
  }
}

import "./Home.css";
import React, { useEffect, useState } from "react";
import { FaBolt, FaUserFriends, FaBullseye, FaCheckCircle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

import Saas from "../assets/saas1.jpeg";
import Erp from "../assets/erp.jpeg";
import Lms from "../assets/lms.jpeg";
import Crm from "../assets/Crm.jpeg";
import Billing from "../assets/billing.jpeg";
import Website from "../assets/website.jpeg";

import CTA from "../components/Cta";
import Footer from "../components/Footer";

const handleNext = () => {
  document
    .querySelector(".services-banner-row")
    ?.scrollBy({ left: 300, behavior: "smooth" });
};

const handlePrev = () => {
  document
    .querySelector(".services-banner-row")
    ?.scrollBy({ left: -300, behavior: "smooth" });
};

export default function Home() {
  const navigate = useNavigate();
  const [home, setHome] = useState(null);

  /* 🔹 Fetch Home Content */
  useEffect(() => {
    fetch("http://localhost:5000/api/home")
      .then((res) => res.json())
      .then((data) => setHome(data))
      .catch(() => setHome(null));
  }, []);

  /* 🔹 Why Choose animation */
  useEffect(() => {
    setTimeout(() => {
      const items = document.querySelectorAll(".zen-why-box");

      function animateWhy() {
        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            setTimeout(() => {
              item.classList.add("show");
            }, index * 150);
          }
        });
      }

      window.addEventListener("scroll", animateWhy);
      animateWhy();
      return () => window.removeEventListener("scroll", animateWhy);
    }, 300);
  }, []);

  return (
    <>
      <div className="hero-container-full">
        <div className="hero-inner">
          {/* LEFT TEXT */}
          <div className="text-block slide-in">
            <h1 className="title">
              <span className="line">
                {home?.heroLine1 || "Professional"}
              </span>
              <br />
              <span className="line">
                {home?.heroLine2 || "Software Company"}
              </span>
              <br />
              <span className="line">
                {home?.heroLine3 || "in Chennai for "}
                <span className="highlight">
                  {home?.heroHighlight || "ERP, LMS, CRM & SaaS"}
                </span>
              </span>
            </h1>
          </div>

          {/* RIGHT CONTENT */}
          <div className="right-info-box slide-right">
            <p>
              {home?.heroDesc ||
                "Billing Software | ERP | CRM | SaaS | LMS | Websites – Smart, Scalable Solutions for Your Business."}
            </p>

            <button className="explore-btn" onClick={() => navigate("/about")}>
              <span>Explore More</span>
              <span className="arrow-circle">→</span>
            </button>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <section className="about-container">
          <h2 className="about-title">
            {home?.aboutTitle || "Who We Are"}
          </h2>

          <p className="about-text">
            {home?.aboutText ||
              "Zenelait Infotech is a trusted software development company in Anna Nagar, Chennai, offering SaaS tech solutions, ERP, CRM, LMS and modern websites."}
          </p>

          <div className="features-row">
            <div className="feature-card">
              <FaBolt className="feature-icon" />
              <h3 className="feature-title">
                {home?.feature1Title || "Fast Implementation"}
              </h3>
              <p className="feature-desc">
                {home?.feature1Desc ||
                  "Quick deployment for growing businesses"}
              </p>
            </div>

            <div className="feature-card">
              <FaUserFriends className="feature-icon" />
              <h3 className="feature-title">
                {home?.feature2Title || "Expert Support"}
              </h3>
              <p className="feature-desc">
                {home?.feature2Desc ||
                  "24/7 dedicated support for all products"}
              </p>
            </div>

            <div className="feature-card">
              <FaBullseye className="feature-icon" />
              <h3 className="feature-title">
                {home?.feature3Title || "Proven Results"}
              </h3>
              <p className="feature-desc">
                {home?.feature3Desc ||
                  "Trusted by businesses across Chennai"}
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-banner-section">
          <h2 className="services-banner-title">
            {home?.servicesTitle || "Our Services"}
          </h2>

          <p className="services-banner-subtitle">
            {home?.servicesSub ||
              "End-to-End Digital Solutions for Businesses"}
          </p>

          <div className="services-banner-row">
            {[
              { img: Lms, title: "Learning Management", link: "/products/lms" },
              { img: Erp, title: "ERP Systems", link: "/products/erp" },
              { img: Billing, title: "Billing Software", link: "/products/billing" },
              { img: Crm, title: "CRM Software", link: "/products/crm" },
              { img: Website, title: "Web Development", link: "/service" },
            ].map((s, i) => (
              <div className="services-banner-item" key={i}>
                <img className="service-img" src={s.img} alt={s.title} />
                <div className="services-banner-overlay">
                  <h3>{s.title}</h3>
                  <p>
                    {home?.servicesDesc ||
                      "Powerful and scalable digital solutions"}
                  </p>
                  <Link to={s.link} className="services-learn">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="services-banner-nav">
            <button className="nav-btn" onClick={handlePrev}>
              ←
            </button>
            <button className="nav-btn" onClick={handleNext}>
              →
            </button>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="zen-why">
          <h2 className="zen-why-heading">
            Why Choose Zenelait Info Tech?
          </h2>

          <div className="zen-why-container">
            {(home?.whyChoose && home.whyChoose.length > 0
              ? home.whyChoose
              : [
                  "Product-based software expertise",
                  "Scalable & secure IT solutions",
                  "Custom development for startups & SMEs",
                  "Fast local support in Anna Nagar",
                  "Continuous updates & enhancements",
                  "End-to-end software development",
                ]
            ).map((text, i) => (
              <div className="zen-why-box" key={i}>
                <FaCheckCircle className="zen-why-icon" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTA />
      
    </>
  );
}

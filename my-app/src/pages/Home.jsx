import "./Home.css";
import React, { useEffect, useState } from "react";
import {
  FaBolt,
  FaUserFriends,
  FaBullseye,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import CTA from "../components/Cta";


/* fallback images */
import Lms from "../assets/lms.jpeg";
import Erp from "../assets/erp.jpeg";
import Billing from "../assets/billing.jpeg";
import Crm from "../assets/Crm.jpeg";
import Website from "../assets/website.jpeg";
import Black from "../assets/black.PNG";

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

  /* 🔹 Fetch admin content */
  useEffect(() => {
    fetch("http://localhost:5000/api/home")
      .then((res) => res.json())
      .then((data) => setHome(data))
      .catch(() => setHome(null));
  }, []);

  /* 🔹 Why choose animation */
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
    }, 300);
  }, []);

  return (
    <>
      <div className="hero-container-full">
        <div className="hero-inner">
          {/* LEFT */}
          <div className="text-block slide-in">
            <h1 className="title">
              <span className="line">
                {home?.heroLine1 || "Professional"}
              </span>{" "}
              <br />
              <span className="line">
                {home?.heroLine2 || "Software Company"}
              </span>{" "}
              <br />
              <span className="line">
                {home?.heroLine3 || "in Chennai for "}
                <span className="highlight">
                  {home?.heroHighlight || "ERP, LMS, CRM & Billing Software"}
                </span>
              </span>
            </h1>
          </div>

          {/* RIGHT */}
          <div className="right-info-box slide-right">
            <p>
              {home?.heroDesc ||
                "Billing Software | ERP | CRM | SaaS | LMS | Websites – Smart, Scalable Solutions for Your Business."}
            </p>

            <button
              className="explore-btn"
              onClick={() => navigate("/about")}
            >
              <span>Explore More</span>
              <span className="arrow-circle">→</span>
            </button>
          </div>
        </div>

        {/* ABOUT */}
        <section className="about-container">
          <h2 className="about-title">
            {home?.aboutTitle || "Who We Are"}
          </h2>

          <p className="about-text">
            {home?.aboutText ||
              "Zenelait Infotech is a trusted software development company in Anna Nagar, Chennai."}
          </p>

          <div className="features-row">
            <div className="feature-card">
              <FaBolt className="feature-icon" />
              <h3 className="feature-title">Fast Implementation</h3>
              <p className="feature-desc">
                Quick deployment for businesses in Chennai
              </p>
            </div>

            <div className="feature-card">
              <FaUserFriends className="feature-icon" />
              <h3 className="feature-title">Expert Support</h3>
              <p className="feature-desc">
                24/7 dedicated support for ERP, CRM, Billing & SaaS users.
              </p>
            </div>

            <div className="feature-card">
              <FaBullseye className="feature-icon" />
              <h3 className="feature-title">Proven Results</h3>
              <p className="feature-desc">
                Trusted by companies across Anna Nagar & Chennai
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
              "End-to-End Digital Solutions — ERP, CRM, Billing Software, LMS & Website Development"}
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
            {(home?.whyChoose?.length
              ? home.whyChoose
              : [
                  { text: "Product-Based Software Expertise" },
                  { text: "Scalable & Secure IT Solutions" },
                  { text: "Custom Software Development" },
                  { text: "Fast Local Support in Anna Nagar" },
                  { text: "Dedicated Support & Enhancements" },
                  { text: "End-to-End Software Development" },
                ]
            ).map((w, i) => (
              <div className="zen-why-box" key={i}>
                <FaCheckCircle className="zen-why-icon" />
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTA />

    </>
  );
}

import "./Home.css";
import React from "react";
import { FaBolt, FaUserFriends, FaBullseye, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Saas from "../assets/saas1.jpeg";
import Erp from "../assets/erp.jpeg";
import Lms from "../assets/lms.jpeg";
import Crm from "../assets/Crm.jpeg";
import Billing from "../assets/billing.jpeg";

import Website from "../assets/website.jpeg";
import CTA from "../components/Cta";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const handleNext = () => {
  document.querySelector(".services-banner-row")
    .scrollBy({ left: 300, behavior: "smooth" });
};

const handlePrev = () => {
  document.querySelector(".services-banner-row")
    .scrollBy({ left: -300, behavior: "smooth" });
};



export default function Home() {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      const items = document.querySelectorAll(".zen-why-box");

      function animateWhy() {
        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();

          if (rect.top < window.innerHeight - 100) {
            setTimeout(() => {
              item.classList.add("show");
            }, index * 150); // Stagger delay
          }
        });
      }

      window.addEventListener("scroll", animateWhy);
      animateWhy(); // run on load
    }, 300);
  }, []);


    
  return (
    <>
     

       
  <div className="hero-container-full">

    <div className="hero-inner">

    <div className="text-block slide-in">
  <h1 className="title">
    <span className="line">Professional</span> <br />
    <span className="line">Software Company</span> <br />
    <span className="line">
      in Chennai for <span className="highlight">ERP, LMS, CRM & SaaS </span>
    </span>
  </h1>
</div>

       {/* RIGHT SIDE CONTENT */}
 <div className="right-info-box slide-right">
  <p>
    Billing Software | ERP | CRM <br /> | SaaS | LMS | Websites – <br />
    Smart, Scalable Solutions for Your Business.
  </p>

  <button className="explore-btn" onClick={() => navigate("/about")}>
    <span>Explore More</span>
    <span className="arrow-circle">→</span>
  </button>
</div>


    </div>

      {/* ⭐⭐⭐ ABOUT ZENELAIT SECTION ⭐⭐⭐ */}
      <section className="about-container">
  <h2 className="about-title">Who We Are</h2>

  <p className="about-text">
    Zenelait Infotech is a trusted software development company in Anna Nagar, Chennai,
    offering SaaS tech solutions, custom ERP software, CRM applications, LMS platforms, 
    and cutting-edge websites. We design powerful digital products that scale with your 
    business and accelerate digital transformation.
  </p>

  <div className="features-row">
    <div className="feature-card">
      <FaBolt className="feature-icon" />
      <h3 className="feature-title">Fast Implementation</h3>
      <p className="feature-desc">Quick deployment for businesses in Chennai</p>
    </div>

    <div className="feature-card">
      <FaUserFriends className="feature-icon" />
      <h3 className="feature-title">Expert Support</h3>
      <p className="feature-desc">24/7 dedicated support for ERP, CRM, Billing & SaaS users.</p>
    </div>

    <div className="feature-card">
      <FaBullseye className="feature-icon" />
      <h3 className="feature-title">Proven Results</h3>
      <p className="feature-desc">Trusted by companies across Anna Nagar & Chennai</p>
    </div>
  </div>
</section>

<section className="services-banner-section">
  <h2 className="services-banner-title">Our Services</h2>
  <p className="services-banner-subtitle">
    End-to-End Digital Solutions — ERP, CRM, Billing Software, LMS & Website Development
  </p>
  <div className="services-banner-row">
      {/* LMS */}
    <div className="services-banner-item">
    <img className="service-img" src={Lms} />
      <div className="services-banner-overlay">
        <h3>Learning Management</h3>
        <p>Advanced LMS for institutes & corporates to manage training</p>
        <Link to="/products/lms" className="services-learn">Learn More →</Link>
      </div>
    </div>
    

    {/* ERP */}
    <div className="services-banner-item">
      <img className="service-img" src={Erp} />
      <div className="services-banner-overlay">
        <h3>ERP Systems</h3>
        <p>Custom ERP in Chennai for inventory, finance & operations</p>
        <Link to="/products/erp" className="services-learn">Learn More →</Link>
      </div>
    </div>

    {/* Billing */}
    <div className="services-banner-item">
    <img className="service-img" src={Billing} />
      <div className="services-banner-overlay">
        <h3>Billing Software</h3>
        <p>Smart billing & invoicing for retail, wholesale & service businesses</p>
        <Link to="/products/billing" className="services-learn">Learn More →</Link>
      </div>
    </div>

    {/* CRM */}
    <div className="services-banner-item">
    <img className="service-img" src={Crm} />
      <div className="services-banner-overlay">
        <h3>CRM Software</h3>
        <p>Lead tracking, automation & customer engagement CRM</p>
        <Link to="/products/crm" className="services-learn">Learn More →</Link>
      </div>
    </div>

    {/* Web Development */}
    <div className="services-banner-item">
    <img className="service-img" src={Website} />
      <div className="services-banner-overlay">
        <h3>Web Development</h3>
        <p>Result-driven websites & web apps that grow your business</p>
        <Link to="/service" className="services-learn">Learn More →</Link>
      </div>
    </div>
 
  </div>
  <div className="services-banner-nav">
  <button className="nav-btn" onClick={handlePrev}>←</button>
  <button className="nav-btn" onClick={handleNext}>→</button>
</div>
</section>

<section className="zen-why">
  <h2 className="zen-why-heading">Why Choose Zenelait Info Tech?</h2>

  <div className="zen-why-container">

    <div className="zen-why-box">
      <FaCheckCircle className="zen-why-icon" />
      <p>Product-Based Software Expertise that powers business growth.</p>
    </div>

    <div className="zen-why-box">
      <FaCheckCircle className="zen-why-icon" />
      <p>Scalable & Secure IT Solutions with cloud and automation capabilities.</p>
    </div>

    <div className="zen-why-box">
      <FaCheckCircle className="zen-why-icon" />
      <p>Custom Software Development for startups, SMEs & institutions.</p>
    </div>

    <div className="zen-why-box">
      <FaCheckCircle className="zen-why-icon" />
      <p>Fast Local Support in Anna Nagar with reliable long-term service.</p>
    </div>

    <div className="zen-why-box">
      <FaCheckCircle className="zen-why-icon" />
      <p>Dedicated Support & Enhancements – Continuous updates & strong technical assistance.</p>
    </div>

    <div className="zen-why-box">
      <FaCheckCircle className="zen-why-icon" />
      <p>End-to-End Software Development – Strategy → UI/UX → Development → Deployment → Maintenance.</p>
    </div>

  </div>
</section>
</div>
    <CTA></CTA>
    <Footer></Footer>

    </>
  );
}

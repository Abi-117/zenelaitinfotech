import "./Home.css";
import React from "react";
import { FaBolt, FaUserFriends, FaBullseye, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Image from "../assets/image.png";
import CTA from "../components/Cta";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">

          {/* LEFT SIDE TEXT */}
          <div className="text-block">
            <h1 className="title">
              Professional <br />
              Software Company <br />
              in Chennai for<span className="highlight"> ERP, <br /> LMS, CRM & SaaS</span>
            </h1>

            <p className="subtitle">
             Billing Software • ERP • CRM • SaaS • LMS •
              Websites – Smart, Scalable Solutions for Your Business in Anna Nagar, Chennai
            </p>

            <div className="button-row">
              <button className="btn-primary" onClick={() => navigate("/contact")}>
               Get Started →
              </button>
              <button className="btn-secondary" onClick={() => navigate("/contact")}>
               Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hero-image">
                <img 
                src={Image}
                alt="Enterprise" 
                className="animated-img"
                />

          </div>

        </div>
      </div>


      {/* ⭐⭐⭐ ABOUT ZENELAIT SECTION ⭐⭐⭐ */}
      <section className="about-container">
        <h2 className="about-title">About Zenelait Infotech</h2>

        <p className="about-text">
         Zenelait Infotech is a trusted software development company in Anna Nagar, Chennai,
        offering SaaS tech solutions, custom ERP software, CRM applications, LMS platforms, and cutting-edge websites. We design powerful digital 
         products that scale with your business and accelerate digital transformation.
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
      <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
       End-to-End Digital Solutions — ERP, CRM, Billing Software, LMS & Website Development
      </p>

      <div className="services-grid">

        {/* SaaS */}
        <div className="service-card">
          <h3>SaaS Solutions</h3>
          <p>Cloud-based software solutions that scale with your business needs</p>
          <Link to="/products/saas" className="learn-more">
            Learn More →
          </Link>
        </div>

        {/* ERP */}
       <div className="service-card">
        <h3>ERP Systems</h3>
          <p>Custom ERP software in Chennai for inventory, finance & operations — built for enterprise efficiency</p>
          <Link to="/products/erp" className="learn-more">
            Learn More →
          </Link>
        </div>

        {/* LMS */}
        <div className="service-card">
          <h3>Learning Management</h3>
          <p>Advanced Learning Management Systems for institutes & corporates to manage online training & e-learning</p>
          <Link to="/products/lms" className="learn-more">
            Learn More →
          </Link>
        </div>

        {/* Billing */}
        <div className="service-card">
          <h3>Billing Software</h3>
          <p>Smart billing & invoicing software designed for retail, wholesale & service-based businesses</p>
          <Link to="/products/billing" className="learn-more">
            Learn More →
          </Link>
        </div>

        {/* CRM – NEW */}
        <div className="service-card">
          <h3>CRM Software</h3>
          <p>Powerful CRM solutions for lead tracking, sales automation & improved customer engagement</p>
          <Link to="/products/crm" className="learn-more">
            Learn More →
          </Link>
        </div>

        {/* Web Development – NEW */}
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Result-driven website & web application development that strengthens your digital presence</p>
          <Link to="/service" className="learn-more">
            Learn More →
          </Link>
        </div>

      </div>
    </section>
    <section className="why-section">
      <h2 className="why-title">Why Choose Zenelait?</h2>

      <div className="why-grid1">

        <div className="why-item1">
          <FaCheckCircle className="why-icon" />
          <p>Product-Based Software Expertise that powers business growth.</p>
        </div>

        <div className="why-item1">
          <FaCheckCircle className="why-icon" />
          <p>Scalable & Secure IT Solutions with cloud and automation capabilities.
</p>
        </div>

        <div className="why-item1">
          <FaCheckCircle className="why-icon" />
          <p>Custom Software Development for startups, SMEs & institutions.</p>
        </div>

        <div className="why-item1">
          <FaCheckCircle className="why-icon" />
          <p>Fast Local Support in Anna Nagar with reliable long-term service.</p>
        </div>

        <div className="why-item1">
          <FaCheckCircle className="why-icon" />
          <p>Dedicated Support & Enhancements – Continuous updates, strong technical assistance,
             and long-term partnership for success.</p>
        </div>

        <div className="why-item1">
          <FaCheckCircle className="why-icon" />
          <p>End-to-End Software Development – Complete solutions from product strategy → UI/UX → development → deployment → maintenance.</p>
        </div>

      </div>
    </section>
    <CTA></CTA>
    <Footer></Footer>

    </>
  );
}

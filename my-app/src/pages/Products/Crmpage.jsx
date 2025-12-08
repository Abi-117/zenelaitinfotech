import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import "./Crmpage.css";
import CTA from "../../components/Cta";
import Crmimage from "../../assets/crm-service.jpg";

import Crmimg from "../../assets/crmbg.jpeg";
export default function Crmpage() {
  const navigate = useNavigate();

  return (
    <div className="crm-page">
  
      <section className="crm-hero">
        <div className="hero-crmcontent">
          <h2>CRM — Customer Relationship Management</h2>
          <p className="subtitle">
            Zenelait’s CRM Software is designed to help businesses in Chennai and across India automate their sales pipeline, lead follow-ups, and customer engagement. With a centralized database and real-time insights, your sales team can convert leads faster and build long-term customer relationships.
Whether you are a startup, SME, or enterprise, our CRM enables you to streamline communication, improve productivity, and make data-driven decisions.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-demo"
              onClick={() => navigate("/contact")}
            >
              Request Demo
            </button>
             <button
            className="btn-products"
            onClick={() => {
              window.open("https://wa.me/919884264816", "_blank");
            }}
          >
            More Details
          </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
     <section className="crm-benefits">
      <button className="back-btn" onClick={() => navigate(-1)}>
   ← Back
</button>
  <h2>Key Benefits</h2>

  <div className="crm-benefits-wrapper">
    <ul>
      <li>Centralized lead & customer data management</li>
      <li>Automated follow-ups, reminders & workflows</li>
      <li>Real-time sales tracking & performance analytics</li>
      <li>Email / SMS / WhatsApp integration</li>
      <li>Customer activity monitoring & retention tools</li>
      <li>Role-based access for teams & managers</li>
      <li>Cloud-based CRM accessible anywhere</li>
      <li>Better conversion rates & customer satisfaction</li>
    </ul>

    <img
      src={Crmimg} 
      alt="CRM Benefits"
      className="crm-benefits-img"
    />
  </div>
</section>
<section className="crm-perfect-for">
  <h2>Perfect For</h2>
  <div className="audience-grid">
    <div className="audience-card">
      <h4>Sales Teams</h4>
      <p>Automate follow-ups and close more deals backed by AI-driven recommendations.
Marketing Teams</p>
    </div>
    <div className="audience-card">
      <h4>Marketing Teams</h4>
      <p>Create personalized journeys and measure campaign ROI in one dashboard.
Customer Support</p>
    </div>
    <div className="audience-card">
      <h4>Customer Support</h4>
      <p>Deliver faster resolutions using smart ticket routing and chatbot automation.</p>
    </div>
  </div>
</section>
<section className="why-saas">
  <h2>Why Choose Zenelait CRM?</h2>
  <div className="why-grid">
    <div className="why-card">
      <h4>Boost Productivity</h4>
      <p>Automate repetitive tasks and empower your team to focus on high-value activities.</p>
    </div>
    <div className="why-card">
      <h4>Improve Customer Retention</h4>
      <p>Track every interaction to build long-term relationships and increase loyalty.</p>
    </div>
    <div className="why-card">
      <h4>Data-Driven Decisions</h4>
      <p>Analyze performance metrics in real-time to optimize sales strategies.</p>
    </div>
    <div className="why-card">
      <h4>Seamless Integration</h4>
      <p>Easily connect with Email, WhatsApp, SMS, ERP, and other business tools.</p>
    </div>
  </div>
</section>



      {/* Call to Action */}
        <CTA />

      <Footer />
    </div>
  );
}

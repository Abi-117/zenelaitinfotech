import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import "./Erppage.css";
import CTA from "../../components/Cta";
import Erpimage from "../../assets/erp-service.jpg";

import Erppg from "../../assets/Erpbg.jpeg";
export default function Erppage() {
  const navigate = useNavigate();

  return (
    <div className="erp-page">
      <section className="erp-hero">
        <div className="hero-erpcontent">
          <h2>ERP Systems</h2>
          <p className="subtitle">
          Our ERP system helps businesses manage all operations in one place. Streamline workflows, improve productivity,
           and get real-time insights for smarter decision-making.
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

      {/* Key Features */}
      <section className="erp-features">
         <button className="back-btn" onClick={() => navigate(-1)}>
   ← Back
</button>
  <h2>Key Features</h2>
 
  <div className="key-featureslist">
    <ul>
      <li>Centralized Dashboard – Manage all departments from a single platform</li>
      <li>Accounts & Finance Management – Billing, invoicing, expenses, and GST reporting.</li>
      <li>HR & Payroll System – Staff profiles, attendance, and salary processing.</li>
      <li>Inventory & Stock Management – Track items, stock levels, and purchase orders.</li>
      <li>Sales & CRM Integration – Manage leads, customer data, and sales reports</li>
      <li>Project & Task Management – Assign tasks, monitor progress, and track deadlines.</li>
      <li>Purchase & Vendor Management – Manage suppliers, quotations, and approvals.</li>
      <li>Reports & Analytics – Real-time business insights to support decisions.</li>
    </ul>
    <img
      src={Erppg} 
      alt="ERP decoration"
      className="key-features-img"
    />
  </div>
</section>


      {/* Perfect For */}
      <section className="erp-perfect-for">
        <h2>Perfect For</h2>
        <div className="audience-grid">
          <div className="audience-card">
            <h4>Growing Businesses (SMBs)</h4>
            <p>Upgrade from spreadsheets to a smart ERP that boosts productivity instantly.</p>
          </div>
          <div className="audience-card">
            <h4>Large Enterprises</h4>
            <p>Connect branches, automate approvals, and manage complex processes effortlessly.</p>
          </div>
          <div className="audience-card">
            <h4>Decision Makers</h4>
            <p>Get actionable insights, cost control, and audit-ready financial accuracy.</p>
          </div>
        </div>
      </section>
      <section className="why-erp">
  <h2>Why Choose Zenelait ERP?</h2>
  <div className="why-grid">
    <div className="why-card">
      <h4>Unified Operations</h4>
      <p>Manage finance, HR, inventory, and sales all from a single centralized platform.</p>
    </div>
    <div className="why-card">
      <h4>Boost Productivity</h4>
      <p>Automate repetitive tasks and workflows to save time and reduce errors.</p>
    </div>
    <div className="why-card">
      <h4>Data-Driven Insights</h4>
      <p>Analyze real-time reports to make informed decisions for growth and efficiency.</p>
    </div>
    <div className="why-card">
      <h4>Seamless Integration</h4>
      <p>Connect ERP with CRM, email, accounting software, and other business tools easily.</p>
    </div>
  </div>
</section>




      {/* Call to Action */}
      
    <CTA></CTA>

      <Footer />
    </div>
  );
}

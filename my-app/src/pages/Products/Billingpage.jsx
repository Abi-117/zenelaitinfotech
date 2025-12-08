import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import "./Billingpage.css";
import CTA from "../../components/Cta";
import Billingimage from "../../assets/billing-service.jpg";
import Billingimg from "../../assets/billingbg.jpeg";
import { FaArrowLeft } from "react-icons/fa";

export default function Billingpage() {
  const navigate = useNavigate();

  return (
    <div className="billing-page">
      
      <section className="billing-hero">
        
        <div className="hero-contents">
            
          <h2>Billing Software</h2>
          <p className="subtitle">
A powerful cloud-based Billing & GST Invoicing Software designed for small, medium, and growing businesses in Chennai and across India. Create invoices in seconds, track payments, record expenses, and manage your entire accounting process — all in one secure platform.         </p>
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

  <section className="billing-features">
    <button className="back-btn" onClick={() => navigate(-1)}>
   ← Back
</button>
  <h2>Key Benefits</h2>

  <div className="billing-features-wrapper">
    <ul>
      <li>GST-compliant billing & e-invoice support</li>
      <li>Customer & payment tracking</li>
      <li>Automated due reminders & notifications</li>
      <li>Multi-user access with role permissions</li>
      <li>Cloud access from anywhere, any device</li>
      <li>Inventory & stock management</li>
      <li>Download invoices in PDF / Excel formats</li>
      <li>Detailed reports & analytics for decision-making</li>
    </ul>

    <img
      src={Billingimg}
      alt="Billing features"
      className="billing-features-img"
    />
  </div>
</section>

      {/* Perfect For */}
      <section className="billing-perfect-for">
        <h2>Perfect For</h2>
        <div className="audience-grid">
          <div className="audience-card">
            <h4>Best Billing Software for Startups</h4>
            <p>Manage GST invoices, online payments & expense tracking with automation — ideal for fast-growing new businesses.</p>
          </div>
          <div className="audience-card">
            <h4>Affordable Billing for SMBs</h4>
            <p>Manage GST billing, stock, purchases & customers — perfect for retail and service businesses.</p>
          </div>
          <div className="audience-card">
            <h4>Enterprise Billing Software</h4>
            <p>Multi-branch billing, approvals & advanced reporting for large-scale operations.</p>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE SECTION */}
<section className="billing-why">
  <h2>Why Choose Our Billing Software?</h2>

  <div className="why-grid">
    <div className="why-card">
      <h4>Faster Billing Process</h4>
      <p>Create GST invoices in seconds with automated calculations.</p>
    </div>

    <div className="why-card">
      <h4>Reduce Manual Errors</h4>
      <p>Auto GST, HSN & tax validation ensures accuracy.</p>
    </div>

    <div className="why-card">
      <h4>Improve Cash Flow</h4>
      <p>Smart payment reminders & settlement tracking.</p>
    </div>

    <div className="why-card">
      <h4>Highly Secure Cloud Data</h4>
      <p>Encrypted & backed-up data 24/7 for full protection.</p>
    </div>
  </div>
</section>

{/* INDUSTRIES */}
<section className="billing-industries">
  <h2>Industries We Serve</h2>
  <div className="industry-grid">
    <span>Retail Stores</span>
    <span>Supermarkets</span>
    <span>Hardware Shops</span>
    <span>Textile Stores</span>
    <span>Medical & Pharma</span>
    <span>Manufacturing Units</span>
    <span>Service Providers</span>
    <span>Wholesale & Traders</span>
  </div>
</section>

{/* REPORTS */}
<section className="billing-reports">
  <h2>Powerful Reports & Analytics</h2>
  <p>Real-time business insights to help you make smart decisions.</p>

  <div className="report-grid">
    <div className="report-card">Sales Reports</div>
    <div className="report-card">GST Reports (GSTR-1, 3B)</div>
    <div className="report-card">Profit & Loss</div>
    <div className="report-card">Purchase & Expenses</div>
    <div className="report-card">Customer Ledger</div>

  </div>
</section>

{/* SUPPORT */}
<section className="billing-support">
  <h2>Dedicated Customer Support</h2>
  <p>Free training, onboarding assistance & priority customer care.</p>
</section>


      {/* Call to Action */}
        <CTA />

      <Footer />
    </div>
  );
}

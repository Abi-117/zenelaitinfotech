import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import "./Saaspage.css";
import Saasimage from "../../assets/saas-service.jpg";
import CTA from "../../components/Cta"; 
import Saasbg from "../../assets/Saasbg.jpeg";


export default function Saaspage() {
  const navigate = useNavigate();

  return (
    <div className="saas-page">
      
      {/* Hero Section */}
      <section className="saas-hero">
        <div className="hero-saascontent">
          <h1>SAAS SOLUTIONS</h1>
          <p className="subtitle">
Zenelait’s SaaS products are designed to help businesses work
 smarter with secure, cloud-based tools that are fully automated and easy to access.          </p>
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

      {/* Dashboard Section */}
      <section className="saas-dashboard">
        <button className="back-btn" onClick={() => navigate(-1)}>
   ← Back
</button>
          <h2>What We Provide</h2>
          <div className="key-featureslisted">
          <ul>
            <li>Cloud-Based Access – Access your software anytime, anywhere, on any device.</li>
            <li>User Login & Dashboard – Secure accounts for admins, staff, and customers.</li>
            <li>Automated Updates – Always use the latest version without manual installation.</li>
            <li>Data Backup & Security – Real-time backup and robust security for all your business data.</li>
            <li>Subscription-Based Plans – Flexible monthly and yearly plans suitable for businesses of all sizes.</li>
            <li>Customizable Modules – Tailor features for billing, CRM, LMS, ERP, or any business requirement.</li>
            <li>Payment Gateway Integration – Enable seamless online payments within your software.</li>
            <li>Reports & Analytics – Track business performance and gain real-time insights.</li>
          </ul>
          <img
            src={Saasbg} 
            alt="SaaS decoration"
            className="key-features-img"
          />
          </div> 
          </section>
        <div className="perfect-for">
          <h2>Perfect For</h2>
          <div className="audience-grid">
            <div className="audience-card">
              <h4>Startups</h4>
              <p>Scale faster with cloud-based SaaS software — no infrastructure or setup needed</p>
            </div>
            <div className="audience-card">
              <h4>SMBs</h4>
              <p>Affordable cloud software with essential business automation features.
</p>
            </div>
            <div className="audience-card">
              <h4>Enterprises</h4>
              <p>Secure & customizable SaaS deployment with dedicated support and integrations.</p>
            </div>
          </div>
        </div>
        <section className="why-saas">
  <h2>Why Choose Zenelait SaaS Solutions?</h2>

  <div className="why-grid">
    <div className="why-card">
      <h4>Fast Deployment</h4>
      <p>No installation or setup required — launch your software instantly.</p>
    </div>

    <div className="why-card">
      <h4>High Scalability</h4>
      <p>Our cloud architecture grows with your business without extra cost.</p>
    </div>

    <div className="why-card">
      <h4>99.9% Uptime</h4>
      <p>Reliable servers ensure your business is always active & accessible.</p>
    </div>

    <div className="why-card">
      <h4>API & Integrations</h4>
      <p>Connect with billing, CRM, ERP, payment gateway & custom systems.</p>
    </div>
  </div>
</section>
<section className="saas-compare">
  <h2>SaaS vs Traditional Software</h2>

  <table className="compare-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>SaaS Software</th>
        <th>Traditional Software</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Installation</td>
        <td>No installation required</td>
        <td>Manual setup needed</td>
      </tr>
      <tr>
        <td>Updates</td>
        <td>Automatic cloud updates</td>
        <td>Manual updates & long downtime</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>Affordable subscription</td>
        <td>High one-time purchase</td>
      </tr>
      <tr>
        <td>Accessibility</td>
        <td>Anywhere, any device</td>
        <td>Only installed device</td>
      </tr>
      <tr>
        <td>Security</td>
        <td>Cloud encrypted & backup</td>
        <td>Risk of data loss</td>
      </tr>
    </tbody>
  </table>
</section>
<section className="saas-testimonials">
  <h2>What Our Clients Say</h2>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <p>"Zenelait’s SaaS platform reduced our operational workload by 60%. Fully automated and extremely reliable."</p>
      <h5>— Prakash, Retail Business</h5>
    </div>

    <div className="testimonial-card">
      <p>"The customization options are excellent. It perfectly matches our workflow."</p>
      <h5>— Meera, Manufacturing Unit</h5>
    </div>

    <div className="testimonial-card">
      <p>"Great support team, easy to use software, highly secure and fast."</p>
      <h5>— Sanjay, Enterprise Operations</h5>
    </div>

  </div>
</section>



      {/* Call to Action */}
      <CTA></CTA>
      {/* Footer */}
      <Footer />
    </div>
  );
}

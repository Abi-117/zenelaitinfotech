import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import "./Lmspage.css";
import Lmsimage from "../../assets/lms-service.jpg";
import CTA from "../../components/Cta";
import Lmsimg from "../../assets/lmsbg.jpeg";

export default function Lmspage() {
  const navigate = useNavigate();

  return (
    <div className="lms-page">
    
      <section className="lms-hero">
        <div className="hero-lmscontent">
          <h2>Learning Management System</h2>
          <p className="subtitle">
Zenelait LMS is designed for a wide range of educational and training professionals. It’s perfect for school principals and directors, college administrators, training institute managers, HR professionals managing employee training, corporate L&D heads, and online course creators or EdTech founders. Any organization looking to streamline academic or training workflows, improve learner engagement,
 and simplify administrative tasks can benefit from our platform.          </p>
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
      <section className="lms-features">
        <button className="back-btn" onClick={() => navigate(-1)}>
   ← Back
</button>
  <h2>Key Features</h2>
  
  <div className="lms-list">
    <ul>
      <li>Course creation, upload & content management</li>
      <li>Online exams, assignments & automated evaluation</li>
      <li>Student performance tracking & analytics</li>
      <li>Multi-device access (Mobile, Laptop, Tablet)</li>
      <li>Role-based login for Admin, Teachers & Students</li>
      <li>Notifications & communication features</li>
      <li>Secure cloud hosting with data protection</li>
    </ul>
    <img
      src={Lmsimg} 
      alt="LMS decoration"
      className="lms-features-img"
    />
  </div>
</section>


      {/* Perfect For */}
      <section className="lms-perfect-for">
        <h2>Perfect For</h2>
        <div className="audience-grid">
          <div className="audience-card">
            <h4>Corporate Teams</h4>
            <p>Streamline employee training and onboarding programs efficiently.</p>
          </div>
          <div className="audience-card">
            <h4>Educational Institutes</h4>
            <p>Deliver interactive learning experiences to students online and offline.</p>
          </div>
          <div className="audience-card">
            <h4>Trainers & Coaches</h4>
            <p>Create and manage multiple courses with automated tracking and certification.</p>
          </div>
        </div>
      </section>
      <section className="why-lms">
  <h2>Why Choose Zenelait LMS?</h2>
  <div className="why-grid">
    <div className="why-card">
      <h4>Engaging Learning</h4>
      <p>Interactive courses, quizzes, and assignments for better learner engagement.</p>
    </div>
    <div className="why-card">
      <h4>Performance Tracking</h4>
      <p>Monitor student progress and analyze learning outcomes in real-time.</p>
    </div>
    <div className="why-card">
      <h4>Multi-Device Access</h4>
      <p>Seamless learning on desktop, mobile, and tablet anywhere, anytime.</p>
    </div>
    <div className="why-card">
      <h4>Secure & Reliable</h4>
      <p>Cloud-based platform with robust security and data protection.</p>
    </div>
  </div>
</section>
<section className="lms-benefits">
  <h2>Benefits of Zenelait LMS</h2>
  <div className="benefits-grid">
    <div className="benefit-card">
      <h4>Time-Saving Automation</h4>
      <p>Automate grading, assignments, notifications, and reporting to save valuable time.</p>
    </div>
    <div className="benefit-card">
      <h4>Enhanced Collaboration</h4>
      <p>Teachers, students, and administrators can communicate and collaborate seamlessly.</p>
    </div>
    <div className="benefit-card">
      <h4>Customizable Learning Paths</h4>
      <p>Create courses and learning journeys tailored to the needs of different learners.</p>
    </div>
    <div className="benefit-card">
      <h4>Actionable Insights</h4>
      <p>Analytics dashboards give administrators and trainers data-driven decision power.</p>
    </div>
  </div>
</section>



      {/* Call to Action */}
      <CTA></CTA>

      <Footer />
    </div>
  );
}

import React from "react";
import "./Cta.css";
import { useNavigate } from "react-router-dom";

const CTA = () => {
   const navigate = useNavigate();
  return (
    <section className="cta">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Get Started?</h2>
        <p className="cta-subtext">
          Contact us today to discuss how our solutions can help your business
        </p>
        <button className="cta-btn" onClick={() => navigate("/contact")}>
          Contact Us Now →
        </button>
        
      </div>
    </section>
  );
};

export default CTA;

import React, { useEffect, useState } from "react";
import "./Floatingaction.css";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Floatingaction = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) setShowTop(true);
      else setShowTop(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-container">

      {/* WhatsApp */}
      <a
        className="floating-btn whatsapp"
        href="https://wa.me/919884264816"
        target="_blank"
        rel="noopener noreferrer"
      >
         <FaWhatsapp size={20} color="#f7fcf9ff" />
      </a>

      {/* Location */}
      <a
  className="floating-btn location"
  href="https://www.google.com/maps/place/13.0856169,80.212724"
  target="_blank"
  rel="noopener noreferrer"
>
   <FaMapMarkerAlt size={20} color="#eef0f3ff" />
</a>



      {/* Scroll to Top */}
      {showTop && (
        <button className="floating-btn top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}

    </div>
  );
};

export default Floatingaction;

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./Contact.css";
import axios from "axios";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [page, setPage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact-page")
      .then((res) => setPage(res.data));
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    
    axios.post("http://localhost:5000/api/contact-message", formData).then(() => {
      alert("Message sent successfully");
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    });
    
  };
  

  return (
    <div className="contact-page">
      <main className="contact-main">
        <div className="contact-hero">
          <h1>{page?.heroTitle || "Contact Us"}</h1>
          <p>{page?.heroText}</p>
        </div>

        <div className="contact-grid">
          {/* FORM */}
          <div className="left-column">
            <div className="contact-form-card">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="email" placeholder="Email" onChange={handleChange} required />
                <input name="phone" placeholder="Phone" onChange={handleChange} />
                <textarea name="message" placeholder="Message" onChange={handleChange} required />
                <button type="submit">
                  Send Message <Send />
                </button>
              </form>
            </div>

            <iframe
              src={page?.mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              title="Map"
            />
          </div>

          {/* INFO */}
          <div className="contact-right">
            <img src={page?.image} alt="Contact" />

            <div className="contact-info-card">
              <div className="info-item">
                <MapPin />
                <p>{page?.address}</p>
              </div>
              <div className="info-item">
                <Phone />
                <p>{page?.phone}</p>
              </div>
              <div className="info-item">
                <Mail />
                <p>{page?.email}</p>
              </div>
            </div>

            <div className="business-hours-card">
              <h3>Business Hours</h3>
              <p>{page?.businessHours}</p>
            </div>
          </div>
        </div>
      </main>
     
    </div>
  );
}

import React from "react";
import { Code2, Palette, Rocket, Search, Settings, Smartphone } from "lucide-react";
import "./Service.css"; 
import CTA from "../components/Cta";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const services = [
  { icon: Code2, title: "Custom Web Development", description: "We build secure, scalable, and custom web applications using modern frameworks to support business growth and digital transformation." },
  { icon: Palette, title: "UI/UX Design", description: "We design intuitive and visually engaging user interfaces that improve customer experience and product usability across all platforms."
 },
  { icon: Smartphone, title: "Responsive Design", description: "We create mobile-friendly, responsive websites that deliver seamless performance across devices — desktops, tablets, and smartphones." },
  { icon: Rocket, title: "Performance Optimization", description: "We develop fast-loading, high-performance websites optimized for speed, stability, and smooth user experience." },
  { icon: Search, title: "SEO Integration", description: "We implement built-in SEO strategies, helping your website rank higher on Google and improve online visibility and traffic." },
  { icon: Settings, title: "Maintenance & Support", description: "We offer continuous monitoring, updates, and technical support, ensuring your software runs smoothly and remains future-ready." },
];

const technologies = ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "AWS", "Docker", "GraphQL"];

const processSteps = [
  { step: "01", title: "Discovery & Planning", desc: "Identify business goals and define project scope for a clear roadmap." },
  { step: "02", title: "Design & Prototype", desc: "Crafting elegant designs and interactive prototypes for validation." },
  { step: "03", title: "Development", desc: "Building scalable, maintainable, and high-performance applications." },
  { step: "04", title: "Testing & Deployment", desc: "Rigorous testing to ensure smooth and error-free deployment." },
  { step: "05", title: "Support & Maintenance", desc: "Ongoing optimization and support to ensure long-term success." },
];

const Service = () => {
  return (
    <div className="services-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Web Development Services</h1>
          <p>We build secure, scalable, and high-performance web applications using modern technologies, cloud frameworks, automation,
             and UI/UX engineering to help businesses grow and succeed online..</p>
          <button className="hero-btn"><Link to="/contact" className="hero-btnlink">Start Your Project</Link></button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Expertise</h2>
            <p>Transforming ideas into high-quality software solutions with expert engineering and modern technology.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card">
                  <div className="icon-wrapper">
                    <Icon className="service-icon" />
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies">
        <div className="container">
          <div className="section-header">
            <h2>Technologies We Master</h2>
            <p>Leveraging modern tools and frameworks for exceptional web experiences.</p>
          </div>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="section-header1">
            <h2>Our Development Process</h2>
            <p>A structured approach to deliver high-quality solutions efficiently.</p>
          </div>

          <div className="process-list">
            {processSteps.map((phase, index) => (
              <div key={index} className="process-card">
                <div className="process-step">{phase.step}</div>
                <div className="process-info">
                  <h3>{phase.title}</h3>
                  <p>{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA></CTA>
      <Footer></Footer>

    </div>
  );
};

export default Service;

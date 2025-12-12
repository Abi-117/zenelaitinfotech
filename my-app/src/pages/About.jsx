import React, { useEffect } from "react";
import "./About.css";
import Team from "../assets/about-image.jpg";

import Footer from "../components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

const AboutHero = () => {
 useEffect(() => {
  const elements = document.querySelectorAll(".fade-slide, .about-stroybg");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  


  return (
    <div className="about-page">
      {/* Heading Section */}
      <section className="about-hero-section fade-slide">
  <div className="about-hero-inner">

    {/* LEFT IMAGE */}
    <div className="about-hero-image image-card">
      <img src={Team} alt="Team" className="image-effect" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="about-hero-content">
      <h1 className="about-main-title">
        <span>About</span> <span className="red-accent">Zenelait</span>
      </h1>

      <p className="about-main-text">
        Zenelait Infotech is a leading product-based software company in Anna Nagar, Chennai,
        delivering innovative and scalable digital solutions. We specialize in SaaS products,
        ERP & CRM, Billing software, LMS solutions, and custom applications that empower 
        businesses and educational institutions to grow faster.
      </p>

      <p className="about-main-text">
        With expertise in automation, cloud tech, and UI/UX engineering, we create 
        high-performance software that boosts efficiency and accelerates digital transformation.
      </p>
    </div>

  </div>
</section>
<section className="about-stroybg">

      {/* Story Section */}
      <div className="about-story">
        <h2 className="section-title">Our Story</h2>

        <p>
         At Zenelait Infotech, Anna Nagar, our journey began with a simple mission: to build innovative, scalable digital solutions that empower businesses and educational institutions. We are a team of engineers, designers, and product architects who believe in a product-first approach,
          delivering software with precision, performance, and long-term impact.
        </p>

        <p>
          From SaaS platforms and CRM systems to LMS solutions, billing software, e-commerce applications, and professional websites, we create technology that simplifies workflows,
           drives growth, and accelerates digital transformation.
        </p>

        <p>
          Our commitment is to be a trusted software development partner,
           helping organizations stay ahead in the ever-evolving digital world.
        </p>
      </div>
      </section>

      {/* Mission & Vision */}
      <div className="mission-vision">
        <div className="mv-card">
          <Target className="mv-icon" />
          <h3>Our Mission</h3>
          <p>
           Our mission at Zenelait Infotech is to empower startups,
            enterprises, and institutions with reliable, scalable, and secure digital solutions by building high-performance software platforms driven by AI, automation, and cloud technology—while fostering a culture of excellence, collaboration, innovation, and customer-first development to help businesses accelerate growth, enhance efficiency,
            and succeed in a rapidly evolving digital world.
          </p>
        </div>

        <div className="mv-card">
          <Eye className="mv-icon" />
          <h3>Our Vision</h3>
          <p>
            At Zenelait Infotech, our vision is to redefine how the world works,
             learns, and grows by creating powerful, scalable, and AI-driven software solutions that transform businesses through automation, cloud technology, and intelligent digital innovation—empowering organizations to enhance productivity, accelerate digital transformation, operate smarter, and achieve sustainable global growth as a
             leader in enterprise software and next-generation AI solutions.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="values-section">
        <h2 className="section-title1">Our Core Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <Award className="value-icon" />
            <h4>Excellence</h4>
            <p>We deliver high-quality software products with a strong focus on code standards,
               security, performance, and customer satisfaction.</p>
          </div>

          <div className="value-card">
            <Users className="value-icon" />
            <h4>Collaboration</h4>
            <p>We work closely with clients as long-term technology partners, ensuring smooth communication
               and shared success throughout the software development lifecycle.</p>
          </div>

          <div className="value-card">
            <Target className="value-icon" />
            <h4>Innovation</h4>
            <p>We adopt modern tech, automation, AI & cloud solutions to build future-ready digital
               products that keep businesses ahead of the competition.</p>
          </div>
          
        <div className="value-card">
            <Users className="value-icon" />
            <h3>Growth</h3>
            <p>We help companies scale faster with custom IT solutions designed to boost productivity, streamline operations,
               and support digital transformation.</p>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default AboutHero;

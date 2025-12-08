import React from "react";
import "./About.css";
import Team from "../assets/about-image.jpg";

import Footer from "../components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div className="about-page">
      {/* Heading Section */}
      <div className="about-hero">
        <h1 className="about-title">
          <span className="black">About</span> <span className="red">Zenelait</span>
        </h1>
        <p className="about-subtitle">
          Zenelait Infotech is a leading product-based software company in Anna Nagar, Chennai, delivering innovative and scalable digital solutions. We specialize in SaaS products, ERP & CRM, Billing software, LMS solutions, and custom web & mobile applications that empower businesses and educational institutions to grow faster.
With expertise in automation, cloud technology, and UI/UX engineering, we create high-performance software that simplifies workflows, boosts efficiency, and drives digital transformation.
Our mission is to provide smart, secure, and scalable technology that helps organizations automate tasks, enhance customer experience, and stay ahead in a digital world.
      </p>
      </div>

      {/* Image Section */}
      <div className="about-image-box">
        <img src={Team} alt="Our Team" className="about-image" />
      </div>

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
        <h2 className="section-title">Our Core Values</h2>

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

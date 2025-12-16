import React, { useEffect, useState } from "react";
import "./About.css";
import Team from "../assets/about-image.jpg";
import { Target, Eye, Award, Users } from "lucide-react";

const AboutHero = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/about")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch(() => setAbout(null));
  }, []);

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
            <img
              src={Team}
              alt="Team"
              className="image-effect"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-hero-content">
            <h1 className="about-main-title">
              <span>About</span>{" "}
              <span className="red-accent">
                {about?.heroTitle || "Zenelait"}
              </span>
            </h1>

            <p className="about-main-text">
              {about?.heroText1 ||
                "Zenelait Infotech is a leading product-based software company in Anna Nagar, Chennai, delivering innovative and scalable digital solutions."}
            </p>

            <p className="about-main-text">
              {about?.heroText2 ||
                "With expertise in automation, cloud tech, and UI/UX engineering, we create high-performance software that boosts efficiency and accelerates digital transformation."}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-stroybg">
        <div className="about-story">
          <h2 className="section-title">
            {about?.storyTitle || "Our Story"}
          </h2>

          {(about?.storyParas && about.storyParas.length > 0
            ? about.storyParas
            : [
                "At Zenelait Infotech, Anna Nagar, our journey began with a simple mission.",
                "From SaaS platforms and CRM systems to LMS solutions and billing software.",
                "Our commitment is to be a trusted software development partner.",
              ]
          ).map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <div className="mission-vision">
        <div className="mv-card">
          <Target className="mv-icon" />
          <h3>Our Mission</h3>
          <p>
            {about?.missionText ||
              "Our mission is to empower startups and enterprises with scalable and secure digital solutions."}
          </p>
        </div>

        <div className="mv-card">
          <Eye className="mv-icon" />
          <h3>Our Vision</h3>
          <p>
            {about?.visionText ||
              "Our vision is to redefine how the world works and grows through intelligent digital innovation."}
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="values-section">
        <h2 className="section-title1">Our Core Values</h2>

        <div className="values-grid">
          {(about?.values && about.values.length > 0
            ? about.values
            : [
                {
                  title: "Excellence",
                  text: "We deliver high-quality software with strong focus on performance.",
                  icon: "Award",
                },
                {
                  title: "Collaboration",
                  text: "We work closely with clients as long-term partners.",
                  icon: "Users",
                },
                {
                  title: "Innovation",
                  text: "We adopt modern tech, AI & cloud solutions.",
                  icon: "Target",
                },
                {
                  title: "Growth",
                  text: "We help companies scale faster with custom IT solutions.",
                  icon: "Users",
                },
              ]
          ).map((val, i) => {
            const Icon =
              val.icon === "Award"
                ? Award
                : val.icon === "Target"
                ? Target
                : Users;

            return (
              <div className="value-card" key={i}>
                <Icon className="value-icon" />
                <h4>{val.title}</h4>
                <p>{val.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

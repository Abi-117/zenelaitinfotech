import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminAbout.css";
import AdminHeader from "./AdminHeader";

export default function AdminAbout() {
  const [about, setAbout] = useState({
    heroTitle: "",
    heroText1: "",
    heroText2: "",
    heroImage: "",
    storyTitle: "",
    storyParas: [],
    missionText: "",
    visionText: "",
    values: [],
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/about").then((res) => {
      if (res.data) setAbout(res.data);
    });
  }, []);

  const save = () => {
    axios.put("http://localhost:5000/api/about", about)
      .then(() => alert("About page updated"));
  };

  return (
    <>
    <AdminHeader />
    <div className="admin-about">
      <h1>About Page Admin</h1>

      {/* HERO */}
      <section>
        <h2>Hero Section</h2>
        <input
          value={about.heroTitle}
          onChange={(e) => setAbout({ ...about, heroTitle: e.target.value })}
          placeholder="Hero Title"
        />
        <textarea
          value={about.heroText1}
          onChange={(e) => setAbout({ ...about, heroText1: e.target.value })}
          placeholder="Paragraph 1"
        />
        <textarea
          value={about.heroText2}
          onChange={(e) => setAbout({ ...about, heroText2: e.target.value })}
          placeholder="Paragraph 2"
        />
        <input
          value={about.heroImage}
          onChange={(e) => setAbout({ ...about, heroImage: e.target.value })}
          placeholder="Image URL"
        />
      </section>

      {/* STORY */}
      <section>
        <h2>Our Story</h2>
        <input
          value={about.storyTitle}
          onChange={(e) => setAbout({ ...about, storyTitle: e.target.value })}
        />
        {about.storyParas.map((p, i) => (
          <textarea
            key={i}
            value={p}
            onChange={(e) => {
              const arr = [...about.storyParas];
              arr[i] = e.target.value;
              setAbout({ ...about, storyParas: arr });
            }}
          />
        ))}
        <button
          onClick={() =>
            setAbout({ ...about, storyParas: [...about.storyParas, ""] })
          }
        >
          + Add Paragraph
        </button>
      </section>

      {/* MISSION / VISION */}
      <section>
        <h2>Mission</h2>
        <textarea
          value={about.missionText}
          onChange={(e) => setAbout({ ...about, missionText: e.target.value })}
        />
        <h2>Vision</h2>
        <textarea
          value={about.visionText}
          onChange={(e) => setAbout({ ...about, visionText: e.target.value })}
        />
      </section>

      {/* VALUES */}
      <section>
        <h2>Core Values</h2>
        {about.values.map((v, i) => (
          <div key={i} className="admin-card">
            <input
              value={v.title}
              placeholder="Title"
              onChange={(e) => {
                const arr = [...about.values];
                arr[i].title = e.target.value;
                setAbout({ ...about, values: arr });
              }}
            />
            <textarea
              value={v.text}
              placeholder="Text"
              onChange={(e) => {
                const arr = [...about.values];
                arr[i].text = e.target.value;
                setAbout({ ...about, values: arr });
              }}
            />
            <input
              value={v.icon}
              placeholder="Icon (Award / Users / Target)"
              onChange={(e) => {
                const arr = [...about.values];
                arr[i].icon = e.target.value;
                setAbout({ ...about, values: arr });
              }}
            />
          </div>
        ))}
        <button
          onClick={() =>
            setAbout({
              ...about,
              values: [...about.values, { title: "", text: "", icon: "" }],
            })
          }
        >
          + Add Value
        </button>
      </section>

      <button className="save-btn" onClick={save}>
        Save About Page
      </button>
    </div>
    </>
  );
}

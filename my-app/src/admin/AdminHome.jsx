import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";

export default function AdminHome() {
  const [data, setData] = useState({
    hero: {
      line1: "",
      line2: "",
      line3: "",
      highlight: "",
      rightText: "",
      exploreText: ""
    },
    about: { title: "", text: "" },
    features: [],
    services: [],
    whyChooseUs: [],
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/home").then(res => {
      if (res.data) setData(res.data);
    });
  }, []);

  const update = () => {
    axios.put("http://localhost:5000/api/home", data).then(() => {
      alert("Home Updated");
    });
  };

  return (
    <>
    <AdminHeader/>
    <div className="admin-wrapper">
      <h1>Home Page Editor</h1>

      {/* HERO */}
      <h2>Hero Section</h2>
      <input placeholder="Line 1" value={data.hero.line1}
        onChange={e => setData({...data, hero:{...data.hero, line1:e.target.value}})}
      />
      <input placeholder="Line 2" value={data.hero.line2}
        onChange={e => setData({...data, hero:{...data.hero, line2:e.target.value}})}
      />
      <input placeholder="Line 3" value={data.hero.line3}
        onChange={e => setData({...data, hero:{...data.hero, line3:e.target.value}})}
      />
      <input placeholder="Highlight" value={data.hero.highlight}
        onChange={e => setData({...data, hero:{...data.hero, highlight:e.target.value}})}
      />
      <textarea placeholder="Right Side Text" value={data.hero.rightText}
        onChange={e => setData({...data, hero:{...data.hero, rightText:e.target.value}})}
      />
      <input placeholder="Explore Button Text" value={data.hero.exploreText}
        onChange={e => setData({...data, hero:{...data.hero, exploreText:e.target.value}})}
      />

      {/* ABOUT */}
      <h2>About Section</h2>
      <input placeholder="About Title" value={data.about.title}
        onChange={e => setData({...data, about:{...data.about, title:e.target.value}})}
      />
      <textarea placeholder="About Text" value={data.about.text}
        onChange={e => setData({...data, about:{...data.about, text:e.target.value}})}
      />

      {/* FEATURES */}
      <h2>Features</h2>
      {data.features.map((f, i) => (
        <div key={i}>
          <input value={f.title} placeholder="Title"
            onChange={e => {
              const copy = [...data.features];
              copy[i].title = e.target.value;
              setData({...data, features: copy});
            }}
          />
          <input value={f.description} placeholder="Description"
            onChange={e => {
              const copy = [...data.features];
              copy[i].description = e.target.value;
              setData({...data, features: copy});
            }}
          />
          <input value={f.icon} placeholder="Icon Name"
            onChange={e => {
              const copy = [...data.features];
              copy[i].icon = e.target.value;
              setData({...data, features: copy});
            }}
          />
        </div>
      ))}

      {/* WHY US */}
      <h2>Why Choose Us</h2>
      {data.whyChooseUs.map((w, i) => (
        <div key={i}>
          <input value={w.text} placeholder="Text"
            onChange={e => {
              const copy = [...data.whyChooseUs];
              copy[i].text = e.target.value;
              setData({...data, whyChooseUs: copy});
            }}
          />
        </div>
      ))}

      {/* SAVE */}
      <button onClick={update}>Save All</button>
    </div>
    
    </>
  );
}

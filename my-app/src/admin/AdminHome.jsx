import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminHome.css";
import AdminHeader from "./AdminHeader";
export default function AdminHome() {
  const [home, setHome] = useState({
    heroTitle: "",
    heroSubtitle: "",
    aboutTitle: "",
    aboutText: "",
    services: [],
    whyChoose: [],
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/home").then((res) => {
      if (res.data) setHome(res.data);
    });
  }, []);

  const saveChanges = () => {
    axios
      .put("http://localhost:5000/api/home", home)
      .then(() => alert("Home updated successfully"));
  };

  const addService = () => {
    setHome({
      ...home,
      services: [
        ...home.services,
        { title: "", description: "", image: "", link: "" },
      ],
    });
  };

  const addWhy = () => {
    setHome({
      ...home,
      whyChoose: [...home.whyChoose, { text: "" }],
    });
  };

  return (
    <>
    <AdminHeader/>
    <div className="admin-home">
      <h1>Home Page Admin</h1>

      {/* HERO */}
      <section>
        <h2>Hero Section</h2>
        <input
          value={home.heroTitle}
          onChange={(e) => setHome({ ...home, heroTitle: e.target.value })}
          placeholder="Hero Title"
        />
        <textarea
          value={home.heroSubtitle}
          onChange={(e) => setHome({ ...home, heroSubtitle: e.target.value })}
          placeholder="Hero Subtitle"
        />
      </section>

      {/* ABOUT */}
      <section>
        <h2>About Section</h2>
        <input
          value={home.aboutTitle}
          onChange={(e) => setHome({ ...home, aboutTitle: e.target.value })}
        />
        <textarea
          value={home.aboutText}
          onChange={(e) => setHome({ ...home, aboutText: e.target.value })}
        />
      </section>

      {/* SERVICES */}
      <section>
        <h2>Services</h2>
        {home.services.map((s, i) => (
          <div className="admin-card" key={i}>
            <input
              placeholder="Title"
              value={s.title}
              onChange={(e) => {
                const arr = [...home.services];
                arr[i].title = e.target.value;
                setHome({ ...home, services: arr });
              }}
            />
            <textarea
              placeholder="Description"
              value={s.description}
              onChange={(e) => {
                const arr = [...home.services];
                arr[i].description = e.target.value;
                setHome({ ...home, services: arr });
              }}
            />
            <input
              placeholder="Image URL"
              value={s.image}
              onChange={(e) => {
                const arr = [...home.services];
                arr[i].image = e.target.value;
                setHome({ ...home, services: arr });
              }}
            />
            <input
              placeholder="Link"
              value={s.link}
              onChange={(e) => {
                const arr = [...home.services];
                arr[i].link = e.target.value;
                setHome({ ...home, services: arr });
              }}
            />
          </div>
        ))}
        <button onClick={addService}>+ Add Service</button>
      </section>

      {/* WHY CHOOSE */}
      <section>
        <h2>Why Choose</h2>
        {home.whyChoose.map((w, i) => (
          <input
            key={i}
            value={w.text}
            onChange={(e) => {
              const arr = [...home.whyChoose];
              arr[i].text = e.target.value;
              setHome({ ...home, whyChoose: arr });
            }}
          />
        ))}
        <button onClick={addWhy}>+ Add Point</button>
      </section>

      <button className="save-btn" onClick={saveChanges}>
        Save Changes
      </button>
    </div>
    </>
  );
}

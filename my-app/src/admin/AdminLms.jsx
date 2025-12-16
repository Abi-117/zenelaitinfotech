import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminLms.css";

const API = "http://localhost:5000";

export default function AdminLms() {
  const [form, setForm] = useState({
    heroTitle: "",
    heroText: "",
    features: "",
    perfectFor: [],
    whyChoose: [],
    benefits: [],
  });

  const [loading, setLoading] = useState(true);

  /* ========== FETCH EXISTING DATA ========== */
  useEffect(() => {
    axios
      .get(`${API}/api/lms`)
      .then((res) => {
        if (res.data) {
          setForm({
            ...res.data,
            features: res.data.features?.join(",") || "",
          });
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  /* ========== SAVE / UPDATE ========== */
  const saveLms = async () => {
    try {
      const payload = {
        ...form,
        features: form.features.split(",").map((f) => f.trim()),
      };
      await axios.post(`${API}/api/lms`, payload);
      alert("LMS saved successfully!");
    } catch (err) {
      console.error("SAVE ERROR 👉", err);
      alert("Save failed!");
    }
  };

  /* ========== HELPER FUNCTIONS FOR ARRAYS ========== */
  const addItem = (key) =>
    setForm({ ...form, [key]: [...form[key], { title: "", desc: "" }] });

  const updateItem = (key, index, field, value) => {
    const updated = [...form[key]];
    updated[index][field] = value;
    setForm({ ...form, [key]: updated });
  };

  const removeItem = (key, index) => {
    const updated = [...form[key]];
    updated.splice(index, 1);
    setForm({ ...form, [key]: updated });
  };

  if (loading) return <h2>Loading LMS data...</h2>;

  return (
    <>
      <AdminHeader />
      <div className="admin-page">
        <h1>LMS Admin</h1>

        {/* HERO */}
        <input
          placeholder="Hero Title"
          value={form.heroTitle}
          onChange={(e) => setForm({ ...form, heroTitle: e.target.value })}
        />
        <textarea
          placeholder="Hero Text"
          value={form.heroText}
          onChange={(e) => setForm({ ...form, heroText: e.target.value })}
        />

        {/* FEATURES */}
        <textarea
          placeholder="Features (comma separated)"
          value={form.features}
          onChange={(e) => setForm({ ...form, features: e.target.value })}
        />

        {/* PERFECT FOR */}
        <h3>Perfect For</h3>
        {form.perfectFor.map((p, i) => (
          <div key={i} className="row">
            <input
              placeholder="Title"
              value={p.title}
              onChange={(e) => updateItem("perfectFor", i, "title", e.target.value)}
            />
            <input
              placeholder="Description"
              value={p.desc}
              onChange={(e) => updateItem("perfectFor", i, "desc", e.target.value)}
            />
            <button onClick={() => removeItem("perfectFor", i)}>X</button>
          </div>
        ))}
        <button onClick={() => addItem("perfectFor")}>+ Add</button>

        {/* WHY CHOOSE */}
        <h3>Why Choose</h3>
        {form.whyChoose.map((w, i) => (
          <div key={i} className="row">
            <input
              placeholder="Title"
              value={w.title}
              onChange={(e) => updateItem("whyChoose", i, "title", e.target.value)}
            />
            <input
              placeholder="Description"
              value={w.desc}
              onChange={(e) => updateItem("whyChoose", i, "desc", e.target.value)}
            />
            <button onClick={() => removeItem("whyChoose", i)}>X</button>
          </div>
        ))}
        <button onClick={() => addItem("whyChoose")}>+ Add</button>

        {/* BENEFITS */}
        <h3>Benefits</h3>
        {form.benefits.map((b, i) => (
          <div key={i} className="row">
            <input
              placeholder="Title"
              value={b.title}
              onChange={(e) => updateItem("benefits", i, "title", e.target.value)}
            />
            <input
              placeholder="Description"
              value={b.desc}
              onChange={(e) => updateItem("benefits", i, "desc", e.target.value)}
            />
            <button onClick={() => removeItem("benefits", i)}>X</button>
          </div>
        ))}
        <button onClick={() => addItem("benefits")}>+ Add</button>

        <button className="save-btn" onClick={saveLms}>
          Save LMS
        </button>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminSaas.css";

const API = "http://localhost:5000";

export default function AdminSaas() {
  const [saas, setSaas] = useState({
    heroTitle: "",
    heroText: "",
    heroImage: "",

    features: [],
    perfectFor: [],
    whyChoose: [],
  });

  /* FETCH */
  const fetchSaas = async () => {
    try {
      const res = await axios.get(`${API}/api/saas`);
      if (res.data) setSaas(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSaas();
  }, []);

  /* SAVE */
  const save = async () => {
    try {
      await axios.put(`${API}/api/saas`, saas);
      alert("SaaS page updated");
      fetchSaas();
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  const addFeature = () => {
    setSaas({ ...saas, features: [...saas.features, ""] });
  };

  const addCard = (field) => {
    setSaas({
      ...saas,
      [field]: [...saas[field], { title: "", desc: "" }],
    });
  };

  const removeItem = (field, index) => {
    const arr = [...saas[field]];
    arr.splice(index, 1);
    setSaas({ ...saas, [field]: arr });
  };

  return (
    <>
      <AdminHeader />

      <div className="admin-page">
        <h1>SaaS Page Admin</h1>

        {/* HERO */}
        <input
          placeholder="Hero Title"
          value={saas.heroTitle}
          onChange={(e) =>
            setSaas({ ...saas, heroTitle: e.target.value })
          }
        />

        <textarea
          placeholder="Hero Text"
          value={saas.heroText}
          onChange={(e) =>
            setSaas({ ...saas, heroText: e.target.value })
          }
        />

        <input
          placeholder="Hero Image Filename (example: saas.jpg)"
          value={saas.heroImage}
          onChange={(e) =>
            setSaas({ ...saas, heroImage: e.target.value })
          }
        />

        {/* FEATURES */}
        <h3>What We Provide</h3>
        {saas.features.map((f, i) => (
          <div key={i} className="row">
            <input
              value={f}
              onChange={(e) => {
                const arr = [...saas.features];
                arr[i] = e.target.value;
                setSaas({ ...saas, features: arr });
              }}
            />
            <button onClick={() => removeItem("features", i)}>❌</button>
          </div>
        ))}
        <button onClick={addFeature}>+ Add Feature</button>

        {/* PERFECT FOR */}
        <h3>Perfect For</h3>
        {saas.perfectFor.map((p, i) => (
          <div key={i} className="card-row">
            <input
              placeholder="Title"
              value={p.title}
              onChange={(e) => {
                const arr = [...saas.perfectFor];
                arr[i].title = e.target.value;
                setSaas({ ...saas, perfectFor: arr });
              }}
            />
            <input
              placeholder="Description"
              value={p.desc}
              onChange={(e) => {
                const arr = [...saas.perfectFor];
                arr[i].desc = e.target.value;
                setSaas({ ...saas, perfectFor: arr });
              }}
            />
            <button onClick={() => removeItem("perfectFor", i)}>❌</button>
          </div>
        ))}
        <button onClick={() => addCard("perfectFor")}>+ Add Card</button>

        {/* WHY CHOOSE */}
        <h3>Why Choose</h3>
        {saas.whyChoose.map((w, i) => (
          <div key={i} className="card-row">
            <input
              placeholder="Title"
              value={w.title}
              onChange={(e) => {
                const arr = [...saas.whyChoose];
                arr[i].title = e.target.value;
                setSaas({ ...saas, whyChoose: arr });
              }}
            />
            <input
              placeholder="Description"
              value={w.desc}
              onChange={(e) => {
                const arr = [...saas.whyChoose];
                arr[i].desc = e.target.value;
                setSaas({ ...saas, whyChoose: arr });
              }}
            />
            <button onClick={() => removeItem("whyChoose", i)}>❌</button>
          </div>
        ))}
        <button onClick={() => addCard("whyChoose")}>+ Add Card</button>

        <button className="save-btn" onClick={save}>
          Save SaaS Page
        </button>
      </div>
    </>
  );
}

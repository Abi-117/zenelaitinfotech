import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./admin.css";

export default function AdminSaas() {
  const [saas, setSaas] = useState({
    heroTitle: "",
    heroText: "",
    features: [],
    perfectFor: [],
    whyChoose: []
  });

  const [feature, setFeature] = useState("");
  const [pfTitle, setPfTitle] = useState("");
  const [pfDesc, setPfDesc] = useState("");
  const [whyTitle, setWhyTitle] = useState("");
  const [whyDesc, setWhyDesc] = useState("");

  // GET
  useEffect(() => {
    axios.get("http://localhost:5000/api/saas")
      .then(res => res.data && setSaas(res.data));
  }, []);

  // SAVE
  const saveData = () => {
    axios.put("http://localhost:5000/api/saas", saas)
      .then(() => alert("SaaS Page Updated Successfully"));
  };

  return (
    <>
      <AdminHeader />

      <div className="admin-page">
        <h1>SaaS Page Management</h1>

        {/* HERO */}
        <h3>Hero Section</h3>
        <input
          placeholder="Hero Title"
          value={saas.heroTitle}
          onChange={e => setSaas({ ...saas, heroTitle: e.target.value })}
        />

        <textarea
          placeholder="Hero Description"
          value={saas.heroText}
          onChange={e => setSaas({ ...saas, heroText: e.target.value })}
        />

        {/* FEATURES */}
        <h3>Key Features</h3>
        <div className="row">
          <input
            placeholder="Add Feature"
            value={feature}
            onChange={e => setFeature(e.target.value)}
          />
          <button
            onClick={() => {
              if (!feature) return;
              setSaas({ ...saas, features: [...saas.features, feature] });
              setFeature("");
            }}
          >
            Add
          </button>
        </div>

        <ul>
          {saas.features.map((f, i) => (
            <li key={i}>
              {f}
              <button
                onClick={() =>
                  setSaas({
                    ...saas,
                    features: saas.features.filter((_, idx) => idx !== i)
                  })
                }
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        {/* PERFECT FOR */}
        <h3>Perfect For</h3>
        <input
          placeholder="Title"
          value={pfTitle}
          onChange={e => setPfTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={pfDesc}
          onChange={e => setPfDesc(e.target.value)}
        />
        <button
          onClick={() => {
            setSaas({
              ...saas,
              perfectFor: [...saas.perfectFor, { title: pfTitle, desc: pfDesc }]
            });
            setPfTitle("");
            setPfDesc("");
          }}
        >
          Add
        </button>

        {saas.perfectFor.map((p, i) => (
          <div key={i} className="box">
            <b>{p.title}</b>
            <p>{p.desc}</p>
            <button
              onClick={() =>
                setSaas({
                  ...saas,
                  perfectFor: saas.perfectFor.filter((_, idx) => idx !== i)
                })
              }
            >
              Delete
            </button>
          </div>
        ))}

        {/* WHY CHOOSE */}
        <h3>Why Choose SaaS</h3>
        <input
          placeholder="Title"
          value={whyTitle}
          onChange={e => setWhyTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={whyDesc}
          onChange={e => setWhyDesc(e.target.value)}
        />
        <button
          onClick={() => {
            setSaas({
              ...saas,
              whyChoose: [...saas.whyChoose, { title: whyTitle, desc: whyDesc }]
            });
            setWhyTitle("");
            setWhyDesc("");
          }}
        >
          Add
        </button>

        {saas.whyChoose.map((w, i) => (
          <div key={i} className="box">
            <b>{w.title}</b>
            <p>{w.desc}</p>
            <button
              onClick={() =>
                setSaas({
                  ...saas,
                  whyChoose: saas.whyChoose.filter((_, idx) => idx !== i)
                })
              }
            >
              Delete
            </button>
          </div>
        ))}

        <button className="save-btn" onClick={saveData}>
          Save SaaS Page
        </button>
      </div>
    </>
  );
}

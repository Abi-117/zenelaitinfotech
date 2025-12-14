import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./admin.css";

export default function AdminLms() {
  const [lms, setLms] = useState({
    heroTitle: "",
    heroText: "",
    features: [],
    perfectFor: [],
    benefits: []
  });

  const [featureInput, setFeatureInput] = useState("");
  const [pfTitle, setPfTitle] = useState("");
  const [pfDesc, setPfDesc] = useState("");
  const [benTitle, setBenTitle] = useState("");
  const [benDesc, setBenDesc] = useState("");

  // GET DATA
  useEffect(() => {
    axios.get("http://localhost:5000/api/lms")
      .then(res => res.data && setLms(res.data));
  }, []);

  // SAVE
  const saveData = () => {
    axios.put("http://localhost:5000/api/lms", lms)
      .then(() => alert("LMS Page Updated Successfully"));
  };

  return (
    <>
      <AdminHeader />

      <div className="admin-page">
        <h1>LMS Page Management</h1>

        {/* HERO */}
        <h3>Hero Section</h3>
        <input
          placeholder="Hero Title"
          value={lms.heroTitle}
          onChange={e => setLms({ ...lms, heroTitle: e.target.value })}
        />

        <textarea
          placeholder="Hero Description"
          value={lms.heroText}
          onChange={e => setLms({ ...lms, heroText: e.target.value })}
        />

        {/* FEATURES */}
        <h3>Key Features</h3>
        <div className="row">
          <input
            placeholder="Add Feature"
            value={featureInput}
            onChange={e => setFeatureInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (!featureInput) return;
              setLms({ ...lms, features: [...lms.features, featureInput] });
              setFeatureInput("");
            }}
          >
            Add
          </button>
        </div>

        <ul>
          {lms.features.map((f, i) => (
            <li key={i}>
              {f}
              <button
                onClick={() =>
                  setLms({
                    ...lms,
                    features: lms.features.filter((_, idx) => idx !== i)
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
            setLms({
              ...lms,
              perfectFor: [...lms.perfectFor, { title: pfTitle, desc: pfDesc }]
            });
            setPfTitle("");
            setPfDesc("");
          }}
        >
          Add
        </button>

        {lms.perfectFor.map((p, i) => (
          <div key={i} className="box">
            <b>{p.title}</b>
            <p>{p.desc}</p>
            <button
              onClick={() =>
                setLms({
                  ...lms,
                  perfectFor: lms.perfectFor.filter((_, idx) => idx !== i)
                })
              }
            >
              Delete
            </button>
          </div>
        ))}

        {/* BENEFITS */}
        <h3>Benefits</h3>
        <input
          placeholder="Title"
          value={benTitle}
          onChange={e => setBenTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={benDesc}
          onChange={e => setBenDesc(e.target.value)}
        />
        <button
          onClick={() => {
            setLms({
              ...lms,
              benefits: [...lms.benefits, { title: benTitle, desc: benDesc }]
            });
            setBenTitle("");
            setBenDesc("");
          }}
        >
          Add
        </button>

        {lms.benefits.map((b, i) => (
          <div key={i} className="box">
            <b>{b.title}</b>
            <p>{b.desc}</p>
            <button
              onClick={() =>
                setLms({
                  ...lms,
                  benefits: lms.benefits.filter((_, idx) => idx !== i)
                })
              }
            >
              Delete
            </button>
          </div>
        ))}

        <button className="save-btn" onClick={saveData}>
          Save LMS Page
        </button>
      </div>
    </>
  );
}

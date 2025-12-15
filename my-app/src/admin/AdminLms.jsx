import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminLms.css";

const API = "http://localhost:5000";

export default function AdminLms() {
  const [lms, setLms] = useState({
    heroTitle: "",
    heroText: "",
    features: [],
    perfectFor: [],
    whyChoose: [],
  });

  const [featureInput, setFeatureInput] = useState("");
  const [pfTitle, setPfTitle] = useState("");
  const [pfDesc, setPfDesc] = useState("");
  const [whyTitle, setWhyTitle] = useState("");
  const [whyDesc, setWhyDesc] = useState("");

  const [loading, setLoading] = useState(true);

  /* FETCH LMS DATA */
  useEffect(() => {
    axios
      .get(`${API}/api/lms`)
      .then((res) => {
        if (res.data) setLms(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  /* SAVE LMS DATA */
  const saveData = async () => {
    try {
      await axios.put(`${API}/api/lms`, lms);
      alert("LMS Page Updated Successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Update Failed ❌");
    }
  };

  /* ADD / REMOVE HANDLERS */
  const addFeature = () => {
    if (!featureInput) return;
    setLms({ ...lms, features: [...lms.features, featureInput] });
    setFeatureInput("");
  };

  const addCard = (field, title, desc, setTitle, setDesc) => {
    if (!title || !desc) return;
    setLms({ ...lms, [field]: [...lms[field], { title, desc }] });
    setTitle("");
    setDesc("");
  };

  const removeItem = (field, index) => {
    const arr = [...lms[field]];
    arr.splice(index, 1);
    setLms({ ...lms, [field]: arr });
  };

  if (loading) return <h2>Loading LMS Data...</h2>;

  return (
    <>
      <AdminHeader />
      <div className="admin-page">
        <h1>Admin – LMS Page</h1>

        {/* HERO */}
        <h3>Hero Section</h3>
        <input
          placeholder="Hero Title"
          value={lms.heroTitle}
          onChange={(e) => setLms({ ...lms, heroTitle: e.target.value })}
        />
        <textarea
          placeholder="Hero Description"
          value={lms.heroText}
          onChange={(e) => setLms({ ...lms, heroText: e.target.value })}
        />

        {/* FEATURES */}
        <h3>Key Features</h3>
        <div className="row">
          <input
            placeholder="Add Feature"
            value={featureInput}
            onChange={(e) => setFeatureInput(e.target.value)}
          />
          <button onClick={addFeature}>Add</button>
        </div>
        <ul>
          {lms.features.map((f, i) => (
            <li key={i}>
              {f} <button onClick={() => removeItem("features", i)}>❌</button>
            </li>
          ))}
        </ul>

        {/* PERFECT FOR */}
        <h3>Perfect For</h3>
        <input
          placeholder="Title"
          value={pfTitle}
          onChange={(e) => setPfTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={pfDesc}
          onChange={(e) => setPfDesc(e.target.value)}
        />
        <button
          onClick={() =>
            addCard("perfectFor", pfTitle, pfDesc, setPfTitle, setPfDesc)
          }
        >
          Add
        </button>
        {lms.perfectFor.map((p, i) => (
          <div key={i} className="card-row">
            <b>{p.title}</b>
            <p>{p.desc}</p>
            <button onClick={() => removeItem("perfectFor", i)}>❌</button>
          </div>
        ))}

        {/* WHY CHOOSE */}
        <h3>Why Choose LMS</h3>
        <input
          placeholder="Title"
          value={whyTitle}
          onChange={(e) => setWhyTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={whyDesc}
          onChange={(e) => setWhyDesc(e.target.value)}
        />
        <button
          onClick={() =>
            addCard("whyChoose", whyTitle, whyDesc, setWhyTitle, setWhyDesc)
          }
        >
          Add
        </button>
        {lms.whyChoose.map((w, i) => (
          <div key={i} className="card-row">
            <b>{w.title}</b>
            <p>{w.desc}</p>
            <button onClick={() => removeItem("whyChoose", i)}>❌</button>
          </div>
        ))}

        <button className="save-btn" onClick={saveData}>
          Save LMS Page
        </button>
      </div>
    </>
  );
}

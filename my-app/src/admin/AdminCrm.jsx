import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./admin.css";

const API = "http://localhost:5000";

export default function AdminCrm() {
  const [crm, setCrm] = useState({
    title: "",
    subtitle: "",
    benefits: [],
    perfectFor: [],
    why: [],
  });

  const [newBenefit, setNewBenefit] = useState("");
  const [pfTitle, setPfTitle] = useState("");
  const [pfDesc, setPfDesc] = useState("");
  const [whyTitle, setWhyTitle] = useState("");
  const [whyDesc, setWhyDesc] = useState("");

  // FETCH
  const fetchCrm = async () => {
    try {
      const res = await axios.get(`${API}/api/crm`);
      if (res.data) setCrm(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCrm();
  }, []);

  // SAVE
  const saveCrm = async () => {
    try {
      await axios.put(`${API}/api/crm`, crm);
      alert("CRM Page Updated ✅");
      fetchCrm();
    } catch (err) {
      console.error(err);
      alert("Save Failed ❌");
    }
  };

  // HELPERS
  const addBenefit = () => {
    if (!newBenefit) return;
    setCrm({ ...crm, benefits: [...crm.benefits, newBenefit] });
    setNewBenefit("");
  };

  const addCard = (field, title, desc, setTitle, setDesc) => {
    if (!title || !desc) return;
    setCrm({ ...crm, [field]: [...crm[field], { title, desc }] });
    setTitle("");
    setDesc("");
  };

  const removeItem = (field, index) => {
    const arr = [...crm[field]];
    arr.splice(index, 1);
    setCrm({ ...crm, [field]: arr });
  };

  return (
    <>
      <AdminHeader />
      <div className="admin-page">
        <h1>CRM Page Admin</h1>

        {/* TITLE */}
        <input
          placeholder="Title"
          value={crm.title}
          onChange={(e) => setCrm({ ...crm, title: e.target.value })}
        />
        <textarea
          placeholder="Subtitle"
          value={crm.subtitle}
          onChange={(e) => setCrm({ ...crm, subtitle: e.target.value })}
        />

        {/* BENEFITS */}
        <h3>Benefits</h3>
        {crm.benefits.map((b, i) => (
          <div key={i} className="row">
            <input
              value={b}
              onChange={(e) => {
                const arr = [...crm.benefits];
                arr[i] = e.target.value;
                setCrm({ ...crm, benefits: arr });
              }}
            />
            <button onClick={() => removeItem("benefits", i)}>❌</button>
          </div>
        ))}
        <div className="row">
          <input
            placeholder="Add Benefit"
            value={newBenefit}
            onChange={(e) => setNewBenefit(e.target.value)}
          />
          <button onClick={addBenefit}>+ Add Benefit</button>
        </div>

        {/* PERFECT FOR */}
        <h3>Perfect For</h3>
        {crm.perfectFor.map((p, i) => (
          <div key={i} className="card-row">
            <b>{p.title}</b> - <span>{p.desc}</span>
            <button onClick={() => removeItem("perfectFor", i)}>❌</button>
          </div>
        ))}
        <input
          placeholder="Title"
          value={pfTitle}
          onChange={(e) => setPfTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={pfDesc}
          onChange={(e) => setPfDesc(e.target.value)}
        />
        <button
          onClick={() =>
            addCard("perfectFor", pfTitle, pfDesc, setPfTitle, setPfDesc)
          }
        >
          + Add Card
        </button>

        {/* WHY */}
        <h3>Why Choose CRM</h3>
        {crm.why.map((w, i) => (
          <div key={i} className="card-row">
            <b>{w.title}</b> - <span>{w.desc}</span>
            <button onClick={() => removeItem("why", i)}>❌</button>
          </div>
        ))}
        <input
          placeholder="Title"
          value={whyTitle}
          onChange={(e) => setWhyTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={whyDesc}
          onChange={(e) => setWhyDesc(e.target.value)}
        />
        <button
          onClick={() =>
            addCard("why", whyTitle, whyDesc, setWhyTitle, setWhyDesc)
          }
        >
          + Add Card
        </button>

        <button className="save-btn" onClick={saveCrm}>
          Save CRM Page
        </button>
      </div>
    </>
  );
}

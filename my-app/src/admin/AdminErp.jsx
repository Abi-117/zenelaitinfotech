import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminErp.css";

const API = "http://localhost:5000";

export default function AdminErp() {
  const [erp, setErp] = useState({
    heroTitle: "",
    heroText: "",
    features: [],
    perfectFor: [],
    why: [],
  });

  /* FETCH */
  const fetchErp = async () => {
    try {
      const res = await axios.get(`${API}/api/erp`);
      if (res.data) setErp(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchErp();
  }, []);

  /* SAVE */
  const save = async () => {
    try {
      await axios.put(`${API}/api/erp`, erp);
      alert("ERP page updated");
      fetchErp();
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  const addCard = (field) => {
    setErp({ ...erp, [field]: [...erp[field], { title: "", desc: "" }] });
  };

  const removeItem = (field, index) => {
    const arr = [...erp[field]];
    arr.splice(index, 1);
    setErp({ ...erp, [field]: arr });
  };

  return (
    <>
      <AdminHeader />

      <div className="admin-page">
        <h1>ERP Page Admin</h1>

        <input
          placeholder="Hero Title"
          value={erp.heroTitle}
          onChange={e => setErp({ ...erp, heroTitle: e.target.value })}
        />

        <textarea
          placeholder="Hero Text"
          value={erp.heroText}
          onChange={e => setErp({ ...erp, heroText: e.target.value })}
        />

        <h3>Features</h3>
        {erp.features.map((f, i) => (
          <div key={i} className="row">
            <input
              value={f}
              onChange={e => {
                const arr = [...erp.features];
                arr[i] = e.target.value;
                setErp({ ...erp, features: arr });
              }}
            />
            <button onClick={() => removeItem("features", i)}>❌</button>
          </div>
        ))}
        <button onClick={() => setErp({ ...erp, features: [...erp.features, ""] })}>
          + Add Feature
        </button>

        <h3>Perfect For</h3>
        {erp.perfectFor.map((p, i) => (
          <div key={i} className="card-row">
            <input
              placeholder="Title"
              value={p.title}
              onChange={e => {
                const arr = [...erp.perfectFor];
                arr[i].title = e.target.value;
                setErp({ ...erp, perfectFor: arr });
              }}
            />
            <input
              placeholder="Description"
              value={p.desc}
              onChange={e => {
                const arr = [...erp.perfectFor];
                arr[i].desc = e.target.value;
                setErp({ ...erp, perfectFor: arr });
              }}
            />
            <button onClick={() => removeItem("perfectFor", i)}>❌</button>
          </div>
        ))}
        <button onClick={() => addCard("perfectFor")}>+ Add Card</button>

        <h3>Why Choose</h3>
        {erp.why.map((w, i) => (
          <div key={i} className="card-row">
            <input
              placeholder="Title"
              value={w.title}
              onChange={e => {
                const arr = [...erp.why];
                arr[i].title = e.target.value;
                setErp({ ...erp, why: arr });
              }}
            />
            <input
              placeholder="Description"
              value={w.desc}
              onChange={e => {
                const arr = [...erp.why];
                arr[i].desc = e.target.value;
                setErp({ ...erp, why: arr });
              }}
            />
            <button onClick={() => removeItem("why", i)}>❌</button>
          </div>
        ))}
        <button onClick={() => addCard("why")}>+ Add Card</button>

        <button className="save-btn" onClick={save}>
          Save ERP Page
        </button>
      </div>
    </>
  );
}

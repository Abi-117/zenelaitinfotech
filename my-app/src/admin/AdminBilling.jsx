import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminBilling.css";

const API = "http://localhost:5000";

export default function AdminBilling() {
  const [billing, setBilling] = useState({
    title: "",
    subtitle: "",
    benefits: [],
    perfectFor: [],
    why: [],
  });

  /* FETCH */
  const fetchBilling = async () => {
    try {
      const res = await axios.get(`${API}/api/billing`);
      if (res.data) setBilling(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBilling();
  }, []);

  /* SAVE */
  const save = async () => {
    try {
      await axios.put(`${API}/api/billing`, billing);
      alert("Billing page updated");
      fetchBilling();
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  /* ADD / REMOVE HELPERS */
  const addBenefit = () => {
    setBilling({
      ...billing,
      benefits: [...billing.benefits, ""],
    });
  };

  const addCard = (field) => {
    setBilling({
      ...billing,
      [field]: [...billing[field], { title: "", desc: "" }],
    });
  };

  const removeItem = (field, index) => {
    const arr = [...billing[field]];
    arr.splice(index, 1);
    setBilling({ ...billing, [field]: arr });
  };

  return (
    <>
      <AdminHeader />

      <div className="admin-page">
        <h1>Billing Page Admin</h1>

        {/* TITLE */}
        <input
          placeholder="Title"
          value={billing.title}
          onChange={(e) =>
            setBilling({ ...billing, title: e.target.value })
          }
        />

        <textarea
          placeholder="Subtitle"
          value={billing.subtitle}
          onChange={(e) =>
            setBilling({ ...billing, subtitle: e.target.value })
          }
        />

        {/* BENEFITS */}
        <h3>Benefits</h3>
        {billing.benefits.map((b, i) => (
          <div key={i} className="row">
            <input
              value={b}
              onChange={(e) => {
                const arr = [...billing.benefits];
                arr[i] = e.target.value;
                setBilling({ ...billing, benefits: arr });
              }}
            />
            <button type="button" onClick={() => removeItem("benefits", i)}>
              ❌
            </button>
          </div>
        ))}
        <button onClick={addBenefit}>+ Add Benefit</button>

        {/* PERFECT FOR */}
        <h3>Perfect For</h3>
        {billing.perfectFor.map((p, i) => (
          <div key={i} className="card-row">
            <input
              placeholder="Title"
              value={p.title}
              onChange={(e) => {
                const arr = [...billing.perfectFor];
                arr[i].title = e.target.value;
                setBilling({ ...billing, perfectFor: arr });
              }}
            />
            <input
              placeholder="Description"
              value={p.desc}
              onChange={(e) => {
                const arr = [...billing.perfectFor];
                arr[i].desc = e.target.value;
                setBilling({ ...billing, perfectFor: arr });
              }}
            />
            <button onClick={() => removeItem("perfectFor", i)}>❌</button>
          </div>
        ))}
        <button onClick={() => addCard("perfectFor")}>+ Add Card</button>

        {/* WHY */}
        <h3>Why Choose</h3>
        {billing.why.map((w, i) => (
          <div key={i} className="card-row">
            <input
              placeholder="Title"
              value={w.title}
              onChange={(e) => {
                const arr = [...billing.why];
                arr[i].title = e.target.value;
                setBilling({ ...billing, why: arr });
              }}
            />
            <input
              placeholder="Description"
              value={w.desc}
              onChange={(e) => {
                const arr = [...billing.why];
                arr[i].desc = e.target.value;
                setBilling({ ...billing, why: arr });
              }}
            />
            <button onClick={() => removeItem("why", i)}>❌</button>
          </div>
        ))}
        <button onClick={() => addCard("why")}>+ Add Card</button>

        {/* SAVE */}
        <button className="save-btn" onClick={save}>
          Save Billing Page
        </button>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./AdminBilling.css";

const API = "http://localhost:5000";

/* DEFAULT STRUCTURE (VERY IMPORTANT) */
const defaultBilling = {
  title: "",
  subtitle: "",
  benefits: [],
  perfectFor: [],
  why: [],
};

export default function AdminBilling() {
  const [billing, setBilling] = useState(defaultBilling);
  const [loading, setLoading] = useState(true);

  /* FETCH */
  const fetchBilling = async () => {
    try {
      const res = await axios.get(`${API}/api/billing`);

      const data = res.data || {};

      // 🔥 Normalize backend response (CRITICAL FIX)
      setBilling({
        title: data.title || "",
        subtitle: data.subtitle || "",
        benefits: Array.isArray(data.benefits) ? data.benefits : [],
        perfectFor: Array.isArray(data.perfectFor) ? data.perfectFor : [],
        why: Array.isArray(data.why) ? data.why : [],
      });
    } catch (err) {
      console.error("Fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBilling();
  }, []);

  /* SAVE */
  const save = async () => {
    try {
      await axios.put(`${API}/api/billing`, billing);
      alert("✅ Billing page updated successfully");
      fetchBilling();
    } catch (err) {
      console.error("Save failed:", err);
      alert("❌ Save failed");
    }
  };

  /* HELPERS */
  const addBenefit = () => {
    setBilling((prev) => ({
      ...prev,
      benefits: [...prev.benefits, ""],
    }));
  };

  const addCard = (field) => {
    setBilling((prev) => ({
      ...prev,
      [field]: [...prev[field], { title: "", desc: "" }],
    }));
  };

  const updateField = (field, index, key, value) => {
    const arr = [...billing[field]];
    arr[index][key] = value;
    setBilling({ ...billing, [field]: arr });
  };

  const updateBenefit = (index, value) => {
    const arr = [...billing.benefits];
    arr[index] = value;
    setBilling({ ...billing, benefits: arr });
  };

  const removeItem = (field, index) => {
    const arr = [...billing[field]];
    arr.splice(index, 1);
    setBilling({ ...billing, [field]: arr });
  };

  if (loading) return <h2 style={{ padding: 20 }}>Loading...</h2>;

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
              placeholder={`Benefit ${i + 1}`}
              onChange={(e) => updateBenefit(i, e.target.value)}
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
              onChange={(e) =>
                updateField("perfectFor", i, "title", e.target.value)
              }
            />
            <input
              placeholder="Description"
              value={p.desc}
              onChange={(e) =>
                updateField("perfectFor", i, "desc", e.target.value)
              }
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
              onChange={(e) =>
                updateField("why", i, "title", e.target.value)
              }
            />
            <input
              placeholder="Description"
              value={w.desc}
              onChange={(e) =>
                updateField("why", i, "desc", e.target.value)
              }
            />
            <button onClick={() => removeItem("why", i)}>❌</button>
          </div>
        ))}
        <button onClick={() => addCard("why")}>+ Add Card</button>

        {/* SAVE */}
        <button className="save-btn" onClick={save}>
          💾 Save Billing Page
        </button>
      </div>
    </>
  );
}

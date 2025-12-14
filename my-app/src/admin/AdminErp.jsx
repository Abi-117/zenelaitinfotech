import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminErp.css";

export default function AdminErp() {
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    heroTitle: "",
    heroText: "",
    whatsapp: "",
    featuresTitle: "",
    features: "",
    whyTitle: "",
    why: "",
  });

  /* FETCH ERP DATA */
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/erp")
      .then((res) => {
        const data = res.data;
        setForm({
          heroTitle: data.heroTitle || "",
          heroText: data.heroText || "",
          whatsapp: data.whatsapp || "",
          featuresTitle: data.featuresTitle || "",
          features: (data.features || []).join("\n"),
          whyTitle: data.whyTitle || "",
          why: (data.why || []).join("\n"),
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  /* HANDLE CHANGE */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* SAVE ERP DATA */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      features: form.features.split("\n"),
      why: form.why.split("\n"),
    };

    try {
      await axios.put("http://localhost:5000/api/erp", payload);
      alert("ERP Page Updated Successfully ✅");
    } catch (error) {
      console.error(error);
      alert("Update Failed ❌");
    }
  };

  if (loading) return <h2>Loading ERP Data...</h2>;

  return (
    <div className="admin-erp">
      <h1>Admin – ERP Page</h1>

      <form onSubmit={handleSubmit} className="admin-form">
        {/* HERO */}
        <label>Hero Title</label>
        <input
          name="heroTitle"
          value={form.heroTitle}
          onChange={handleChange}
        />

        <label>Hero Description</label>
        <textarea
          name="heroText"
          value={form.heroText}
          onChange={handleChange}
        />

        <label>WhatsApp Link</label>
        <input
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
        />

        {/* FEATURES */}
        <label>Features Title</label>
        <input
          name="featuresTitle"
          value={form.featuresTitle}
          onChange={handleChange}
        />

        <label>Features (one per line)</label>
        <textarea
          name="features"
          rows="6"
          value={form.features}
          onChange={handleChange}
        />

        {/* WHY ERP */}
        <label>Why ERP Title</label>
        <input
          name="whyTitle"
          value={form.whyTitle}
          onChange={handleChange}
        />

        <label>Why ERP Points (one per line)</label>
        <textarea
          name="why"
          rows="6"
          value={form.why}
          onChange={handleChange}
        />

        <button type="submit" className="save-btn">
          Save ERP Page
        </button>
      </form>
    </div>
  );
}

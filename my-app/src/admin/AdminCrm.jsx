import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminCrm.css";
import AdminHeader from "./AdminHeader";

export default function AdminCrm() {
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    heroTitle: "",
    heroText: "",
    whatsapp: "",
    benefitsTitle: "",
    benefits: "",
    whyTitle: "",
    why: "",
  });

  /* FETCH CRM DATA */
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/crm")
      .then((res) => {
        const data = res.data;
        setForm({
          heroTitle: data.heroTitle || "",
          heroText: data.heroText || "",
          whatsapp: data.whatsapp || "",
          benefitsTitle: data.benefitsTitle || "",
          benefits: (data.benefits || []).join("\n"),
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

  /* HANDLE INPUT CHANGE */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* SAVE CRM DATA */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      heroTitle: form.heroTitle,
      heroText: form.heroText,
      whatsapp: form.whatsapp,
      benefitsTitle: form.benefitsTitle,
      benefits: form.benefits.split("\n"),
      whyTitle: form.whyTitle,
      why: form.why.split("\n"),
    };

    try {
      await axios.put("http://localhost:5000/api/crm", payload);
      alert("CRM Page Updated Successfully ✅");
    } catch (error) {
      console.error(error);
      alert("Update Failed ❌");
    }
  };

  if (loading) return <h2>Loading CRM Data...</h2>;

  return (
<>
    <AdminHeader />
    <div className="admin-crm">
      <h1>Admin – CRM Page</h1>

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
          rows="4"
          value={form.heroText}
          onChange={handleChange}
        />

        <label>WhatsApp Link</label>
        <input
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
        />

        {/* BENEFITS */}
        <label>Benefits Section Title</label>
        <input
          name="benefitsTitle"
          value={form.benefitsTitle}
          onChange={handleChange}
        />

        <label>Benefits (one per line)</label>
        <textarea
          name="benefits"
          rows="6"
          value={form.benefits}
          onChange={handleChange}
        />

        {/* WHY CRM */}
        <label>Why CRM Title</label>
        <input
          name="whyTitle"
          value={form.whyTitle}
          onChange={handleChange}
        />

        <label>Why CRM Points (one per line)</label>
        <textarea
          name="why"
          rows="6"
          value={form.why}
          onChange={handleChange}
        />

        <button type="submit" className="save-btn">
          Save CRM Page
        </button>
      </form>
    </div>
    </>
  );
}

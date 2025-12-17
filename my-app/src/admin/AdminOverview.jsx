import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";

export default function AdminLanding() {
  const [data, setData] = useState({
    heroTitle: "",
    heroHighlight: "",
    heroServices: "",
    heroTrust: "",
    services: [],
    whyChoose: [],
    ctaTitle: "",
    ctaText: "",
  });

  /* =========================
     FETCH DATA
  ========================= */
  useEffect(() => {
    axios.get("http://localhost:5000/api/landing").then((res) => {
      if (res.data) setData(res.data);
    });
  }, []);

  /* =========================
     SAVE DATA
  ========================= */
  const saveData = () => {
    axios.post("http://localhost:5000/api/landing", data);
    alert("Landing Page Updated Successfully");
  };

  /* =========================
     SERVICES HANDLERS
  ========================= */
  const addService = () => {
    setData({
      ...data,
      services: [...data.services, { title: "", desc: "", icon: "" }],
    });
  };

  const updateService = (index, field, value) => {
    const updated = data.services.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setData({ ...data, services: updated });
  };

  const deleteService = (index) => {
    const filtered = data.services.filter((_, i) => i !== index);
    setData({ ...data, services: filtered });
  };

  /* =========================
     WHY CHOOSE HANDLERS
  ========================= */
  const addWhy = () => {
    setData({
      ...data,
      whyChoose: [...data.whyChoose, { title: "", desc: "", icon: "" }],
    });
  };

  const updateWhy = (index, field, value) => {
    const updated = data.whyChoose.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setData({ ...data, whyChoose: updated });
  };

  const deleteWhy = (index) => {
    const filtered = data.whyChoose.filter((_, i) => i !== index);
    setData({ ...data, whyChoose: filtered });
  };

  return (
    <>
    <AdminHeader></AdminHeader>
    <div style={{ padding: 30 }}>
      <h2>Admin – Landing Page</h2>

      {/* ================= HERO ================= */}
      <h3>Hero Section</h3>
      <input
        placeholder="Hero Title"
        value={data.heroTitle}
        onChange={(e) =>
          setData({ ...data, heroTitle: e.target.value })
        }
      />
      <br />
      <input
        placeholder="Highlight Text"
        value={data.heroHighlight}
        onChange={(e) =>
          setData({ ...data, heroHighlight: e.target.value })
        }
      />
      <br />
      <input
        placeholder="Services Line"
        value={data.heroServices}
        onChange={(e) =>
          setData({ ...data, heroServices: e.target.value })
        }
      />
      <br />
      <input
        placeholder="Trust Text"
        value={data.heroTrust}
        onChange={(e) =>
          setData({ ...data, heroTrust: e.target.value })
        }
      />

      {/* ================= SERVICES ================= */}
      <h3>Services</h3>
      {data.services.map((s, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <input
            placeholder="Service Title"
            value={s.title}
            onChange={(e) =>
              updateService(i, "title", e.target.value)
            }
          />
          <br />
          <input
            placeholder="Service Description"
            value={s.desc}
            onChange={(e) =>
              updateService(i, "desc", e.target.value)
            }
          />
          <br />
          <input
            placeholder="Icon key (web / erp / lms)"
            value={s.icon}
            onChange={(e) =>
              updateService(i, "icon", e.target.value)
            }
          />
          <br />
          <button
            style={{ background: "red", color: "#fff", marginTop: 5 }}
            onClick={() => deleteService(i)}
          >
            Delete
          </button>
        </div>
      ))}
      <button onClick={addService}>+ Add Service</button>

      {/* ================= WHY CHOOSE ================= */}
      <h3>Why Choose</h3>
      {data.whyChoose.map((w, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <input
            placeholder="Title"
            value={w.title}
            onChange={(e) =>
              updateWhy(i, "title", e.target.value)
            }
          />
          <br />
          <input
            placeholder="Description"
            value={w.desc}
            onChange={(e) =>
              updateWhy(i, "desc", e.target.value)
            }
          />
          <br />
          <input
            placeholder="Icon key"
            value={w.icon}
            onChange={(e) =>
              updateWhy(i, "icon", e.target.value)
            }
          />
          <br />
          <button
            style={{ background: "red", color: "#fff", marginTop: 5 }}
            onClick={() => deleteWhy(i)}
          >
            Delete
          </button>
        </div>
      ))}
      <button onClick={addWhy}>+ Add Why Choose</button>

      {/* ================= CTA ================= */}
      <h3>CTA</h3>
      <input
        placeholder="CTA Title"
        value={data.ctaTitle}
        onChange={(e) =>
          setData({ ...data, ctaTitle: e.target.value })
        }
      />
      <br />
      <input
        placeholder="CTA Text"
        value={data.ctaText}
        onChange={(e) =>
          setData({ ...data, ctaText: e.target.value })
        }
      />

      <br /><br />
      <button onClick={saveData}>SAVE ALL</button>
    </div>
    </>
  );
}

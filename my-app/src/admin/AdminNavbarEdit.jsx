import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminNavbarEdit.css";
import AdminHeader from "./AdminHeader";

export default function AdminNavbarEdit() {
  const [form, setForm] = useState({
    home: "",
    about: "",
    products: "",
    service: "",
    overview: "",
    contact: "",
    button: "",
  });

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/navbar");
        if (res.data) setForm(res.data);
      } catch (error) {
        console.error("Failed to fetch navbar data:", error);
      }
    };

    fetchNavbar();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const updateNavbar = async () => {
    try {
      await axios.put("http://localhost:5000/api/navbar/update", form);
      alert("Navbar Updated Successfully!");
    } catch (error) {
      console.error("Failed to update navbar:", error);
      alert("Failed to update navbar");
    }
  };

  return (
    <>
      <AdminHeader />

      <div className="admin-edit">
        <h2>Edit Navbar</h2>

        <div className="admin-form">
          <label>Home Text</label>
          <input type="text" name="home" value={form.home} onChange={handleChange} />

          <label>About Text</label>
          <input type="text" name="about" value={form.about} onChange={handleChange} />

          <label>Products Text</label>
          <input type="text" name="products" value={form.products} onChange={handleChange} />

          <label>Service Text</label>
          <input type="text" name="service" value={form.service} onChange={handleChange} />

          <label>Overview</label>
          <input type="text" name="overview" value={form.overview} onChange={handleChange} />

          <label>Contact Text</label>
          <input type="text" name="contact" value={form.contact} onChange={handleChange} />

          <label>Button Text</label>
          <input type="text" name="button" value={form.button} onChange={handleChange} />

          <button className="save-btn" onClick={updateNavbar}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

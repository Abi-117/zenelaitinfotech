import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminNavbarEdit.css"
import AdminHeader from "./AdminHeader";
import "./AdminNavbarEdit.css";

export default function AdminNavbarEdit() {
  const [form, setForm] = useState({
    home: "",
    about: "",
    products: "",
    service: "",
    contact: "",
    overview:"",
    button: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/navbar").then((res) => {
      if (res.data) setForm(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateNavbar = async () => {
    await axios.put("http://localhost:5000/api/navbar/update", form);
    alert("Navbar Updated Successfully!");
  };

  return (
    <>
      <AdminHeader />

      <div className="admin-edit">
        <h2>Edit Navbar</h2>

        <div className="admin-form">
          <label>Home Text</label>
          <input name="home" value={form.home} onChange={handleChange} />

          <label>About Text</label>
          <input name="about" value={form.about} onChange={handleChange} />

          <label>Products Text</label>
          <input name="products" value={form.products} onChange={handleChange} />

          <label>Service Text</label>
          <input name="service" value={form.service} onChange={handleChange} />

          <label>Contact Text</label>
          <input name="contact" value={form.contact} onChange={handleChange} />
          <label>Landing</label>
          <input name="overview" value={form.overview} onChange={handleChange} />

          <label>Button Text</label>
          <input name="button" value={form.button} onChange={handleChange} />

          <button className="save-btn" onClick={updateNavbar}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
